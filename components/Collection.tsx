'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, X } from 'lucide-react'
import { wines, type Wine } from '@/lib/wines'
import { useCart } from './CartProvider'

const WHATSAPP_NUMBER = '250780785521'

export default function Collection() {
  const collectionRef = useRef<HTMLDivElement>(null)
  const [selected, setSelected] = useState<Wine | null>(null)
  const { addItem } = useCart()

  const scrollCollection = (direction: 'left' | 'right') => {
    collectionRef.current?.scrollBy({ left: direction === 'left' ? -360 : 360, behavior: 'smooth' })
  }

  return (
    <section id="collection" className="border-y border-[#c9a45c]/20 bg-[#0b0a09] px-6 py-16 text-[#f8f4eb] sm:px-10 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 flex items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-[10px] font-medium tracking-[0.25em] text-[#c9a45c] uppercase">Cantine Birgi</p>
            <h2 className="font-serif text-4xl tracking-[-0.04em] sm:text-5xl">The collection</h2>
          </div>
          <div className="hidden gap-2 sm:flex lg:hidden">
            <button onClick={() => scrollCollection('left')} aria-label="Previous wines" className="grid size-11 place-items-center rounded-full border border-[#c9a45c]/40 text-[#f8f4eb] transition-colors hover:border-[#c9a45c] hover:text-[#c9a45c]"><ArrowLeft className="size-4" /></button>
            <button onClick={() => scrollCollection('right')} aria-label="Next wines" className="grid size-11 place-items-center rounded-full border border-[#c9a45c]/40 text-[#f8f4eb] transition-colors hover:border-[#c9a45c] hover:text-[#c9a45c]"><ArrowRight className="size-4" /></button>
          </div>
        </div>

        <div ref={collectionRef} className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 scrollbar-none sm:-mx-10 sm:px-10 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-5 lg:overflow-visible lg:px-0">
          {wines.map((wine, index) => (
            <motion.button
              key={wine.slug}
              type="button"
              onClick={() => setSelected(wine)}
              initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: index * 0.05, duration: 0.55 }} whileHover={{ y: -6 }}
              className="group min-w-[78vw] snap-start overflow-hidden rounded-[1.4rem] border border-[#c9a45c]/15 bg-[#151210] p-3 text-left transition-colors duration-300 hover:border-[#c9a45c]/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9a45c] sm:min-w-[300px] lg:min-w-0"
            >
              <div className="relative flex h-[340px] items-center justify-center overflow-hidden rounded-[1rem] bg-[#f4ede1]">
                <img src={wine.img} alt={`${wine.name} bottle`} className="relative h-[88%] w-auto object-contain transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-[#0b0a09]/80 px-3 py-1 text-[9px] font-medium tracking-[0.16em] text-[#f8f4eb] uppercase backdrop-blur-sm">0{index + 1}</span>
              </div>
              <div className="flex items-start justify-between gap-4 px-2 pb-2 pt-5">
                <div><h3 className="font-serif text-2xl tracking-[-0.04em]">{wine.name}</h3><p className="mt-1 text-[11px] leading-5 text-[#f8f4eb]/55">{wine.type}</p></div>
                <p className="pt-1 text-sm font-medium text-[#d6b878]">{wine.priceLabel}</p>
              </div>
            </motion.button>
          ))}
        </div>
        <p className="mt-5 text-center text-[10px] tracking-[0.18em] text-[#f8f4eb]/45 uppercase lg:hidden">Swipe to explore</p>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-[#c9a45c]/25 bg-[#0b0a09] text-[#f8f4eb] sm:flex-row"
          >
            <button
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 grid size-9 place-items-center rounded-full bg-[#0b0a09]/80 text-[#f8f4eb] sm:right-6 sm:top-6"
            >
              <X className="size-4" />
            </button>

            <div className="flex h-72 items-center justify-center bg-[#f4ede1] p-8 sm:h-auto sm:w-1/2">
              <img src={selected.img} alt={`${selected.name} bottle`} className="h-full w-auto object-contain" />
            </div>

            <div className="flex w-full flex-col justify-center gap-5 p-8 sm:w-1/2 sm:p-10">
              <p className="text-[10px] font-medium tracking-[0.25em] text-[#c9a45c] uppercase">{selected.type}</p>
              <h3 className="font-serif text-3xl tracking-[-0.03em]">{selected.name}</h3>
              <p className="text-sm leading-6 text-[#f8f4eb]/65">{selected.description}</p>
              <p className="font-serif text-2xl text-[#d6b878]">{selected.priceLabel}</p>

              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => addItem(selected)}
                  className="flex-1 border border-[#c9a45c] px-6 py-3 text-[10px] font-medium tracking-[0.2em] uppercase transition-colors hover:bg-[#c9a45c] hover:text-[#0b0a09]"
                >
                  Add to Cart
                </button>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello, I'd like to order ${selected.name} (${selected.priceLabel}).`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-[#25d366] px-6 py-3 text-center text-[10px] font-bold tracking-[0.2em] text-[#071b0d] uppercase transition-colors hover:bg-[#5bea8e]"
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .scrollbar-none { scrollbar-width: none; }
        .scrollbar-none::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  )
}
