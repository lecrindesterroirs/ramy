/*
  Fiche produit « Afterwork à partager » (créée le 24/10/2026, choix de Ramy :
  24,90 € HT par personne, dès 10 personnes). Le prix vient de lib/prixEntree.js,
  la livraison de lib/calculsPrix.js : rien n'est recopié ici. Les textes FR et EN
  sont dans ce fichier, les pages app/creations/cocktails/afterwork-partage et
  app/en/creations/cocktails/afterwork-partage ne font que les afficher.
*/
import { AFTERWORK_PARTAGE, MINIMUM } from './prixEntree'
import { LIV, FORMULES } from './calculsPrix'

export const CLE = 'afterwork-partage'
export const CHEMIN = `/creations/cocktails/${CLE}`
export const IMG = '/plateau-charcuterie-v2.webp'
export const GALERIE = ['/plateau-charcuterie-v2.webp', '/plateau-fromages.webp', '/plateau-burgers.webp', '/plateau-clubs.webp', '/plateau-wraps.webp']
export const PRIX = AFTERWORK_PARTAGE
export const PIECES_PAR_PERSONNE = 6
export const MIN_PERSONNES = 10
export const EFFECTIFS = [10, 20, 50]

const fr = (x) => {
  const [e, d] = x.toFixed(Number.isInteger(x) ? 0 : 2).split('.')
  const ent = e.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  return d ? `${ent},${d}` : ent
}
const en = (x) => {
  const [e, d] = x.toFixed(Number.isInteger(x) ? 0 : 2).split('.')
  const ent = e.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return d ? `${ent}.${d}` : ent
}
export const prixNombreFr = PRIX.toFixed(2).replace('.', ',')
export const prixNombreEn = PRIX.toFixed(2)

