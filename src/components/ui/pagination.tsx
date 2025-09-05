import * as React from "react"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import Link from "next/link"

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  )
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-2", className)}
      {...props}
    />
  )
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />
}

type PaginationButtonProps = {
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  title?: string;
  icon?: React.ReactNode;
  className?: string;
}

function PaginationButton({
  onClick,
  disabled,
  title,
  icon,
  className,
}: PaginationButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "flex h-10 min-w-10 items-center justify-center rounded-md text-base font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer touch-manipulation ",
        className
      )}
      title={title}
    >
      {icon}
    </button>
  )
}

type PaginationLinkProps = {
	isActive?: boolean;
} & Pick<React.ComponentProps<typeof Button>, 'size'> &
	React.ComponentProps<typeof Link>;

function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) {
  return (
		<Link
			aria-current={isActive ? 'page' : undefined}
			data-slot='pagination-link'
			data-active={isActive}
			className={cn(
				buttonVariants({
					variant: isActive ? 'default' : 'ghost',
					size,
				}),
				// Estilos personalizados para paginación con colores primary
				isActive
					? 'bg-primary-500 text-white hover:bg-primary-600 border-primary-500 shadow-sm'
					: 'text-gray-700 hover:bg-primary-50 hover:text-primary-700 border-transparent',
				'border transition-colors duration-200 font-medium h-10 min-w-10 text-sm ',
				className
			)}
			{...props}
		/>
	);
}

function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Ir a página anterior"
      size="default"
      className={cn(
        "gap-1 px-2.5 sm:pl-2.5 text-gray-700 hover:bg-primary-50 hover:text-primary-700 disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    >
      <ChevronLeftIcon className="size-4" />
      <span className="hidden sm:block">Anterior</span>
    </PaginationLink>
  )
}

function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Ir a página siguiente"
      size="default"
      className={cn(
        "gap-1 px-2.5 sm:pr-2.5 text-gray-700 hover:bg-primary-50 hover:text-primary-700 disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    >
      <span className="hidden sm:block">Siguiente</span>
      <ChevronRightIcon className="size-4" />
    </PaginationLink>
  )
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn(
        "flex size-9 items-center justify-center text-gray-500",
        className
      )}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">Más páginas</span>
    </span>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
  PaginationButton,
}
