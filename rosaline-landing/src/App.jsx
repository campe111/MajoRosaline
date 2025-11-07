import Hero from './sections/Hero'
import Benefits from './sections/Benefits'
import Products from './sections/Products'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'

const navigation = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Productos', href: '#productos' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' }
]

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-beige text-softBlack">
      <div className="sticky top-0 z-50 border-b border-olive/10 bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a href="#inicio" className="text-lg font-semibold uppercase tracking-[0.4em] text-softBlack">
            Rosaline Olavarría
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium uppercase tracking-[0.25em] text-softBlack/70 sm:flex">
            {navigation.map((item) => (
              <a key={item.label} href={item.href} className="transition-colors hover:text-olive">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="https://wa.me/5491123456789"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-olive px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-olive transition-colors hover:bg-olive hover:text-white sm:inline-flex"
          >
            WhatsApp
          </a>
        </div>
      </div>
      <main>
        <Hero />
        <Benefits />
        <Products />
        <Testimonials />
        <Contact />
      </main>
      <footer className="bg-softBlack py-10 text-center text-sm text-beige/80">
        <p className="uppercase tracking-[0.25em]">© {new Date().getFullYear()} Rosaline Olavarría. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}
