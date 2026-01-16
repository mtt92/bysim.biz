import PriceCard from '@/components/PriceCard'
import { Clock, MessageSquare, Rocket, Sparkles, CheckCircle2 } from 'lucide-react'

export default function SitiWebPage() {
  const processSteps = [
    {
      number: '01',
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Ci Senti',
      description: 'Una chiamata o un messaggio per capire le tue esigenze.'
    },
    {
      number: '02',
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Bozza in 2h',
      description: 'Ricevi una prima bozza del tuo sito in sole 2 ore.'
    },
    {
      number: '03',
      icon: <Rocket className="w-8 h-8" />,
      title: 'Online in 24h',
      description: 'Il tuo sito è live e pronto per acquisire clienti.'
    }
  ]

  return (
    <div className="pt-16 bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-fuchsia-50 via-pink-50 to-purple-50 py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-fuchsia-100 border border-fuchsia-300 rounded-full px-4 py-2 mb-6">
            <Clock className="w-4 h-4 text-fuchsia-600" />
            <span className="text-sm text-fuchsia-700 font-medium">Consegna in 24 ore</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Siti Web Professionali{' '}
            <span className="gradient-text">a Prezzi Accessibili</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Grazie al Vibe Coding e all'AI creiamo siti web moderni e performanti 
            in tempi record, senza compromettere la qualità.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Scegli la <span className="gradient-text">Soluzione Perfetta</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Prezzi trasparenti, nessun costo nascosto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <PriceCard
              title="Sito Flash"
              price="199€"
              priceDetail="una tantum"
              description="Perfetto per piccole attività che vogliono una presenza online rapida ed efficace."
              features={[
                'Consegna in 24 ore garantita',
                'Pagina unica (Landing Page)',
                'Design moderno e responsive',
                'Ottimizzato per mobile',
                'Modulo contatti funzionante',
                'Hosting incluso per 1 anno',
                '1 revisione inclusa'
              ]}
              ctaText="Ordina Sito Flash"
            />

            <PriceCard
              title="Sito Custom"
              price="da 599€"
              priceDetail=""
              description="Per chi vuole un sito su misura con funzionalità avanzate e SEO ottimizzato."
              features={[
                'Fino a 10 pagine',
                'Design 100% personalizzato',
                'SEO avanzata e ottimizzazione',
                'Blog integrato (opzionale)',
                'Form contatti avanzati',
                'Integrazione Analytics',
                'Assistenza e manutenzione',
                'Revisioni illimitate'
              ]}
              highlighted={true}
              ctaText="Richiedi Preventivo"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-20 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Il Nostro <span className="gradient-text">Processo</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Semplice, veloce, efficace
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
                
                {/* Connector Line */}
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
              Cosa Include <span className="gradient-text">Ogni Sito</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Design responsive su tutti i dispositivi',
                'Velocità di caricamento ottimizzata',
                'Sicurezza SSL certificata',
                'Pannello di gestione intuitivo',
                'Integrazione social media',
                'Form contatti con anti-spam',
                'Cookie policy GDPR compliant',
                'Supporto tecnico dedicato'
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
