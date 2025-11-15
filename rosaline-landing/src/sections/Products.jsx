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
    description: 'Cepillo Dompell Pocket 2 en 1. Compacto y ergonómico. Desenreda y distribuye el cabello con precisión, ideal para retoques rápidos y acabado profesional.',
    imageAlt: 'Cepillo Dompell Pocket',
    images: [productFile(3)],
    category: 'Cepillos'
  },
  {
    name: 'Kit Keratina Reestructurante',
    description: 'Shampoo y Mask BEKIM Argán 4 oils fue formulado para cabellos deshidratados. Contiene filtro solar.',
    imageAlt: 'Keratina Reestructurante',
    images: [productFile(5)],
    category: 'Kit'
  },
  {
    name: 'Coloracion',
    description: 'Color Master de Fidelité es una coloración en crema profesional que destaca por su fórmula 4x4 que proporciona color tratante, duradero, intenso y brillante.',
    imageAlt: 'Keratina Liss Control',
    images: [productFile(6)],
    category: 'Coloracion'
  },
  {
    name: 'Shampoo Colormaster',
    description: 'Neutraliza las cargas negativas que aportan los productos químicos, responsables de la estática, la textura áspera y la falta de brillo.',
    imageAlt: 'Shampoo',
    images: [productFile(7), productFile('7.1'), productFile('7.2')],
    category: 'Shampoo'
  },
  {
    name: 'Gel fijador',
    description: 'Es un producto ideal para lograr crear un peinado de alta duración con mayor capacidad de moldeado, modelado y fijación.',
    imageAlt: 'Gel fijador',
    images: [productFile(8)],
    category: 'Gel Capilar'
  },
  {
    name: 'Shampoo Caviar Fidelité',
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
    name: 'Keratine Complex',
    description: 'La queratina es una proteína que posee nuestro cabello de forma natural y que es la encargada de proteger el pelo e impermeabilizar de los daños y el encrespado.',
    imageAlt: 'Termoprotector',
    images: [productFile(16), productFile('16.1'), productFile('16.2')],
    category: 'Shampoo'
  },
  {
    name: 'Reparador de Puntas Lino',
    description: 'Previene y reduce la formación de dobles puntas y repara las ya dañadas instantáneamente. Desarrollado para cabellos finos y delicados. Contiene filtro UV que protege al cabello de los rayos ultravioleta.',
    imageAlt: 'Shampoo reconstrucción',
    images: [productFile(17), productFile('17.1')],
    category: 'Reparador de Puntas'
  },
  {
    name: 'Shampoo Bucles Repair',
    description: 'Consienta las ondas y rizos naturales de su cabello con la colección rizos de Bucles repair, que define los rizos mientras hidrata intensamente el cabello.',
    imageAlt: 'Acondicionador reconstrucción',
    images: [productFile(18), productFile('18.1'), productFile('18.2')],
    category: 'Shampoo'
  },
  {
    name: 'Reparador de Puntas con semillas de girasol',
    description: 'Previene y reduce la formación de dobles puntas y repara las ya dañadas instantáneamente. Ayuda a reducir el frizz. ',
    imageAlt: 'Kit brillo diamante',
    images: [productFile(19)],
    category: 'Reparador de Puntas'
  },
  {
    name: 'Mascarilla reparadora Keratina',
    description: 'Repara y fortalece la fibra capilar dañada. Otorga vitalidad, brillo y suavidad al cabello. ',
    imageAlt: 'Spray anti humedad',
    images: [productFile(20), productFile('20.1')],
    category: 'Mascarilla Capilar'
  },
  {
    name: 'Mascarilla coco y vanilla renovadora',
    description: 'Remueve los residuos y produce una renovación capilar. Exquisita fragancia.',
    imageAlt: 'Elixir nocturno',
    images: [productFile(21), productFile('21.1')],
    category: 'Mascarilla Capilar'
  },
  {
    name: 'Mascara Argan',
    description: 'Es para todo tipo de cabellos. Está hecha a base de aceite virgen de Argán.',
    imageAlt: 'Tratamiento detox',
    images: [productFile(22)],
    category: 'Mascarilla Capilar'
  },
  {
    name: 'Brillo instantáneo Argan',
    description: 'Realza los cabellos y les devuelve su esplendor de manera instantánea. Restaura, renueva y repara los cabellos. Brillo sublime.',
    imageAlt: 'Ampolla detox',
    images: [productFile(23), productFile('23.1')],
    category: 'Brillo'
  },
  {
    name: 'Crema Extra Acida',
    description: 'Restaurar el cabello en su totalidad, sella la fibra capilar y fija el color. Otorga una hidratación profunda, logrando como resultado cabellos saludables y con brillo.',
    imageAlt: 'Serum puntas',
    images: [productFile(24), productFile('24.1')],
    category: 'Crema de Peinar'
  },
  {
    name: 'Cera en barra',
    description: 'Mantén tu peinado en su lugar durante todo el día. Acabado natural.Fácil de aplicar. Su formato en barra permite una aplicación precisa y sin desperdicio.',
    imageAlt: 'Crema para peinar rulos',
    images: [productFile(25), productFile('25.1')],
    category: 'Cera'
  },
  {
    name: 'Reparador de Puntas Caviar',
    description: 'Potente serum anti age que previene y reduce la formación de dobles puntas y repara instantáneamente las ya dañadas, desde la primera aplicación.',
    imageAlt: 'Crema control',
    images: [productFile(26), productFile('26.1')],
    category: 'Reparador de Puntas'
  },
  {
    name: 'Protector Termico Argan',
    description: 'Es un tratamiento capilar formulado a base de aceite orgánico de Argán. Genera una película que envuelve la fibra capilar protegiéndola del calor extremo',
    imageAlt: 'Spray volumen',
    images: [productFile(27), productFile('27.1')],
    category: 'Protector Termico'
  },
  {
    name: 'Shampoo Opción',
    description: 'Linea pre y post color.Neutraliza reflejos amarillos, ideal apra rubios frios o grises.',
    imageAlt: 'Tratamiento express',
    images: [productFile(28)],
    category: 'Shampoo'
  },
  {
    name: 'Kit ColorMaster',
    description: 'Pigmentos y activos de última generación que aseguran un resultado de color perfecto. Transforman e iluminan el cabello con un poder visual sorprendente.',
    imageAlt: 'Mascarilla express',
    images: [productFile(29), productFile('29.1'), productFile('29.2'), productFile('29.3')],
    category: 'Kit'
  },
  {
    name: 'Kit Argan Mythical',
    description: 'Explora el mundo Argan,formulas exóticas halagan tus cabellos con los más antiguos secretos de belleza provenientes de Marruecos y Egipto.',
    imageAlt: 'Kit keratina home care',
    images: [productFile(30)],
    category: 'Kit'
  },
  {
    name: 'Kit Reestructurante y Antifrizz',
    description: 'Repara y fortalece la fibra capilar dañada. Le devuelve su soltura y flexibilidad natural, logrando un cabello suave con brillo y vitalidad.',
    imageAlt: 'Tratamiento botanical',
    images: [productFile(31), productFile('31.1'), productFile('31.2')],
    category: 'Kit'
  },
  {
    name: 'Shampoo 2 Phase',
    description: 'Desenreda el cabello, facilita el peinado y devuelve su esplendor de manera instantánea.',
    imageAlt: 'Shampoo anti quiebre',
    images: [productFile(32), productFile('32.1')],
    category: 'Shampoo'
  },
  {
    name: 'Cepillos',
    description: 'Cepillo Dompell Pocket 2 en 1. Compacto y ergonómico. Desenreda y distribuye el cabello con precisión, ideal para retoques rápidos y acabado profesional.',
    imageAlt: 'Cepillo Dompell Pocket',
    images: [productFile(33)],
    category: 'Cepillos'
  },
  {
    name: 'Ampolla Argan',
    description: 'El aceite virgen de Argán es un potente restaurador para cabellos muy secos, dañados y maltratados.',
    imageAlt: 'Sellador de brillo',
    images: [productFile(34), productFile('34.1')],
    category: 'Ampolla'
  },
  {
    name: 'Crema de Peinar Ossono',
    description: 'Tratamiento capilar completo: desenreda, protege, repara y nutre, aportando brillo, suavidad, volumen y control anti-frizz.',
    imageAlt: 'Spray protector UV',
    images: [productFile(35), productFile('35.1')],
    category: 'Crema de Peinar'
  },
  {
    name: 'Mascarilla Argan',
    description: 'Es para todo tipo de cabellos. Está hecha a base de aceite virgen de Argán. Es un tratamiento anti-age que combate y retarda el envejecimiento capilar',
    imageAlt: 'Aceite nutritivo ligero',
    images: [productFile(36), productFile('36.1')],
    category: 'Mascarilla Capilar'
  },
  {
    name: 'Oro Liquido 30Ml',
    description: 'Oro Líquido es la preciosa poción que transforma el cabello haciéndolo resplandecer como el oro, asegurando un brillo inigualable',
    imageAlt: 'Aceite nutritivo intenso',
    images: [productFile(37), productFile('37.1'), productFile('37.2')],
    category: 'Brillo'
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

function ProductCard({ product, index, onImageClick, getImageData, getThumbnailData, onAddToCart }) {
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
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-white via-white to-cream/20 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.08),4px_8px_16px_-4px_rgba(251,96,102,0.15)] transition-all duration-500 hover:shadow-[0_8px_20px_-4px_rgba(0,0,0,0.12),8px_12px_24px_-4px_rgba(251,96,102,0.25)] border border-transparent hover:border-rose/20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      custom={index}
      variants={cardVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Motion.button
        type="button"
        className="relative h-72 w-full overflow-hidden bg-gradient-to-br from-cream/40 via-white to-cream/30 sm:h-80 md:h-96 lg:h-[420px] cursor-pointer"
        whileHover={{ scale: 1.02 }}
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-gradient-to-br from-rose/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="rounded-full bg-white/95 backdrop-blur-md p-4 shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-300 ring-2 ring-rose/20">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-rose">
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
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md shadow-lg">
            {product.images.map((_, imageIndex) => (
              <button
                key={imageIndex}
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setActiveImage(imageIndex)
                }}
                className={`h-1.5 rounded-full transition-all ${
                  imageIndex === activeImage
                    ? 'w-8 bg-rose'
                    : 'w-1.5 bg-rose/30 hover:bg-rose/50'
                }`}
                aria-label={`Ver imagen ${imageIndex + 1}`}
              />
            ))}
          </div>
        )}
        <span className="sr-only">Ver {product.name}</span>
      </Motion.button>
      <div className="flex flex-1 flex-col gap-5 p-6 sm:p-7 md:p-8">
        <div className="flex flex-col gap-3">
          <div className="flex items-start justify-between gap-3">
            <Motion.h3 
              className="text-xl font-semibold text-terra sm:text-2xl leading-tight"
              whileHover={{ x: 2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              {product.name}
            </Motion.h3>
            <Motion.span
              className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-rose/15 to-rose/10 text-rose border border-rose/20 whitespace-nowrap flex-shrink-0 shadow-sm"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {product.category}
            </Motion.span>
          </div>
          <p className="text-sm leading-relaxed text-terra/70 sm:text-base line-clamp-3 group-hover:text-terra/90 transition-colors duration-300">
            {product.description}
          </p>
        </div>
        {product.images && product.images.length > 1 && (
          <div className="flex gap-2.5 overflow-x-auto pb-1 scrollbar-hide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {product.images.map((image, imageIndex) => (
              <Motion.button
                key={`${product.name}-${image}`}
                type="button"
                className={`h-14 w-14 flex-shrink-0 overflow-hidden rounded-xl border-2 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-rose/50 sm:h-16 sm:w-16 ${
                  imageIndex === activeImage
                    ? 'border-rose shadow-md shadow-rose/20 scale-105'
                    : 'border-rose/20 hover:border-rose/50 opacity-70 hover:opacity-100'
                }`}
                onClick={() => setActiveImage(imageIndex)}
                whileHover={{ scale: 1.08, y: -2 }}
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
        <div className="mt-auto pt-5 border-t border-rose/10 flex flex-col gap-4">
          <div className="flex items-center justify-between text-xs text-terra/60 sm:text-sm">
            <span className="flex items-center gap-2 group/item">
              <div className="p-1.5 rounded-lg bg-rose/5 group-hover/item:bg-rose/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 text-rose/70">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="font-medium">Uso profesional</span>
            </span>
            <span className="flex items-center gap-2 group/item">
              <div className="p-1.5 rounded-lg bg-rose/5 group-hover/item:bg-rose/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 text-rose/70">
                  <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <span className="font-medium">Línea exclusiva</span>
            </span>
          </div>
          <Motion.button
            type="button"
            onClick={() => onAddToCart(product)}
            className="w-full rounded-xl bg-gradient-to-r from-rose to-rose/90 text-white font-semibold py-3 px-4 text-sm sm:text-base shadow-md shadow-rose/30 hover:shadow-lg hover:shadow-rose/40 transition-all flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            Agregar al carrito
          </Motion.button>
        </div>
      </div>
    </Motion.article>
  )
}

export default function Products() {
  const [modalData, setModalData] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Número de WhatsApp (formato: 5491123456789 sin + ni espacios)
  const whatsappNumber = '+5492284578166' 

  // Obtener todas las categorías únicas y ordenarlas alfabéticamente
  const categories = [...new Set(products.map(p => p.category))].sort((a, b) => 
    a.localeCompare(b, 'es', { sensitivity: 'base' })
  )

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

  // Cerrar modal con tecla ESC
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && modalData) {
        setModalData(null)
      }
    }
    if (modalData) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [modalData])

  const modalImageData = modalData?.imageKey ? getProductImage(modalData.imageKey) : null

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCategory('')
  }

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.name === product.name)
      if (existingItem) {
        return prevCart.map(item =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
    // No abrir automáticamente el carrito, solo mostrar el botón flotante
  }

  const removeFromCart = (productName) => {
    setCart(prevCart => prevCart.filter(item => item.name !== productName))
  }

  const updateQuantity = (productName, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productName)
      return
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.name === productName
          ? { ...item, quantity: newQuantity }
          : item
      )
    )
  }

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const sendToWhatsApp = () => {
    if (cart.length === 0) return

    let message = '¿Hola Rosaline como estas? Me interesan estos articulos:\n\n'
    
    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`
      message += `   Cantidad: ${item.quantity}\n\n`
    })

    message += '¿Me brindas mas informacion?'

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

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
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="flex-shrink-0 text-rose/50 hover:text-rose transition-colors"
                aria-label="Limpiar búsqueda"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          
          {/* Desplegable de categorías */}
          <div className="relative flex items-center gap-2">
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
            {(searchTerm || selectedCategory) && (
              <button
                type="button"
                onClick={clearFilters}
                className="flex-shrink-0 rounded-full border border-rose/30 bg-white/70 px-3 py-2.5 text-xs font-medium text-rose/70 hover:text-rose hover:bg-white/90 transition-all sm:py-3 sm:px-4 sm:text-sm"
                aria-label="Limpiar filtros"
              >
                Limpiar
              </button>
            )}
          </div>
        </div>
        
        {/* Contador de resultados */}
        {(searchTerm || selectedCategory) && (
          <Motion.div
            className="mx-auto mt-4 text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-sm text-terra/70 sm:text-base">
              {filteredProducts.length === 0 ? (
                'No se encontraron productos'
              ) : filteredProducts.length === 1 ? (
                '1 producto encontrado'
              ) : (
                `${filteredProducts.length} productos encontrados`
              )}
            </p>
          </Motion.div>
        )}
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
                onAddToCart={addToCart}
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
              className="relative w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-[0_40px_80px_-40px_rgba(0,0,0,0.45)] mx-4 flex flex-col md:flex-row"
              initial={{ scale: 0.92, opacity: 0.6 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 180, damping: 20 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-rose shadow-lg hover:bg-white hover:scale-110 transition-all"
                onClick={handleCloseModal}
                aria-label="Cerrar galería (Presiona ESC)"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
              
              {/* Imagen */}
              <div className="flex items-center justify-center bg-cream/30 p-4 md:p-6 md:w-1/2">
                <ResponsivePicture
                  data={modalImageData}
                  alt={modalData.alt}
                  fallbackSrc={logoImg}
                  pictureClassName="block"
                  imgClassName="max-h-[60vh] md:max-h-[80vh] w-full object-contain"
                  loading="eager"
                />
              </div>
              
              {/* Descripción */}
              <div className="flex flex-col justify-start space-y-4 px-6 py-6 md:px-8 md:pt-8 md:pb-8 md:w-1/2">
                <h3 className="text-xl font-semibold text-rose sm:text-2xl">{modalData.title}</h3>
                <p className="text-sm leading-relaxed text-terra/80 sm:text-base">{modalData.description}</p>
              </div>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>

      {/* Carrito flotante */}
      <AnimatePresence>
        {showCart && cart.length > 0 && (
          <Motion.div
            className="fixed bottom-6 right-6 z-50 w-full max-w-sm sm:max-w-md"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <div className="rounded-2xl bg-white shadow-2xl border border-rose/20 overflow-hidden">
              <div className="bg-gradient-to-r from-rose to-rose/90 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                    {getCartTotal() > 0 && (
                      <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-white text-rose text-xs font-bold flex items-center justify-center">
                        {getCartTotal()}
                      </span>
                    )}
                  </div>
                  <h3 className="text-white font-semibold text-lg">Carrito ({getCartTotal()})</h3>
                </div>
                <button
                  onClick={() => setShowCart(false)}
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="Cerrar carrito"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="max-h-[60vh] overflow-y-auto p-4 space-y-3">
                {cart.map((item) => (
                  <div key={item.name} className="flex items-center gap-3 p-3 rounded-xl bg-cream/30 border border-rose/10">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm text-terra truncate">{item.name}</h4>
                      <p className="text-xs text-terra/60">{item.category}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.name, item.quantity - 1)}
                        className="h-8 w-8 rounded-lg bg-rose/10 text-rose hover:bg-rose/20 transition-colors flex items-center justify-center"
                        aria-label="Disminuir cantidad"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </button>
                      <span className="w-8 text-center font-semibold text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.name, item.quantity + 1)}
                        className="h-8 w-8 rounded-lg bg-rose/10 text-rose hover:bg-rose/20 transition-colors flex items-center justify-center"
                        aria-label="Aumentar cantidad"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </button>
                      <button
                        onClick={() => removeFromCart(item.name)}
                        className="h-8 w-8 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors flex items-center justify-center ml-1"
                        aria-label="Eliminar del carrito"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                          <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-4 border-t border-rose/10 bg-cream/20">
                <Motion.button
                  onClick={sendToWhatsApp}
                  className="w-full rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 px-4 text-base shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.001-.002c-2.8-1.524-5.022-4.045-6.416-7.288l-.003-.006C1.662 8.445 2.964 4.71 5.71 2.564l.002-.001a9.827 9.827 0 0111.224-.006l.001.001c2.748 2.146 4.048 5.88 3.13 9.175l-.003.01c-1.394 3.243-3.617 5.764-6.42 7.29l-.001.001a9.875 9.875 0 01-4.67 1.179M12.003 0C5.374 0 0 5.373 0 12.001c0 2.125.566 4.123 1.555 5.849L0 24l6.218-1.556c1.726.989 3.724 1.555 5.785 1.555 6.628 0 12.002-5.373 12.002-12.002C24.005 5.373 18.631.001 12.003.001" />
                  </svg>
                  Enviar por WhatsApp
                </Motion.button>
              </div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>

      {/* Botón flotante del carrito - siempre visible cuando hay productos */}
      {cart.length > 0 && (
        <Motion.button
          onClick={() => setShowCart(!showCart)}
          className="fixed bottom-[88px] right-6 z-40 h-14 w-14 rounded-full bg-gradient-to-r from-rose to-rose/90 text-white shadow-2xl transition-all flex items-center justify-center sm:right-8 sm:bottom-[104px] sm:hover:shadow-rose/40"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          whileHover={!isMobile ? { scale: 1.1 } : {}}
          whileTap={!isMobile ? { scale: 0.95 } : {}}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          aria-label={showCart ? "Cerrar carrito" : "Ver carrito"}
        >
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-white text-rose text-xs font-bold flex items-center justify-center">
              {getCartTotal()}
            </span>
          </div>
        </Motion.button>
      )}
    </section>
  )
}

