import Button from '../components/Button'

export default function Contact() {
  return (
    <section id="contacto" className="bg-gradient-to-b from-white via-cream/60 to-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="rounded-3xl border border-rose/20 bg-white/85 p-8 backdrop-blur sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
            <div className="lg:w-2/5">
              <p className="text-sm uppercase tracking-[0.3em] text-rose/80">Contacto</p>
              <h2 className="mt-4 text-2xl text-rose sm:text-3xl">Consultanos lo que necesites</h2>
              <p className="mt-4 text-sm text-terra/80 sm:text-base">
                Coordiná envíos, solicitá precios mayoristas o pedinos asesoramiento sobre nuestros tratamientos profesionales.
              </p>
              <div className="mt-6 space-y-3">
                <Button href="https://wa.me/542284578166" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                  Escribir por WhatsApp
                </Button>
                <p className="text-xs uppercase tracking-[0.25em] text-terra/80 sm:text-sm">
                  Línea directa <a href="tel:+542284578166" className="font-semibold text-rose hover:underline">2284 578166</a>
                </p>
              </div>
            </div>
            <form className="grid flex-1 grid-cols-1 gap-5 lg:grid-cols-2">
              <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.2em] text-rose/70 sm:text-sm">
                Nombre
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre completo"
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

