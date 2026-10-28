import InfoPage from '../../components/InfoPage'
import { businessNode, BUSINESS_ID } from '../../lib/site'
import { PAUSE_DES, MINIMUM, LIV_RECUP_PROCHE, euroFr } from '../../lib/prixEntree'
import { LIV } from '../../lib/calculsPrix'

/*
  Page « Livraison de goûter en entreprise à Paris » (26/10/2026, test voulu par Ramy,
  sur le modèle de /livraison-petit-dejeuner-entreprise-paris). Elle porte les requêtes
  « livraison goûter (paris / entreprise) » : horaires, zones, délais, prix, déroulé. Le
  catalogue reste sur le pilier /creations/pauses-gourmandes, vers lequel elle renvoie avec
  l'ancre « goûter d'entreprise ». Montants : lib/prixEntree.js et lib/calculsPrix.js ;
  l'exemple à 10 personnes (20 madeleines, 1 L de jus, livraison) est celui de la page tarifs.
*/
const BASE = 'https://www.lecrin-traiteur.fr'
const a = (href, t) => `<a href="${href}" style="color:var(--text-primary)">${t}</a>`
const budget = (n) => n * PAUSE_DES + LIV
const GOUTER_10 = 49 + 9.5 + LIV // coffret de 20 madeleines + 1 L de jus + livraison (page tarifs)

const FAQ = [
  { name: "À quelle heure livrez-vous un goûter d'entreprise ?", answer: "À l'heure de votre pause, 15h30 ou 16h par exemple : vous nous donnez l'heure exacte, nous livrons juste avant. Le jour même comme la veille, la livraison se fait du lundi au vendredi, dès 6h30, par notre équipe." },
  { name: "Quel est le prix de la livraison de goûter à Paris ?", answer: `${euroFr(LIV)} HT à Paris et dans les communes proches, par commande. Avec la reprise de la vaisselle réutilisable, livraison et reprise font ${euroFr(LIV_RECUP_PROCHE)} HT en une ligne à Paris, dans le 92 et le 94. Les autres zones sont chiffrées au devis.` },
  { name: "Quel délai pour commander ?", answer: "Jusqu'à 10h la veille. À partir de 50 personnes, ou pour plusieurs sites, prévenez 48 h à l'avance. Le devis arrive sous 24 h." },
  { name: "Combien coûte un goûter livré pour 20 personnes ?", answer: `La pause gourmande démarre à ${euroFr(PAUSE_DES)} HT par personne : ${euroFr(budget(20))} HT pour 20 personnes livraison comprise (${euroFr(20 * PAUSE_DES)} HT de produits et ${euroFr(LIV)} HT de livraison), soit ${euroFr(Math.round(budget(20) / 20 * 100) / 100)} HT par personne.` },
  { name: "Quelle quantité prévoir par personne ?", answer: "Comptez 1,5 à 2 pièces sucrées par personne pour une pause de 20 à 30 minutes. Le sucré monte avec la durée : 2 à 3 pièces en dessert de buffet, 4 en cocktail dînatoire." },
  { name: "Que contient un goûter livré ?", answer: "Madeleines, cookies, macarons, cakes, tartelettes ou brochettes de fruits frais, selon la formule, avec une boisson. Les coffrets sont livrés dressés, prêts à poser sur la table ; gobelets et serviettes sont fournis, et la vaisselle réutilisable se demande au devis." },
  { name: "Y a-t-il un minimum de commande ?", answer: `Oui, ${euroFr(MINIMUM)} HT de produits, sans minimum de personnes.` },
  { name: "Peut-on avoir une facture avec un bon de commande ?", answer: "Oui. La facture est une facture d'entreprise avec TVA ; indiquez le numéro de bon de commande dans la demande de devis, il figurera sur la facture." },
]

