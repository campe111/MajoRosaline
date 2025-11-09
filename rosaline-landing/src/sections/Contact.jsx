import Button from '../components/Button'

export default function Contact() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-gradient-to-b from-white via-cream/60 to-white py-16 sm:py-[5.5rem]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(255,239,193,0.35),_transparent_60%)]" />
        <div className="absolute left-1/2 top-12 h-72 w-72 -translate-x-1/2 rounded-full bg-rose/10 blur-3xl sm:left-[10%] sm:top-1/3" />
        <div className="absolute right-[-15%] bottom-[-20%] h-80 w-80 rounded-full bg-rose/5 blur-3xl sm:right-0" />
      </div>
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="rounded-[34px] border border-rose/15 bg-white/70 px-5 py-8 shadow-[0_50px_80px_-60px_rgba(47,47,47,0.6)] backdrop-blur sm:px-10 sm:py-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            <div className="space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full border border-rose/20 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-rose/80">
                Contacto
              </p>
              <h2 className="text-2xl text-rose sm:text-[2.1rem] sm:leading-tight">Consultanos lo que necesites</h2>
              <p className="text-sm text-terra/80 sm:text-base">
                Coordiná envíos, solicitá precios mayoristas o pedinos asesoramiento sobre nuestros productos profesionales. Estamos
                para acompañarte en cada etapa de tu cuidado capilar.
              </p>
              <div className="space-y-4 rounded-3xl border border-rose/15 bg-white/70 p-5">
                <div>
                  <span className="text-xs uppercase tracking-[0.32em] text-rose/60">Línea directa</span>
                  <p className="mt-2 text-lg font-semibold text-rose">
                    <a href="tel:+542284578166" className="hover:underline">
                      +54 2284 578166
                    </a>
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-terra/60">
                  <span className="rounded-full border border-rose/20 px-3 py-1">Mayoristas</span>
                  <span className="rounded-full border border-rose/20 px-3 py-1">Asesoría personalizada</span>
                </div>
                <Button href="https://wa.me/542284578166" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                  Escribir por WhatsApp
                </Button>
              </div>
            </div>
            <form className="grid grid-cols-1 gap-5 rounded-[28px] border border-rose/15 bg-white/75 p-5 shadow-inner sm:p-7 lg:grid-cols-2">
              <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.2em] text-rose/70 sm:text-sm">
                Nombre
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  className="rounded-full border border-rose/30 bg-white/70 px-5 py-3 text-base font-normal text-terra focus:border-rose focus:outline-none focus:ring-2 focus:ring-rose/30"
                />
              </label>
              <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.2em] text-rose/70 sm:text-sm">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="nombre@email.com"
                  className="rounded-full border border-rose/30 bg-white/70 px-5 py-3 text-base font-normal text-terra focus:border-rose focus:outline-none focus:ring-2 focus:ring-rose/30"
                />
              </label>
              <label className="lg:col-span-2 flex flex-col gap-2 text-xs uppercase tracking-[0.2em] text-rose/70 sm:text-sm">
                Consulta
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Contanos qué necesitás y nos pondremos en contacto."
                  className="rounded-3xl border border-rose/30 bg-white/70 px-5 py-4 text-base font-normal text-terra focus:border-rose focus:outline-none focus:ring-2 focus:ring-rose/30"
                />
              </label>
              <div className="lg:col-span-2">
                <Button type="submit" className="w-full lg:w-auto">
                  Enviar mensaje
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

