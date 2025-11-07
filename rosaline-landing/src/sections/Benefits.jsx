import { motion } from 'framer-motion'

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
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({ opacity: 1, y: 0, transition: { delay: index * 0.1 } })
}

export default function Benefits() {
  return (
    <section id="beneficios" className="bg-white py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 text-center">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-olive/80">Beneficios</p>
          <h2 className="text-3xl sm:text-4xl">Cuidamos tu cabello con propósito</h2>
          <p className="mx-auto max-w-3xl text-base text-softBlack/70">
            Cada tratamiento Rosaline Olavarría está diseñado para nutrir profundamente, potenciar la luminosidad natural y proteger la fibra capilar.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="rounded-3xl bg-beige/40 p-8 text-left shadow-[0_20px_40px_-20px_rgba(47,47,47,0.2)]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={index}
              variants={itemVariants}
            >
              <div className="text-4xl">{benefit.icon}</div>
              <h3 className="mt-6 text-xl">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-softBlack/70">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

