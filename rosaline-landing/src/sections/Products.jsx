import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logoImg from '../assets/images/logo.jpg'

const Motion = motion

const productImageModules = import.meta.glob('../assets/images/products/*.{jpg,jpeg,png}', {
  import: 'default',
  eager: true
})

const productThumbnailModules = import.meta.glob('../assets/images/products/*.{jpg,jpeg,png}', {
  import: 'default',
  eager: true
})

const buildAssetGetter = (collection) => (fileName) => {
  if (!fileName) return null
  const baseKey = `../assets/images/products/${fileName}`
  if (collection[baseKey]) return collection[baseKey]

  const matchedEntry = Object.entries(collection).find(([path]) => path.includes(fileName))
  if (matchedEntry) return matchedEntry[1]

  try {
    return new URL(`../assets/images/products/${fileName}`, import.meta.url).href
  } catch {
    return null
  }
}

const getProductImage = buildAssetGetter(productImageModules)
const getProductThumbnail = buildAssetGetter(productThumbnailModules)

const productFile = (number) => `producto-${number}.jpg`

const products = [
  {
    name: 'Elixir Oro Líquido',
    description: 'Dosis de brillo y nutrición inmediata con aceites ligeros y aroma sofisticado.',
    imageAlt: 'Elixir Oro Líquido',
    images: [productFile(1), productFile(2)],
    category: 'Elixires'
  },
  {
    name: 'Caviar Fidelité',
    description: 'Tratamiento de reparación intensa con extractos marinos ricos en proteínas.',
    imageAlt: 'Tratamiento Caviar Fidelité',
    images: [productFile(3), productFile(4)],
    category: 'Caviares'
  },
  {
    name: 'Keratina Reestructurante',
    description: 'Sellado profesional que alisa, controla el frizz y realinea la fibra capilar.',
    imageAlt: 'Keratina Reestructurante',
    images: [productFile(5)],
    category: 'Keratinas'
  },
  {
    name: 'Keratina Liss Control',
    description: 'Versión avanzada para fibra rebelde con control de volumen prolongado.',
    imageAlt: 'Keratina Liss Control',
    images: [productFile(6)],
    category: 'Keratinas'
  },
  {
    name: 'Cepillo Dompell Antifrizz',
    description: 'Desenredado suave en húmedo o seco con cerdas flexibles que protegen la fibra.',
    imageAlt: 'Cepillo Dompell Antifrizz',
    images: [productFile(7)],
    category: 'Cepillos'
  },
  {
    name: 'Cepillo Dompell Pocket',
    description: 'Formato compacto ideal para cartera o bolso, mantiene el acabado disciplinado.',
    imageAlt: 'Cepillo Dompell Pocket',
    images: [productFile(8)],
    category: 'Cepillos'
  },
  {
    name: 'Ampollas Ultra Repair',
    description: 'Concentrado nutritivo para shock de reparación y brillo inmediato en cabellos sensibilizados.',
    imageAlt: 'Ampollas Ultra Repair',
    images: [productFile(9)],
    category: 'Ampollas'
  },
  {
    name: 'Ampollas Ultra Repair Plus',
    description: 'Refuerzo de proteínas y aminoácidos para reconstruir la fibra en minutos.',
    imageAlt: 'Ampollas Ultra Repair Plus',
    images: [productFile(10)],
    category: 'Ampollas'
  },
  {
    name: 'Línea Styling Control',
    description: 'Spray de styling para texturizar y definir terminaciones suaves.',
    imageAlt: 'Producto Styling',
    images: [productFile(11)],
    category: 'Styling'
  },
  {
    name: 'Línea Styling Shine',
    description: 'Spray de brillo instantáneo con filtro protector para cabellos secos.',
    imageAlt: 'Spray de brillo',
    images: [productFile(12)],
    category: 'Styling'
  },
  {
    name: 'Tratamiento Nutritivo Intenso',
    description: 'Máscara nutritiva ideal para cabellos gruesos y sensibilizados.',
    imageAlt: 'Máscara nutritiva',
    images: [productFile(13)],
    category: 'Máscaras'
  },
  {
    name: 'Tratamiento Nutritivo Ligero',
    description: 'Textura ligera que hidrata sin apelmazar cabellos finos.',
    imageAlt: 'Máscara ligera',
    images: [productFile(14)],
    category: 'Máscaras'
  },
  {
    name: 'Blend Anti-frizz',
    description: 'Fórmula antifrizz para cabellos ondulados con tendencia al encrespado.',
    imageAlt: 'Blend anti-frizz',
    images: [productFile(15)],
    category: 'Tratamientos Leave-in'
  },
  {
    name: 'Blend Termoprotector',
    description: 'Protección térmica para styling con planchita o brushing frecuente.',
    imageAlt: 'Termoprotector',
    images: [productFile(16)],
    category: 'Tratamientos Leave-in'
  },
  {
    name: 'Shampoo Reconstrucción',
    description: 'Limpieza delicada con aporte de proteínas para cabellos dañados.',
    imageAlt: 'Shampoo reconstrucción',
    images: [productFile(17)],
    category: 'Shampoos'
  },
  {
    name: 'Acondicionador Reconstrucción',
    description: 'Sellado de cutícula para prolongar la suavidad posterior al shampoo.',
    imageAlt: 'Acondicionador reconstrucción',
    images: [productFile(18)],
    category: 'Acondicionadores'
  },
  {
    name: 'Kit Brillo Diamante',
    description: 'Set completo para iluminar y suavizar cabellos opacos.',
    imageAlt: 'Kit brillo diamante',
    images: [productFile(19)],
    category: 'Sets'
  },
  {
    name: 'Spray Anti Humedad',
    description: 'Escudo ligero que bloquea el encrespado hasta 48 horas.',
    imageAlt: 'Spray anti humedad',
    images: [productFile(20)],
    category: 'Styling'
  },
  {
    name: 'Elixir Reparación Nocturna',
    description: 'Aceite nocturno que repara mientras dormís sin dejar residuos.',
    imageAlt: 'Elixir nocturno',
    images: [productFile(21)],
    category: 'Elixires'
  },
  {
    name: 'Tratamiento Detox',
    description: 'Limpieza profunda para cuero cabelludo graso o con acumulación.',
    imageAlt: 'Tratamiento detox',
    images: [productFile(22)],
    category: 'Tratamientos Intensivos'
  },
  {
    name: 'Ampollas Detox Balance',
    description: 'Ampollas con extractos botánicos para equilibrar el cuero cabelludo.',
    imageAlt: 'Ampolla detox',
    images: [productFile(23)],
    category: 'Ampollas'
  },
  {
    name: 'Serum Sellador de Puntas',
    description: 'Sella puntas abiertas y previene el quiebre en cabellos largos.',
    imageAlt: 'Serum puntas',
    images: [productFile(24)],
    category: 'Tratamientos Leave-in'
  },
  {
    name: 'Crema para Peinar Soft Curl',
    description: 'Define rulos y ondas con finish suave y natural.',
    imageAlt: 'Crema para peinar rulos',
    images: [productFile(25)],
    category: 'Styling'
  },
  {
    name: 'Crema para Peinar Control',
    description: 'Controla volumen y aporta disciplina al cabello grueso.',
    imageAlt: 'Crema control',
    images: [productFile(26)],
    category: 'Styling'
  },
  {
    name: 'Spray Voluminizador',
    description: 'Aporta volumen desde la raíz con textura ligera.',
    imageAlt: 'Spray volumen',
    images: [productFile(27)],
    category: 'Styling'
  },
  {
    name: 'Tratamiento Restaurador Express',
    description: 'Ampolla express para brillo inmediato antes de eventos.',
    imageAlt: 'Tratamiento express',
    images: [productFile(28)],
    category: 'Ampollas'
  },
  {
    name: 'Mascarilla Restauradora Express',
    description: 'Mascarilla de acción rápida para suavidad extrema.',
    imageAlt: 'Mascarilla express',
    images: [productFile(29)],
    category: 'Máscaras'
  },
  {
    name: 'Keratina Home Care',
    description: 'Kit de mantenimiento en casa después de la keratina profesional.',
    imageAlt: 'Kit keratina home care',
    images: [productFile(30)],
    category: 'Keratinas'
  },
  {
    name: 'Tratamiento Reparador Botanical',
    description: 'Fórmula con extractos botánicos para cabello sensibilizado.',
    imageAlt: 'Tratamiento botanical',
    images: [productFile(31)],
    category: 'Tratamientos Intensivos'
  },
  {
    name: 'Shampoo Anti-Quiebre',
    description: 'Refuerza la fibra capilar y reduce el quiebre progresivo.',
    imageAlt: 'Shampoo anti quiebre',
    images: [productFile(32)],
    category: 'Shampoos'
  },
  {
    name: 'Acondicionador Anti-Quiebre',
    description: 'Complemento ideal del shampoo anti-quiebre para sellar la fibra.',
    imageAlt: 'Acondicionador anti quiebre',
    images: [productFile(33)],
    category: 'Acondicionadores'
  },
  {
    name: 'Tratamiento Sellador de Brillo',
    description: 'Finaliza el servicio de color para potenciar el brillo y duración.',
    imageAlt: 'Sellador de brillo',
    images: [productFile(34)],
    category: 'Tratamientos Intensivos'
  },
  {
    name: 'Spray Protector UV',
    description: 'Protege el color y la fibra de la exposición solar intensa.',
    imageAlt: 'Spray protector UV',
    images: [productFile(35)],
    category: 'Styling'
  },
  {
    name: 'Aceite Nutritivo Ligero',
    description: 'Aceite ligero para cabellos finos con acabado sedoso.',
    imageAlt: 'Aceite nutritivo ligero',
    images: [productFile(36)],
    category: 'Elixires'
  },
  {
    name: 'Aceite Nutritivo Intenso',
    description: 'Aceite denso para cabellos gruesos o muy porosos.',
    imageAlt: 'Aceite nutritivo intenso',
    images: [productFile(37)],
    category: 'Elixires'
  }
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index) => ({ opacity: 1, y: 0, transition: { delay: index * 0.15 } })
}

