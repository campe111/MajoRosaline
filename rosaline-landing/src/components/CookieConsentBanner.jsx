export function CookieConsentBanner({ onConsent }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[80] px-3 pb-3 sm:px-6 sm:pb-6">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 rounded-3xl border border-terra/15 bg-white px-5 py-4 shadow-[0_30px_50px_-30px_rgba(47,47,47,0.45)] sm:flex-row sm:items-center sm:gap-6 sm:px-8 sm:py-5">
        <div className="flex items-start gap-4">
          <span className="mt-1 text-3xl sm:text-4xl">🍪</span>
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-terra sm:text-lg">Utilizamos cookies</h3>
            <p className="text-sm text-terra/80 sm:text-base">
              Usamos cookies para mejorar tu experiencia de navegación, ofrecer contenido relevante y analizar el tráfico.{' '}
              <a
                href="/politica-de-cookies"
                className="font-semibold text-rose underline underline-offset-4 hover:text-rose/80"
              >
                Ver política de cookies
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3 sm:ml-auto">
          <button
            type="button"
            onClick={() => onConsent(true)}
            className="rounded-full bg-[#0b7a2a] px-6 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow transition hover:bg-[#0d8f32]"
          >
            Aceptar
          </button>
          <button
            type="button"
            onClick={() => onConsent(false)}
            className="rounded-full border border-terra/40 px-6 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-terra/80 transition hover:bg-terra/10"
          >
            Rechazar
          </button>
        </div>
      </div>
    </div>
  )
}

