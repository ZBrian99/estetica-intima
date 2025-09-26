import type { ReactElement } from 'react'

function LotusLogo({ size = 40, className = '' }: { size?: number; className?: string }): ReactElement {
  // Simple stylized lotus using SVG, color driven by currentColor
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Lotus logo"
    >
      <g fill="currentColor" stroke="none">
        {/* Center petal */}
        <path d="M50 18 L63 42 Q50 60 37 42 Z" />
        {/* Left petal */}
        <path d="M32 30 L44 46 Q35 58 26 45 Z" opacity="0.85" />
        {/* Right petal */}
        <path d="M68 30 L56 46 Q65 58 74 45 Z" opacity="0.85" />
        {/* Outer left */}
        <path d="M18 40 L36 56 Q26 70 14 55 Z" opacity="0.7" />
        {/* Outer right */}
        <path d="M82 40 L64 56 Q74 70 86 55 Z" opacity="0.7" />
        {/* Base leaf */}
        <path d="M30 64 Q50 78 70 64 Q50 86 30 64 Z" opacity="0.6" />
      </g>
    </svg>
  )
}

function BrandTitle({ title, subtitle }: { title: string; subtitle: string }): ReactElement {
  return (
    <div className="flex flex-col">
      <span className="text-2xl font-bold tracking-tight text-gray-900">{title}</span>
      <span className="text-xs font-medium text-primary">{subtitle}</span>
    </div>
  )
}

export default function BrandV2Page(): ReactElement {
  const title = 'Intima'
  const subtitle = 'Centro de estética integral'

  const variants: ReactElement[] = [
    // 1. Classic horizontal
    (
      <div className="flex items-center gap-3 rounded-2xl border bg-white p-5 shadow-sm">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 text-primary">
          <LotusLogo size={28} />
        </div>
        <BrandTitle title={title} subtitle={subtitle} />
      </div>
    ),

    // 2. Vertical stacked
    (
      <div className="grid place-items-center rounded-2xl border bg-gradient-to-b from-white to-gray-50 p-6">
        <div className="mb-2 text-primary">
          <LotusLogo size={44} />
        </div>
        <div className="text-center">
          <span className="block text-2xl font-bold text-gray-900">{title}</span>
          <span className="block text-xs font-medium text-primary">{subtitle}</span>
        </div>
      </div>
    ),

    // 3. Accent overline
    (
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <div className="mb-3 h-1 w-16 rounded-full bg-gradient-to-r from-primary/60 to-primary/30" />
        <div className="flex items-center gap-3">
          <LotusLogo size={32} className="text-primary" />
          <div>
            <span className="block text-2xl font-bold text-gray-900">{title}</span>
            <span className="block text-xs font-medium text-primary">{subtitle}</span>
          </div>
        </div>
      </div>
    ),

    // 4. Soft badge
    (
      <div className="flex items-center gap-3 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-6 ring-1 ring-gray-200/60">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
          <LotusLogo size={28} />
        </div>
        <div>
          <span className="block text-2xl font-bold text-gray-900">{title}</span>
          <span className="block text-xs font-medium text-primary">{subtitle}</span>
        </div>
      </div>
    ),

    // 5. Mark with ring
    (
      <div className="flex items-center gap-4 rounded-2xl border bg-white p-6">
        <div className="relative">
          <div className="flex h-12 w-12 items-center justify-center rounded-full ring-4 ring-primary/20 text-primary">
            <LotusLogo size={26} />
          </div>
          <div className="absolute -right-1 -bottom-1 h-3 w-3 rounded-full bg-primary/60" />
        </div>
        <BrandTitle title={title} subtitle={subtitle} />
      </div>
    ),

    // 6. Duotone gradient
    (
      <div className="rounded-2xl bg-gradient-to-r from-primary/15 via-white to-primary/10 p-6">
        <div className="flex items-center gap-3">
          <LotusLogo size={32} className="text-primary" />
          <div>
            <span className="block text-2xl font-bold text-gray-900">{title}</span>
            <span className="block text-xs font-medium text-primary">{subtitle}</span>
          </div>
        </div>
      </div>
    ),

    // 7. Minimal card
    (
      <div className="rounded-2xl border bg-white p-6">
        <div className="flex items-center gap-3">
          <LotusLogo size={30} className="text-primary" />
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-gray-900">{title}</span>
            <span className="text-xs text-primary">{subtitle}</span>
          </div>
        </div>
      </div>
    ),

    // 8. Ribbon accent
    (
      <div className="rounded-2xl border bg-white p-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <LotusLogo size={32} className="text-primary" />
            <div className="absolute -left-2 -top-2 h-2 w-10 bg-gradient-to-r from-primary/50 to-primary/20 rounded-full" />
          </div>
          <BrandTitle title={title} subtitle={subtitle} />
        </div>
      </div>
    ),

    // 9. Soft shadow block
    (
      <div className="rounded-2xl bg-white p-6 shadow-lg shadow-primary/10">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <LotusLogo size={28} />
          </div>
          <BrandTitle title={title} subtitle={subtitle} />
        </div>
      </div>
    ),

    // 10. Hero mini
    (
      <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 p-8">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-primary shadow-sm">
            <LotusLogo size={34} />
          </div>
          <div>
            <span className="block text-3xl font-bold text-gray-900">{title}</span>
            <span className="block text-sm font-medium text-primary">{subtitle}</span>
          </div>
        </div>
      </div>
    ),
  ]

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Brand v2 — Variantes</h1>
          <span className="text-sm text-gray-600">Todas con el mismo logo en primary</span>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {variants.map((v, i) => (
            <div key={i} className="space-y-3">
              <div className="text-xs font-medium text-gray-500">Diseño #{i + 1}</div>
              {v}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}