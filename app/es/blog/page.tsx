import Link from 'next/link'
import { ArrowRight, TrendingUp, Sparkles, Rocket } from 'lucide-react'

export default function BlogES() {
  const articles = [
    {
      id: 'ai-ahorro-pyme',
      title: 'Cómo la IA Puede Ahorrar Miles de Euros a las PYMEs',
      excerpt: 'Descubre 5 formas concretas en las que la Inteligencia Artificial puede reducir costes operativos en pequeñas empresas.',
      category: 'IA',
      date: '15 Ene 2025',
      readTime: '8 min',
      icon: <TrendingUp className="w-6 h-6" />,
      gradient: 'from-fuchsia-500 to-pink-600',
      href: '/blog/ai-risparmio-pmi' // Link versión italiana por ahora
    },
    {
      id: 'vibe-coding',
      title: 'Vibe Coding: El Futuro del Desarrollo de Software Ya Está Aquí',
      excerpt: 'La metodología revolucionaria que permite crear software 10 veces más rápido gracias a la IA.',
      category: 'Tech',
      date: '12 Ene 2025',
      readTime: '10 min',
      icon: <Sparkles className="w-6 h-6" />,
      gradient: 'from-purple-500 to-pink-600',
      href: '/blog/vibe-coding-futuro'
    },
    {
      id: '5-automatizaciones',
      title: '5 Automatizaciones Esenciales para Cada Pequeña Empresa',
      excerpt: 'Chatbots, emails automáticos, gestión de citas y más. Las automatizaciones que te harán ahorrar tiempo.',
      category: 'Automatizaciones',
      date: '10 Ene 2025',
      readTime: '12 min',
      icon: <Rocket className="w-6 h-6" />,
      gradient: 'from-pink-600 to-fuchsia-600',
      href: '/blog/5-automazioni-essenziali'
    }
  ]

  return (
    <div className="pt-16 bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-fuchsia-50 via-pink-50 to-purple-50 py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Blog <span className="gradient-text">bySim</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Guías, tutoriales y consejos sobre IA, desarrollo web y automatización para pequeñas empresas.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link key={article.id} href={article.href}>
                <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-fuchsia-300 hover:shadow-xl transition-all cursor-pointer h-full">
                  <div className={`h-48 bg-gradient-to-br ${article.gradient} flex items-center justify-center`}>
                    <div className="text-white">
                      {article.icon}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="bg-fuchsia-100 text-fuchsia-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {article.category}
                      </span>
                      <span className="text-sm text-gray-500">{article.date}</span>
                      <span className="text-sm text-gray-500">• {article.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-fuchsia-600 transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center text-fuchsia-600 font-semibold group-hover:translate-x-2 transition-transform">
                      <span>Leer más</span>
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-white py-20 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Suscríbete a Nuestra <span className="gradient-text">Newsletter</span>
          </h2>
          <p className="text-gray-600 mb-8">
            Recibe cada semana consejos, tutoriales y novedades sobre IA y automatización.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="tu@email.com" 
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200"
            />
            <button className="gradient-bg hover:opacity-90 px-6 py-3 rounded-lg font-semibold text-white transition-all">
              Suscribirse
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}