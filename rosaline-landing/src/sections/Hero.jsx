import { motion } from 'framer-motion'
import Button from '../components/Button'
import logo from '../assets/images/logo.jpg'

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-cream py-20 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(251,96,102,0.18),_transparent_60%)]" />
      <div className="mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-10 px-4 sm:flex-row sm:gap-16 sm:px-6">
        <motion.div
          className="max-w-xl text-center sm:text-left"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: 'easeOut' }}
          variants={heroVariants}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-rose/80">Rosaline Olavarría</p>
          <h1 className="text-3xl leading-tight sm:text-5xl">
            Belleza capilar consciente con resultados profesionales
          </h1>
          <p className="mt-5 text-base text-terra/80 sm:mt-6 sm:text-xl">
            Tratamientos premium y fórmulas veganas para nutrir, proteger y realzar cada hebra. Descubrí una rutina hecha a medida para tu cabello.
          </p>
          <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-start">
            <Button href="https://wa.me/5491123456789" target="_blank" rel="noreferrer">
              Consultanos por envíos
            </Button>
            <Button href="#beneficios" variant="secondary">
              Ver beneficios
            </Button>
          </div>
        </motion.div>
        <motion.div
          className="relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-full border-[6px] border-white/70 bg-gradient-to-br from-rose/30 via-cream to-white shadow-2xl shadow-rose/30 sm:h-[26rem] sm:w-[26rem] lg:h-[28rem] lg:w-[28rem]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          <img
            src={logo}
            alt="Ilustración Rosaline Cosmetica Capilar"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-terra/20 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}

