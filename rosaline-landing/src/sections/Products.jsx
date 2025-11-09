import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import producto1 from '../assets/images/products/producto-1.jpg'
import producto2 from '../assets/images/products/producto-2.jpg'
import producto3 from '../assets/images/products/producto-3.jpg'
import producto4 from '../assets/images/products/producto-4.jpg'
import producto5 from '../assets/images/products/producto-5.jpg'
import producto7 from '../assets/images/products/producto-7.jpg'
import producto8 from '../assets/images/products/producto-8.jpg'
import producto10 from '../assets/images/products/producto-10.jpg'
import producto11 from '../assets/images/products/producto-11.jpg'
import producto12 from '../assets/images/products/producto-12.jpg'
import producto13 from '../assets/images/products/producto-13.jpg'
import producto14 from '../assets/images/products/producto-14.jpg'
import producto15 from '../assets/images/products/producto-15.jpg'
import producto16 from '../assets/images/products/producto-16.jpg'
import producto17 from '../assets/images/products/producto-17.jpg'
import producto18 from '../assets/images/products/producto-18.jpg'
import producto19 from '../assets/images/products/producto-19.jpg'
import producto20 from '../assets/images/products/producto-20.jpg'
import producto21 from '../assets/images/products/producto-21.jpg'
import producto22 from '../assets/images/products/producto-22.jpg'
import producto23 from '../assets/images/products/producto-23.jpg'
import producto24 from '../assets/images/products/producto-24.jpg'
import producto25 from '../assets/images/products/producto-25.jpg'
import producto26 from '../assets/images/products/producto-26.jpg'
import producto27 from '../assets/images/products/producto-27.jpg'
import producto28 from '../assets/images/products/producto-28.jpg'
import producto29 from '../assets/images/products/producto-29.jpg'
import producto30 from '../assets/images/products/producto-30.jpg'
import producto31 from '../assets/images/products/producto-31.jpg'
import producto32 from '../assets/images/products/producto-32.jpg'
import producto33 from '../assets/images/products/producto-33.jpg'
import producto34 from '../assets/images/products/producto-34.jpg'
import producto35 from '../assets/images/products/producto-35.jpg'
import producto36 from '../assets/images/products/producto-36.jpg'
import producto37 from '../assets/images/products/producto-37.jpg'
import logoImg from '../assets/images/logo.jpg'

