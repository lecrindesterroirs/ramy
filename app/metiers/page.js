import InfoPage from '../../components/InfoPage'
import { businessNode, BUSINESS_ID } from '../../lib/site'
import { PDJ_DES, PLATEAU_DES, PLATEAU_MAX, LUNCHBOX_DES, MINIMUM, euroFr } from '../../lib/prixEntree'

/* Page « par métier » : l'entrée commerciale vers les guides par métier du Journal
   (lib/journalMetiers.js). Créée le 24/10/2026 après l'analyse de Crozy, qui a une page
   par métier. Pas de contenu repris des guides : un tableau, les conditions communes,
   et le lien vers le guide. Un nouveau guide métier = une ligne de plus dans METIERS. */
const BASE = 'https://www.lecrin-traiteur.fr'
const a = (href, t) => `<a href="${href}" style="color:var(--text-primary)">${t}</a>`

const METIERS = [
  { nom: "Cabinets d'avocats", livre: `Petit-déjeuner client, déjeuner de travail en plateaux repas, cocktail pour une soirée clients`, guide: '/journal/traiteur-cabinet-avocats-paris' },
  { nom: 'Cabinets de conseil', livre: `Petits-déjeuners d'équipe, comités et séminaires, afterwork de fin de mission`, guide: '/journal/traiteur-cabinet-conseil-paris' },
  { nom: 'Entreprises tech et ESN', livre: `Afterwork, onboarding, meetups, petits-déjeuners d'équipe`, guide: '/journal/traiteur-entreprise-tech-esn-paris' },
  { nom: 'Banque, assurance et finance', livre: `Petits-déjeuners de comité, plateaux de réunion, cocktail clients à La Défense`, guide: '/journal/traiteur-banque-assurance-finance-paris' },
  { nom: 'Santé, laboratoires et medtech', livre: `Staffs du matin dès 6h30, formations, journées scientifiques`, guide: '/journal/traiteur-sante-laboratoire-medtech-paris' },
  { nom: 'Immobilier et BTP', livre: `Cocktail d'inauguration, petit-déjeuner de chantier, portes ouvertes`, guide: '/journal/traiteur-immobilier-btp-paris' },
  { nom: 'Agences événementielles', livre: `Traiteur partenaire sur les événements de vos clients : formats, délais, ce qui est livré`, guide: '/journal/traiteur-agence-evenementielle-paris' },
]

const FAQ = [
  { name: "Mon métier n'est pas dans la liste, pouvez-vous nous livrer ?", answer: "Oui. Les prestations, les prix et les délais sont les mêmes pour toutes les entreprises : décrivez votre besoin dans la demande de devis, nous répondons sous 24 h." },
  { name: "Les prix changent-ils selon le métier ?", answer: `Non. Tous nos prix sont HT et publiés sur la page tarifs : petit-déjeuner Classique ${euroFr(PDJ_DES)}, lunch box dès ${euroFr(LUNCHBOX_DES)}, plateau repas de ${euroFr(PLATEAU_DES)} à ${euroFr(PLATEAU_MAX)} par personne.` },
  { name: "Peut-on indiquer un numéro de bon de commande ?", answer: "Oui. Indiquez-le dans la demande de devis : il figure sur la facture, qui est une facture d'entreprise avec TVA." },
  { name: "Peut-on commander la même chose chaque semaine ?", answer: "Oui : même horaire et mêmes quantités, sans tout redemander. Il suffit de confirmer l'effectif avant la veille à 14h." },
]

export default function Metiers() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${BASE}/metiers#page`,
        url: `${BASE}/metiers`,
        name: "Traiteur d'entreprise par métier à Paris",
        inLanguage: 'fr',
        dateModified: '2026-10-24',
        about: { '@id': BUSINESS_ID },
      },
      businessNode(),
    ],
  }
  return (
    <InfoPage
      eyebrow="Par métier · Paris & Île-de-France"
      title="Traiteur d'entreprise par métier : avocats, finance, santé, tech, agences"
      intro="Pour chaque métier, ce que nous livrons, à quel prix et sous quel délai. Prix HT, livraison dès 6h30, devis sous 24 h."
      jsonLd={jsonLd}
      faq={FAQ}
      breadcrumb={[{ name: 'Accueil', path: '' }, { name: 'Par métier', path: '/metiers' }]}
      sections={[
        {
          h2: 'Un guide par métier',
          before: ["Chaque guide décrit les moments où le métier commande (réunion client, comité, afterwork, événement), le format qui convient et le budget pour 10, 20 ou 50 personnes."],
          table: {
            head: ['Métier', 'Ce que nous livrons', 'Guide'],
            rows: METIERS.map(m => [m.nom, m.livre, a(m.guide, 'Lire le guide')]),
          },
        },
        {
          h2: 'Les mêmes conditions pour tous les métiers',
          table: {
            head: ['Sujet', 'Ce que nous faisons'],
            rows: [
              ['Livraison', 'Dès 6h30, par notre équipe, à l\'heure que vous fixez. 29 € HT à Paris et dans les communes proches.'],
              ['Minimum', `${euroFr(MINIMUM)} HT de produits, sans minimum de personnes.`],
              ['Commande', 'Jusqu\'à la veille à 14h, 48 h à l\'avance à partir de 50 personnes.'],
              ['Devis', 'Sous 24 h, détaillé produit par produit.'],
              ['Facture', 'Facture d\'entreprise avec TVA, numéro de bon de commande sur demande.'],
              ['Régimes', 'Carte halal et sans porc, sans alcool, sans supplément. Végétarien, vegan et sans gluten sur demande.'],
            ],
          },
          after: [`Tous les prix sont sur la page ${a('/tarifs', 'tarifs 2026')} ; nos engagements de service sont détaillés dans ${a('/univers/nos-engagements', 'nos engagements')}.`],
        },
      ]}
    />
  )
}
