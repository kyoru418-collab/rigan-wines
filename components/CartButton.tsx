'use client'

import { useState } from 'react'
import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { useCart } from './CartProvider'
import { formatRWF } from '@/lib/wines'

const WHATSAPP_NUMBER = '250780785521'

export default function CartButton() {
  const { items, removeItem, updateQuantity, clear, totalCount, totalPrice } = useCart()
  const [open, setOpen] = useState(false)

  const message = `Hello, I'd like to order:\n${items
    .map((item) => `- ${item.wine.name} x${item.quantity} (${item.wine.priceLabel} each)`)
    .join('\n')}\n\nTotal: ${formatRWF(totalPrice)}`

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open cart"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#c9a45c] px-5 py-3 text-[11px] font-semibold tracking-[0.16em] text-[#0b0a09] uppercase shadow-lg transition-transform hover:-translate-y-0.5"
      >
        <ShoppingBag className="size-4" />
        Cart
        {totalCount > 0 && (
          <span className="grid size-5 place-items-center rounded-full bg-[#0b0a09] text-[10px] text-[#f8f4eb]">
            {totalCount}
          </span>
        )}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-black/60"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex h-full w-full max-w-sm flex-col bg-[#0b0a09] text-[#f8f4eb] shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-[#c9a45c]/25 px-6 py-5">
              <h2 className="font-serif text-2xl">Your Cart</h2>
              <button onClick={() => setOpen(false)} aria-label="Close cart">
                <X className="size-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <p className="text-sm text-[#f8f4eb]/50">Your cart is empty.</p>
              ) : (
                <ul className="flex flex-col gap-4">
                  {items.map(({ wine, quantity }) => (
                    <li key={wine.slug} className="flex items-center gap-3 border-b border-[#c9a45c]/10 pb-4">
                      <img src={wine.img} alt={wine.name} className="h-16 w-16 rounded-md bg-[#f4ede1] object-contain p-1" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{wine.name}</p>
                        <p className="text-xs text-[#f8f4eb]/50">{wine.priceLabel}</p>
                        <div className="mt-1 flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(wine.slug, quantity - 1)}
                            aria-label={`Decrease ${wine.name} quantity`}
                            className="grid size-6 place-items-center rounded-full border border-[#c9a45c]/30 hover:border-[#c9a45c]"
                          >
                            <Minus className="size-3" />
                          </button>
                          <span className="w-4 text-center text-sm">{quantity}</span>
                          <button
                            onClick={() => updateQuantity(wine.slug, quantity + 1)}
                            aria-label={`Increase ${wine.name} quantity`}
                            className="grid size-6 place-items-center rounded-full border border-[#c9a45c]/30 hover:border-[#c9a45c]"
                          >
                            <Plus className="size-3" />
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(wine.slug)}
                        aria-label={`Remove ${wine.name} from cart`}
                        className="text-xs text-[#f8f4eb]/40 hover:text-[#f8f4eb]"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-[#c9a45c]/25 px-6 py-5">
                <div className="mb-4 flex items-center justify-between text-sm">
                  <span className="text-[#f8f4eb]/60">Total</span>
                  <span className="font-serif text-xl text-[#d6b878]">{formatRWF(totalPrice)}</span>
                </div>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => {
                    clear()
                    setOpen(false)
                  }}
                  className="flex items-center justify-center gap-3 bg-[#25d366] px-6 py-4 text-xs font-bold tracking-[0.16em] text-[#071b0d] uppercase transition-colors hover:bg-[#5bea8e]"
                >
                  Send Order on WhatsApp
                </a>
                <p className="mt-3 text-center text-[9px] tracking-[0.16em] text-[#f8f4eb]/40 uppercase">18+ Only</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
