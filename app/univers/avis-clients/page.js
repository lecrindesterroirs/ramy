'use client'

import InfoPage from '../../../components/InfoPage'
import { testimonials } from '../../../lib/testimonialsData'
import { businessNode, BUSINESS_ID, GBP_URL, GBP_RATING_LABEL, GBP_REVIEWS, PROOF } from '../../../lib/site'
import { usePathname } from 'next/navigation'
import { estAnglais } from '../../../lib/i18nBase'
import { T_AVIS, temoignageEn } from '../../../lib/en/pages/univers'

// Page « Avis clients » : répond à « Que penser de L'Écrin Traiteur ? ». Que des faits
// vérifiables : note Google (lib/gbpData.json), témoignages déjà publiés, clients nommés
// avec accord. Pas de balisage d'étoiles (avis sur sa propre entité, interdit par Google).
const BASE = 'https://www.lecrin-traiteur.fr'
const a = (href, t, ext) => `<a href="${href}"${ext ? ' target="_blank" rel="noopener"' : ''} style="color:var(--text-primary)">${t}</a>`

const FAQ = [
  { name: "Que penser de L'Écrin Traiteur ?", answer: `L'Écrin Traiteur est noté ${GBP_RATING_LABEL} sur 5 sur Google (${GBP_REVIEWS} avis). Ce traiteur d'entreprise de Boulogne-Billancourt a servi ${PROOF.personnes.fr} personnes pour ${PROOF.entreprises.fr} entreprises, dont Bain & Company, Chanel, AbbVie et Sia Partners. Ses points forts cités par les clients : la qualité des produits d'artisans, la ponctualité dès 6h30 et le service.` },
  { name: "L'Écrin Traiteur est-il fiable pour un événement d'entreprise ?", answer: "Bain & Company nous confie des petits-déjeuners de réunion plusieurs fois par mois depuis février 2026, et Sia Partners revient régulièrement pour des matinées d'une centaine de personnes. Le détail est dans nos cas clients." },
  { name: "Où lire les avis sur L'Écrin Traiteur ?", answer: `Sur la fiche Google de L'Écrin Traiteur (${GBP_REVIEWS} avis, ${GBP_RATING_LABEL} sur 5). Les avis y sont publiés par les clients eux-mêmes.` },
]

