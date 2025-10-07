'use client';

import Link from 'next/link';

type CTA = {
  label: string;
  href: string;
};

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCtas?: CTA[];
  secondaryCtas?: CTA[];
  bgGradient: string; // Tailwind gradient classes e.g. 'from-purple-700 via-violet-600 to-fuchsia-500'
  imageUrl?: string;
  imageOpacity?: number; // 0-100
}

export default function HeroBanner({
  title,
  subtitle,
  description,
  primaryCtas = [],
  secondaryCtas = [],
  bgGradient,
  imageUrl,
  imageOpacity = 25,
}: HeroBannerProps) {
  return (
    <section className={`relative overflow-hidden min-h-[calc(100svh-4rem)] md:min-h-[90vh]`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${bgGradient}`} />
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Banner background"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: imageOpacity / 100 }}
        />
      )}
      {/* Soft overlay to enhance text readability without blur */}
      <div className="absolute inset-0 bg-black/10 md:bg-black/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 items-center gap-8">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight drop-shadow-sm">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-3 text-xl md:text-2xl font-semibold text-white/90">
                {subtitle}
              </p>
            )}
            {description && (
              <p className="mt-4 text-base md:text-lg text-white/85 max-w-xl">
                {description}
              </p>
            )}

            {(primaryCtas.length > 0 || secondaryCtas.length > 0) && (
              <div className="mt-8 flex flex-wrap gap-3">
                {primaryCtas.map((cta, idx) => (
                  <Link
                    key={`p-${idx}`}
                    href={cta.href}
                    className="inline-flex items-center rounded-lg bg-white/90 text-gray-900 hover:bg-white px-5 py-2.5 font-semibold shadow-sm transition-colors"
                  >
                    {cta.label}
                  </Link>
                ))}
                {secondaryCtas.map((cta, idx) => (
                  <Link
                    key={`s-${idx}`}
                    href={cta.href}
                    className="inline-flex items-center rounded-lg border border-white/70 text-white hover:bg-white/10 px-5 py-2.5 font-semibold transition-colors"
                  >
                    {cta.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Decorative panel for larger screens */}
          <div className="hidden md:block">
            <div className="h-64 lg:h-80 w-full rounded-2xl border border-white/20 bg-white/5" />
          </div>
        </div>
      </div>
    </section>
  );
}