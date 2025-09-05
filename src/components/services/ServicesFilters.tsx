import { useFiltersStore } from '@/stores/filtersStore';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { serviceFiltersSchema, ServicesFiltersType } from '@/schemas/servicesSchema';
import { Input } from '../ui/input';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useEffect, useState, useCallback, useRef } from 'react';
import { Filter, X } from 'lucide-react';
import { HiFire, HiStar, HiSparkles } from 'react-icons/hi2';
import { MdLocalOffer } from 'react-icons/md';
import { FaVenus, FaMars, FaVenusMars } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { BODY_PARTS, CATEGORIES } from '@/data/servicesData';
// Opciones para los filtros
const SERVICE_TYPES = [
	{ value: 'INDIVIDUAL', label: 'Individual' },
	{ value: 'COMBO', label: 'Combo' },
	{ value: 'PACK', label: 'Pack' },
] as const;

const GENDERS = [
	{ value: 'MALE', label: 'Hombre' },
	{ value: 'FEMALE', label: 'Mujer' },
	{ value: 'UNISEX', label: 'Unisex' },
] as const;





const SORT_OPTIONS = [
	{ value: 'price-asc', label: 'Precio: Menor a Mayor' },
	{ value: 'price-desc', label: 'Precio: Mayor a Menor' },
	{ value: 'createdAt-desc', label: 'Más Recientes' },
	{ value: 'order-asc', label: 'Más Populares' },
];

// const initialFormValues: ServicesFiltersType = {
// 	search: 'dsad',
// 	type: undefined,
// 	gender: undefined,
// 	categories: [],
// 	bodyParts: [],
// };

