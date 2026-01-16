'use client'

import { MessageCircle, X } from 'lucide-react'
import { useState } from 'react'

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const phoneNumber = '393441378445' // Numero WhatsApp bySim
  const message = 'Ciao! Sono interessato ai vostri servizi.'

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <>
      {/* Bubble principale */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={openWhatsApp}
          className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all transform hover:scale-110 flex items-center space-x-2"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="hidden group-hover:inline-block font-semibold pr-2">
            Chatta con noi
          </span>
        </button>
      </div>
    </>
  )
}
