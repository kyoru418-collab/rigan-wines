"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    let frame = 0

    const updateParallax = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => setOffset(window.scrollY * 0.12))
    }

    window.addEventListener("scroll", updateParallax, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", updateParallax)
    }
  }, [])

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0b0a09] px-6 py-20 text-[#f8f4eb] sm:px-10 lg:px-20">
      <div
        aria-hidden="true"
        className="absolute inset-0 scale-[1.08] bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: "url(/wine-cellar-hero.png)",
          transform: `translate3d(0, ${offset}px, 0)`,
        }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,7,6,0.94)_0%,rgba(8,7,6,0.72)_38%,rgba(8,7,6,0.2)_78%,rgba(8,7,6,0.48)_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(0deg,rgba(8,7,6,0.7)_0%,transparent_35%,rgba(8,7,6,0.25)_100%)]" />

      <div className="relative z-10 flex w-full max-w-7xl flex-col items-start justify-center gap-10 py-12 sm:gap-14 lg:min-h-[78vh] lg:py-20">
        <div className="max-w-3xl animate-[fade-up_1s_ease-out_both]">
          <p className="mb-7 flex items-center gap-3 text-[10px] font-medium tracking-[0.35em] text-[#c9a45c] uppercase sm:text-xs">
            <span className="h-px w-10 bg-[#c9a45c]" />
            Sicilia
          </p>
          <h1 className="max-w-3xl font-serif text-5xl leading-[0.94] tracking-[-0.035em] text-balance sm:text-7xl lg:text-[7.5rem]">
            RIGAN BUSINESS
            <span className="block italic text-[#d6b878]">COMPANY LTD</span>
          </h1>
        </div>

        <div className="max-w-md animate-[fade-up_1s_0.2s_ease-out_both] sm:ml-16 lg:ml-28">
          <p className="mb-8 text-xs font-medium tracking-[0.24em] text-[#d6b878] uppercase sm:text-sm">
            Italian wines · Sicilia · Terre Siciliane
          </p>
          <a
            href="#collection"
            className="group inline-flex items-center gap-8 border border-[#c9a45c] px-6 py-4 text-[11px] font-medium tracking-[0.22em] text-[#f8f4eb] uppercase transition-colors duration-500 hover:bg-[#c9a45c] hover:text-[#0b0a09] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6b878]"
          >
            <span>Discover Collection</span>
            <span className="text-lg leading-none transition-transform duration-500 group-hover:translate-x-1" aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-6 z-10 flex items-center gap-3 text-[9px] tracking-[0.28em] text-[#f8f4eb]/60 uppercase sm:left-10 lg:left-20">
        <span className="h-px w-8 bg-[#c9a45c]" />
        Scroll to explore
      </div>
      <div className="absolute right-6 bottom-8 z-10 hidden text-[10px] tracking-[0.25em] text-[#f8f4eb]/50 uppercase sm:right-10 sm:block lg:right-20">
        01 / 04
      </div>
    </section>
  )
}