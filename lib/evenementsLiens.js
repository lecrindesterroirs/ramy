/*
  Résolution des liens produit des pages « Événements saisonniers ».
  CÔTÉ SERVEUR SEULEMENT : ce fichier lit tous les catalogues du site.

  Chaque chemin de `produits` (evenementsIndex.js) devient une carte
  { href, nom, img, prix, unite } lue dans le catalogue qui fait foi :
  le nom, la photo et le prix sont ceux de la fiche, jamais recopiés.

  Un chemin qui ne correspond à aucune fiche fait ÉCHOUER le build : mieux
  vaut un build rouge qu'un lien cassé en ligne.
*/
import { PRODUCTS } from './productsData'
import { BOISSONS } from './boissonsData'
import { PAUSES } from '../app/creations/pauses-gourmandes/data'
import { ANIMATIONS, slugAnim } from '../app/creations/animations-culinaires/data'
import { PLATEAUX } from '../app/creations/plateaux-aperitifs/data'
import { MENUS } from '../app/creations/a-partager/data'
import { FORMULES } from './calculsPrix'
import { PDJ_DES, PAUSE_DES, LUNCHBOX_DES, euroFr, euroEn } from './prixEntree'
import { enPetitDejeuner } from './en/produits/petitsDejeuners'
import { enPause, prixEn } from './en/produits/pausesGourmandes'
import { enBoisson } from './en/produits/boissons'
import { enAnimation } from './en/produits/animations'
import { enPlateauAperitif } from './en/produits/plateauxAperitifs'
import { lienLocalise } from './i18n'

const COCKTAIL = { classique: FORMULES.invitation, signature: FORMULES.reception, prestige: FORMULES.celebration }

/* « 37,50 € / pers. » → 37.5 */
const nombre = (s) => {
  const m = [...String(s || '').matchAll(/(\d+[.,]\d{1,2}|\d+)/g)].pop()
  return m ? Number(m[1].replace(',', '.')) : null
}
const minMenus = Math.min(...MENUS.map(m => nombre(m.prix)).filter(Boolean))

/* Libellés d'unité courants, pour les cartes anglaises. */
const uniteEn = (u) => u
  .replace(/(\d+)\s*pièces?/i, '$1 pieces')
  .replace(/(\d+)\s*brochettes?/i, '$1 skewers')
  .replace(/(\d+)\s*cr[êe]pes?/i, '$1 crêpes')
  .replace(/(\d+)\s*mini cr[êe]pes?/i, '$1 mini crêpes')
  .replace(/(\d+)\s*fruits?/i, '$1 fruits')
  .replace(/pers\b\.?/i, 'people')
  .replace(/litres?/i, 'litre')

