'use client';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import {
	createServiceSchema,
	type CreateServiceInput,
	type GenderType,
	type ServiceType,
} from '@/schemas/servicesSchema';
import { CATEGORIES, BODY_PARTS, TAGS, GENDER_OPTIONS, SERVICE_TYPES } from '@/lib/constants';
import { useState } from 'react';
import { createServiceClient } from '@/services/client/servicesService';
import type { z } from 'zod';
import { toast } from 'sonner';

function slugify(input: string): string {
	return input
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9\s-]/g, '')
		.replace(/\s+/g, '-')
		.replace(/-+/g, '-');
}

function buildPollinationsUrl(
	prompt: string,
	opts?: { width?: number; height?: number; model?: string; seed?: number; enhance?: boolean; nologo?: boolean }
) {
	const p = encodeURIComponent(prompt.trim());
	const width = opts?.width ?? 1024;
	const height = opts?.height ?? 1024;
	const model = opts?.model ?? 'flux-realism';
	const seed = opts?.seed ?? Math.floor(Math.random() * 1_000_000_000);
	const enhance = opts?.enhance ?? true;
	const nologo = opts?.nologo ?? true;
	const qs = new URLSearchParams({
		width: String(width),
		height: String(height),
		model,
		seed: String(seed),
		enhance: String(enhance),
		nologo: String(nologo),
	}).toString();
	return `https://image.pollinations.ai/prompt/${p}?${qs}`;
}

type Props = { onCreated: () => void };

type CreateServiceForm = z.input<typeof createServiceSchema>;

