import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      'Mi cabello recuperó brillo y suavidad desde la primera aplicación. La textura se siente más fuerte y manejable.',
    name: 'Carolina Méndez'
  },
  {
    quote:
      'Los resultados son profesionales pero con ingredientes conscientes. Mis clientas quedan fascinadas.',
    name: 'Soledad García — Estilista'
  },
  {
    quote:
      'La línea mayorista me permitió ofrecer tratamientos premium y personalizados. Excelente acompañamiento.',
    name: 'Mariana López'
  }
]

const listVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({ opacity: 1, y: 0, transition: { delay: 0.2 + index * 0.15 } })
}

export default function Testimonials() {
  return (
    <section id="testimonios" className="bg-white py-20">
      <div className="mx-auto w-full max-w-5xl px-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-olive/80">Testimonios</p>
        <h2 className="mt-4 text-3xl sm:text-4xl">Historias reales, resultados tangibles</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-softBlack/70">
          La confianza de nuestras clientas y profesionales respalda cada fórmula y tratamiento Rosaline Olavarría.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.name}
              className="flex h-full flex-col justify-between rounded-3xl bg-beige/40 p-8 text-left shadow-[0_25px_35px_-25px_rgba(47,47,47,0.25)]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={index}
              variants={listVariants}
            >
              <p className="text-base leading-relaxed text-softBlack/80">“{testimonial.quote}”</p>
              <span className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-softBlack/60">
                {testimonial.name}
              </span>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

