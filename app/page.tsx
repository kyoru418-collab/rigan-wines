import Hero from '@/components/Hero'
import FeaturedWine from '@/components/FeaturedWine'
import Collection from '@/components/Collection'
import OrderSection from '@/components/OrderSection'
import { CartProvider } from '@/components/CartProvider'
import CartButton from '@/components/CartButton'

export default function Home() {
  return (
    <CartProvider>
      <main className="bg-black text-white">
        <Hero />
        <FeaturedWine />
        <Collection />
        <OrderSection />
        <footer className="bg-black border-t border-yellow-700 py-8 text-center text-sm text-gray-400">
          © 2026 Rigan Business Company Ltd. All rights reserved.
        </footer>
      </main>
      <CartButton />
    </CartProvider>
  )
}
