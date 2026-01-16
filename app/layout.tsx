import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppWidget from '@/components/WhatsAppWidget'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'bySim - Tech Agency AI-Native',
  description: 'Sviluppo Web e Software alla velocità dell\'AI. Siti da 199€ in 24 ore.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className={`${inter.className} bg-white text-gray-900`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  )
}
