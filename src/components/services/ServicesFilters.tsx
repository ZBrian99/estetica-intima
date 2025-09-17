'use client';

import { useFiltersStore } from '@/stores/filtersStore';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { servicesFiltersSchema, ServicesFiltersType } from '@/schemas/servicesSchema';
import { Form, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Button } from '../ui/button';
import { useEffect, useState, useCallback, useRef } from 'react';
import { ChevronDownIcon, Filter, X } from 'lucide-react';
import { HiFire, HiStar, HiSparkles } from 'react-icons/hi2';
import { MdLocalOffer } from 'react-icons/md';
import { FaVenus, FaMars } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { BODY_PARTS, CATEGORIES, SERVICE_TYPES, TAGS } from '@/lib/constants';
// import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
// TODO: añadir resto de filtros y probar todas las combinaciones
// TODO: añadir ordenamiento
// TODO: cambiar version mobile a top bar
// TODO: Separar debouncer en un hook
// TODO: filtro de ordenamiento no se sincroniza
const ServicesFilters = ({ initialFormValues }: { initialFormValues: ServicesFiltersType }) => {
	const setFilters = useFiltersStore((state) => state.setFilters);
	// const [isFirstLoad, setIsFirstLoad] = useState(true);
	const isFirstLoad = useRef(true);
	const [isMobileOpen, setIsMobileOpen] = useState(false);
	const debounceRef = useRef<NodeJS.Timeout | null>(null);

	const form = useForm<ServicesFiltersType>({
		resolver: zodResolver(servicesFiltersSchema),
		defaultValues: initialFormValues,
	});

	const watchedValues = useWatch({
		control: form.control,
	});

	const debouncedSetFilters = useCallback((values: ServicesFiltersType) => {
		if (debounceRef.current) {
			clearTimeout(debounceRef.current);
		}
		debounceRef.current = setTimeout(() => {
			const cleanedValues = Object.entries(values).reduce((acc, [key, value]) => {
				if (
					value === '' ||
					value === undefined ||
					value === null ||
					value === false ||
					(Array.isArray(value) && value.length === 0)
				) {
					return acc;
				}
				return { ...acc, [key]: value };
			}, {});
			setFilters({ ...cleanedValues, page: 1 });
		}, 300);
	}, []);

	useEffect(() => {
		if (isFirstLoad.current) {
			isFirstLoad.current = false;
			return;
		}

		debouncedSetFilters(watchedValues);
	}, [watchedValues]);

	useEffect(() => {
		return () => {
			if (debounceRef.current) {
				clearTimeout(debounceRef.current);
			}
		};
	}, []);

	const resetFilters = () => {
		setIsMobileOpen(false);
		form.reset({
			type: null,
			gender: null,
			categories: [],
			bodyParts: [],
			isPopular: false,
			isNew: false,
			isFeatured: false,
			hasPromo: false,
			tags: [],
			// sort: null,
		});
	};

	return (
		<>
			{/* Botón móvil flotante para abrir filtros */}
			<button
				className='md:hidden w-fit bg-primary-500 hover:bg-primary-700 text-white px-6 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 font-medium'
				onClick={() => setIsMobileOpen(true)}
			>
				<Filter className='h-4 w-4' />
				Filtros
				<ChevronDownIcon className='h-4 w-4' />
			</button>

			{/* <button
				className='md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 bg-primary-500 hover:bg-primary-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 font-medium'
				onClick={() => setIsMobileOpen(true)}
			>
				<Filter className='h-4 w-4' />
				Filtros
			</button> */}

			{/* Overlay móvil */}
			{isMobileOpen && (
				<div
					className='fixed inset-0 bg-black/50 z-50 md:hidden transition-opacity duration-300'
					onClick={() => setIsMobileOpen(false)}
				/>
			)}

			{/* Panel de filtros */}
			<aside
				className={cn(
					// Estilos base
					'flex flex-col bg-white ',
					// Móvil: panel desde abajo
					'md:hidden fixed left-0 right-0 z-50 rounded-t-2xl shadow-2xl transform transition-all duration-300 ease-out',
					isMobileOpen
						? 'bottom-0 translate-y-0 h-[85vh] max-h-[600px]'
						: 'bottom-0 translate-y-full h-[85vh] max-h-[600px]',
					// Desktop: usa toda la altura disponible del contenedor padre
					'md:block  md:translate-y-0  md:z-10 md:rounded-none md:shadow-none md:border-r md:h-[calc(100vh-4rem)] md:max-h-none md:top-16 md:w-64  '
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
				<div className='flex-1 h-full overflow-y-auto shadow-sm'>
					<Form {...form}>
						<form className='p-4 space-y-6 pb-8'>
							{/* Filtros de estado - Badges estilo ServiceCard */}
							{/* <div className='flex gap-4'> */}
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
												onClick={() => field.onChange(field.value ? false : true)}
											>
												<HiStar size={14} />
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
												onClick={() => field.onChange(field.value ? false : true)}
											>
												<MdLocalOffer size={14} />
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
												onClick={() => field.onChange(field.value ? false : true)}
											>
												<HiFire size={14} />
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
												onClick={() => field.onChange(field.value ? false : true)}
											>
												<HiSparkles size={14} />
												Nuevos
											</button>
										)}
									/>
								</div>
							</div>

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
																onClick={() => field.onChange(field.value === type.value ? null : type.value)}
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
												// { value: 'UNISEX', label: 'Unisex', icon: FaVenusMars },
											].map(({ value, label, icon: Icon }) => (
												<FormField
													key={value}
													control={form.control}
													name='gender'
													render={({ field }) => {
														return (
															<button
																type='button'
																// onClick={() => field.onChange(field.value === value ? undefined : value)}
																onClick={() => field.onChange(field.value === value ? null : value)}
																className={cn(
																	'px-2.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 border flex items-center gap-2',
																	field.value === value
																		? 'bg-primary-600 text-white shadow-lg border-primary-600'
																		: 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-700 border-gray-200 hover:border-primary-300'
																)}
															>
																<Icon size={14} />
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
							{/* Filtro de Tags */}
							<FormField
								control={form.control}
								name='tags'
								render={() => (
									<FormItem>
										<FormLabel className='font-semibold text-gray-900 text-sm'>Tags</FormLabel>
										<div className='flex flex-wrap gap-2'>
											{TAGS.map((tag) => (
												<FormField
													key={tag}
													control={form.control}
													name='tags'
													render={({ field }) => {
														const isSelected = field.value?.includes(tag) || false;
														return (
															<button
																type='button'
																onClick={() => {
																	const currentTags = field.value || [];
																	if (isSelected) {
																		field.onChange(currentTags.filter((t) => t !== tag));
																	} else {
																		field.onChange([...currentTags, tag]);
																	}
																}}
																className={cn(
																	'px-2.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 border',
																	isSelected
																		? 'bg-primary-600 text-white shadow-lg border-primary-600'
																		: 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-700 border-gray-200 hover:border-primary-300'
																)}
															>
																{tag}
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
							{/* Filtro de Tipo de Servicio */}
							{/* <FormField
								control={form.control}
								name='sort'
								render={() => (
									<FormItem className='xs:hidden'>
										<FormLabel className='font-semibold text-gray-900 text-sm'>Ordenar por</FormLabel>
										<div className='flex flex-wrap gap-2'>
											{SORT_OPTIONS.map((option) => (
												<FormField
													key={option.value}
													control={form.control}
													name='sort'
													render={({ field }) => {
														return (
															<button
																type='button'
																onClick={() => field.onChange(field.value === option.value ? null : option.value)}
																className={cn(
																	'px-2.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 border',
																	field.value === option.value
																		? 'bg-primary-600 text-white shadow-lg border-primary-600'
																		: 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-700 border-gray-200 hover:border-primary-300'
																)}
															>
																{option.label}
															</button>
														);
													}}
												/>
											))}
										</div>
										<FormMessage />
									</FormItem>
								)}
							/> */}
							{/* boton de reset */}
							<Button onClick={resetFilters} className='w-full' type='reset'>
								Limpiar filtros
							</Button>
						</form>
					</Form>
				</div>
			</aside>
		</>
	);
};

export default ServicesFilters;
