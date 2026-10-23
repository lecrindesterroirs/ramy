import ProductsPageTemplate from '../../../components/ProductsPageTemplate'
import { categorieCoffrets } from '../../../lib/categoriesVue'

/*
  Vue partagée par /creations/coffrets-cadeaux et /en/creations/coffrets-cadeaux, rendue côté serveur
  (refonte du 23/10/2026, audit design chantier 5). Avant, une page client
  lisait sa langue dans le chemin ; la langue passe maintenant en paramètre.
  Données et prix : lib/categoriesVue.js.
*/
const SEO_FR = `
  <h2>Coffrets cadeaux d'entreprise gourmands, livrés à Paris</h2>
  <p>Le <strong>coffret cadeau d'entreprise</strong> est le geste qui reste : remerciement d'un client fidèle, félicitations à une équipe, attention de fin d'année pour vos partenaires. Là où un e-mail s'oublie, un coffret gourmand se déballe, se partage et se raconte. L'Écrin Traiteur livre vos coffrets à Paris et en Île-de-France, ou les prépare pour une distribution lors de votre événement.</p>

  <h2>Tous nos coffrets sont personnalisables</h2>
  <p>Chaque coffret peut être adapté à votre image : <strong>assortiment ajusté</strong>, nombre de pièces, rubans et emballages à vos couleurs, message personnalisé, intégration de votre logo. Pour un lancement de produit ou un cadeau client, nous concevons des coffrets entièrement sur mesure, parlez-nous de votre projet, nous nous chargeons du reste.</p>

  <h2>Madeleines, macarons, cookies</h2>
  <p>Un coffret L'Écrin réunit des madeleines, des macarons et des cookies <strong>Laura Todd</strong>, choisis et goûtés un par un. Le contenu exact de chaque coffret figure au devis.</p>

  <h2>Offrir un coffret gourmand à ses clients ou ses équipes</h2>
  <p>Commandez avant <strong>14h la veille</strong> pour une livraison à l'adresse de votre choix. Pour les envois multiples (cadeaux clients de fin d'année, distribution multi-sites), notre équipe organise la logistique complète sur devis, réponse sous 24h, facturation entreprise avec TVA.</p>
`

const SEO_EN = `
  <h2>Gourmet corporate gift boxes, delivered in Paris</h2>
  <p>The <strong>corporate gift box</strong> is the gesture that stays: thanking a loyal client, congratulating a team, an end-of-year attention for your partners. Where an email is forgotten, a gourmet box is unwrapped, shared and talked about. L'Écrin Traiteur delivers your boxes in Paris and the Paris region, or prepares them to be handed out at your event.</p>

  <h2>Every box can be personalised</h2>
  <p>Each box can be adapted to your image: <strong>an adjusted assortment</strong>, the number of pieces, ribbons and packaging in your colours, a personalised message, your logo added. For a product launch or a client gift, we design boxes entirely to measure: tell us about your project and we take care of the rest.</p>

  <h2>Madeleines, macarons, cookies</h2>
  <p>An L'Écrin box brings together madeleines, macarons and <strong>Laura Todd</strong> cookies, chosen and tasted one by one. The exact contents of each box are set out in the quote.</p>

  <h2>Giving a gourmet box to your clients or your teams</h2>
  <p>Order before <strong>2 pm the day before</strong> for delivery to the address of your choice. For multiple shipments (end-of-year client gifts, multi-site distribution), our team organises the whole logistics on quote, with an answer within 24 hours and a company invoice with VAT.</p>
`

export default function VueCoffrets({ en = false }) {
  const c = categorieCoffrets(en)
  const FAQ = en ? [
      { q: 'How much does a gift box cost?', a: c.essentiel },
      { q: 'Can you deliver to several addresses?', a: 'Yes, to one site or to several addresses for remote teams; multiple deliveries are priced in the quote.' },
    ] : [
      { q: 'Combien coûte un coffret cadeau ?', a: c.essentiel },
      { q: 'Peut-on livrer plusieurs adresses ?', a: "Oui, sur un site ou à plusieurs adresses pour les équipes à distance ; les livraisons multiples se chiffrent au devis." },
    ]
  return (
    <ProductsPageTemplate
      lang={en ? 'en' : 'fr'}
      heroImg="/prod-madeleines-50.webp"
      heroAlt={en ? "Box of 50 madeleines" : "Coffret de 50 madeleines"}
      surtitre={en ? "Corporate gifts" : "Cadeaux d'entreprise"}
      heroTitle={en ? "Corporate gift boxes" : "Coffrets cadeaux d'entreprise"}
      heroSubtitle={en ? "Madeleines, macarons and Laura Todd cookies, in boxes ready to give, personalised on quote." : "Madeleines, macarons et cookies Laura Todd, en coffrets prêts à offrir, personnalisables sur devis."}
      faits={c.faits}
      essentiel={c.essentiel}
      formules={c.formules}
      produits={c.produits}
      sections={c.sections}
      seoArticle={en ? SEO_EN : SEO_FR}
      faq={FAQ}
      basePath="/creations/coffrets-cadeaux"
      devisPrestation="Personnalisation"
      devisTitre={{ fr: "Des coffrets à offrir ?", en: "Gift boxes to send?" }}
      nomJsonLd={en ? "Gift boxes" : "Coffrets cadeaux"}
    />
  )
}
