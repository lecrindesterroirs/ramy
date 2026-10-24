import { redirect } from 'next/navigation'
import InfoPage from '../../../components/InfoPage'
import { EN_PAGES } from '../../../lib/enPages'
import { businessNode, BUSINESS_ID } from '../../../lib/site'
import { ogImages } from '../../../lib/og'
import { alternatesPourEn } from '../../../lib/i18n'

/*
  Les adresses anglaises reprennent le chemin français sous /en, comme partout
  ailleurs sur le site : /en/tarifs, /en/creations/plateaux-repas. Les cinq
  adresses sur mesure d'origine (/en/pricing, /en/office-breakfast-paris…)
  redirigent en 301 vers celles-ci (next.config.mjs) — Ramy a tranché le
  17 octobre 2026 : un seul schéma d'adresses pour tout le site.

  La clé interne de EN_PAGES reste le slug d'origine ; c'est son champ `fr`
  qui donne l'adresse. On construit ici l'index chemin français → page.
*/
const PAR_CHEMIN = Object.fromEntries(
  Object.entries(EN_PAGES).map(([slug, pg]) => [pg.fr, { ...pg, slug }])
)

// Chaque page anglaise reprend le hero de son équivalent français.
const EN_HEROS = {
  'office-breakfast-paris': '/hero-petitdej.webp',
  'office-lunch-paris': '/hero-plateaux-essentiel.webp',
  'cocktail-reception-paris': '/hero-cocktail.webp',
  'halal-catering-paris': '/hero-petitdej.webp',
  'pricing': '/hero-plateaux-essentiel.webp',
  'metiers': '/hero-plateaux-essentiel.webp',
}

/** ['creations','plateaux-repas'] → '/creations/plateaux-repas' */
const cheminDe = (params) => '/' + (params.chemin || []).join('/')

const BASE = 'https://www.lecrin-traiteur.fr'

/* Chemins qui ont désormais leur propre page anglaise (route dédiée) : le
   texte générique de EN_PAGES ne les sert plus. */
const ROUTES_DEDIEES = new Set(['/creations/cocktails'])

export function generateStaticParams() {
  return Object.values(EN_PAGES).filter(pg => !ROUTES_DEDIEES.has(pg.fr)).map(pg => ({ chemin: pg.fr.replace(/^\//, '').split('/') }))
}

/*
  dynamicParams = true : une adresse /en qui n'a pas encore de page anglaise
  ne tombe pas en 404, elle renvoie vers la page française (règle posée par
  Ramy le 17 octobre 2026). Les pages traduites, elles, restent pré-rendues.
*/
export const dynamicParams = true

export function generateMetadata({ params }) {
  const pg = PAR_CHEMIN[cheminDe(params)]
  if (!pg) return {}   // la page redirige : pas de métadonnées à produire
  const path = `/en${pg.fr}`
  return {
    title: { absolute: pg.metaTitle },
    description: pg.description,
    alternates: alternatesPourEn(pg.fr),
    openGraph: {
      images: ogImages(EN_HEROS[pg.slug] || '/hero-bg2.webp', "L'Écrin Traiteur, corporate caterer in Paris"),
      title: pg.metaTitle,
      description: pg.description,
      locale: 'en_GB',
      type: 'website',
    },
  }
}

export default function EnPage({ params }) {
  const chemin = cheminDe(params)
  const pg = PAR_CHEMIN[chemin]
  // Pas encore traduite : on renvoie vers le français plutôt que vers une
  // page introuvable. Si la page française n'existe pas non plus, c'est elle
  // qui affichera le 404, au bon endroit.
  if (!pg) redirect(chemin)
  const path = `/en${pg.fr}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebPage', '@id': `${BASE}${path}#page`, url: `${BASE}${path}`, name: pg.title, inLanguage: 'en', dateModified: '2026-10-17', about: { '@id': BUSINESS_ID } },
      businessNode(),
    ],
  }
  return (
    <InfoPage
      lang="en"
      eyebrow={pg.eyebrow}
      title={pg.title}
      intro={pg.intro}
      sections={pg.sections}
      faq={pg.faq}
      jsonLd={jsonLd}
      breadcrumb={[{ name: 'Home', path: '' }, { name: 'Corporate catering in Paris', path: '/en/traiteur' }, { name: pg.title, path }]}
    />
  )
}