export default function LivraisonGouter() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${BASE}/livraison-gouter-entreprise-paris#page`,
        url: `${BASE}/livraison-gouter-entreprise-paris`,
        name: "Livraison de goûter en entreprise à Paris",
        inLanguage: 'fr',
        dateModified: '2026-10-26',
        about: { '@id': BUSINESS_ID },
      },
      {
        '@type': 'Service',
        name: "Livraison de goûter d'entreprise",
        serviceType: "Livraison de goûter en entreprise",
        provider: { '@id': BUSINESS_ID },
        areaServed: [{ '@type': 'City', name: 'Paris' }, { '@type': 'AdministrativeArea', name: 'Île-de-France' }],
        offers: { '@type': 'Offer', priceCurrency: 'EUR', price: String(PAUSE_DES), url: `${BASE}/livraison-gouter-entreprise-paris` },
      },
      businessNode(),
    ],
  }

  return (
    <InfoPage
      eyebrow="Livraison · Paris & Île-de-France"
      title="Livraison de goûter en entreprise à Paris, à l'heure de votre pause"
      intro={`Horaires, zones, délais et prix : tout ce qu'il faut savoir pour se faire livrer un goûter au bureau. Pause gourmande dès ${euroFr(PAUSE_DES)} HT par personne, livrée par notre équipe à l'heure que vous fixez, ${euroFr(LIV)} HT de livraison à Paris, commande jusqu'à 10h la veille.`}
      jsonLd={jsonLd}
      faq={FAQ}
      breadcrumb={[{ name: 'Accueil', path: '' }, { name: "Goûter d'entreprise", path: '/creations/pauses-gourmandes' }, { name: 'Livraison', path: '/livraison-gouter-entreprise-paris' }]}
      sections={[
        {
          h2: 'La livraison en chiffres',
          table: {
            head: ['Sujet', 'Ce que nous faisons'],
            rows: [
              ['Horaires', "À l'heure exacte de votre pause (15h30, 16h…), du lundi au vendredi ; la livraison commence dès 6h30."],
              ['Zone', "Paris et une vingtaine de villes d'Île-de-France ; les zones plus éloignées sont chiffrées au devis."],
              ['Qui livre', 'Notre équipe, formée à nos standards. Jamais de sous-traitance.'],
              ['Prix de la livraison', `${euroFr(LIV)} HT à Paris et dans les communes proches, par commande.`],
              ['Avec reprise du matériel', `${euroFr(LIV_RECUP_PROCHE)} HT en une ligne à Paris, dans le 92 et le 94.`],
              ['Commande', "Jusqu'à 10h la veille ; 48 h à l'avance à partir de 50 personnes ou pour plusieurs sites."],
              ['Minimum', `${euroFr(MINIMUM)} HT de produits, sans minimum de personnes.`],
              ['Facture', "Facture d'entreprise avec TVA, bon de commande accepté."],
            ],
          },
        },
        {
          h2: 'Ce qui est livré, et ce que ça coûte',
          before: [`Le ${a('/creations/pauses-gourmandes', "goûter d'entreprise")} démarre à <strong>${euroFr(PAUSE_DES)} HT par personne</strong> : une pâtisserie et une boisson, jusqu'à une pause avec macarons et fruits. Pour une petite équipe, un goûter de 10 personnes (20 madeleines, 1 litre de jus, livraison) revient à ${euroFr(GOUTER_10)} HT.`],
          table: {
            head: ['Effectif', 'Pause gourmande, livraison comprise', 'Par personne'],
            rows: [10, 20, 30, 50, 100].map(n => [`${n} personnes`, euroFr(budget(n)), euroFr(Math.round(budget(n) / n * 100) / 100)]),
          },
          after: [`Les quantités détaillées sont dans notre guide ${a('/journal/combien-desserts-par-personne-buffet-cocktail-gouter', 'combien de desserts par personne')} et le ${a('/calculateur-quantites', 'calculateur de quantités')} ; tous les prix sont sur la page ${a('/tarifs', 'tarifs 2026')}.`],
        },
        {
          h2: 'Comment se passe une livraison',
          before: [
            `<strong>La veille avant 10h :</strong> vous commandez, ou vous demandez un devis (réponse sous 24 h).`,
            `<strong>Le jour J, à l'heure de la pause :</strong> notre équipe dépose le goûter dressé là où il sera servi, avec gobelets et serviettes. La mise en place est possible sur demande.`,
            `<strong>Après la pause :</strong> si vous avez choisi la vaisselle réutilisable, nous la reprenons ; livraison et reprise font ${euroFr(LIV_RECUP_PROCHE)} HT à Paris, dans le 92 et le 94.`,
          ],
        },
        {
          h2: 'Où nous livrons',
          before: [`Nous livrons Paris et une vingtaine de villes d'Île-de-France, dont La Défense, Boulogne-Billancourt, Neuilly-sur-Seine, Levallois-Perret, Issy-les-Moulineaux et Nanterre : voir les ${a('/traiteur', 'zones desservies')}. Pour une autre commune, demandez un ${a('/devis', 'devis')} : la livraison y est chiffrée selon la distance.`],
        },
      ]}
    />
  )
}
