import Button from '../components/Button'

export default function Contact() {
  return (
    <section id="contacto" className="bg-gradient-to-b from-white via-beige/60 to-white py-20">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="rounded-3xl border border-olive/10 bg-white/80 p-10 backdrop-blur">
          <div className="flex flex-col gap-10 lg:flex-row">
            <div className="lg:w-2/5">
              <p className="text-sm uppercase tracking-[0.3em] text-olive/80">Contacto</p>
              <h2 className="mt-4 text-3xl">Agendá tu diagnóstico personalizado</h2>
              <p className="mt-4 text-base text-softBlack/70">
                Escribinos para coordinar envíos, conocer nuestros planes mayoristas o recibir una asesoría según tu tipo de cabello.
              </p>
              <div className="mt-6">
                <Button href="https://wa.me/5491123456789" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                  Escribir por WhatsApp
                </Button>
              </div>
            </div>
            <form className="grid flex-1 grid-cols-1 gap-6 lg:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm uppercase tracking-[0.2em] text-softBlack/60">
                Nombre
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre completo"
                  className="rounded-full border border-warmGray/60 bg-white/70 px-5 py-3 text-base font-normal text-softBlack focus:border-olive focus:outline-none focus:ring-2 focus:ring-olive/30"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm uppercase tracking-[0.2em] text-softBlack/60">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="nombre@email.com"
                  className="rounded-full border border-warmGray/60 bg-white/70 px-5 py-3 text-base font-normal text-softBlack focus:border-olive focus:outline-none focus:ring-2 focus:ring-olive/30"
                />
              </label>
              <label className="lg:col-span-2 flex flex-col gap-2 text-sm uppercase tracking-[0.2em] text-softBlack/60">
                Consulta
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Contanos qué necesitás y nos pondremos en contacto."
                  className="rounded-3xl border border-warmGray/60 bg-white/70 px-5 py-4 text-base font-normal text-softBlack focus:border-olive focus:outline-none focus:ring-2 focus:ring-olive/30"
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

