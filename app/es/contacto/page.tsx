'use client'

import { Mail, Send, MessageSquare } from 'lucide-react'
import { useState, FormEvent } from 'react'

export default function ContactoES() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/xojjjqwa', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setSubmitStatus('success')
        form.reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error envío:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-16 bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-fuchsia-50 via-pink-50 to-purple-50 py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Hablemos <span className="gradient-text">Juntos</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Cuéntanos tu idea y hagámosla realidad.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Envía un Mensaje</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre y Apellidos *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 transition-colors disabled:opacity-50"
                      placeholder="Juan Pérez"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 transition-colors disabled:opacity-50"
                      placeholder="juan@ejemplo.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 transition-colors disabled:opacity-50"
                      placeholder="+34 123 456 789"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Servicio de Interés
                    </label>
                    <select
                      id="service"
                      name="service"
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 transition-colors disabled:opacity-50"
                    >
                      <option>Sitio Flash (199€)</option>
                      <option>Sitio Personalizado (desde 599€)</option>
                      <option>Chatbot Smart (99€)</option>
                      <option>Excel Power (99€)</option>
                      <option>Micro-SaaS Personalizado</option>
                      <option>Consultoría General</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      disabled={isSubmitting}
                      rows={6}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 transition-colors resize-none disabled:opacity-50"
                      placeholder="Cuéntanos sobre tu proyecto o necesidades..."
                    ></textarea>
                  </div>

                  {/* Success Message */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border-2 border-green-500 text-green-800 px-4 py-4 rounded-lg flex items-start">
                      <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <div>
                        <p className="font-bold text-lg">¡Gracias! Te responderemos en 24h</p>
                        <p className="text-sm mt-1">Hemos recibido tu mensaje y te contactaremos pronto.</p>
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border-2 border-red-500 text-red-800 px-4 py-4 rounded-lg flex items-start">
                      <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                      </svg>
                      <div>
                        <p className="font-bold">Error en el envío</p>
                        <p className="text-sm mt-1">Inténtalo de nuevo o contáctanos vía WhatsApp: +39 344 137 8445</p>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gradient-bg hover:opacity-90 px-6 py-4 rounded-lg font-semibold text-white transition-all transform hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Enviar Solicitud</span>
                      </>
                    )}
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    Responderemos en 2 horas en días laborables
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Información de Contacto</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-fuchsia-100 to-pink-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-fuchsia-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-gray-900">Email</h3>
                      <a href="mailto:matteo.tech.s@gmail.com" className="text-gray-600 hover:text-fuchsia-600 transition-colors">
                        matteo.tech.s@gmail.com
                      </a>
                      <p className="text-sm text-gray-500 mt-1">Respuesta garantizada en 2 horas</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-gray-900">WhatsApp</h3>
                      <a href="https://wa.me/393441378445" className="text-gray-600 hover:text-fuchsia-600 transition-colors">
                        +39 344 137 8445
                      </a>
                      <p className="text-sm text-gray-500 mt-1">Chat directo disponible</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Quick */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Preguntas Frecuentes</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-fuchsia-600 mb-1">¿Cuánto tiempo se tarda?</h4>
                    <p className="text-sm text-gray-600">Sitio Flash en 24 horas. Proyectos personalizados: 3-7 días.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-fuchsia-600 mb-1">¿Puedo ver ejemplos?</h4>
                    <p className="text-sm text-gray-600">¡Por supuesto! Contáctanos y te mostraremos nuestro portfolio.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-fuchsia-600 mb-1">¿Ofrecéis mantenimiento?</h4>
                    <p className="text-sm text-gray-600">Sí, paquetes desde 49€/mes para asistencia continua.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Availability Banner */}
      <section className="gradient-bg py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-white">
            💡 <strong>Consultoría gratuita de 15 minutos</strong> para cada nuevo proyecto
          </p>
        </div>
      </section>
    </div>
  )
}