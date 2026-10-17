export const metadata = {
  title: { absolute: "Corporate Catering in Paris: Halal, Delivered from 6:30 am" },
  description: "Corporate catering in Paris: office breakfast from €8 per person, lunch trays, cocktail receptions. Halal, pork-free, alcohol-free. Quote within 24 hours.",
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: "L'Écrin Traiteur, corporate caterer in Paris" }],
    title: "Corporate Catering in Paris | L'Écrin Traiteur",
    description: "Office breakfast, lunch trays and cocktail receptions delivered to your office in Paris and Île-de-France. Halal and pork-free by default.",
    locale: 'en_GB',
    type: 'website',
  },
  alternates: {
    canonical: '/corporate-catering-paris',
    languages: { en: '/corporate-catering-paris', fr: '/traiteur' },
  },
}

export default function Layout({ children }) {
  return children
}
