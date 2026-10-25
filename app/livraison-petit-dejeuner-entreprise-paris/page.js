import InfoPage from '../../components/InfoPage'
import { businessNode, BUSINESS_ID } from '../../lib/site'
import { PDJ_DES, PDJ_LEGER, MINIMUM, LIV_RECUP_PROCHE, euroFr } from '../../lib/prixEntree'
import { LIV } from '../../lib/calculsPrix'
import { PDJ_VILLES } from '../../lib/pdjVillesData'

/*
  Page « Livraison de petit-déjeuner en entreprise à Paris » (25/10/2026, test voulu
  par Ramy). Elle porte les requêtes « livraison petit déjeuner (paris / entreprise) » :
  zones, horaires, délais, coût de la livraison et déroulé. Le catalogue et les formules
  restent sur le pilier /creations/petits-dejeuners-et-pauses, vers lequel elle renvoie
  avec l'ancre « petit-déjeuner d'entreprise » pour ne pas lui faire concurrence.
  Tous les montants viennent de lib/prixEntree.js et lib/calculsPrix.js.
*/
const BASE = 'https://www.lecrin-traiteur.fr'
const a = (href, t) => `<a href="${href}" style="color:var(--text-primary)">${t}</a>`
const budget = (n) => n * PDJ_DES + LIV

const FAQ = [
  { name: "À partir de quelle heure livrez-vous un petit-déjeuner d'entreprise ?", answer: "Dès 6h30, du lundi au vendredi, à l'heure que vous fixez : 7h30 pour une réunion de 8h30, par exemple. La livraison est faite par notre équipe, jamais sous-traitée." },
  { name: "Quel est le prix de la livraison de petit-déjeuner à Paris ?", answer: `${euroFr(LIV)} HT à Paris et dans les communes proches, par commande. Avec la reprise de la vaisselle réutilisable, livraison et reprise font ${euroFr(LIV_RECUP_PROCHE)} HT en une ligne à Paris, dans le 92 et le 94. Les autres zones sont chiffrées au devis.` },
  { name: "Quel délai pour commander ?", answer: "Jusqu'à 14h la veille pour une livraison le lendemain dès 6h30. À partir de 50 personnes, ou pour plusieurs sites, prévenez 48 h à l'avance. Le devis arrive sous 24 h." },
  { name: "Y a-t-il un minimum de commande ?", answer: `Oui, ${euroFr(MINIMUM)} HT de produits, sans minimum de personnes. Une équipe de 6 personnes peut commander.` },
  { name: "Combien coûte un petit-déjeuner livré pour 20 personnes ?", answer: `Formule Classique : ${euroFr(budget(20))} HT livraison comprise (${euroFr(20 * PDJ_DES)} HT de produits et ${euroFr(LIV)} HT de livraison), soit ${euroFr(budget(20) / 20)} HT par personne. Viennoiseries et café seuls : dès ${euroFr(PDJ_LEGER)} HT par personne pour 30 personnes, hors livraison. Le petit-déjeuner complet est sur devis.` },
  { name: "Que contient la livraison ?", answer: "Viennoiseries pur beurre, jus Alain Milliat, café ou thé en thermos et fruits frais en formule Classique, avec gobelets, serviettes, sucre et touillettes. La mise en place est possible sur demande, et la vaisselle réutilisable ou les plateaux de bois se demandent au devis." },
  { name: "Qui reçoit la livraison sur place ?", answer: "Donnez-nous à la commande le nom de la salle, l'heure de mise en place et un contact à l'accueil : la commande est déposée là où elle sera servie." },
  { name: "Peut-on avoir une facture avec un bon de commande ?", answer: "Oui. La facture est une facture d'entreprise avec TVA ; indiquez le numéro de bon de commande dans la demande de devis, il figurera sur la facture." },
]

