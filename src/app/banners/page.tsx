'use client'

import { useState, type CSSProperties, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select'

type BannerVariant =
  | 'classicLeftImage'
  | 'classicRightImage'
  | 'overlayCenter'
  | 'splitHalf'
  | 'gradientText'
  | 'badgeTop'
  | 'minimal'
  | 'roundedCard'
  | 'imageBackground'
  | 'ctaBottom'

type ButtonStyle = 'solid' | 'outline' | 'ghost' | 'soft' | 'gradient' | 'pill'

interface BannerData {
  title: string
  description: string
  imageUrl: string
  color: string
  href?: string
}

const VARIANT_LABELS: Record<BannerVariant, string> = {
  classicLeftImage: 'Clásico (imagen izquierda)',
  classicRightImage: 'Clásico (imagen derecha)',
  overlayCenter: 'Overlay centrado',
  splitHalf: 'Layout 50/50',
  gradientText: 'Texto con gradiente',
  badgeTop: 'Badge superior',
  minimal: 'Minimalista',
  roundedCard: 'Tarjeta redondeada',
  imageBackground: 'Imagen de fondo',
  ctaBottom: 'CTA inferior'
}

const DEFAULT_DATA: BannerData = {
  title: 'Promo especial de septiembre',
  description: 'Aprovechá hasta 30% OFF en combos seleccionados.',
  imageUrl: '/images/placeholder-service.webp',
  color: '#7C4DFF',
  href: '/promociones'
}

const PRESET_COLORS: string[] = [
  '#7C4DFF',
  '#FF6F61',
  '#00C853',
  '#2962FF',
  '#FFB300',
  '#D81B60',
  '#00B8D4',
  '#5E35B1',
  '#EF5350',
  '#2E7D32'
]

const BUTTON_STYLE_LABELS: Record<ButtonStyle, string> = {
  solid: 'Solid',
  outline: 'Outline',
  ghost: 'Ghost',
  soft: 'Soft',
  gradient: 'Gradient',
  pill: 'Pill'
}

function sanitizeColor(input: string): string {
  const t = input.trim()
  const hexRegex = /^#?[0-9a-fA-F]{6}$|^#?[0-9a-fA-F]{3}$/
  if (hexRegex.test(t)) {
    return t.startsWith('#') ? t : `#${t}`
  }
  // allow named colors or rgb/rgba/hsl
  return t
}

function isUnoptimized(url: string): boolean {
  // Optimize only local public assets that start with '/'
  return !url.startsWith('/')
}

function getButtonStyles(style: ButtonStyle, accent: string, fullWidth = false): { className: string; style?: CSSProperties } {
  const base = 'inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition'
  const width = fullWidth ? ' w-full' : ''
  switch (style) {
    case 'solid':
      return { className: base + ' text-white hover:opacity-90' + width, style: { backgroundColor: accent } }
    case 'outline':
      return { className: base + ' border hover:bg-black/5' + width, style: { borderColor: accent, color: accent } }
    case 'ghost':
      return { className: base + ' bg-transparent hover:bg-black/5' + width, style: { color: accent } }
    case 'soft':
      return { className: base + ' text-black' + width, style: { backgroundColor: accent + '22', color: accent } }
    case 'gradient':
      return { className: base + ' text-white hover:opacity-90' + width, style: { backgroundImage: `linear-gradient(90deg, ${accent}, #9C27B0)` } }
    case 'pill':
      return { className: base + ' text-white rounded-full hover:opacity-90' + width, style: { backgroundColor: accent } }
  }
}

const MOCKS: BannerData[] = Array.from({ length: 10 }).map((_, i) => ({
  title: `Banner ${i + 1}: Promo destacada`,
  description: 'Resultados reales, atención profesional. Reservá en minutos.',
  imageUrl: '/images/placeholder-service.webp',
  color: i % 2 === 0 ? '#7C4DFF' : '#FF6F61',
  href: '/promociones'
}))

function BannerTemplate({ data, variant, buttonStyle }: { data: BannerData; variant: BannerVariant; buttonStyle: ButtonStyle }) {
  const accent = sanitizeColor(data.color)

  // Utilidades comunes
  const Title = (
    <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight" style={{ color: accent }}>
      {data.title}
    </h3>
  )
  const Desc = (
    <p className="text-base sm:text-lg text-gray-700">{data.description}</p>
  )
  const CTA = ({ fullWidth = false }: { fullWidth?: boolean }) => {
    const { className, style } = getButtonStyles(buttonStyle, accent, fullWidth)
    return (
      <div className="mt-4">
        <Link href={data.href ?? '#'} className={className} style={style}>
          Ver promoción
        </Link>
      </div>
    )
  }

  const tall = 'h-[30rem] sm:h-[34rem]'

  // Variantes
  switch (variant) {
    case 'classicLeftImage':
      return (
        <Card className="overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className={`relative ${tall}`}>
              <Image src={data.imageUrl} alt={data.title} fill className="object-cover" unoptimized={isUnoptimized(data.imageUrl)} />
            </div>
            <div className="p-6 sm:p-8 space-y-3 flex items-center min-h-[30rem]">
              <div>
                {Title}
                {Desc}
                <CTA />
              </div>
            </div>
          </div>
        </Card>
      )
    case 'classicRightImage':
      return (
        <Card className="overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="p-6 sm:p-8 order-2 sm:order-1 space-y-3 flex items-center min-h-[30rem]">
              <div>
                {Title}
                {Desc}
                <CTA />
              </div>
            </div>
            <div className={`relative order-1 sm:order-2 ${tall}`}>
              <Image src={data.imageUrl} alt={data.title} fill className="object-cover" unoptimized={isUnoptimized(data.imageUrl)} />
            </div>
          </div>
        </Card>
      )
    case 'overlayCenter':
      return (
        <Card className="overflow-hidden">
          <div className="relative">
            <div className={`relative ${tall}`}>
              <Image src={data.imageUrl} alt={data.title} fill className="object-cover" unoptimized={isUnoptimized(data.imageUrl)} />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                <div className="max-w-xl">
                  {/* En overlay forzamos texto blanco por contraste */}
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white">{data.title}</h3>
                  <p className="text-base sm:text-lg text-white/90">{data.description}</p>
                  <CTA />
                </div>
              </div>
            </div>
          </div>
        </Card>
      )
    case 'splitHalf':
      return (
        <Card className="overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="p-6 sm:p-8 flex items-center min-h-[30rem]">
              <div>
                {Title}
                {Desc}
                <CTA />
              </div>
            </div>
            <div className={`relative ${tall}`}>
              <Image src={data.imageUrl} alt={data.title} fill className="object-cover" unoptimized={isUnoptimized(data.imageUrl)} />
            </div>
          </div>
        </Card>
      )
    case 'gradientText':
      return (
        <Card className="overflow-hidden">
          <div className="p-6 sm:p-8 min-h-[30rem] flex items-center">
            <div className="w-full">
              <h3
                className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(90deg, ${accent}, #9C27B0)` }}
              >
                {data.title}
              </h3>
              {Desc}
              <div className="mt-6 flex gap-4 items-center">
                <div className="relative h-32 w-48 sm:h-40 sm:w-64">
                  <Image src={data.imageUrl} alt={data.title} fill className="object-cover rounded-md" unoptimized={isUnoptimized(data.imageUrl)} />
                </div>
                <CTA />
              </div>
            </div>
          </div>
        </Card>
      )
    case 'badgeTop':
      return (
        <Card className="overflow-hidden">
          <div className="p-6 sm:p-8 min-h-[30rem] flex items-center">
            <div>
              <span className="inline-block rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ backgroundColor: accent }}>
                Promo del mes
              </span>
              <div className="mt-4 space-y-3">
                {Title}
                {Desc}
                <CTA />
              </div>
            </div>
          </div>
        </Card>
      )
    case 'minimal':
      return (
        <Card className="overflow-hidden">
          <div className="p-6 sm:p-8 min-h-[30rem] flex items-center">
            <div>
              {Title}
              {Desc}
              <CTA />
            </div>
          </div>
        </Card>
      )
    case 'roundedCard':
      return (
        <div className="rounded-2xl border  overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-[1.2fr_1fr]">
            <div className="p-6 sm:p-8 space-y-3 min-h-[30rem] flex items-center">
              <div>
                {Title}
                {Desc}
                <CTA />
              </div>
            </div>
            <div className={`relative ${tall}`}>
              <Image src={data.imageUrl} alt={data.title} fill className="object-cover" unoptimized={isUnoptimized(data.imageUrl)} />
            </div>
          </div>
        </div>
      )
    case 'imageBackground':
      return (
        <div className="relative overflow-hidden rounded-xl">
          <div className={`relative ${tall}`}>
            <Image src={data.imageUrl} alt={data.title} fill className="object-cover" unoptimized={isUnoptimized(data.imageUrl)} />
            <div className="absolute inset-0" style={{ background: `linear-gradient(0deg, rgba(0,0,0,0.45), rgba(0,0,0,0.15))` }} />
            <div className="absolute inset-0 flex items-end">
              <div className="p-6 sm:p-8 text-white">
                <h3 className="text-2xl sm:text-3xl font-semibold" style={{ color: '#fff' }}>{data.title}</h3>
                <p className="text-base sm:text-lg opacity-90">{data.description}</p>
                <CTA />
              </div>
            </div>
          </div>
        </div>
      )
    case 'ctaBottom':
      return (
        <Card className="overflow-hidden">
          <div className="p-6 sm:p-8 min-h-[26rem] flex items-center">
            <div>
              {Title}
              {Desc}
            </div>
          </div>
          <div className="border-t p-5 sm:p-6 ">
            <CTA fullWidth />
          </div>
        </Card>
      )
  }
}

export default function BannersPage() {
  const [form, setForm] = useState<BannerData>(DEFAULT_DATA)
  const [variant, setVariant] = useState<BannerVariant>('classicLeftImage')
  const [buttonStyle, setButtonStyle] = useState<ButtonStyle>('solid')
  const [filePreviewUrl, setFilePreviewUrl] = useState<string | null>(null)

  useEffect(() => {
    return () => {
      if (filePreviewUrl) URL.revokeObjectURL(filePreviewUrl)
    }
  }, [filePreviewUrl])

  const onPickColor = (c: string) => setForm({ ...form, color: c })

  const onManualColor = (value: string) => {
    const sanitized = sanitizeColor(value)
    setForm({ ...form, color: sanitized })
  }

  const onFileChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    if (filePreviewUrl) URL.revokeObjectURL(filePreviewUrl)
    setFilePreviewUrl(url)
    setForm({ ...form, imageUrl: url })
  }

  const randomFrom = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)]

  const randomizeDesign = () => {
    const variants: BannerVariant[] = [
      'classicLeftImage',
      'classicRightImage',
      'overlayCenter',
      'splitHalf',
      'gradientText',
      'badgeTop',
      'minimal',
      'roundedCard',
      'imageBackground',
      'ctaBottom'
    ]
    setVariant(randomFrom(variants))
    setButtonStyle(randomFrom(['solid', 'outline', 'ghost', 'soft', 'gradient', 'pill']))
    setForm((prev) => ({ ...prev, color: randomFrom(PRESET_COLORS) }))
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-6 space-y-8">
      <section>
        <h1 className="text-2xl font-bold">Diseños de banners (promos)</h1>
        <p className="text-sm text-gray-600">Completá el formulario y seleccioná un diseño para previsualizar. Abajo tenés 10 diseños con data mock.</p>
      </section>

      {/* Formulario */}
      <Card className="p-4 sm:p-6 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="title">Título</Label>
            <Input id="title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Ej: Promo especial de septiembre" />
          </div>

          <div>
            <Label htmlFor="color">Color (hex o nombre CSS)</Label>
            <div className="flex items-center gap-3">
              <Input id="color" value={form.color} onChange={(e) => onManualColor(e.target.value)} placeholder="#7C4DFF" />
              <div className="h-6 w-6 rounded-full border" style={{ backgroundColor: sanitizeColor(form.color) }} />
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {PRESET_COLORS.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => onPickColor(c)}
                  className="h-7 w-7 rounded-full border focus:outline-none focus:ring-2 focus:ring-offset-1"
                  style={{ backgroundColor: c, boxShadow: sanitizeColor(form.color) === c ? '0 0 0 2px rgba(0,0,0,0.6)' : undefined }}
                  aria-label={`Elegir color ${c}`}
                  title={c}
                />
              ))}
            </div>
          </div>

          <div className="sm:col-span-2">
            <Label htmlFor="description">Descripción</Label>
            <Input id="description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Ej: Hasta 30% OFF en combos" />
          </div>

          <div>
            <Label htmlFor="image">URL de imagen</Label>
            <Input id="image" value={form.imageUrl} onChange={(e) => setForm({ ...form, imageUrl: e.target.value })} placeholder="/images/placeholder-service.webp o https://..." />
          </div>
          <div>
            <Label htmlFor="file">Cargar imagen (upload)</Label>
            <Input id="file" type="file" accept="image/*" onChange={onFileChange} />
          </div>

          <div>
            <Label htmlFor="href">Link destino</Label>
            <Input id="href" value={form.href ?? ''} onChange={(e) => setForm({ ...form, href: e.target.value })} placeholder="/promociones" />
          </div>

          <div>
            <Label>Diseño</Label>
            <Select value={variant} onValueChange={(v) => setVariant(v as BannerVariant)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Seleccioná un diseño" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="classicLeftImage">{VARIANT_LABELS.classicLeftImage}</SelectItem>
                <SelectItem value="classicRightImage">{VARIANT_LABELS.classicRightImage}</SelectItem>
                <SelectItem value="overlayCenter">{VARIANT_LABELS.overlayCenter}</SelectItem>
                <SelectItem value="splitHalf">{VARIANT_LABELS.splitHalf}</SelectItem>
                <SelectItem value="gradientText">{VARIANT_LABELS.gradientText}</SelectItem>
                <SelectItem value="badgeTop">{VARIANT_LABELS.badgeTop}</SelectItem>
                <SelectItem value="minimal">{VARIANT_LABELS.minimal}</SelectItem>
                <SelectItem value="roundedCard">{VARIANT_LABELS.roundedCard}</SelectItem>
                <SelectItem value="imageBackground">{VARIANT_LABELS.imageBackground}</SelectItem>
                <SelectItem value="ctaBottom">{VARIANT_LABELS.ctaBottom}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Estilo de botón</Label>
            <Select value={buttonStyle} onValueChange={(v) => setButtonStyle(v as ButtonStyle)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Seleccioná un estilo" />
              </SelectTrigger>
              <SelectContent>
                {(['solid', 'outline', 'ghost', 'soft', 'gradient', 'pill'] as ButtonStyle[]).map((bs) => (
                  <SelectItem key={bs} value={bs}>{BUTTON_STYLE_LABELS[bs]}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="secondary" onClick={() => { setForm(DEFAULT_DATA); setVariant('classicLeftImage'); setButtonStyle('solid') }}>Reset</Button>
          <Button onClick={randomizeDesign}>Generar aleatorio</Button>
        </div>
      </Card>

      {/* Preview del diseño seleccionado */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Preview del diseño seleccionado</h2>
        <BannerTemplate data={form} variant={variant} buttonStyle={buttonStyle} />
      </section>

      {/* Galería de diseños (mock) */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Galería de 10 diseños (mock data)</h2>
        <div className="space-y-4">
          {(
            [
              'classicLeftImage',
              'classicRightImage',
              'overlayCenter',
              'splitHalf',
              'gradientText',
              'badgeTop',
              'minimal',
              'roundedCard',
              'imageBackground',
              'ctaBottom'
            ] as BannerVariant[]
          ).map((v, idx) => (
            <div key={v} className="space-y-2">
              <div className="text-sm text-gray-600">{idx + 1}. {VARIANT_LABELS[v]}</div>
              <BannerTemplate data={MOCKS[idx]} variant={v} buttonStyle={(['solid', 'outline', 'ghost', 'soft', 'gradient', 'pill'] as ButtonStyle[])[idx % 6]} />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}