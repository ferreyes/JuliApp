// Coloring pages registry
// HOW TO ADD: put image in assets/coloring/, add entry below

const COLORING_PAGES = [
    // --- Cars ---
    { file: 'rayo-mcqueen.jpg', name: 'Rayo McQueen', category: 'Cars' },
    { file: 'cars-mcqueen-carrera.jpg', name: 'McQueen Carrera', category: 'Cars' },
    { file: 'cars-sally.jpg', name: 'Sally', category: 'Cars' },
    { file: 'cars-mate.jpg', name: 'Mate', category: 'Cars' },

    // --- Dora ---
    { file: 'dora.png', name: 'Dora', category: 'Dora' },
    { file: 'dora-playa.jpg', name: 'Dora Playa', category: 'Dora' },
    { file: 'dora-estrellas.jpg', name: 'Dora Estrellas', category: 'Dora' },
    { file: 'dora-aventura.jpg', name: 'Dora Aventura', category: 'Dora' },
    { file: 'dora-lentes.png', name: 'Dora Lentes', category: 'Dora' },

    // --- Mario Bros ---
    { file: 'mario.jpg', name: 'Mario', category: 'Mario' },
    { file: 'luigi.jpg', name: 'Luigi', category: 'Mario' },
    { file: 'yoshi.jpg', name: 'Yoshi', category: 'Mario' },
    { file: 'toad.jpg', name: 'Toad', category: 'Mario' },
    { file: 'flor-mario.jpg', name: 'Flor de Fuego', category: 'Mario' },
    { file: 'bill-bala.jpg', name: 'Bill Bala', category: 'Mario' },
    { file: 'planta-pirana.jpg', name: 'Planta Pirana', category: 'Mario' },
    { file: 'mario-tanooki.jpg', name: 'Mario Tanooki', category: 'Mario' },
    { file: 'mario-grupo.jpg', name: 'Mario y Amigos', category: 'Mario' },
    { file: 'peach.webp', name: 'Princesa Peach', category: 'Mario' },

    // --- Donkey Kong ---
    { file: 'donkey-kong.png', name: 'Donkey Kong', category: 'Donkey Kong' },
    { file: 'donkey-kong-barril.jpg', name: 'DK Barril', category: 'Donkey Kong' },
    { file: 'donkey-kong-kart.jpg', name: 'DK Kart', category: 'Donkey Kong' },
    { file: 'diddy-kong.png', name: 'Diddy Kong', category: 'Donkey Kong' },
    { file: 'donkey-kong2.png', name: 'DK Sonriendo', category: 'Donkey Kong' },

    // --- Bluey ---
    { file: 'bluey-globos.jpg', name: 'Bluey Globos', category: 'Bluey' },
    { file: 'bluey-bandit.jpg', name: 'Bandit', category: 'Bluey' },
    { file: 'bluey-indy.jpg', name: 'Indy', category: 'Bluey' },
    { file: 'bluey-feliz.jpg', name: 'Bluey Feliz', category: 'Bluey' },
    { file: 'bluey-bingo-playa.jpg', name: 'Bluey y Bingo Playa', category: 'Bluey' },
    { file: 'bluey-bingo-juego.jpg', name: 'Bluey y Bingo Juego', category: 'Bluey' },

    // --- Paw Patrol ---
    { file: 'chase-retrato.jpg', name: 'Chase', category: 'Paw Patrol' },
    { file: 'chase-fiesta.jpg', name: 'Chase Fiesta', category: 'Paw Patrol' },
    { file: 'paw-marshall.png', name: 'Marshall', category: 'Paw Patrol' },
    { file: 'paw-everest.png', name: 'Everest', category: 'Paw Patrol' },
    { file: 'paw-ryder.png', name: 'Ryder', category: 'Paw Patrol' },
    { file: 'paw-marshall-chase.jpg', name: 'Marshall y Chase', category: 'Paw Patrol' },
    { file: 'paw-ryder-chase.jpg', name: 'Ryder y Chase', category: 'Paw Patrol' },

    // --- Mighty Pups ---
    { file: 'paw-mighty-marshall.jpg', name: 'Mighty Marshall', category: 'Mighty Pups' },
    { file: 'paw-mighty-chase.jpg', name: 'Mighty Chase', category: 'Mighty Pups' },
    { file: 'paw-mighty-skye.jpg', name: 'Mighty Skye', category: 'Mighty Pups' },
    { file: 'paw-mighty-rubble.jpg', name: 'Mighty Rubble', category: 'Mighty Pups' },
    { file: 'paw-mighty-rubble-chase.jpg', name: 'Mighty Rubble y Chase', category: 'Mighty Pups' },

    // --- Mickey ---
    { file: 'mickey-clubhouse.jpg', name: 'Mickey Clubhouse', category: 'Mickey' },

    // --- Dinotren ---
    { file: 'dinotren-buddy.jpg', name: 'Buddy', category: 'Dinotren' },
    { file: 'dinotren-buddy-tiny.jpg', name: 'Buddy y Tiny', category: 'Dinotren' },
    { file: 'dinotren-don.jpg', name: 'Don', category: 'Dinotren' },
    { file: 'dinotren-don2.jpg', name: 'Don Senalando', category: 'Dinotren' },
    { file: 'dinotren-shiny.jpg', name: 'Shiny', category: 'Dinotren' },
    { file: 'dinotren-tank.jpg', name: 'Tank', category: 'Dinotren' },
    { file: 'dinotren-huevo.jpg', name: 'Buddy Huevo', category: 'Dinotren' },
    { file: 'dinotren-huevo2.png', name: 'Naciendo', category: 'Dinotren' },

    // --- Blaze ---
    { file: 'blaze-frente.jpg', name: 'Blaze', category: 'Blaze' },
    { file: 'blaze-aj.png', name: 'AJ', category: 'Blaze' },
    { file: 'blaze-crusher.jpg', name: 'Crusher', category: 'Blaze' },
    { file: 'blaze-grua.webp', name: 'Blaze Grua', category: 'Blaze' },
];

