import Hero from './sections/Hero'
import Benefits from './sections/Benefits'
import Products from './sections/Products'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import logo from './assets/images/logo.jpg'

const navigation = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Productos', href: '#productos' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' }
]

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-cream text-terra">
      <div className="sticky top-0 z-50 border-b border-rose/20 bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a href="#inicio" className="flex items-center gap-3 text-lg font-semibold uppercase tracking-[0.4em] text-rose">
            <img
              src={logo}
              alt="Logo Rosaline Olavarría"
              className="h-12 w-12 rounded-full border border-rose/30 object-cover shadow-sm"
            />
            <span className="hidden sm:inline">Rosaline Olavarría</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium uppercase tracking-[0.25em] text-terra/70 sm:flex">
            {navigation.map((item) => (
              <a key={item.label} href={item.href} className="transition-colors hover:text-rose">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="https://wa.me/5491123456789"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-rose px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-rose transition-colors hover:bg-rose hover:text-white sm:inline-flex"
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
      <footer className="bg-rose py-10 text-center text-sm text-cream/90">
        <p className="uppercase tracking-[0.25em]">© {new Date().getFullYear()} Rosaline Olavarría. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}