export default function AvisClients() {
  const en = estAnglais(usePathname() || '/')
  const note = en ? GBP_RATING_LABEL.replace(',', '.') : GBP_RATING_LABEL
  const nbEnt = en ? PROOF.entreprises.en : PROOF.entreprises.fr
  const nbPers = en ? PROOF.personnes.en : PROOF.personnes.fr
  const temoins = en ? testimonials.map(temoignageEn) : testimonials

  // Les trois réponses de la FAQ reprennent les mêmes faits qu'en français.
  const FAQ_EN = [
    { name: T_AVIS.faq[0].name, answer: `L'Écrin Traiteur is rated ${note} out of 5 on Google (${GBP_REVIEWS} reviews). This corporate caterer based in Boulogne-Billancourt has served ${nbPers} people for ${nbEnt} companies, among them Bain & Company, Chanel, AbbVie and Sia Partners. What clients single out: the quality of the artisan products, delivery on time from 6:30 am, and the service.` },
    { name: T_AVIS.faq[1].name, answer: T_AVIS.faq[1].answer },
    { name: T_AVIS.faq[2].name, answer: `On L'Écrin Traiteur's Google listing (${GBP_REVIEWS} reviews, ${note} out of 5). The reviews there are published by the clients themselves.` },
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebPage', '@id': `${BASE}/univers/avis-clients#page`, url: `${BASE}/univers/avis-clients`, name: "Avis clients L'Écrin Traiteur", inLanguage: 'fr', dateModified: '2026-10-17', about: { '@id': BUSINESS_ID } },
      businessNode(),
    ],
  }

  return (
    <InfoPage
      lang={en ? 'en' : 'fr'}
      eyebrow={en ? T_AVIS.eyebrow : "L'Écrin · Avis clients"}
      title={en ? T_AVIS.title : "Ce que nos clients disent de L'Écrin Traiteur"}
      intro={en
        ? `Rated <strong>${note} out of 5 on Google</strong> (${GBP_REVIEWS} reviews). ${nbPers.charAt(0).toUpperCase() + nbPers.slice(1)} people served for ${nbEnt} companies across Paris and Île-de-France.`
        : `Noté <strong>${GBP_RATING_LABEL} sur 5 sur Google</strong> (${GBP_REVIEWS} avis). ${PROOF.personnes.fr.charAt(0).toUpperCase() + PROOF.personnes.fr.slice(1)} personnes servies pour ${PROOF.entreprises.fr} entreprises à Paris et en Île-de-France.`}
      jsonLd={jsonLd}
      faq={en ? FAQ_EN : FAQ}
      breadcrumb={en
        ? [{ name: T_AVIS.fil[0], path: '/en' }, { name: T_AVIS.fil[1], path: '/en/univers/avis-clients' }]
        : [{ name: 'Accueil', path: '' }, { name: 'Avis clients', path: '/univers/avis-clients' }]}
      sections={en ? [
        {
          h2: T_AVIS.noteH2,
          before: [
            `L'Écrin Traiteur is rated <strong>${note} out of 5</strong> on Google, across ${GBP_REVIEWS} reviews published by clients. ${a(GBP_URL, 'Read every review on Google', true)}.`,
          ],
        },
        {
          h2: T_AVIS.parlentH2,
          before: [
            ...temoins.map(t => `"${t.text}" <span style="color:var(--text-secondary)">${t.name}, ${t.role}, ${t.company} (${t.context.toLowerCase()})</span>`),
            `<span style="color:var(--text-secondary)">${T_AVIS.traduit}</span>`,
          ],
        },
        {
          h2: T_AVIS.confianceH2,
          before: [
            `Among our clients: Bain & Company, Sia Partners, Chanel, AbbVie, Carglass, Valtech, Ringover and Coyote. Bain & Company order meeting breakfasts several times a month; Sia Partners come back for mornings of around a hundred people, set up by 7:30 am. The detail is in our ${a('/en/univers/cas-clients', 'client cases')}.`,
          ],
        },
        {
          h2: T_AVIS.releventH2,
          table: {
            head: T_AVIS.tableHead,
            rows: T_AVIS.tableRows.map(([k, v], i) => [k, i === 3 ? `Order until 2 pm the day before, quote within 24 hours, ${a('/en/tarifs', 'prices published')}.` : v]),
          },
        },
      ] : [
        {
          h2: 'La note Google',
          before: [
            `L'Écrin Traiteur est noté <strong>${GBP_RATING_LABEL} sur 5</strong> sur Google, sur ${GBP_REVIEWS} avis publiés par des clients. ${a(GBP_URL, 'Lire tous les avis sur Google', true)}.`,
          ],
        },
        {
          h2: 'Ils en parlent',
          before: testimonials.map(t => `« ${t.text} » <span style="color:var(--text-secondary)">${t.name}, ${t.role}, ${t.company} (${t.context.toLowerCase()})</span>`),
        },
        {
          h2: 'Ils nous font confiance',
          before: [
            `Parmi nos clients : Bain & Company, Sia Partners, Chanel, AbbVie, Carglass, Valtech, Ringover et Coyote. Bain & Company nous confie des petits-déjeuners de réunion plusieurs fois par mois ; Sia Partners, des matinées d'une centaine de personnes installées à 7h30. Le détail est dans nos ${a('/univers/cas-clients', 'cas clients')}.`,
          ],
        },
        {
          h2: 'Ce que les clients relèvent',
          table: {
            head: ['Point', 'Ce que nous faisons'],
            rows: [
              ['Les produits', "Viennoiseries pur beurre, madeleines Mado Paris, jus Alain Milliat, yaourts de la Ferme de Viltain : des artisans nommés."],
              ['La ponctualité', "Livraison dès 6h30, à l'heure exacte demandée, par notre propre équipe."],
              ['Les régimes', "Toute la carte est halal et sans porc, sans alcool ; végétarien, vegan et sans gluten sur demande."],
              ['La simplicité', `Commande jusqu'à la veille 14h, devis sous 24 h, ${a('/tarifs', 'prix publiés')}.`],
            ],
          },
        },
      ]}
    />
  )
}
