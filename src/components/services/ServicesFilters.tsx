'use client';

import { useFiltersStore } from '@/stores/filtersStore';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { servicesFiltersSchema, ServicesFiltersType } from '@/schemas/servicesSchema';
import { Form, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Button } from '../ui/button';
import { useEffect, useCallback, useRef } from 'react';
import { HiFire, HiStar, HiSparkles } from 'react-icons/hi2';
import { MdLocalOffer } from 'react-icons/md';
import { FaVenus, FaMars } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { BODY_PARTS, CATEGORIES, SERVICE_TYPES, TAGS } from '@/lib/constants';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '../ui/sheet';
import { Input } from '../ui/input';
import { Checkbox } from '../ui/checkbox';
import { useIsFiltersOpen, useSetFiltersOpen } from '@/stores/uiStore';

// TODO: Separar debouncer en un hook
const ServicesFilters = ({ initialFormValues }: { initialFormValues: ServicesFiltersType }) => {
	const setFilters = useFiltersStore((state) => state.setFilters);
	// ...
	// using primitive selectors to avoid getServerSnapshot loop
	const isFiltersOpen = useIsFiltersOpen();
	const setFiltersOpen = useSetFiltersOpen();
	const isFirstLoad = useRef(true);
	const debounceRef = useRef<NodeJS.Timeout | null>(null);

	const form = useForm<ServicesFiltersType>({
		resolver: zodResolver(servicesFiltersSchema),
		defaultValues: initialFormValues,
	});

	const watchedValues = useWatch({
		control: form.control,
	});

	const debouncedSetFilters = useCallback(
		(values: ServicesFiltersType) => {
			if (debounceRef.current) {
				clearTimeout(debounceRef.current);
			}
			debounceRef.current = setTimeout(() => {
				const cleanedValues = Object.entries(values).reduce<Record<string, unknown>>((acc, [key, value]) => {
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
		},
		[setFilters]
	);

	useEffect(() => {
		if (isFirstLoad.current) {
			isFirstLoad.current = false;
			return;
		}
		debouncedSetFilters(watchedValues);
	}, [watchedValues, debouncedSetFilters]);

	useEffect(() => {
		return () => {
			if (debounceRef.current) {
				clearTimeout(debounceRef.current);
			}
		};
	}, []);

	const resetFilters = () => {
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
			minPrice: undefined,
			maxPrice: undefined,
			isActive: undefined,
		});
	};

	return (
		<Sheet open={isFiltersOpen} onOpenChange={setFiltersOpen}>
			<SheetContent side='left' className='w-[85vw] xs:w-[80vw] sm:max-w-sm p-0'>
				<SheetHeader className='p-4'>
					<SheetTitle>Filtros</SheetTitle>
				</SheetHeader>
				<div className='flex-1 h-full overflow-y-auto'>
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
																					? 'bg-primary-600 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 text-white shadow-lg border-primary-500'
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
														? 'bg-red-600 bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white shadow-lg border-red-500'
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
														? 'bg-orange-500 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 text-white shadow-lg border-amber-500'
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
														? 'bg-green-500 bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600 text-white shadow-lg border-green-500'
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

							{/* Tipo de Servicio */}
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

							{/* Género */}
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
											].map(({ value, label, icon: Icon }) => (
												<FormField
													key={value}
													control={form.control}
													name='gender'
													render={({ field }) => {
														return (
															<button
																type='button'
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

							{/* Categorías */}
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

							{/* Partes del Cuerpo */}
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

							{/* Tags */}
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

							{/* Precio */}
							<FormItem>
								<FormLabel className='font-semibold text-gray-900 text-sm'>Precio</FormLabel>
								<div className='grid grid-cols-2 gap-3'>
									<FormField
										control={form.control}
										name='minPrice'
										render={({ field }) => (
											<div className='space-y-1'>
												<Input
													type='number'
													min={0}
													placeholder='Mín.'
													value={field.value ?? ''}
													onChange={(e) => {
														const val = e.target.value;
														field.onChange(val === '' ? undefined : Number(val));
													}}
												/>
												<FormMessage />
											</div>
										)}
									/>
									<FormField
										control={form.control}
										name='maxPrice'
										render={({ field }) => (
											<div className='space-y-1'>
												<Input
													type='number'
													min={0}
													placeholder='Máx.'
													value={field.value ?? ''}
													onChange={(e) => {
														const val = e.target.value;
														field.onChange(val === '' ? undefined : Number(val));
													}}
												/>
												<FormMessage />
											</div>
										)}
									/>
								</div>
							</FormItem>

							{/* Activos */}
							<FormField
								control={form.control}
								name='isActive'
								render={({ field }) => (
									<FormItem>
										<div className='flex items-center gap-2'>
											<Checkbox
												checked={Boolean(field.value)}
												onCheckedChange={(checked) => field.onChange(!!checked)}
											/>
											<FormLabel className='text-sm font-medium text-gray-800'>Solo servicios activos</FormLabel>
										</div>
										<FormMessage />
									</FormItem>
								)}
							/>

							{/* boton de reset */}
							<Button onClick={resetFilters} className='w-full' type='reset'>
								Limpiar filtros
							</Button>
						</form>
					</Form>
				</div>
				<SheetFooter />
			</SheetContent>
		</Sheet>
	);
};

export default ServicesFilters;
