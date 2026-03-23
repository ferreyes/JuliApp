// Coloring engine - 3-layer architecture:
// 1. fillCanvas (bottom): flood fills go here
// 2. canvas (middle): original PNG outline, always pristine
// 3. paintCanvas (top): free paint with finger
//
// The outline image is NEVER modified. Fills happen on a separate layer below.
// This ensures black lines are always preserved.

const Coloring = {
    fillCanvas: null,
    canvas: null,
    paintCanvas: null,
    fillCtx: null,
    ctx: null,
    paintCtx: null,
    mode: 'fill',
    selectedColor: '#FF3B30',
    brushSize: 14,
    isDrawing: false,

    // Undo
    undoStack: [],
    maxUndo: 15,

    // PNG mode
    isPng: false,
    pngImage: null,
    _pngLayout: null,

    // SVG mode
    page: null,
    regionColors: {},
    _svgLayout: null,

    init() {
        this.fillCanvas = document.getElementById('fill-canvas');
        this.canvas = document.getElementById('color-canvas');
        this.paintCanvas = document.getElementById('paint-canvas');
        this.fillCtx = this.fillCanvas.getContext('2d', { willReadFrequently: true });
        this.ctx = this.canvas.getContext('2d');
        this.paintCtx = this.paintCanvas.getContext('2d');
        this.setupEvents();
    },

    resize() {
        const dpr = window.devicePixelRatio || 1;
        const w = window.innerWidth;
        const h = window.innerHeight;
        [this.fillCanvas, this.canvas, this.paintCanvas].forEach(c => {
            c.width = w * dpr;
            c.height = h * dpr;
            c.style.width = w + 'px';
            c.style.height = h + 'px';
        });
        this.fillCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
        this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        this.paintCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    },

    // ===================== START PAGE =====================

    startPng(pageInfo) {
        this.isPng = true;
        this.page = null;
        this.mode = 'fill';
        this.undoStack = [];
        this.resize();
        this.clearAll();
        this.updateModeButtons();
        document.getElementById('screen-color').style.background = '#F5F5F5';

        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
            this.pngImage = img;
            this.drawPngOutline();
            this.buildPalette();
        };
        img.onerror = () => console.warn('Failed to load:', pageInfo.file);
        img.src = 'assets/coloring/' + pageInfo.file;
    },

    startBuiltin(key) {
        this.isPng = false;
        this.pngImage = null;
        this.page = BUILTIN_COLORING[key];
        if (!this.page) return;
        this.regionColors = {};
        this.mode = 'fill';
        this.resize();
        this.clearAll();
        this.updateModeButtons();
        document.getElementById('screen-color').style.background = '#F5F5F5';
        this.drawSvgPage();
        this.buildPalette();
    },

    // ===================== PNG: OUTLINE LAYER =====================

    _calcPngLayout() {
        const w = window.innerWidth;
        const h = window.innerHeight;
        const padding = 80;
        const availW = w - 20;
        const availH = h - padding * 2;
        const imgW = this.pngImage.width;
        const imgH = this.pngImage.height;
        const scale = Math.min(availW / imgW, availH / imgH);
        const drawW = imgW * scale;
        const drawH = imgH * scale;
        const offsetX = (w - drawW) / 2;
        const offsetY = padding + (availH - drawH) / 2;
        this._pngLayout = { offsetX, offsetY, drawW, drawH, scale, imgW, imgH };
        return this._pngLayout;
    },

    drawPngOutline() {
        // Draw the original PNG on the outline canvas (middle layer)
        // This layer is never modified by flood fill
        // IMPORTANT: outline canvas must be transparent except for the black lines
        // so that the fill canvas colors show through from below
        if (!this.pngImage) return;
        const { offsetX, offsetY, drawW, drawH } = this._calcPngLayout();
        const w = window.innerWidth;
        const h = window.innerHeight;
        const dpr = window.devicePixelRatio || 1;

        // Clear outline canvas (transparent)
        this.ctx.clearRect(0, 0, w, h);

        // Draw white background on the FILL canvas (below)
        this.fillCtx.fillStyle = '#FFFFFF';
        this.fillCtx.fillRect(offsetX, offsetY, drawW, drawH);

        // Draw the image onto a temp canvas to extract only the dark lines
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = Math.round(drawW * dpr);
        tempCanvas.height = Math.round(drawH * dpr);
        const tempCtx = tempCanvas.getContext('2d');
        tempCtx.drawImage(this.pngImage, 0, 0, tempCanvas.width, tempCanvas.height);

        // Process pixels: make white pixels transparent, keep dark pixels
        const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
        const data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
            const r = data[i], g = data[i + 1], b = data[i + 2];
            // If pixel is light (close to white), make it transparent
            if (r > 200 && g > 200 && b > 200) {
                data[i + 3] = 0; // fully transparent
            }
            // Gray pixels (anti-aliasing) get partial transparency
            else if (r > 120 && g > 120 && b > 120) {
                const darkness = 1 - (r + g + b) / (3 * 255);
                data[i] = 0; data[i + 1] = 0; data[i + 2] = 0;
                data[i + 3] = Math.round(darkness * 255 * 2.5);
            }
            // Dark pixels stay fully opaque black
            else {
                data[i] = 0; data[i + 1] = 0; data[i + 2] = 0;
                data[i + 3] = 255;
            }
        }
        tempCtx.putImageData(imageData, 0, 0);

        // Draw processed outline onto the outline canvas
        this.ctx.drawImage(tempCanvas, offsetX, offsetY, drawW, drawH);
    },

    // ===================== PNG: FLOOD FILL ON FILL LAYER =====================

    floodFillAtPoint(clientX, clientY) {
        if (!this.pngImage || !this._pngLayout) return;

        const dpr = window.devicePixelRatio || 1;
        const { offsetX, offsetY, drawW, drawH } = this._pngLayout;

        // Check if click is within the image area
        if (clientX < offsetX || clientX > offsetX + drawW ||
            clientY < offsetY || clientY > offsetY + drawH) return;

        // We need to read from a composite of fill + outline to know what color is at the point
        // Create a temp canvas that composites fill layer + outline layer
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = this.canvas.width;
        tempCanvas.height = this.canvas.height;
        const tempCtx = tempCanvas.getContext('2d', { willReadFrequently: true });

        // Draw fill layer first, then outline on top
        tempCtx.drawImage(this.fillCanvas, 0, 0);
        tempCtx.drawImage(this.canvas, 0, 0);

        const canvasW = tempCanvas.width;
        const canvasH = tempCanvas.height;
        const px = Math.round(clientX * dpr);
        const py = Math.round(clientY * dpr);

        if (px < 0 || px >= canvasW || py < 0 || py >= canvasH) return;

        // Read from composite
        const compositeData = tempCtx.getImageData(0, 0, canvasW, canvasH);
        const cData = compositeData.data;

        const idx = (py * canvasW + px) * 4;
        const targetR = cData[idx];
        const targetG = cData[idx + 1];
        const targetB = cData[idx + 2];
        const targetA = cData[idx + 3];

        // Don't fill on black outlines
        if (targetR < 60 && targetG < 60 && targetB < 60 && targetA > 180) return;

        const fill = this._hexToRgb(this.selectedColor);
        if (!fill) return;

        // Don't fill if same color
        if (Math.abs(targetR - fill.r) < 15 &&
            Math.abs(targetG - fill.g) < 15 &&
            Math.abs(targetB - fill.b) < 15) return;

        // Save state for undo before filling
        this.pushUndo();

        // Now do flood fill on the FILL canvas layer only
        // But we use the composite to determine boundaries (so outlines block the fill)
        this.fillCtx.save();
        this.fillCtx.setTransform(1, 0, 0, 1, 0, 0);

        const fillImageData = this.fillCtx.getImageData(0, 0, canvasW, canvasH);
        const fData = fillImageData.data;

        const tolerance = 42;
        const visited = new Uint8Array(canvasW * canvasH);
        const stack = [[px, py]];

        while (stack.length > 0) {
            const [cx, cy] = stack.pop();
            if (cx < 0 || cx >= canvasW || cy < 0 || cy >= canvasH) continue;
            const vi = cy * canvasW + cx;
            if (visited[vi]) continue;

            // Check boundary on COMPOSITE (includes outlines)
            const ci = vi * 4;
            if (!this._matchColor(cData, ci, targetR, targetG, targetB, targetA, tolerance)) continue;

            // Scanline left
            let left = cx;
            while (left > 0) {
                const li = (cy * canvasW + (left - 1)) * 4;
                if (!this._matchColor(cData, li, targetR, targetG, targetB, targetA, tolerance)) break;
                left--;
            }

            // Scanline right
            let right = cx;
            while (right < canvasW - 1) {
                const ri = (cy * canvasW + (right + 1)) * 4;
                if (!this._matchColor(cData, ri, targetR, targetG, targetB, targetA, tolerance)) break;
                right++;
            }

            // Fill on the FILL layer
            for (let i = left; i <= right; i++) {
                const fi = (cy * canvasW + i) * 4;
                fData[fi] = fill.r;
                fData[fi + 1] = fill.g;
                fData[fi + 2] = fill.b;
                fData[fi + 3] = 255;
                visited[cy * canvasW + i] = 1;

                if (cy > 0 && !visited[(cy - 1) * canvasW + i]) stack.push([i, cy - 1]);
                if (cy < canvasH - 1 && !visited[(cy + 1) * canvasW + i]) stack.push([i, cy + 1]);
            }
        }

        this.fillCtx.putImageData(fillImageData, 0, 0);
        this.fillCtx.restore();
        this.fillCtx.setTransform(dpr, 0, 0, dpr, 0, 0);

        Sounds.play('pop');
    },

    _matchColor(data, idx, r, g, b, a, tol) {
        return Math.abs(data[idx] - r) <= tol &&
               Math.abs(data[idx + 1] - g) <= tol &&
               Math.abs(data[idx + 2] - b) <= tol &&
               Math.abs(data[idx + 3] - a) <= tol;
    },

    _hexToRgb(hex) {
        const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return r ? { r: parseInt(r[1], 16), g: parseInt(r[2], 16), b: parseInt(r[3], 16) } : null;
    },

    // ===================== SVG BUILTIN =====================

    drawSvgPage() {
        if (!this.page) return;
        const ctx = this.ctx;
        const w = window.innerWidth;
        const h = window.innerHeight;
        const pw = this.page.width;
        const ph = this.page.height;
        const padding = 80;
        const availH = h - padding * 2;
        const availW = w - 20;
        const scale = Math.min(availW / pw, availH / ph);
        const offsetX = (w - pw * scale) / 2;
        const offsetY = padding + (availH - ph * scale) / 2;

        ctx.clearRect(0, 0, w, h);
        ctx.save();
        ctx.translate(offsetX, offsetY);
        ctx.scale(scale, scale);

        this.page.regions.forEach(region => {
            const path = new Path2D(region.path);
            const color = this.regionColors[region.id];
            if (color) {
                ctx.fillStyle = color;
                ctx.fill(path);
            }
        });

        this.page.regions.forEach(region => {
            const path = new Path2D(region.path);
            ctx.strokeStyle = '#333';
            ctx.lineWidth = 2.5;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.stroke(path);
        });

        ctx.restore();
        this._svgLayout = { offsetX, offsetY, scale };
    },

    fillSvgAtPoint(clientX, clientY) {
        if (!this.page || !this._svgLayout) return;
        const { offsetX, offsetY, scale } = this._svgLayout;
        const tx = (clientX - offsetX) / scale;
        const ty = (clientY - offsetY) / scale;

        for (let i = this.page.regions.length - 1; i >= 0; i--) {
            const region = this.page.regions[i];
            const path = new Path2D(region.path);
            this.ctx.save();
            this.ctx.setTransform(1, 0, 0, 1, 0, 0);
            const hit = this.ctx.isPointInPath(path, tx, ty);
            this.ctx.restore();
            const dpr = window.devicePixelRatio || 1;
            this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            if (hit) {
                this.pushUndo();
                this.regionColors[region.id] = this.selectedColor;
                this.drawSvgPage();
                Sounds.play('pop');
                return;
            }
        }
    },

    // ===================== PAINT MODE =====================

    startPaint(x, y) {
        this.isDrawing = true;
        this.paintCtx.strokeStyle = this.selectedColor;
        this.paintCtx.lineWidth = this.brushSize;
        this.paintCtx.lineCap = 'round';
        this.paintCtx.lineJoin = 'round';
        this.paintCtx.globalAlpha = 0.8;
        this.paintCtx.beginPath();
        this.paintCtx.moveTo(x, y);
    },

    movePaint(x, y) {
        if (!this.isDrawing) return;
        this.paintCtx.lineTo(x, y);
        this.paintCtx.stroke();
        this.paintCtx.beginPath();
        this.paintCtx.moveTo(x, y);
    },

    endPaint() {
        this.isDrawing = false;
        this.paintCtx.globalAlpha = 1;
    },

    // ===================== CLEAR =====================

    _clearCanvas(canvas, ctx) {
        const dpr = window.devicePixelRatio || 1;
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.restore();
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    },

    clearAll() {
        this._clearCanvas(this.fillCanvas, this.fillCtx);
        this._clearCanvas(this.canvas, this.ctx);
        this._clearCanvas(this.paintCanvas, this.paintCtx);
    },

    resetColors() {
        this.regionColors = {};
        this._clearCanvas(this.fillCanvas, this.fillCtx);
        this._clearCanvas(this.paintCanvas, this.paintCtx);
        if (this.isPng) {
            this.drawPngOutline();
        } else {
            this.drawSvgPage();
        }
    },

    // ===================== UI =====================

    buildPalette() {
        const container = document.getElementById('color-palette-dots');
        container.innerHTML = '';
        const colors = [
            // Rojos (6)
            '#FF0000', '#FF3B30', '#FF6B6B', '#EF9A9A', '#CC0000', '#B71C1C',
            // Naranjas (5)
            '#FF9500', '#FFB74D', '#FF5722', '#FF8A65', '#E65100',
            // Amarillos (5)
            '#FFEB3B', '#FDD835', '#FFF176', '#FFD600', '#FFC107',
            // Lima (3)
            '#CDDC39', '#C0CA33', '#AFB42B',
            // Verdes (6)
            '#8BC34A', '#4CAF50', '#66BB6A', '#00E676', '#2E7D32', '#1B5E20',
            // Cyan / Turquesa (4)
            '#00BCD4', '#80DEEA', '#00ACC1', '#009688',
            // Azules claros (4)
            '#03A9F4', '#64B5F6', '#81D4FA', '#29B6F6',
            // Azules (5)
            '#2196F3', '#1976D2', '#1565C0', '#82B1FF', '#0D47A1',
            // Indigo (3)
            '#3F51B5', '#5C6BC0', '#1A237E',
            // Morados (5)
            '#9C27B0', '#BA68C8', '#7B1FA2', '#CE93D8', '#4A148C',
            // Rosas (5)
            '#E91E63', '#FF69B4', '#F48FB1', '#FF80AB', '#AD1457',
            // Piel / Durazno (4)
            '#FFCC80', '#FFE0B2', '#FFAB91', '#FFCCBC',
            // Marrones (4)
            '#795548', '#A1887F', '#5D4037', '#3E2723',
            // Grises (5)
            '#212121', '#616161', '#9E9E9E', '#BDBDBD', '#E0E0E0',
            // Blanco
            '#FFFFFF',
        ];
        colors.forEach(color => {
            const pencil = document.createElement('button');
            pencil.className = 'color-pencil' + (color === this.selectedColor ? ' active' : '');

            // Color tip (small triangle at very top)
            const colorTip = document.createElement('div');
            colorTip.className = 'pencil-color-tip';
            colorTip.style.borderBottomColor = color === '#FFFFFF' ? '#ccc' : color;

            // Wood cone
            const wood = document.createElement('div');
            wood.className = 'pencil-wood';

            // Scalloped edge
            const scallop = document.createElement('div');
            scallop.className = 'pencil-scallop';
            scallop.style.color = color === '#FFFFFF' ? '#e0e0e0' : color;

            // Body
            const body = document.createElement('div');
            body.className = 'pencil-body';
            body.style.background = color;
            if (color === '#FFFFFF') body.style.boxShadow = 'inset 0 0 0 1px #ccc';

            pencil.appendChild(colorTip);
            pencil.appendChild(wood);
            pencil.appendChild(scallop);
            pencil.appendChild(body);

            pencil.addEventListener('click', () => {
                container.querySelectorAll('.color-pencil').forEach(p => p.classList.remove('active'));
                pencil.classList.add('active');
                this.selectedColor = color;
                Sounds.play('click');
                // Scroll to center the selected pencil
                pencil.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            });
            container.appendChild(pencil);
        });
    },

    updateModeButtons() {
        const fillBtn = document.getElementById('mode-fill');
        const paintBtn = document.getElementById('mode-paint');
        if (fillBtn) fillBtn.classList.toggle('active', this.mode === 'fill');
        if (paintBtn) paintBtn.classList.toggle('active', this.mode === 'paint');
        this.paintCanvas.style.pointerEvents = this.mode === 'paint' ? 'auto' : 'none';
        this.paintCanvas.style.zIndex = this.mode === 'paint' ? '5' : '3';
    },

    // ===================== UNDO =====================

    pushUndo() {
        // Save snapshot of fill canvas
        const dataURL = this.fillCanvas.toDataURL('image/png');
        this.undoStack.push(dataURL);
        if (this.undoStack.length > this.maxUndo) this.undoStack.shift();
    },

    undo() {
        if (this.undoStack.length === 0) return;
        const dataURL = this.undoStack.pop();
        const img = new Image();
        img.onload = () => {
            const dpr = window.devicePixelRatio || 1;
            this.fillCtx.save();
            this.fillCtx.setTransform(1, 0, 0, 1, 0, 0);
            this.fillCtx.clearRect(0, 0, this.fillCanvas.width, this.fillCanvas.height);
            this.fillCtx.drawImage(img, 0, 0);
            this.fillCtx.restore();
            this.fillCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };
        img.src = dataURL;
        Sounds.play('click');
    },

    // ===================== CAPTURE IMAGE =====================

    captureImage() {
        // Composite all 3 layers into one image
        const dpr = window.devicePixelRatio || 1;
        const w = this.canvas.width;
        const h = this.canvas.height;
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = w;
        tempCanvas.height = h;
        const tempCtx = tempCanvas.getContext('2d');

        // White background
        tempCtx.fillStyle = '#FFFFFF';
        tempCtx.fillRect(0, 0, w, h);

        // Layer 1: fills
        tempCtx.drawImage(this.fillCanvas, 0, 0);
        // Layer 2: paint strokes
        tempCtx.drawImage(this.paintCanvas, 0, 0);
        // Layer 3: outlines on top
        tempCtx.drawImage(this.canvas, 0, 0);

        return tempCanvas.toDataURL('image/png');
    },

    saveToGallery(name) {
        const dataURL = this.captureImage();
        Storage.save(dataURL, name);
        this.showToast('Guardado!');
        Sounds.play('fanfare');
    },

    downloadImage(name) {
        const dataURL = this.captureImage();
        const link = document.createElement('a');
        link.download = (name || 'dibujo') + '-' + new Date().toISOString().slice(0, 10) + '.png';
        link.href = dataURL;
        link.click();
        this.showToast('Descargado!');
        Sounds.play('pop');
    },

    showToast(text) {
        let toast = document.querySelector('.save-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.className = 'save-toast';
            document.body.appendChild(toast);
        }
        toast.textContent = text;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 1500);
    },

    // ===================== EVENTS =====================

    setupEvents() {
        // Fill mode - tap on outline canvas
        this.canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            if (this.mode !== 'fill') return;
            const t = e.touches[0];
            if (t.clientY < 70 || t.clientY > window.innerHeight - 90) return;
            this._handleFillTap(t.clientX, t.clientY);
        }, { passive: false });

        this.canvas.addEventListener('click', (e) => {
            if (this.mode !== 'fill') return;
            if (e.clientY < 70 || e.clientY > window.innerHeight - 90) return;
            this._handleFillTap(e.clientX, e.clientY);
        });

        // Paint mode
        this.paintCanvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            if (this.mode !== 'paint') return;
            const t = e.touches[0];
            if (t.clientY < 70 || t.clientY > window.innerHeight - 90) return;
            const rect = this.paintCanvas.getBoundingClientRect();
            this.startPaint(t.clientX - rect.left, t.clientY - rect.top);
        }, { passive: false });

        this.paintCanvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            if (!this.isDrawing) return;
            const t = e.touches[0];
            const rect = this.paintCanvas.getBoundingClientRect();
            this.movePaint(t.clientX - rect.left, t.clientY - rect.top);
        }, { passive: false });

        this.paintCanvas.addEventListener('touchend', (e) => {
            e.preventDefault();
            this.endPaint();
        }, { passive: false });

        this.paintCanvas.addEventListener('mousedown', (e) => {
            if (this.mode !== 'paint') return;
            const rect = this.paintCanvas.getBoundingClientRect();
            this.startPaint(e.clientX - rect.left, e.clientY - rect.top);
        });
        this.paintCanvas.addEventListener('mousemove', (e) => {
            if (!this.isDrawing) return;
            const rect = this.paintCanvas.getBoundingClientRect();
            this.movePaint(e.clientX - rect.left, e.clientY - rect.top);
        });
        this.paintCanvas.addEventListener('mouseup', () => this.endPaint());
        this.paintCanvas.addEventListener('mouseleave', () => this.endPaint());
    },

    _handleFillTap(clientX, clientY) {
        if (this.isPng) {
            this.floodFillAtPoint(clientX, clientY);
        } else {
            this.fillSvgAtPoint(clientX, clientY);
        }
    },
};
