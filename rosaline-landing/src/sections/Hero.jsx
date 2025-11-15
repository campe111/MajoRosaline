import { motion as Motion } from 'framer-motion'
import Button from '../components/Button'
import logo from '../assets/images/logo.jpg'

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-cream pt-2 pb-16 sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,96,102,0.16),_transparent_65%)]" />
        <div className="absolute -left-1/4 top-1/2 h-[420px] w-[420px] rounded-full bg-rose/10 blur-3xl sm:left-1/3 sm:top-[-10%]" />
        <div className="absolute -right-1/3 bottom-[-20%] h-[320px] w-[320px] rounded-full bg-cream/70 blur-2xl sm:right-[-10%]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2243%22%20height%3D%2243%22%20viewBox%3D%220%200%2043%2043%22%20fill%3D%22none%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M0.5%2021.5C0.5%2033.9264%2010.5736%2044%2023%2044C35.4264%2044%2045.5%2033.9264%2045.5%2021.5C45.5%209.07359%2035.4264%20-1%2023%20-1C10.5736%20-1%200.5%209.07359%200.5%2021.5Z%22%20stroke%3D%22rgba(246,107,64,0.08)%22%20/%3E%3C/svg%3E')] opacity-70" />
      </div>
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-4 sm:grid-cols-2 sm:gap-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <Motion.div
          className="max-w-xl text-center sm:max-w-none sm:text-left"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: 'easeOut' }}
          variants={heroVariants}
        >
          {/* Imagen de Rosaline solo en mobile, debajo del header */}
          <div className="mb-4 flex justify-center sm:hidden">
            <div className="relative flex h-[300px] w-[300px] items-center justify-center overflow-hidden rounded-[28px] border border-white/70 bg-gradient-to-br from-white via-cream to-rose/20 shadow-[0_45px_70px_-45px_rgba(47,47,47,0.45)]">
              <div className="absolute inset-3 rounded-[24px] border border-white/40 bg-white/40 backdrop-blur-sm" />
              <img src={logo} alt="Rosaline Olavarría" className="relative z-10 h-full w-full rounded-[24px] object-cover" />
              <div className="absolute inset-0 rounded-[28px] bg-gradient-to-t from-terra/15 via-transparent to-transparent" />
            </div>
          </div>
          <h1 className="text-3xl leading-tight text-rose sm:text-4xl md:text-5xl lg:text-6xl">
            Belleza capilar consciente con resultados profesionales
          </h1>
          <p className="mt-5 max-w-xl text-sm text-terra/80 sm:mt-6 sm:text-base md:text-lg lg:text-xl">
            Tratamientos premium y fórmulas veganas para nutrir, proteger y realzar cada hebra. Descubrí una rutina hecha a medida para tu cabello.
          </p>
          <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-start">
            <Button href="https://wa.me/542284578166" target="_blank" rel="noreferrer">
              Consultanos por envíos
            </Button>
            <Button href="#beneficios" variant="secondary">
              Ver beneficios
            </Button>
          </div>
        </Motion.div>
        <Motion.div
          className="relative mx-auto flex h-64 w-64 items-center justify-center overflow-hidden rounded-[32px] border border-white/70 bg-gradient-to-br from-white via-cream to-rose/20 shadow-[0_45px_70px_-45px_rgba(47,47,47,0.45)] sm:h-80 sm:w-80 md:h-[26rem] md:w-[26rem] lg:h-[28rem] lg:w-[28rem]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          <div className="absolute inset-4 rounded-[28px] border border-white/40 bg-white/40 backdrop-blur-sm" />
          <img src={logo} alt="Ilustración Rosaline Cosmetica Capilar" className="relative z-10 h-full w-full rounded-[28px] object-cover" />
          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-t from-terra/15 via-transparent to-transparent" />
        </Motion.div>
      </div>
    </section>
  )
}

