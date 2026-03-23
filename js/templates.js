// Drawing templates - each has steps with SVG paths to trace
// Paths are defined in a 400x400 coordinate space

const DRAW_COLORS = [
    '#FF3B30', '#FF9500', '#FFEB3B', '#4CAF50',
    '#2196F3', '#9C27B0', '#FF69B4', '#795548',
    '#212121', '#FFFFFF',
];

const CATEGORIES = {
    cartoons: {
        label: 'Dibujos',
        icon: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="14" rx="2" fill="#6C5CE7"/><rect x="7" y="19" width="10" height="2" rx="1" fill="#6C5CE7"/></svg>',
        color: '#6C5CE7',
    },
    food: {
        label: 'Comida',
        icon: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#FF9500"/><path d="M7 10h10M7 14h10" stroke="white" stroke-width="1.5"/></svg>',
        color: '#FF9500',
    },
    animals: {
        label: 'Animales',
        icon: '<svg viewBox="0 0 24 24"><circle cx="12" cy="14" r="8" fill="#FF69B4"/><circle cx="8" cy="10" r="2" fill="#FF69B4"/><circle cx="16" cy="10" r="2" fill="#FF69B4"/><circle cx="10" cy="13" r="1" fill="#333"/><circle cx="14" cy="13" r="1" fill="#333"/></svg>',
        color: '#FF69B4',
    },
    vehicles: {
        label: 'Vehiculos',
        icon: '<svg viewBox="0 0 24 24"><rect x="3" y="10" width="18" height="8" rx="2" fill="#2196F3"/><circle cx="7" cy="18" r="2" fill="#333"/><circle cx="17" cy="18" r="2" fill="#333"/><path d="M6 10L8 5h8l2 5" fill="#64B5F6"/></svg>',
        color: '#2196F3',
    },
    nature: {
        label: 'Naturaleza',
        icon: '<svg viewBox="0 0 24 24"><path d="M12 3L4 18h16z" fill="#4CAF50"/><rect x="11" y="16" width="2" height="5" fill="#795548"/></svg>',
        color: '#4CAF50',
    },
};

