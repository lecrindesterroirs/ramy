import InfoPage from '../../components/InfoPage'
import { businessNode, BUSINESS_ID } from '../../lib/site'

// Page Tarifs (modèle « Tarifs vidéo B2B 2026 » de Biux) : tous les prix viennent de la
// carte et des guides déjà publiés. Un prix change : le corriger ici aussi.
const BASE = 'https://www.lecrin-traiteur.fr'
const a = (href, t) => `<a href="${href}" style="color:var(--text-primary)">${t}</a>`

const FAQ = [
  { name: "Combien coûte un traiteur d'entreprise à Paris ?", answer: "Chez L'Écrin Traiteur, de 6 € HT par personne (pause gourmande) à 51,90 € HT (cocktail de 16 pièces). Un petit-déjeuner coûte 8 € HT par personne en formule Classique et 12 à 16 € HT en formule complète, un plateau repas de 28,90 à 30,90 € HT. La livraison est à 29 € HT à Paris et dans les communes proches." },
  { name: "Les prix sont-ils HT ou TTC ?", answer: "Tous nos prix sont HT. Vous recevez une facture d'entreprise avec la TVA." },
  { name: "Y a-t-il un minimum de commande ?", answer: "Oui, 50 € HT de produits. Il n'y a pas de minimum de personnes." },
  { name: "La livraison est-elle comprise ?", answer: "Non, elle s'ajoute : 29 € HT à Paris et dans les communes proches, dès 6h30. La récupération de vaisselle réutilisable ou de matériel coûte 19 € HT en plus de la livraison." },
  { name: "Quand faut-il commander ?", answer: "Jusqu'à la veille 14h. À partir de 50 personnes, prévoyez 48 h. Le devis est envoyé sous 24 h." },
  { name: "Les prix changent-ils pour le halal ou le végétarien ?", answer: "Non. Toute la carte est halal et sans porc, sans alcool et sans supplément. Les options végétariennes, vegan et sans gluten sont au même prix." },
]

export default function Tarifs() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${BASE}/tarifs#page`,
        url: `${BASE}/tarifs`,
        name: "Tarifs traiteur d'entreprise 2026",
        inLanguage: 'fr',
        dateModified: '2026-10-17',
        about: { '@id': BUSINESS_ID },
      },
      businessNode(),
    ],
  }

  return (
    <InfoPage
      eyebrow="Tarifs 2026 · Paris & Île-de-France"
      title="Tarifs traiteur d'entreprise 2026 : combien ça coûte ?"
      intro="Tous nos prix par personne, nos budgets par effectif et nos conditions de livraison. Prix HT, mis à jour le 17 octobre 2026. Devis précis sous 24 h."
      jsonLd={jsonLd}
      faq={FAQ}
      breadcrumb={[{ name: 'Accueil', path: '' }, { name: 'Tarifs', path: '/tarifs' }]}
      sections={[
        {
          h2: 'Prix par personne, par prestation',
          before: ["Chez L'Écrin Traiteur, un repas d'entreprise coûte de <strong>6 € HT</strong> (pause gourmande) à <strong>51,90 € HT par personne</strong> (cocktail de 16 pièces). Toute la carte est halal et sans porc, sans supplément."],
          table: {
            head: ['Prestation', 'Prix HT par personne', 'Ce qui est compris'],
            rows: [
              [a('/creations/petits-dejeuners-et-pauses', 'Petit-déjeuner Classique'), '8 €', 'Viennoiseries pur beurre, jus Alain Milliat, café, fruits frais'],
              [a('/creations/petits-dejeuners-et-pauses', 'Petit-déjeuner complet'), '12 à 16 €', 'La base Classique, plus madeleines ou cakes, thé, brochettes de fruits'],
              [a('/creations/pauses-gourmandes', 'Pause gourmande'), '6 à 15 €', 'Une pâtisserie et une boisson par personne, jusqu\'à une pause premium (macarons, fruits)'],
              [a('/creations/lunch-box', 'Lunch box'), '18,90 à 21,90 €', 'Déjeuner individuel prêt à manger'],
              [a('/creations/plateaux-repas', 'Plateau repas'), '28,90 à 30,90 €', 'Entrée, plat, dessert : 28,90 € végétarien, 29,90 € poulet, 30,90 € saumon'],
              [a('/creations/cocktails', 'Cocktail L\'Invitation'), '29,90 €', '8 pièces salées et sucrées par personne'],
              [a('/creations/cocktails', 'Cocktail La Réception'), '40,90 €', '12 pièces par personne'],
              [a('/creations/cocktails', 'Cocktail La Célébration'), '51,90 €', '16 pièces par personne, format dînatoire'],
              [a('/creations/animations-culinaires', 'Animations culinaires'), 'Sur devis', 'Stand ou atelier selon l\'événement'],
            ],
          },
        },
        {
          h2: 'Budget petit-déjeuner selon le nombre de personnes',
          before: ["Budgets calculés avec nos règles de quantités (2 mini-viennoiseries par personne, 1 mignardise, 1 verre de jus, 1 thermos d'1 litre pour 6), livraison de 29 € HT comprise."],
          table: {
            head: ['Effectif', 'Total HT, livraison comprise', 'Par personne'],
            rows: [
              ['10 personnes', '160,80 €', '16,08 €'],
              ['20 personnes', '340,80 €', '17,04 €'],
              ['30 personnes', '442,60 €', '14,75 €'],
              ['50 personnes', '743,40 €', '14,87 €'],
              ['100 personnes', '1 382,60 €', '13,83 €'],
            ],
          },
          after: [`Le détail produit par produit est dans notre ${a('/journal/budget-petit-dejeuner-equipe-personnes', 'guide du budget petit-déjeuner')}.`],
        },
        {
          h2: 'Exemples de budgets pour d\'autres prestations',
          table: {
            head: ['Exemple', 'Total HT'],
            rows: [
              ['Pause gourmande pour 20 personnes (6 € par personne + livraison)', '149 €'],
              ['Goûter pour 10 personnes (20 madeleines, 1 litre de jus, livraison)', '87,50 €'],
              ['Déjeuner de 20 plateaux repas végétariens, livraison comprise', '607,00 €'],
              ['Cocktail La Réception pour 50 personnes (12 pièces), hors boissons et livraison', '2 045 €'],
            ],
          },
        },
        {
          h2: 'Boissons et produits à l\'unité',
          table: {
            head: ['Produit', 'Prix HT'],
            rows: [
              ['Thermos de café bio ou de thé, 1 litre (6 tasses)', '19,50 €'],
              ['Jus Alain Milliat, 1 litre (5 verres)', 'dès 9,50 €'],
              ['Plateau de 30 mini-viennoiseries', '48,90 €'],
              ['Coffret de madeleines Mado Paris : 10, 20 ou 50 pièces', '24,90 €, 49 €, 119 €'],
              ['20 brochettes de fruits', '48,90 €'],
            ],
          },
        },
        {
          h2: 'Livraison et conditions',
          before: [
            "<strong>Livraison :</strong> 29 € HT à Paris et dans les communes proches, dès 6h30, à l'heure exacte demandée, par notre propre équipe.",
            "<strong>Minimum :</strong> 50 € HT de produits, sans minimum de personnes.",
            "<strong>Délais :</strong> commande jusqu'à la veille 14h ; 48 h à partir de 50 personnes. Devis sous 24 h, facture d'entreprise avec TVA.",
            "<strong>Matériel :</strong> la récupération de vaisselle réutilisable ou de matériel coûte 19 € HT en plus de la livraison.",
          ],
        },
      ]}
    />
  )
}