const ServicesFilters = ({ initialFormValues }: { initialFormValues: ServicesFiltersType }) => {
	const { filters, setFilter, setFilters, resetToDefaults } = useFiltersStore();
	const [isFirstLoad, setIsFirstLoad] = useState(true);
	const [isMobileOpen, setIsMobileOpen] = useState(false);
	const debounceRef = useRef<NodeJS.Timeout | null>(null);

	const defaultValues: ServicesFiltersType = {
		search: initialFormValues.search ?? '',
		type: initialFormValues.type ?? undefined,
		gender: initialFormValues.gender ?? undefined,
		categories: initialFormValues.categories ?? [],
		bodyParts: initialFormValues.bodyParts ?? [],
		...initialFormValues,
	};

	const form = useForm<ServicesFiltersType>({
		resolver: zodResolver(serviceFiltersSchema),
		defaultValues,
	});

	// Observar cambios en el formulario y aplicar filtros automáticamente
	const watchedValues = useWatch({
		control: form.control,
	});

	// Función debounced para aplicar filtros
	const debouncedSetFilters = useCallback(
		(values: ServicesFiltersType) => {
			if (debounceRef.current) {
				clearTimeout(debounceRef.current);
			}
			debounceRef.current = setTimeout(() => {
				setFilters(values);
			}, 500); // 500ms de delay
		},
		[setFilters]
	);

	// Aplicar filtros cada vez que cambien los valores del formulario con debounce
	useEffect(() => {
		// Evitar aplicar filtros en el primer render con valores por defecto
		if (!isFirstLoad) {
			debouncedSetFilters(watchedValues);
		} else {
			setIsFirstLoad(false);
		}
	}, [watchedValues, debouncedSetFilters]);

	// Cleanup del timeout al desmontar el componente
	useEffect(() => {
		return () => {
			if (debounceRef.current) {
				clearTimeout(debounceRef.current);
			}
		};
	}, []);

	// function onSubmit(data: ServicesFiltersType) {
	// 	// Ya no es necesario setFilters aquí porque se hace automáticamente
	// 	console.log('Form submitted:', data);
	// }

	// const onReset = () => {
	// 	// Cancelar cualquier debounce pendiente
	// 	if (debounceRef.current) {
	// 		clearTimeout(debounceRef.current);
	// 	}
	// 	// Limpiar completamente los filtros del store
	// 	resetToDefaults();
	// 	// Resetear el formulario a valores completamente vacíos
	// 	form.reset({
	// 		search: undefined,
	// 		type: undefined,
	// 		gender: undefined,
	// 		categories: [],
	// 		bodyParts: [],
	// 		minPrice: undefined,
	// 		maxPrice: undefined,
	// 		isPopular: undefined,
	// 		isNew: undefined,
	// 		sortBy: undefined,
	// 		sortOrder: undefined,
	// 	});
	// };

	return (
		<>
			{/* Botón móvil flotante para abrir filtros */}
			<button
				className='md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 font-medium text-sm backdrop-blur-sm border border-primary-500/20'
				onClick={() => setIsMobileOpen(true)}
			>
				<Filter className='h-4 w-4' />
				Filtros
			</button>

			{/* Overlay móvil */}
			{isMobileOpen && (
				<div
					className='fixed inset-0 bg-black/50 z-50 md:hidden transition-opacity duration-300'
					onClick={() => setIsMobileOpen(false)}
				/>
			)}

			{/* Panel de filtros */}
			<div
				className={cn(
					// Estilos base
					'flex flex-col bg-white',
					// Móvil: panel desde abajo
					'md:hidden fixed left-0 right-0 z-50 rounded-t-2xl shadow-2xl transform transition-all duration-300 ease-out',
					isMobileOpen
						? 'bottom-0 translate-y-0 h-[85vh] max-h-[600px]'
						: 'bottom-0 translate-y-full h-[85vh] max-h-[600px]',
					// Desktop: usa toda la altura disponible del contenedor padre
					'md:block md:relative md:translate-y-0 md:w-full md:z-0 md:rounded-none md:shadow-none md:border-r md:h-full md:max-h-none md:top-0 '
				)}
			>
				{/* Header móvil con indicador de arrastre */}
				<div className='md:hidden flex-shrink-0'>
					{/* Indicador de arrastre */}
					<div className='flex justify-center pt-3 pb-2'>
						<div className='w-12 h-1 bg-gray-300 rounded-full'></div>
					</div>
					{/* Header con título y botón cerrar */}
					<div className='flex items-center justify-between px-4 pb-4'>
						<h2 className='text-lg font-semibold text-gray-900'>Filtros</h2>
						<button
							className='p-2 hover:bg-gray-100 rounded-full transition-colors'
							onClick={() => setIsMobileOpen(false)}
						>
							<X className='h-5 w-5 text-gray-500' />
						</button>
					</div>
				</div>

				{/* Contenido de filtros con scroll */}
				<div
					className='flex-1 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400 '
					style={{
						scrollbarWidth: 'thin',
						scrollbarColor: '#d1d5db #f3f4f6',
						WebkitOverflowScrolling: 'touch',
					}}
				>
					<Form {...form}>
						<form className='p-4 space-y-6 pb-8'>
							{/* Filtros de estado - Badges estilo ServiceCard */}
							<div className='space-y-4'>
								<h3 className='font-semibold text-gray-900 text-sm'>Estado</h3>
								<div className='flex flex-wrap gap-2'>
									{/* Destacado */}
									<FormField
										control={form.control}
										name='isFeatured'
										render={({ field }) => (
											<button
												type='button'
												className={cn(
													'px-2.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 flex items-center justify-center gap-1.5 border',
													field.value
														? 'bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 text-white shadow-lg border-primary-500'
														: 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-700 border-gray-200 hover:border-primary-300'
												)}
												onClick={() => field.onChange(field.value ? undefined : true)}
											>
												<HiStar size={14} className={field.value ? 'drop-shadow-sm' : ''} />
												Destacados
											</button>
										)}
									/>
									{/* Ofertas */}
									<FormField
										control={form.control}
										name='hasPromo'
										render={({ field }) => (
											<button
												type='button'
												className={cn(
													'px-2.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 flex items-center justify-center gap-1.5 border',
													field.value
														? 'bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white shadow-lg border-red-500'
														: 'bg-white text-gray-600 hover:bg-red-50 hover:text-red-700 border-gray-200 hover:border-red-300'
												)}
												onClick={() => field.onChange(field.value ? undefined : true)}
											>
												<MdLocalOffer size={14} className={field.value ? 'drop-shadow-sm' : ''} />
												Ofertas
											</button>
										)}
									/>
									{/* Popular */}
									<FormField
										control={form.control}
										name='isPopular'
										render={({ field }) => (
											<button
												type='button'
												className={cn(
													'px-2.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 flex items-center justify-center gap-1.5 border',
													field.value
														? 'bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 text-white shadow-lg border-amber-500'
														: 'bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-700 border-gray-200 hover:border-orange-300'
												)}
												onClick={() => field.onChange(field.value ? undefined : true)}
											>
												<HiFire size={14} className={field.value ? 'drop-shadow-sm' : ''} />
												Populares
											</button>
										)}
									/>

									{/* Nuevos */}
									<FormField
										control={form.control}
										name='isNew'
										render={({ field }) => (
											<button
												type='button'
												className={cn(
													'px-2.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 flex items-center justify-center gap-1.5 border',
													field.value
														? 'bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600 text-white shadow-lg border-green-500'
														: 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-700 border-gray-200 hover:border-green-300'
												)}
												onClick={() => field.onChange(field.value ? undefined : true)}
											>
												<HiSparkles size={14} className={field.value ? 'drop-shadow-sm' : ''} />
												Nuevos
											</button>
										)}
									/>
								</div>
							</div>

							{/* Filtro de Tipo de Servicio */}
							<FormField
								control={form.control}
								name='type'
								render={() => (
									<FormItem>
										<FormLabel className='font-semibold text-gray-900 text-sm'>Tipo de Servicio</FormLabel>
										<div className='flex flex-wrap gap-2'>
											{SERVICE_TYPES.map((type) => (
												<FormField
													key={type.value}
													control={form.control}
													name='type'
													render={({ field }) => {
														return (
															<button
																type='button'
																onClick={() => field.onChange(field.value === type.value ? undefined : type.value)}
																className={cn(
																	'px-2.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 border',
																	field.value === type.value
																		? 'bg-primary-600 text-white shadow-lg border-primary-600'
																		: 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-700 border-gray-200 hover:border-primary-300'
																)}
															>
																{type.label}
															</button>
														);
													}}
												/>
											))}
										</div>
										<FormMessage />
									</FormItem>
								)}
							/>
							{/* Filtro de Género */}
							<FormField
								control={form.control}
								name='gender'
								render={() => (
									<FormItem>
										<FormLabel className='font-semibold text-gray-900 text-sm'>Género</FormLabel>
										<div className='flex flex-wrap gap-2'>
											{[
												{ value: 'FEMALE', label: 'Mujer', icon: FaVenus },
												{ value: 'MALE', label: 'Hombre', icon: FaMars },
												{ value: 'UNISEX', label: 'Unisex', icon: FaVenusMars },
											].map(({ value, label, icon: Icon }) => (
												<FormField
													key={value}
													control={form.control}
													name='gender'
													render={({ field }) => {
														return (
															<button
																type='button'
																onClick={() => field.onChange(field.value === value ? undefined : value)}
																className={cn(
																	'px-2.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 border flex items-center gap-2',
																	field.value === value
																		? 'bg-primary-600 text-white shadow-lg border-primary-600'
																		: 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-700 border-gray-200 hover:border-primary-300'
																)}
															>
																{/* <Icon size={12} /> */}
																{label}
															</button>
														);
													}}
												/>
											))}
										</div>
										<FormMessage />
									</FormItem>
								)}
							/>
							{/* Filtro de Categorías */}
							<FormField
								control={form.control}
								name='categories'
								render={() => (
									<FormItem>
										<FormLabel className='font-semibold text-gray-900 text-sm'>Categorías</FormLabel>
										<div className='flex flex-wrap gap-2'>
											{CATEGORIES.map((category) => (
												<FormField
													key={category}
													control={form.control}
													name='categories'
													render={({ field }) => {
														const isSelected = field.value?.includes(category) || false;
														return (
															<button
																type='button'
																onClick={() => {
																	const currentCategories = field.value || [];
																	if (isSelected) {
																		field.onChange(currentCategories.filter((c) => c !== category));
																	} else {
																		field.onChange([...currentCategories, category]);
																	}
																}}
																className={cn(
																	'px-2.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 border',
																	isSelected
																		? 'bg-primary-600 text-white shadow-lg border-primary-600'
																		: 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-700 border-gray-200 hover:border-primary-300'
																)}
															>
																{category}
															</button>
														);
													}}
												/>
											))}
										</div>
										<FormMessage />
									</FormItem>
								)}
							/>
							{/* Filtro de Partes del Cuerpo */}
							<FormField
								control={form.control}
								name='bodyParts'
								render={() => (
									<FormItem>
										<FormLabel className='font-semibold text-gray-900 text-sm'>Partes del Cuerpo</FormLabel>
										<div className='flex flex-wrap gap-2'>
											{BODY_PARTS.map((bodyPart) => (
												<FormField
													key={bodyPart}
													control={form.control}
													name='bodyParts'
													render={({ field }) => {
														const isSelected = field.value?.includes(bodyPart) || false;
														return (
															<button
																type='button'
																onClick={() => {
																	const currentBodyParts = field.value || [];
																	if (isSelected) {
																		field.onChange(currentBodyParts.filter((bp) => bp !== bodyPart));
																	} else {
																		field.onChange([...currentBodyParts, bodyPart]);
																	}
																}}
																className={cn(
																	'px-2.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 border',
																	isSelected
																		? 'bg-primary-600 text-white shadow-lg border-primary-600'
																		: 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-700 border-gray-200 hover:border-primary-300'
																)}
															>
																{bodyPart}
															</button>
														);
													}}
												/>
											))}
										</div>
										<FormMessage />
									</FormItem>
								)}
							/>
						</form>
					</Form>
				</div>
			</div>
		</>
	);
};

export default ServicesFilters;