// Built-in simple SVG coloring pages
const BUILTIN_COLORING = {
    color_star: {
        name: 'Estrella',
        preview: '<svg viewBox="0 0 100 100"><path d="M50 10l12 24 26 4-19 18 5 26-24-12-24 12 5-26-19-18 26-4z" fill="none" stroke="#333" stroke-width="2.5"/></svg>',
        width: 400, height: 400,
        regions: [
            { id: 'star', path: 'M200,40 L240,140 L350,160 L270,230 L290,340 L200,290 L110,340 L130,230 L50,160 L160,140 Z', defaultColor: '#FFD700' },
        ]
    },
    color_house: {
        name: 'Casa',
        preview: '<svg viewBox="0 0 100 100"><path d="M50 15L15 50h70z" fill="none" stroke="#333" stroke-width="2"/><rect x="20" y="50" width="60" height="38" fill="none" stroke="#333" stroke-width="2"/><rect x="40" y="60" width="20" height="28" fill="none" stroke="#333" stroke-width="2"/><rect x="25" y="58" width="12" height="12" fill="none" stroke="#333" stroke-width="1.5"/><rect x="63" y="58" width="12" height="12" fill="none" stroke="#333" stroke-width="1.5"/></svg>',
        width: 400, height: 400,
        regions: [
            { id: 'roof', path: 'M200,60 L80,200 L320,200 Z', defaultColor: '#F44336' },
            { id: 'wall', path: 'M90,200 L310,200 L310,360 L90,360 Z', defaultColor: '#FFE082' },
            { id: 'door', path: 'M170,260 L230,260 L230,360 L170,360 Z', defaultColor: '#795548' },
            { id: 'window_l', path: 'M105,230 L155,230 L155,280 L105,280 Z', defaultColor: '#BBDEFB' },
            { id: 'window_r', path: 'M245,230 L295,230 L295,280 L245,280 Z', defaultColor: '#BBDEFB' },
        ]
    },
    color_rainbow: {
        name: 'Arcoiris',
        preview: '<svg viewBox="0 0 100 100"><path d="M10 75a40 40 0 0 1 80 0" stroke="#F44336" stroke-width="5" fill="none"/><path d="M16 75a34 34 0 0 1 68 0" stroke="#FF9800" stroke-width="5" fill="none"/><path d="M22 75a28 28 0 0 1 56 0" stroke="#FFEB3B" stroke-width="5" fill="none"/><path d="M28 75a22 22 0 0 1 44 0" stroke="#4CAF50" stroke-width="5" fill="none"/><path d="M34 75a16 16 0 0 1 32 0" stroke="#2196F3" stroke-width="5" fill="none"/></svg>',
        width: 400, height: 400,
        regions: [
            { id: 'band1', path: 'M40,320 A160,160 0 0,1 360,320 L340,320 A140,140 0 0,0 60,320 Z', defaultColor: '#F44336' },
            { id: 'band2', path: 'M60,320 A140,140 0 0,1 340,320 L320,320 A120,120 0 0,0 80,320 Z', defaultColor: '#FF9800' },
            { id: 'band3', path: 'M80,320 A120,120 0 0,1 320,320 L300,320 A100,100 0 0,0 100,320 Z', defaultColor: '#FFEB3B' },
            { id: 'band4', path: 'M100,320 A100,100 0 0,1 300,320 L280,320 A80,80 0 0,0 120,320 Z', defaultColor: '#4CAF50' },
            { id: 'band5', path: 'M120,320 A80,80 0 0,1 280,320 L260,320 A60,60 0 0,0 140,320 Z', defaultColor: '#2196F3' },
        ]
    },
};