function ResponsivePicture({ data, alt, pictureClassName, imgClassName, loading = 'lazy', fallbackSrc = logoImg }) {
  if (!data || typeof data === 'string') {
    return (
      <img
        src={typeof data === 'string' ? data : fallbackSrc}
        alt={alt}
        loading={loading}
        decoding="async"
        className={imgClassName ?? pictureClassName}
      />
    )
  }

  const { img, sources } = data ?? {}
  if (!img?.src) {
    return (
      <img
        src={fallbackSrc}
        alt={alt}
        loading={loading}
        decoding="async"
        className={imgClassName ?? pictureClassName}
      />
    )
  }

  return (
    <picture className={pictureClassName}>
      {sources?.map((source, sourceIndex) => (
        <source key={`${source.type}-${sourceIndex}`} {...source} />
      ))}
      <img
        src={img.src}
        srcSet={img.srcset}
        sizes={img.sizes}
        width={img.width}
        height={img.height}
        alt={alt}
        loading={loading}
        decoding="async"
        className={imgClassName ?? pictureClassName}
      />
    </picture>
  )
}

function ProductCard({ product, index, onImageClick, getImageData, getThumbnailData }) {
  const [activeImage, setActiveImage] = useState(0)

  const currentImageName = product.images?.[activeImage]
  const currentImageData = currentImageName ? getImageData(currentImageName) : null

  const handleModalOpen = () => {
    onImageClick(currentImageName ?? null, product)
  }

  return (
    <Motion.article
      className="group flex flex-col overflow-hidden rounded-3xl border border-rose/20 bg-white shadow-[0_40px_60px_-40px_rgba(251,96,102,0.35)]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      custom={index}
      variants={cardVariants}
    >
      <Motion.button
        type="button"
        className="relative h-60 w-full overflow-hidden bg-gradient-to-br from-rose/40 via-cream to-white sm:h-56"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 1.08 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        onClick={handleModalOpen}
      >
        <ResponsivePicture
          data={currentImageData}
          alt={product.imageAlt}
          fallbackSrc={logoImg}
          pictureClassName="block h-full w-full"
          imgClassName="h-full w-full object-cover"
          loading={index < 3 ? 'eager' : 'lazy'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-terra/15 via-transparent to-transparent" />
        <span className="sr-only">Ver {product.name}</span>
      </Motion.button>
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
                key={`${product.name}-${image}`}
                type="button"
                className={`h-14 w-14 overflow-hidden rounded-2xl border transition focus:outline-none focus-visible:ring-2 focus-visible:ring-rose/50 sm:h-16 sm:w-16 ${
                  imageIndex === activeImage
                    ? 'border-rose ring-rose/40'
                    : 'border-rose/20 hover:border-rose/60'
                }`}
                onClick={() => setActiveImage(imageIndex)}
              >
                <ResponsivePicture
                  data={getThumbnailData(image)}
                  alt={`${product.name} ${imageIndex + 1}`}
                  fallbackSrc={logoImg}
                  pictureClassName="block h-full w-full"
                  imgClassName="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
        <div className="mt-auto flex items-center justify-between text-sm text-rose/70">
          <span>Uso profesional</span>
          <span>Línea exclusiva</span>
        </div>
      </div>
    </Motion.article>
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

  const handleImageClick = (imageKey, product) => {
    setModalData({
      imageKey,
      title: product.name,
      description: product.description,
      alt: product.imageAlt
    })
  }

  const handleCloseModal = () => setModalData(null)

  const modalImageData = modalData?.imageKey ? getProductImage(modalData.imageKey) : null

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
              <ProductCard
                key={product.name}
                product={product}
                index={index}
                onImageClick={handleImageClick}
                getImageData={getProductImage}
                getThumbnailData={getProductThumbnail}
              />
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
          <Motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-softBlack/75 px-4 py-10 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <Motion.div
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
              <ResponsivePicture
                data={modalImageData}
                alt={modalData.alt}
                fallbackSrc={logoImg}
                pictureClassName="block"
                imgClassName="max-h-[75vh] w-full object-cover"
                loading="eager"
              />
              <div className="space-y-2 bg-white/90 px-6 py-5">
                <h3 className="text-lg font-semibold text-rose sm:text-xl">{modalData.title}</h3>
                <p className="text-sm text-terra/80 sm:text-base">{modalData.description}</p>
              </div>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

