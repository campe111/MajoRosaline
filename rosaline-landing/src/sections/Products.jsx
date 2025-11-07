import { useState } from 'react'
import { motion } from 'framer-motion'
import caviarImg from '../assets/images/products/caviar.jpg'
import caviarImg2 from '../assets/images/products/caviar2.jpg'
import keratinaImg from '../assets/images/products/keratina.jpg'
import keratinaImg2 from '../assets/images/products/keratina2.jpg'
import elixirImg from '../assets/images/products/oro-liquido.jpg'
import logoImg from '../assets/images/logo.jpg'

const products = [
  {
    name: 'Caviar Fidelité',
    description: 'Reparación intensiva con extractos marinos para devolver elasticidad y brillo.',
    imageAlt: 'Tratamiento Caviar Fidelité',
    images: [caviarImg, caviarImg2]
  },
  {
    name: 'Keratina Reestructurante',
    description: 'Sellado profesional que alisa, controla el frizz y realinea la fibra capilar.',
    imageAlt: 'Keratina Reestructurante',
    images: [keratinaImg, keratinaImg2]
  },
  {
    name: 'Elixir Nutritivo',
    description: 'Blend de aceites naturales para proteger puntas y sellar la hidratación diaria.',
    imageAlt: 'Elixir Nutritivo',
    images: [elixirImg]
  }
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index) => ({ opacity: 1, y: 0, transition: { delay: index * 0.15 } })
}

function ProductCard({ product, index }) {
  const [activeImage, setActiveImage] = useState(0)

  const currentImage = product.images?.[activeImage] ?? logoImg

  return (
    <motion.article
      className="group flex flex-col overflow-hidden rounded-3xl border border-rose/20 bg-white shadow-[0_40px_60px_-40px_rgba(251,96,102,0.35)]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      custom={index}
      variants={cardVariants}
    >
      <motion.figure
        className="relative h-60 overflow-hidden bg-gradient-to-br from-rose/40 via-cream to-white sm:h-56"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 1.08 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        <img
          src={currentImage}
          alt={product.imageAlt}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-terra/15 via-transparent to-transparent" />
      </motion.figure>
      <div className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
        <div>
          <h3 className="text-xl sm:text-2xl">{product.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-terra/80 sm:text-base">{product.description}</p>
        </div>
        {product.images && product.images.length > 1 && (
          <div className="flex gap-3">
            {product.images.map((image, imageIndex) => (
              <button
                key={`${product.name}-${imageIndex}`}
                type="button"
                className={`h-14 w-14 overflow-hidden rounded-2xl border transition focus:outline-none focus-visible:ring-2 focus-visible:ring-rose/50 sm:h-16 sm:w-16 ${
                  imageIndex === activeImage
                    ? 'border-rose ring-rose/40'
                    : 'border-rose/20 hover:border-rose/60'
                }`}
                onClick={() => setActiveImage(imageIndex)}
              >
                <img src={image} alt={`${product.name} ${imageIndex + 1}`} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        )}
        <div className="mt-auto flex items-center justify-between text-sm text-rose/70">
          <span>Uso profesional</span>
          <span>Línea exclusiva</span>
        </div>
      </div>
    </motion.article>
  )
}

export default function Products() {
  return (
    <section id="productos" className="bg-cream py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-rose/80">Productos</p>
          <h2 className="mt-4 text-2xl sm:text-4xl">Colección signature</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-terra/80 sm:text-base">
            Fórmulas exclusivas desarrolladas para nutrir profundamente y prolongar los resultados de tu visita al salón.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