/*
  Carte d'un chemin. prix : nombre (€ HT) ou null pour « sur devis ».
  des : vrai quand le prix est un prix de départ par personne.
*/
function resoudre(chemin) {
  const [, , cat, id] = chemin.split('/')
  switch (cat) {
    case 'petits-dejeuners-et-pauses': {
      if (!id) return { nom: 'Petit-déjeuner', nomEn: 'Breakfast', img: '/hero-petitdej.webp', prix: PDJ_DES, des: true, parPersonne: true }
      const p = PRODUCTS.find(x => x.id === id)
      return p && { nom: p.name, nomEn: enPetitDejeuner(id)?.name, img: p.img, prix: p.price || null, unite: p.qty }
    }
    case 'pauses-gourmandes': {
      if (!id) return { nom: 'Pause gourmande', nomEn: 'Afternoon break', img: '/hero-pauses-gourmandes.webp', prix: PAUSE_DES, des: true, parPersonne: true }
      const p = PAUSES.find(x => x.id === id)
      if (!p) return null
      const morceaux = String(p.prix || '').split(',').map(s => s.trim())
      const unite = morceaux.length > 2 ? morceaux[0] : null
      return { nom: p.nom, nomEn: enPause(id)?.nom, img: p.img, prix: nombre(p.prix), unite, uniteEn: prixEn(p.prix)?.note?.replace(/^excl\. VAT · /, '') || null, des: /^d[èe]s/i.test(p.prix) }
    }
    case 'boissons': {
      const b = BOISSONS.find(x => x.id === id)
      return b && { nom: b.name.replace(/\s+—\s+/g, ', '), nomEn: enBoisson(id)?.name?.replace(/\s+—\s+/g, ', '), img: b.img, prix: b.price || null, unite: b.qty }
    }
    case 'animations-culinaires': {
      const a = ANIMATIONS.find(x => slugAnim(x.nom) === id)
      return a && { nom: a.nom, nomEn: enAnimation(a.id)?.nom, img: a.img, prix: null }
    }
    case 'cocktails': {
      if (!id) return null
      const f = COCKTAIL[id]
      const img = { classique: '/cocktail-classique.webp', signature: '/cocktail-dinatoire.webp', prestige: '/hero-plateaux-aperitifs.webp' }[id]
      return f && { nom: `Cocktail ${f.nom}`, nomEn: `${f.nom} cocktail menu`, img, prix: f.prix, parPersonne: true, unite: `${f.pieces} pièces par personne`, uniteEn: `${f.pieces} canapés per person` }
    }
    case 'plateaux-aperitifs': {
      const p = PLATEAUX.find(x => x.id === id)
      return p && { nom: `Plateau ${p.nom}`, nomEn: enPlateauAperitif(id)?.nom ? `${enPlateauAperitif(id).nom} platter` : null, img: p.img, prix: p.prix || null, unite: p.pieces ? `${p.pieces} pièces` : null }
    }
    case 'a-partager':
      return id ? null : { nom: 'Buffets à partager', nomEn: 'Sharing buffets', img: '/apartager-mediterraneen.webp', prix: minMenus, des: true, parPersonne: true }
    case 'lunch-box':
      return id ? null : { nom: 'Lunch box', nomEn: 'Lunch boxes', img: '/hero-lunch-box.webp', prix: LUNCHBOX_DES, des: true, parPersonne: true }
    case 'personnalisation':
      return id ? null : { nom: 'Personnalisation', nomEn: 'Personalisation', img: '/prod-cookie-personnalisation.webp', prix: null, note: 'madeleines, cookies, emballages', noteEn: 'madeleines, cookies, packaging' }
    default:
      return null
  }
}

/* Texte de prix d'une carte : « 29,90 € HT par personne », « 64,90 € HT », « sur devis ». */
function prixTexte(c, lang) {
  const en = lang === 'en'
  if (c.prix == null) return en ? 'on request' : 'sur devis'
  const montant = en ? `${euroEn(c.prix)} excl. VAT` : `${euroFr(c.prix)} HT`
  const des = c.des ? (en ? 'from ' : 'dès ') : ''
  const pp = c.parPersonne ? (en ? ' per person' : ' par personne') : ''
  return `${des}${montant}${pp}`
}

/*
  Cartes de la sélection d'un événement, dans la langue demandée.
  slugsJournalEn : pour localiser les liens (une fiche sans version anglaise
  garde son lien français, jamais de 404).
*/
export function resoudreProduits(chemins = [], lang = 'fr', slugEvenement = '') {
  const en = lang === 'en'
  return chemins.map(chemin => {
    const c = resoudre(chemin)
    if (!c) throw new Error(`Événement « ${slugEvenement} » : le lien produit ${chemin} ne correspond à aucune fiche du catalogue.`)
    const unite = en ? (c.uniteEn || (c.unite ? uniteEn(c.unite) : null)) : c.unite
    return {
      href: en ? lienLocalise(chemin, 'en') : chemin,
      nom: (en && c.nomEn) || c.nom,
      img: c.img,
      prixTexte: prixTexte(c, lang),
      prix: c.prix,
      unite: c.note ? (en ? c.noteEn : c.note) : unite,
    }
  })
}
