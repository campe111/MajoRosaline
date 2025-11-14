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
  
  // Normalizar el nombre del archivo
  const normalizedFileName = fileName.replace(/\\/g, '/')
  const baseKey = `../assets/images/products/${normalizedFileName}`
  
  // Buscar coincidencia exacta
  if (collection[baseKey]) return collection[baseKey]

  // Buscar por nombre de archivo (sin ruta completa)
  const fileNameOnly = normalizedFileName.split('/').pop()
  const matchedEntry = Object.entries(collection).find(([path]) => {
    const pathFileName = path.split('/').pop()
    return pathFileName === fileNameOnly || path.includes(fileNameOnly)
  })
  
  if (matchedEntry) return matchedEntry[1]

  // Intentar cargar directamente
  try {
    return new URL(`../assets/images/products/${normalizedFileName}`, import.meta.url).href
  } catch {
    return null
  }
}

const getProductImage = buildAssetGetter(productImageModules)
const getProductThumbnail = buildAssetGetter(productThumbnailModules)

const productFile = (number) => `producto-${number}.jpg`

const products = [
  {
    name: 'Caviar Fidelite',
    description: 'Máscara Caviar Hidro-Nutritiva 250g. Tratamiento capilar anti-age con extracto de caviar, D-Pantenol y proteínas vegetales. Repara, hidrata y protege del sol, devolviendo brillo y suavidad al cabello.',
    imageAlt: 'Caviar Fidelite',
    images: [productFile(1), productFile('1.1')],
    category: 'Mascarilla Capilar'
  },
  {
    name: 'Cepillo Dompell Pocket',
    description: 'CEPILLO DOMPELL POCKET 2 EN 1. DESENREDADOR Y PENDIENTE. Cepillo compacto ideal para cartera o bolso, mantiene el acabado disciplinado. La punta cónica permite desenredar y distribuir el cabello de manera uniforme, ideal para un acabado limpio y profesional. Además, el mango ergonómico facilita su manejo en cualquier momento y lugar.',
    imageAlt: 'Cepillo Dompell Pocket',
    images: [productFile(3)],
    category: 'Cepillos'
  },
  {
    name: 'Keratina Reestructurante',
    description: 'Shampoo y Mask BEKIM Argán 4 oils fue formulado para cabellos deshidratados. La combinación de 4 aceites esenciales, principalmente el argán oil, devuelven al cabello sedosidad, suavidad, brillo y la naturalidad de un cabello sano. Contiene filtro solar.',
    imageAlt: 'Keratina Reestructurante',
    images: [productFile(5)],
    category: 'Shampoo'
  },
  {
    name: 'Coloracion',
    description: 'Color Master de Fidelité es una coloración en crema profesional que destaca por su fórmula 4x4 que proporciona color tratante, duradero, intenso y brillante. Su principal ventaja es que cuida el cabello mientras lo tiñe, ofreciendo una cobertura 100% efectiva sobre cabellos blancos. La mezcla se realiza con un oxidante en una proporción de (1+1,5) y se aplica de inmediato, con un tiempo de actuación de 40 minutos. ',
    imageAlt: 'Keratina Liss Control',
    images: [productFile(6)],
    category: 'Coloracion'
  },
  {
    name: 'Shampoo',
    description: 'Neutraliza las cargas negativas que aportan los productos químicos, responsables de la estática, la textura áspera y la falta de brillo. Devuelve el equilibrio a la cutícula y ayuda a mantener el color a través de los lavados. Al reestructurarse la cutícula, el cabello queda más suave y con más brillo, resaltando el color.',
    imageAlt: 'Shampoo',
    images: [productFile(7), productFile('7.1'), productFile('7.2')],
    category: 'Shampoo'
  },
  {
    name: 'Gel fijador',
    description: 'Es un producto ideal para lograr crear un peinado de alta duración con mayor capacidad de moldeado, modelado y fijación. Contiene un activo especial (compuesto por aminoácidos, vitaminas y fitoesteroles) que ayuda a fortalecer y engrosar el cabello desde la raíz. Rulos perfectos por más tiempo. Tu estilo de peinado súper duradero.Otorga brillo extremo dando sensación de efecto húmedo. Personaliza tu estilo. Modela tu peinado a tu estilo. No engrasa ni deja polvillo.',
    imageAlt: 'Gel fijador',
    images: [productFile(8)],
    category: 'Gel Capilar'
  },
  {
    name: 'Shampoo',
    description: 'Concentrado nutritivo para shock de reparación y brillo inmediato en cabellos sensibilizados.',
    imageAlt: 'Ampollas Ultra Repair',
    images: [productFile(9)],
    category: 'Shampoo'
  },
  {
    name: 'Mascarilla karseell',
    description: 'Refuerzo de proteínas y aminoácidos para reconstruir la fibra en minutos.',
    imageAlt: 'Ampollas Ultra Repair Plus',
    images: [productFile(10)],
    category: 'Mascarilla Capilar'
  },
  {
    name: 'Shampoo Fidelité',
    description: 'Es un tratamiento anti-age para cabellos secos y castigados.',
    imageAlt: 'Producto Styling',
    images: [productFile(11)],
    category: 'Shampoo'
  },
  {
    name: 'Baño de crema',
    description: 'El baño de Crema pH Ácido Frilayp es el complemento ideal para finalizar trabajos profesionales. Su pH Ácido tiene un efecto sobre la cutícula, haciendo que esta se cierre, favoreciendo la duración de estos tratamientos',
    imageAlt: 'Spray de brillo',
    images: [productFile(12)],
    category: 'Baño de Crema'
  },
  {
    name: 'Crema de Peinar Argan',
    description: 'Para todo tipo de cabellos. Con aceite virgen de Argán, filtro UV y efecto anti-frizz. Repara, hidrata y devuelve brillo y suavidad, combatiendo el envejecimiento capilar.',
    imageAlt: 'Máscara nutritiva',
    images: [productFile(13)],
    category: 'Crema de Peinar'
  },
  {
    name: 'Shampoo WProfessional: Nutre y Repara',
    description: 'Shampoo de lavado cremoso con filtro contra la acción de los rayos UV.',
    imageAlt: 'Máscara ligera',
    images: [productFile(14), productFile('14.1'), productFile('14.2')],
    category: 'Shampoo'
  },
  {
    name: 'Baño de Crema Coco y Argan',
    description: 'El baño de crema Coco Frilayp, contiene aceite de coco que proporciona emoliencia al cabello, viéndose esta reflejada en el brillo y suavidad del mismo.',
    imageAlt: 'Blend anti-frizz',
    images: [productFile(15)],
    category: 'Baño de Crema'
  },
  {
    name: 'Blend Termoprotector',
    description: 'Protección térmica para styling con planchita o brushing frecuente.',
    imageAlt: 'Termoprotector',
    images: [productFile(16), productFile('16.1'), productFile('16.2')],
    category: 'Tratamientos Leave-in'
  },
  {
    name: 'Shampoo Reconstrucción',
    description: 'Limpieza delicada con aporte de proteínas para cabellos dañados.',
    imageAlt: 'Shampoo reconstrucción',
    images: [productFile(17), productFile('17.1')],
    category: 'Shampoos'
  },
  {
    name: 'Acondicionador Reconstrucción',
    description: 'Sellado de cutícula para prolongar la suavidad posterior al shampoo.',
    imageAlt: 'Acondicionador reconstrucción',
    images: [productFile(18), productFile('18.1'), productFile('18.2')],
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
    images: [productFile(20), productFile('20.1')],
    category: 'Styling'
  },
  {
    name: 'Elixir Reparación Nocturna',
    description: 'Aceite nocturno que repara mientras dormís sin dejar residuos.',
    imageAlt: 'Elixir nocturno',
    images: [productFile(21), productFile('21.1')],
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
    images: [productFile(23), productFile('23.1')],
    category: 'Ampollas'
  },
  {
    name: 'Serum Sellador de Puntas',
    description: 'Sella puntas abiertas y previene el quiebre en cabellos largos.',
    imageAlt: 'Serum puntas',
    images: [productFile(24), productFile('24.1')],
    category: 'Tratamientos Leave-in'
  },
  {
    name: 'Crema para Peinar Soft Curl',
    description: 'Define rulos y ondas con finish suave y natural.',
    imageAlt: 'Crema para peinar rulos',
    images: [productFile(25), productFile('25.1')],
    category: 'Styling'
  },
  {
    name: 'Crema para Peinar Control',
    description: 'Controla volumen y aporta disciplina al cabello grueso.',
    imageAlt: 'Crema control',
    images: [productFile(26), productFile('26.1')],
    category: 'Styling'
  },
  {
    name: 'Spray Voluminizador',
    description: 'Aporta volumen desde la raíz con textura ligera.',
    imageAlt: 'Spray volumen',
    images: [productFile(27), productFile('27.1')],
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
    images: [productFile(29), productFile('29.1'), productFile('29.2'), productFile('29.3')],
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
    images: [productFile(31), productFile('31.1'), productFile('31.2')],
    category: 'Tratamientos Intensivos'
  },
  {
    name: 'Shampoo Anti-Quiebre',
    description: 'Refuerza la fibra capilar y reduce el quiebre progresivo.',
    imageAlt: 'Shampoo anti quiebre',
    images: [productFile(32), productFile('32.1')],
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
    images: [productFile(34), productFile('34.1')],
    category: 'Tratamientos Intensivos'
  },
  {
    name: 'Spray Protector UV',
    description: 'Protege el color y la fibra de la exposición solar intensa.',
    imageAlt: 'Spray protector UV',
    images: [productFile(35), productFile('35.1')],
    category: 'Styling'
  },
  {
    name: 'Aceite Nutritivo Ligero',
    description: 'Aceite ligero para cabellos finos con acabado sedoso.',
    imageAlt: 'Aceite nutritivo ligero',
    images: [productFile(36), productFile('36.1')],
    category: 'Elixires'
  },
  {
    name: 'Aceite Nutritivo Intenso',
    description: 'Aceite denso para cabellos gruesos o muy porosos.',
    imageAlt: 'Aceite nutritivo intenso',
    images: [productFile(37), productFile('37.1'), productFile('37.2')],
    category: 'Elixires'
  }
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index) => ({ opacity: 1, y: 0, transition: { delay: index * 0.15 } })
}

