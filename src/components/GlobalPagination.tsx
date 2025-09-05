'use client';

import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationButton,
} from '@/components/ui/pagination';
import { PaginationMeta } from '@/types/commonTypes';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { ChevronLeftIcon, ChevronRightIcon, EllipsisIcon } from 'lucide-react';

//
// TODO: Hay que optimizar mejorar la logica de la paginacion.
// Tambien hay que mejorar el responsive.
//

interface GlobalPaginationProps {
	pagination: PaginationMeta;
	onPageChange: (page: number) => void;
}

type PageItem = number | '...';

const GlobalPagination = ({ pagination, onPageChange }: GlobalPaginationProps) => {
	const { currentPage, totalPages, hasNextPage, hasPreviousPage } = pagination;
	const { isMobile, isTablet } = useMediaQuery();

	// Función para generar el array de páginas según el dispositivo
	const generatePages = (): PageItem[] => {
		// Si hay 7 páginas o menos, mostrar todas
		if (totalPages <= 7) {
			return Array.from({ length: totalPages }, (_, i) => i + 1);
		}

		// Móvil: muestra 3 páginas cuando es posible
		if (isMobile) {
			if (totalPages <= 7) {
				return Array.from({ length: totalPages }, (_, i) => i + 1);
			}

			const pages: PageItem[] = [];

			// Siempre mostrar 3 números de página
			if (currentPage === 1) {
				pages.push(1, 2, 3);
			} else if (currentPage === totalPages) {
				pages.push(totalPages - 2, totalPages - 1, totalPages);
			} else {
				pages.push(currentPage - 1, currentPage, currentPage + 1);
			}

			return pages;
		}

		// Tablet: 9 elementos fijos
		if (isTablet) {
			const pages: PageItem[] = [1];
			const showLeftDots = currentPage > 4;
			const showRightDots = currentPage < totalPages - 3;

			// Agregar puntos o número después del 1
			if (showLeftDots) {
				pages.push('...');
			} else {
				pages.push(2);
			}

			// Calcular el rango central
			let start = currentPage - 1;
			let end = currentPage + 1;

			// Ajustar el rango si estamos cerca del inicio o final
			if (currentPage <= 4) {
				start = 3;
				end = 5;
			} else if (currentPage >= totalPages - 3) {
				start = totalPages - 4;
				end = totalPages - 2;
			}

			// Agregar números centrales
			for (let i = start; i <= end; i++) {
				pages.push(i);
			}

			// Agregar puntos o número antes del último
			if (showRightDots) {
				pages.push('...');
			} else {
				pages.push(totalPages - 1);
			}

			// Agregar última página
			pages.push(totalPages);

			return pages;
		}

		// Desktop: 11 elementos fijos
		const pages: PageItem[] = [1];
		const showLeftDots = currentPage > 5;
		const showRightDots = currentPage < totalPages - 4;

		// Agregar puntos o número después del 1
		if (showLeftDots) {
			pages.push('...');
		} else {
			pages.push(2);
		}

		// Calcular el rango central
		let start = currentPage - 2;
		let end = currentPage + 2;

		// Ajustar el rango si estamos cerca del inicio o final
		if (currentPage <= 5) {
			start = 3;
			end = 7;
		} else if (currentPage >= totalPages - 4) {
			start = totalPages - 6;
			end = totalPages - 2;
		}

		// Agregar números centrales
		for (let i = start; i <= end; i++) {
			pages.push(i);
		}

		// Agregar puntos o número antes del último
		if (showRightDots) {
			pages.push('...');
		} else {
			pages.push(totalPages - 1);
		}

		// Agregar última página
		pages.push(totalPages);

		return pages;
	};

	// Prevenir el comportamiento por defecto de los enlaces
	const handleLinkClick = (e: React.MouseEvent, page: number) => {
		e.preventDefault();
		onPageChange(page);
	};

	return (
		<Pagination>
			<PaginationContent>
				{/* Botón Primera (solo en móvil) */}
				{isMobile && (
					<PaginationItem>
						<PaginationButton
							disabled={!hasPreviousPage}
							onClick={() => onPageChange(1)}
							title='Primera página'
							icon={
								<>
									<ChevronLeftIcon className='h-4 w-4 absolute -translate-x-[2.5px]' />
									<ChevronLeftIcon className='h-4 w-4 absolute translate-x-[2.5px]' />
								</>
							}
						/>
					</PaginationItem>
				)}

				{/* Botón Anterior */}
				<PaginationItem>
					<PaginationButton
						disabled={!hasPreviousPage}
						onClick={() => onPageChange(currentPage - 1)}
						title='Página anterior'
						icon={<ChevronLeftIcon className='h-4 w-4' />}
					/>
				</PaginationItem>

				{/* Páginas fijas según dispositivo */}
				{generatePages().map((page, index) => (
					<PaginationItem key={`${page}-${index}`}>
						{page === '...' ? (
							<div className='flex h-10 min-w-10 select-none items-center justify-center text-sm font-medium text-muted-foreground'>
								<EllipsisIcon className='h-4 w-4' />
							</div>
						) : isMobile ? (
							<PaginationLink href='#' onClick={(e) => handleLinkClick(e, page)} isActive={page === currentPage}>
								{page}
							</PaginationLink>
						) : (
							<PaginationLink href='#' onClick={(e) => handleLinkClick(e, page)} isActive={page === currentPage}>
								{page}
							</PaginationLink>
						)}
					</PaginationItem>
				))}

				{/* Botón Siguiente */}
				<PaginationItem>
					<PaginationButton
						disabled={!hasNextPage}
						onClick={() => onPageChange(currentPage + 1)}
						title='Página siguiente'
						icon={<ChevronRightIcon className='h-4 w-4' />}
					/>
				</PaginationItem>

				{/* Botón Última (solo en móvil) */}
				{isMobile && (
					<PaginationItem>
						<PaginationButton
							disabled={!hasNextPage}
							onClick={() => onPageChange(totalPages)}
							title='Última página'
							icon={
								<>
									<ChevronRightIcon className='h-4 w-4 absolute -translate-x-[2.5px]' />
									<ChevronRightIcon className='h-4 w-4 absolute translate-x-[2.5px]' />
								</>
							}
						/>
					</PaginationItem>
				)}
			</PaginationContent>
		</Pagination>
	);
};

export default GlobalPagination;
