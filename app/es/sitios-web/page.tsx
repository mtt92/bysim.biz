import PriceCard from '@/components/PriceCard'
import { Clock, MessageSquare, Rocket, Sparkles, CheckCircle2 } from 'lucide-react'

export default function SitiosWebES() {
  const processSteps = [
    {
      number: '01',
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Nos Contactas',
      description: 'Una llamada o mensaje para entender tus necesidades.'
    },
    {
      number: '02',
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Borrador en 2h',
      description: 'Recibes un primer borrador de tu sitio en solo 2 horas.'
    },
    {
      number: '03',
      icon: <Rocket className="w-8 h-8" />,
      title: 'Online en 24h',
      description: 'Tu sitio está live y listo para captar clientes.'
    }
  ]

  return (
    <div className="pt-16 bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-fuchsia-50 via-pink-50 to-purple-50 py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-fuchsia-100 border border-fuchsia-300 rounded-full px-4 py-2 mb-6">
            <Clock className="w-4 h-4 text-fuchsia-600" />
            <span className="text-sm text-fuchsia-700 font-medium">Entrega en 24 horas</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Sitios Web Profesionales{' '}
            <span className="gradient-text">a Precios Accesibles</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Gracias al Vibe Coding y la IA creamos sitios web modernos y eficientes 
            en tiempo récord, sin comprometer la calidad.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Elige la <span className="gradient-text">Solución Perfecta</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Precios transparentes, sin costes ocultos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <PriceCard
              title="Sitio Flash"
              price="199€"
              priceDetail="pago único"
              description="Perfecto para pequeños negocios que quieren presencia online rápida y efectiva."
              features={[
                'Entrega en 24 horas garantizada',
                'Página única (Landing Page)',
                'Diseño moderno y responsive',
                'Optimizado para móvil',
                'Formulario de contacto funcional',
                'Hosting incluido por 1 año',
                '1 revisión incluida'
              ]}
              ctaText="Pedir Sitio Flash"
              ctaHref="/es/contacto"
            />

            <PriceCard
              title="Sitio Personalizado"
              price="desde 599€"
              priceDetail=""
              description="Para quien quiere un sitio a medida con funcionalidades avanzadas y SEO optimizado."
              features={[
                'Hasta 10 páginas',
                'Diseño 100% personalizado',
                'SEO avanzado y optimización',
                'Blog integrado (opcional)',
                'Formularios de contacto avanzados',
                'Integración Analytics',
                'Asistencia y mantenimiento',
                'Revisiones ilimitadas'
              ]}
              highlighted={true}
              ctaText="Solicita Presupuesto"
              ctaHref="/es/contacto"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-20 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Nuestro <span className="gradient-text">Proceso</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Simple, rápido, eficaz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-fuchsia-100 to-pink-100 text-fuchsia-600 mb-6">
                    {step.icon}
                  </div>
                  <div className="text-6xl font-bold text-gray-200 mb-4">{step.number}</div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-fuchsia-300 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
              Qué Incluye <span className="gradient-text">Cada Sitio</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Diseño responsive en todos los dispositivos',
                'Velocidad de carga optimizada',
                'Seguridad SSL certificada',
                'Panel de gestión intuitivo',
                'Integración redes sociales',
                'Formulario de contacto con anti-spam',
                'Política de cookies GDPR compliant',
                'Soporte técnico dedicado'
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-fuchsia-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}