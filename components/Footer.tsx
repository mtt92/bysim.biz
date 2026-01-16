import Link from 'next/link'
import { Mail, Instagram, Sparkles } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-6 h-6 text-fuchsia-600" />
              <span className="text-xl font-bold gradient-text">bySim</span>
            </div>
            <p className="text-gray-600 text-sm">
              Tech Agency AI-Native. Sviluppo veloce, prezzi imbattibili.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Servizi</h3>
            <ul className="space-y-2">
              <li><Link href="/siti-web" className="text-gray-600 hover:text-fuchsia-600 text-sm">Siti Web</Link></li>
              <li><Link href="/software-ai" className="text-gray-600 hover:text-fuchsia-600 text-sm">Software & AI</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-fuchsia-600 text-sm">Blog</Link></li>
              <li><Link href="/contatti" className="text-gray-600 hover:text-fuchsia-600 text-sm">Contatti</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contatti</h3>
            <div className="space-y-2">
              <a href="mailto:matteo.tech.s@gmail.com" className="text-gray-600 hover:text-fuchsia-600 text-sm block">
                matteo.tech.s@gmail.com
              </a>
              <a href="https://wa.me/393441378445" className="text-gray-600 hover:text-fuchsia-600 text-sm block">
                WhatsApp: +39 344 137 8445
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Seguici</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/bysimai/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-fuchsia-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:matteo.tech.s@gmail.com" className="text-gray-600 hover:text-fuchsia-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 bySim. Tutti i diritti riservati. | P.IVA: IT01234567890
          </p>
        </div>
      </div>
    </footer>
  )
}
