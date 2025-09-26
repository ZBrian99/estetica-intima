import Link from 'next/link'
import { FiAward, FiCheckCircle, FiStar, FiMapPin, FiClock, FiPhone, FiMail, FiInstagram, FiFacebook, FiMessageCircle } from 'react-icons/fi'
import type { ReactNode } from 'react'

type Section = 'por-que-elegirnos' | 'testimonios' | 'contacto-ubicacion-horarios'

// Why Choose Us - Variant A
function WhyChooseUsVariantA(): ReactNode {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900">¿Por qué elegirnos?</h2>
        <p className="text-gray-600">Resultados reales, equipos de vanguardia y atención cálida.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { icon: <FiAward />, title: 'Certificación profesional', desc: 'Equipo certificado y en constante capacitación.' },
          { icon: <FiCheckCircle />, title: 'Garantía de resultados', desc: 'Planes y seguimiento personalizados.' },
          { icon: <FiStar />, title: 'Satisfacción alta', desc: '+4.8/5 promedio en reseñas de clientes.' },
        ].map((item) => (
          <div key={item.title} className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
            <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-3 gap-4 rounded-2xl bg-gray-50 p-6 text-center">
        {[
          { value: '10+', label: 'Años de experiencia' },
          { value: '5k+', label: 'Clientes felices' },
          { value: '20+', label: 'Servicios especializados' },
        ].map((m) => (
          <div key={m.label}>
            <div className="text-3xl font-bold text-gray-900">{m.value}</div>
            <div className="text-sm text-gray-600">{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

// Why Choose Us - Variant B
function WhyChooseUsVariantB(): ReactNode {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-8 lg:col-span-1">
          <h3 className="text-xl font-bold text-gray-900">Motivos</h3>
          <ul className="mt-4 space-y-3 text-sm text-gray-700">
            <li>• Tecnología segura y efectiva</li>
            <li>• Protocolos adaptados a tu piel</li>
            <li>• Ambiente cómodo y profesional</li>
          </ul>
          <div className="mt-6 grid grid-cols-3 gap-2 text-center">
            {[
              { value: '4.8★', label: 'Rating' },
              { value: '95%', label: 'Satisfacción' },
              { value: '24h', label: 'Respuesta' },
            ].map((m) => (
              <div key={m.label} className="rounded-xl bg-white p-3 shadow-sm">
                <div className="text-xl font-bold text-gray-900">{m.value}</div>
                <div className="text-xs text-gray-600">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border bg-white p-8 lg:col-span-2">
          <h3 className="text-xl font-bold text-gray-900">Ventajas diferenciales</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Planes personalizados', desc: 'Acompañamiento según objetivos y tiempos.' },
              { title: 'Equipos premium', desc: 'Tecnología de última generación y protocolos seguros.' },
              { title: 'Seguimiento post-sesión', desc: 'Guías y recomendaciones para mejores resultados.' },
              { title: 'Staff cálido y experto', desc: 'Experiencia, escucha y atención centrada en vos.' },
            ].map((v) => (
              <div key={v.title} className="rounded-xl bg-gray-50 p-4">
                <h4 className="font-semibold text-gray-900">{v.title}</h4>
                <p className="text-sm text-gray-700">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Why Choose Us - Variant C
function WhyChooseUsVariantC(): ReactNode {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-900">Elegí excelencia, elegí comodidad</h3>
        <Link href="/#turnos" className="rounded-xl bg-primary px-4 py-2 text-white">Reservar turno</Link>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { title: 'Atención humana', desc: 'Empatía, escucha y acompañamiento en cada sesión.' },
          { title: 'Resultados visibles', desc: 'Evidencia y métricas que respaldan nuestro trabajo.' },
          { title: 'Espacio acogedor', desc: 'Ambiente pensado para tu bienestar y tranquilidad.' },
        ].map((b) => (
          <div key={b.title} className="rounded-2xl border bg-white p-6">
            <h4 className="font-semibold text-gray-900">{b.title}</h4>
            <p className="text-sm text-gray-700">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// Testimonials - Variant A
function TestimonialsVariantA(): ReactNode {
  const testimonials = [
    { name: 'Sofía', text: 'Excelente atención y resultados súper rápidos.', rating: 5 },
    { name: 'Valentina', text: 'Me sentí acompañada de principio a fin.', rating: 5 },
    { name: 'Camila', text: 'Ambiente hermoso y profesional.', rating: 4 },
  ]
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">Testimonios</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <div key={t.name} className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-2 flex items-center gap-1 text-amber-500">
              {Array.from({ length: t.rating }).map((_, i) => (
                <FiStar key={i} />
              ))}
            </div>
            <p className="text-sm text-gray-700">“{t.text}”</p>
            <div className="mt-3 text-sm font-semibold text-gray-900">{t.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

// Testimonials - Variant B
function TestimonialsVariantB(): ReactNode {
  const testimonials = [
    { name: 'Agustina', role: 'Cliente', text: 'Resultados que superaron mis expectativas.' },
    { name: 'Lucía', role: 'Cliente', text: 'Volvería mil veces, gracias por todo.' },
  ]
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-8">
        <h3 className="text-xl font-bold text-gray-900">Lo que dicen</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl bg-white/80 p-6 shadow-sm ring-1 ring-gray-200/60">
              <div className="mb-2 flex items-center gap-2 text-amber-500">
                <FiStar /><FiStar /><FiStar /><FiStar /><FiStar />
              </div>
              <p className="text-sm text-gray-700">“{t.text}”</p>
              <div className="mt-3 text-sm font-semibold text-gray-900">{t.name}</div>
              <div className="text-xs text-gray-600">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonials - Variant C
function TestimonialsVariantC(): ReactNode {
  const testimonials = [
    { name: 'María', text: 'Me encantó la dedicación y el trato.' },
    { name: 'Julieta', text: 'Se nota la calidad en cada detalle.' },
    { name: 'Ana', text: 'Recomendadísimo, resultados increíbles.' },
  ]
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-bold text-gray-900">Experiencias reales</h3>
        <p className="text-gray-600">Historias que inspiran confianza.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <figure key={t.name} className="space-y-2 rounded-2xl border bg-white p-6">
            <blockquote className="text-sm text-gray-700">“{t.text}”</blockquote>
            <figcaption className="text-sm font-semibold text-gray-900">{t.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

// Contact/Location/Hours - Variant A
function ContactLocationHoursVariantA(): ReactNode {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">Contacto, ubicación y horarios</h2>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border bg-gradient-to-b from-white to-gray-50 p-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-800"><FiMapPin /><span>Av. Siempre Viva 123, CABA</span></div>
            <div className="flex items-center gap-2 text-gray-800"><FiPhone /><span>+54 9 11 0000-0000</span></div>
            <div className="flex items-center gap-2 text-gray-800"><FiClock /><span>Lun a Sáb: 10:00–19:00</span></div>
          </div>
          <Link href="https://wa.me/5491100000000" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-white">Escribir por WhatsApp</Link>
        </div>
        <div className="rounded-2xl border bg-gray-100 p-6">
          <div className="flex h-64 items-center justify-center rounded-xl border bg-white text-sm text-gray-600">Mapa placeholder</div>
        </div>
      </div>
    </section>
  )
}

// Contact/Location/Hours - Variant B
function ContactLocationHoursVariantB(): ReactNode {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="rounded-2xl bg-gray-50 p-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h4 className="mb-2 text-sm font-semibold text-gray-900">Ubicación</h4>
            <div className="flex items-center gap-2 text-gray-800"><FiMapPin /><span>Av. Siempre Viva 123, CABA</span></div>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h4 className="mb-2 text-sm font-semibold text-gray-900">Teléfono</h4>
            <div className="flex items-center gap-2 text-gray-800"><FiPhone /><span>+54 9 11 0000-0000</span></div>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h4 className="mb-2 text-sm font-semibold text-gray-900">Horarios</h4>
            <div className="flex items-center gap-2 text-gray-800"><FiClock /><span>Lun a Sáb: 10:00–19:00</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Contact/Location/Hours - Variant C
function ContactLocationHoursVariantC(): ReactNode {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border bg-white p-6 lg:col-span-2">
          <div className="flex h-64 items-center justify-center rounded-xl border bg-gray-50 text-sm text-gray-600">Mapa placeholder</div>
        </div>
        <div className="rounded-2xl border bg-white p-6">
          <h4 className="text-lg font-semibold text-gray-900">Visitanos</h4>
          <div className="mt-3 space-y-2 text-sm text-gray-700">
            <div className="flex items-center gap-2"><FiMapPin /><span>Av. Siempre Viva 123, CABA</span></div>
            <div className="flex items-center gap-2"><FiPhone /><span>+54 9 11 0000-0000</span></div>
            <div className="flex items-center gap-2"><FiClock /><span>Lun a Sáb: 10:00–19:00</span></div>
          </div>
          <Link href="/nosotras" className="mt-4 inline-flex rounded-xl border border-primary px-4 py-2 text-primary">Conocé más</Link>
        </div>
      </div>
    </section>
  )
}

// Contact/Location/Hours - Variant D
function ContactLocationHoursVariantD(): ReactNode {
  const phone = '+54 9 223 550-7949'
  const whatsappLink = `https://wa.me/5492235507949?text=${encodeURIComponent('Hola! Me gustaría hacer una consulta sobre tratamientos.')}`
  const telLink = `tel:+5492235507949`
  const instagram = 'https://www.instagram.com/intimamdq/'
  const facebook = 'https://www.facebook.com/intimamdq'
  const email = 'info@intimamdq.com'
  const address = 'Castelli 3141, Mar del Plata'
  const mapsQuery = encodeURIComponent(address)
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`
  const hours = 'Lun a Sáb: 10:00–19:00'

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid gap-6 lg:grid-cols-[1fr_480px]">
        {/* Left content */}
        <div className="rounded-2xl border bg-gradient-to-b from-white to-gray-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Contacto, ubicación y horarios</h2>
          <div className="grid gap-4">
            {/* Contact row */}
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-200/60">
                <h4 className="mb-2 text-sm font-semibold text-gray-900">Teléfono</h4>
                <div className="flex items-center gap-2 text-gray-800"><FiPhone /><a href={telLink} className="hover:text-primary">{phone}</a></div>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-200/60">
                <h4 className="mb-2 text-sm font-semibold text-gray-900">Email</h4>
                <div className="flex items-center gap-2 text-gray-800"><FiMail /><a href={`mailto:${email}`} className="hover:text-primary">{email}</a></div>
              </div>
            </div>

            {/* Social row */}
            <div className="grid gap-3 sm:grid-cols-3">
              <a href={instagram} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-200/60 inline-flex items-center gap-2 hover:bg-primary/5 hover:text-primary"><FiInstagram /><span>Instagram</span></a>
              <a href={facebook} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-200/60 inline-flex items-center gap-2 hover:bg-primary/5 hover:text-primary"><FiFacebook /><span>Facebook</span></a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-200/60 inline-flex items-center gap-2 hover:bg-primary/5 hover:text-primary"><FiMessageCircle /><span>WhatsApp</span></a>
            </div>

            {/* Address + Hours */}
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-200/60">
                <h4 className="mb-2 text-sm font-semibold text-gray-900">Dirección</h4>
                <div className="flex items-center gap-2 text-gray-800"><FiMapPin /><a href={mapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary">{address}</a></div>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-200/60">
                <h4 className="mb-2 text-sm font-semibold text-gray-900">Horarios</h4>
                <div className="flex items-center gap-2 text-gray-800"><FiClock /><span>{hours}</span></div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-2 rounded-xl bg-primary/10 p-4">
              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-gray-800">¿List@ para empezar? Escribinos por WhatsApp y te asesoramos.</p>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-white">Reservar por WhatsApp</a>
              </div>
            </div>
          </div>
        </div>

        {/* Right map */}
        <div className="rounded-2xl border bg-white p-4">
          <iframe
            title="Ubicación Intima"
            className="h-[360px] w-full rounded-xl"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
          />
          <div className="mt-3 text-xs text-gray-600">Mapa integrado — si preferís abrir en Google Maps, <a className="text-primary" href={mapsLink} target="_blank" rel="noopener noreferrer">clic acá</a>.</div>
        </div>
      </div>

      {/* Final CTA bottom */}
      <div className="mt-8 text-center">
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-white shadow-sm">Agendar ahora por WhatsApp</a>
      </div>
    </section>
  )
}

export default async function LandingExtrasPage({ params }: { params: Promise<{ seccion: Section }> }) {
  const { seccion } = await params

  const componentsBySection: Record<Section, ReactNode[]> = {
    'por-que-elegirnos': [
      WhyChooseUsVariantA(),
      WhyChooseUsVariantB(),
      WhyChooseUsVariantC(),
    ],
    testimonios: [
      TestimonialsVariantA(),
      TestimonialsVariantB(),
      TestimonialsVariantC(),
    ],
    'contacto-ubicacion-horarios': [
      ContactLocationHoursVariantA(),
      ContactLocationHoursVariantB(),
      ContactLocationHoursVariantC(),
      ContactLocationHoursVariantD(),
    ],
  }

  const sectionTitle: Record<Section, string> = {
    'por-que-elegirnos': 'Por qué elegirnos',
    testimonios: 'Testimonios',
    'contacto-ubicacion-horarios': 'Contacto, ubicación y horarios',
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Landing extras — {sectionTitle[seccion]}</h1>
          <nav className="flex gap-2">
            <Link href="/landing-extras/por-que-elegirnos" className="rounded-xl border px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">Por qué elegirnos</Link>
            <Link href="/landing-extras/testimonios" className="rounded-xl border px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">Testimonios</Link>
            <Link href="/landing-extras/contacto-ubicacion-horarios" className="rounded-xl border px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">Contacto</Link>
          </nav>
        </div>
        <div className="space-y-10">
          {componentsBySection[seccion]}
        </div>
      </div>
    </main>
  )
}