export type CategoryImage = {
	url: string;
	alt: string;
};

export type CategoryData = {
	id: string;
	title: string;
	slug: string;
	subtitle?: string;
	description?: string;
	className?: string;
	variant: 'primary' | 'secondary';
	weight?: number;
	image?: CategoryImage;
};

export const categories: CategoryData[] = [
	{
		id: 'depilacion-laser',
		title: 'Depilación Láser',
		subtitle: 'Piel suave y libre de vellos',
		description: 'Eliminación permanente del vello con la última tecnología en láser diodo.',
		slug: 'depilacion',
		className: 'us:col-span-6 order-1 sm:col-start-1 sm:col-span-10 us:row-span-4 us:row-span-3 sm:row-span-8',
		variant: 'primary',
		image: {
			url: 'https://image.pollinations.ai/prompt/laser%20hair%20removal%20treatment%20on%20legs%20in%20aesthetic%20clinic,%20clean%20white%20background,%20soft%20lighting,%20natural%20skin,%20photorealistic?width=1200&height=800&model=flux-realism&enhance=true&nologo=true',
			alt: 'Pierna depilada con láser',
		},
	},
	{
		id: 'maderoterapia',
		title: 'Maderoterapia',
		subtitle: 'Modelado corporal',
		description: 'Masaje con instrumentos de madera para reducir celulitis y remodelar el cuerpo.',
		slug: 'maderoterapia',
		className: 'us:col-span-3 order-2 sm:col-start-11 sm:col-span-8 us:row-span-3  sm:row-span-5 ',
		variant: 'primary',
		image: {
			url: 'https://image.pollinations.ai/prompt/professional%20applying%20wooden%20massage%20tools%20on%20client%27s%20body,%20relaxing%20spa%20environment,%20warm%20lighting,%20natural%20tones,%20photorealistic?width=1200&height=800&model=flux-realism&enhance=true&nologo=true',
			alt: 'Aplicación de maderoterapia',
		},
	},
	{
		id: 'mio-up',
		title: 'Mio Up',
		subtitle: 'Tonificación muscular',
		description: 'Electroestimulación de última generación para tonificar y definir músculos.',
		slug: 'mio-up',
		className: 'us:col-span-3 order-5 sm:col-start-11 sm:col-span-7 sm:row-start-1 us:row-span-2  sm:row-span-3 ',
		variant: 'primary',
		weight: 8,
		image: {
			url: 'https://image.pollinations.ai/prompt/electrical%20muscle%20stimulation%20(EMS)%20toning%20treatment%20pads%20on%20abdomen,%20professional%20aesthetic%20clinic,%20neutral%20background,%20photorealistic?width=1200&height=800&model=flux-realism&enhance=true&nologo=true',
			alt: 'Tratamiento Mio Up en abdomen',
		},
	},
	{
		id: 'alpha-synergy',
		title: 'Alpha Synergy',
		subtitle: 'Rejuvenecimiento total',
		description: 'Tratamiento facial avanzado que combina radiofrecuencia y ultrasonido.',
		slug: 'alpha-synergy',
		className: 'us:col-span-3 order-3 sm:col-start-18 sm:col-span-7 sm:row-start-1 us:row-span-2 sm:row-span-3',
		variant: 'primary',
		weight: 8,
		image: {
			url: 'https://image.pollinations.ai/prompt/advanced%20facial%20treatment%20device%20radiofrequency%20and%20ultrasound,%20modern%20minimal%20clinic,%20clean%20composition,%20soft%20lighting,%20photorealistic?width=1200&height=800&model=flux-realism&enhance=true&nologo=true',
			alt: 'Dispositivo Alpha Synergy en clínica',
		},
	},
	{
		id: 'bronceado',
		title: 'Bronceado',
		subtitle: 'Color dorado natural',
		description: 'Bronceado con aerógrafo para un tono natural y uniforme sin sol.',
		slug: 'bronceado',
		className: 'us:col-span-3 order-4 sm:col-start-19 sm:col-span-6 sm:row-span-5 us:row-span-3 lg:row-span-7',
		variant: 'secondary',
		weight: 6,
		image: {
			url: 'https://image.pollinations.ai/prompt/airbrush%20tanning%20session%20even%20golden%20skin%20tone,%20clean%20studio%20background,%20soft%20warm%20light,%20photorealistic?width=1000&height=700&model=flux-realism&enhance=true&nologo=true',
			alt: 'Bronceado con aerógrafo',
		},
	},
	{
		id: 'limpieza-profunda',
		title: 'Tratamientos Faciales',
		subtitle: 'Cuidado facial completo',
		description: 'Limpieza profunda, peeling y tratamientos específicos para cada tipo de piel.',
		slug: 'limpieza-facial',
		className: 'us:col-span-6 order-6 sm:col-span-8 lg:col-span-6 us:row-span-2',
		variant: 'secondary',
		weight: 4,
		image: {
			url: 'https://image.pollinations.ai/prompt/luxury%20facial%20treatment%20with%20professional%20equipment,%20dermabrasion%20and%20peeling%20procedure,%20clean%20spa%20environment,%20soft%20lighting,%20photorealistic?width=1000&height=700&model=flux-realism&enhance=true&nologo=true',
			alt: 'Tratamiento facial profesional',
		},
	},
	{
		id: 'microblading',
		title: 'Pestañas & Cejas',
		subtitle: 'Mirada perfecta',
		description: 'Diseño y tratamiento profesional de cejas y pestañas.',
		slug: 'microblading',
		className: 'us:col-span-3 order-7 sm:col-span-8 lg:col-span-6 us:row-span-2',
		variant: 'secondary',
		weight: 5,
		image: {
			url: 'https://image.pollinations.ai/prompt/microblading%20eyebrow%20procedure%20close-up,%20professional%20technician,%20sterile%20tools,%20soft%20lighting,%20photorealistic?width=1000&height=700&model=flux-realism&enhance=true&nologo=true',
			alt: 'Cejas y pestañas perfectas',
		},
	},
	{
		id: 'unas',
		title: 'Manos & Pies',
		subtitle: 'Belleza Integral',
		description: 'Manicura, pedicura y tratamientos específicos para manos y pies.',
		slug: 'estetica-integral',
		className: 'us:col-span-3 order-8 sm:col-span-8 lg:col-span-6 us:row-span-2',
		variant: 'secondary',
		weight: 4,
		image: {
			url: 'https://image.pollinations.ai/prompt/elegant%20french%20manicure%20on%20well-groomed%20hands,%20classic%20white%20tips,%20clean%20minimal%20background,%20professional%20nail%20art,%20soft%20lighting,%20photorealistic?width=1000&height=700&model=flux-realism&enhance=true&nologo=true',
			alt: 'Manicura francesa elegante',
		},
	},
];