const products = [
  {
    name: 'Elixir Oro Líquido',
    description: 'Dosis de brillo y nutrición inmediata con aceites ligeros y aroma sofisticado.',
    imageAlt: 'Elixir Oro Líquido',
    images: [oroLiquidoImg, oroLiquidoImg2],
    category: 'Elixires'
  },
  {
    name: 'Caviar Fidelité',
    description: 'Tratamiento de reparación intensa con extractos marinos ricos en proteínas.',
    imageAlt: 'Tratamiento Caviar Fidelité',
    images: [producto1],
    category: 'Caviares'
  },
  {
    name: 'Keratina Reestructurante',
    description: 'Sellado profesional que alisa, controla el frizz y realinea la fibra capilar.',
    imageAlt: 'Keratina Reestructurante',
    images: [producto3],
    category: 'Keratinas'
  },
  {
    name: 'Keratina Liss Control',
    description: 'Versión avanzada para fibra rebelde con control de volumen prolongado.',
    imageAlt: 'Keratina Liss Control',
    images: [producto4],
    category: 'Keratinas'
  },
  {
    name: 'Cepillo Dompell Antifrizz',
    description: 'Desenredado suave en húmedo o seco con cerdas flexibles que protegen la fibra.',
    imageAlt: 'Cepillo Dompell Antifrizz',
    images: [producto5],
    category: 'Cepillos'
  },
  {
    name: 'Cepillo Dompell Pocket',
    description: 'Formato compacto ideal para cartera o bolso, mantiene el acabado disciplinado.',
    imageAlt: 'Cepillo Dompell Pocket',
    images: [producto7],
    category: 'Cepillos'
  },
  {
    name: 'Ampollas Ultra Repair',
    description: 'Concentrado nutritivo para shock de reparación y brillo inmediato en cabellos sensibilizados.',
    imageAlt: 'Ampollas Ultra Repair',
    images: [producto8],
    category: 'Ampollas'
  },
  {
    name: 'Ampollas Ultra Repair Plus',
    description: 'Refuerzo de proteínas y aminoácidos para reconstruir la fibra en minutos.',
    imageAlt: 'Ampollas Ultra Repair Plus',
    images: [producto10],
    category: 'Ampollas'
  },
  {
    name: 'Línea Styling Control',
    description: 'Spray de styling para texturizar y definir terminaciones suaves.',
    imageAlt: 'Producto Styling',
    images: [producto11],
    category: 'Styling'
  },
  {
    name: 'Línea Styling Shine',
    description: 'Spray de brillo instantáneo con filtro protector para cabellos secos.',
    imageAlt: 'Spray de brillo',
    images: [producto12],
    category: 'Styling'
  },
  {
    name: 'Tratamiento Nutritivo Intenso',
    description: 'Máscara nutritiva ideal para cabellos gruesos y sensibilizados.',
    imageAlt: 'Máscara nutritiva',
    images: [producto13],
    category: 'Máscaras'
  },
  {
    name: 'Tratamiento Nutritivo Ligero',
    description: 'Textura ligera que hidrata sin apelmazar cabellos finos.',
    imageAlt: 'Máscara ligera',
    images: [producto14],
    category: 'Máscaras'
  },
  {
    name: 'Blend Anti-frizz',
    description: 'Fórmula antifrizz para cabellos ondulados con tendencia al encrespado.',
    imageAlt: 'Blend anti-frizz',
    images: [producto15],
    category: 'Tratamientos Leave-in'
  },
  {
    name: 'Blend Termoprotector',
    description: 'Protección térmica para styling con planchita o brushing frecuente.',
    imageAlt: 'Termoprotector',
    images: [producto16],
    category: 'Tratamientos Leave-in'
  },
  {
    name: 'Shampoo Reconstrucción',
    description: 'Limpieza delicada con aporte de proteínas para cabellos dañados.',
    imageAlt: 'Shampoo reconstrucción',
    images: [producto17],
    category: 'Shampoos'
  },
  {
    name: 'Acondicionador Reconstrucción',
    description: 'Sellado de cutícula para prolongar la suavidad posterior al shampoo.',
    imageAlt: 'Acondicionador reconstrucción',
    images: [producto18],
    category: 'Acondicionadores'
  },
  {
    name: 'Kit Brillo Diamante',
    description: 'Set completo para iluminar y suavizar cabellos opacos.',
    imageAlt: 'Kit brillo diamante',
    images: [producto19],
    category: 'Sets'
  },
  {
    name: 'Spray Anti Humedad',
    description: 'Escudo ligero que bloquea el encrespado hasta 48 horas.',
    imageAlt: 'Spray anti humedad',
    images: [producto20],
    category: 'Styling'
  },
  {
    name: 'Elixir Reparación Nocturna',
    description: 'Aceite nocturno que repara mientras dormís sin dejar residuos.',
    imageAlt: 'Elixir nocturno',
    images: [producto21],
    category: 'Elixires'
  },
  {
    name: 'Tratamiento Detox',
    description: 'Limpieza profunda para cuero cabelludo graso o con acumulación.',
    imageAlt: 'Tratamiento detox',
    images: [producto22],
    category: 'Tratamientos Intensivos'
  },
  {
    name: 'Ampollas Detox Balance',
    description: 'Ampollas con extractos botánicos para equilibrar el cuero cabelludo.',
    imageAlt: 'Ampolla detox',
    images: [producto23],
    category: 'Ampollas'
  },
  {
    name: 'Serum Sellador de Puntas',
    description: 'Sella puntas abiertas y previene el quiebre en cabellos largos.',
    imageAlt: 'Serum puntas',
    images: [producto24],
    category: 'Tratamientos Leave-in'
  },
  {
    name: 'Crema para Peinar Soft Curl',
    description: 'Define rulos y ondas con finish suave y natural.',
    imageAlt: 'Crema para peinar rulos',
    images: [producto25],
    category: 'Styling'
  },
  {
    name: 'Crema para Peinar Control',
    description: 'Controla volumen y aporta disciplina al cabello grueso.',
    imageAlt: 'Crema control',
    images: [producto26],
    category: 'Styling'
  },
  {
    name: 'Spray Voluminizador',
    description: 'Aporta volumen desde la raíz con textura ligera.',
    imageAlt: 'Spray volumen',
    images: [producto27],
    category: 'Styling'
  },
  {
    name: 'Tratamiento Restaurador Express',
    description: 'Ampolla express para brillo inmediato antes de eventos.',
    imageAlt: 'Tratamiento express',
    images: [producto28],
    category: 'Ampollas'
  },
  {
    name: 'Mascarilla Restauradora Express',
    description: 'Mascarilla de acción rápida para suavidad extrema.',
    imageAlt: 'Mascarilla express',
    images: [producto29],
    category: 'Máscaras'
  },
  {
    name: 'Keratina Home Care',
    description: 'Kit de mantenimiento en casa después de la keratina profesional.',
    imageAlt: 'Kit keratina home care',
    images: [producto30],
    category: 'Keratinas'
  },
  {
    name: 'Tratamiento Reparador Botanical',
    description: 'Fórmula con extractos botánicos para cabello sensibilizado.',
    imageAlt: 'Tratamiento botanical',
    images: [producto31],
    category: 'Tratamientos Intensivos'
  },
  {
    name: 'Shampoo Anti-Quiebre',
    description: 'Refuerza la fibra capilar y reduce el quiebre progresivo.',
    imageAlt: 'Shampoo anti quiebre',
    images: [producto32],
    category: 'Shampoos'
  },
  {
    name: 'Acondicionador Anti-Quiebre',
    description: 'Complemento ideal del shampoo anti-quiebre para sellar la fibra.',
    imageAlt: 'Acondicionador anti quiebre',
    images: [producto33],
    category: 'Acondicionadores'
  },
  {
    name: 'Tratamiento Sellador de Brillo',
    description: 'Finaliza el servicio de color para potenciar el brillo y duración.',
    imageAlt: 'Sellador de brillo',
    images: [producto34],
    category: 'Tratamientos Intensivos'
  },
  {
    name: 'Spray Protector UV',
    description: 'Protege el color y la fibra de la exposición solar intensa.',
    imageAlt: 'Spray protector UV',
    images: [producto35],
    category: 'Styling'
  },
  {
    name: 'Aceite Nutritivo Ligero',
    description: 'Aceite ligero para cabellos finos con acabado sedoso.',
    imageAlt: 'Aceite nutritivo ligero',
    images: [producto36],
    category: 'Elixires'
  },
  {
    name: 'Aceite Nutritivo Intenso',
    description: 'Aceite denso para cabellos gruesos o muy porosos.',
    imageAlt: 'Aceite nutritivo intenso',
    images: [producto37],
    category: 'Elixires'
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
          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-rose/70 sm:text-sm">
            {product.category}
          </p>
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
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = products.filter((product) => {
    const term = searchTerm.trim().toLowerCase()
    if (!term) return true
    const haystack = [product.name, product.description, product.category].join(' ').toLowerCase()
    return haystack.includes(term)
  })

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
            Filtrá por nombre, categoría o beneficio para encontrar el tratamiento ideal.
          </p>
        </div>
        <div className="mx-auto mt-8 flex w-full max-w-xl items-center gap-3 rounded-full border border-rose/30 bg-white/70 px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-rose/40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-5 w-5 text-rose/70"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35m0 0a7.5 7.5 0 1 0-10.607-10.607 7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Buscar producto, categoría o beneficio..."
            className="w-full bg-transparent text-sm text-terra placeholder:text-terra/50 focus:outline-none sm:text-base"
          />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <ProductCard key={product.name} product={product} index={index} onImageClick={handleImageClick} />
            ))
          ) : (
            <div className="col-span-full rounded-3xl border border-rose/20 bg-white/70 px-6 py-12 text-center text-sm text-terra/70 sm:text-base">
              No encontramos coincidencias para “{searchTerm}”. Probá con otro término o categoría.
            </div>
          )}
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

