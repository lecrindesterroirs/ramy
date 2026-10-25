import InfoPage from '../../../components/InfoPage'
import { PRESSE, presseJsonLd } from '../../../lib/pressePage'
import { alternatesPourEn } from '../../../lib/i18n'
import { ogImages } from '../../../lib/og'

// English press kit (25/10/2026), same data file as the French page.
export const metadata = {
  title: { absolute: PRESSE.en.metaTitle },
  description: PRESSE.en.description,
  alternates: alternatesPourEn('/presse'),
  openGraph: {
    images: ogImages('/octobre-rose-buffet-entreprise.webp', "Breakfast buffet delivered by L'Écrin Traiteur"),
    title: PRESSE.en.metaTitle,
    description: PRESSE.en.description,
    locale: 'en_GB',
    type: 'website',
  },
}

export default function PressPageEn() {
  const c = PRESSE.en
  return (
    <InfoPage
      lang="en"
      eyebrow={c.eyebrow}
      title={c.title}
      intro={c.intro}
      sections={c.sections}
      jsonLd={presseJsonLd('en')}
      breadcrumb={c.breadcrumb}
    />
  )
}
