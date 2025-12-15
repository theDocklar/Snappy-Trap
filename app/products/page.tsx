'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import ProductsHero from '@/components/ProductsHero'
import ProductGrid from '@/components/ProductGrid'
import FAQ from '@/components/FAQ'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

// Product data - these would typically come from a CMS or API
const bathroomProducts = [
  {
    id: '1',
    name: 'Bathroom Sink Drain Kit',
    description: [
      'All-In-One Drain Kit',
      'Use for all sink types',
    ],
    price: '$17.36',
    reviews: '(1234 Reviews)',
    image: '/images/image13.png',
    itemNumber: 'Item DK-105',
  },
]

const kitchenProducts = [
  {
    id: '2',
    name: 'Single bowl Kitchen Sink',
    description: [
      'Single bowl Kitchen Sink',
      'All-In-One Drain Kit',
      'Connects with dishwashers and garbage disposals',
    ],
    price: '$19.98',
    reviews: '(1234 Reviews)',
    image: '/images/image19.png',
    itemNumber: 'Item DK-100',
  },
  {
    id: '3',
    name: 'Double bowl Kitchen Sink',
    description: [
      'Double bowl Kitchen Sink',
      'All-In-One Drain Kit',
      'Connects with dishwashers and garbage disposals',
    ],
    price: '$32.60',
    reviews: '(1234 Reviews)',
    image: '/images/image9.png',
    itemNumber: 'Item DK-110',
  },
  {
    id: '4',
    name: 'Double Bowl Kitchen Sink',
    description: [
      'Double Bowl Kitchen Sink',
      'Special Kit for limited vertical space',
      'Connects with garbage disposal',
    ],
    price: '$31.44',
    reviews: '(1234 Reviews)',
    image: '/images/image9.png',
    itemNumber: 'Item DK-120',
  },
]

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState<'Bathroom' | 'Kitchen'>('Bathroom')

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section with Filters */}
      <ProductsHero activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      {/* Show products based on active filter */}
      {activeFilter === 'Bathroom' && (
        <ProductGrid title="Bathroom Sink Drain Kits" products={bathroomProducts} />
      )}

      {activeFilter === 'Kitchen' && (
        <ProductGrid title="Kitchen Sink Drain Kits" products={kitchenProducts} />
      )}

      {/* FAQ Section */}
      <FAQ />

      {/* Newsletter Section */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </main>
  )
}

