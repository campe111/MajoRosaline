import { motion } from 'framer-motion'

const baseClasses =
  'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'

const variants = {
  primary:
    'bg-rose text-white shadow-lg shadow-rose/30 hover:bg-rose/90 focus-visible:outline-rose',
  secondary:
    'bg-white text-rose border border-rose hover:bg-rose/10 focus-visible:outline-rose',
  ghost:
    'bg-transparent text-terra border border-terra/30 hover:border-terra focus-visible:outline-terra'
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

