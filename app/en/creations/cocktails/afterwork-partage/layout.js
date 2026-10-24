import { alternatesPourEn } from '../../../../../lib/i18n'
import { ogImages } from '../../../../../lib/og'
import { textes, CHEMIN, IMG } from '../../../../../lib/afterworkFiche'

const T = textes('en')

export const metadata = {
  title: { absolute: T.meta.title },
  description: T.meta.description,
  alternates: alternatesPourEn(CHEMIN),
  openGraph: {
    images: ogImages(IMG),
    title: T.meta.title,
    description: T.meta.og,
    locale: 'en_GB',
    type: 'website',
  },
}

export default function Layout({ children }) {
  return children
}
