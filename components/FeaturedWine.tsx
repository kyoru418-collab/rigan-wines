'use client'

import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { wines } from '@/lib/wines'
import { useCart } from './CartProvider'

export default function FeaturedWine() {
  const [index, setIndex] = useState(0)
  const { addItem } = useCart()
  const wine = wines[index]

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % wines.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const go = (direction: 'prev' | 'next') => {
    setIndex((i) => (direction === 'next' ? (i + 1) % wines.length : (i - 1 + wines.length) % wines.length))
  }

  return (
    <section className="mx-auto flex min-h-screen max-w-[1600px] flex-col overflow-hidden bg-[#0b0a09] text-[#f8f4eb] lg:flex-row">
      <div className="group relative flex min-h-[62vh] w-full items-center justify-center overflow-hidden bg-[#151210] lg:min-h-screen lg:w-[70%]">
        <img
          key={wine.slug}
          src={wine.img}
          alt={`${wine.name}, ${wine.type}`}
          className="h-[80%] w-auto object-contain transition-transform duration-1000 ease-out group-hover:scale-[1.035]"
        />
        <p className="absolute bottom-6 left-6 text-[10px] font-medium tracking-[0.3em] text-[#f8f4eb]/60 uppercase sm:bottom-10 sm:left-10">
          {String(index + 1).padStart(2, '0')} / {String(wines.length).padStart(2, '0')} · Sicilia, Italia
        </p>
        <div className="absolute bottom-6 right-6 flex gap-2 sm:bottom-10 sm:right-10">
          <button onClick={() => go('prev')} aria-label="Previous featured wine" className="grid size-9 place-items-center rounded-full border border-[#c9a45c]/40 text-[#f8f4eb] transition-colors hover:border-[#c9a45c] hover:text-[#c9a45c]"><ArrowLeft className="size-4" /></button>
          <button onClick={() => go('next')} aria-label="Next featured wine" className="grid size-9 place-items-center rounded-full border border-[#c9a45c]/40 text-[#f8f4eb] transition-colors hover:border-[#c9a45c] hover:text-[#c9a45c]"><ArrowRight className="size-4" /></button>
        </div>
      </div>

      <div className="flex w-full flex-col justify-between px-7 py-10 sm:px-12 sm:py-14 lg:w-[30%] lg:px-12 lg:py-16 xl:px-16">
        <header className="flex items-center text-[10px] font-medium tracking-[0.28em] text-[#f8f4eb]/50 uppercase">
          <span>Rigan</span>
        </header>

        <div className="flex max-w-sm flex-col gap-7 py-16 lg:py-24">
          <p className="flex items-center gap-3 text-[10px] font-medium tracking-[0.25em] text-[#c9a45c] uppercase">
            <span className="h-px w-8 bg-[#c9a45c]" />
            Cantine Birgi · Featured
          </p>
          <h1 className="font-serif text-5xl leading-[0.95] tracking-[-0.04em] text-balance sm:text-6xl xl:text-7xl">
            {wine.name}
          </h1>
          <p className="max-w-xs text-sm leading-6 text-[#f8f4eb]/65">
            {wine.description}
          </p>

          <div className="flex items-end justify-between border-t border-[#c9a45c]/25 pt-6">
            <div>
              <p className="mb-1 text-[10px] tracking-[0.2em] text-[#f8f4eb]/50 uppercase">{wine.type}</p>
              <p className="font-serif text-3xl text-[#d6b878]">{wine.priceLabel}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => addItem(wine)}
              className="inline-flex items-center gap-3 border border-[#c9a45c] px-6 py-4 text-[10px] font-medium tracking-[0.2em] text-[#f8f4eb] uppercase transition-colors duration-500 hover:bg-[#c9a45c] hover:text-[#0b0a09]"
            >
              Add to Cart
            </button>
            <a
              href="#order"
              className="group/order inline-flex items-center gap-8 bg-[#c9a45c] px-7 py-4 text-[10px] font-medium tracking-[0.24em] text-[#0b0a09] uppercase transition-colors duration-500 hover:bg-[#d6b878] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6b878]"
            >
              Order Now
              <span aria-hidden="true" className="text-base leading-none transition-transform duration-300 group-hover/order:translate-x-1">→</span>
            </a>
          </div>
        </div>

        <footer className="flex items-center justify-between border-t border-[#c9a45c]/25 pt-5 text-[9px] tracking-[0.2em] text-[#f8f4eb]/45 uppercase">
          <span>Fine Italian wines</span>
          <span>Scroll to explore</span>
        </footer>
      </div>
    </section>
  )
}