const TEMPLATES = {
    // ============ FOOD ============
    burger: {
        name: 'Hamburguesa',
        category: 'food',
        bgColor: '#FFF9E6',
        preview: '<svg viewBox="0 0 100 100"><path d="M20 45c0-16 13-25 30-25s30 9 30 25z" fill="#D2691E"/><rect x="18" y="45" width="64" height="8" rx="2" fill="#4CAF50"/><rect x="18" y="53" width="64" height="6" rx="1" fill="#F44336"/><rect x="18" y="59" width="64" height="6" rx="1" fill="#FFD700"/><path d="M18 65c0 0 0 12 32 12s32-12 32-12z" fill="#D2691E"/></svg>',
        steps: [
            {
                instruction: 'Pan de arriba',
                color: '#D2691E',
                lineWidth: 8,
                points: [
                    {x:60, y:220}, {x:55, y:180}, {x:60, y:140}, {x:80, y:110},
                    {x:120, y:90}, {x:170, y:80}, {x:200, y:78}, {x:230, y:80},
                    {x:280, y:90}, {x:320, y:110}, {x:340, y:140}, {x:345, y:180},
                    {x:340, y:220},
                ],
                fill: '#D2691E',
                closed: true,
            },
            {
                instruction: 'Lechuga',
                color: '#4CAF50',
                lineWidth: 10,
                points: [
                    {x:50, y:220}, {x:70, y:235}, {x:100, y:225}, {x:130, y:240},
                    {x:160, y:225}, {x:200, y:245}, {x:240, y:225}, {x:270, y:240},
                    {x:300, y:225}, {x:330, y:238}, {x:350, y:220},
                ],
                fill: '#4CAF50',
            },
            {
                instruction: 'Carne',
                color: '#8B4513',
                lineWidth: 8,
                points: [
                    {x:55, y:245}, {x:55, y:275}, {x:80, y:280}, {x:150, y:282},
                    {x:200, y:283}, {x:250, y:282}, {x:320, y:280}, {x:345, y:275},
                    {x:345, y:245},
                ],
                fill: '#8B4513',
            },
            {
                instruction: 'Queso',
                color: '#FFD700',
                lineWidth: 6,
                points: [
                    {x:50, y:283}, {x:50, y:300}, {x:90, y:310}, {x:110, y:295},
                    {x:150, y:310}, {x:190, y:295}, {x:220, y:310}, {x:260, y:295},
                    {x:300, y:310}, {x:350, y:300}, {x:350, y:283},
                ],
                fill: '#FFD700',
            },
            {
                instruction: 'Pan de abajo',
                color: '#D2691E',
                lineWidth: 8,
                points: [
                    {x:55, y:310}, {x:52, y:340}, {x:60, y:360},
                    {x:100, y:370}, {x:200, y:375}, {x:300, y:370},
                    {x:340, y:360}, {x:348, y:340}, {x:345, y:310},
                ],
                fill: '#D2691E',
                closed: true,
            },
        ]
    },

    pizza: {
        name: 'Pizza',
        category: 'food',
        bgColor: '#FFF5F0',
        preview: '<svg viewBox="0 0 100 100"><path d="M50 15L15 85h70z" fill="#FFB74D"/><circle cx="38" cy="55" r="7" fill="#F44336"/><circle cx="55" cy="45" r="6" fill="#F44336"/><circle cx="50" cy="68" r="7" fill="#F44336"/><circle cx="42" cy="62" r="2" fill="#4CAF50"/></svg>',
        steps: [
            {
                instruction: 'Masa',
                color: '#FFB74D',
                lineWidth: 8,
                points: [
                    {x:200, y:60}, {x:100, y:340}, {x:80, y:350},
                    {x:320, y:350}, {x:300, y:340}, {x:200, y:60},
                ],
                fill: '#FFB74D',
                closed: true,
            },
            {
                instruction: 'Salsa',
                color: '#FF7043',
                lineWidth: 6,
                points: [
                    {x:200, y:100}, {x:120, y:320}, {x:280, y:320}, {x:200, y:100},
                ],
                fill: '#FF7043',
                closed: true,
            },
            {
                instruction: 'Pepperoni 1',
                color: '#F44336',
                lineWidth: 6,
                points: [
                    {x:170, y:190}, {x:155, y:200}, {x:150, y:215}, {x:155, y:230},
                    {x:170, y:240}, {x:185, y:235}, {x:195, y:220},
                    {x:190, y:205}, {x:180, y:193},
                ],
                fill: '#F44336',
                closed: true,
            },
            {
                instruction: 'Pepperoni 2',
                color: '#F44336',
                lineWidth: 6,
                points: [
                    {x:230, y:220}, {x:218, y:230}, {x:215, y:245}, {x:220, y:258},
                    {x:235, y:265}, {x:250, y:258}, {x:255, y:245},
                    {x:250, y:230}, {x:240, y:222},
                ],
                fill: '#F44336',
                closed: true,
            },
            {
                instruction: 'Pepperoni 3',
                color: '#F44336',
                lineWidth: 6,
                points: [
                    {x:180, y:275}, {x:168, y:285}, {x:165, y:298}, {x:170, y:310},
                    {x:185, y:318}, {x:200, y:312}, {x:205, y:298},
                    {x:200, y:285}, {x:190, y:277},
                ],
                fill: '#F44336',
                closed: true,
            },
        ]
    },

    icecream: {
        name: 'Helado',
        category: 'food',
        bgColor: '#F0F8FF',
        preview: '<svg viewBox="0 0 100 100"><circle cx="50" cy="30" r="20" fill="#F48FB1"/><circle cx="35" cy="35" r="15" fill="#CE93D8"/><circle cx="65" cy="35" r="15" fill="#80CBC4"/><path d="M30 45l20 45 20-45z" fill="#FFE0B2"/></svg>',
        steps: [
            {
                instruction: 'Cono',
                color: '#D2691E',
                lineWidth: 7,
                points: [
                    {x:130, y:220}, {x:200, y:380}, {x:270, y:220},
                ],
                fill: '#FFCC80',
                closed: true,
            },
            {
                instruction: 'Bola 1',
                color: '#F48FB1',
                lineWidth: 7,
                points: [
                    {x:130, y:220}, {x:120, y:190}, {x:120, y:160}, {x:130, y:140},
                    {x:150, y:130}, {x:170, y:128}, {x:190, y:135}, {x:200, y:150},
                    {x:200, y:180}, {x:200, y:220},
                ],
                fill: '#F48FB1',
                closed: true,
            },
            {
                instruction: 'Bola 2',
                color: '#80CBC4',
                lineWidth: 7,
                points: [
                    {x:200, y:220}, {x:200, y:190}, {x:200, y:160}, {x:210, y:140},
                    {x:230, y:130}, {x:250, y:128}, {x:265, y:135}, {x:275, y:150},
                    {x:280, y:170}, {x:275, y:200}, {x:270, y:220},
                ],
                fill: '#80CBC4',
                closed: true,
            },
            {
                instruction: 'Bola 3',
                color: '#CE93D8',
                lineWidth: 7,
                points: [
                    {x:155, y:160}, {x:155, y:130}, {x:165, y:100}, {x:180, y:80},
                    {x:200, y:72}, {x:220, y:75}, {x:238, y:88}, {x:248, y:108},
                    {x:250, y:135}, {x:245, y:155},
                ],
                fill: '#CE93D8',
                closed: true,
            },
        ]
    },

    // ============ ANIMALS ============
    cat: {
        name: 'Gato',
        category: 'animals',
        bgColor: '#FFF8F0',
        preview: '<svg viewBox="0 0 100 100"><path d="M25 35L35 15h5l10 20" fill="#FFB74D"/><path d="M55 35L65 15h5l10 20" fill="#FFB74D"/><ellipse cx="50" cy="55" rx="28" ry="30" fill="#FFB74D"/><circle cx="40" cy="48" r="4" fill="#333"/><circle cx="60" cy="48" r="4" fill="#333"/><ellipse cx="50" cy="58" rx="4" ry="3" fill="#FF8A65"/><path d="M46 62q4 3 8 0" stroke="#333" stroke-width="1.5" fill="none"/></svg>',
        steps: [
            {
                instruction: 'Cabeza',
                color: '#FFB74D',
                lineWidth: 7,
                points: [
                    {x:130, y:200}, {x:120, y:170}, {x:120, y:140}, {x:130, y:115},
                    {x:150, y:100}, {x:200, y:90}, {x:250, y:100}, {x:270, y:115},
                    {x:280, y:140}, {x:280, y:170}, {x:270, y:200},
                    {x:250, y:220}, {x:200, y:228}, {x:150, y:220}, {x:130, y:200},
                ],
                fill: '#FFB74D',
                closed: true,
            },
            {
                instruction: 'Oreja izquierda',
                color: '#F5A623',
                lineWidth: 6,
                points: [
                    {x:130, y:160}, {x:110, y:100}, {x:100, y:65},
                    {x:115, y:75}, {x:145, y:105},
                ],
                fill: '#FFB74D',
            },
            {
                instruction: 'Oreja derecha',
                color: '#F5A623',
                lineWidth: 6,
                points: [
                    {x:270, y:160}, {x:290, y:100}, {x:300, y:65},
                    {x:285, y:75}, {x:255, y:105},
                ],
                fill: '#FFB74D',
            },
            {
                instruction: 'Ojo izquierdo',
                color: '#333333',
                lineWidth: 5,
                points: [
                    {x:170, y:145}, {x:160, y:150}, {x:158, y:160},
                    {x:162, y:170}, {x:172, y:175}, {x:182, y:170},
                    {x:185, y:160}, {x:182, y:150}, {x:175, y:145},
                ],
                fill: '#333333',
                closed: true,
            },
            {
                instruction: 'Ojo derecho',
                color: '#333333',
                lineWidth: 5,
                points: [
                    {x:225, y:145}, {x:218, y:150}, {x:215, y:160},
                    {x:218, y:170}, {x:228, y:175}, {x:238, y:170},
                    {x:242, y:160}, {x:238, y:150}, {x:230, y:145},
                ],
                fill: '#333333',
                closed: true,
            },
            {
                instruction: 'Nariz y boca',
                color: '#FF8A65',
                lineWidth: 5,
                points: [
                    {x:195, y:185}, {x:200, y:190}, {x:205, y:185},
                ],
                fill: '#FF8A65',
            },
            {
                instruction: 'Bigotes',
                color: '#333333',
                lineWidth: 3,
                points: [
                    {x:110, y:170}, {x:150, y:175},
                    {x:150, y:175}, {x:150, y:175},
                    {x:110, y:185}, {x:150, y:182},
                    {x:150, y:182}, {x:150, y:182},
                    {x:250, y:175}, {x:290, y:170},
                    {x:290, y:170}, {x:290, y:170},
                    {x:250, y:182}, {x:290, y:185},
                ],
            },
        ]
    },

    fish: {
        name: 'Pez',
        category: 'animals',
        bgColor: '#E8F5FF',
        preview: '<svg viewBox="0 0 100 100"><path d="M15 50c0-18 20-30 40-30s25 12 25 30-5 30-25 30S15 68 15 50z" fill="#42A5F5"/><path d="M75 50l15-15v30z" fill="#1E88E5"/><circle cx="35" cy="42" r="5" fill="white"/><circle cx="37" cy="42" r="3" fill="#333"/></svg>',
        steps: [
            {
                instruction: 'Cuerpo',
                color: '#42A5F5',
                lineWidth: 7,
                points: [
                    {x:100, y:200}, {x:80, y:170}, {x:75, y:140}, {x:85, y:115},
                    {x:110, y:100}, {x:150, y:90}, {x:200, y:88}, {x:250, y:95},
                    {x:280, y:110}, {x:300, y:140}, {x:305, y:170},
                    {x:300, y:200}, {x:290, y:230}, {x:270, y:255},
                    {x:240, y:270}, {x:200, y:278}, {x:150, y:270},
                    {x:110, y:250}, {x:85, y:230}, {x:100, y:200},
                ],
                fill: '#42A5F5',
                closed: true,
            },
            {
                instruction: 'Cola',
                color: '#1E88E5',
                lineWidth: 7,
                points: [
                    {x:290, y:170}, {x:330, y:120}, {x:350, y:100},
                    {x:340, y:150}, {x:330, y:200},
                    {x:340, y:250}, {x:350, y:280},
                    {x:330, y:260}, {x:290, y:215},
                ],
                fill: '#1E88E5',
            },
            {
                instruction: 'Ojo',
                color: '#FFFFFF',
                lineWidth: 5,
                points: [
                    {x:140, y:160}, {x:130, y:165}, {x:128, y:175},
                    {x:132, y:185}, {x:142, y:190}, {x:152, y:185},
                    {x:155, y:175}, {x:152, y:165}, {x:145, y:160},
                ],
                fill: '#FFFFFF',
                closed: true,
            },
            {
                instruction: 'Pupila',
                color: '#333333',
                lineWidth: 4,
                points: [
                    {x:144, y:168}, {x:138, y:172}, {x:137, y:178},
                    {x:140, y:184}, {x:146, y:186}, {x:152, y:182},
                    {x:153, y:176}, {x:150, y:170}, {x:146, y:168},
                ],
                fill: '#333333',
                closed: true,
            },
            {
                instruction: 'Aleta',
                color: '#1565C0',
                lineWidth: 5,
                points: [
                    {x:180, y:160}, {x:200, y:120}, {x:220, y:100},
                    {x:230, y:120}, {x:225, y:155},
                ],
                fill: '#1565C0',
            },
        ]
    },

    bunny: {
        name: 'Conejo',
        category: 'animals',
        bgColor: '#FFF5F5',
        preview: '<svg viewBox="0 0 100 100"><ellipse cx="50" cy="60" rx="25" ry="28" fill="#F5F5F5" stroke="#ddd" stroke-width="1"/><ellipse cx="38" cy="25" rx="8" ry="22" fill="#F5F5F5" stroke="#ddd" stroke-width="1"/><ellipse cx="62" cy="25" rx="8" ry="22" fill="#F5F5F5" stroke="#ddd" stroke-width="1"/><ellipse cx="38" cy="25" rx="4" ry="15" fill="#FFB6C1"/><ellipse cx="62" cy="25" rx="4" ry="15" fill="#FFB6C1"/><circle cx="42" cy="52" r="3" fill="#333"/><circle cx="58" cy="52" r="3" fill="#333"/><ellipse cx="50" cy="62" rx="3" ry="2" fill="#FFB6C1"/></svg>',
        steps: [
            {
                instruction: 'Cabeza',
                color: '#E0E0E0',
                lineWidth: 7,
                points: [
                    {x:130, y:220}, {x:120, y:185}, {x:118, y:155}, {x:125, y:130},
                    {x:145, y:115}, {x:175, y:108}, {x:200, y:105}, {x:225, y:108},
                    {x:255, y:115}, {x:275, y:130}, {x:282, y:155}, {x:280, y:185},
                    {x:270, y:220}, {x:248, y:240}, {x:200, y:248},
                    {x:152, y:240}, {x:130, y:220},
                ],
                fill: '#F5F5F5',
                closed: true,
            },
            {
                instruction: 'Oreja izquierda',
                color: '#E0E0E0',
                lineWidth: 6,
                points: [
                    {x:155, y:130}, {x:148, y:90}, {x:142, y:50}, {x:140, y:20},
                    {x:155, y:20}, {x:168, y:30}, {x:175, y:60},
                    {x:178, y:100}, {x:175, y:125},
                ],
                fill: '#F5F5F5',
            },
            {
                instruction: 'Oreja derecha',
                color: '#E0E0E0',
                lineWidth: 6,
                points: [
                    {x:245, y:130}, {x:252, y:90}, {x:258, y:50}, {x:260, y:20},
                    {x:245, y:20}, {x:232, y:30}, {x:225, y:60},
                    {x:222, y:100}, {x:225, y:125},
                ],
                fill: '#F5F5F5',
            },
            {
                instruction: 'Ojo izquierdo',
                color: '#333333',
                lineWidth: 5,
                points: [
                    {x:168, y:160}, {x:160, y:165}, {x:158, y:175},
                    {x:162, y:185}, {x:172, y:188}, {x:180, y:183},
                    {x:183, y:175}, {x:180, y:165}, {x:172, y:160},
                ],
                fill: '#333333',
                closed: true,
            },
            {
                instruction: 'Ojo derecho',
                color: '#333333',
                lineWidth: 5,
                points: [
                    {x:228, y:160}, {x:220, y:165}, {x:217, y:175},
                    {x:220, y:185}, {x:230, y:188}, {x:240, y:183},
                    {x:243, y:175}, {x:240, y:165}, {x:232, y:160},
                ],
                fill: '#333333',
                closed: true,
            },
            {
                instruction: 'Nariz',
                color: '#FFB6C1',
                lineWidth: 5,
                points: [
                    {x:195, y:198}, {x:200, y:205}, {x:205, y:198},
                ],
                fill: '#FFB6C1',
            },
        ]
    },

    // ============ VEHICLES ============
    car: {
        name: 'Auto',
        category: 'vehicles',
        bgColor: '#F0F8FF',
        preview: '<svg viewBox="0 0 100 100"><rect x="10" y="45" width="80" height="25" rx="5" fill="#F44336"/><path d="M25 45L32 28h36l7 17" fill="#BBDEFB"/><circle cx="25" cy="72" r="8" fill="#333"/><circle cx="75" cy="72" r="8" fill="#333"/></svg>',
        steps: [
            {
                instruction: 'Carroceria',
                color: '#F44336',
                lineWidth: 7,
                points: [
                    {x:50, y:240}, {x:50, y:210}, {x:60, y:200},
                    {x:340, y:200}, {x:350, y:210}, {x:350, y:240},
                    {x:340, y:270}, {x:60, y:270}, {x:50, y:240},
                ],
                fill: '#F44336',
                closed: true,
            },
            {
                instruction: 'Ventanas',
                color: '#BBDEFB',
                lineWidth: 6,
                points: [
                    {x:100, y:200}, {x:115, y:150}, {x:140, y:135},
                    {x:200, y:130}, {x:260, y:135}, {x:285, y:150},
                    {x:300, y:200},
                ],
                fill: '#BBDEFB',
            },
            {
                instruction: 'Rueda izquierda',
                color: '#333333',
                lineWidth: 7,
                points: [
                    {x:120, y:260}, {x:105, y:265}, {x:98, y:278},
                    {x:100, y:295}, {x:110, y:305}, {x:125, y:308},
                    {x:138, y:302}, {x:145, y:290}, {x:142, y:275},
                    {x:135, y:265}, {x:125, y:260},
                ],
                fill: '#333333',
                closed: true,
            },
            {
                instruction: 'Rueda derecha',
                color: '#333333',
                lineWidth: 7,
                points: [
                    {x:275, y:260}, {x:260, y:265}, {x:253, y:278},
                    {x:255, y:295}, {x:265, y:305}, {x:280, y:308},
                    {x:293, y:302}, {x:300, y:290}, {x:297, y:275},
                    {x:290, y:265}, {x:280, y:260},
                ],
                fill: '#333333',
                closed: true,
            },
        ]
    },

    rocket: {
        name: 'Cohete',
        category: 'vehicles',
        bgColor: '#F0F0FF',
        preview: '<svg viewBox="0 0 100 100"><path d="M50 10c-8 12-12 28-12 50h24c0-22-4-38-12-50z" fill="#E0E0E0" stroke="#bbb" stroke-width="1"/><path d="M38 60l-10 18h10z" fill="#42A5F5"/><path d="M62 60l10 18h-10z" fill="#42A5F5"/><circle cx="50" cy="40" r="6" fill="#42A5F5"/><path d="M42 68h16l-3 18h-10z" fill="#FF7043"/><path d="M45 68h10l-2 12h-6z" fill="#FDD835"/></svg>',
        steps: [
            {
                instruction: 'Cuerpo',
                color: '#BDBDBD',
                lineWidth: 7,
                points: [
                    {x:170, y:320}, {x:168, y:280}, {x:165, y:230},
                    {x:170, y:180}, {x:180, y:130}, {x:195, y:90},
                    {x:200, y:70}, {x:205, y:90}, {x:220, y:130},
                    {x:230, y:180}, {x:235, y:230}, {x:232, y:280},
                    {x:230, y:320},
                ],
                fill: '#E0E0E0',
            },
            {
                instruction: 'Ventana',
                color: '#42A5F5',
                lineWidth: 6,
                points: [
                    {x:200, y:165}, {x:188, y:175}, {x:185, y:190},
                    {x:188, y:205}, {x:200, y:215}, {x:212, y:205},
                    {x:215, y:190}, {x:212, y:175}, {x:204, y:167},
                ],
                fill: '#42A5F5',
                closed: true,
            },
            {
                instruction: 'Aleta izquierda',
                color: '#42A5F5',
                lineWidth: 6,
                points: [
                    {x:168, y:280}, {x:130, y:340}, {x:125, y:350},
                    {x:140, y:345}, {x:165, y:325},
                ],
                fill: '#42A5F5',
            },
            {
                instruction: 'Aleta derecha',
                color: '#42A5F5',
                lineWidth: 6,
                points: [
                    {x:232, y:280}, {x:270, y:340}, {x:275, y:350},
                    {x:260, y:345}, {x:235, y:325},
                ],
                fill: '#42A5F5',
            },
            {
                instruction: 'Fuego',
                color: '#FF7043',
                lineWidth: 7,
                points: [
                    {x:175, y:320}, {x:180, y:345}, {x:185, y:365},
                    {x:195, y:385}, {x:200, y:390}, {x:205, y:385},
                    {x:215, y:365}, {x:220, y:345}, {x:225, y:320},
                ],
                fill: '#FF7043',
            },
        ]
    },

    boat: {
        name: 'Barco',
        category: 'vehicles',
        bgColor: '#E8F8FF',
        preview: '<svg viewBox="0 0 100 100"><path d="M15 60h70l-10 20H25z" fill="#F44336"/><rect x="45" y="25" width="4" height="35" fill="#795548"/><path d="M49 25l25 18H49z" fill="white"/></svg>',
        steps: [
            {
                instruction: 'Casco',
                color: '#F44336',
                lineWidth: 7,
                points: [
                    {x:60, y:240}, {x:340, y:240},
                    {x:310, y:310}, {x:90, y:310}, {x:60, y:240},
                ],
                fill: '#F44336',
                closed: true,
            },
            {
                instruction: 'Mastil',
                color: '#795548',
                lineWidth: 8,
                points: [
                    {x:200, y:240}, {x:200, y:80},
                ],
            },
            {
                instruction: 'Vela',
                color: '#FFFFFF',
                lineWidth: 5,
                points: [
                    {x:205, y:90}, {x:300, y:180}, {x:205, y:230},
                ],
                fill: '#FFFFFF',
                closed: true,
            },
            {
                instruction: 'Bandera',
                color: '#FFD700',
                lineWidth: 4,
                points: [
                    {x:200, y:80}, {x:200, y:55},
                    {x:200, y:55}, {x:230, y:62}, {x:200, y:72},
                ],
                fill: '#FFD700',
            },
        ]
    },

    // ============ NATURE ============
    tree: {
        name: 'Arbol',
        category: 'nature',
        bgColor: '#F0FFF0',
        preview: '<svg viewBox="0 0 100 100"><rect x="43" y="60" width="14" height="30" fill="#795548"/><path d="M50 12L20 62h60z" fill="#4CAF50"/><path d="M50 28L28 62h44z" fill="#388E3C"/></svg>',
        steps: [
            {
                instruction: 'Tronco',
                color: '#795548',
                lineWidth: 8,
                points: [
                    {x:180, y:250}, {x:178, y:300}, {x:178, y:360},
                    {x:222, y:360}, {x:222, y:300}, {x:220, y:250},
                ],
                fill: '#795548',
                closed: true,
            },
            {
                instruction: 'Copa',
                color: '#4CAF50',
                lineWidth: 7,
                points: [
                    {x:200, y:60}, {x:120, y:180}, {x:90, y:250},
                    {x:150, y:230}, {x:200, y:255}, {x:250, y:230},
                    {x:310, y:250}, {x:280, y:180}, {x:200, y:60},
                ],
                fill: '#4CAF50',
                closed: true,
            },
        ]
    },

    flower: {
        name: 'Flor',
        category: 'nature',
        bgColor: '#FFF8F5',
        preview: '<svg viewBox="0 0 100 100"><circle cx="50" cy="35" r="12" fill="#F44336"/><circle cx="38" cy="42" r="12" fill="#E91E63"/><circle cx="62" cy="42" r="12" fill="#FF9800"/><circle cx="40" cy="55" r="12" fill="#9C27B0"/><circle cx="60" cy="55" r="12" fill="#FF5722"/><circle cx="50" cy="46" r="8" fill="#FDD835"/><rect x="48" y="60" width="4" height="28" fill="#4CAF50"/></svg>',
        steps: [
            {
                instruction: 'Tallo',
                color: '#4CAF50',
                lineWidth: 8,
                points: [
                    {x:200, y:240}, {x:198, y:290}, {x:200, y:360},
                ],
            },
            {
                instruction: 'Hoja',
                color: '#66BB6A',
                lineWidth: 5,
                points: [
                    {x:198, y:300}, {x:160, y:290}, {x:140, y:305},
                    {x:158, y:310}, {x:195, y:305},
                ],
                fill: '#66BB6A',
            },
            {
                instruction: 'Petalo 1',
                color: '#F44336',
                lineWidth: 6,
                points: [
                    {x:200, y:200}, {x:185, y:165}, {x:185, y:135},
                    {x:200, y:120}, {x:215, y:135}, {x:215, y:165}, {x:200, y:200},
                ],
                fill: '#F44336',
                closed: true,
            },
            {
                instruction: 'Petalo 2',
                color: '#E91E63',
                lineWidth: 6,
                points: [
                    {x:200, y:200}, {x:165, y:190}, {x:140, y:180},
                    {x:135, y:200}, {x:148, y:215}, {x:175, y:215}, {x:200, y:200},
                ],
                fill: '#E91E63',
                closed: true,
            },
            {
                instruction: 'Petalo 3',
                color: '#FF9800',
                lineWidth: 6,
                points: [
                    {x:200, y:200}, {x:235, y:190}, {x:260, y:180},
                    {x:265, y:200}, {x:252, y:215}, {x:225, y:215}, {x:200, y:200},
                ],
                fill: '#FF9800',
                closed: true,
            },
            {
                instruction: 'Petalo 4',
                color: '#9C27B0',
                lineWidth: 6,
                points: [
                    {x:200, y:200}, {x:170, y:215}, {x:155, y:240},
                    {x:168, y:255}, {x:190, y:245}, {x:200, y:220},
                ],
                fill: '#9C27B0',
            },
            {
                instruction: 'Petalo 5',
                color: '#FF5722',
                lineWidth: 6,
                points: [
                    {x:200, y:200}, {x:230, y:215}, {x:245, y:240},
                    {x:232, y:255}, {x:210, y:245}, {x:200, y:220},
                ],
                fill: '#FF5722',
            },
            {
                instruction: 'Centro',
                color: '#FDD835',
                lineWidth: 6,
                points: [
                    {x:200, y:185}, {x:185, y:192}, {x:182, y:205},
                    {x:188, y:218}, {x:200, y:222}, {x:212, y:218},
                    {x:218, y:205}, {x:215, y:192}, {x:204, y:185},
                ],
                fill: '#FDD835',
                closed: true,
            },
        ]
    },

    sun: {
        name: 'Sol',
        category: 'nature',
        bgColor: '#FFFDE7',
        preview: '<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="20" fill="#FFB300"/><g stroke="#FFB300" stroke-width="3" stroke-linecap="round"><line x1="50" y1="10" x2="50" y2="22"/><line x1="50" y1="78" x2="50" y2="90"/><line x1="10" y1="50" x2="22" y2="50"/><line x1="78" y1="50" x2="90" y2="50"/><line x1="22" y1="22" x2="30" y2="30"/><line x1="70" y1="70" x2="78" y2="78"/><line x1="22" y1="78" x2="30" y2="70"/><line x1="70" y1="30" x2="78" y2="22"/></g></svg>',
        steps: [
            {
                instruction: 'Circulo',
                color: '#FFB300',
                lineWidth: 8,
                points: [
                    {x:200, y:140}, {x:170, y:148}, {x:148, y:170},
                    {x:140, y:200}, {x:148, y:230}, {x:170, y:252},
                    {x:200, y:260}, {x:230, y:252}, {x:252, y:230},
                    {x:260, y:200}, {x:252, y:170}, {x:230, y:148}, {x:204, y:140},
                ],
                fill: '#FFB300',
                closed: true,
            },
            {
                instruction: 'Rayo arriba',
                color: '#FFB300',
                lineWidth: 7,
                points: [{x:200, y:135}, {x:200, y:70}],
            },
            {
                instruction: 'Rayo abajo',
                color: '#FFB300',
                lineWidth: 7,
                points: [{x:200, y:265}, {x:200, y:330}],
            },
            {
                instruction: 'Rayo izquierda',
                color: '#FFB300',
                lineWidth: 7,
                points: [{x:135, y:200}, {x:70, y:200}],
            },
            {
                instruction: 'Rayo derecha',
                color: '#FFB300',
                lineWidth: 7,
                points: [{x:265, y:200}, {x:330, y:200}],
            },
            {
                instruction: 'Rayo diagonal',
                color: '#FFB300',
                lineWidth: 7,
                points: [{x:155, y:155}, {x:108, y:108}],
            },
            {
                instruction: 'Rayo diagonal',
                color: '#FFB300',
                lineWidth: 7,
                points: [{x:245, y:245}, {x:292, y:292}],
            },
            {
                instruction: 'Rayo diagonal',
                color: '#FFB300',
                lineWidth: 7,
                points: [{x:155, y:245}, {x:108, y:292}],
            },
            {
                instruction: 'Rayo diagonal',
                color: '#FFB300',
                lineWidth: 7,
                points: [{x:245, y:155}, {x:292, y:108}],
            },
        ]
    },

    // ============ CARTOONS / SERIES ANIMADAS ============

    // --- BLUEY (perrita Blue Heeler) ---
    bluey: {
        name: 'Bluey',
        category: 'cartoons',
        bgColor: '#E3F2FD',
        preview: '<svg viewBox="0 0 100 100"><ellipse cx="50" cy="55" rx="22" ry="25" fill="#5B9BD5"/><circle cx="50" cy="38" r="18" fill="#5B9BD5"/><ellipse cx="36" cy="22" rx="8" ry="14" fill="#5B9BD5"/><ellipse cx="64" cy="22" rx="8" ry="14" fill="#5B9BD5"/><circle cx="43" cy="35" r="5" fill="white"/><circle cx="57" cy="35" r="5" fill="white"/><circle cx="44" cy="36" r="2.5" fill="#333"/><circle cx="58" cy="36" r="2.5" fill="#333"/><ellipse cx="50" cy="44" rx="4" ry="3" fill="#333"/></svg>',
        steps: [
            {
                instruction: 'Cabeza',
                color: '#5B9BD5',
                lineWidth: 7,
                points: [
                    {x:140, y:210}, {x:128, y:180}, {x:125, y:150}, {x:130, y:125},
                    {x:148, y:108}, {x:175, y:98}, {x:200, y:95}, {x:225, y:98},
                    {x:252, y:108}, {x:270, y:125}, {x:275, y:150}, {x:272, y:180},
                    {x:260, y:210}, {x:240, y:228}, {x:200, y:235},
                    {x:160, y:228}, {x:140, y:210},
                ],
                fill: '#5B9BD5',
                closed: true,
            },
            {
                instruction: 'Oreja izquierda',
                color: '#4A86C8',
                lineWidth: 6,
                points: [
                    {x:152, y:130}, {x:140, y:85}, {x:130, y:50}, {x:125, y:30},
                    {x:140, y:35}, {x:155, y:55}, {x:165, y:90}, {x:168, y:118},
                ],
                fill: '#5B9BD5',
            },
            {
                instruction: 'Oreja derecha',
                color: '#4A86C8',
                lineWidth: 6,
                points: [
                    {x:248, y:130}, {x:260, y:85}, {x:270, y:50}, {x:275, y:30},
                    {x:260, y:35}, {x:245, y:55}, {x:235, y:90}, {x:232, y:118},
                ],
                fill: '#5B9BD5',
            },
            {
                instruction: 'Ojo izquierdo',
                color: '#FFFFFF',
                lineWidth: 5,
                points: [
                    {x:175, y:140}, {x:163, y:148}, {x:160, y:160},
                    {x:165, y:172}, {x:177, y:178}, {x:190, y:172},
                    {x:193, y:160}, {x:188, y:148}, {x:178, y:141},
                ],
                fill: '#FFFFFF',
                closed: true,
            },
            {
                instruction: 'Ojo derecho',
                color: '#FFFFFF',
                lineWidth: 5,
                points: [
                    {x:222, y:140}, {x:210, y:148}, {x:207, y:160},
                    {x:212, y:172}, {x:224, y:178}, {x:237, y:172},
                    {x:240, y:160}, {x:235, y:148}, {x:225, y:141},
                ],
                fill: '#FFFFFF',
                closed: true,
            },
            {
                instruction: 'Pupila izquierda',
                color: '#333333',
                lineWidth: 4,
                points: [
                    {x:178, y:152}, {x:172, y:158}, {x:172, y:166},
                    {x:178, y:172}, {x:185, y:170}, {x:188, y:163},
                    {x:185, y:155}, {x:180, y:152},
                ],
                fill: '#333333',
                closed: true,
            },
            {
                instruction: 'Pupila derecha',
                color: '#333333',
                lineWidth: 4,
                points: [
                    {x:225, y:152}, {x:219, y:158}, {x:219, y:166},
                    {x:225, y:172}, {x:232, y:170}, {x:235, y:163},
                    {x:232, y:155}, {x:227, y:152},
                ],
                fill: '#333333',
                closed: true,
            },
            {
                instruction: 'Nariz',
                color: '#333333',
                lineWidth: 5,
                points: [
                    {x:193, y:188}, {x:200, y:195}, {x:207, y:188},
                ],
                fill: '#333333',
            },
        ]
    },

    // --- PAW PATROL (escudo/placa) ---
    pawpatrol: {
        name: 'Paw Patrol',
        category: 'cartoons',
        bgColor: '#E8F5E9',
        preview: '<svg viewBox="0 0 100 100"><path d="M50 10L20 35v30l30 25 30-25V35z" fill="#1565C0" stroke="#0D47A1" stroke-width="2"/><circle cx="50" cy="48" r="12" fill="#FFD700"/><ellipse cx="44" cy="38" rx="5" ry="7" fill="#FFD700"/><ellipse cx="56" cy="38" rx="5" ry="7" fill="#FFD700"/><ellipse cx="38" cy="48" rx="4" ry="6" fill="#FFD700"/><ellipse cx="62" cy="48" rx="4" ry="6" fill="#FFD700"/></svg>',
        steps: [
            {
                instruction: 'Escudo',
                color: '#1565C0',
                lineWidth: 8,
                points: [
                    {x:200, y:50}, {x:110, y:110}, {x:100, y:180},
                    {x:110, y:260}, {x:150, y:310}, {x:200, y:350},
                    {x:250, y:310}, {x:290, y:260}, {x:300, y:180},
                    {x:290, y:110}, {x:200, y:50},
                ],
                fill: '#1565C0',
                closed: true,
            },
            {
                instruction: 'Huella - almohadilla',
                color: '#FFD700',
                lineWidth: 6,
                points: [
                    {x:200, y:185}, {x:178, y:195}, {x:170, y:215},
                    {x:175, y:235}, {x:190, y:248}, {x:210, y:248},
                    {x:225, y:235}, {x:230, y:215}, {x:222, y:195},
                    {x:204, y:186},
                ],
                fill: '#FFD700',
                closed: true,
            },
            {
                instruction: 'Dedo 1',
                color: '#FFD700',
                lineWidth: 5,
                points: [
                    {x:175, y:185}, {x:168, y:168}, {x:165, y:152},
                    {x:172, y:142}, {x:183, y:142}, {x:190, y:155},
                    {x:188, y:175},
                ],
                fill: '#FFD700',
                closed: true,
            },
            {
                instruction: 'Dedo 2',
                color: '#FFD700',
                lineWidth: 5,
                points: [
                    {x:212, y:185}, {x:215, y:168}, {x:218, y:152},
                    {x:228, y:142}, {x:238, y:145}, {x:240, y:158},
                    {x:235, y:175}, {x:222, y:188},
                ],
                fill: '#FFD700',
                closed: true,
            },
            {
                instruction: 'Dedo 3',
                color: '#FFD700',
                lineWidth: 5,
                points: [
                    {x:158, y:205}, {x:140, y:195}, {x:125, y:190},
                    {x:118, y:198}, {x:120, y:212}, {x:132, y:220},
                    {x:150, y:218},
                ],
                fill: '#FFD700',
                closed: true,
            },
            {
                instruction: 'Dedo 4',
                color: '#FFD700',
                lineWidth: 5,
                points: [
                    {x:242, y:205}, {x:260, y:195}, {x:275, y:190},
                    {x:282, y:198}, {x:280, y:212}, {x:268, y:220},
                    {x:250, y:218},
                ],
                fill: '#FFD700',
                closed: true,
            },
        ]
    },

    // --- MICKEY MOUSE (cara) ---
    mickey: {
        name: 'Mickey',
        category: 'cartoons',
        bgColor: '#FFF8E1',
        preview: '<svg viewBox="0 0 100 100"><circle cx="30" cy="25" r="16" fill="#333"/><circle cx="70" cy="25" r="16" fill="#333"/><circle cx="50" cy="55" r="25" fill="#333"/><ellipse cx="50" cy="60" rx="15" ry="12" fill="#FFCC80"/><circle cx="42" cy="48" r="4" fill="white"/><circle cx="58" cy="48" r="4" fill="white"/><circle cx="43" cy="49" r="2" fill="#333"/><circle cx="59" cy="49" r="2" fill="#333"/><ellipse cx="50" cy="62" rx="5" ry="3" fill="#333"/></svg>',
        steps: [
            {
                instruction: 'Cabeza',
                color: '#333333',
                lineWidth: 7,
                points: [
                    {x:135, y:230}, {x:120, y:200}, {x:115, y:165}, {x:120, y:135},
                    {x:140, y:112}, {x:170, y:100}, {x:200, y:96}, {x:230, y:100},
                    {x:260, y:112}, {x:280, y:135}, {x:285, y:165}, {x:280, y:200},
                    {x:265, y:230}, {x:240, y:252}, {x:200, y:260},
                    {x:160, y:252}, {x:135, y:230},
                ],
                fill: '#333333',
                closed: true,
            },
            {
                instruction: 'Oreja izquierda',
                color: '#333333',
                lineWidth: 7,
                points: [
                    {x:140, y:130}, {x:118, y:100}, {x:100, y:72}, {x:85, y:52},
                    {x:78, y:42}, {x:80, y:55}, {x:85, y:72},
                    {x:95, y:90}, {x:110, y:105}, {x:130, y:118},
                ],
                fill: '#333333',
                closed: true,
            },
            {
                instruction: 'Oreja derecha',
                color: '#333333',
                lineWidth: 7,
                points: [
                    {x:260, y:130}, {x:282, y:100}, {x:300, y:72}, {x:315, y:52},
                    {x:322, y:42}, {x:320, y:55}, {x:315, y:72},
                    {x:305, y:90}, {x:290, y:105}, {x:270, y:118},
                ],
                fill: '#333333',
                closed: true,
            },
            {
                instruction: 'Cara',
                color: '#FFCC80',
                lineWidth: 5,
                points: [
                    {x:160, y:195}, {x:155, y:210}, {x:158, y:230},
                    {x:170, y:245}, {x:185, y:250}, {x:200, y:252},
                    {x:215, y:250}, {x:230, y:245}, {x:242, y:230},
                    {x:245, y:210}, {x:240, y:195}, {x:225, y:182},
                    {x:200, y:178}, {x:175, y:182}, {x:162, y:194},
                ],
                fill: '#FFCC80',
                closed: true,
            },
            {
                instruction: 'Ojo izquierdo',
                color: '#FFFFFF',
                lineWidth: 4,
                points: [
                    {x:178, y:155}, {x:170, y:162}, {x:168, y:172},
                    {x:172, y:182}, {x:182, y:186}, {x:192, y:180},
                    {x:195, y:170}, {x:190, y:160}, {x:180, y:155},
                ],
                fill: '#FFFFFF',
                closed: true,
            },
            {
                instruction: 'Ojo derecho',
                color: '#FFFFFF',
                lineWidth: 4,
                points: [
                    {x:220, y:155}, {x:210, y:162}, {x:208, y:172},
                    {x:212, y:182}, {x:222, y:186}, {x:232, y:180},
                    {x:235, y:170}, {x:230, y:160}, {x:222, y:155},
                ],
                fill: '#FFFFFF',
                closed: true,
            },
            {
                instruction: 'Nariz',
                color: '#333333',
                lineWidth: 5,
                points: [
                    {x:193, y:205}, {x:200, y:215}, {x:207, y:205},
                ],
                fill: '#333333',
            },
        ]
    },

    // --- DINOSAURIO (estilo Dinotren) ---
    dino: {
        name: 'Dinosaurio',
        category: 'cartoons',
        bgColor: '#E8F5E9',
        preview: '<svg viewBox="0 0 100 100"><ellipse cx="50" cy="55" rx="25" ry="22" fill="#66BB6A"/><circle cx="50" cy="35" r="18" fill="#66BB6A"/><circle cx="42" cy="30" r="5" fill="white"/><circle cx="58" cy="30" r="5" fill="white"/><circle cx="43" cy="31" r="2.5" fill="#333"/><circle cx="59" cy="31" r="2.5" fill="#333"/><path d="M42 42c0 0 4 5 8 5s8-5 8-5" stroke="#333" stroke-width="2" fill="none"/><path d="M38 20l-3-8 5 4 3-6 3 6 5-4-3 8" fill="#43A047"/></svg>',
        steps: [
            {
                instruction: 'Cuerpo',
                color: '#66BB6A',
                lineWidth: 7,
                points: [
                    {x:140, y:220}, {x:125, y:250}, {x:120, y:280},
                    {x:125, y:310}, {x:145, y:330}, {x:180, y:340},
                    {x:220, y:340}, {x:255, y:330}, {x:275, y:310},
                    {x:280, y:280}, {x:275, y:250}, {x:260, y:220},
                ],
                fill: '#66BB6A',
                closed: true,
            },
            {
                instruction: 'Cabeza',
                color: '#66BB6A',
                lineWidth: 7,
                points: [
                    {x:150, y:220}, {x:140, y:190}, {x:135, y:155},
                    {x:140, y:125}, {x:155, y:105}, {x:180, y:95},
                    {x:200, y:92}, {x:220, y:95}, {x:245, y:105},
                    {x:260, y:125}, {x:265, y:155}, {x:260, y:190},
                    {x:250, y:220},
                ],
                fill: '#66BB6A',
                closed: true,
            },
            {
                instruction: 'Crestas',
                color: '#43A047',
                lineWidth: 5,
                points: [
                    {x:175, y:95}, {x:170, y:65}, {x:180, y:75},
                    {x:188, y:55}, {x:195, y:72}, {x:205, y:52},
                    {x:210, y:72}, {x:220, y:60}, {x:225, y:80},
                    {x:230, y:95},
                ],
                fill: '#43A047',
            },
            {
                instruction: 'Ojo izquierdo',
                color: '#FFFFFF',
                lineWidth: 5,
                points: [
                    {x:172, y:135}, {x:162, y:142}, {x:160, y:155},
                    {x:165, y:168}, {x:178, y:174}, {x:190, y:168},
                    {x:195, y:155}, {x:190, y:142}, {x:178, y:135},
                ],
                fill: '#FFFFFF',
                closed: true,
            },
            {
                instruction: 'Ojo derecho',
                color: '#FFFFFF',
                lineWidth: 5,
                points: [
                    {x:222, y:135}, {x:212, y:142}, {x:210, y:155},
                    {x:215, y:168}, {x:228, y:174}, {x:240, y:168},
                    {x:245, y:155}, {x:240, y:142}, {x:228, y:135},
                ],
                fill: '#FFFFFF',
                closed: true,
            },
            {
                instruction: 'Pupila izquierda',
                color: '#333333',
                lineWidth: 4,
                points: [
                    {x:178, y:148}, {x:172, y:153}, {x:172, y:162},
                    {x:178, y:168}, {x:186, y:165}, {x:188, y:157},
                    {x:184, y:150},
                ],
                fill: '#333333',
                closed: true,
            },
            {
                instruction: 'Pupila derecha',
                color: '#333333',
                lineWidth: 4,
                points: [
                    {x:228, y:148}, {x:222, y:153}, {x:222, y:162},
                    {x:228, y:168}, {x:236, y:165}, {x:238, y:157},
                    {x:234, y:150},
                ],
                fill: '#333333',
                closed: true,
            },
            {
                instruction: 'Sonrisa',
                color: '#333333',
                lineWidth: 4,
                points: [
                    {x:170, y:190}, {x:180, y:200}, {x:200, y:205},
                    {x:220, y:200}, {x:230, y:190},
                ],
            },
        ]
    },

    // --- PEPPA (cerdita) ---
    peppa: {
        name: 'Peppa',
        category: 'cartoons',
        bgColor: '#FCE4EC',
        preview: '<svg viewBox="0 0 100 100"><circle cx="50" cy="45" r="22" fill="#F48FB1"/><ellipse cx="65" cy="38" rx="10" ry="8" fill="#F48FB1"/><circle cx="68" cy="37" r="3" fill="#E91E63"/><circle cx="42" cy="38" r="4" fill="white"/><circle cx="55" cy="38" r="4" fill="white"/><circle cx="43" cy="39" r="2" fill="#333"/><circle cx="56" cy="39" r="2" fill="#333"/><path d="M44 52c0 0 4 4 8 0" stroke="#333" stroke-width="1.5" fill="none"/><rect x="45" y="65" width="10" height="20" fill="#E91E63"/></svg>',
        steps: [
            {
                instruction: 'Cabeza',
                color: '#F48FB1',
                lineWidth: 7,
                points: [
                    {x:140, y:230}, {x:125, y:200}, {x:118, y:165},
                    {x:122, y:130}, {x:140, y:108}, {x:170, y:95},
                    {x:200, y:90}, {x:230, y:98}, {x:255, y:115},
                    {x:268, y:140}, {x:270, y:170}, {x:262, y:200},
                    {x:248, y:228}, {x:220, y:245}, {x:200, y:250},
                    {x:168, y:245}, {x:145, y:232},
                ],
                fill: '#F48FB1',
                closed: true,
            },
            {
                instruction: 'Nariz (hocico)',
                color: '#F48FB1',
                lineWidth: 6,
                points: [
                    {x:258, y:150}, {x:280, y:140}, {x:300, y:135},
                    {x:312, y:140}, {x:315, y:155}, {x:308, y:168},
                    {x:290, y:172}, {x:272, y:168}, {x:260, y:160},
                ],
                fill: '#F48FB1',
                closed: true,
            },
            {
                instruction: 'Fosa nasal 1',
                color: '#E91E63',
                lineWidth: 4,
                points: [
                    {x:285, y:148}, {x:280, y:152}, {x:280, y:158},
                    {x:285, y:162}, {x:292, y:160}, {x:294, y:154},
                    {x:290, y:149},
                ],
                fill: '#E91E63',
                closed: true,
            },
            {
                instruction: 'Fosa nasal 2',
                color: '#E91E63',
                lineWidth: 4,
                points: [
                    {x:298, y:148}, {x:294, y:152}, {x:294, y:158},
                    {x:298, y:162}, {x:305, y:160}, {x:307, y:154},
                    {x:303, y:149},
                ],
                fill: '#E91E63',
                closed: true,
            },
            {
                instruction: 'Ojo izquierdo',
                color: '#FFFFFF',
                lineWidth: 5,
                points: [
                    {x:175, y:135}, {x:165, y:142}, {x:163, y:155},
                    {x:168, y:168}, {x:180, y:174}, {x:192, y:168},
                    {x:195, y:155}, {x:190, y:142}, {x:180, y:136},
                ],
                fill: '#FFFFFF',
                closed: true,
            },
            {
                instruction: 'Ojo derecho',
                color: '#FFFFFF',
                lineWidth: 5,
                points: [
                    {x:220, y:135}, {x:210, y:142}, {x:208, y:155},
                    {x:213, y:168}, {x:225, y:174}, {x:237, y:168},
                    {x:240, y:155}, {x:235, y:142}, {x:225, y:136},
                ],
                fill: '#FFFFFF',
                closed: true,
            },
            {
                instruction: 'Pupila izquierda',
                color: '#333333',
                lineWidth: 4,
                points: [
                    {x:180, y:150}, {x:175, y:155}, {x:175, y:162},
                    {x:180, y:167}, {x:186, y:164}, {x:188, y:158},
                    {x:185, y:152},
                ],
                fill: '#333333',
                closed: true,
            },
            {
                instruction: 'Pupila derecha',
                color: '#333333',
                lineWidth: 4,
                points: [
                    {x:225, y:150}, {x:220, y:155}, {x:220, y:162},
                    {x:225, y:167}, {x:231, y:164}, {x:233, y:158},
                    {x:230, y:152},
                ],
                fill: '#333333',
                closed: true,
            },
            {
                instruction: 'Boca',
                color: '#C2185B',
                lineWidth: 4,
                points: [
                    {x:185, y:200}, {x:195, y:210}, {x:210, y:212},
                    {x:225, y:205},
                ],
            },
        ]
    },

    // --- CHASE de Paw Patrol (cara de perro policia) ---
    chase: {
        name: 'Chase',
        category: 'cartoons',
        bgColor: '#E3F2FD',
        preview: '<svg viewBox="0 0 100 100"><ellipse cx="50" cy="52" rx="24" ry="26" fill="#A1887F"/><circle cx="50" cy="42" r="18" fill="#A1887F"/><ellipse cx="32" cy="28" rx="10" ry="12" fill="#795548" transform="rotate(-10 32 28)"/><ellipse cx="68" cy="28" rx="10" ry="12" fill="#795548" transform="rotate(10 68 28)"/><rect x="30" y="18" width="40" height="10" rx="3" fill="#1565C0"/><circle cx="42" cy="40" r="5" fill="white"/><circle cx="58" cy="40" r="5" fill="white"/><circle cx="43" cy="41" r="2.5" fill="#333"/><circle cx="59" cy="41" r="2.5" fill="#333"/><ellipse cx="50" cy="52" rx="5" ry="4" fill="#333"/></svg>',
        steps: [
            {
                instruction: 'Cabeza',
                color: '#A1887F',
                lineWidth: 7,
                points: [
                    {x:140, y:225}, {x:128, y:195}, {x:122, y:160},
                    {x:128, y:130}, {x:145, y:110}, {x:170, y:100},
                    {x:200, y:96}, {x:230, y:100}, {x:255, y:110},
                    {x:272, y:130}, {x:278, y:160}, {x:272, y:195},
                    {x:260, y:225}, {x:238, y:242}, {x:200, y:250},
                    {x:162, y:242}, {x:142, y:226},
                ],
                fill: '#A1887F',
                closed: true,
            },
            {
                instruction: 'Oreja izquierda',
                color: '#795548',
                lineWidth: 6,
                points: [
                    {x:148, y:130}, {x:125, y:95}, {x:108, y:62},
                    {x:100, y:45}, {x:118, y:55}, {x:138, y:80},
                    {x:155, y:110},
                ],
                fill: '#795548',
            },
            {
                instruction: 'Oreja derecha',
                color: '#795548',
                lineWidth: 6,
                points: [
                    {x:252, y:130}, {x:275, y:95}, {x:292, y:62},
                    {x:300, y:45}, {x:282, y:55}, {x:262, y:80},
                    {x:245, y:110},
                ],
                fill: '#795548',
            },
            {
                instruction: 'Gorra',
                color: '#1565C0',
                lineWidth: 6,
                points: [
                    {x:135, y:125}, {x:140, y:100}, {x:155, y:85},
                    {x:200, y:78}, {x:245, y:85}, {x:260, y:100},
                    {x:265, y:125},
                ],
                fill: '#1565C0',
            },
            {
                instruction: 'Ojo izquierdo',
                color: '#FFFFFF',
                lineWidth: 5,
                points: [
                    {x:172, y:145}, {x:162, y:152}, {x:160, y:165},
                    {x:165, y:178}, {x:178, y:182}, {x:190, y:176},
                    {x:193, y:163}, {x:188, y:152}, {x:176, y:146},
                ],
                fill: '#FFFFFF',
                closed: true,
            },
            {
                instruction: 'Ojo derecho',
                color: '#FFFFFF',
                lineWidth: 5,
                points: [
                    {x:224, y:145}, {x:214, y:152}, {x:212, y:165},
                    {x:217, y:178}, {x:230, y:182}, {x:242, y:176},
                    {x:245, y:163}, {x:240, y:152}, {x:228, y:146},
                ],
                fill: '#FFFFFF',
                closed: true,
            },
            {
                instruction: 'Nariz',
                color: '#333333',
                lineWidth: 5,
                points: [
                    {x:190, y:200}, {x:200, y:212}, {x:210, y:200},
                ],
                fill: '#333333',
            },
        ]
    },
};
