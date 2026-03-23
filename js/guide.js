// Guided drawing engine - shows dotted paths for kids to trace

const Guide = {
    guideCanvas: null,
    drawCanvas: null,
    guideCtx: null,
    drawCtx: null,
    template: null,
    currentStep: 0,
    isDrawing: false,
    currentPoints: [],
    traceProgress: 0,
    stepTargetPoints: [],

    init() {
        this.guideCanvas = document.getElementById('guide-canvas');
        this.drawCanvas = document.getElementById('draw-canvas');
        this.guideCtx = this.guideCanvas.getContext('2d');
        this.drawCtx = this.drawCanvas.getContext('2d');
        this.setupEvents();
    },

    resize() {
        const dpr = window.devicePixelRatio || 1;
        const w = window.innerWidth;
        const h = window.innerHeight;

        [this.guideCanvas, this.drawCanvas].forEach(c => {
            c.width = w * dpr;
            c.height = h * dpr;
            c.style.width = w + 'px';
            c.style.height = h + 'px';
        });

        this.guideCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
        this.drawCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    },

    // Scale template coordinates (400x400) to screen
    scalePoint(p) {
        const w = window.innerWidth;
        const h = window.innerHeight;
        const scale = Math.min(w, h) / 420;
        const offsetX = (w - 400 * scale) / 2;
        const offsetY = (h - 400 * scale) / 2;
        return {
            x: p.x * scale + offsetX,
            y: p.y * scale + offsetY
        };
    },

    startTemplate(templateKey) {
        this.template = TEMPLATES[templateKey];
        if (!this.template) return;

        this.currentStep = 0;
        this.resize();
        document.getElementById('screen-draw').style.background = this.template.bgColor || '#FFF9E6';

        // Clear both canvases
        this.guideCtx.clearRect(0, 0, this.guideCanvas.width, this.guideCanvas.height);
        this.drawCtx.clearRect(0, 0, this.drawCanvas.width, this.drawCanvas.height);

        // Build step indicators
        this.buildStepIndicators();

        // Build color dots
        this.buildColorDots();

        // Show first step
        this.showStep(0);
    },

    buildStepIndicators() {
        const container = document.getElementById('step-indicators');
        container.innerHTML = '';
        const totalSteps = this.template.steps.length;
        // Limit visible dots for many steps
        const maxDots = Math.min(totalSteps, 12);

        for (let i = 0; i < maxDots; i++) {
            const dot = document.createElement('div');
            dot.className = 'step-dot' + (i === 0 ? ' current' : '');
            container.appendChild(dot);
        }
    },

    updateStepIndicators() {
        const dots = document.querySelectorAll('.step-dot');
        dots.forEach((dot, i) => {
            dot.classList.remove('current', 'done');
            if (i < this.currentStep) dot.classList.add('done');
            if (i === this.currentStep) dot.classList.add('current');
        });
    },

    buildColorDots() {
        const container = document.getElementById('color-dots');
        container.innerHTML = '';
        // Show colors used in this template
        const usedColors = new Set();
        this.template.steps.forEach(s => usedColors.add(s.color));

        // Also add some fun extra colors
        const extras = ['#FF3B30', '#FF9500', '#FFEB3B', '#4CAF50', '#2196F3', '#9C27B0', '#FF69B4'];
        extras.forEach(c => usedColors.add(c));

        const colors = [...usedColors].slice(0, 10);
        colors.forEach(color => {
            const dot = document.createElement('button');
            dot.className = 'color-dot';
            dot.style.background = color;
            if (color === '#FFFFFF') {
                dot.style.boxShadow = 'inset 0 0 0 2px #ddd';
            }
            dot.addEventListener('click', () => {
                // Color selection doesn't change guided color, but shows feedback
                document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
                dot.classList.add('active');
                Sounds.play('click');
            });
            container.appendChild(dot);
        });
    },

    showStep(index) {
        if (!this.template || index >= this.template.steps.length) {
            this.completeDrawing();
            return;
        }

        this.currentStep = index;
        this.traceProgress = 0;
        this.currentPoints = [];
        this.updateStepIndicators();

        const step = this.template.steps[index];

        // Scale points
        this.stepTargetPoints = step.points.map(p => this.scalePoint(p));

        // Clear guide canvas and draw dotted path
        this.guideCtx.clearRect(0, 0, this.guideCanvas.width, this.guideCanvas.height);

        // Draw previously completed steps (faded) on guide canvas
        for (let i = 0; i < index; i++) {
            this.drawCompletedStep(this.guideCtx, this.template.steps[i], 0.3);
        }

        // Draw current step's dotted guide
        this.drawDottedPath(this.stepTargetPoints, step.color, step.lineWidth || 6);

        // Animate first point as hint
        this.showTraceHint();
    },

    drawDottedPath(points, color, lineWidth) {
        if (points.length < 2) return;

        const ctx = this.guideCtx;
        ctx.save();
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth + 2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.globalAlpha = 0.35;
        ctx.setLineDash([12, 12]);

        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
            ctx.lineTo(points[i].x, points[i].y);
        }
        ctx.stroke();
        ctx.setLineDash([]);

        // Draw start point indicator (big circle)
        ctx.globalAlpha = 0.6;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(points[0].x, points[0].y, lineWidth + 8, 0, Math.PI * 2);
        ctx.fill();

        // Inner white circle
        ctx.globalAlpha = 0.9;
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(points[0].x, points[0].y, lineWidth + 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    },

    drawCompletedStep(ctx, step, alpha) {
        const points = step.points.map(p => this.scalePoint(p));
        if (points.length < 2) return;

        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.strokeStyle = step.color;
        ctx.fillStyle = step.fill || step.color;
        ctx.lineWidth = step.lineWidth || 6;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
            ctx.lineTo(points[i].x, points[i].y);
        }
        if (step.closed) ctx.closePath();
        if (step.fill) ctx.fill();
        ctx.stroke();
        ctx.restore();
    },

    showTraceHint() {
        // Pulsing circle at start point
        if (this.stepTargetPoints.length > 0) {
            const p = this.stepTargetPoints[0];
            const hint = document.getElementById('step-hint');
            hint.style.left = p.x + 'px';
            hint.style.top = p.y + 'px';
            hint.style.transform = 'translate(-50%, -50%)';
            hint.innerHTML = `<div style="width:50px;height:50px;border-radius:50%;border:4px solid ${this.template.steps[this.currentStep].color};animation:pulse-hint 1.5s ease-in-out infinite;opacity:0.6"></div>`;
            hint.classList.remove('hidden');

            // Hide hint after drawing starts
            this._hintTimeout = setTimeout(() => {
                hint.classList.add('hidden');
            }, 3000);
        }
    },

    setupEvents() {
        const canvas = this.drawCanvas;

        // Touch events
        canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            if (e.touches.length > 1) return;
            const touch = e.touches[0];
            // Don't draw in UI areas
            if (touch.clientY < 70 || touch.clientY > window.innerHeight - 85) return;
            const point = getTouchPos(canvas, touch);
            this.startDraw(point);
        }, { passive: false });

        canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            if (!this.isDrawing) return;
            const touch = e.touches[0];
            const point = getTouchPos(canvas, touch);
            this.moveDraw(point);
        }, { passive: false });

        canvas.addEventListener('touchend', (e) => {
            e.preventDefault();
            this.endDraw();
        }, { passive: false });

        canvas.addEventListener('touchcancel', (e) => {
            e.preventDefault();
            this.endDraw();
        }, { passive: false });

        // Mouse events for desktop testing
        canvas.addEventListener('mousedown', (e) => {
            if (e.clientY < 70 || e.clientY > window.innerHeight - 85) return;
            const point = getMousePos(canvas, e);
            this.startDraw(point);
        });

        canvas.addEventListener('mousemove', (e) => {
            if (!this.isDrawing) return;
            const point = getMousePos(canvas, e);
            this.moveDraw(point);
        });

        canvas.addEventListener('mouseup', () => this.endDraw());
        canvas.addEventListener('mouseleave', () => this.endDraw());
    },

    startDraw(point) {
        if (!this.template) return;
        this.isDrawing = true;
        this.currentPoints = [point];

        // Hide hint
        document.getElementById('step-hint').classList.add('hidden');
        if (this._hintTimeout) clearTimeout(this._hintTimeout);

        const step = this.template.steps[this.currentStep];
        const ctx = this.drawCtx;
        ctx.strokeStyle = step.color;
        ctx.lineWidth = step.lineWidth || 6;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.globalAlpha = 0.85;
        ctx.beginPath();
        ctx.moveTo(point.x, point.y);
    },

    moveDraw(point) {
        if (!this.isDrawing) return;
        this.currentPoints.push(point);

        const step = this.template.steps[this.currentStep];
        const ctx = this.drawCtx;

        // Draw smooth line
        const len = this.currentPoints.length;
        if (len >= 3) {
            const p0 = this.currentPoints[len - 3];
            const p1 = this.currentPoints[len - 2];
            const p2 = this.currentPoints[len - 1];
            const mid1 = midpoint(p0, p1);
            const mid2 = midpoint(p1, p2);
            ctx.beginPath();
            ctx.moveTo(mid1.x, mid1.y);
            ctx.quadraticCurveTo(p1.x, p1.y, mid2.x, mid2.y);
            ctx.stroke();
        } else {
            ctx.lineTo(point.x, point.y);
            ctx.stroke();
        }

        // Check trace progress
        this.checkTraceProgress(point);
    },

    endDraw() {
        if (!this.isDrawing) return;
        this.isDrawing = false;

        const ctx = this.drawCtx;
        ctx.globalAlpha = 1;

        // Check if step is close enough to complete
        if (this.traceProgress > 0.45) {
            this.completeStep();
        }
    },

    checkTraceProgress(point) {
        // Check how many target points the user has passed near
        const threshold = 40 * (window.innerWidth / 400); // Scale threshold
        let nearCount = 0;

        for (const tp of this.stepTargetPoints) {
            if (this.currentPoints.some(cp => dist(cp, tp) < threshold)) {
                nearCount++;
            }
        }

        this.traceProgress = nearCount / this.stepTargetPoints.length;
    },

    completeStep() {
        const step = this.template.steps[this.currentStep];

        // Clear the user's messy drawing for this step
        this.drawCtx.clearRect(0, 0, this.drawCanvas.width, this.drawCanvas.height);

        // Redraw ALL completed steps (including this one) cleanly on draw canvas
        for (let i = 0; i <= this.currentStep; i++) {
            this.drawCompletedStep(this.drawCtx, this.template.steps[i], 1.0);
        }

        Sounds.play('pop');

        // Move to next step
        this.currentStep++;

        if (this.currentStep >= this.template.steps.length) {
            // All done!
            setTimeout(() => this.completeDrawing(), 600);
        } else {
            // Show next step after brief delay
            setTimeout(() => {
                this.showStep(this.currentStep);
            }, 500);
        }
    },

    completeDrawing() {
        Sounds.play('fanfare');

        // Render final result to result canvas
        const resultCanvas = document.getElementById('result-canvas');
        const dpr = window.devicePixelRatio || 1;
        resultCanvas.width = 640;
        resultCanvas.height = 640;
        const rCtx = resultCanvas.getContext('2d');

        // Fill background
        rCtx.fillStyle = this.template.bgColor || '#FFFFFF';
        rCtx.fillRect(0, 0, 640, 640);

        // Draw all steps scaled to 640x640
        const origScale = Math.min(window.innerWidth, window.innerHeight) / 420;
        const resultScale = 640 / 420;

        this.template.steps.forEach(step => {
            const points = step.points.map(p => ({
                x: p.x * resultScale + (640 - 400 * resultScale) / 2,
                y: p.y * resultScale + (640 - 400 * resultScale) / 2,
            }));

            rCtx.save();
            rCtx.strokeStyle = step.color;
            rCtx.fillStyle = step.fill || step.color;
            rCtx.lineWidth = (step.lineWidth || 6) * (resultScale / origScale);
            rCtx.lineCap = 'round';
            rCtx.lineJoin = 'round';

            rCtx.beginPath();
            rCtx.moveTo(points[0].x, points[0].y);
            for (let i = 1; i < points.length; i++) {
                rCtx.lineTo(points[i].x, points[i].y);
            }
            if (step.closed) rCtx.closePath();
            if (step.fill) rCtx.fill();
            rCtx.stroke();
            rCtx.restore();
        });

        // Show done screen with confetti
        App.showScreen('done');
        this.spawnConfetti();
    },

    spawnConfetti() {
        const colors = ['#FF3B30', '#FF9500', '#FFEB3B', '#4CAF50', '#2196F3', '#9C27B0', '#FF69B4', '#FFD700'];
        for (let i = 0; i < 40; i++) {
            setTimeout(() => {
                const piece = document.createElement('div');
                piece.className = 'confetti-piece';
                piece.style.left = Math.random() * 100 + '%';
                piece.style.top = '-10px';
                piece.style.background = colors[Math.floor(Math.random() * colors.length)];
                piece.style.width = (6 + Math.random() * 8) + 'px';
                piece.style.height = (6 + Math.random() * 8) + 'px';
                piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
                piece.style.animationDuration = (1.5 + Math.random() * 1.5) + 's';
                document.body.appendChild(piece);
                setTimeout(() => piece.remove(), 3000);
            }, i * 50);
        }
    },

    undo() {
        if (this.currentStep > 0) {
            this.currentStep--;
            // Redraw everything up to current step
            this.drawCtx.clearRect(0, 0, this.drawCanvas.width, this.drawCanvas.height);
            for (let i = 0; i < this.currentStep; i++) {
                this.drawCompletedStep(this.drawCtx, this.template.steps[i], 1.0);
            }
            this.showStep(this.currentStep);
            Sounds.play('click');
        }
    }
};
