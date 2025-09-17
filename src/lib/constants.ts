export const API_GLOBAL_LIMIT = 20;

export const SERVICE_TYPES = [
	{ value: 'INDIVIDUAL', label: 'Individual' },
	{ value: 'COMBO', label: 'Combo' },
	{ value: 'PACK', label: 'Pack' },
];

export const CATEGORIES = [
	'depilacion',
	'tratamientos-corporales',
	'maderoterapia',
	'mio-up',
	'alpha-synergy',
	'vacuum-therapy',
	'tratamientos-faciales',
	'limpieza-facial',
	'peeling',
	'microblading',
	'dermopigmentacion',
	'masajes',
	'bronceado',
	'estetica-integral',
];

export const BODY_PARTS = [
	'rostro',
	'cuello',
	'hombros',
	'axilas',
	'brazos',
	'manos',
	'pecho',
	'busto',
	'abdomen',
	'espalda',
	'gluteos',
	'intimo',
	'piernas',
	'pies',
	'cuerpo-completo',
];

export const TAGS = [
  'tendencia',
	'invierno',
	'limitado',
	'exclusivo',
	'nuevo',
	'destacado',
	'express',
	'intensivo',
	'popular',
	'relajante',
	'premium',
	'anti-edad',
	'verano',
	'hidratante',
];

// TODO: Actualizar a futuro para que sean botones y reemplazar estado en los filtros. 
export const SORT_OPTIONS = [
	{ value: 'relevance', label: 'Relevancia' },
	{ value: 'popularity', label: 'Popularidad' },
	{ value: 'price-asc', label: 'Menor Precio' },
	{ value: 'price-desc', label: 'Mayor Precio' },
];

export const GENDER_OPTIONS = [
	{ value: 'FEMALE', label: 'Mujer' },
	{ value: 'MALE', label: 'Hombre' },
	{ value: 'UNISEX', label: 'Unisex' },
];
