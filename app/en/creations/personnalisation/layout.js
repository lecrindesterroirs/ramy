import { ogImages } from '../../../../lib/og'
import { alternatesPourEn } from '../../../../lib/i18n'

export const metadata = {
  title: { absolute: "Personalised Corporate Catering in Paris | L'Écrin Traiteur" },
  description: 'Personalise your catering: number cakes, chocolate bars carrying your message and packaging in your company colours, across Paris.',
  alternates: alternatesPourEn('/creations/personnalisation'),
  openGraph: {
    images: ogImages('/prod-cookie-personnalisation.webp'),
    title: "Personalised catering | L'Écrin Traiteur",
    description: "Number cakes, bespoke packaging, chocolate bars carrying the team's message: catering made in your image.",
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Layout({ children }) {
  return children
}
