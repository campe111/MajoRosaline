import { useState } from 'react'

const preferenceOptions = [
  {
    id: 'necessary',
    label: 'Esenciales',
    description: 'Requeridas para el funcionamiento básico del sitio y no pueden desactivarse.',
    required: true,
    defaultChecked: true
  },
  {
    id: 'analytics',
    label: 'Analíticas',
    description: 'Nos ayudan a entender cómo navegás para mejorar tu experiencia.',
    required: false,
    defaultChecked: true
  },
  {
    id: 'marketing',
    label: 'Marketing',
    description: 'Contenido y ofertas personalizadas según tus intereses.',
    required: false,
    defaultChecked: false
  }
]

export function CookieConsentBanner({ onConsent }) {
  const [expanded, setExpanded] = useState(false)
  const [preferences, setPreferences] = useState(() =>
    preferenceOptions.reduce((acc, option) => {
      acc[option.id] = option.defaultChecked
      return acc
    }, {})
  )

  const togglePreference = (id) => {
    setPreferences((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const handleAccept = () => {
    onConsent(true, preferences)
  }

  const handleDecline = () => {
    onConsent(false, {
      ...preferences,
      analytics: false,
      marketing: false
    })
  }

  return (
    <div className="fixed inset-x-0 bottom-4 z-[80] px-4 sm:px-6">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 rounded-3xl border border-rose/30 bg-white/90 px-5 py-4 shadow-lg backdrop-blur">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 space-y-3">
            <p className="text-[11px] uppercase tracking-[0.4em] text-rose/70">Cookies</p>
            <h3 className="text-sm font-semibold text-rose sm:text-base">Mejoramos tu experiencia con tu permiso</h3>
            <p className="text-xs text-terra/70 sm:text-sm">
              Usamos cookies para recordar tus preferencias y entender cómo navegás.{' '}
              <button
                type="button"
                className="font-semibold text-rose underline underline-offset-4 hover:text-terra"
                onClick={() => setExpanded((prev) => !prev)}
              >
                {expanded ? 'Ver menos' : 'Ver más'}
              </button>
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
            <button
              type="button"
              onClick={handleAccept}
              className="rounded-full bg-rose px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow hover:bg-rose/90 sm:text-sm"
            >
              Aceptar todas
            </button>
            <button
              type="button"
              onClick={handleDecline}
              className="rounded-full border border-rose px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-rose transition hover:bg-rose/10 sm:text-sm"
            >
              Rechazar no esenciales
            </button>
          </div>
        </div>
        {expanded && (
          <div className="border-t border-rose/20 bg-cream/60 p-4 sm:px-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {preferenceOptions.map((option) => (
                <label
                  key={option.id}
                  className="flex items-start gap-3 rounded-2xl border border-rose/20 bg-white/80 p-3 shadow-sm transition hover:border-rose/40"
                >
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-rose/40 text-rose focus:ring-rose"
                    checked={preferences[option.id]}
                    onChange={() => togglePreference(option.id)}
                    disabled={option.required}
                  />
                  <div>
                    <p className="text-sm font-semibold text-rose">{option.label}</p>
                    <p className="mt-1 text-xs text-terra/70">{option.description}</p>
                    {option.required && <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-terra/50">Siempre activas</p>}
                  </div>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

