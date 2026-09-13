import { MapPin, MessageCircle, Phone } from 'lucide-react'

const contactItems = [
  {
    label: 'Location',
    value: 'Chic Building, Kigali, Rwanda',
    icon: MapPin,
  },
  {
    label: 'Phone',
    value: '+250 780 785 521',
    icon: Phone,
    href: 'tel:+250780785521',
  },
  {
    label: 'WhatsApp',
    value: 'Chat with us',
    icon: MessageCircle,
    href: 'https://wa.me/250780785521',
  },
]

export default function OrderSection() {
  return (
    <section id="order" className="flex min-h-screen flex-col justify-between bg-[#0b0b0a] px-6 py-8 text-[#f4e8c1] sm:px-10 sm:py-10 lg:px-20">
      <header className="flex items-center justify-between border-b border-[#c9a45c]/25 pb-6">
        <p className="font-sans text-xs font-semibold tracking-[0.3em] text-[#c9a45c] uppercase">
          Rigan Business Company Ltd.
        </p>
        <span className="font-mono text-[10px] tracking-[0.2em] text-[#f4e8c1]/45 uppercase">
          Order desk
        </span>
      </header>

      <div className="mx-auto w-full max-w-5xl py-20">
        <div className="mb-14 max-w-2xl">
          <p className="mb-6 flex items-center gap-3 font-sans text-[11px] font-medium tracking-[0.3em] text-[#c9a45c] uppercase">
            <span aria-hidden="true" className="h-px w-8 bg-[#c9a45c]" />
            Place your order
          </p>
          <h1 className="font-serif text-5xl leading-[0.98] tracking-[-0.03em] text-balance sm:text-7xl">
            Good things are
            <span className="block italic text-[#d6b878]">just a message away.</span>
          </h1>
        </div>

        <div className="grid border-y border-[#c9a45c]/25 md:grid-cols-3">
          {contactItems.map(({ label, value, icon: Icon, href }) => {
            const content = (
              <>
                <Icon aria-hidden="true" className="mb-8 size-6 text-[#c9a45c]" strokeWidth={1.5} />
                <p className="mb-3 font-sans text-[10px] font-semibold tracking-[0.28em] text-[#f4e8c1]/50 uppercase">
                  {label}
                </p>
                <p className="font-sans text-sm text-[#f4e8c1] sm:text-base">{value}</p>
              </>
            )

            return href ? (
              <a
                key={label}
                href={href}
                target={label === 'WhatsApp' ? '_blank' : undefined}
                rel={label === 'WhatsApp' ? 'noreferrer' : undefined}
                className="border-b border-[#c9a45c]/25 p-7 transition-colors hover:bg-[#c9a45c]/10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#c9a45c] md:border-r md:border-b-0 last:border-r-0"
              >
                {content}
              </a>
            ) : (
              <div key={label} className="border-b border-[#c9a45c]/25 p-7 md:border-r md:border-b-0 last:border-r-0">
                {content}
              </div>
            )
          })}
        </div>

        <div className="mt-14 flex flex-col items-start gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 font-sans text-[10px] font-semibold tracking-[0.28em] text-[#f4e8c1]/50 uppercase">
              Call to order
            </p>
            <a
              href="tel:+250780785521"
              className="font-mono text-3xl tracking-[-0.05em] text-[#f4e8c1] transition-colors hover:text-[#d6b878] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9a45c] sm:text-5xl"
            >
              +250 780 785 521
            </a>
          </div>
          <a
            href="https://wa.me/250780785521"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-[#25d366] px-6 py-4 font-sans text-xs font-bold tracking-[0.16em] text-[#071b0d] uppercase transition-colors hover:bg-[#5bea8e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25d366]"
          >
            <MessageCircle aria-hidden="true" className="size-5" strokeWidth={2.2} />
            Order on WhatsApp
          </a>
        </div>
      </div>

      <footer className="flex items-center justify-between border-t border-[#c9a45c]/25 pt-6 font-sans text-[10px] tracking-[0.2em] text-[#f4e8c1]/45 uppercase">
        <span>Available daily</span>
        <span>18+ Only</span>
      </footer>
    </section>
  )
}
