import PriceCard from '@/components/PriceCard'
import { Bot, FileSpreadsheet, Lightbulb, Sparkles, Code2, Zap } from 'lucide-react'

export default function SoftwareAIPage() {
  return (
    <div className="pt-16 bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-50 via-fuchsia-50 to-pink-50 py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-purple-100 border border-purple-300 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-purple-700 font-medium">AI-Powered Development</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Software & Automazioni{' '}
            <span className="gradient-text">con l'Intelligenza Artificiale</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Creiamo soluzioni software personalizzate utilizzando il <strong className="text-fuchsia-600">Vibe Coding</strong> e 
            l'AI per automatizzare processi, risparmiare tempo e aumentare la produttività.
          </p>
        </div>
      </section>

      {/* What is Vibe Coding */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <Code2 className="w-16 h-16 text-fuchsia-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Cos'è il <span className="gradient-text">Vibe Coding</span>?
              </h2>
            </div>
            
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Il <strong>Vibe Coding</strong> è il nostro approccio rivoluzionario allo sviluppo software. 
              Combiniamo l'intuizione umana con la potenza dell'Intelligenza Artificiale per scrivere 
              codice di qualità a velocità impensabili fino a poco tempo fa.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                <Zap className="w-10 h-10 text-yellow-600 mx-auto mb-3" />
                <h3 className="font-bold mb-2 text-gray-900">10x Più Veloce</h3>
                <p className="text-gray-600 text-sm">Sviluppo accelerato senza compromessi sulla qualità</p>
              </div>
              <div className="text-center bg-purple-50 p-6 rounded-xl border border-purple-200">
                <Sparkles className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                <h3 className="font-bold mb-2 text-gray-900">AI-Assisted</h3>
                <p className="text-gray-600 text-sm">L'AI suggerisce, l'umano decide e perfeziona</p>
              </div>
              <div className="text-center bg-fuchsia-50 p-6 rounded-xl border border-fuchsia-200">
                <Code2 className="w-10 h-10 text-fuchsia-600 mx-auto mb-3" />
                <h3 className="font-bold mb-2 text-gray-900">Codice Pulito</h3>
                <p className="text-gray-600 text-sm">Standard professionali, manutenibile e scalabile</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-white py-20 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Le Nostre <span className="gradient-text">Soluzioni</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Automazioni pronte all'uso e software su misura
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PriceCard
              title="Chatbot Smart"
              price="99€"
              priceDetail="+ 19€/mese"
              description="Risponditore automatico intelligente per WhatsApp e Instagram."
              features={[
                'Risposte automatiche 24/7',
                'Integrazione WhatsApp Business',
                'Integrazione Instagram DM',
                'Risposte personalizzate',
                'Report mensili',
                'Setup e configurazione inclusi'
              ]}
              ctaText="Attiva Chatbot"
            />

            <PriceCard
              title="Excel Power"
              price="99€"
              priceDetail="una tantum"
              description="Script personalizzati per automatizzare i tuoi fogli di calcolo."
              features={[
                'Automazioni su misura',
                'Calcoli complessi automatici',
                'Generazione report automatica',
                'Integrazione dati esterni',
                'Interfaccia user-friendly',
                'Supporto e formazione'
              ]}
              ctaText="Ordina Script"
            />

            <PriceCard
              title="Micro-SaaS & Tools"
              price="Su Preventivo"
              description="Creiamo il software perfetto per le tue esigenze specifiche."
              features={[
                'Analisi requisiti dettagliata',
                'Sviluppo completamente custom',
                'Dashboard amministrativa',
                'Integrazione API esterne',
                'Deploy e hosting gestito',
                'Manutenzione e aggiornamenti',
                'Scalabilità garantita'
              ]}
              highlighted={true}
              ctaText="Richiedi Consulenza"
            />
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Esempi di <span className="gradient-text">Applicazioni</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Cosa possiamo creare per te
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Bot className="w-8 h-8" />,
                title: 'Chatbot Personalizzati',
                description: 'Assistenti virtuali che parlano come il tuo brand'
              },
              {
                icon: <FileSpreadsheet className="w-8 h-8" />,
                title: 'Automazioni Excel/Sheets',
                description: 'Addio al lavoro manuale ripetitivo'
              },
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: 'CRM Semplificati',
                description: 'Gestisci i tuoi clienti senza complessità'
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Tool di Produttività',
                description: 'Software che semplificano i tuoi processi'
              },
              {
                icon: <Code2 className="w-8 h-8" />,
                title: 'Integrazioni API',
                description: 'Collega i tuoi strumenti preferiti'
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: 'Dashboard Analytics',
                description: 'Visualizza i tuoi dati in tempo reale'
              }
            ].map((useCase, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-fuchsia-300 hover:shadow-lg transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-fuchsia-100 to-pink-100 text-fuchsia-600 mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-bg py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Hai un'Idea da Realizzare?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Parliamone! Trasformiamo la tua visione in realtà con il potere dell'AI.
          </p>
          <a 
            href="/contatti"
            className="inline-flex items-center space-x-2 bg-white text-fuchsia-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            <span>Richiedi Consulenza Gratuita</span>
          </a>
        </div>
      </section>
    </div>
  )
}
