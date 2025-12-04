import { motion as Motion } from 'framer-motion'

const benefits = [
  {
    title: 'Vegano',
    description: 'Fórmulas libres de crueldad y sin ingredientes de origen animal.',
    icon: '🌿'
  },
  {
    title: 'Profesional',
    description: 'Resultados de salón con el respaldo de nuestra experiencia técnica.',
    icon: '💇‍♀️'
  },
  {
    title: 'Envíos',
    description: 'Logística cuidada para que recibas tus productos en perfectas condiciones.',
    icon: '🚚'
  },
  {
    title: 'Mayorista',
    description: 'Planes especiales para profesionales y distribuidores autorizados.',
    icon: '🤝'
  }
]

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.1,
      duration: 0.6,
      type: 'spring',
      stiffness: 100,
      damping: 10
    }
  })
}

export default function Benefits() {
  return (
    <section id="beneficios" className="bg-white pt-6 pb-12 sm:pt-8 sm:pb-16 md:pt-10 md:pb-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 text-center sm:gap-10 md:gap-12 sm:px-6">
        <div className="space-y-3 sm:space-y-4">
          <h2 className="text-xl sm:text-3xl md:text-4xl">Beneficios</h2>
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-terra/80 sm:text-base">
            Cada tratamiento Rosaline Olavarría está diseñado para nutrir profundamente, potenciar la luminosidad natural y proteger la fibra capilar.
          </p>
        </div>
        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Motion.div
              key={benefit.title}
              className="rounded-3xl bg-cream/70 p-5 text-left shadow-[0_20px_40px_-20px_rgba(246,107,64,0.25)] sm:p-6 md:p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={index}
              variants={itemVariants}
            >
              <div className="text-3xl sm:text-4xl">{benefit.icon}</div>
              <h3 className="mt-5 text-lg text-rose sm:mt-6 sm:text-xl">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-terra/80 sm:text-base">{benefit.description}</p>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