function ResponsivePicture({ data, alt, pictureClassName, imgClassName, loading = 'lazy', fallbackSrc = logoImg, onLoad }) {
  if (!data || typeof data === 'string') {
    return (
      <img
        src={typeof data === 'string' ? data : fallbackSrc}
        alt={alt}
        loading={loading}
        decoding="async"
        className={imgClassName ?? pictureClassName}
        onLoad={onLoad}
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
        onLoad={onLoad}
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
        onLoad={onLoad}
      />
    </picture>
  )
}

function ImageSkeleton() {
  return (
    <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-rose/10 via-cream/30 to-white">
      <div className="h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" 
           style={{
             animation: 'shimmer 2s infinite',
             backgroundSize: '200% 100%',
             backgroundPosition: '-200% 0'
           }} />
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  )
}

function ProductCard({ product, index, onImageClick, getImageData, getThumbnailData }) {
  const [activeImage, setActiveImage] = useState(0)
  const [imageLoading, setImageLoading] = useState(true)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const [dragStart, setDragStart] = useState(null)

  const currentImageName = product.images?.[activeImage]
  const currentImageData = currentImageName ? getImageData(currentImageName) : null
  const hasMultipleImages = product.images && product.images.length > 1
  const minSwipeDistance = 50

  const handleModalOpen = (e) => {
    // Solo abrir modal si no hubo swipe reciente
    const swipeHappened = touchStart && touchEnd && Math.abs(touchStart - touchEnd) >= minSwipeDistance
    if (!swipeHappened) {
      onImageClick(currentImageName ?? null, product)
    }
  }

  const handleImageLoad = () => {
    setImageLoading(false)
  }

  // Reset loading state when image changes
  useEffect(() => {
    setImageLoading(true)
  }, [activeImage])

  // Swipe handlers para móvil

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setTouchStart(null)
      setTouchEnd(null)
      return
    }
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && hasMultipleImages) {
      setActiveImage((prev) => (prev + 1) % product.images.length)
    } else if (isRightSwipe && hasMultipleImages) {
      setActiveImage((prev) => (prev - 1 + product.images.length) % product.images.length)
    }
    
    // Reset después de un delay para permitir el click
    setTimeout(() => {
      setTouchStart(null)
      setTouchEnd(null)
    }, 100)
  }

  // Drag handlers para desktop
  const onMouseDown = (e) => {
    e.preventDefault()
    setDragStart(e.clientX)
  }

  const onMouseMove = (e) => {
    if (dragStart === null) return
    const distance = dragStart - e.clientX
    if (Math.abs(distance) > minSwipeDistance && hasMultipleImages) {
      if (distance > 0) {
        setActiveImage((prev) => (prev + 1) % product.images.length)
      } else {
        setActiveImage((prev) => (prev - 1 + product.images.length) % product.images.length)
      }
      setDragStart(null)
    }
  }

  const onMouseUp = () => {
    setDragStart(null)
  }

  return (
    <Motion.article
      className="group flex flex-col overflow-hidden rounded-3xl border border-rose/20 bg-white shadow-[0_40px_60px_-40px_rgba(251,96,102,0.35)] transition-all duration-300 hover:shadow-[0_50px_80px_-40px_rgba(251,96,102,0.5)] hover:border-rose/40"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      custom={index}
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Motion.button
        type="button"
        className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-rose/20 via-cream/50 to-white sm:h-72 md:h-80 lg:h-96 cursor-pointer"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        onClick={handleModalOpen}
        onTouchStart={hasMultipleImages ? onTouchStart : undefined}
        onTouchMove={hasMultipleImages ? onTouchMove : undefined}
        onTouchEnd={hasMultipleImages ? onTouchEnd : undefined}
        onMouseDown={hasMultipleImages ? onMouseDown : undefined}
        onMouseMove={hasMultipleImages ? onMouseMove : undefined}
        onMouseUp={hasMultipleImages ? onMouseUp : undefined}
        onMouseLeave={hasMultipleImages ? onMouseUp : undefined}
      >
        {imageLoading && <ImageSkeleton />}
        <AnimatePresence mode="wait">
          <Motion.div
            key={activeImage}
            className="h-full w-full absolute inset-0"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <ResponsivePicture
              data={currentImageData}
              alt={`${product.imageAlt} ${activeImage + 1}`}
              fallbackSrc={logoImg}
              pictureClassName="block h-full w-full"
              imgClassName={`h-full w-full object-contain transition-all duration-300 ${imageLoading ? 'opacity-0' : 'opacity-100 group-hover:brightness-110'}`}
              loading={index < 3 ? 'eager' : 'lazy'}
              onLoad={handleImageLoad}
            />
          </Motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="rounded-full bg-white/90 p-3 shadow-lg backdrop-blur-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-rose">
              <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
        </div>
        {/* Flechas de navegación para desktop */}
        {hasMultipleImages && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setActiveImage((prev) => (prev - 1 + product.images.length) % product.images.length)
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 hidden sm:flex items-center justify-center h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm text-rose shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110"
              aria-label="Imagen anterior"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setActiveImage((prev) => (prev + 1) % product.images.length)
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 hidden sm:flex items-center justify-center h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm text-rose shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110"
              aria-label="Imagen siguiente"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </>
        )}
        {/* Indicadores de imágenes múltiples */}
        {hasMultipleImages && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {product.images.map((_, imageIndex) => (
              <button
                key={imageIndex}
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setActiveImage(imageIndex)
                }}
                className={`h-2 rounded-full transition-all ${
                  imageIndex === activeImage
                    ? 'w-6 bg-rose'
                    : 'w-2 bg-white/60 hover:bg-white/80'
                }`}
                aria-label={`Ver imagen ${imageIndex + 1}`}
              />
            ))}
          </div>
        )}
        <span className="sr-only">Ver {product.name}</span>
      </Motion.button>
      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6 md:p-8">
        <div>
          <Motion.h3 
            className="text-xl sm:text-2xl"
            whileHover={{ x: 4 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            {product.name}
          </Motion.h3>
          <Motion.p 
            className="mt-2 text-xs uppercase tracking-[0.3em] text-rose/70 sm:text-sm"
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {product.category}
          </Motion.p>
          <p className="mt-3 text-sm leading-relaxed text-terra/80 sm:text-base group-hover:text-terra transition-colors duration-300">
            {product.description}
          </p>
        </div>
        {product.images && product.images.length > 1 && (
          <div className="flex gap-3">
            {product.images.map((image, imageIndex) => (
              <Motion.button
                key={`${product.name}-${image}`}
                type="button"
                className={`h-12 w-12 overflow-hidden rounded-2xl border transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-rose/50 sm:h-14 sm:w-14 md:h-16 md:w-16 ${
                  imageIndex === activeImage
                    ? 'border-rose ring-2 ring-rose/40 shadow-md'
                    : 'border-rose/20 hover:border-rose/60'
                }`}
                onClick={() => setActiveImage(imageIndex)}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <ResponsivePicture
                  data={getThumbnailData(image)}
                  alt={`${product.name} ${imageIndex + 1}`}
                  fallbackSrc={logoImg}
                  pictureClassName="block h-full w-full"
                  imgClassName="h-full w-full object-cover"
                />
              </Motion.button>
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
  const [selectedCategory, setSelectedCategory] = useState('')

  // Obtener todas las categorías únicas y ordenarlas
  const categories = [...new Set(products.map(p => p.category))].sort()

  const filteredProducts = products.filter((product) => {
    // Filtro por categoría
    if (selectedCategory && product.category !== selectedCategory) {
      return false
    }
    
    // Filtro por búsqueda de texto
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
        <div className="mx-auto mt-8 flex w-full max-w-4xl flex-col gap-4 sm:flex-row sm:items-center">
          {/* Buscador */}
          <div className="flex flex-1 items-center gap-3 rounded-full border border-rose/30 bg-white/70 px-4 py-2.5 sm:py-3 shadow-sm focus-within:ring-2 focus-within:ring-rose/40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-5 w-5 flex-shrink-0 text-rose/70"
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
          
          {/* Desplegable de categorías */}
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full appearance-none rounded-full border border-rose/30 bg-white/70 px-4 py-2.5 pr-10 text-sm text-terra shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-rose/40 sm:w-auto sm:min-w-[200px] sm:py-3 sm:text-base"
              aria-label="Filtrar por categoría"
            >
              <option value="">Todas las categorías</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-rose/70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8">
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
              {searchTerm || selectedCategory
                ? `No encontramos coincidencias${searchTerm ? ` para "${searchTerm}"` : ''}${selectedCategory ? ` en la categoría "${selectedCategory}"` : ''}. Probá con otro término o categoría.`
                : 'No hay productos disponibles.'}
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
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-[0_40px_80px_-40px_rgba(0,0,0,0.45)] mx-4"
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