export function textes(lang) {
  const E = lang === 'en'
  const m = (x) => (E ? `€${en(x)} excl. VAT` : `${fr(x)} € HT`)
  const lignes = EFFECTIFS.map(n => ({ n, total: n * PRIX, livre: n * PRIX + LIV }))
  const tableau = E
    ? `<table><thead><tr><th>Group size</th><th>Price excl. VAT</th><th>Delivery included</th></tr></thead><tbody>${lignes.map(l => `<tr><td><strong>${l.n} people</strong></td><td>${m(l.total)}</td><td>${m(l.livre)}</td></tr>`).join('')}</tbody></table>`
    : `<table><thead><tr><th>Effectif</th><th>Prix HT</th><th>Livraison comprise</th></tr></thead><tbody>${lignes.map(l => `<tr><td><strong>${l.n} personnes</strong></td><td>${m(l.total)}</td><td>${m(l.livre)}</td></tr>`).join('')}</tbody></table>`
  const autres = [
    { href: `${E ? '/en' : ''}/creations/cocktails/classique`, title: FORMULES.invitation.nom, meta: E ? `${m(FORMULES.invitation.prix)} per person · ${FORMULES.invitation.pieces} pieces` : `${m(FORMULES.invitation.prix)} par personne · ${FORMULES.invitation.pieces} pièces`, img: '/cocktail-classique.webp' },
    { href: `${E ? '/en' : ''}/creations/cocktails/signature`, title: FORMULES.reception.nom, meta: E ? `${m(FORMULES.reception.prix)} per person · ${FORMULES.reception.pieces} pieces` : `${m(FORMULES.reception.prix)} par personne · ${FORMULES.reception.pieces} pièces`, img: '/cocktail-dinatoire.webp' },
  ]
  return E ? {
    lang: 'en',
    title: 'Sharing afterwork',
    subtitle: 'Cocktail · to share',
    description: `Two boards to set in the middle of the table, ${PIECES_PAR_PERSONNE} mini sandwiches per person and the sweet platter for dessert, for a generous afterwork. Halal and pork-free. From ${MIN_PERSONNES} people.`,
    priceNote: `excl. VAT · per person · from ${MIN_PERSONNES} people`,
    sections: [
      { label: 'Charcuterie board', value: 'Dried beef · Bresaola · Grisons beef · Smoked turkey and chicken · Olives and fresh grapes (one board for 10 to 12 people)' },
      { label: 'Cheese board', value: 'Aged cheeses · Fresh fruit · Artisan bread (one board for 10 to 12 people)' },
      { label: 'Mini sandwiches', value: `${PIECES_PAR_PERSONNE} per person · Mini burgers · Clubs · Rolled mini wraps (platters of 24 pieces)` },
      { label: 'To nibble', value: 'Crisps' },
      { label: 'Dessert', value: 'The sweet platter: cream puffs · macarons · brownies · mini muffins' },
      { label: 'Dietary needs', value: 'Halal and pork-free, no alcohol. Vegetarian, vegan and gluten-free on request.' },
    ],
    related: autres, relatedTitle: 'Our cocktail menus',
    breadcrumb: [{ label: 'Home', href: '/en' }, { label: 'Cocktails', href: '/en/creations/cocktails' }, { label: 'Sharing afterwork' }],
    backHref: '/en/creations/cocktails', backLabel: 'Back to cocktail menus',
    seoEyebrow: 'Afterwork · Corporate catering',
    seoTitle: 'Sharing afterwork: boards and mini sandwiches for your team',
    seoHtml: `
      <p>The <strong>sharing afterwork</strong> is the simple, generous alternative to a cocktail: <strong>${m(PRIX)} per person</strong>, from ${MIN_PERSONNES} people. It brings a halal, pork-free charcuterie board, an aged cheese board with fresh fruit and artisan bread, ${PIECES_PAR_PERSONNE} mini sandwiches per person (mini burgers, clubs and rolled mini wraps) and crisps to nibble.</p>
      <h2>What you pay</h2>
      ${tableau}
      <p>Quantities are rounded up to the platter (24 pieces) and the board (10 to 12 people). Drinks are extra, alcohol-free, in the same order. Sweet pieces are not included: add a fresh fruit skewer or a large cake to share in the quote. Delivery is ${m(LIV)} in Paris and nearby towns; the minimum order is ${m(MINIMUM)}.</p>
      <h2>Ordering and delivery</h2>
      <p>Order until <strong>2 pm the day before</strong>, 48 hours ahead from 50 people. Delivered from <strong>6:30 am</strong>, by our own team, at the time you set, in Paris and the Île-de-France. Company invoice with VAT. To compare with the pieces menus, see <a href="/en/creations/cocktails">our cocktail menus</a> and the <a href="/en/occasions/afterwork-entreprise">afterwork page</a>.</p>
    `,
    devisTitre: 'An afterwork to organise?', devisSousTitre: 'Answer in 30 seconds, personalised quote within 24 hours.',
    meta: {
      title: `Sharing afterwork, boards and mini sandwiches Paris | L'Écrin Traiteur`,
      description: `Sharing afterwork from ${m(PRIX)} per person: halal charcuterie and cheese boards, ${PIECES_PAR_PERSONNE} mini sandwiches each, sweet platter for dessert, from ${MIN_PERSONNES} people.`,
      og: `Halal charcuterie and cheese boards, ${PIECES_PAR_PERSONNE} mini sandwiches per person, from ${MIN_PERSONNES} people, delivered from 6:30 am in Paris.`,
    },
  } : {
    lang: 'fr',
    title: 'Afterwork à partager',
    subtitle: 'Cocktail · à partager',
    description: `Deux planches à poser au centre de la table, ${PIECES_PAR_PERSONNE} mini-sandwichs par personne et le plateau de douceurs en dessert, pour un afterwork généreux. Halal et sans porc. Dès ${MIN_PERSONNES} personnes.`,
    priceNote: `HT · par personne · dès ${MIN_PERSONNES} personnes`,
    sections: [
      { label: 'Planche de charcuteries', value: 'Bœuf séché · Bresaola · Viande des Grisons · Dinde et poulet fumés · Olives et raisin frais (une planche pour 10 à 12 personnes)' },
      { label: 'Planche de fromages', value: 'Fromages affinés · Fruits frais · Pain artisanal (une planche pour 10 à 12 personnes)' },
      { label: 'Mini-sandwichs', value: `${PIECES_PAR_PERSONNE} par personne · Mini burgers · Clubs · Mini wraps roulés (plateaux de 24 pièces)` },
      { label: 'À grignoter', value: 'Chips' },
      { label: 'Dessert', value: 'Le plateau de douceurs : choux à la crème · macarons · brownies · mini muffins' },
      { label: 'Régimes', value: 'Halal et sans porc, sans alcool. Végétarien, vegan et sans gluten sur demande.' },
    ],
    related: autres, relatedTitle: 'Nos formules cocktail',
    breadcrumb: [{ label: 'Accueil', href: '/' }, { label: 'Cocktails', href: '/creations/cocktails' }, { label: 'Afterwork à partager' }],
    backHref: '/creations/cocktails', backLabel: 'Retour aux formules cocktail',
    seoEyebrow: 'Afterwork · Traiteur entreprise',
    seoTitle: 'Afterwork à partager : planches et mini-sandwichs pour votre équipe',
    seoHtml: `
      <p>L'<strong>afterwork à partager</strong> est l'alternative simple et généreuse au cocktail : <strong>${m(PRIX)} par personne</strong>, dès ${MIN_PERSONNES} personnes. Il réunit une planche de charcuteries halal et sans porc, une planche de fromages affinés avec fruits frais et pain artisanal, ${PIECES_PAR_PERSONNE} mini-sandwichs par personne (mini burgers, clubs et mini wraps roulés) et des chips à grignoter.</p>
      <h2>Ce que vous payez</h2>
      ${tableau}
      <p>Les quantités sont arrondies au plateau (24 pièces) et à la planche (10 à 12 personnes). Boissons en plus, sans alcool, dans la même commande. Les pièces sucrées ne sont pas comprises : ajoutez une brochette de fruits frais ou un gâteau à partager au devis. La livraison est à ${m(LIV)} à Paris et dans les communes proches ; le minimum de commande est de ${m(MINIMUM)}.</p>
      <h2>Commande et livraison</h2>
      <p>Commande jusqu'à <strong>14h la veille</strong>, 48 h à l'avance à partir de 50 personnes. Livraison dès <strong>6h30</strong>, par notre équipe, à l'heure que vous fixez, à Paris et en Île-de-France. Facture d'entreprise avec TVA. Pour comparer avec les formules à la pièce, voir <a href="/creations/cocktails">nos formules cocktail</a> et la page <a href="/occasions/afterwork-entreprise">traiteur afterwork d'entreprise</a>.</p>
    `,
    devisTitre: 'Un afterwork à organiser ?', devisSousTitre: 'Répondez en 30 secondes, devis personnalisé sous 24h.',
    meta: {
      title: `Afterwork à partager : planches et mini-sandwichs | L'Écrin`,
      description: `Afterwork à partager dès ${m(PRIX)} par personne : planches de charcuteries halal et de fromages, ${PIECES_PAR_PERSONNE} mini-sandwichs, douceurs, dès ${MIN_PERSONNES} personnes.`,
      og: `Planches de charcuteries halal et de fromages, ${PIECES_PAR_PERSONNE} mini-sandwichs par personne, dès ${MIN_PERSONNES} personnes, livrés dès 6h30 à Paris.`,
    },
  }
}
