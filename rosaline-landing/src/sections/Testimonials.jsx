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
    <section id="testimonios" className="bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-5xl px-4 text-center sm:px-6">
        <p className="text-sm uppercase tracking-[0.3em] text-rose/80">Testimonios</p>
        <h2 className="mt-4 text-2xl sm:text-4xl">Historias reales, resultados tangibles</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-terra/80 sm:text-base">
          La confianza de nuestras clientas y profesionales respalda cada fórmula y tratamiento Rosaline Olavarría.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.name}
              className="flex h-full flex-col justify-between rounded-3xl bg-cream/70 p-6 text-left shadow-[0_25px_35px_-25px_rgba(251,96,102,0.25)] sm:p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={index}
              variants={listVariants}
            >
              <p className="text-sm leading-relaxed text-terra/90 sm:text-base">“{testimonial.quote}”</p>
              <span className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-rose/70 sm:mt-6 sm:text-sm">
                {testimonial.name}
              </span>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