export default function LivraisonPetitDejeuner() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${BASE}/livraison-petit-dejeuner-entreprise-paris#page`,
        url: `${BASE}/livraison-petit-dejeuner-entreprise-paris`,
        name: "Livraison de petit-déjeuner en entreprise à Paris",
        inLanguage: 'fr',
        dateModified: '2026-10-25',
        about: { '@id': BUSINESS_ID },
      },
      {
        '@type': 'Service',
        name: "Livraison de petit-déjeuner d'entreprise",
        serviceType: "Livraison de petit-déjeuner en entreprise",
        provider: { '@id': BUSINESS_ID },
        areaServed: [{ '@type': 'City', name: 'Paris' }, { '@type': 'AdministrativeArea', name: 'Île-de-France' }],
        offers: { '@type': 'Offer', priceCurrency: 'EUR', price: String(PDJ_DES), url: `${BASE}/livraison-petit-dejeuner-entreprise-paris` },
      },
      businessNode(),
    ],
  }
  const villes = PDJ_VILLES.map(v => a(`/petit-dejeuner-entreprise/${v.slug}`, v.name)).join(', ')

  return (
    <InfoPage
      eyebrow="Livraison · Paris & Île-de-France"
      title="Livraison de petit-déjeuner en entreprise à Paris, dès 6h30"
      intro={`Zones, horaires, délais et prix : tout ce qu'il faut savoir pour se faire livrer un petit-déjeuner au bureau. Livraison par notre équipe dès 6h30, ${euroFr(LIV)} HT à Paris et dans les communes proches, commande jusqu'à 14h la veille.`}
      jsonLd={jsonLd}
      faq={FAQ}
      breadcrumb={[{ name: 'Accueil', path: '' }, { name: "Petit-déjeuner d'entreprise", path: '/creations/petits-dejeuners-et-pauses' }, { name: 'Livraison', path: '/livraison-petit-dejeuner-entreprise-paris' }]}
      sections={[
        {
          h2: 'La livraison en chiffres',
          table: {
            head: ['Sujet', 'Ce que nous faisons'],
            rows: [
              ['Horaires', 'Dès 6h30, du lundi au vendredi, à l\'heure exacte que vous choisissez.'],
              ['Zone', 'Paris et une vingtaine de villes d\'Île-de-France ; les zones plus éloignées sont chiffrées au devis.'],
              ['Qui livre', 'Notre équipe, formée à nos standards. Jamais de sous-traitance.'],
              ['Prix de la livraison', `${euroFr(LIV)} HT à Paris et dans les communes proches, par commande.`],
              ['Avec reprise du matériel', `${euroFr(LIV_RECUP_PROCHE)} HT en une ligne à Paris, dans le 92 et le 94.`],
              ['Commande', 'Jusqu\'à 14h la veille ; 48 h à l\'avance à partir de 50 personnes ou pour plusieurs sites.'],
              ['Minimum', `${euroFr(MINIMUM)} HT de produits, sans minimum de personnes.`],
              ['Facture', 'Facture d\'entreprise avec TVA, bon de commande accepté.'],
            ],
          },
        },
        {
          h2: 'Ce qui est livré, et ce que ça coûte',
          before: [`Le ${a('/creations/petits-dejeuners-et-pauses', 'petit-déjeuner d\'entreprise')} Classique (viennoiseries pur beurre, jus, café ou thé, fruits frais) coûte <strong>${euroFr(PDJ_DES)} HT par personne</strong>, livraison en plus. Viennoiseries et café seuls : dès ${euroFr(PDJ_LEGER)} HT par personne pour 30 personnes, hors livraison. Le petit-déjeuner complet (madeleines, cakes, brochettes de fruits) est sur devis.`],
          table: {
            head: ['Effectif', 'Total HT, livraison comprise', 'Par personne'],
            rows: [10, 20, 30, 50, 100].map(n => [`${n} personnes`, euroFr(budget(n)), euroFr(Math.round(budget(n) / n * 100) / 100)]),
          },
          after: [`Le détail produit par produit est dans notre ${a('/journal/budget-petit-dejeuner-equipe-personnes', 'guide du budget petit-déjeuner')} et la page ${a('/tarifs', 'tarifs 2026')}.`],
        },
        {
          h2: 'Comment se passe une livraison',
          before: [
            `<strong>La veille avant 14h :</strong> vous commandez, ou vous demandez un devis (réponse sous 24 h).`,
            `<strong>Le jour J, à l'heure fixée :</strong> notre équipe dépose le petit-déjeuner dressé là où il sera servi, avec gobelets, serviettes, sucre et touillettes. La mise en place est possible sur demande.`,
            `<strong>Après l'événement :</strong> si vous avez choisi la vaisselle réutilisable ou les plateaux de bois, nous les reprenons ; livraison et reprise font ${euroFr(LIV_RECUP_PROCHE)} HT à Paris, dans le 92 et le 94.`,
          ],
        },
        {
          h2: 'Les villes livrées',
          before: [`Nous livrons Paris et, en petit-déjeuner, ${villes}. Pour une autre commune d'Île-de-France, demandez un ${a('/devis', 'devis')} : la livraison y est chiffrée selon la distance.`],
        },
      ]}
    />
  )
}
