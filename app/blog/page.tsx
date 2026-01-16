import { Calendar, Clock, ArrowRight, TrendingUp, Sparkles, Rocket } from 'lucide-react'
import Link from 'next/link'

export default function BlogPage() {
  const articles = [
    {
      id: 'ai-risparmio-pmi',
      title: 'Come l\'AI Può Far Risparmiare Migliaia di Euro alle PMI',
      excerpt: 'Scopri come l\'intelligenza artificiale sta rivoluzionando il modo in cui le piccole e medie imprese gestiscono i costi operativi.',
      category: 'Business',
      date: '15 Gen 2025',
      readTime: '5 min',
      icon: <TrendingUp className="w-6 h-6" />,
      gradient: 'from-fuchsia-500 to-pink-600'
    },
    {
      id: 'vibe-coding-futuro',
      title: 'Vibe Coding: Il Futuro dello Sviluppo Software è Già Qui',
      excerpt: 'Il Vibe Coding combina intuizione umana e potenza dell\'AI per sviluppare software 10 volte più velocemente. Ecco come funziona.',
      category: 'Tech',
      date: '12 Gen 2025',
      readTime: '7 min',
      icon: <Sparkles className="w-6 h-6" />,
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      id: '5-automazioni-essenziali',
      title: '5 Automazioni che Ogni Piccola Impresa Dovrebbe Avere',
      excerpt: 'Dalla gestione delle email al customer service, ecco le automazioni che possono liberare ore del tuo tempo ogni settimana.',
      category: 'Automazioni',
      date: '08 Gen 2025',
      readTime: '6 min',
      icon: <Rocket className="w-6 h-6" />,
      gradient: 'from-blue-500 to-purple-500'
    }
  ]

  return (
    <div className="pt-16 bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-fuchsia-50 via-pink-50 to-purple-50 py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Il Nostro <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights, guide e novità sul mondo dell'AI, dello sviluppo web e delle automazioni per il business.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article 
                key={article.id}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-fuchsia-300 hover:shadow-lg transition-all"
              >
                {/* Article Header */}
                <div className={`h-48 bg-gradient-to-br ${article.gradient} flex items-center justify-center`}>
                  <div className="text-white">
                    {article.icon}
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <span className="bg-fuchsia-100 text-fuchsia-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {article.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-fuchsia-600 transition-colors">
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <Link 
                    href={`/blog/${article.id}`}
                    className="inline-flex items-center text-fuchsia-600 font-semibold group-hover:translate-x-2 transition-transform"
                  >
                    <span>Leggi di più</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-white py-20 border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-fuchsia-50 to-pink-50 border border-fuchsia-200 rounded-2xl p-8 md:p-12 text-center">
            <Sparkles className="w-12 h-12 text-fuchsia-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Resta Aggiornato
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Iscriviti alla newsletter per ricevere consigli, guide e novità sul mondo dell'AI applicata al business.
            </p>
            
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="La tua email"
                className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 transition-colors"
              />
              <button
                type="submit"
                className="gradient-bg hover:opacity-90 px-6 py-3 rounded-lg font-semibold text-white transition-all transform hover:scale-105 whitespace-nowrap"
              >
                Iscriviti
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">
            Esplora per <span className="gradient-text">Categoria</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['Tutti', 'Business', 'Tech', 'Automazioni', 'AI', 'Guide', 'Case Study'].map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  index === 0
                    ? 'gradient-bg text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300 hover:border-fuchsia-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
