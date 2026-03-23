// Storage for saved colored drawings using IndexedDB

const Storage = {
    db: null,
    DB_NAME: 'JuliAppDB',
    DB_VERSION: 1,
    STORE_NAME: 'drawings',

    init() {
        return new Promise((resolve) => {
            const request = indexedDB.open(this.DB_NAME, this.DB_VERSION);
            request.onupgradeneeded = (e) => {
                const db = e.target.result;
                if (!db.objectStoreNames.contains(this.STORE_NAME)) {
                    db.createObjectStore(this.STORE_NAME, { keyPath: 'id' });
                }
            };
            request.onsuccess = (e) => {
                this.db = e.target.result;
                resolve();
            };
            request.onerror = () => resolve();
        });
    },

    save(imageDataURL, name) {
        if (!this.db) return;
        const drawing = {
            id: Date.now().toString(36) + Math.random().toString(36).substr(2, 6),
            name: name || 'Dibujo',
            image: imageDataURL,
            createdAt: Date.now(),
        };
        const tx = this.db.transaction(this.STORE_NAME, 'readwrite');
        tx.objectStore(this.STORE_NAME).put(drawing);
    },

    loadAll() {
        return new Promise((resolve) => {
            if (!this.db) { resolve([]); return; }
            const tx = this.db.transaction(this.STORE_NAME, 'readonly');
            const request = tx.objectStore(this.STORE_NAME).getAll();
            request.onsuccess = () => {
                const items = request.result || [];
                items.sort((a, b) => b.createdAt - a.createdAt);
                resolve(items);
            };
            request.onerror = () => resolve([]);
        });
    },

    delete(id) {
        return new Promise((resolve) => {
            if (!this.db) { resolve(); return; }
            const tx = this.db.transaction(this.STORE_NAME, 'readwrite');
            tx.objectStore(this.STORE_NAME).delete(id);
            tx.oncomplete = () => resolve();
            tx.onerror = () => resolve();
        });
    },
};
