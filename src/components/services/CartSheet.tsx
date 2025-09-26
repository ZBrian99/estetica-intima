'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/stores/cartStore';
import { useCartOpen, useSetCartOpen } from '@/stores/uiStore';
import { formatPrice } from '@/lib/utils';
import { FaWhatsapp, FaGift, FaTrash, FaShoppingCart, FaMinus, FaPlus } from 'react-icons/fa';

export default function CartSheet() {
	const isCartOpen = useCartOpen();
	const setCartOpen = useSetCartOpen();
	const router = useRouter();

	// Selectores individuales para evitar objetos nuevos por snapshot
	const items = useCartStore((state) => state.items);
	const removeItem = useCartStore((state) => state.removeItem);
	const increaseQuantity = useCartStore((state) => state.increaseQuantity);
	const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
	const total = useCartStore((state) => state.total);

	const handleWhatsApp = () => {
		const names = items.map((it) => (it.quantity > 1 ? `${it.name} x${it.quantity}` : it.name)).join(', ');
		const message = `Hola, quisiera reservar: ${names}`;
		const url = `https://wa.me/5492235507949?text=${encodeURIComponent(message)}`;
		if (typeof window !== 'undefined') {
			window.open(url, '_blank');
		}
	};

	const cartTotal = total();
	const originalTotal = items.reduce((acc, it) => acc + (it.originalPrice ?? it.price) * it.quantity, 0);
	const cashTotal = Math.round(cartTotal * 0.9);
	const savingsFromPromo = Math.max(0, originalTotal - cartTotal);
	const cashSavings = Math.max(0, cartTotal - cashTotal);

	return (
		<Sheet open={isCartOpen} onOpenChange={setCartOpen}>
			<SheetContent side='right' className='flex flex-col justify-start items-start w-full us:max-w-[85vw] sm:max-w-md p-0'>
				<div className='h-full flex flex-col overflow-hidden justify-start items-start '>
					<SheetHeader className='flex px-6 justify-center h-16 border-b '>
						<SheetTitle>Tu carrito</SheetTitle>
					</SheetHeader>

					{items.length === 0 ? (
						<div className='row-span-2 flex flex-col items-center justify-center text-center py-12 px-6 '>
							<FaShoppingCart className='h-14 w-14 text-gray-300' aria-hidden='true' />
							<p className='mt-4 text-sm text-gray-600'>
								Tu carrito está vacío. Agregá servicios para reservar por WhatsApp.
							</p>
							<div className='mt-6'>
								<Link href='/servicios' className='text-primary-600 hover:text-primary-700 text-sm font-medium'>
									Ir a Servicios
								</Link>
							</div>
						</div>
					) : (
						<>
							{/* Lista scrollable */}
							<div className='overflow-y-auto px-3 divide-y  h-full flex flex-col mb-auto'>
								{items.map((it) => (
									<div
										key={it.serviceId}
										onClick={() => router.push(`/servicios/${it.serviceId}`)}
										className='flex items-center gap-3 p-3 py-4 cursor-pointer transition-colors overflow-hidden group'
									>
										<div className='h-16 w-16 flex-shrink-0 rounded-md overflow-hidden bg-gray-100'>
											<Image
												src={it.imageUrl || '/images/placeholder-service.webp'}
												alt={it.name}
												width={64}
												height={64}
												className='h-full w-full object-cover'
											/>
										</div>

										<div className='flex-1 min-w-0'>
											<div className='flex items-start  flex-col justify-between gap-3 min-w-0'>
												<div className='w-full flex justify-between gap-8'>
													<div className='text-sm font-medium text-gray-900 hover:text-primary-700 line-clamp-2'>
														{it.name}
													</div>
													<Button
														variant='ghost'
														size='icon'
														className='h-4 w-4 text-gray-600 hover:text-red-600'
														onClick={(e) => {
															e.stopPropagation();
															removeItem(it.serviceId);
														}}
														aria-label='Eliminar'
													>
														<FaTrash className='h-3.5 w-3.5' />
													</Button>
												</div>

												{/* Quantity controls below price */}

												<div className='flex items-center gap-2 justify-between w-full'>
													<div className='flex justify-between w-full'>
														<div className='inline-flex items-center rounded-full border border-gray-200 bg-white shadow-sm w-22'>
															<button
																className='h-7 w-7 grid place-items-center text-gray-600 hover:text-primary-700'
																onClick={(e) => {
																	e.stopPropagation();
																	decreaseQuantity(it.serviceId);
																}}
																aria-label='Disminuir'
															>
																<FaMinus className='h-3 w-3' />
															</button>
															<span className='px-2 text-xs font-medium text-gray-700 min-w-[1.5rem] text-center select-none'>
																{it.quantity}
															</span>
															<button
																className='h-7 w-7 grid place-items-center text-gray-600 hover:text-primary-700'
																onClick={(e) => {
																	e.stopPropagation();
																	increaseQuantity(it.serviceId);
																}}
																aria-label='Aumentar'
															>
																<FaPlus className='h-3 w-3' />
															</button>
														</div>
													</div>
													<div>
														{it.promo && it.originalPrice ? (
															<div className='flex items-end flex-col gap-2'>
																<span className='text-xs text-gray-500 line-through'>
																	{formatPrice((it.originalPrice ?? it.price) * it.quantity)}
																</span>
																<span className='text-sm font-semibold text-primary-700'>
																	{formatPrice(it.price * it.quantity)}
																</span>
															</div>
														) : (
															<span className='text-sm font-semibold text-primary-700'>
																{formatPrice(it.price * it.quantity)}
															</span>
														)}
													</div>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>

							{/* Footer fijo */}
							<div className='border-t py-4 px-6 space-y-2 bg-white mt-auto w-full'>
								{savingsFromPromo > 0 && (
									<div className='flex items-center justify-between text-[12px] text-gray-600'>
										<span>Precio original</span>
										<span className='line-through'>{formatPrice(originalTotal)}</span>
									</div>
								)}
								<div className='flex items-center justify-between'>
									<span className='text-base text-gray-600'>Total</span>
									<span className='text-lg font-bold text-primary-500'>{formatPrice(cartTotal)}</span>
								</div>

								<div className='flex items-center justify-between text-sm text-emerald-700 font-medium'>
									<span>Efectivo</span>
									<span>{formatPrice(cashTotal)}</span>
								</div>
								{/* Removed savings line per UX feedback */}
								<div className='grid grid-cols-2 gap-2 mt-4'>
									<Button
										onClick={handleWhatsApp}
										className='w-full bg-primary-600 hover:bg-primary-700 text-white flex items-center justify-center gap-2'
									>
										<FaWhatsapp className='h-4 w-4' />
										<span className='text-sm'>Reservar</span>
									</Button>
									<Button variant='outline' className='w-full text-sm flex items-center justify-center gap-2 text-gray-900'>
										<FaGift className='h-4 w-4' />
										<span className='text-sm'>Regalo</span>
									</Button>
								</div>
							</div>
						</>
					)}
				</div>
			</SheetContent>
		</Sheet>
	);
}
