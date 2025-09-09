'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import SearchBar from '@/components/services/SearchBar';
import Image from 'next/image';

const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);

	// Cerrar menú al hacer click fuera
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				isMenuOpen &&
				menuRef.current &&
				buttonRef.current &&
				!menuRef.current.contains(event.target as Node) &&
				!buttonRef.current.contains(event.target as Node)
			) {
				setIsMenuOpen(false);
			}
		};

		if (isMenuOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isMenuOpen]);

	// Prevenir scroll del body cuando el menú está abierto
	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isMenuOpen]);

	return (
		<nav className='fixed top-0 left-0 right-0 z-50 bg-white h-16 shadow-sm'>
			<div className='mx-auto px-4 h-full'>
				<div className='flex items-center justify-between h-full gap-4'>
					<Link href={'/'} className='flex items-center '>
						{/* <div className='w-14 h-14 flex items-center justify-center overflow-hidden'> */}
						<Image src='/logo-text-sin-fondo.webp' alt='logo intima' width={64} height={64} />
						{/* </div> */}
						<span className='pl-3 text-xl font-bold text-gray-900 hidden sm:block'>Estetica Integral</span>
					</Link>

					{/* <div className='flex-1 max-w-md mx-4'>
						<SearchBar variant='navbar' className='w-full' />
					</div> */}

					{/* Links de navegación - Derecha (Desktop) */}
					<div className='hidden lg:flex items-center gap-6 flex-shrink-0'>
						<Link href='/servicios' className='text-gray-700 hover:text-primary-600 transition-colors font-medium'>
							Servicios
						</Link>
						<Link href='/promociones' className='text-gray-700 hover:text-primary-600 transition-colors font-medium'>
							Promociones
						</Link>
						<Link href='/nosotros' className='text-gray-700 hover:text-primary-600 transition-colors font-medium'>
							Nosotros
						</Link>
						<Link href='#' className='text-gray-700 hover:text-primary-600 transition-colors font-medium'>
							Contacto
						</Link>
					</div>

					{/* Botón menú móvil */}
					<button
						ref={buttonRef}
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className='lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors flex-shrink-0'
						aria-label='Abrir menú'
					>
						{isMenuOpen ? <X size={20} /> : <Menu size={20} />}
					</button>
				</div>

				{isMenuOpen && (
					<div ref={menuRef} className='lg:hidden absolute top-16 left-0 right-0 bg-white shadow-lg'>
						<div className='px-4 py-6 flex flex-col gap-4'>
							<Link
								href='/servicios'
								className=' py-3 text-gray-700 hover:text-primary-600 transition-colors font-medium '
								onClick={() => setIsMenuOpen(false)}
							>
								Servicios
							</Link>
							<Link
								href='/promociones'
								className=' py-3 text-gray-700 hover:text-primary-600 transition-colors font-medium '
								onClick={() => setIsMenuOpen(false)}
							>
								Promociones
							</Link>
							<Link
								href='/nosotros'
								className=' py-3 text-gray-700 hover:text-primary-600 transition-colors font-medium '
								onClick={() => setIsMenuOpen(false)}
							>
								Nosotros
							</Link>
							<Link
								href='#'
								className=' py-3 text-gray-700 hover:text-primary-600 transition-colors font-medium '
								onClick={() => setIsMenuOpen(false)}
							>
								Contacto
							</Link>
							{/* <Link
								href='/contacto'
								className='block py-3 text-gray-700 hover:text-primary-600 transition-colors font-medium'
								onClick={() => setIsMenuOpen(false)}
							>
								Contacto
							</Link> */}
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default NavBar;
