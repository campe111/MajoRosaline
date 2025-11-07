import { motion } from 'framer-motion'
import Button from '../components/Button'

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(251,96,102,0.18),_transparent_60%)]" />
      <div className="mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-12 px-6 sm:flex-row sm:gap-16">
        <motion.div
          className="max-w-xl text-center sm:text-left"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: 'easeOut' }}
          variants={heroVariants}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-rose/80">Rosaline Olavarría</p>
          <h1 className="text-4xl leading-tight sm:text-5xl">
            Belleza capilar consciente con resultados profesionales
          </h1>
          <p className="mt-6 text-lg text-terra/80 sm:text-xl">
            Tratamientos premium y fórmulas veganas para nutrir, proteger y realzar cada hebra. Descubrí una rutina hecha a medida para tu cabello.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
            <Button href="https://wa.me/5491123456789" target="_blank" rel="noreferrer">
              Consultanos por envíos
            </Button>
            <Button href="#beneficios" variant="secondary">
              Ver beneficios
            </Button>
          </div>
        </motion.div>
        <motion.div
          className="relative flex h-80 w-80 items-center justify-center rounded-full bg-honey/70 shadow-2xl shadow-honey/50 sm:h-[28rem] sm:w-[28rem]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          <div className="absolute inset-8 rounded-full border border-white/70" />
          <div className="absolute inset-16 rounded-full bg-white/70" />
          <motion.div
            className="relative z-10 text-center"
            animate={{ rotate: [0, 2, -2, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <h2 className="text-3xl font-light uppercase tracking-[0.5em] text-rose/70">Hair Care</h2>
            <p className="mt-6 text-sm uppercase tracking-[0.44em] text-terra/60">Natural &amp; Vegano</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

