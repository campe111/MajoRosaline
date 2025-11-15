import { useEffect, useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react'
import { CookieConsentBanner } from './components/CookieConsentBanner'
import Hero from './sections/Hero'
import Benefits from './sections/Benefits'
import Products from './sections/Products'
import Contact from './sections/Contact'
import Button from './components/Button'

const navigation = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Productos', href: '#productos' },
  { label: 'Contacto', href: '#contacto' }
]

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hasConsent, setHasConsent] = useState(false)
  const [bannerVisible, setBannerVisible] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const storedConsent = window.localStorage.getItem('rosaline-consent')
    if (storedConsent === 'granted') {
      setHasConsent(true)
    } else {
      setBannerVisible(true)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      
      // Calcular progreso de scroll
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100
      setScrollProgress(Math.min(100, Math.max(0, progress)))
      
      // Detectar sección activa
      const sections = ['inicio', 'beneficios', 'productos', 'contacto']
      const scrollPosition = window.scrollY + 150
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Llamar una vez al montar
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleConsent = (value) => {
    setHasConsent(value)
    window.localStorage.setItem('rosaline-consent', value ? 'granted' : 'denied')
    setBannerVisible(false)
  }

  const scrollToSection = (hash) => {
    if (typeof window === 'undefined' || !hash?.startsWith('#')) return
    const element = document.querySelector(hash)
    if (!element) return

    const offset = window.innerWidth >= 1024 ? 136 : window.innerWidth >= 640 ? 108 : 92
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const targetPosition = Math.max(elementPosition - offset, 0)

    window.scrollTo({ top: targetPosition, behavior: 'smooth' })

    if (window.history?.replaceState) {
      window.history.replaceState(null, '', hash)
    }
  }

  const handleNavigate = (hash, event) => {
    if (event) {
      event.preventDefault()
    }
    setMobileOpen(false)
    requestAnimationFrame(() => scrollToSection(hash))
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-cream text-terra">
      {/* Indicador de progreso de scroll */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-rose/10">
        <Motion.div
          className="h-full bg-gradient-to-r from-rose via-rose/90 to-rose"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
      <Motion.div
        className="sticky top-0 z-50 sm:fixed sm:inset-x-0 sm:top-0"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className={`border-b border-rose/20 bg-white/85 backdrop-blur transition-shadow duration-300 ${
          scrolled ? 'shadow-lg shadow-rose/10' : ''
        }`}>
          <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-2.5 sm:px-6 sm:py-4 lg:py-5">
            <a
              href="#inicio"
              onClick={(event) => handleNavigate('#inicio', event)}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-2 text-lg font-cinzel font-semibold uppercase tracking-[0.25em] text-rose transition hover:text-rose/90 whitespace-nowrap sm:relative sm:left-0 sm:top-0 sm:ml-4 sm:mr-6 sm:translate-x-0 sm:translate-y-0 sm:justify-start sm:gap-3 sm:text-xl sm:tracking-[0.3em] lg:ml-6 lg:mr-8 lg:text-2xl lg:tracking-[0.4em]"
            >
              {/* <img
                src={logo}
                alt="Logo Rosaline Olavarría"
                className="h-10 w-10 rounded-full border border-rose/30 object-cover shadow-sm sm:h-12 sm:w-12"
              /> */}
              <span className="inline sm:inline">Rosaline Olavarría</span>
            </a>
            <nav className="hidden items-center gap-4 text-xs font-medium uppercase tracking-[0.25em] text-terra/70 sm:flex sm:gap-6 sm:text-sm">
              {navigation.map((item) => {
                const sectionId = item.href.replace('#', '')
                const isActive = activeSection === sectionId
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(event) => handleNavigate(item.href, event)}
                    className={`rounded-full px-3 py-2 transition-all duration-200 ${
                      isActive
                        ? 'bg-rose/15 text-rose font-semibold'
                        : 'text-terra/70 hover:bg-rose/10 hover:text-rose'
                    }`}
                  >
                    {item.label}
                  </a>
                )
              })}
            </nav>
            <div className="hidden sm:inline-flex">
              <Button href="https://wa.me/542284578166" target="_blank" rel="noreferrer" variant="secondary">
                WhatsApp
              </Button>
            </div>
            <button
              type="button"
              className="relative z-10 inline-flex items-center justify-center rounded-full border border-rose/40 p-2 text-rose transition-colors hover:bg-rose/10 sm:hidden"
              aria-label="Abrir menú"
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              <span className="sr-only">Toggle menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                {mobileOpen ? (
                  <path
                    fillRule="evenodd"
                    d="M16.24 7.76a.75.75 0 0 1 0 1.06L13.06 12l3.18 3.18a.75.75 0 1 1-1.06 1.06L12 13.06l-3.18 3.18a.75.75 0 0 1-1.06-1.06L10.94 12 7.76 8.82a.75.75 0 1 1 1.06-1.06L12 10.94l3.18-3.18a.75.75 0 0 1 1.06 0Z"
                    clipRule="evenodd"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 6.75A.75.75 0 0 1 4.75 6h14.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 6.75Zm0 5.25c0-.414.336-.75.75-.75h14.5a.75.75 0 0 1 0 1.5H4.75a.75.75 0 0 1-.75-.75ZM4.75 16.5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H4.75Z"
                    clipRule="evenodd"
                  />
                )}
              </svg>
            </button>
          </div>
          {mobileOpen && (
            <div className="sm:hidden">
              <div className="border-t border-rose/20 bg-white/95 px-4 pb-6 pt-4 shadow-lg">
                <nav className="flex flex-col gap-4 text-sm font-medium uppercase tracking-[0.2em] text-terra">
                  {navigation.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(event) => handleNavigate(item.href, event)}
                      className="rounded-full px-2 py-1 transition-colors hover:text-rose"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-5">
                  <Button href="https://wa.me/542284578166" target="_blank" rel="noreferrer" className="w-full" variant="primary">
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </Motion.div>
      <main className="pt-16 sm:pt-24 lg:pt-[11.5rem]">
        <Hero />
        <Benefits />
        <Products />
        <Contact />
      </main>
      <footer className="bg-rose py-12 text-cream/90 sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 lg:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-semibold uppercase tracking-[0.2em] text-cream mb-4">Rosaline Olavarría</h3>
              <p className="text-sm text-cream/80 leading-relaxed">
                Cosmética capilar vegana y profesional. Cuidamos tu cabello con propósito.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-cream mb-4">Navegación</h4>
              <nav className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(event) => handleNavigate(item.href, event)}
                    className="text-sm text-cream/80 hover:text-cream transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-cream mb-4">Contacto</h4>
              <div className="flex flex-col gap-3 text-sm">
                <a
                  href="tel:+542284578166"
                  className="text-cream/80 hover:text-cream transition-colors"
                >
                  +54 2284 578166
                </a>
                <a
                  href="https://wa.me/542284578166"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cream/80 hover:text-cream transition-colors inline-flex items-center gap-2"
                >
                  WhatsApp
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.74.44 3.37 1.23 4.8L2 22l5.2-1.23C8.63 21.56 10.26 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.38 0-2.68-.35-3.81-.96l-.27-.15-2.92.69.69-2.92-.15-.27C5.35 14.68 5 13.38 5 12c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-cream mb-4">Redes Sociales</h4>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/rosalineolavarria"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-cream/80 hover:text-cream transition-colors group"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 group-hover:scale-110 transition-transform">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.facebook.com/rosalineolavarria"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-cream/80 hover:text-cream transition-colors group"
                    aria-label="Facebook"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 group-hover:scale-110 transition-transform">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </a>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-cream/20">
                <p className="text-xs text-cream/70 leading-relaxed">
                  Productos profesionales para salones y mayoristas. Envíos a todo el país.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 pt-8 border-t border-cream/20 text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-cream/70">
              © {new Date().getFullYear()} Rosaline Olavarría. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
      
      {/* Botón circular flotante para volver arriba */}
      {scrolled && (
        <Motion.button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            if (window.history?.replaceState) {
              window.history.replaceState(null, '', '#inicio')
            }
          }}
          className="fixed right-6 bottom-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-white/80 backdrop-blur-md border-2 border-rose/40 text-rose shadow-xl shadow-rose/25 transition-all hover:bg-white hover:border-rose/60 hover:shadow-2xl hover:shadow-rose/35 focus:outline-none focus:ring-2 focus:ring-rose/50 sm:right-8 sm:bottom-8 sm:h-14 sm:w-14"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          aria-label="Volver al inicio"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 sm:h-7 sm:w-7">
            <path d="m18 15-6-6-6 6" />
          </svg>
        </Motion.button>
      )}
      {bannerVisible && <CookieConsentBanner onConsent={handleConsent} />}
      {hasConsent && <Analytics />}
    </div>
  )
}

