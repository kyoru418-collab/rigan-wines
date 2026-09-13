export type Wine = {
  slug: string
  name: string
  type: string
  price: number
  priceLabel: string
  img: string
  description: string
}

export const wines: Wine[] = [
  { slug: 'kinisia-merlot', name: 'Kinisia Merlot', type: 'Sicilia DOC', price: 33000, priceLabel: 'RWF 33,000', img: '/wines/kinisia.webp', description: 'A Merlot and Nero d’Avola blend from Sicilia.' },
  { slug: 'kinisia-riserva', name: 'Kinisia Rosso Riserva', type: 'Terre Siciliane', price: 33000, priceLabel: 'RWF 33,000', img: '/wines/kinisia-riserva.webp', description: 'A Nero d’Avola riserva from Terre Siciliane.' },
  { slug: 'passole', name: 'Passole', type: 'Rosso Sicilia DOC', price: 33000, priceLabel: 'RWF 33,000', img: '/wines/passole.webp', description: 'A Rosso Sicilia DOC red from Cantine Birgi.' },
  { slug: 'unico-nero-davola', name: 'Unico Nero d’Avola', type: 'Vendemmia Tardiva', price: 32000, priceLabel: 'RWF 32,000', img: '/wines/unico-nero-davola.webp', description: 'A late-harvest Nero d’Avola from Sicilia.' },
  { slug: 'unico-zibibbo', name: 'Unico Zibibbo', type: 'Passito', price: 30000, priceLabel: 'RWF 30,000', img: '/wines/unico-passito.webp', description: 'A Zibibbo passito dessert wine.' },
  { slug: 'trisole', name: 'Trisole', type: 'Nerello Mascalese', price: 22000, priceLabel: 'RWF 22,000', img: '/wines/trisole.webp', description: 'A Nerello Mascalese from Sicilia.' },
  { slug: 'tre-venti', name: 'Tre Venti', type: 'Frappato', price: 20000, priceLabel: 'RWF 20,000', img: '/wines/tre-venti.webp', description: 'A Frappato from Terre Siciliane.' },
  { slug: 'liburna', name: 'Liburna', type: 'Nero d’Avola', price: 20000, priceLabel: 'RWF 20,000', img: '/wines/liburna.webp', description: 'A Nero d’Avola from Sicilia.' },
  { slug: 'tria-rosato', name: 'Tria Nerello Mascalese Rosato', type: 'Terre Siciliane', price: 18000, priceLabel: 'RWF 18,000', img: '/wines/tria-rosato.webp', description: 'A Nerello Mascalese rosato from Terre Siciliane.' },
  { slug: 'tria-bianco', name: 'Tria Bianco', type: 'Terre Siciliane IGP', price: 18000, priceLabel: 'RWF 18,000', img: '/wines/tria-bianco.webp', description: 'A white wine from Terre Siciliane.' },
  { slug: 'tria-rosso', name: 'Tria Rosso', type: 'Terre Siciliane IGP', price: 18000, priceLabel: 'RWF 18,000', img: '/wines/tria-rosso.webp', description: 'A red wine from Terre Siciliane.' },
  { slug: 'tria-nero-davola', name: 'Tria Nero d’Avola', type: 'Sicilia DOC', price: 18000, priceLabel: 'RWF 18,000', img: '/wines/tria-nero-davola.webp', description: 'A Nero d’Avola from Sicilia DOC.' },
  { slug: 'tria-syrah', name: 'Tria Syrah', type: 'Terre Siciliane IGP', price: 18000, priceLabel: 'RWF 18,000', img: '/wines/tria-syrah.webp', description: 'A Syrah from Terre Siciliane.' },
]

export function formatRWF(amount: number) {
  return `RWF ${amount.toLocaleString('en-US')}`
}
