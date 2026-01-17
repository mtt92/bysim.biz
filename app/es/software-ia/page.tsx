import PriceCard from '@/components/PriceCard'
import { Code, Bot, Zap, Sparkles, CheckCircle2, Brain, Rocket } from 'lucide-react'

export default function SoftwareIAES() {
  const services = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'Chatbot Inteligente',
      price: '99€',
      description: 'Chatbot con IA para tu web que responde 24/7 a tus clientes.',
      features: [
        'Entrenado con tus datos',
        'Integración WhatsApp/Web',
        'Respuestas personalizadas',
        'Panel de control incluido'
      ]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Automatización Excel/Scripts',
      price: '99€',
      description: 'Scripts y automatizaciones que te ahorran horas de trabajo manual.',
      features: [
        'Macros Excel avanzadas',
        'Scripts Python/JavaScript',
        'Automatización tareas repetitivas',
        'Documentación completa'
      ]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Micro-SaaS Personalizado',
      price: 'Presupuesto',
      description: 'Software completo a medida con IA integrada para tu negocio.',
      features: [
        'Desarrollo 100% personalizado',
        'Integración APIs e IA',
        'Panel de administración',
        'Mantenimiento incluido'
      ]
    }
  ]

  return (
    <div className="pt-16 bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-fuchsia-50 via-pink-50 to-purple-50 py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-fuchsia-100 border border-fuchsia-300 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-fuchsia-600" />
            <span className="text-sm text-fuchsia-700 font-medium">Potenciado por IA</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Software e{' '}
            <span className="gradient-text">Inteligencia Artificial</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Chatbots inteligentes, automatizaciones y software personalizado 
            que transforman tu negocio con el poder de la IA.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Nuestras <span className="gradient-text">Soluciones IA</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Tecnología de vanguardia a precios accesibles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-fuchsia-300 hover:shadow-lg transition-all">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-fuchsia-100 to-pink-100 text-fuchsia-600 mb-6">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{service.title}</h3>
                <div className="text-3xl font-bold text-fuchsia-600 mb-4">{service.price}</div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-fuchsia-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-white py-20 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Casos de <span className="gradient-text">Uso Reales</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-fuchsia-50 to-pink-50 border border-fuchsia-200 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Bot className="w-8 h-8 text-fuchsia-600" />
                <h3 className="text-xl font-bold text-gray-900">Chatbot Restaurante</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Chatbot que gestiona reservas 24/7, responde sobre el menú y procesa pedidos automáticamente.
              </p>
              <div className="bg-white/50 rounded-lg p-4">
                <p className="text-sm text-gray-600">
                  <strong className="text-fuchsia-600">Resultado:</strong> -80% de llamadas telefónicas, 
                  +40% reservas online
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 border border-purple-200 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
                <h3 className="text-xl font-bold text-gray-900">Automatización E-commerce</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Script que sincroniza inventario, procesa pedidos y envía facturas automáticamente.
              </p>
              <div className="bg-white/50 rounded-lg p-4">
                <p className="text-sm text-gray-600">
                  <strong className="text-purple-600">Resultado:</strong> 15 horas/semana ahorradas, 
                  cero errores manuales
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-fuchsia-50 border border-pink-200 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Brain className="w-8 h-8 text-pink-600" />
                <h3 className="text-xl font-bold text-gray-900">Asistente IA Inmobiliaria</h3>
              </div>
              <p className="text-gray-700 mb-4">
                IA que cualifica leads, envía propiedades personalizadas y agenda visitas.
              </p>
              <div className="bg-white/50 rounded-lg p-4">
                <p className="text-sm text-gray-600">
                  <strong className="text-pink-600">Resultado:</strong> +60% conversión de leads, 
                  respuesta instantánea
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-fuchsia-50 to-purple-50 border border-fuchsia-200 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Rocket className="w-8 h-8 text-fuchsia-600" />
                <h3 className="text-xl font-bold text-gray-900">Dashboard Analytics</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Panel personalizado que recopila datos de múltiples fuentes y genera informes automáticos.
              </p>
              <div className="bg-white/50 rounded-lg p-4">
                <p className="text-sm text-gray-600">
                  <strong className="text-fuchsia-600">Resultado:</strong> Decisiones basadas en datos, 
                  -5h/semana en informes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Precios <span className="gradient-text">Transparentes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PriceCard
              title="Chatbot Smart"
              price="99€"
              priceDetail="configuración única"
              description="Chatbot básico con IA para tu web, listo en 24h."
              features={[
                'Hasta 100 conversaciones/mes',
                'Entrenado con tu contenido',
                'Integración web',
                'Panel de control básico',
                '1 revisión incluida'
              ]}
              ctaText="Solicitar Chatbot"
              ctaHref="/es/contacto"
            />

            <PriceCard
              title="Excel Power"
              price="99€"
              priceDetail="por automatización"
              description="Scripts y macros que automatizan tareas repetitivas."
              features={[
                'Automatización Excel/Google Sheets',
                'Scripts Python o JavaScript',
                'Documentación completa',
                'Soporte 30 días',
                'Revisiones ilimitadas'
              ]}
              ctaText="Automatizar Ahora"
              ctaHref="/es/contacto"
            />

            <PriceCard
              title="Micro-SaaS"
              price="Presupuesto"
              priceDetail=""
              description="Software personalizado completo con IA y automatizaciones."
              features={[
                'Desarrollo 100% a medida',
                'IA y automatizaciones avanzadas',
                'Base de datos y backend',
                'Panel de administración',
                'Mantenimiento incluido 3 meses',
                'Soporte prioritario'
              ]}
              highlighted={true}
              ctaText="Solicita Presupuesto"
              ctaHref="/es/contacto"
            />
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-white py-20 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            Tecnologías que <span className="gradient-text">Usamos</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {['Python', 'OpenAI', 'Node.js', 'React', 'TensorFlow', 'PostgreSQL', 'AWS', 'Docker'].map((tech) => (
              <div key={tech} className="bg-gray-100 hover:bg-fuchsia-50 px-6 py-3 rounded-lg font-semibold text-gray-700 hover:text-fuchsia-600 transition-colors">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-bg py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            ¿Listo para Automatizar tu Negocio?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Cuéntanos qué necesitas y te preparamos una solución en 24-48 horas.
          </p>
          <a 
            href="/es/contacto"
            className="inline-block bg-white text-fuchsia-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            Habla con Nosotros
          </a>
        </div>
      </section>
    </div>
  )
}