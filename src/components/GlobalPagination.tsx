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
// !Hay un error de sincronizacion con el servidor, se aplico solucion temporal.

interface GlobalPaginationProps {
	pagination: PaginationMeta;
	onPageChange: (page: number) => void;
	className?: string;
}

type PageItem = number | '...';

const GlobalPagination = ({ pagination, onPageChange, className = '' }: GlobalPaginationProps) => {
	const { currentPage, totalPages, hasNextPage, hasPreviousPage } = pagination;
	const { isMobile, isTablet } = useMediaQuery();

	const generatePages = (): PageItem[] => {
		if (totalPages <= 7) {
			return Array.from({ length: totalPages }, (_, i) => i + 1);
		}

		if (isMobile) {
			if (totalPages <= 7) {
				return Array.from({ length: totalPages }, (_, i) => i + 1);
			}

			const pages: PageItem[] = [];

			if (currentPage === 1) {
				pages.push(1, 2, 3);
			} else if (currentPage === totalPages) {
				pages.push(totalPages - 2, totalPages - 1, totalPages);
			} else {
				pages.push(currentPage - 1, currentPage, currentPage + 1);
			}

			return pages;
		}

		if (isTablet) {
			const pages: PageItem[] = [1];
			const showLeftDots = currentPage > 4;
			const showRightDots = currentPage < totalPages - 3;

			if (showLeftDots) {
				pages.push('...');
			} else {
				pages.push(2);
			}

			let start = currentPage - 1;
			let end = currentPage + 1;

			if (currentPage <= 4) {
				start = 3;
				end = 5;
			} else if (currentPage >= totalPages - 3) {
				start = totalPages - 4;
				end = totalPages - 2;
			}

			for (let i = start; i <= end; i++) {
				pages.push(i);
			}

			if (showRightDots) {
				pages.push('...');
			} else {
				pages.push(totalPages - 1);
			}

			pages.push(totalPages);

			return pages;
		}

		const pages: PageItem[] = [1];
		const showLeftDots = currentPage > 5;
		const showRightDots = currentPage < totalPages - 4;

		if (showLeftDots) {
			pages.push('...');
		} else {
			pages.push(2);
		}

		let start = currentPage - 2;
		let end = currentPage + 2;

		if (currentPage <= 5) {
			start = 3;
			end = 7;
		} else if (currentPage >= totalPages - 4) {
			start = totalPages - 6;
			end = totalPages - 2;
		}

		for (let i = start; i <= end; i++) {
			pages.push(i);
		}

		if (showRightDots) {
			pages.push('...');
		} else {
			pages.push(totalPages - 1);
		}

		pages.push(totalPages);

		return pages;
	};

	const handleLinkClick = (e: React.MouseEvent, page: number) => {
		e.preventDefault();
		onPageChange(page);
	};

	return (
		<Pagination className={className}>
			<PaginationContent>
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

				<PaginationItem>
					<PaginationButton
						disabled={!hasPreviousPage}
						onClick={() => onPageChange(currentPage - 1)}
						title='Página anterior'
						icon={<ChevronLeftIcon className='h-4 w-4' />}
					/>
				</PaginationItem>

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

				<PaginationItem>
					<PaginationButton
						disabled={!hasNextPage}
						onClick={() => onPageChange(currentPage + 1)}
						title='Página siguiente'
						icon={<ChevronRightIcon className='h-4 w-4' />}
					/>
				</PaginationItem>

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
