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
	type ServiceResponse,
} from '@/schemas/servicesSchema';
import { CATEGORIES, BODY_PARTS, TAGS, GENDER_OPTIONS, SERVICE_TYPES } from '@/lib/constants';
import { useState } from 'react';
import { updateServiceClient } from '@/services/client/servicesService';
import type { z } from 'zod';
import { toast } from 'sonner';
import { FiEdit } from 'react-icons/fi';

function slugify(text: string): string {
	return text
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[^a-z0-9\s-]/g, '')
		.replace(/\s+/g, '-')
		.replace(/-+/g, '-')
		.replace(/^-|-$/g, '');
}

type Props = { 
	service: ServiceResponse;
	onUpdated: () => void;
};

type EditServiceForm = z.input<typeof createServiceSchema>;

export default function EditServiceDialog({ service, onUpdated }: Props) {
	const [open, setOpen] = useState(false);
	const [includedServicesText, setIncludedServicesText] = useState('');

	const form = useForm<EditServiceForm>({
		resolver: zodResolver(createServiceSchema),
		defaultValues: {
			type: service.type as ServiceType,
			name: service.name,
			slug: service.slug,
			basePrice: service.basePrice,
			finalPrice: service.finalPrice,
			gender: service.gender as GenderType,
			categories: service.categories || [],
			bodyParts: service.bodyParts || [],
			tags: service.tags || [],
			includedServices: service.includedServices || [],
			images: service.images || [],
			isActive: service.isActive,
			hasPromo: service.hasPromo,
			order: service.order || 0,
			isFeatured: service.isFeatured || false,
			isPopular: service.isPopular || false,
			isNew: service.isNew || false,
			rating: service.rating || 0,
			reviewCount: service.reviewCount || 0,
			bookings: service.bookings || 0,
			description: service.description || undefined,
			sessions: service.sessions || undefined,
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

	const onSubmit = async (data: EditServiceForm) => {
		try {
			await updateServiceClient(service.id, data as CreateServiceInput);
			toast.success('Servicio actualizado correctamente');
			setOpen(false);
			form.reset();
			onUpdated();
		} catch (error) {
			console.error('Error updating service:', error);
			toast.error('Error al actualizar el servicio');
		}
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant="ghost" size="sm">
					<FiEdit className="size-4" />
          Editar
				</Button>
			</DialogTrigger>
			<DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>Editar Servicio</DialogTitle>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Nombre *</FormLabel>
										<FormControl>
											<Input
												type="text"
												inputMode="text"
												placeholder="ej: Limpieza facial profunda"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="slug"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Slug *</FormLabel>
										<FormControl>
											<Input
												type="text"
												inputMode="text"
												placeholder="ej: limpieza-facial-profunda"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
							<FormField
								control={form.control}
								name="type"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Tipo *</FormLabel>
										<Select value={field.value as ServiceType} onValueChange={(v) => field.onChange(v as ServiceType)}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Seleccioná tipo" />
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
								name="gender"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Género</FormLabel>
										<Select value={field.value as GenderType} onValueChange={(v) => field.onChange(v as GenderType)}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Seleccioná género" />
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

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
							<FormField
								control={form.control}
								name="basePrice"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Precio base</FormLabel>
										<FormControl>
											<Input
												type="number"
												step="0.01"
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
								name="finalPrice"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Precio final</FormLabel>
										<FormControl>
											<Input
												type="number"
												step="0.01"
												value={field.value ?? ''}
												onChange={(e) => field.onChange(parseFloat(e.target.value || '0'))}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						{type === 'PACK' && (
							<FormField
								control={form.control}
								name="sessions"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Sesiones (solo para PACK)</FormLabel>
										<FormControl>
											<Input
												type="number"
												min={1}
												value={field.value ?? ''}
												onChange={(e) => field.onChange(parseInt(e.target.value || '0', 10))}
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
							name="description"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Descripción (opcional)</FormLabel>
									<FormControl>
										<Input
											type="text"
											inputMode="text"
											placeholder="Descripción breve del servicio"
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
							name="categories"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Categorías</FormLabel>
									<div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
										{[...CATEGORIES, 'otros'].map((cat) => (
											<label key={cat} className="flex items-center gap-2 text-sm">
												<Checkbox
													checked={(field.value || []).includes(cat)}
													onCheckedChange={(v) => {
														const curr = field.value || [];
														const next = v ? [...curr, cat] : curr.filter((c) => c !== cat);
														field.onChange(next);
													}}
												/>
												<span className="capitalize">{cat.replace('-', ' ')}</span>
											</label>
										))}
									</div>
									<p className="text-xs text-gray-500">
										Seleccioná una o más categorías fijas. Usá "otros" si no encaja en ninguna.
									</p>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Zonas (bodyParts) opcional */}
						<FormField
							control={form.control}
							name="bodyParts"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Zonas (opcional)</FormLabel>
									<div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
										{BODY_PARTS.map((bp) => (
											<label key={bp} className="flex items-center gap-2 text-sm">
												<Checkbox
													checked={(field.value || []).includes(bp)}
													onCheckedChange={(v) => {
														const curr = field.value || [];
														const next = v ? [...curr, bp] : curr.filter((c) => c !== bp);
														field.onChange(next);
													}}
												/>
												<span className="capitalize">{bp.replace('-', ' ')}</span>
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
							name="tags"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Tags (opcional)</FormLabel>
									<div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
										{TAGS.map((tag) => (
											<label key={tag} className="flex items-center gap-2 text-sm">
												<Checkbox
													checked={(field.value || []).includes(tag)}
													onCheckedChange={(v) => {
														const curr = field.value || [];
														const next = v ? [...curr, tag] : curr.filter((c) => c !== tag);
														field.onChange(next);
													}}
												/>
												<span className="capitalize">{tag.replace('-', ' ')}</span>
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
										<p className="text-xs text-gray-500">
											Separar con comas. Presionar Enter o salir del campo para aplicar.
										</p>
										<FormMessage />
									</FormItem>
								)}
							/>
						)}

						{/* Toggles de estado */}
						<div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
							<FormField
								control={form.control}
								name="isActive"
								render={({ field }) => (
									<FormItem className="flex flex-row items-center gap-3">
										<Checkbox checked={!!field.value} onCheckedChange={(v) => field.onChange(!!v)} />
										<FormLabel>Activo</FormLabel>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="isFeatured"
								render={({ field }) => (
									<FormItem className="flex flex-row items-center gap-3">
										<Checkbox checked={!!field.value} onCheckedChange={(v) => field.onChange(!!v)} />
										<FormLabel>Destacado</FormLabel>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="isPopular"
								render={({ field }) => (
									<FormItem className="flex flex-row items-center gap-3">
										<Checkbox checked={!!field.value} onCheckedChange={(v) => field.onChange(!!v)} />
										<FormLabel>Popular</FormLabel>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="hasPromo"
								render={({ field }) => (
									<FormItem className="flex flex-row items-center gap-3">
										<Checkbox checked={!!field.value} onCheckedChange={(v) => field.onChange(!!v)} />
										<FormLabel>Promo</FormLabel>
									</FormItem>
								)}
							/>
						</div>

						<DialogFooter>
							<Button type="button" variant="outline" onClick={() => setOpen(false)}>
								Cancelar
							</Button>
							<Button type="submit">Actualizar</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}