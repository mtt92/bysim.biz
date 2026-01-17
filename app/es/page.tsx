import Link from 'next/link'
import { Zap, Rocket, DollarSign, Code, Bot, Globe, ArrowRight, Sparkles } from 'lucide-react'

export default function HomeES() {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Sitios Web Flash',
      description: 'Sitios profesionales desde 199€, online en 24 horas. Perfectos para pequeños negocios.',
      href: '/es/sitios-web',
      color: 'from-fuchsia-500 to-pink-600'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Software Personalizado',
      description: 'Desarrollo de aplicaciones a medida con tecnologías AI-native.',
      href: '/es/software-ia',
      color: 'from-purple-600 to-fuchsia-600'
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'Automatizaciones IA',
      description: 'Chatbots, scripts y automatizaciones para simplificar tu negocio.',
      href: '/es/software-ia',
      color: 'from-pink-600 to-fuchsia-600'
    }
  ]

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Velocidad Récord',
      description: 'Entrega en 24 horas gracias al Vibe Coding e IA.'
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Precios Inmejorables',
      description: 'Webs desde 199€. Automatizaciones desde 99€. Calidad profesional.'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Tech de Vanguardia',
      description: 'Next.js, React, IA. Las mejores tecnologías del momento.'
    }
  ]

  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-fuchsia-50 via-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-fuchsia-100 border border-fuchsia-300 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-fuchsia-600" />
              <span className="text-sm text-fuchsia-700 font-medium">Agencia Tech AI-Native</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Desarrollo Web y Software{' '}
              <span className="gradient-text">a la velocidad de la IA</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Gracias al <span className="text-fuchsia-600 font-semibold">Vibe Coding</span> reducimos costes y tiempos. 
              Tú ahorras, nosotros entregamos en 24 horas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/es/sitios-web"
                className="gradient-bg hover:opacity-90 px-8 py-4 rounded-lg font-semibold text-white transition-all transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Desde 199€</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/es/contacto"
                className="border-2 border-gray-300 hover:border-fuchsia-500 px-8 py-4 rounded-lg font-semibold transition-all text-gray-700 hover:text-fuchsia-600"
              >
                Solicita Presupuesto
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-fuchsia-100 to-pink-100 text-fuchsia-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Nuestros <span className="gradient-text">Servicios</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Soluciones AI-native para hacer crecer tu negocio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} href={service.href}>
                <div className="group bg-white border border-gray-200 rounded-xl p-8 hover:border-fuchsia-300 hover:shadow-lg transition-all hover:transform hover:scale-105 cursor-pointer h-full">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} text-white mb-6`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-fuchsia-600 transition-colors text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center text-fuchsia-600 font-semibold group-hover:translate-x-2 transition-transform">
                    <span>Descubre más</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            ¿Listo para Revolucionar tu Negocio?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contáctanos hoy y recibe tu sitio o automatización en 24 horas.
          </p>
          <Link 
            href="/es/contacto"
            className="inline-flex items-center space-x-2 bg-white text-fuchsia-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            <span>Empieza Ya</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
