import { useEffect, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { CookieConsentBanner } from './components/CookieConsentBanner'
import Hero from './sections/Hero'
import Benefits from './sections/Benefits'
import Products from './sections/Products'
import Contact from './sections/Contact'
import Button from './components/Button'
import logo from './assets/images/logo.jpg'

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

  useEffect(() => {
    const storedConsent = window.localStorage.getItem('rosaline-consent')
    if (storedConsent === 'granted') {
      setHasConsent(true)
    } else {
      setBannerVisible(true)
    }
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
      <div className="sticky top-0 z-50 sm:fixed sm:inset-x-0 sm:top-0">
        <div className="hidden bg-white/95 sm:block">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between border-b border-rose/10 px-6 py-2 text-[11px] uppercase tracking-[0.35em] text-terra/70">
            <span>Rosaline Olavarría</span>
            <span>Consulta profesional: +54 2284 578166</span>
          </div>
        </div>
        <div className="border-b border-rose/20 bg-white/85 backdrop-blur">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-5">
            <a
              href="#inicio"
              onClick={(event) => handleNavigate('#inicio', event)}
              className="flex items-center gap-3 text-base font-semibold uppercase tracking-[0.3em] text-rose transition hover:text-rose/90 sm:text-lg sm:tracking-[0.4em]"
            >
              <img
                src={logo}
                alt="Logo Rosaline Olavarría"
                className="h-10 w-10 rounded-full border border-rose/30 object-cover shadow-sm sm:h-12 sm:w-12"
              />
              <span className="hidden sm:inline">Rosaline Olavarría</span>
            </a>
            <nav className="hidden items-center gap-6 text-xs font-medium uppercase tracking-[0.25em] text-terra/70 sm:flex sm:text-sm">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(event) => handleNavigate(item.href, event)}
                  className="rounded-full px-3 py-2 transition-colors hover:bg-rose/10 hover:text-rose"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="hidden sm:inline-flex">
              <Button href="https://wa.me/542284578166" target="_blank" rel="noreferrer" variant="secondary">
                WhatsApp
              </Button>
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-rose/40 p-2 text-rose transition-colors hover:bg-rose/10 sm:hidden"
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
      </div>
      <main className="pt-2 sm:pt-[11.5rem]">
        <Hero />
        <Benefits />
        <Products />
        <Contact />
      </main>
      <footer className="bg-rose py-10 text-center text-sm text-cream/90">
        <p className="uppercase tracking-[0.25em]">© {new Date().getFullYear()} Rosaline Olavarría. Todos los derechos reservados.</p>
      </footer>
      {bannerVisible && <CookieConsentBanner onConsent={handleConsent} />}
      {hasConsent && <Analytics />}
    </div>
  )
}
