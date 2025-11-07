import { motion } from 'framer-motion'

const products = [
  {
    name: 'Caviar Fidelité',
    description: 'Reparación intensiva con extractos marinos para devolver elasticidad y brillo.',
    imageAlt: 'Tratamiento Caviar Fidelité'
  },
  {
    name: 'Keratina Reestructurante',
    description: 'Sellado profesional que alisa, controla el frizz y realinea la fibra capilar.',
    imageAlt: 'Keratina Reestructurante'
  },
  {
    name: 'Elixir Nutritivo',
    description: 'Blend de aceites naturales para proteger puntas y sellar la hidratación diaria.',
    imageAlt: 'Elixir Nutritivo'
  }
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index) => ({ opacity: 1, y: 0, transition: { delay: index * 0.15 } })
}

export default function Products() {
  return (
    <section id="productos" className="bg-cream py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-rose/80">Productos</p>
          <h2 className="mt-4 text-3xl sm:text-4xl">Colección signature</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-terra/80">
            Fórmulas exclusivas desarrolladas para nutrir profundamente y prolongar los resultados de tu visita al salón.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {products.map((product, index) => (
            <motion.article
              key={product.name}
              className="group flex flex-col overflow-hidden rounded-3xl border border-rose/20 bg-white shadow-[0_40px_60px_-40px_rgba(251,96,102,0.35)]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              custom={index}
              variants={cardVariants}
            >
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-rose/40 via-cream to-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,96,102,0.25),transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(255,164,99,0.4),transparent_55%)]" />
                <div className="absolute inset-6 rounded-2xl border border-white/60" aria-hidden />
                <p className="absolute bottom-6 left-6 text-lg font-medium uppercase tracking-[0.3em] text-terra/60">
                  Rosaline
                </p>
              </div>
              <div className="flex flex-1 flex-col gap-4 p-8">
                <h3 className="text-2xl">{product.name}</h3>
                <p className="text-sm leading-relaxed text-terra/80">{product.description}</p>
                <div className="mt-auto flex items-center justify-between text-sm text-rose/70">
                  <span>Uso profesional</span>
                  <span>Línea exclusiva</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

