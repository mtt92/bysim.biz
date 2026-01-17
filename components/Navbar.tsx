'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isSpanish = pathname?.startsWith('/es') || false

  // Links based on language
  const links = isSpanish ? [
    { href: '/es', label: 'Inicio' },
    { href: '/es/sitios-web', label: 'Sitios Web' },
    { href: '/es/software-ia', label: 'Software & IA' },
    { href: '/es/blog', label: 'Blog' },
    { href: '/es/contacto', label: 'Contacto' },
  ] : [
    { href: '/', label: 'Home' },
    { href: '/siti-web', label: 'Siti Web' },
    { href: '/software-ai', label: 'Software & AI' },
    { href: '/blog', label: 'Blog' },
    { href: '/contatti', label: 'Contatti' },
  ]

  const ctaText = isSpanish ? 'Empieza Ahora' : 'Inizia Ora'
  const ctaHref = isSpanish ? '/es/contacto' : '/contatti'

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={isSpanish ? '/es' : '/'} className="flex items-center space-x-2 group">
            <Sparkles className="w-6 h-6 text-fuchsia-600 group-hover:text-pink-600 transition-colors" />
            <span className="text-xl font-bold gradient-text">bySim</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-fuchsia-600 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <div className="flex items-center space-x-2 border-l border-gray-300 pl-4">
              <Link
                href="/"
                className={`text-2xl hover:scale-110 transition-transform ${!isSpanish ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                title="Italiano"
              >
                🇮🇹
              </Link>
              <Link
                href="/es"
                className={`text-2xl hover:scale-110 transition-transform ${isSpanish ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                title="Español"
              >
                🇪🇸
              </Link>
            </div>

            <Link
              href={ctaHref}
              className="gradient-bg hover:opacity-90 px-6 py-2 rounded-lg font-semibold text-white transition-all transform hover:scale-105"
            >
              {ctaText}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-700 hover:text-fuchsia-600 transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Language Switcher Mobile */}
            <div className="flex items-center space-x-4 py-2 border-t border-gray-200 mt-2 pt-4">
              <span className="text-sm text-gray-600 font-medium">Idioma:</span>
              <Link
                href="/"
                className={`text-2xl ${!isSpanish ? 'opacity-100' : 'opacity-40'}`}
                onClick={() => setIsOpen(false)}
              >
                🇮🇹
              </Link>
              <Link
                href="/es"
                className={`text-2xl ${isSpanish ? 'opacity-100' : 'opacity-40'}`}
                onClick={() => setIsOpen(false)}
              >
                🇪🇸
              </Link>
            </div>

            <Link
              href={ctaHref}
              className="block text-center gradient-bg px-6 py-2 rounded-lg font-semibold text-white mt-4"
              onClick={() => setIsOpen(false)}
            >
              {ctaText}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}