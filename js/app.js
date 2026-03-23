// App initialization and screen management

const App = {
    currentScreen: 'menu',
    currentTemplate: null,
    currentColorPage: null,

    init() {
        Sounds.init();
        Guide.init();
        Coloring.init();
        Storage.init();
        this.buildMenu();
        this.setupButtons();
        window.addEventListener('resize', () => {
            if (this.currentScreen === 'draw') Guide.resize();
            if (this.currentScreen === 'color') {
                Coloring.resize();
                Coloring.drawPage();
            }
        });

        // Prevent default touch behaviors
        document.addEventListener('gesturestart', (e) => e.preventDefault());
        document.addEventListener('gesturechange', (e) => e.preventDefault());
        document.addEventListener('gestureend', (e) => e.preventDefault());

        // Prevent zoom on double-tap
        let lastTouchEnd = 0;
        document.addEventListener('touchend', (e) => {
            const now = Date.now();
            if (now - lastTouchEnd < 300) e.preventDefault();
            lastTouchEnd = now;
        }, { passive: false });

        // Register service worker
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('sw.js').catch(() => {});
        }
    },

    buildMenu() {
        // 3 main section buttons
        document.getElementById('sec-colorear').addEventListener('click', () => {
            this.showList('colorear');
            Sounds.play('pop');
        });
        document.getElementById('sec-trazar').addEventListener('click', () => {
            this.showList('trazar');
            Sounds.play('pop');
        });
        document.getElementById('sec-galeria').addEventListener('click', () => {
            this.showGallery();
            Sounds.play('pop');
        });
    },

    // Show list screen with category tabs and drawing grid
    showList(mode) {
        this._listMode = mode;
        this.showScreen('list');

        document.getElementById('list-title').textContent = mode === 'colorear' ? 'Colorear' : 'Trazar';

        // Build category tabs
        const tabContainer = document.getElementById('list-tabs');
        tabContainer.innerHTML = '';

        if (mode === 'colorear') {
            // Get unique categories from PNG pages
            const cats = new Set();
            COLORING_PAGES.forEach(p => { if (p.category) cats.add(p.category); });

            const allTab = this._createTab('Todos', null);
            allTab.classList.add('active');
            tabContainer.appendChild(allTab);
            cats.forEach(cat => tabContainer.appendChild(this._createTab(cat, cat)));
        } else {
            // Trazar categories
            const allTab = this._createTab('Todos', null);
            allTab.classList.add('active');
            tabContainer.appendChild(allTab);
            for (const [key, cat] of Object.entries(CATEGORIES)) {
                tabContainer.appendChild(this._createTab(cat.label, key));
            }
        }

        this.populateGrid(null);
    },

    _createTab(label, category) {
        const tab = document.createElement('button');
        tab.className = 'cat-tab';
        tab.textContent = label;
        tab.addEventListener('click', () => {
            document.querySelectorAll('#list-tabs .cat-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            this.populateGrid(category);
            Sounds.play('click');
        });
        return tab;
    },

    populateGrid(category) {
        const grid = document.getElementById('list-grid');
        grid.innerHTML = '';

        if (this._listMode === 'colorear') {
            // PNG coloring pages
            COLORING_PAGES.forEach(page => {
                if (category && page.category !== category) return;
                const card = document.createElement('button');
                card.className = 'drawing-card coloring-card';
                card.innerHTML =
                    `<img src="assets/coloring/${page.file}" alt="${page.name}" onerror="this.parentElement.style.display='none'">` +
                    `<div class="card-label">${page.name}</div>`;
                card.addEventListener('click', () => {
                    this.startColoringPng(page);
                    Sounds.play('pop');
                });
                grid.appendChild(card);
            });

            // Built-in SVG coloring (only in "Todos")
            if (!category) {
                for (const [key, page] of Object.entries(BUILTIN_COLORING)) {
                    const card = document.createElement('button');
                    card.className = 'drawing-card coloring-card';
                    card.innerHTML = page.preview + `<div class="card-label">${page.name}</div>`;
                    card.addEventListener('click', () => {
                        this.startColoringBuiltin(key);
                        Sounds.play('pop');
                    });
                    grid.appendChild(card);
                }
            }
        } else {
            // Guided drawing templates
            for (const [key, tmpl] of Object.entries(TEMPLATES)) {
                if (category && tmpl.category !== category) continue;
                const card = document.createElement('button');
                card.className = 'drawing-card';
                card.innerHTML = tmpl.preview + `<div class="card-label">${tmpl.name}</div>`;
                card.addEventListener('click', () => {
                    this.startDrawing(key);
                    Sounds.play('pop');
                });
                grid.appendChild(card);
            }
        }
    },

    startDrawing(templateKey) {
        this.currentTemplate = templateKey;
        this.showScreen('draw');
        setTimeout(() => Guide.startTemplate(templateKey), 100);
    },

    startColoringPng(pageInfo) {
        this.currentColorPage = pageInfo;
        this.showScreen('color');
        setTimeout(() => Coloring.startPng(pageInfo), 100);
    },

    startColoringBuiltin(key) {
        this.currentColorPage = key;
        this.showScreen('color');
        setTimeout(() => Coloring.startBuiltin(key), 100);
    },

    showScreen(name) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById('screen-' + name).classList.add('active');
        this.currentScreen = name;
    },

    setupButtons() {
        // Guide screen buttons
        document.getElementById('btn-back').addEventListener('click', () => {
            this.showScreen('menu');
            Sounds.play('click');
        });

        document.getElementById('btn-undo').addEventListener('click', () => {
            Guide.undo();
        });

        document.getElementById('btn-replay').addEventListener('click', () => {
            if (this.currentTemplate) {
                this.startDrawing(this.currentTemplate);
                Sounds.play('pop');
            }
        });

        document.getElementById('btn-menu').addEventListener('click', () => {
            this.showScreen('menu');
            Sounds.play('click');
        });

        // Coloring screen buttons
        document.getElementById('color-btn-back').addEventListener('click', () => {
            this.showScreen('menu');
            Sounds.play('click');
        });

        document.getElementById('color-btn-clear').addEventListener('click', () => {
            Coloring.resetColors();
            Sounds.play('click');
        });

        document.getElementById('color-btn-save').addEventListener('click', () => {
            const name = typeof this.currentColorPage === 'object' ? this.currentColorPage.name : 'Dibujo';
            Coloring.saveToGallery(name);
        });

        document.getElementById('color-btn-download').addEventListener('click', () => {
            const name = typeof this.currentColorPage === 'object' ? this.currentColorPage.name : 'dibujo';
            Coloring.downloadImage(name);
        });

        document.getElementById('color-btn-undo').addEventListener('click', () => {
            Coloring.undo();
        });

        document.getElementById('mode-fill').addEventListener('click', () => {
            Coloring.mode = 'fill';
            Coloring.updateModeButtons();
            Sounds.play('click');
        });

        document.getElementById('mode-paint').addEventListener('click', () => {
            Coloring.mode = 'paint';
            Coloring.updateModeButtons();
            Sounds.play('click');
        });

        // List screen back
        document.getElementById('list-back').addEventListener('click', () => {
            this.showScreen('menu');
            Sounds.play('click');
        });

        // Gallery back
        document.getElementById('gallery-back').addEventListener('click', () => {
            this.showScreen('menu');
            Sounds.play('click');
        });
    },

    async showGallery() {
        this.showScreen('gallery');
        const grid = document.getElementById('saved-gallery-grid');
        grid.innerHTML = '';

        const drawings = await Storage.loadAll();
        if (drawings.length === 0) {
            grid.innerHTML = '<div class="gallery-empty">Todavia no hay dibujos guardados</div>';
            return;
        }

        drawings.forEach(drawing => {
            const item = document.createElement('div');
            item.className = 'saved-item';

            const img = document.createElement('img');
            img.src = drawing.image;
            img.alt = drawing.name;
            item.appendChild(img);

            const date = new Date(drawing.createdAt);
            const dateStr = date.toLocaleDateString('es', { day: 'numeric', month: 'short' });
            const dateDiv = document.createElement('div');
            dateDiv.className = 'saved-date';
            dateDiv.textContent = drawing.name + ' - ' + dateStr;
            item.appendChild(dateDiv);

            const delBtn = document.createElement('button');
            delBtn.className = 'saved-delete';
            delBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6l-12 12" stroke="white" stroke-width="3" stroke-linecap="round"/></svg>';
            delBtn.addEventListener('click', async (e) => {
                e.stopPropagation();
                await Storage.delete(drawing.id);
                item.style.transform = 'scale(0)';
                item.style.opacity = '0';
                item.style.transition = 'all 0.3s ease';
                setTimeout(() => item.remove(), 300);
                Sounds.play('click');
            });
            item.appendChild(delBtn);

            grid.appendChild(item);
        });
    }
};

// Start the app
App.init();
