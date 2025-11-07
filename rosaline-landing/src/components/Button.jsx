import { motion } from 'framer-motion'

const baseClasses =
  'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'

const variants = {
  primary:
    'bg-olive text-white shadow-lg shadow-olive/30 hover:bg-olive/90 focus-visible:outline-olive',
  secondary:
    'bg-white text-olive border border-olive hover:bg-olive/10 focus-visible:outline-olive',
  ghost:
    'bg-transparent text-softBlack border border-softBlack/20 hover:border-softBlack focus-visible:outline-softBlack'
}

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  ...props
}) {
  const Component = href ? 'a' : 'button'

  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
      <Component
        className={`${baseClasses} ${variants[variant] ?? variants.primary} ${className}`}
        href={href}
        {...props}
      >
        {children}
      </Component>
    </motion.div>
  )
}