export default function CreateServiceDialog({ onCreated }: Props) {
	const [open, setOpen] = useState(false);
	const [aiPrompt, setAiPrompt] = useState('');
	const [aiImageUrl, setAiImageUrl] = useState<string | undefined>(undefined);
	const [aiLoading, setAiLoading] = useState(false);
	const [aiSeed, setAiSeed] = useState<number | undefined>(undefined);
	const [includedServicesText, setIncludedServicesText] = useState('');

	const form = useForm<CreateServiceForm>({
		resolver: zodResolver(createServiceSchema),
		defaultValues: {
			type: 'INDIVIDUAL',
			name: '',
			slug: '',
			basePrice: 0,
			finalPrice: 0,
			gender: 'UNISEX',
			categories: [],
			bodyParts: [],
			tags: [],
			includedServices: [],
			images: [],
			isActive: true,
			hasPromo: false,
			order: 0,
			isFeatured: false,
			isPopular: false,
			isNew: false,
			rating: 0,
			reviewCount: 0,
			bookings: 0,
		},
		mode: 'onTouched',
	});

	const type = form.watch('type');
	const name = form.watch('name');

	// Clean type-specific fields when service type changes to avoid Zod/server errors
	useEffect(() => {
		if (type === 'INDIVIDUAL') {
			form.setValue('sessions', undefined, { shouldDirty: true });
			form.setValue('includedServices', [], { shouldDirty: true });
		}
		if (type === 'COMBO') {
			form.setValue('sessions', undefined, { shouldDirty: true });
		}
		// PACK: keep sessions/includedServices as-is
	}, [type, form]);

	// Sync includedServices text with form value when dialog opens or type changes
	useEffect(() => {
		const curr = form.getValues('includedServices') as unknown as string[] | undefined;
		setIncludedServicesText(Array.isArray(curr) ? curr.join(', ') : '');
	}, [open, type, form]);

	useEffect(() => {
		if (!form.getValues('slug')) {
			form.setValue('slug', slugify(name || ''));
		}
	}, [name, form]);

	const onSubmit = async (data: CreateServiceForm) => {
		try {
			// Sanitización por tipo
			const currentType = form.getValues('type');
			const sanitized: CreateServiceForm = { ...data };

			if (currentType === 'INDIVIDUAL') {
				sanitized.sessions = undefined;
				sanitized.includedServices = [];
			}
			if (currentType === 'COMBO') {
				sanitized.sessions = undefined;
				// includedServices se mantiene como array libre (aunque el input sea texto)
			}
			if (currentType === 'PACK') {
				// PACK requiere sessions opcionalmente, includedServices opcionalmente
			}

			// Tomar el texto ingresado si el usuario no hizo blur todavía
			if (currentType !== 'INDIVIDUAL' && includedServicesText.trim().length > 0) {
				const arr = includedServicesText
					.split(',')
					.map((s) => s.trim())
					.filter((s) => s.length > 0);
				sanitized.includedServices = arr;
			}

			// Asegurar que includedServices sea array si el input de texto devuelve string
			const inc = sanitized.includedServices as string[] | string;
			if (typeof inc === 'string') {
				const arr = inc
					.split(',')
					.map((s) => s.trim())
					.filter((s) => s.length > 0);
				sanitized.includedServices = arr;
			}

			// Parse con zod del schema discriminado
			const payload: CreateServiceInput = createServiceSchema.parse(sanitized);

			await createServiceClient(payload);

			toast.success(`Servicio creado: ${payload.name}`);
			setOpen(false);
			form.reset();
			onCreated();
		} catch (e: unknown) {
			const message = e instanceof Error ? e.message : 'Error inesperado';
			toast.error(`Error al crear servicio: ${message}`);
			console.error(e);
		}
	};

	// Handlers IA
	const handleGenerateImage = () => {
		if (!aiPrompt.trim()) return;
		const newSeed = Math.floor(Math.random() * 1_000_000_000);
		setAiSeed(newSeed);
		const url = buildPollinationsUrl(aiPrompt, { seed: newSeed });
		setAiImageUrl(url);
		setAiLoading(true);
	};
	const handleRefreshImage = () => {
		if (!aiPrompt.trim()) return;
		const newSeed = Math.floor(Math.random() * 1_000_000_000);
		setAiSeed(newSeed);
		const url = buildPollinationsUrl(aiPrompt, { seed: newSeed });
		setAiImageUrl(url);
		setAiLoading(true);
	};
	const handleUseImage = () => {
		if (aiImageUrl) {
			form.setValue('imageUrl', aiImageUrl, { shouldDirty: true, shouldTouch: true, shouldValidate: true });
		}
	};
	const handleClearPreview = () => {
		setAiImageUrl(undefined);
		setAiLoading(false);
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant='secondary'>Crear servicio</Button>
			</DialogTrigger>
			<DialogContent className='w-full max-w-2xl sm:max-w-5xl max-h-[85vh] overflow-y-auto'>
				<DialogHeader>
					<DialogTitle>Crear servicio</DialogTitle>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
						<div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
							<FormField
								control={form.control}
								name='name'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Nombre</FormLabel>
										<FormControl>
											<Input placeholder='Nombre del servicio' {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='slug'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Slug</FormLabel>
										<FormControl>
											<Input placeholder='slug-del-servicio' {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
							<FormField
								control={form.control}
								name='type'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Tipo</FormLabel>
										<Select value={field.value as ServiceType} onValueChange={(v) => field.onChange(v as ServiceType)}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder='Seleccioná tipo' />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{SERVICE_TYPES.map((opt) => (
													<SelectItem key={opt.value} value={opt.value as ServiceType}>
														{opt.label}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='gender'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Género</FormLabel>
										<Select value={field.value as GenderType} onValueChange={(v) => field.onChange(v as GenderType)}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder='Seleccioná género' />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{GENDER_OPTIONS.map((opt) => (
													<SelectItem key={opt.value} value={opt.value as GenderType}>
														{opt.label}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
							<FormField
								control={form.control}
								name='basePrice'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Precio base</FormLabel>
										<FormControl>
											<Input
												type='number'
												step='0.01'
												value={field.value ?? ''}
												onChange={(e) => field.onChange(parseFloat(e.target.value || '0'))}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='finalPrice'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Precio final</FormLabel>
										<FormControl>
											<Input
												type='number'
												step='0.01'
												value={field.value ?? ''}
												onChange={(e) => field.onChange(parseFloat(e.target.value || '0'))}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						{/* removed duplicate duration/sessions blocks to avoid multiple controllers for the same field */}

						{/* Duración opcional para todos los tipos */}
						<FormField
							control={form.control}
							name='duration'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Duración (minutos) - opcional</FormLabel>
									<FormControl>
										<Input
											type='number'
											value={field.value ?? ''}
											onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value, 10) : undefined)}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Sesiones solo para PACK */}
						{type === 'PACK' && (
							<FormField
								control={form.control}
								name='sessions'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Sesiones (solo PACK)</FormLabel>
										<FormControl>
											<Input
												type='number'
												value={field.value ?? ''}
												onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value, 10) : undefined)}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						)}

						{/* Descripción opcional */}
						<FormField
							control={form.control}
							name='description'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Descripción (opcional)</FormLabel>
									<FormControl>
										<Input
											type='text'
											inputMode='text'
											placeholder='Descripción breve del servicio'
											value={field.value || ''}
											onChange={(e) => field.onChange(e.target.value || undefined)}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='categories'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Categorías</FormLabel>
									<div className='grid grid-cols-2 sm:grid-cols-3 gap-2'>
										{[...CATEGORIES, 'otros'].map((cat) => (
											<label key={cat} className='flex items-center gap-2 text-sm'>
												<Checkbox
													checked={(field.value || []).includes(cat)}
													onCheckedChange={(v) => {
														const curr = field.value || [];
														const next = v ? [...curr, cat] : curr.filter((c) => c !== cat);
														field.onChange(next);
													}}
												/>
												<span className='capitalize'>{cat.replace('-', ' ')}</span>
											</label>
										))}
									</div>
									<p className='text-xs text-gray-500'>
										Seleccioná una o más categorías fijas. Usá "otros" si no encaja en ninguna.
									</p>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Zonas (bodyParts) opcional */}
						<FormField
							control={form.control}
							name='bodyParts'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Zonas (opcional)</FormLabel>
									<div className='grid grid-cols-2 sm:grid-cols-3 gap-2'>
										{BODY_PARTS.map((bp) => (
											<label key={bp} className='flex items-center gap-2 text-sm'>
												<Checkbox
													checked={(field.value || []).includes(bp)}
													onCheckedChange={(v) => {
														const curr = field.value || [];
														const next = v ? [...curr, bp] : curr.filter((c) => c !== bp);
														field.onChange(next);
													}}
												/>
												<span className='capitalize'>{bp.replace('-', ' ')}</span>
											</label>
										))}
									</div>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Tags opcional */}
						<FormField
							control={form.control}
							name='tags'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Tags (opcional)</FormLabel>
									<div className='grid grid-cols-2 sm:grid-cols-3 gap-2'>
										{TAGS.map((tag) => (
											<label key={tag} className='flex items-center gap-2 text-sm'>
												<Checkbox
													checked={(field.value || []).includes(tag)}
													onCheckedChange={(v) => {
														const curr = field.value || [];
														const next = v ? [...curr, tag] : curr.filter((c) => c !== tag);
														field.onChange(next);
													}}
												/>
												<span className='capitalize'>{tag.replace('-', ' ')}</span>
											</label>
										))}
									</div>
									<FormMessage />
								</FormItem>
							)}
						/>

						{type !== 'INDIVIDUAL' && (
						<FormField
							control={form.control}
							name="includedServices"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Servicios incluidos (texto libre)</FormLabel>
									<FormControl>
										<Input
											type="text"
											inputMode="text"
											placeholder="ej: Limpieza facial, Masaje de espalda, Mascarilla hidratante"
											value={includedServicesText}
											onChange={(e) => setIncludedServicesText(e.target.value)}
											onKeyDown={(e) => {
												if (e.key === 'Enter') {
													e.preventDefault();
													const arr = (includedServicesText || '')
														.split(',')
														.map((s) => s.trim())
														.filter((s) => s.length > 0);
													form.setValue('includedServices', arr, {
														shouldDirty: true,
														shouldTouch: true,
														shouldValidate: true,
													});
												}
											}}
											onBlur={(e) => {
												const arr = (e.target.value || '')
													.split(',')
													.map((s) => s.trim())
													.filter((s) => s.length > 0);
												form.setValue('includedServices', arr, {
													shouldDirty: true,
													shouldTouch: true,
													shouldValidate: true,
												});
											}}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					)}

						<div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
							<FormField
								control={form.control}
								name='imageUrl'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Imagen principal (URL)</FormLabel>
										<FormControl>
											<Input
												type='url'
												placeholder='https://...'
												value={field.value || ''}
												onChange={(e) => field.onChange(e.target.value || undefined)}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<div className='space-y-2'>
								<FormLabel>Generar por IA</FormLabel>
								<div className='flex flex-col  gap-2'>
									<Input
										type='text'
										inputMode='text'
										placeholder='Prompt descriptivo'
										value={aiPrompt}
										onChange={(e) => setAiPrompt(e.target.value)}
									/>
									<div className='flex gap-2'>
										<Button type='button' variant='secondary' onClick={handleGenerateImage}>
											Generar imagen
										</Button>
										<Button type='button' variant='outline' onClick={handleRefreshImage} disabled={!aiImageUrl}>
											Recargar
										</Button>
										<Button type='button' onClick={handleUseImage} disabled={!aiImageUrl || aiLoading}>
											Usar esta imagen
										</Button>
									</div>
								</div>
								{aiLoading && <p className='text-xs text-gray-500'>Generando / cargando imagen…</p>}
								{aiImageUrl && (
									<div className='space-y-2'>
										<img
											src={aiImageUrl}
											alt='Previsualización IA'
											className='max-h-64 w-full rounded-md border object-cover'
											onLoad={() => setAiLoading(false)}
											onError={() => setAiLoading(false)}
										/>
										<div className='flex gap-2'>
											<Button type='button' variant='outline' onClick={handleClearPreview}>
												Borrar previsualización
											</Button>
										</div>
									</div>
								)}
								<p className='text-xs text-gray-500'>
									Si no se genera o no te convence, podés pegar una URL específica arriba.
								</p>
							</div>
						</div>

						{/* Ocultar imágenes adicionales por ahora */}
						{false && (
							<div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
								<FormField
									control={form.control}
									name='images'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Imágenes adicionales (coma)</FormLabel>
											<FormControl>
												<Input
													type='text'
													inputMode='text'
													placeholder='https://image.pollinations.ai/prompt/some,prompt'
													value={(field.value || []).join(', ')}
													onChange={(e) =>
														field.onChange(
															e.target.value
																.split(',')
																.map((s) => s.trim())
																.filter((s) => s.length > 0)
														)
													}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
						)}

						{/* Toggles de estado */}
						<div className='grid grid-cols-1 sm:grid-cols-4 gap-3'>
							<FormField
								control={form.control}
								name='isActive'
								render={({ field }) => (
									<FormItem className='flex flex-row items-center gap-3'>
										<Checkbox checked={!!field.value} onCheckedChange={(v) => field.onChange(!!v)} />
										<FormLabel>Activo</FormLabel>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='isFeatured'
								render={({ field }) => (
									<FormItem className='flex flex-row items-center gap-3'>
										<Checkbox checked={!!field.value} onCheckedChange={(v) => field.onChange(!!v)} />
										<FormLabel>Destacado</FormLabel>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='isPopular'
								render={({ field }) => (
									<FormItem className='flex flex-row items-center gap-3'>
										<Checkbox checked={!!field.value} onCheckedChange={(v) => field.onChange(!!v)} />
										<FormLabel>Popular</FormLabel>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='hasPromo'
								render={({ field }) => (
									<FormItem className='flex flex-row items-center gap-3'>
										<Checkbox checked={!!field.value} onCheckedChange={(v) => field.onChange(!!v)} />
										<FormLabel>Promo</FormLabel>
									</FormItem>
								)}
							/>
						</div>

						<DialogFooter>
							<Button type='button' variant='outline' onClick={() => setOpen(false)}>
								Cancelar
							</Button>
							<Button type='submit'>Crear</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}
