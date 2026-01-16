import { Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface PriceCardProps {
  title: string
  price: string
  priceDetail?: string
  description: string
  features: string[]
  highlighted?: boolean
  ctaText?: string
  ctaHref?: string
}

export default function PriceCard({
  title,
  price,
  priceDetail,
  description,
  features,
  highlighted = false,
  ctaText = 'Ordina Ora',
  ctaHref = '/contatti'
}: PriceCardProps) {
  return (
    <div className={`relative bg-white border rounded-xl p-8 transition-all hover:transform hover:scale-105 ${
      highlighted 
        ? 'border-fuchsia-400 shadow-lg shadow-fuchsia-200' 
        : 'border-gray-200 hover:border-fuchsia-300 hover:shadow-lg'
    }`}>
      {highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="gradient-bg px-4 py-1 rounded-full text-sm font-semibold text-white">
            Più Popolare
          </span>
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2 text-gray-900">{title}</h3>
        <div className="flex items-baseline mb-2">
          <span className="text-4xl font-bold gradient-text">{price}</span>
          {priceDetail && <span className="text-gray-500 ml-2">{priceDetail}</span>}
        </div>
        <p className="text-gray-600">{description}</p>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="w-5 h-5 text-fuchsia-600 mr-3 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <Link 
        href={ctaHref}
        className={`block w-full text-center py-3 rounded-lg font-semibold transition-all group ${
          highlighted
            ? 'gradient-bg text-white hover:opacity-90'
            : 'border-2 border-gray-300 hover:border-fuchsia-500 text-gray-700 hover:text-fuchsia-600'
        }`}
      >
        <span className="flex items-center justify-center">
          {ctaText}
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </span>
      </Link>
    </div>
  )
}
