'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import SearchBar from '@/components/common/SearchBar';

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
		<nav className='fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200/50 h-16'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full'>
				<div className='flex items-center justify-between h-full gap-4'>
					{/* Logo y nombre - Izquierda */}
					<Link href={'/'} className='flex items-center space-x-3 flex-shrink-0'>
						<div className='w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-sm overflow-hidden'>
							<img src='/logo-text-sin-fondo.webp' alt='logo intima' className='w-full h-full object-contain' />
						</div>
						<span className='text-xl font-bold text-gray-900 hidden sm:block lg:block'>Estética Íntima</span>
						{/* <div className='sm:hidden w-24 h-8 relative overflow-hidden'>
							<img 
								src='/logo-text-sin-fondo.webp' 
								alt='logo intima' 
								className='w-full h-full object-contain'
							/>
						</div> */}
					</Link>

					{/* Barra de búsqueda - Centro (siempre visible) */}
					<div className='flex-1 max-w-md mx-4'>
						<SearchBar variant='navbar' className='w-full' />
					</div>

					{/* Links de navegación - Derecha (Desktop) */}
					<div className='hidden lg:flex items-center space-x-6 flex-shrink-0'>
						{/* <Link href='/' className='text-gray-700 hover:text-primary-600 transition-colors font-medium'>
							Inicio
						</Link> */}
						<Link href='/servicios' className='text-gray-700 hover:text-primary-600 transition-colors font-medium'>
							Servicios
						</Link>
						<Link href='/promociones' className='text-gray-700 hover:text-primary-600 transition-colors font-medium'>
							Promociones
						</Link>
						<Link href='/nosotros' className='text-gray-700 hover:text-primary-600 transition-colors font-medium'>
							Nosotros
						</Link>
						{/* <Link href='/contacto' className='text-gray-700 hover:text-primary-600 transition-colors font-medium'>
							Contacto
						</Link> */}
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

				{/* Menú móvil */}
				{isMenuOpen && (
					<div
						ref={menuRef}
						className='lg:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-lg'
					>
						<div className='px-4 py-6 space-y-4'>
							{/* Links móviles */}
							{/* <Link
								href='/'
								className='block py-3 text-gray-700 hover:text-primary-600 transition-colors font-medium border-b border-gray-100'
								onClick={() => setIsMenuOpen(false)}
							>
								Inicio
							</Link> */}
							<Link
								href='/servicios'
								className='block py-3 text-gray-700 hover:text-primary-600 transition-colors font-medium border-b border-gray-100'
								onClick={() => setIsMenuOpen(false)}
							>
								Servicios
							</Link>
							<Link
								href='/promociones'
								className='block py-3 text-gray-700 hover:text-primary-600 transition-colors font-medium border-b border-gray-100'
								onClick={() => setIsMenuOpen(false)}
							>
								Promociones
							</Link>
							<Link
								href='/nosotros'
								className='block py-3 text-gray-700 hover:text-primary-600 transition-colors font-medium border-b border-gray-100'
								onClick={() => setIsMenuOpen(false)}
							>
								Nosotros
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
