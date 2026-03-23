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

    // ============ FRUTAS - Facil ============
    apple: {
        name: 'Manzana',
        category: 'food',
        bgColor: '#FFF5F5',
        difficulty: 1,
        preview: '<svg viewBox="0 0 100 100"><path d="M50 25c-20 0-32 15-32 35s12 30 32 30 32-10 32-30-12-35-32-35z" fill="#F44336"/><path d="M48 25c2-10 8-15 12-18" stroke="#4CAF50" stroke-width="2" fill="none"/><path d="M52 22c4-2 10-2 14 0" fill="#4CAF50"/></svg>',
        steps: [
            {
                instruction: 'Cuerpo',
                color: '#F44336',
                lineWidth: 8,
                points: [
                    {x:200, y:120}, {x:160, y:110}, {x:120, y:130}, {x:90, y:170},
                    {x:80, y:220}, {x:90, y:280}, {x:120, y:320}, {x:160, y:340},
                    {x:200, y:350}, {x:240, y:340}, {x:280, y:320}, {x:310, y:280},
                    {x:320, y:220}, {x:310, y:170}, {x:280, y:130}, {x:240, y:110},
                    {x:200, y:120},
                ],
                fill: '#F44336',
                closed: true,
            },
            {
                instruction: 'Tallo',
                color: '#795548',
                lineWidth: 6,
                points: [
                    {x:200, y:120}, {x:198, y:100}, {x:195, y:80}, {x:190, y:65},
                ],
            },
            {
                instruction: 'Hoja',
                color: '#4CAF50',
                lineWidth: 5,
                points: [
                    {x:198, y:90}, {x:210, y:75}, {x:230, y:70}, {x:245, y:75},
                    {x:235, y:82}, {x:218, y:85}, {x:205, y:90},
                ],
                fill: '#4CAF50',
                closed: true,
            },
        ]
    },

    banana: {
        name: 'Banana',
        category: 'food',
        difficulty: 1,
        bgColor: '#FFFDE7',
        preview: '<svg viewBox="0 0 100 100"><path d="M30 70c5-30 15-50 35-55 10-2 15 5 10 15-8 15-25 35-35 45" fill="#FFD700" stroke="#F9A825" stroke-width="1.5"/></svg>',
        steps: [
            {
                instruction: 'Banana',
                color: '#FFD700',
                lineWidth: 8,
                points: [
                    {x:140, y:320}, {x:120, y:280}, {x:110, y:240}, {x:110, y:200},
                    {x:120, y:160}, {x:140, y:130}, {x:170, y:105}, {x:200, y:90},
                    {x:230, y:85}, {x:260, y:90}, {x:280, y:100},
                    {x:270, y:110}, {x:250, y:115}, {x:220, y:120},
                    {x:190, y:140}, {x:170, y:165}, {x:155, y:200},
                    {x:150, y:240}, {x:155, y:280}, {x:165, y:310},
                    {x:140, y:320},
                ],
                fill: '#FFD700',
                closed: true,
            },
            {
                instruction: 'Punta',
                color: '#795548',
                lineWidth: 5,
                points: [
                    {x:140, y:320}, {x:135, y:335}, {x:130, y:345},
                ],
            },
        ]
    },

    watermelon: {
        name: 'Sandia',
        category: 'food',
        difficulty: 1,
        bgColor: '#FFF5F5',
        preview: '<svg viewBox="0 0 100 100"><path d="M15 60c0-25 15-45 35-45s35 20 35 45z" fill="#4CAF50"/><path d="M20 60c0-22 13-38 30-38s30 16 30 38z" fill="#F44336"/><circle cx="35" cy="48" r="2" fill="#333"/><circle cx="50" cy="42" r="2" fill="#333"/><circle cx="65" cy="48" r="2" fill="#333"/><circle cx="42" cy="55" r="2" fill="#333"/><circle cx="58" cy="55" r="2" fill="#333"/></svg>',
        steps: [
            {
                instruction: 'Cascara',
                color: '#4CAF50',
                lineWidth: 8,
                points: [
                    {x:50, y:280}, {x:60, y:220}, {x:80, y:170}, {x:110, y:130},
                    {x:150, y:105}, {x:200, y:95}, {x:250, y:105}, {x:290, y:130},
                    {x:320, y:170}, {x:340, y:220}, {x:350, y:280}, {x:50, y:280},
                ],
                fill: '#4CAF50',
                closed: true,
            },
            {
                instruction: 'Pulpa roja',
                color: '#F44336',
                lineWidth: 6,
                points: [
                    {x:70, y:275}, {x:78, y:225}, {x:95, y:180}, {x:125, y:145},
                    {x:160, y:120}, {x:200, y:112}, {x:240, y:120}, {x:275, y:145},
                    {x:305, y:180}, {x:322, y:225}, {x:330, y:275}, {x:70, y:275},
                ],
                fill: '#F44336',
                closed: true,
            },
            {
                instruction: 'Semillas',
                color: '#333333',
                lineWidth: 4,
                points: [{x:150, y:200}, {x:148, y:210}, {x:152, y:215}, {x:156, y:210}, {x:153, y:200}],
                fill: '#333333',
                closed: true,
            },
            {
                instruction: 'Semilla 2',
                color: '#333333',
                lineWidth: 4,
                points: [{x:200, y:180}, {x:198, y:190}, {x:202, y:195}, {x:206, y:190}, {x:203, y:180}],
                fill: '#333333',
                closed: true,
            },
            {
                instruction: 'Semilla 3',
                color: '#333333',
                lineWidth: 4,
                points: [{x:250, y:200}, {x:248, y:210}, {x:252, y:215}, {x:256, y:210}, {x:253, y:200}],
                fill: '#333333',
                closed: true,
            },
        ]
    },

    cherry: {
        name: 'Cerezas',
        category: 'food',
        difficulty: 2,
        bgColor: '#FFF0F5',
        preview: '<svg viewBox="0 0 100 100"><circle cx="35" cy="65" r="15" fill="#D32F2F"/><circle cx="65" cy="70" r="15" fill="#C62828"/><path d="M35 52c5-20 15-30 20-35" stroke="#4CAF50" stroke-width="2" fill="none"/><path d="M65 57c-5-20-5-30 0-40" stroke="#4CAF50" stroke-width="2" fill="none"/><path d="M52 22c5 0 10 2 12 5" fill="#4CAF50"/></svg>',
        steps: [
            {
                instruction: 'Cereza izquierda',
                color: '#D32F2F',
                lineWidth: 7,
                points: [
                    {x:140, y:230}, {x:120, y:245}, {x:110, y:270}, {x:112, y:295},
                    {x:125, y:315}, {x:145, y:325}, {x:170, y:325}, {x:190, y:315},
                    {x:200, y:295}, {x:200, y:270}, {x:190, y:245}, {x:170, y:232},
                    {x:140, y:230},
                ],
                fill: '#D32F2F',
                closed: true,
            },
            {
                instruction: 'Cereza derecha',
                color: '#C62828',
                lineWidth: 7,
                points: [
                    {x:250, y:245}, {x:232, y:258}, {x:222, y:280}, {x:225, y:305},
                    {x:238, y:325}, {x:258, y:335}, {x:280, y:335}, {x:298, y:322},
                    {x:308, y:302}, {x:305, y:278}, {x:295, y:258}, {x:275, y:245},
                    {x:250, y:245},
                ],
                fill: '#C62828',
                closed: true,
            },
            {
                instruction: 'Tallo izquierdo',
                color: '#4CAF50',
                lineWidth: 5,
                points: [
                    {x:155, y:232}, {x:160, y:200}, {x:175, y:160}, {x:195, y:130},
                    {x:210, y:110},
                ],
            },
            {
                instruction: 'Tallo derecho',
                color: '#4CAF50',
                lineWidth: 5,
                points: [
                    {x:265, y:248}, {x:255, y:210}, {x:240, y:160}, {x:225, y:130},
                    {x:210, y:110},
                ],
            },
            {
                instruction: 'Hoja',
                color: '#66BB6A',
                lineWidth: 4,
                points: [
                    {x:210, y:110}, {x:225, y:95}, {x:245, y:90}, {x:260, y:95},
                    {x:250, y:105}, {x:235, y:108}, {x:215, y:110},
                ],
                fill: '#66BB6A',
                closed: true,
            },
        ]
    },

    grapes: {
        name: 'Uvas',
        category: 'food',
        difficulty: 2,
        bgColor: '#F3E5F5',
        preview: '<svg viewBox="0 0 100 100"><circle cx="42" cy="40" r="9" fill="#7B1FA2"/><circle cx="58" cy="40" r="9" fill="#7B1FA2"/><circle cx="35" cy="55" r="9" fill="#9C27B0"/><circle cx="50" cy="55" r="9" fill="#9C27B0"/><circle cx="65" cy="55" r="9" fill="#7B1FA2"/><circle cx="42" cy="70" r="9" fill="#9C27B0"/><circle cx="58" cy="70" r="9" fill="#7B1FA2"/><circle cx="50" cy="83" r="9" fill="#9C27B0"/><path d="M50 32c0-10 5-18 8-22" stroke="#4CAF50" stroke-width="2" fill="none"/></svg>',
        steps: [
            {
                instruction: 'Uva 1 (arriba izq)',
                color: '#7B1FA2',
                lineWidth: 5,
                points: [
                    {x:165, y:130}, {x:150, y:140}, {x:145, y:155}, {x:150, y:170},
                    {x:165, y:180}, {x:180, y:175}, {x:190, y:160}, {x:185, y:145},
                    {x:175, y:132},
                ],
                fill: '#7B1FA2',
                closed: true,
            },
            {
                instruction: 'Uva 2 (arriba der)',
                color: '#9C27B0',
                lineWidth: 5,
                points: [
                    {x:220, y:130}, {x:205, y:140}, {x:200, y:155}, {x:205, y:170},
                    {x:220, y:180}, {x:235, y:175}, {x:245, y:160}, {x:240, y:145},
                    {x:230, y:132},
                ],
                fill: '#9C27B0',
                closed: true,
            },
            {
                instruction: 'Uva 3 (medio izq)',
                color: '#9C27B0',
                lineWidth: 5,
                points: [
                    {x:140, y:185}, {x:125, y:195}, {x:120, y:210}, {x:125, y:225},
                    {x:140, y:235}, {x:155, y:230}, {x:165, y:215}, {x:160, y:200},
                    {x:150, y:187},
                ],
                fill: '#9C27B0',
                closed: true,
            },
            {
                instruction: 'Uva 4 (medio centro)',
                color: '#7B1FA2',
                lineWidth: 5,
                points: [
                    {x:195, y:185}, {x:180, y:195}, {x:175, y:210}, {x:180, y:225},
                    {x:195, y:235}, {x:210, y:230}, {x:220, y:215}, {x:215, y:200},
                    {x:205, y:187},
                ],
                fill: '#7B1FA2',
                closed: true,
            },
            {
                instruction: 'Uva 5 (medio der)',
                color: '#9C27B0',
                lineWidth: 5,
                points: [
                    {x:250, y:185}, {x:235, y:195}, {x:230, y:210}, {x:235, y:225},
                    {x:250, y:235}, {x:265, y:230}, {x:275, y:215}, {x:270, y:200},
                    {x:260, y:187},
                ],
                fill: '#9C27B0',
                closed: true,
            },
            {
                instruction: 'Uva 6 (abajo izq)',
                color: '#7B1FA2',
                lineWidth: 5,
                points: [
                    {x:165, y:240}, {x:150, y:250}, {x:145, y:265}, {x:150, y:280},
                    {x:165, y:290}, {x:180, y:285}, {x:190, y:270}, {x:185, y:255},
                    {x:175, y:242},
                ],
                fill: '#7B1FA2',
                closed: true,
            },
            {
                instruction: 'Uva 7 (abajo der)',
                color: '#9C27B0',
                lineWidth: 5,
                points: [
                    {x:225, y:240}, {x:210, y:250}, {x:205, y:265}, {x:210, y:280},
                    {x:225, y:290}, {x:240, y:285}, {x:250, y:270}, {x:245, y:255},
                    {x:235, y:242},
                ],
                fill: '#9C27B0',
                closed: true,
            },
            {
                instruction: 'Uva 8 (punta)',
                color: '#7B1FA2',
                lineWidth: 5,
                points: [
                    {x:195, y:295}, {x:180, y:305}, {x:175, y:320}, {x:180, y:335},
                    {x:195, y:345}, {x:210, y:340}, {x:220, y:325}, {x:215, y:310},
                    {x:205, y:297},
                ],
                fill: '#7B1FA2',
                closed: true,
            },
            {
                instruction: 'Tallo',
                color: '#795548',
                lineWidth: 5,
                points: [{x:195, y:132}, {x:195, y:105}, {x:200, y:85}, {x:210, y:70}],
            },
            {
                instruction: 'Hoja',
                color: '#4CAF50',
                lineWidth: 4,
                points: [
                    {x:200, y:90}, {x:215, y:78}, {x:240, y:72}, {x:258, y:78},
                    {x:248, y:88}, {x:228, y:92}, {x:210, y:92},
                ],
                fill: '#4CAF50',
                closed: true,
            },
        ]
    },

    // ============ ANIMALES - Facil ============
    chick: {
        name: 'Pollito',
        category: 'animals',
        difficulty: 1,
        bgColor: '#FFFDE7',
        preview: '<svg viewBox="0 0 100 100"><circle cx="50" cy="45" r="20" fill="#FFD600"/><ellipse cx="50" cy="70" rx="25" ry="20" fill="#FFD600"/><circle cx="43" cy="40" r="3" fill="#333"/><circle cx="57" cy="40" r="3" fill="#333"/><path d="M47 48l50 50h6l-3-2z" fill="#FF9800"/></svg>',
        steps: [
            {
                instruction: 'Cabeza',
                color: '#FFD600',
                lineWidth: 7,
                points: [
                    {x:200, y:100}, {x:165, y:108}, {x:140, y:130}, {x:130, y:160},
                    {x:135, y:190}, {x:155, y:210}, {x:200, y:220},
                    {x:245, y:210}, {x:265, y:190}, {x:270, y:160},
                    {x:260, y:130}, {x:235, y:108}, {x:200, y:100},
                ],
                fill: '#FFD600',
                closed: true,
            },
            {
                instruction: 'Cuerpo',
                color: '#FFD600',
                lineWidth: 7,
                points: [
                    {x:140, y:210}, {x:120, y:240}, {x:110, y:280},
                    {x:115, y:320}, {x:140, y:345}, {x:200, y:355},
                    {x:260, y:345}, {x:285, y:320}, {x:290, y:280},
                    {x:280, y:240}, {x:260, y:210},
                ],
                fill: '#FFD600',
                closed: true,
            },
            {
                instruction: 'Ojo izquierdo',
                color: '#333333',
                lineWidth: 4,
                points: [
                    {x:175, y:150}, {x:170, y:157}, {x:172, y:165},
                    {x:180, y:168}, {x:188, y:163}, {x:188, y:155},
                    {x:183, y:150}, {x:175, y:150},
                ],
                fill: '#333333',
                closed: true,
            },
            {
                instruction: 'Ojo derecho',
                color: '#333333',
                lineWidth: 4,
                points: [
                    {x:215, y:150}, {x:210, y:157}, {x:212, y:165},
                    {x:220, y:168}, {x:228, y:163}, {x:228, y:155},
                    {x:223, y:150}, {x:215, y:150},
                ],
                fill: '#333333',
                closed: true,
            },
            {
                instruction: 'Pico',
                color: '#FF9800',
                lineWidth: 5,
                points: [
                    {x:188, y:178}, {x:200, y:200}, {x:212, y:178},
                ],
                fill: '#FF9800',
                closed: true,
            },
        ]
    },

    snail: {
        name: 'Caracol',
        category: 'animals',
        difficulty: 1,
        bgColor: '#FFF8E1',
        preview: '<svg viewBox="0 0 100 100"><ellipse cx="50" cy="70" rx="35" ry="12" fill="#FFB74D"/><circle cx="55" cy="48" r="22" fill="#8D6E63" fill-opacity="0.7"/><circle cx="55" cy="48" r="14" fill="#A1887F"/><circle cx="55" cy="48" r="7" fill="#8D6E63"/><path d="M25 60c-3-15 0-20 0-20" stroke="#FFB74D" stroke-width="2"/><circle cx="22" cy="38" r="3" fill="#333"/><circle cx="30" cy="40" r="3" fill="#333"/></svg>',
        steps: [
            {
                instruction: 'Cuerpo',
                color: '#FFB74D',
                lineWidth: 7,
                points: [
                    {x:80, y:280}, {x:100, y:295}, {x:140, y:305}, {x:200, y:310},
                    {x:280, y:305}, {x:320, y:290}, {x:330, y:275},
                    {x:320, y:265}, {x:280, y:258}, {x:200, y:255},
                    {x:130, y:260}, {x:100, y:270}, {x:80, y:280},
                ],
                fill: '#FFB74D',
                closed: true,
            },
            {
                instruction: 'Caparazon',
                color: '#8D6E63',
                lineWidth: 6,
                points: [
                    {x:230, y:260}, {x:190, y:250}, {x:160, y:225}, {x:150, y:195},
                    {x:155, y:160}, {x:175, y:135}, {x:205, y:120},
                    {x:240, y:125}, {x:265, y:145}, {x:275, y:175},
                    {x:270, y:210}, {x:255, y:240}, {x:240, y:258},
                ],
                fill: '#A1887F',
                closed: true,
            },
            {
                instruction: 'Espiral',
                color: '#6D4C41',
                lineWidth: 4,
                points: [
                    {x:215, y:230}, {x:190, y:215}, {x:180, y:195}, {x:185, y:170},
                    {x:200, y:155}, {x:225, y:150}, {x:245, y:160},
                    {x:250, y:180}, {x:240, y:198}, {x:225, y:205},
                    {x:210, y:200}, {x:208, y:185}, {x:218, y:175},
                ],
            },
            {
                instruction: 'Antena izquierda',
                color: '#FFB74D',
                lineWidth: 4,
                points: [{x:100, y:268}, {x:85, y:235}, {x:80, y:215}],
            },
            {
                instruction: 'Antena derecha',
                color: '#FFB74D',
                lineWidth: 4,
                points: [{x:115, y:265}, {x:108, y:235}, {x:105, y:215}],
            },
            {
                instruction: 'Ojo izquierdo',
                color: '#333333',
                lineWidth: 3,
                points: [{x:80, y:215}, {x:76, y:208}, {x:80, y:203}, {x:85, y:208}, {x:82, y:215}],
                fill: '#333333',
                closed: true,
            },
            {
                instruction: 'Ojo derecho',
                color: '#333333',
                lineWidth: 3,
                points: [{x:105, y:215}, {x:101, y:208}, {x:105, y:203}, {x:110, y:208}, {x:107, y:215}],
                fill: '#333333',
                closed: true,
            },
        ]
    },

    turtle: {
        name: 'Tortuga',
        category: 'animals',
        difficulty: 2,
        bgColor: '#E8F5E9',
        preview: '<svg viewBox="0 0 100 100"><ellipse cx="50" cy="55" rx="30" ry="22" fill="#4CAF50"/><ellipse cx="50" cy="55" rx="26" ry="18" fill="#66BB6A"/><circle cx="25" cy="58" r="6" fill="#81C784"/><circle cx="75" cy="58" r="6" fill="#81C784"/><circle cx="35" cy="75" r="5" fill="#81C784"/><circle cx="65" cy="75" r="5" fill="#81C784"/><ellipse cx="18" cy="48" rx="8" ry="6" fill="#81C784"/><circle cx="15" cy="45" r="2" fill="#333"/></svg>',
        steps: [
            {
                instruction: 'Caparazon',
                color: '#4CAF50',
                lineWidth: 7,
                points: [
                    {x:120, y:250}, {x:110, y:220}, {x:115, y:180}, {x:135, y:150},
                    {x:170, y:130}, {x:210, y:125}, {x:250, y:130},
                    {x:280, y:150}, {x:295, y:180}, {x:300, y:220},
                    {x:290, y:250}, {x:260, y:265}, {x:210, y:270},
                    {x:155, y:265}, {x:120, y:250},
                ],
                fill: '#4CAF50',
                closed: true,
            },
            {
                instruction: 'Patron del caparazon',
                color: '#66BB6A',
                lineWidth: 5,
                points: [
                    {x:140, y:245}, {x:135, y:215}, {x:140, y:185}, {x:160, y:160},
                    {x:185, y:145}, {x:210, y:140}, {x:240, y:145},
                    {x:260, y:160}, {x:275, y:185}, {x:278, y:215},
                    {x:272, y:245}, {x:248, y:258}, {x:210, y:260},
                    {x:165, y:258}, {x:140, y:245},
                ],
                fill: '#66BB6A',
                closed: true,
            },
            {
                instruction: 'Cabeza',
                color: '#81C784',
                lineWidth: 6,
                points: [
                    {x:120, y:195}, {x:100, y:185}, {x:80, y:180}, {x:65, y:185},
                    {x:58, y:198}, {x:60, y:212}, {x:72, y:220},
                    {x:90, y:222}, {x:110, y:215}, {x:120, y:205},
                ],
                fill: '#81C784',
                closed: true,
            },
            {
                instruction: 'Pata delantera',
                color: '#81C784',
                lineWidth: 5,
                points: [
                    {x:140, y:250}, {x:120, y:275}, {x:108, y:295}, {x:112, y:305},
                    {x:125, y:300}, {x:140, y:285}, {x:150, y:265},
                ],
                fill: '#81C784',
            },
            {
                instruction: 'Pata trasera',
                color: '#81C784',
                lineWidth: 5,
                points: [
                    {x:265, y:255}, {x:275, y:278}, {x:285, y:298}, {x:282, y:308},
                    {x:268, y:302}, {x:258, y:285}, {x:255, y:268},
                ],
                fill: '#81C784',
            },
            {
                instruction: 'Ojo',
                color: '#333333',
                lineWidth: 3,
                points: [{x:72, y:193}, {x:68, y:198}, {x:72, y:203}, {x:78, y:198}, {x:74, y:193}],
                fill: '#333333',
                closed: true,
            },
            {
                instruction: 'Cola',
                color: '#81C784',
                lineWidth: 4,
                points: [{x:295, y:230}, {x:310, y:235}, {x:320, y:232}, {x:325, y:225}],
            },
        ]
    },

    butterfly: {
        name: 'Mariposa',
        category: 'animals',
        difficulty: 2,
        bgColor: '#F3E5F5',
        preview: '<svg viewBox="0 0 100 100"><ellipse cx="30" cy="40" rx="18" ry="22" fill="#E91E63" transform="rotate(-20 30 40)"/><ellipse cx="70" cy="40" rx="18" ry="22" fill="#E91E63" transform="rotate(20 70 40)"/><ellipse cx="33" cy="65" rx="14" ry="18" fill="#FF9800" transform="rotate(-10 33 65)"/><ellipse cx="67" cy="65" rx="14" ry="18" fill="#FF9800" transform="rotate(10 67 65)"/><rect x="48" y="28" width="4" height="45" rx="2" fill="#795548"/></svg>',
        steps: [
            {
                instruction: 'Ala superior izquierda',
                color: '#E91E63',
                lineWidth: 6,
                points: [
                    {x:195, y:170}, {x:165, y:140}, {x:130, y:110}, {x:100, y:100},
                    {x:75, y:110}, {x:65, y:135}, {x:70, y:170},
                    {x:90, y:200}, {x:130, y:215}, {x:170, y:210}, {x:195, y:200},
                ],
                fill: '#E91E63',
                closed: true,
            },
            {
                instruction: 'Ala superior derecha',
                color: '#E91E63',
                lineWidth: 6,
                points: [
                    {x:205, y:170}, {x:235, y:140}, {x:270, y:110}, {x:300, y:100},
                    {x:325, y:110}, {x:335, y:135}, {x:330, y:170},
                    {x:310, y:200}, {x:270, y:215}, {x:230, y:210}, {x:205, y:200},
                ],
                fill: '#E91E63',
                closed: true,
            },
            {
                instruction: 'Ala inferior izquierda',
                color: '#FF9800',
                lineWidth: 5,
                points: [
                    {x:195, y:210}, {x:165, y:225}, {x:130, y:250}, {x:110, y:280},
                    {x:110, y:305}, {x:130, y:320}, {x:160, y:315},
                    {x:185, y:290}, {x:198, y:255}, {x:198, y:220},
                ],
                fill: '#FF9800',
                closed: true,
            },
            {
                instruction: 'Ala inferior derecha',
                color: '#FF9800',
                lineWidth: 5,
                points: [
                    {x:205, y:210}, {x:235, y:225}, {x:270, y:250}, {x:290, y:280},
                    {x:290, y:305}, {x:270, y:320}, {x:240, y:315},
                    {x:215, y:290}, {x:202, y:255}, {x:202, y:220},
                ],
                fill: '#FF9800',
                closed: true,
            },
            {
                instruction: 'Cuerpo',
                color: '#795548',
                lineWidth: 6,
                points: [
                    {x:200, y:140}, {x:197, y:180}, {x:198, y:220}, {x:200, y:260},
                    {x:202, y:300}, {x:200, y:330},
                ],
            },
            {
                instruction: 'Antena izquierda',
                color: '#795548',
                lineWidth: 3,
                points: [{x:198, y:145}, {x:170, y:100}, {x:155, y:80}],
            },
            {
                instruction: 'Antena derecha',
                color: '#795548',
                lineWidth: 3,
                points: [{x:202, y:145}, {x:230, y:100}, {x:245, y:80}],
            },
        ]
    },

    whale: {
        name: 'Ballena',
        category: 'animals',
        difficulty: 2,
        bgColor: '#E3F2FD',
        preview: '<svg viewBox="0 0 100 100"><ellipse cx="48" cy="55" rx="38" ry="25" fill="#2196F3"/><path d="M85 50c8-5 15-18 12-25-2 8-10 14-15 17" fill="#1E88E5"/><circle cx="25" cy="48" r="3" fill="white"/><circle cx="25" cy="48" r="1.5" fill="#333"/><path d="M48 35c0-8 3-15 5-20 2 5 5 12 5 20" fill="#64B5F6"/></svg>',
        steps: [
            {
                instruction: 'Cuerpo',
                color: '#2196F3',
                lineWidth: 7,
                points: [
                    {x:100, y:200}, {x:80, y:180}, {x:70, y:155}, {x:75, y:130},
                    {x:100, y:115}, {x:150, y:105}, {x:210, y:100}, {x:270, y:105},
                    {x:310, y:120}, {x:330, y:150}, {x:335, y:185},
                    {x:330, y:220}, {x:310, y:250}, {x:270, y:270},
                    {x:210, y:280}, {x:150, y:275}, {x:110, y:260},
                    {x:85, y:235}, {x:80, y:215}, {x:100, y:200},
                ],
                fill: '#2196F3',
                closed: true,
            },
            {
                instruction: 'Panza',
                color: '#BBDEFB',
                lineWidth: 5,
                points: [
                    {x:100, y:220}, {x:120, y:250}, {x:160, y:265}, {x:210, y:270},
                    {x:260, y:265}, {x:300, y:245}, {x:320, y:220},
                ],
                fill: '#BBDEFB',
            },
            {
                instruction: 'Cola',
                color: '#1E88E5',
                lineWidth: 6,
                points: [
                    {x:330, y:175}, {x:350, y:140}, {x:370, y:110}, {x:380, y:95},
                    {x:370, y:120}, {x:365, y:155}, {x:360, y:180},
                    {x:365, y:210}, {x:370, y:250}, {x:380, y:280},
                    {x:370, y:265}, {x:350, y:235}, {x:335, y:205},
                ],
                fill: '#1E88E5',
            },
            {
                instruction: 'Ojo',
                color: '#FFFFFF',
                lineWidth: 3,
                points: [
                    {x:120, y:155}, {x:115, y:162}, {x:118, y:172},
                    {x:128, y:175}, {x:135, y:170}, {x:136, y:160},
                    {x:130, y:153}, {x:120, y:155},
                ],
                fill: '#FFFFFF',
                closed: true,
            },
            {
                instruction: 'Pupila',
                color: '#333333',
                lineWidth: 3,
                points: [
                    {x:125, y:160}, {x:122, y:165}, {x:125, y:170},
                    {x:130, y:168}, {x:131, y:163}, {x:128, y:159},
                ],
                fill: '#333333',
                closed: true,
            },
            {
                instruction: 'Chorro de agua',
                color: '#64B5F6',
                lineWidth: 4,
                points: [
                    {x:180, y:105}, {x:175, y:80}, {x:180, y:55}, {x:190, y:40},
                    {x:200, y:45}, {x:205, y:55}, {x:210, y:40},
                    {x:220, y:55}, {x:225, y:80}, {x:220, y:105},
                ],
            },
        ]
    },

    elephant: {
        name: 'Elefante',
        category: 'animals',
        difficulty: 3,
        bgColor: '#ECEFF1',
        preview: '<svg viewBox="0 0 100 100"><ellipse cx="50" cy="55" rx="30" ry="25" fill="#90A4AE"/><circle cx="35" cy="40" r="18" fill="#90A4AE"/><path d="M22 45c-5 5-8 15-5 25 2 5 5 3 5-2 0-8 3-13 5-15" fill="#90A4AE" stroke="#78909C" stroke-width="1"/><circle cx="30" cy="35" r="3" fill="#333"/><ellipse cx="20" cy="50" rx="10" ry="14" fill="#B0BEC5"/></svg>',
        steps: [
            {
                instruction: 'Cuerpo',
                color: '#90A4AE',
                lineWidth: 7,
                points: [
                    {x:140, y:200}, {x:120, y:180}, {x:120, y:150}, {x:140, y:130},
                    {x:180, y:120}, {x:240, y:118}, {x:290, y:125},
                    {x:320, y:145}, {x:330, y:175}, {x:325, y:210},
                    {x:310, y:240}, {x:280, y:260}, {x:240, y:270},
                    {x:180, y:268}, {x:145, y:250}, {x:130, y:225},
                ],
                fill: '#90A4AE',
                closed: true,
            },
            {
                instruction: 'Cabeza',
                color: '#90A4AE',
                lineWidth: 7,
                points: [
                    {x:140, y:200}, {x:120, y:175}, {x:100, y:155}, {x:85, y:140},
                    {x:75, y:120}, {x:80, y:100}, {x:100, y:90},
                    {x:130, y:88}, {x:155, y:95}, {x:170, y:115},
                    {x:175, y:140}, {x:165, y:165}, {x:150, y:185},
                ],
                fill: '#90A4AE',
                closed: true,
            },
            {
                instruction: 'Trompa',
                color: '#90A4AE',
                lineWidth: 6,
                points: [
                    {x:85, y:145}, {x:70, y:165}, {x:60, y:195}, {x:55, y:230},
                    {x:58, y:260}, {x:65, y:280}, {x:75, y:290},
                    {x:85, y:285}, {x:82, y:265}, {x:78, y:240},
                    {x:78, y:210}, {x:82, y:185}, {x:95, y:160},
                ],
                fill: '#90A4AE',
            },
            {
                instruction: 'Oreja',
                color: '#B0BEC5',
                lineWidth: 5,
                points: [
                    {x:80, y:110}, {x:55, y:115}, {x:40, y:135}, {x:35, y:160},
                    {x:45, y:180}, {x:60, y:185}, {x:75, y:170}, {x:82, y:148},
                ],
                fill: '#B0BEC5',
                closed: true,
            },
            {
                instruction: 'Pata delantera',
                color: '#78909C',
                lineWidth: 6,
                points: [
                    {x:160, y:260}, {x:155, y:290}, {x:150, y:320},
                    {x:152, y:345}, {x:180, y:345}, {x:182, y:320},
                    {x:185, y:290}, {x:185, y:260},
                ],
                fill: '#78909C',
                closed: true,
            },
            {
                instruction: 'Pata trasera',
                color: '#78909C',
                lineWidth: 6,
                points: [
                    {x:260, y:258}, {x:255, y:288}, {x:250, y:318},
                    {x:252, y:345}, {x:280, y:345}, {x:282, y:318},
                    {x:285, y:288}, {x:285, y:258},
                ],
                fill: '#78909C',
                closed: true,
            },
            {
                instruction: 'Ojo',
                color: '#333333',
                lineWidth: 3,
                points: [
                    {x:108, y:115}, {x:104, y:120}, {x:106, y:128},
                    {x:114, y:130}, {x:118, y:125}, {x:116, y:118}, {x:110, y:115},
                ],
                fill: '#333333',
                closed: true,
            },
            {
                instruction: 'Cola',
                color: '#78909C',
                lineWidth: 4,
                points: [{x:325, y:180}, {x:340, y:165}, {x:355, y:155}, {x:365, y:150}, {x:370, y:145}],
            },
        ]
    },

    ladybug: {
        name: 'Catarina',
        category: 'animals',
        difficulty: 1,
        bgColor: '#FFEBEE',
        preview: '<svg viewBox="0 0 100 100"><circle cx="50" cy="55" r="28" fill="#F44336"/><line x1="50" y1="28" x2="50" y2="82" stroke="#333" stroke-width="2"/><circle cx="38" cy="45" r="5" fill="#333"/><circle cx="62" cy="45" r="5" fill="#333"/><circle cx="40" cy="65" r="4" fill="#333"/><circle cx="60" cy="65" r="4" fill="#333"/><circle cx="50" cy="30" r="10" fill="#333"/></svg>',
        steps: [
            {
                instruction: 'Cuerpo',
                color: '#F44336',
                lineWidth: 7,
                points: [
                    {x:200, y:120}, {x:155, y:135}, {x:120, y:165}, {x:105, y:210},
                    {x:110, y:260}, {x:130, y:300}, {x:165, y:330},
                    {x:200, y:340}, {x:235, y:330}, {x:270, y:300},
                    {x:290, y:260}, {x:295, y:210}, {x:280, y:165},
                    {x:245, y:135}, {x:200, y:120},
                ],
                fill: '#F44336',
                closed: true,
            },
            {
                instruction: 'Linea central',
                color: '#333333',
                lineWidth: 4,
                points: [{x:200, y:120}, {x:200, y:340}],
            },
            {
                instruction: 'Cabeza',
                color: '#333333',
                lineWidth: 6,
                points: [
                    {x:170, y:125}, {x:165, y:105}, {x:170, y:88}, {x:185, y:78},
                    {x:200, y:75}, {x:215, y:78}, {x:230, y:88},
                    {x:235, y:105}, {x:230, y:125},
                ],
                fill: '#333333',
                closed: true,
            },
            {
                instruction: 'Punto 1',
                color: '#333333',
                lineWidth: 4,
                points: [
                    {x:160, y:175}, {x:150, y:185}, {x:150, y:198},
                    {x:158, y:205}, {x:170, y:203}, {x:175, y:192},
                    {x:172, y:180}, {x:163, y:175},
                ],
                fill: '#333333',
                closed: true,
            },
            {
                instruction: 'Punto 2',
                color: '#333333',
                lineWidth: 4,
                points: [
                    {x:230, y:175}, {x:222, y:185}, {x:222, y:198},
                    {x:230, y:205}, {x:242, y:203}, {x:248, y:192},
                    {x:245, y:180}, {x:235, y:175},
                ],
                fill: '#333333',
                closed: true,
            },
            {
                instruction: 'Punto 3',
                color: '#333333',
                lineWidth: 4,
                points: [
                    {x:155, y:250}, {x:148, y:260}, {x:148, y:272},
                    {x:155, y:278}, {x:165, y:275}, {x:170, y:265},
                    {x:167, y:255}, {x:158, y:250},
                ],
                fill: '#333333',
                closed: true,
            },
            {
                instruction: 'Punto 4',
                color: '#333333',
                lineWidth: 4,
                points: [
                    {x:235, y:250}, {x:228, y:260}, {x:228, y:272},
                    {x:235, y:278}, {x:245, y:275}, {x:250, y:265},
                    {x:247, y:255}, {x:238, y:250},
                ],
                fill: '#333333',
                closed: true,
            },
        ]
    },

    // ============ COMIDA ============
    donut: {
        name: 'Dona',
        category: 'food',
        difficulty: 1,
        bgColor: '#FFF0F5',
        preview: '<svg viewBox="0 0 100 100"><ellipse cx="50" cy="55" rx="35" ry="30" fill="#FFB74D"/><ellipse cx="50" cy="50" rx="34" ry="28" fill="#E91E63"/><ellipse cx="50" cy="55" rx="14" ry="12" fill="#FFF9E6"/><circle cx="35" cy="40" r="2" fill="#FFD600"/><circle cx="55" cy="38" r="2" fill="#4CAF50"/><circle cx="45" cy="50" r="2" fill="#2196F3"/><circle cx="65" cy="48" r="2" fill="#FF9800"/></svg>',
        steps: [
            {
                instruction: 'Base de la dona',
                color: '#FFB74D',
                lineWidth: 7,
                points: [
                    {x:200, y:130}, {x:150, y:140}, {x:110, y:165}, {x:90, y:200},
                    {x:85, y:240}, {x:95, y:275}, {x:120, y:305},
                    {x:160, y:320}, {x:200, y:325}, {x:240, y:320},
                    {x:280, y:305}, {x:305, y:275}, {x:315, y:240},
                    {x:310, y:200}, {x:290, y:165}, {x:250, y:140},
                    {x:200, y:130},
                ],
                fill: '#FFB74D',
                closed: true,
            },
            {
                instruction: 'Glaseado',
                color: '#E91E63',
                lineWidth: 6,
                points: [
                    {x:200, y:125}, {x:148, y:135}, {x:108, y:158}, {x:88, y:195},
                    {x:83, y:230}, {x:88, y:250}, {x:100, y:265},
                    {x:115, y:260}, {x:120, y:245}, {x:135, y:255},
                    {x:155, y:260}, {x:165, y:248}, {x:180, y:258},
                    {x:200, y:262}, {x:220, y:258}, {x:235, y:248},
                    {x:245, y:260}, {x:265, y:255}, {x:280, y:245},
                    {x:285, y:260}, {x:300, y:265}, {x:312, y:250},
                    {x:317, y:230}, {x:312, y:195}, {x:292, y:158},
                    {x:252, y:135}, {x:200, y:125},
                ],
                fill: '#E91E63',
                closed: true,
            },
            {
                instruction: 'Agujero',
                color: '#FFF9E6',
                lineWidth: 5,
                points: [
                    {x:200, y:195}, {x:178, y:200}, {x:168, y:215}, {x:170, y:235},
                    {x:182, y:248}, {x:200, y:252}, {x:218, y:248},
                    {x:230, y:235}, {x:232, y:215}, {x:222, y:200},
                    {x:200, y:195},
                ],
                fill: '#FFF9E6',
                closed: true,
            },
        ]
    },

    cupcake: {
        name: 'Cupcake',
        category: 'food',
        difficulty: 2,
        bgColor: '#FFF8E1',
        preview: '<svg viewBox="0 0 100 100"><path d="M30 55h40l5 35H25z" fill="#FFB74D"/><path d="M25 50c0-15 10-28 25-28s25 13 25 28" fill="#E91E63"/><path d="M50 15v10" stroke="#FF9800" stroke-width="2"/><circle cx="50" cy="12" r="4" fill="#FF9800"/></svg>',
        steps: [
            {
                instruction: 'Base del molde',
                color: '#FFB74D',
                lineWidth: 6,
                points: [
                    {x:120, y:230}, {x:280, y:230}, {x:295, y:360},
                    {x:105, y:360}, {x:120, y:230},
                ],
                fill: '#FFB74D',
                closed: true,
            },
            {
                instruction: 'Crema',
                color: '#E91E63',
                lineWidth: 6,
                points: [
                    {x:110, y:232}, {x:100, y:205}, {x:105, y:175}, {x:125, y:150},
                    {x:155, y:138}, {x:185, y:130}, {x:200, y:118},
                    {x:215, y:130}, {x:245, y:138}, {x:275, y:150},
                    {x:295, y:175}, {x:300, y:205}, {x:290, y:232},
                ],
                fill: '#E91E63',
                closed: true,
            },
            {
                instruction: 'Cereza',
                color: '#F44336',
                lineWidth: 5,
                points: [
                    {x:200, y:95}, {x:185, y:100}, {x:178, y:112},
                    {x:182, y:125}, {x:195, y:130}, {x:205, y:130},
                    {x:218, y:125}, {x:222, y:112}, {x:215, y:100},
                    {x:200, y:95},
                ],
                fill: '#F44336',
                closed: true,
            },
            {
                instruction: 'Tallo cereza',
                color: '#4CAF50',
                lineWidth: 4,
                points: [{x:200, y:95}, {x:198, y:80}, {x:195, y:68}],
            },
            {
                instruction: 'Lineas del molde',
                color: '#E6A23C',
                lineWidth: 3,
                points: [{x:150, y:235}, {x:145, y:355}],
            },
            {
                instruction: 'Linea molde 2',
                color: '#E6A23C',
                lineWidth: 3,
                points: [{x:200, y:232}, {x:200, y:358}],
            },
            {
                instruction: 'Linea molde 3',
                color: '#E6A23C',
                lineWidth: 3,
                points: [{x:250, y:235}, {x:255, y:355}],
            },
        ]
    },

    hotdog: {
        name: 'Hot Dog',
        category: 'food',
        difficulty: 1,
        bgColor: '#FFF8E1',
        preview: '<svg viewBox="0 0 100 100"><path d="M20 55c0-8 8-15 15-15h30c8 0 15 7 15 15v5H20z" fill="#FFB74D"/><ellipse cx="50" cy="52" rx="32" ry="8" fill="#E57373"/><path d="M20 60h60v0c0 8-8 15-15 15H35c-8 0-15-7-15-15z" fill="#D2691E"/><path d="M25 55c8 5 15-5 25 0s15-5 25 0" stroke="#FFD600" stroke-width="2" fill="none"/></svg>',
        steps: [
            {
                instruction: 'Pan de abajo',
                color: '#D2691E',
                lineWidth: 7,
                points: [
                    {x:80, y:220}, {x:80, y:260}, {x:95, y:290}, {x:130, y:305},
                    {x:200, y:310}, {x:270, y:305}, {x:305, y:290},
                    {x:320, y:260}, {x:320, y:220},
                ],
                fill: '#D2691E',
            },
            {
                instruction: 'Salchicha',
                color: '#E57373',
                lineWidth: 6,
                points: [
                    {x:75, y:210}, {x:75, y:195}, {x:90, y:180}, {x:130, y:170},
                    {x:200, y:168}, {x:270, y:170}, {x:310, y:180},
                    {x:325, y:195}, {x:325, y:210}, {x:310, y:225},
                    {x:270, y:232}, {x:200, y:235}, {x:130, y:232},
                    {x:90, y:225}, {x:75, y:210},
                ],
                fill: '#E57373',
                closed: true,
            },
            {
                instruction: 'Pan de arriba',
                color: '#FFB74D',
                lineWidth: 7,
                points: [
                    {x:80, y:210}, {x:80, y:175}, {x:95, y:150}, {x:130, y:135},
                    {x:200, y:130}, {x:270, y:135}, {x:305, y:150},
                    {x:320, y:175}, {x:320, y:210},
                ],
                fill: '#FFB74D',
            },
            {
                instruction: 'Mostaza',
                color: '#FFD600',
                lineWidth: 4,
                points: [
                    {x:100, y:205}, {x:120, y:195}, {x:140, y:210}, {x:160, y:195},
                    {x:180, y:210}, {x:200, y:195}, {x:220, y:210},
                    {x:240, y:195}, {x:260, y:210}, {x:280, y:195}, {x:300, y:205},
                ],
            },
        ]
    },

    lollipop: {
        name: 'Paleta',
        category: 'food',
        difficulty: 1,
        bgColor: '#FFF0F5',
        preview: '<svg viewBox="0 0 100 100"><circle cx="50" cy="35" r="22" fill="#E91E63"/><path d="M30 35c0-5 4-15 10-18" stroke="white" stroke-width="2" fill="none"/><rect x="48" y="55" width="4" height="35" rx="2" fill="#FFB74D"/></svg>',
        steps: [
            {
                instruction: 'Caramelo',
                color: '#E91E63',
                lineWidth: 7,
                points: [
                    {x:200, y:80}, {x:155, y:88}, {x:120, y:112}, {x:105, y:148},
                    {x:108, y:188}, {x:130, y:220}, {x:165, y:238},
                    {x:200, y:242}, {x:235, y:238}, {x:270, y:220},
                    {x:292, y:188}, {x:295, y:148}, {x:280, y:112},
                    {x:245, y:88}, {x:200, y:80},
                ],
                fill: '#E91E63',
                closed: true,
            },
            {
                instruction: 'Espiral',
                color: '#FFFFFF',
                lineWidth: 4,
                points: [
                    {x:200, y:110}, {x:175, y:118}, {x:158, y:140}, {x:158, y:170},
                    {x:175, y:195}, {x:200, y:205}, {x:225, y:195},
                    {x:245, y:170}, {x:245, y:140}, {x:228, y:118},
                    {x:205, y:130}, {x:195, y:150}, {x:200, y:170},
                    {x:215, y:180}, {x:225, y:165}, {x:215, y:150},
                ],
            },
            {
                instruction: 'Palito',
                color: '#FFB74D',
                lineWidth: 7,
                points: [
                    {x:200, y:242}, {x:200, y:280}, {x:200, y:320}, {x:200, y:370},
                ],
            },
        ]
    },

    // ============ VEHICULOS ============
    train: {
        name: 'Tren',
        category: 'vehicles',
        difficulty: 2,
        bgColor: '#E3F2FD',
        preview: '<svg viewBox="0 0 100 100"><rect x="10" y="40" width="45" height="35" rx="4" fill="#F44336"/><rect x="55" y="50" width="30" height="25" rx="2" fill="#2196F3"/><rect x="15" y="45" width="15" height="12" rx="2" fill="#BBDEFB"/><circle cx="22" cy="80" r="6" fill="#333"/><circle cx="42" cy="80" r="6" fill="#333"/><circle cx="70" cy="80" r="6" fill="#333"/><rect x="10" y="35" width="8" height="8" rx="2" fill="#333"/><path d="M8 30l4-10 4 10" fill="#333"/></svg>',
        steps: [
            {
                instruction: 'Locomotora',
                color: '#F44336',
                lineWidth: 7,
                points: [
                    {x:50, y:170}, {x:50, y:300}, {x:230, y:300}, {x:230, y:170},
                    {x:50, y:170},
                ],
                fill: '#F44336',
                closed: true,
            },
            {
                instruction: 'Vagon',
                color: '#2196F3',
                lineWidth: 6,
                points: [
                    {x:240, y:200}, {x:240, y:300}, {x:360, y:300}, {x:360, y:200},
                    {x:240, y:200},
                ],
                fill: '#2196F3',
                closed: true,
            },
            {
                instruction: 'Ventana locomotora',
                color: '#BBDEFB',
                lineWidth: 5,
                points: [
                    {x:70, y:185}, {x:70, y:230}, {x:130, y:230}, {x:130, y:185},
                    {x:70, y:185},
                ],
                fill: '#BBDEFB',
                closed: true,
            },
            {
                instruction: 'Ventana vagon',
                color: '#BBDEFB',
                lineWidth: 5,
                points: [
                    {x:260, y:215}, {x:260, y:255}, {x:340, y:255}, {x:340, y:215},
                    {x:260, y:215},
                ],
                fill: '#BBDEFB',
                closed: true,
            },
            {
                instruction: 'Chimenea',
                color: '#333333',
                lineWidth: 5,
                points: [
                    {x:75, y:170}, {x:75, y:140}, {x:65, y:130}, {x:65, y:110},
                    {x:95, y:110}, {x:95, y:130}, {x:85, y:140}, {x:85, y:170},
                ],
                fill: '#333333',
                closed: true,
            },
            {
                instruction: 'Rueda 1',
                color: '#333333',
                lineWidth: 5,
                points: [
                    {x:100, y:300}, {x:88, y:310}, {x:85, y:325}, {x:90, y:338},
                    {x:105, y:345}, {x:120, y:340}, {x:128, y:328},
                    {x:128, y:315}, {x:120, y:305}, {x:105, y:300},
                ],
                fill: '#333333',
                closed: true,
            },
            {
                instruction: 'Rueda 2',
                color: '#333333',
                lineWidth: 5,
                points: [
                    {x:185, y:300}, {x:173, y:310}, {x:170, y:325}, {x:175, y:338},
                    {x:190, y:345}, {x:205, y:340}, {x:213, y:328},
                    {x:213, y:315}, {x:205, y:305}, {x:190, y:300},
                ],
                fill: '#333333',
                closed: true,
            },
            {
                instruction: 'Rueda 3',
                color: '#333333',
                lineWidth: 5,
                points: [
                    {x:300, y:300}, {x:288, y:310}, {x:285, y:325}, {x:290, y:338},
                    {x:305, y:345}, {x:320, y:340}, {x:328, y:328},
                    {x:328, y:315}, {x:320, y:305}, {x:305, y:300},
                ],
                fill: '#333333',
                closed: true,
            },
        ]
    },

    helicopter: {
        name: 'Helicoptero',
        category: 'vehicles',
        difficulty: 3,
        bgColor: '#E3F2FD',
        preview: '<svg viewBox="0 0 100 100"><ellipse cx="45" cy="55" rx="28" ry="18" fill="#4CAF50"/><rect x="18" y="48" width="15" height="10" rx="3" fill="#81C784"/><path d="M70 50l18-5v4l-18 3z" fill="#66BB6A"/><line x1="20" y1="35" x2="80" y2="35" stroke="#333" stroke-width="2"/><line x1="45" y1="35" x2="45" y2="40" stroke="#333" stroke-width="2"/><line x1="35" y1="73" x2="55" y2="73" stroke="#333" stroke-width="2"/></svg>',
        steps: [
            {
                instruction: 'Cuerpo',
                color: '#4CAF50',
                lineWidth: 7,
                points: [
                    {x:120, y:200}, {x:100, y:185}, {x:90, y:165}, {x:95, y:145},
                    {x:115, y:130}, {x:155, y:122}, {x:200, y:120},
                    {x:250, y:122}, {x:280, y:135}, {x:295, y:155},
                    {x:298, y:180}, {x:288, y:205}, {x:265, y:225},
                    {x:230, y:235}, {x:180, y:238}, {x:140, y:230},
                    {x:120, y:215},
                ],
                fill: '#4CAF50',
                closed: true,
            },
            {
                instruction: 'Ventana',
                color: '#BBDEFB',
                lineWidth: 5,
                points: [
                    {x:110, y:175}, {x:105, y:160}, {x:110, y:145}, {x:130, y:138},
                    {x:155, y:138}, {x:165, y:148}, {x:165, y:175},
                    {x:110, y:175},
                ],
                fill: '#BBDEFB',
                closed: true,
            },
            {
                instruction: 'Cola',
                color: '#66BB6A',
                lineWidth: 6,
                points: [
                    {x:290, y:165}, {x:320, y:148}, {x:345, y:130},
                    {x:365, y:120}, {x:370, y:128}, {x:365, y:140},
                    {x:345, y:155}, {x:320, y:168}, {x:295, y:180},
                ],
                fill: '#66BB6A',
                closed: true,
            },
            {
                instruction: 'Rotor cola',
                color: '#333333',
                lineWidth: 4,
                points: [{x:365, y:105}, {x:368, y:120}, {x:365, y:145}],
            },
            {
                instruction: 'Helice',
                color: '#333333',
                lineWidth: 5,
                points: [{x:60, y:115}, {x:120, y:112}, {x:200, y:110}, {x:280, y:112}, {x:340, y:115}],
            },
            {
                instruction: 'Eje helice',
                color: '#333333',
                lineWidth: 4,
                points: [{x:200, y:115}, {x:200, y:122}],
            },
            {
                instruction: 'Patin izquierdo',
                color: '#333333',
                lineWidth: 4,
                points: [
                    {x:150, y:235}, {x:145, y:255}, {x:130, y:265}, {x:120, y:268},
                    {x:240, y:268}, {x:235, y:265}, {x:230, y:255}, {x:225, y:238},
                ],
            },
        ]
    },

    bicycle: {
        name: 'Bicicleta',
        category: 'vehicles',
        difficulty: 3,
        bgColor: '#F1F8E9',
        preview: '<svg viewBox="0 0 100 100"><circle cx="28" cy="62" r="16" fill="none" stroke="#F44336" stroke-width="2.5"/><circle cx="72" cy="62" r="16" fill="none" stroke="#F44336" stroke-width="2.5"/><path d="M28 62l18-25h10l-6 25h22l-7-25" stroke="#333" stroke-width="2" fill="none"/><path d="M50 37l8-8h15" stroke="#333" stroke-width="2" fill="none"/><path d="M44 62l-8 0" stroke="#333" stroke-width="2"/></svg>',
        steps: [
            {
                instruction: 'Rueda trasera',
                color: '#F44336',
                lineWidth: 5,
                points: [
                    {x:110, y:240}, {x:90, y:255}, {x:80, y:278}, {x:82, y:302},
                    {x:95, y:322}, {x:115, y:332}, {x:138, y:330},
                    {x:155, y:318}, {x:162, y:298}, {x:158, y:275},
                    {x:145, y:255}, {x:125, y:242}, {x:110, y:240},
                ],
                closed: true,
            },
            {
                instruction: 'Rueda delantera',
                color: '#F44336',
                lineWidth: 5,
                points: [
                    {x:290, y:240}, {x:270, y:255}, {x:260, y:278}, {x:262, y:302},
                    {x:275, y:322}, {x:295, y:332}, {x:318, y:330},
                    {x:335, y:318}, {x:342, y:298}, {x:338, y:275},
                    {x:325, y:255}, {x:305, y:242}, {x:290, y:240},
                ],
                closed: true,
            },
            {
                instruction: 'Cuadro - tubo superior',
                color: '#333333',
                lineWidth: 5,
                points: [{x:120, y:285}, {x:160, y:195}, {x:210, y:185}],
            },
            {
                instruction: 'Cuadro - tubo inferior',
                color: '#333333',
                lineWidth: 5,
                points: [{x:120, y:285}, {x:200, y:280}, {x:290, y:285}],
            },
            {
                instruction: 'Cuadro - tubo diagonal',
                color: '#333333',
                lineWidth: 5,
                points: [{x:210, y:185}, {x:240, y:230}, {x:290, y:285}],
            },
            {
                instruction: 'Manubrio',
                color: '#333333',
                lineWidth: 5,
                points: [{x:290, y:285}, {x:295, y:210}, {x:290, y:175}, {x:280, y:160}, {x:310, y:158}],
            },
            {
                instruction: 'Asiento',
                color: '#333333',
                lineWidth: 5,
                points: [{x:155, y:195}, {x:145, y:180}, {x:175, y:178}],
            },
            {
                instruction: 'Pedales',
                color: '#333333',
                lineWidth: 4,
                points: [{x:195, y:265}, {x:210, y:280}, {x:215, y:295}],
            },
        ]
    },

    airplane: {
        name: 'Avion',
        category: 'vehicles',
        difficulty: 2,
        bgColor: '#E3F2FD',
        preview: '<svg viewBox="0 0 100 100"><ellipse cx="50" cy="50" rx="35" ry="10" fill="#90CAF9"/><path d="M35 42l-25-18h8l22 16" fill="#2196F3"/><path d="M35 58l-25 18h8l22-16" fill="#2196F3"/><path d="M70 48l15-8h5l-8 10" fill="#64B5F6"/><circle cx="20" cy="50" r="5" fill="#E3F2FD"/></svg>',
        steps: [
            {
                instruction: 'Fuselaje',
                color: '#90CAF9',
                lineWidth: 7,
                points: [
                    {x:60, y:200}, {x:80, y:178}, {x:120, y:165}, {x:200, y:160},
                    {x:280, y:162}, {x:330, y:170}, {x:355, y:185},
                    {x:360, y:200}, {x:355, y:215}, {x:330, y:230},
                    {x:280, y:238}, {x:200, y:240}, {x:120, y:235},
                    {x:80, y:222}, {x:60, y:200},
                ],
                fill: '#90CAF9',
                closed: true,
            },
            {
                instruction: 'Ala superior',
                color: '#2196F3',
                lineWidth: 6,
                points: [
                    {x:160, y:170}, {x:140, y:140}, {x:120, y:105},
                    {x:110, y:80}, {x:125, y:82}, {x:150, y:100},
                    {x:175, y:130}, {x:190, y:162},
                ],
                fill: '#2196F3',
                closed: true,
            },
            {
                instruction: 'Ala inferior',
                color: '#2196F3',
                lineWidth: 6,
                points: [
                    {x:160, y:230}, {x:140, y:260}, {x:120, y:295},
                    {x:110, y:320}, {x:125, y:318}, {x:150, y:300},
                    {x:175, y:270}, {x:190, y:238},
                ],
                fill: '#2196F3',
                closed: true,
            },
            {
                instruction: 'Cola',
                color: '#64B5F6',
                lineWidth: 5,
                points: [
                    {x:340, y:185}, {x:350, y:160}, {x:360, y:140},
                    {x:370, y:135}, {x:372, y:148}, {x:368, y:165},
                    {x:358, y:185},
                ],
                fill: '#64B5F6',
                closed: true,
            },
            {
                instruction: 'Ventanas',
                color: '#E3F2FD',
                lineWidth: 3,
                points: [
                    {x:100, y:198}, {x:96, y:193}, {x:100, y:188},
                    {x:106, y:190}, {x:108, y:196}, {x:104, y:200},
                ],
                fill: '#E3F2FD',
                closed: true,
            },
            {
                instruction: 'Ventana 2',
                color: '#E3F2FD',
                lineWidth: 3,
                points: [
                    {x:130, y:195}, {x:126, y:190}, {x:130, y:185},
                    {x:136, y:187}, {x:138, y:193}, {x:134, y:197},
                ],
                fill: '#E3F2FD',
                closed: true,
            },
        ]
    },

    sailboat: {
        name: 'Velero',
        category: 'vehicles',
        difficulty: 2,
        bgColor: '#E0F7FA',
        preview: '<svg viewBox="0 0 100 100"><path d="M50 15v55" stroke="#795548" stroke-width="2"/><path d="M50 18l30 40H50z" fill="#FF9800"/><path d="M50 25L28 58h22z" fill="#FFEB3B"/><path d="M20 70c10-3 20 3 30 0s20 3 30 0" fill="#2196F3"/><path d="M15 75h70l-5 10H20z" fill="#F44336"/></svg>',
        steps: [
            {
                instruction: 'Casco',
                color: '#F44336',
                lineWidth: 7,
                points: [
                    {x:70, y:280}, {x:100, y:320}, {x:120, y:340},
                    {x:200, y:350}, {x:280, y:340}, {x:300, y:320},
                    {x:330, y:280}, {x:70, y:280},
                ],
                fill: '#F44336',
                closed: true,
            },
            {
                instruction: 'Mastil',
                color: '#795548',
                lineWidth: 5,
                points: [{x:200, y:280}, {x:200, y:70}],
            },
            {
                instruction: 'Vela grande',
                color: '#FF9800',
                lineWidth: 6,
                points: [
                    {x:205, y:85}, {x:310, y:240}, {x:205, y:270}, {x:205, y:85},
                ],
                fill: '#FF9800',
                closed: true,
            },
            {
                instruction: 'Vela pequena',
                color: '#FFEB3B',
                lineWidth: 5,
                points: [
                    {x:195, y:100}, {x:110, y:250}, {x:195, y:265}, {x:195, y:100},
                ],
                fill: '#FFEB3B',
                closed: true,
            },
            {
                instruction: 'Olas',
                color: '#2196F3',
                lineWidth: 4,
                points: [
                    {x:40, y:290}, {x:70, y:278}, {x:100, y:290}, {x:130, y:278},
                    {x:160, y:290}, {x:200, y:278}, {x:240, y:290},
                    {x:270, y:278}, {x:300, y:290}, {x:330, y:278}, {x:360, y:290},
                ],
            },
        ]
    },

    // ============ NATURALEZA ============
    mushroom: {
        name: 'Hongo',
        category: 'nature',
        difficulty: 1,
        bgColor: '#FFF3E0',
        preview: '<svg viewBox="0 0 100 100"><path d="M15 55c0-22 15-40 35-40s35 18 35 55H15z" fill="#F44336"/><rect x="38" y="55" width="24" height="30" rx="4" fill="#FFE0B2"/><circle cx="35" cy="35" r="6" fill="white"/><circle cx="55" cy="28" r="5" fill="white"/><circle cx="68" cy="42" r="4" fill="white"/></svg>',
        steps: [
            {
                instruction: 'Sombrero',
                color: '#F44336',
                lineWidth: 7,
                points: [
                    {x:70, y:230}, {x:65, y:200}, {x:70, y:165}, {x:90, y:130},
                    {x:125, y:105}, {x:165, y:90}, {x:200, y:85},
                    {x:235, y:90}, {x:275, y:105}, {x:310, y:130},
                    {x:330, y:165}, {x:335, y:200}, {x:330, y:230},
                    {x:70, y:230},
                ],
                fill: '#F44336',
                closed: true,
            },
            {
                instruction: 'Tallo',
                color: '#FFE0B2',
                lineWidth: 6,
                points: [
                    {x:155, y:230}, {x:150, y:270}, {x:148, y:310}, {x:152, y:345},
                    {x:248, y:345}, {x:252, y:310}, {x:250, y:270},
                    {x:245, y:230},
                ],
                fill: '#FFE0B2',
                closed: true,
            },
            {
                instruction: 'Punto 1',
                color: '#FFFFFF',
                lineWidth: 4,
                points: [
                    {x:155, y:140}, {x:145, y:150}, {x:145, y:165},
                    {x:155, y:175}, {x:170, y:172}, {x:178, y:160},
                    {x:173, y:148}, {x:160, y:140},
                ],
                fill: '#FFFFFF',
                closed: true,
            },
            {
                instruction: 'Punto 2',
                color: '#FFFFFF',
                lineWidth: 4,
                points: [
                    {x:225, y:120}, {x:215, y:128}, {x:215, y:142},
                    {x:225, y:150}, {x:238, y:148}, {x:245, y:138},
                    {x:240, y:126}, {x:230, y:120},
                ],
                fill: '#FFFFFF',
                closed: true,
            },
            {
                instruction: 'Punto 3',
                color: '#FFFFFF',
                lineWidth: 4,
                points: [
                    {x:280, y:165}, {x:272, y:172}, {x:273, y:185},
                    {x:282, y:192}, {x:295, y:188}, {x:300, y:178},
                    {x:295, y:168}, {x:285, y:165},
                ],
                fill: '#FFFFFF',
                closed: true,
            },
        ]
    },

    rainbow: {
        name: 'Arcoiris',
        category: 'nature',
        difficulty: 2,
        bgColor: '#E8F5E9',
        preview: '<svg viewBox="0 0 100 100"><path d="M10 70c0-30 18-50 40-50s40 20 40 50" fill="none" stroke="#F44336" stroke-width="5"/><path d="M15 70c0-27 16-45 35-45s35 18 35 45" fill="none" stroke="#FF9800" stroke-width="4"/><path d="M20 70c0-24 14-40 30-40s30 16 30 40" fill="none" stroke="#FFEB3B" stroke-width="4"/><path d="M25 70c0-21 12-35 25-35s25 14 25 35" fill="none" stroke="#4CAF50" stroke-width="4"/><path d="M30 70c0-18 10-30 20-30s20 12 20 30" fill="none" stroke="#2196F3" stroke-width="4"/><path d="M35 70c0-14 7-24 15-24s15 10 15 24" fill="none" stroke="#9C27B0" stroke-width="4"/></svg>',
        steps: [
            {
                instruction: 'Arco rojo',
                color: '#F44336',
                lineWidth: 10,
                points: [
                    {x:50, y:310}, {x:55, y:260}, {x:70, y:210}, {x:100, y:165},
                    {x:140, y:130}, {x:200, y:115}, {x:260, y:130},
                    {x:300, y:165}, {x:330, y:210}, {x:345, y:260}, {x:350, y:310},
                ],
            },
            {
                instruction: 'Arco naranja',
                color: '#FF9800',
                lineWidth: 9,
                points: [
                    {x:70, y:310}, {x:75, y:265}, {x:90, y:220}, {x:115, y:180},
                    {x:150, y:150}, {x:200, y:138}, {x:250, y:150},
                    {x:285, y:180}, {x:310, y:220}, {x:325, y:265}, {x:330, y:310},
                ],
            },
            {
                instruction: 'Arco amarillo',
                color: '#FFEB3B',
                lineWidth: 8,
                points: [
                    {x:90, y:310}, {x:95, y:270}, {x:108, y:230}, {x:130, y:195},
                    {x:160, y:170}, {x:200, y:160}, {x:240, y:170},
                    {x:270, y:195}, {x:292, y:230}, {x:305, y:270}, {x:310, y:310},
                ],
            },
            {
                instruction: 'Arco verde',
                color: '#4CAF50',
                lineWidth: 7,
                points: [
                    {x:110, y:310}, {x:115, y:278}, {x:125, y:245}, {x:148, y:215},
                    {x:172, y:195}, {x:200, y:185}, {x:228, y:195},
                    {x:252, y:215}, {x:275, y:245}, {x:285, y:278}, {x:290, y:310},
                ],
            },
            {
                instruction: 'Arco azul',
                color: '#2196F3',
                lineWidth: 6,
                points: [
                    {x:130, y:310}, {x:135, y:285}, {x:145, y:258}, {x:162, y:235},
                    {x:182, y:218}, {x:200, y:210}, {x:218, y:218},
                    {x:238, y:235}, {x:255, y:258}, {x:265, y:285}, {x:270, y:310},
                ],
            },
            {
                instruction: 'Arco morado',
                color: '#9C27B0',
                lineWidth: 5,
                points: [
                    {x:150, y:310}, {x:155, y:290}, {x:165, y:270}, {x:178, y:252},
                    {x:192, y:242}, {x:200, y:238}, {x:208, y:242},
                    {x:222, y:252}, {x:235, y:270}, {x:245, y:290}, {x:250, y:310},
                ],
            },
        ]
    },

    cloud: {
        name: 'Nube',
        category: 'nature',
        difficulty: 1,
        bgColor: '#E3F2FD',
        preview: '<svg viewBox="0 0 100 100"><path d="M25 60c-8 0-12-6-12-12s5-12 12-12c1-8 8-15 18-15 8 0 15 5 17 12 2-1 4-2 7-2 7 0 13 6 13 13s-5 12-12 13H25z" fill="white" stroke="#90CAF9" stroke-width="1.5"/></svg>',
        steps: [
            {
                instruction: 'Nube',
                color: '#FFFFFF',
                lineWidth: 7,
                points: [
                    {x:100, y:260}, {x:85, y:245}, {x:80, y:225}, {x:85, y:205},
                    {x:100, y:190}, {x:115, y:185}, {x:120, y:170},
                    {x:135, y:150}, {x:160, y:140}, {x:190, y:138},
                    {x:215, y:145}, {x:230, y:155}, {x:245, y:148},
                    {x:265, y:145}, {x:285, y:155}, {x:300, y:172},
                    {x:305, y:195}, {x:298, y:218}, {x:310, y:230},
                    {x:315, y:248}, {x:308, y:262}, {x:100, y:262},
                ],
                fill: '#FFFFFF',
                closed: true,
            },
            {
                instruction: 'Sombra',
                color: '#E3F2FD',
                lineWidth: 4,
                points: [
                    {x:120, y:255}, {x:160, y:250}, {x:200, y:255},
                    {x:240, y:250}, {x:280, y:255},
                ],
            },
        ]
    },

    star: {
        name: 'Estrella',
        category: 'nature',
        difficulty: 1,
        bgColor: '#FFF8E1',
        preview: '<svg viewBox="0 0 100 100"><polygon points="50,15 61,40 88,40 67,55 75,82 50,67 25,82 33,55 12,40 39,40" fill="#FFD600"/></svg>',
        steps: [
            {
                instruction: 'Estrella',
                color: '#FFD600',
                lineWidth: 7,
                points: [
                    {x:200, y:60}, {x:225, y:145}, {x:315, y:150},
                    {x:248, y:210}, {x:270, y:300},
                    {x:200, y:255}, {x:130, y:300},
                    {x:152, y:210}, {x:85, y:150},
                    {x:175, y:145}, {x:200, y:60},
                ],
                fill: '#FFD600',
                closed: true,
            },
        ]
    },

    // ============ COMIDA EXTRA ============
    popsicle: {
        name: 'Paleta helada',
        category: 'food',
        difficulty: 1,
        bgColor: '#E8F5E9',
        preview: '<svg viewBox="0 0 100 100"><rect x="35" y="20" width="30" height="45" rx="15" fill="#4CAF50"/><rect x="47" y="62" width="6" height="25" rx="2" fill="#FFB74D"/></svg>',
        steps: [
            {
                instruction: 'Helado',
                color: '#4CAF50',
                lineWidth: 7,
                points: [
                    {x:140, y:90}, {x:125, y:100}, {x:115, y:120}, {x:112, y:150},
                    {x:112, y:250}, {x:288, y:250},
                    {x:288, y:150}, {x:285, y:120}, {x:275, y:100},
                    {x:260, y:90}, {x:200, y:80}, {x:140, y:90},
                ],
                fill: '#4CAF50',
                closed: true,
            },
            {
                instruction: 'Palito',
                color: '#FFB74D',
                lineWidth: 7,
                points: [
                    {x:185, y:250}, {x:185, y:300}, {x:185, y:350},
                    {x:188, y:365}, {x:200, y:370}, {x:212, y:365},
                    {x:215, y:350}, {x:215, y:300}, {x:215, y:250},
                ],
                fill: '#FFB74D',
                closed: true,
            },
        ]
    },

    cookie: {
        name: 'Galleta',
        category: 'food',
        difficulty: 1,
        bgColor: '#FFF8E1',
        preview: '<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="30" fill="#D2691E"/><circle cx="38" cy="38" r="4" fill="#5D4037"/><circle cx="58" cy="42" r="3.5" fill="#5D4037"/><circle cx="45" cy="58" r="4" fill="#5D4037"/><circle cx="62" cy="60" r="3" fill="#5D4037"/></svg>',
        steps: [
            {
                instruction: 'Galleta',
                color: '#D2691E',
                lineWidth: 7,
                points: [
                    {x:200, y:100}, {x:155, y:108}, {x:118, y:130}, {x:98, y:168},
                    {x:90, y:210}, {x:95, y:255}, {x:115, y:290},
                    {x:148, y:315}, {x:190, y:328}, {x:210, y:330},
                    {x:252, y:325}, {x:285, y:305}, {x:308, y:275},
                    {x:318, y:238}, {x:315, y:195}, {x:300, y:158},
                    {x:270, y:128}, {x:235, y:108}, {x:200, y:100},
                ],
                fill: '#D2691E',
                closed: true,
            },
            {
                instruction: 'Chispa 1',
                color: '#5D4037',
                lineWidth: 4,
                points: [
                    {x:160, y:170}, {x:150, y:180}, {x:152, y:195},
                    {x:165, y:200}, {x:178, y:193}, {x:178, y:180},
                    {x:168, y:170},
                ],
                fill: '#5D4037',
                closed: true,
            },
            {
                instruction: 'Chispa 2',
                color: '#5D4037',
                lineWidth: 4,
                points: [
                    {x:240, y:185}, {x:232, y:195}, {x:234, y:208},
                    {x:245, y:213}, {x:256, y:208}, {x:258, y:195},
                    {x:248, y:185},
                ],
                fill: '#5D4037',
                closed: true,
            },
            {
                instruction: 'Chispa 3',
                color: '#5D4037',
                lineWidth: 4,
                points: [
                    {x:185, y:250}, {x:178, y:258}, {x:180, y:270},
                    {x:190, y:275}, {x:200, y:270}, {x:202, y:258},
                    {x:195, y:250},
                ],
                fill: '#5D4037',
                closed: true,
            },
            {
                instruction: 'Chispa 4',
                color: '#5D4037',
                lineWidth: 3,
                points: [
                    {x:260, y:255}, {x:255, y:262}, {x:258, y:272},
                    {x:268, y:275}, {x:275, y:268}, {x:274, y:258},
                    {x:265, y:255},
                ],
                fill: '#5D4037',
                closed: true,
            },
        ]
    },

    taco: {
        name: 'Taco',
        category: 'food',
        difficulty: 2,
        bgColor: '#FFF8E1',
        preview: '<svg viewBox="0 0 100 100"><path d="M15 65c5-30 15-35 35-35s30 5 35 35z" fill="#FFB74D"/><path d="M20 60c5-15 12-20 30-20s25 5 30 20" fill="#4CAF50"/><circle cx="35" cy="52" r="4" fill="#F44336"/><circle cx="50" cy="48" r="3" fill="#F44336"/><circle cx="62" cy="52" r="4" fill="#FF9800"/></svg>',
        steps: [
            {
                instruction: 'Tortilla',
                color: '#FFB74D',
                lineWidth: 7,
                points: [
                    {x:60, y:300}, {x:70, y:250}, {x:90, y:200}, {x:120, y:160},
                    {x:160, y:135}, {x:200, y:125}, {x:240, y:135},
                    {x:280, y:160}, {x:310, y:200}, {x:330, y:250},
                    {x:340, y:300}, {x:60, y:300},
                ],
                fill: '#FFB74D',
                closed: true,
            },
            {
                instruction: 'Lechuga',
                color: '#4CAF50',
                lineWidth: 5,
                points: [
                    {x:85, y:270}, {x:100, y:240}, {x:120, y:210}, {x:140, y:195},
                    {x:155, y:205}, {x:170, y:190}, {x:190, y:180},
                    {x:210, y:190}, {x:230, y:195}, {x:250, y:205},
                    {x:260, y:195}, {x:280, y:210}, {x:300, y:240},
                    {x:315, y:270},
                ],
                fill: '#4CAF50',
            },
            {
                instruction: 'Tomate 1',
                color: '#F44336',
                lineWidth: 4,
                points: [
                    {x:150, y:225}, {x:142, y:235}, {x:142, y:250},
                    {x:152, y:258}, {x:165, y:252}, {x:168, y:240},
                    {x:160, y:228},
                ],
                fill: '#F44336',
                closed: true,
            },
            {
                instruction: 'Tomate 2',
                color: '#F44336',
                lineWidth: 4,
                points: [
                    {x:210, y:215}, {x:202, y:225}, {x:203, y:238},
                    {x:213, y:245}, {x:225, y:240}, {x:228, y:228},
                    {x:220, y:218},
                ],
                fill: '#F44336',
                closed: true,
            },
            {
                instruction: 'Queso',
                color: '#FFD600',
                lineWidth: 4,
                points: [
                    {x:260, y:235}, {x:252, y:248}, {x:255, y:262},
                    {x:268, y:268}, {x:278, y:260}, {x:278, y:248},
                    {x:270, y:238},
                ],
                fill: '#FFD600',
                closed: true,
            },
        ]
    },

    // ============ ANIMALES EXTRA ============
    penguin: {
        name: 'Pinguino',
        category: 'animals',
        difficulty: 2,
        bgColor: '#E3F2FD',
        preview: '<svg viewBox="0 0 100 100"><ellipse cx="50" cy="55" rx="22" ry="30" fill="#333"/><ellipse cx="50" cy="60" rx="15" ry="22" fill="white"/><circle cx="43" cy="42" r="3" fill="white"/><circle cx="57" cy="42" r="3" fill="white"/><circle cx="43" cy="42" r="1.5" fill="#333"/><circle cx="57" cy="42" r="1.5" fill="#333"/><path d="M47 50l3 4 3-4z" fill="#FF9800"/><path d="M42 82l-5 5h14z" fill="#FF9800"/><path d="M58 82l5 5H50z" fill="#FF9800"/></svg>',
        steps: [
            {
                instruction: 'Cuerpo negro',
                color: '#333333',
                lineWidth: 7,
                points: [
                    {x:200, y:80}, {x:160, y:90}, {x:130, y:115}, {x:115, y:150},
                    {x:110, y:200}, {x:115, y:260}, {x:130, y:310},
                    {x:155, y:340}, {x:200, y:355}, {x:245, y:340},
                    {x:270, y:310}, {x:285, y:260}, {x:290, y:200},
                    {x:285, y:150}, {x:270, y:115}, {x:240, y:90},
                    {x:200, y:80},
                ],
                fill: '#333333',
                closed: true,
            },
            {
                instruction: 'Panza blanca',
                color: '#FFFFFF',
                lineWidth: 5,
                points: [
                    {x:200, y:140}, {x:170, y:148}, {x:152, y:170}, {x:145, y:205},
                    {x:148, y:250}, {x:158, y:290}, {x:175, y:320},
                    {x:200, y:330}, {x:225, y:320}, {x:242, y:290},
                    {x:252, y:250}, {x:255, y:205}, {x:248, y:170},
                    {x:230, y:148}, {x:200, y:140},
                ],
                fill: '#FFFFFF',
                closed: true,
            },
            {
                instruction: 'Ojo izquierdo (blanco)',
                color: '#FFFFFF',
                lineWidth: 3,
                points: [
                    {x:172, y:135}, {x:165, y:142}, {x:165, y:155},
                    {x:172, y:162}, {x:182, y:160}, {x:188, y:150},
                    {x:185, y:140}, {x:178, y:135},
                ],
                fill: '#FFFFFF',
                closed: true,
            },
            {
                instruction: 'Ojo derecho (blanco)',
                color: '#FFFFFF',
                lineWidth: 3,
                points: [
                    {x:218, y:135}, {x:212, y:142}, {x:212, y:155},
                    {x:218, y:162}, {x:228, y:160}, {x:235, y:150},
                    {x:232, y:140}, {x:225, y:135},
                ],
                fill: '#FFFFFF',
                closed: true,
            },
            {
                instruction: 'Pupila izquierda',
                color: '#333333',
                lineWidth: 3,
                points: [
                    {x:175, y:145}, {x:172, y:150}, {x:175, y:155},
                    {x:180, y:153}, {x:181, y:148}, {x:178, y:145},
                ],
                fill: '#333333',
                closed: true,
            },
            {
                instruction: 'Pupila derecha',
                color: '#333333',
                lineWidth: 3,
                points: [
                    {x:222, y:145}, {x:219, y:150}, {x:222, y:155},
                    {x:227, y:153}, {x:228, y:148}, {x:225, y:145},
                ],
                fill: '#333333',
                closed: true,
            },
            {
                instruction: 'Pico',
                color: '#FF9800',
                lineWidth: 5,
                points: [
                    {x:188, y:168}, {x:200, y:190}, {x:212, y:168},
                ],
                fill: '#FF9800',
                closed: true,
            },
            {
                instruction: 'Pata izquierda',
                color: '#FF9800',
                lineWidth: 5,
                points: [
                    {x:170, y:348}, {x:148, y:365}, {x:140, y:370},
                    {x:190, y:370}, {x:185, y:360}, {x:178, y:350},
                ],
                fill: '#FF9800',
                closed: true,
            },
            {
                instruction: 'Pata derecha',
                color: '#FF9800',
                lineWidth: 5,
                points: [
                    {x:230, y:348}, {x:252, y:365}, {x:260, y:370},
                    {x:210, y:370}, {x:215, y:360}, {x:222, y:350},
                ],
                fill: '#FF9800',
                closed: true,
            },
        ]
    },

    frog: {
        name: 'Rana',
        category: 'animals',
        difficulty: 2,
        bgColor: '#E8F5E9',
        preview: '<svg viewBox="0 0 100 100"><ellipse cx="50" cy="58" rx="28" ry="20" fill="#4CAF50"/><circle cx="38" cy="38" r="10" fill="#66BB6A"/><circle cx="62" cy="38" r="10" fill="#66BB6A"/><circle cx="38" cy="36" r="5" fill="white"/><circle cx="62" cy="36" r="5" fill="white"/><circle cx="38" cy="36" r="2.5" fill="#333"/><circle cx="62" cy="36" r="2.5" fill="#333"/><path d="M40 62c3 3 7 5 10 5s7-2 10-5" stroke="#333" stroke-width="1.5" fill="none"/></svg>',
        steps: [
            {
                instruction: 'Cuerpo',
                color: '#4CAF50',
                lineWidth: 7,
                points: [
                    {x:200, y:170}, {x:145, y:178}, {x:105, y:200}, {x:85, y:235},
                    {x:82, y:270}, {x:95, y:305}, {x:125, y:330},
                    {x:165, y:345}, {x:200, y:348}, {x:235, y:345},
                    {x:275, y:330}, {x:305, y:305}, {x:318, y:270},
                    {x:315, y:235}, {x:295, y:200}, {x:255, y:178},
                    {x:200, y:170},
                ],
                fill: '#4CAF50',
                closed: true,
            },
            {
                instruction: 'Ojo izquierdo (globo)',
                color: '#66BB6A',
                lineWidth: 6,
                points: [
                    {x:145, y:175}, {x:125, y:155}, {x:115, y:130}, {x:120, y:108},
                    {x:138, y:95}, {x:160, y:95}, {x:178, y:108},
                    {x:182, y:130}, {x:175, y:155}, {x:160, y:175},
                ],
                fill: '#66BB6A',
                closed: true,
            },
            {
                instruction: 'Ojo derecho (globo)',
                color: '#66BB6A',
                lineWidth: 6,
                points: [
                    {x:255, y:175}, {x:240, y:155}, {x:230, y:130}, {x:232, y:108},
                    {x:248, y:95}, {x:268, y:95}, {x:285, y:108},
                    {x:290, y:130}, {x:282, y:155}, {x:268, y:175},
                ],
                fill: '#66BB6A',
                closed: true,
            },
            {
                instruction: 'Ojo blanco izq',
                color: '#FFFFFF',
                lineWidth: 4,
                points: [
                    {x:148, y:125}, {x:140, y:132}, {x:140, y:145},
                    {x:148, y:152}, {x:160, y:150}, {x:165, y:140},
                    {x:162, y:130}, {x:155, y:125},
                ],
                fill: '#FFFFFF',
                closed: true,
            },
            {
                instruction: 'Ojo blanco der',
                color: '#FFFFFF',
                lineWidth: 4,
                points: [
                    {x:255, y:125}, {x:248, y:132}, {x:248, y:145},
                    {x:255, y:152}, {x:265, y:150}, {x:272, y:140},
                    {x:270, y:130}, {x:262, y:125},
                ],
                fill: '#FFFFFF',
                closed: true,
            },
            {
                instruction: 'Pupila izq',
                color: '#333333',
                lineWidth: 3,
                points: [{x:150, y:135}, {x:147, y:140}, {x:150, y:145}, {x:155, y:142}, {x:155, y:137}],
                fill: '#333333',
                closed: true,
            },
            {
                instruction: 'Pupila der',
                color: '#333333',
                lineWidth: 3,
                points: [{x:258, y:135}, {x:255, y:140}, {x:258, y:145}, {x:263, y:142}, {x:263, y:137}],
                fill: '#333333',
                closed: true,
            },
            {
                instruction: 'Sonrisa',
                color: '#333333',
                lineWidth: 3,
                points: [
                    {x:160, y:270}, {x:175, y:285}, {x:200, y:292},
                    {x:225, y:285}, {x:240, y:270},
                ],
            },
        ]
    },

    octopus: {
        name: 'Pulpo',
        category: 'animals',
        difficulty: 3,
        bgColor: '#F3E5F5',
        preview: '<svg viewBox="0 0 100 100"><ellipse cx="50" cy="38" rx="25" ry="22" fill="#9C27B0"/><path d="M28 55c-5 10-10 20-5 28" stroke="#9C27B0" stroke-width="3" fill="none"/><path d="M35 58c-3 12-2 22 3 28" stroke="#9C27B0" stroke-width="3" fill="none"/><path d="M50 60c0 12 0 22 0 28" stroke="#9C27B0" stroke-width="3" fill="none"/><path d="M65 58c3 12 2 22-3 28" stroke="#9C27B0" stroke-width="3" fill="none"/><path d="M72 55c5 10 10 20 5 28" stroke="#9C27B0" stroke-width="3" fill="none"/><circle cx="42" cy="34" r="4" fill="white"/><circle cx="58" cy="34" r="4" fill="white"/><circle cx="42" cy="34" r="2" fill="#333"/><circle cx="58" cy="34" r="2" fill="#333"/></svg>',
        steps: [
            {
                instruction: 'Cabeza',
                color: '#9C27B0',
                lineWidth: 7,
                points: [
                    {x:200, y:70}, {x:150, y:80}, {x:115, y:105}, {x:100, y:140},
                    {x:100, y:180}, {x:115, y:215}, {x:150, y:235},
                    {x:200, y:242}, {x:250, y:235}, {x:285, y:215},
                    {x:300, y:180}, {x:300, y:140}, {x:285, y:105},
                    {x:250, y:80}, {x:200, y:70},
                ],
                fill: '#9C27B0',
                closed: true,
            },
            {
                instruction: 'Tentaculo 1',
                color: '#9C27B0',
                lineWidth: 6,
                points: [
                    {x:110, y:220}, {x:90, y:255}, {x:75, y:290}, {x:68, y:320},
                    {x:72, y:345}, {x:82, y:355}, {x:90, y:345},
                ],
            },
            {
                instruction: 'Tentaculo 2',
                color: '#9C27B0',
                lineWidth: 6,
                points: [
                    {x:140, y:235}, {x:130, y:270}, {x:125, y:305},
                    {x:128, y:340}, {x:138, y:360}, {x:148, y:355},
                ],
            },
            {
                instruction: 'Tentaculo 3',
                color: '#9C27B0',
                lineWidth: 6,
                points: [
                    {x:200, y:242}, {x:200, y:280}, {x:200, y:315},
                    {x:198, y:345}, {x:200, y:365},
                ],
            },
            {
                instruction: 'Tentaculo 4',
                color: '#9C27B0',
                lineWidth: 6,
                points: [
                    {x:260, y:235}, {x:270, y:270}, {x:275, y:305},
                    {x:272, y:340}, {x:262, y:360}, {x:252, y:355},
                ],
            },
            {
                instruction: 'Tentaculo 5',
                color: '#9C27B0',
                lineWidth: 6,
                points: [
                    {x:290, y:220}, {x:310, y:255}, {x:325, y:290},
                    {x:332, y:320}, {x:328, y:345}, {x:318, y:355},
                    {x:310, y:345},
                ],
            },
            {
                instruction: 'Ojo izquierdo',
                color: '#FFFFFF',
                lineWidth: 4,
                points: [
                    {x:165, y:140}, {x:158, y:148}, {x:158, y:162},
                    {x:168, y:170}, {x:180, y:167}, {x:185, y:155},
                    {x:180, y:143}, {x:170, y:140},
                ],
                fill: '#FFFFFF',
                closed: true,
            },
            {
                instruction: 'Ojo derecho',
                color: '#FFFFFF',
                lineWidth: 4,
                points: [
                    {x:225, y:140}, {x:218, y:148}, {x:218, y:162},
                    {x:228, y:170}, {x:240, y:167}, {x:245, y:155},
                    {x:240, y:143}, {x:230, y:140},
                ],
                fill: '#FFFFFF',
                closed: true,
            },
            {
                instruction: 'Pupila izq',
                color: '#333333',
                lineWidth: 3,
                points: [{x:170, y:150}, {x:167, y:156}, {x:172, y:160}, {x:177, y:155}, {x:174, y:150}],
                fill: '#333333',
                closed: true,
            },
            {
                instruction: 'Pupila der',
                color: '#333333',
                lineWidth: 3,
                points: [{x:232, y:150}, {x:229, y:156}, {x:234, y:160}, {x:239, y:155}, {x:236, y:150}],
                fill: '#333333',
                closed: true,
            },
            {
                instruction: 'Sonrisa',
                color: '#E1BEE7',
                lineWidth: 3,
                points: [
                    {x:175, y:195}, {x:185, y:205}, {x:200, y:210},
                    {x:215, y:205}, {x:225, y:195},
                ],
            },
        ]
    },

    // ============ VEHICULOS EXTRA ============
    firetruck: {
        name: 'Camion bombero',
        category: 'vehicles',
        difficulty: 3,
        bgColor: '#FFEBEE',
        preview: '<svg viewBox="0 0 100 100"><rect x="10" y="45" width="55" height="28" rx="3" fill="#F44336"/><rect x="65" y="50" width="22" height="23" rx="3" fill="#D32F2F"/><rect x="68" y="53" width="16" height="12" rx="2" fill="#BBDEFB"/><circle cx="25" cy="78" r="7" fill="#333"/><circle cx="55" cy="78" r="7" fill="#333"/><circle cx="78" cy="78" r="7" fill="#333"/><rect x="10" y="38" width="50" height="5" fill="#FFD600"/><rect x="55" y:="20" width="3" height="30" fill="#999"/></svg>',
        steps: [
            {
                instruction: 'Carroceria',
                color: '#F44336',
                lineWidth: 7,
                points: [
                    {x:40, y:180}, {x:40, y:290}, {x:280, y:290}, {x:280, y:180},
                    {x:40, y:180},
                ],
                fill: '#F44336',
                closed: true,
            },
            {
                instruction: 'Cabina',
                color: '#D32F2F',
                lineWidth: 6,
                points: [
                    {x:280, y:200}, {x:280, y:290}, {x:370, y:290}, {x:370, y:200},
                    {x:280, y:200},
                ],
                fill: '#D32F2F',
                closed: true,
            },
            {
                instruction: 'Ventana cabina',
                color: '#BBDEFB',
                lineWidth: 5,
                points: [
                    {x:295, y:210}, {x:295, y:255}, {x:355, y:255}, {x:355, y:210},
                    {x:295, y:210},
                ],
                fill: '#BBDEFB',
                closed: true,
            },
            {
                instruction: 'Escalera',
                color: '#FFD600',
                lineWidth: 5,
                points: [{x:50, y:172}, {x:50, y:182}, {x:270, y:182}, {x:270, y:172}, {x:50, y:172}],
                fill: '#FFD600',
                closed: true,
            },
            {
                instruction: 'Rueda 1',
                color: '#333333',
                lineWidth: 5,
                points: [
                    {x:110, y:290}, {x:98, y:300}, {x:95, y:315}, {x:100, y:328},
                    {x:115, y:335}, {x:130, y:330}, {x:138, y:318},
                    {x:136, y:305}, {x:128, y:295}, {x:115, y:290},
                ],
                fill: '#333333',
                closed: true,
            },
            {
                instruction: 'Rueda 2',
                color: '#333333',
                lineWidth: 5,
                points: [
                    {x:230, y:290}, {x:218, y:300}, {x:215, y:315}, {x:220, y:328},
                    {x:235, y:335}, {x:250, y:330}, {x:258, y:318},
                    {x:256, y:305}, {x:248, y:295}, {x:235, y:290},
                ],
                fill: '#333333',
                closed: true,
            },
            {
                instruction: 'Rueda 3',
                color: '#333333',
                lineWidth: 5,
                points: [
                    {x:330, y:290}, {x:318, y:300}, {x:315, y:315}, {x:320, y:328},
                    {x:335, y:335}, {x:350, y:330}, {x:358, y:318},
                    {x:356, y:305}, {x:348, y:295}, {x:335, y:290},
                ],
                fill: '#333333',
                closed: true,
            },
            {
                instruction: 'Sirena',
                color: '#2196F3',
                lineWidth: 4,
                points: [
                    {x:310, y:200}, {x:305, y:188}, {x:310, y:178},
                    {x:320, y:175}, {x:330, y:178}, {x:335, y:188},
                    {x:330, y:200},
                ],
                fill: '#2196F3',
                closed: true,
            },
        ]
    },

    submarine: {
        name: 'Submarino',
        category: 'vehicles',
        difficulty: 2,
        bgColor: '#E0F7FA',
        preview: '<svg viewBox="0 0 100 100"><ellipse cx="50" cy="55" rx="35" ry="15" fill="#FF9800"/><rect x="42" y="38" width="16" height="15" rx="3" fill="#FFB74D"/><circle cx="30" cy="55" r="5" fill="#BBDEFB"/><circle cx="50" cy="55" r="5" fill="#BBDEFB"/><circle cx="70" cy="55" r="5" fill="#BBDEFB"/><rect x="48" y:="28" width="4" height="12" fill="#666"/></svg>',
        steps: [
            {
                instruction: 'Casco',
                color: '#FF9800',
                lineWidth: 7,
                points: [
                    {x:80, y:200}, {x:70, y:185}, {x:75, y:165}, {x:100, y:150},
                    {x:150, y:140}, {x:200, y:138}, {x:270, y:140},
                    {x:320, y:150}, {x:345, y:165}, {x:350, y:185},
                    {x:340, y:205}, {x:310, y:220}, {x:260, y:230},
                    {x:200, y:232}, {x:130, y:228}, {x:95, y:218},
                    {x:80, y:200},
                ],
                fill: '#FF9800',
                closed: true,
            },
            {
                instruction: 'Torre',
                color: '#FFB74D',
                lineWidth: 6,
                points: [
                    {x:170, y:145}, {x:170, y:110}, {x:175, y:100},
                    {x:230, y:100}, {x:235, y:110}, {x:235, y:145},
                ],
                fill: '#FFB74D',
                closed: true,
            },
            {
                instruction: 'Periscopio',
                color: '#666666',
                lineWidth: 4,
                points: [{x:200, y:100}, {x:200, y:75}, {x:210, y:72}, {x:215, y:75}],
            },
            {
                instruction: 'Ventana 1',
                color: '#BBDEFB',
                lineWidth: 4,
                points: [
                    {x:130, y:182}, {x:125, y:188}, {x:128, y:198},
                    {x:138, y:202}, {x:148, y:198}, {x:148, y:188},
                    {x:142, y:182}, {x:132, y:182},
                ],
                fill: '#BBDEFB',
                closed: true,
            },
            {
                instruction: 'Ventana 2',
                color: '#BBDEFB',
                lineWidth: 4,
                points: [
                    {x:195, y:178}, {x:190, y:184}, {x:192, y:195},
                    {x:202, y:198}, {x:212, y:195}, {x:214, y:184},
                    {x:208, y:178}, {x:198, y:178},
                ],
                fill: '#BBDEFB',
                closed: true,
            },
            {
                instruction: 'Ventana 3',
                color: '#BBDEFB',
                lineWidth: 4,
                points: [
                    {x:265, y:180}, {x:260, y:186}, {x:262, y:196},
                    {x:272, y:200}, {x:282, y:196}, {x:284, y:186},
                    {x:278, y:180}, {x:268, y:180},
                ],
                fill: '#BBDEFB',
                closed: true,
            },
            {
                instruction: 'Helice',
                color: '#666666',
                lineWidth: 4,
                points: [
                    {x:78, y:180}, {x:60, y:165}, {x:55, y:155},
                    {x:65, y:165}, {x:78, y:185},
                    {x:65, y:210}, {x:55, y:220},
                    {x:60, y:210}, {x:78, y:198},
                ],
            },
        ]
    },

    // ============ NATURALEZA EXTRA ============
    cactus: {
        name: 'Cactus',
        category: 'nature',
        difficulty: 2,
        bgColor: '#FFF8E1',
        preview: '<svg viewBox="0 0 100 100"><rect x="42" y="25" width="16" height="55" rx="8" fill="#4CAF50"/><path d="M42 50c-10 0-18-2-18-10s8-8 18-5" fill="#66BB6A"/><path d="M58 40c10 0 15 0 15 8s-5 10-15 8" fill="#66BB6A"/><rect x="35" y="78" width="30" height="10" rx="3" fill="#8D6E63"/></svg>',
        steps: [
            {
                instruction: 'Tronco principal',
                color: '#4CAF50',
                lineWidth: 7,
                points: [
                    {x:170, y:340}, {x:170, y:200}, {x:175, y:140}, {x:185, y:100},
                    {x:200, y:85}, {x:215, y:100}, {x:225, y:140},
                    {x:230, y:200}, {x:230, y:340},
                ],
                fill: '#4CAF50',
                closed: true,
            },
            {
                instruction: 'Brazo izquierdo',
                color: '#66BB6A',
                lineWidth: 6,
                points: [
                    {x:170, y:220}, {x:140, y:215}, {x:115, y:210},
                    {x:100, y:200}, {x:95, y:185}, {x:100, y:170},
                    {x:112, y:162}, {x:125, y:165}, {x:130, y:178},
                    {x:130, y:200}, {x:135, y:220}, {x:170, y:230},
                ],
                fill: '#66BB6A',
                closed: true,
            },
            {
                instruction: 'Brazo derecho',
                color: '#66BB6A',
                lineWidth: 6,
                points: [
                    {x:230, y:190}, {x:260, y:185}, {x:285, y:182},
                    {x:305, y:185}, {x:315, y:195}, {x:315, y:210},
                    {x:305, y:222}, {x:290, y:225}, {x:278, y:218},
                    {x:270, y:205}, {x:260, y:200}, {x:230, y:200},
                ],
                fill: '#66BB6A',
                closed: true,
            },
            {
                instruction: 'Maceta',
                color: '#8D6E63',
                lineWidth: 6,
                points: [
                    {x:140, y:340}, {x:145, y:380}, {x:255, y:380}, {x:260, y:340},
                    {x:140, y:340},
                ],
                fill: '#8D6E63',
                closed: true,
            },
        ]
    },

    moon: {
        name: 'Luna',
        category: 'nature',
        difficulty: 1,
        bgColor: '#1A237E',
        preview: '<svg viewBox="0 0 100 100"><path d="M60 20c-20 5-35 22-35 45s15 38 35 42c-5 1-10 1-15 0-22-5-38-25-38-48S22 17 45 15c5-1 10 0 15 5z" fill="#FFD600"/></svg>',
        steps: [
            {
                instruction: 'Luna creciente',
                color: '#FFD600',
                lineWidth: 7,
                points: [
                    {x:240, y:70}, {x:210, y:85}, {x:185, y:110}, {x:168, y:145},
                    {x:160, y:190}, {x:165, y:235}, {x:182, y:275},
                    {x:210, y:305}, {x:245, y:325}, {x:280, y:335},
                    {x:270, y:330}, {x:240, y:310}, {x:215, y:280},
                    {x:200, y:245}, {x:195, y:200}, {x:200, y:160},
                    {x:215, y:125}, {x:238, y:95}, {x:265, y:78},
                    {x:280, y:72}, {x:260, y:68},
                ],
                fill: '#FFD600',
                closed: true,
            },
        ]
    },
};
