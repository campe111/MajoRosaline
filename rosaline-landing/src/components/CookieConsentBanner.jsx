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
    <div className="fixed inset-x-0 bottom-0 z-[80] px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-3xl border border-rose/40 bg-white/95 shadow-[0_40px_60px_-40px_rgba(47,47,47,0.35)] backdrop-blur">
        <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-start sm:justify-between sm:gap-6 sm:p-8">
          <div className="flex-1 space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-rose/70">Cookies y privacidad</p>
            <h3 className="text-lg font-semibold text-rose sm:text-xl">Tu consentimiento nos ayuda a mejorar</h3>
            <p className="text-sm text-terra/80 sm:text-base">
              Utilizamos cookies propias y de terceros para procesar tus datos de navegación, analizar el rendimiento de nuestra
              landing y ofrecerte servicios personalizados. Podés aceptar todas, ajustarlas a tu preferencia o rechazarlas.
            </p>
            <button
              type="button"
              className="text-sm font-semibold text-rose underline underline-offset-4 transition hover:text-terra"
              onClick={() => setExpanded((prev) => !prev)}
            >
              {expanded ? 'Ocultar configuración' : 'Gestionar preferencias'}
            </button>
          </div>
          <div className="flex flex-col gap-3 sm:w-56">
            <button
              type="button"
              onClick={handleAccept}
              className="w-full rounded-full bg-rose px-4 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow hover:bg-rose/90"
            >
              Aceptar todas
            </button>
            <button
              type="button"
              onClick={handleDecline}
              className="w-full rounded-full border border-rose px-4 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-rose transition hover:bg-rose/10"
            >
              Rechazar no esenciales
            </button>
          </div>
        </div>
        {expanded && (
          <div className="border-t border-rose/20 bg-cream/60 p-6 sm:px-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {preferenceOptions.map((option) => (
                <label
                  key={option.id}
                  className="flex items-start gap-3 rounded-2xl border border-rose/20 bg-white/80 p-4 shadow-sm transition hover:border-rose/40"
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

