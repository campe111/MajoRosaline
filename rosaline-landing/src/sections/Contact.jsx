import { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import Button from '../components/Button'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim().length >= 2 ? '' : 'El nombre debe tener al menos 2 caracteres'
      case 'email':
        return validateEmail(value) ? '' : 'Ingresá un email válido'
      case 'message':
        return value.trim().length >= 10 ? '' : 'La consulta debe tener al menos 10 caracteres'
      default:
        return ''
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Validar en tiempo real si el campo ya fue tocado
    if (touched[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: validateField(name, value)
      }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    setErrors(prev => ({
      ...prev,
      [name]: validateField(name, value)
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Marcar todos los campos como tocados
    const allTouched = { name: true, email: true, message: true }
    setTouched(allTouched)
    
    // Validar todos los campos
    const newErrors = {}
    Object.keys(formData).forEach(key => {
      newErrors[key] = validateField(key, formData[key])
    })
    setErrors(newErrors)
    
    // Verificar si hay errores
    if (Object.values(newErrors).some(error => error !== '')) {
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    // Simular envío (aquí iría la lógica real de envío)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTouched({})
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="relative overflow-hidden bg-gradient-to-b from-white via-cream/60 to-white py-16 sm:py-[5.5rem]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(255,239,193,0.35),_transparent_60%)]" />
        <div className="absolute left-1/2 top-12 h-72 w-72 -translate-x-1/2 rounded-full bg-rose/10 blur-3xl sm:left-[10%] sm:top-1/3" />
        <div className="absolute right-[-15%] bottom-[-20%] h-80 w-80 rounded-full bg-rose/5 blur-3xl sm:right-0" />
      </div>
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="rounded-[34px] border border-rose/15 bg-white/70 px-4 py-6 shadow-[0_50px_80px_-60px_rgba(47,47,47,0.6)] backdrop-blur sm:px-8 sm:py-8 md:px-10 md:py-10">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            <div className="space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full border border-rose/20 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-rose/80">
                Contacto
              </p>
              <h2 className="text-2xl text-rose sm:text-3xl md:text-[2.1rem] md:leading-tight">Consultanos lo que necesites</h2>
              <p className="text-sm text-terra/80 sm:text-base">
                Coordiná envíos, solicitá precios mayoristas o pedinos asesoramiento sobre nuestros productos profesionales. Estamos
                para acompañarte en cada etapa de tu cuidado capilar.
              </p>
              <div className="space-y-4 rounded-3xl border border-rose/15 bg-white/70 p-5">
                <div>
                  <span className="text-xs uppercase tracking-[0.32em] text-rose/60">Línea directa</span>
                  <p className="mt-2 text-lg font-semibold text-rose">
                    <a href="tel:+542284578166" className="hover:underline">
                      +54 2284 578166
                    </a>
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-terra/60">
                  <span className="rounded-full border border-rose/20 px-3 py-1">Mayoristas</span>
                  <span className="rounded-full border border-rose/20 px-3 py-1">Asesoría personalizada</span>
                </div>
                <Button href="https://wa.me/542284578166" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                  Escribir por WhatsApp
                </Button>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 rounded-[28px] border border-rose/15 bg-white/75 p-4 shadow-inner sm:gap-5 sm:p-6 md:p-7 lg:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-[0.2em] text-rose/70 sm:text-sm">
                  Nombre
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Nombre"
                    className={`w-full rounded-full border bg-white/70 px-4 py-2.5 text-sm font-normal text-terra transition-all focus:outline-none focus:ring-2 sm:px-5 sm:py-3 sm:text-base ${
                      errors.name && touched.name
                        ? 'border-red-400 focus:border-red-400 focus:ring-red-300'
                        : touched.name && !errors.name
                        ? 'border-green-400 focus:border-green-400 focus:ring-green-300'
                        : 'border-rose/30 focus:border-rose focus:ring-rose/30'
                    }`}
                  />
                  {touched.name && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      {errors.name ? (
                        <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  )}
                </div>
                {errors.name && touched.name && (
                  <p className="text-xs text-red-400 px-2">{errors.name}</p>
                )}
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-[0.2em] text-rose/70 sm:text-sm">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="nombre@email.com"
                    className={`w-full rounded-full border bg-white/70 px-4 py-2.5 text-sm font-normal text-terra transition-all focus:outline-none focus:ring-2 sm:px-5 sm:py-3 sm:text-base ${
                      errors.email && touched.email
                        ? 'border-red-400 focus:border-red-400 focus:ring-red-300'
                        : touched.email && !errors.email
                        ? 'border-green-400 focus:border-green-400 focus:ring-green-300'
                        : 'border-rose/30 focus:border-rose focus:ring-rose/30'
                    }`}
                  />
                  {touched.email && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      {errors.email ? (
                        <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  )}
                </div>
                {errors.email && touched.email && (
                  <p className="text-xs text-red-400 px-2">{errors.email}</p>
                )}
              </div>
              
              <div className="lg:col-span-2 flex flex-col gap-2">
                <label className="text-xs uppercase tracking-[0.2em] text-rose/70 sm:text-sm">
                  Consulta
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows="4"
                    placeholder="Contanos qué necesitás y nos pondremos en contacto."
                    className={`w-full rounded-3xl border bg-white/70 px-4 py-3 text-sm font-normal text-terra transition-all focus:outline-none focus:ring-2 sm:px-5 sm:py-4 sm:text-base ${
                      errors.message && touched.message
                        ? 'border-red-400 focus:border-red-400 focus:ring-red-300'
                        : touched.message && !errors.message
                        ? 'border-green-400 focus:border-green-400 focus:ring-green-300'
                        : 'border-rose/30 focus:border-rose focus:ring-rose/30'
                    }`}
                  />
                  {touched.message && (
                    <div className="absolute right-3 top-3">
                      {errors.message ? (
                        <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  )}
                </div>
                {errors.message && touched.message && (
                  <p className="text-xs text-red-400 px-2">{errors.message}</p>
                )}
              </div>
              
              <div className="lg:col-span-2 flex flex-col gap-3">
                <Button 
                  type="submit" 
                  className="w-full lg:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                </Button>
                
                {submitStatus && (
                  <Motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`rounded-full px-4 py-2 text-sm font-medium ${
                      submitStatus === 'success'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {submitStatus === 'success' ? (
                      <span className="flex items-center gap-2">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        Hubo un error al enviar. Por favor, intentá nuevamente.
                      </span>
                    )}
                  </Motion.div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

