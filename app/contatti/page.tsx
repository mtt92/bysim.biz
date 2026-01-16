import { Mail, Send, MessageSquare } from 'lucide-react'

export default function ContattiPage() {
  return (
    <div className="pt-16 bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-fuchsia-50 via-pink-50 to-purple-50 py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Parliamone <span className="gradient-text">Insieme</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hai un progetto in mente? Raccontaci la tua idea e trasformiamola in realtà.
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
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Invia un Messaggio</h2>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome e Cognome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 transition-colors"
                      placeholder="Mario Rossi"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 transition-colors"
                      placeholder="mario@esempio.it"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 transition-colors"
                      placeholder="+39 123 456 7890"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Servizio di Interesse
                    </label>
                    <select
                      id="service"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 transition-colors"
                    >
                      <option>Sito Flash (199€)</option>
                      <option>Sito Custom (da 599€)</option>
                      <option>Chatbot Smart (99€)</option>
                      <option>Excel Power (99€)</option>
                      <option>Micro-SaaS Custom</option>
                      <option>Consulenza Generale</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Messaggio *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 transition-colors resize-none"
                      placeholder="Descrivici il tuo progetto o le tue esigenze..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full gradient-bg hover:opacity-90 px-6 py-4 rounded-lg font-semibold text-white transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Invia Richiesta</span>
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    Risponderemo entro 2 ore nei giorni lavorativi
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Informazioni di Contatto</h2>
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
                      <p className="text-sm text-gray-500 mt-1">Risposta garantita in 2 ore</p>
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
                      <p className="text-sm text-gray-500 mt-1">Chat diretta disponibile</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Quick */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Domande Frequenti</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-fuchsia-600 mb-1">Quanto tempo ci vuole?</h4>
                    <p className="text-sm text-gray-600">Sito Flash in 24 ore. Progetti custom: 3-7 giorni.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-fuchsia-600 mb-1">Posso vedere esempi?</h4>
                    <p className="text-sm text-gray-600">Certo! Contattaci e ti mostreremo il nostro portfolio.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-fuchsia-600 mb-1">Offrite manutenzione?</h4>
                    <p className="text-sm text-gray-600">Sì, pacchetti da 49€/mese per assistenza continua.</p>
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
            💡 <strong>Consulenza gratuita di 15 minuti</strong> per ogni nuovo progetto
          </p>
        </div>
      </section>
    </div>
  )
}
