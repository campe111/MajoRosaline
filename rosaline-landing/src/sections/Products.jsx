import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import caviarImg from '../assets/images/products/caviar.jpg'
import caviarImg2 from '../assets/images/products/caviar2.jpg'
import keratinaImg from '../assets/images/products/keratina.jpg'
import keratinaImg2 from '../assets/images/products/keratina2.jpg'
import elixirImg from '../assets/images/products/oro-liquido.jpg'
import cepilloImg from '../assets/images/products/cepillo.jpg'
import cepilloImg2 from '../assets/images/products/cepillo2.jpg'
import ampollaImg from '../assets/images/products/ampolla.jpg'
import ampollaImg2 from '../assets/images/products/ampolla2.jpg'
import logoImg from '../assets/images/logo.jpg'

const products = [
  {
    name: 'Elixir Oro Líquido',
    description: 'Dosis de brillo y nutrición inmediata con aceites ligeros y aroma sofisticado.',
    imageAlt: 'Elixir Oro Líquido',
    images: [elixirImg]
  },
  {
    name: 'Caviar Fidelité',
    description: 'Tratamiento de reparación intensa con extractos marinos ricos en proteínas.',
    imageAlt: 'Tratamiento Caviar Fidelité',
    images: [caviarImg]
  },
  {
    name: 'Caviar Fidelité Supreme',
    description: 'Fórmula reforzada para cabellos exigentes que necesitan nutrición profunda.',
    imageAlt: 'Caviar Fidelité Supreme',
    images: [caviarImg2]
  },
  {
    name: 'Keratina Reestructurante',
    description: 'Sellado profesional que alisa, controla el frizz y realinea la fibra capilar.',
    imageAlt: 'Keratina Reestructurante',
    images: [keratinaImg]
  },
  {
    name: 'Keratina Liss Control',
    description: 'Versión avanzada para fibra rebelde con control de volumen prolongado.',
    imageAlt: 'Keratina Liss Control',
    images: [keratinaImg2]
  },
  {
    name: 'Cepillo Dompell Antifrizz',
    description: 'Desenredado suave en húmedo o seco con cerdas flexibles que protegen la fibra.',
    imageAlt: 'Cepillo Dompell Antifrizz',
    images: [cepilloImg]
  },
  {
    name: 'Cepillo Dompell Pocket',
    description: 'Formato compacto ideal para cartera o bolso, mantiene el acabado disciplinado.',
    imageAlt: 'Cepillo Dompell Pocket',
    images: [cepilloImg2]
  },
  {
    name: 'Ampollas Ultra Repair',
    description: 'Concentrado nutritivo para shock de reparación y brillo inmediato en cabellos sensibilizados.',
    imageAlt: 'Ampollas Ultra Repair',
    images: [ampollaImg]
  },
  {
    name: 'Ampollas Ultra Repair Plus',
    description: 'Refuerzo de proteínas y aminoácidos para reconstruir la fibra en minutos.',
    imageAlt: 'Ampollas Ultra Repair Plus',
    images: [ampollaImg2]
  }
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index) => ({ opacity: 1, y: 0, transition: { delay: index * 0.15 } })
}

function ProductCard({ product, index, onImageClick }) {
  const [activeImage, setActiveImage] = useState(0)

  const currentImage = product.images?.[activeImage] ?? logoImg

  const handleModalOpen = () => {
    onImageClick(currentImage, product)
  }

  return (
    <motion.article
      className="group flex flex-col overflow-hidden rounded-3xl border border-rose/20 bg-white shadow-[0_40px_60px_-40px_rgba(251,96,102,0.35)]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      custom={index}
      variants={cardVariants}
    >
      <motion.button
        type="button"
        className="relative h-60 w-full overflow-hidden bg-gradient-to-br from-rose/40 via-cream to-white sm:h-56"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 1.08 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        onClick={handleModalOpen}
      >
        <img
          src={currentImage}
          alt={product.imageAlt}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-terra/15 via-transparent to-transparent" />
        <span className="sr-only">Ver {product.name}</span>
      </motion.button>
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
  const [modalData, setModalData] = useState(null)

  useEffect(() => {
    if (modalData) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [modalData])

  const handleImageClick = (image, product) => {
    setModalData({
      image,
      title: product.name,
      description: product.description,
      alt: product.imageAlt
    })
  }

  const handleCloseModal = () => setModalData(null)

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
            <ProductCard key={product.name} product={product} index={index} onImageClick={handleImageClick} />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {modalData && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-softBlack/75 px-4 py-10 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-[0_40px_80px_-40px_rgba(0,0,0,0.45)]"
              initial={{ scale: 0.92, opacity: 0.6 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 180, damping: 20 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-rose shadow hover:bg-white"
                onClick={handleCloseModal}
                aria-label="Cerrar galería"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <img src={modalData.image} alt={modalData.alt} className="max-h-[75vh] w-full object-cover" />
              <div className="space-y-2 bg-white/90 px-6 py-5">
                <h3 className="text-lg font-semibold text-rose sm:text-xl">{modalData.title}</h3>
                <p className="text-sm text-terra/80 sm:text-base">{modalData.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

