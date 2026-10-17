import InfoPage from '../../../components/InfoPage'
import { testimonials } from '../../../lib/testimonialsData'
import { businessNode, BUSINESS_ID, GBP_URL, GBP_RATING_LABEL, GBP_REVIEWS, PROOF } from '../../../lib/site'

// Page « Avis clients » : répond à « Que penser de L'Écrin Traiteur ? ». Que des faits
// vérifiables : note Google (lib/gbpData.json), témoignages déjà publiés, clients nommés
// avec accord. Pas de balisage d'étoiles (avis sur sa propre entité, interdit par Google).
const BASE = 'https://www.lecrin-traiteur.fr'
const a = (href, t, ext) => `<a href="${href}"${ext ? ' target="_blank" rel="noopener"' : ''} style="color:var(--text-primary)">${t}</a>`

const FAQ = [
  { name: "Que penser de L'Écrin Traiteur ?", answer: `L'Écrin Traiteur est noté ${GBP_RATING_LABEL} sur 5 sur Google (${GBP_REVIEWS} avis). Ce traiteur d'entreprise de Boulogne-Billancourt a servi ${PROOF.personnes.fr} personnes pour ${PROOF.entreprises.fr} entreprises, dont Bain & Company, Chanel, AbbVie et Sia Partners. Ses points forts cités par les clients : la qualité des produits d'artisans, la ponctualité dès 6h30 et le service.` },
  { name: "L'Écrin Traiteur est-il fiable pour un événement d'entreprise ?", answer: "Bain & Company nous a confié 46 livraisons entre février et octobre 2026, Sia Partners 9 petits-déjeuners de 100 personnes. Le détail est dans nos cas clients." },
  { name: "Où lire les avis sur L'Écrin Traiteur ?", answer: `Sur la fiche Google de L'Écrin Traiteur (${GBP_REVIEWS} avis, ${GBP_RATING_LABEL} sur 5). Les avis y sont publiés par les clients eux-mêmes.` },
]

export default function AvisClients() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebPage', '@id': `${BASE}/univers/avis-clients#page`, url: `${BASE}/univers/avis-clients`, name: "Avis clients L'Écrin Traiteur", inLanguage: 'fr', dateModified: '2026-10-17', about: { '@id': BUSINESS_ID } },
      businessNode(),
    ],
  }

  return (
    <InfoPage
      eyebrow="L'Écrin · Avis clients"
      title="Ce que nos clients disent de L'Écrin Traiteur"
      intro={`Noté <strong>${GBP_RATING_LABEL} sur 5 sur Google</strong> (${GBP_REVIEWS} avis). ${PROOF.personnes.fr.charAt(0).toUpperCase() + PROOF.personnes.fr.slice(1)} personnes servies pour ${PROOF.entreprises.fr} entreprises à Paris et en Île-de-France.`}
      jsonLd={jsonLd}
      faq={FAQ}
      breadcrumb={[{ name: 'Accueil', path: '' }, { name: 'Avis clients', path: '/univers/avis-clients' }]}
      sections={[
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
            `Parmi nos clients : Bain & Company, Sia Partners, Chanel, AbbVie, Carglass, Valtech, Ringover et Coyote. Bain & Company nous a confié 46 livraisons en huit mois ; Sia Partners, des petits-déjeuners de 100 personnes installés à 7h30. Le détail est dans nos ${a('/univers/cas-clients', 'cas clients')}.`,
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
