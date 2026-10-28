// Cartes produit en fin d'article du journal (28/10/2026), avec le prix en € HT et son unité.
//
// Avant : le bloc « Nos produits » ne savait afficher que les produits de petit-déjeuner et de goûter, et
// seulement les articles qui les déclaraient ; un guide sur les plateaux repas ou les cocktails n'avait aucune
// carte, et le prix s'affichait sans « HT » ni conditionnement.
// Ici : la famille de produit se déduit de l'adresse de l'article (plateaux repas, lunch box, menus à partager,
// cocktails), les prix sont lus dans les catalogues du site (jamais recopiés), et chaque carte dit ce que le prix
// couvre : « 29,90 € HT par personne ». Un article peut aussi déclarer ses cartes avec `produitsFin: [ids]`.
// Composant serveur : rien n'est envoyé au client.

import { FORMULES as COCKTAILS } from '../app/creations/cocktails/data'
import { PRODUITS as PLATEAUX, prixMenu } from '../app/creations/plateaux-repas/data'
import { MENUS } from '../app/creations/a-partager/data'
import { BOXES } from '../app/creations/lunch-box/data'

const fr = (x) => Number(String(x).replace(',', '.')).toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
const en = (x) => Number(String(x).replace(',', '.')).toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

// Textes des cartes dans les deux langues (les noms de produits restent ceux du catalogue).
const TEXTES = {
  fr: {
    prix: (x) => `${fr(x)} € HT par personne`,
    pieces: (n) => `${n} pièces par personne`,
    plateau: 'Entrée, plat et dessert', menu: 'Menu à partager, 8 à 12 convives',
    voirFormule: 'Voir la formule', voirPlateau: 'Voir le plateau', voirMenu: 'Voir le menu', voirBox: 'Voir la lunch box',
    titres: { plateaux: 'Nos plateaux repas', lunch: 'Nos lunch box', menus: 'Nos menus à partager', cocktails: 'Nos formules cocktail', mixte: 'Nos formules les plus commandées' },
  },
  en: {
    prix: (x) => `€${en(x)} excl. VAT per person`,
    pieces: (n) => `${n} pieces per person`,
    plateau: 'Starter, main and dessert', menu: 'Sharing menu, 8 to 12 guests',
    voirFormule: 'See the package', voirPlateau: 'See the tray', voirMenu: 'See the menu', voirBox: 'See the lunch box',
    titres: { plateaux: 'Our lunch trays', lunch: 'Our lunch boxes', menus: 'Our sharing menus', cocktails: 'Our cocktail packages', mixte: 'Our most ordered packages' },
  },
}

// Une carte : { id, href, img, nom, prix (ligne de prix), detail, cta }
const carteCocktail = (key, T) => {
  const f = COCKTAILS.find((x) => x.key === key)
  if (!f) return null
  return { id: `cocktail:${key}`, href: `/creations/cocktails/${f.key}`, img: f.img, nom: f.label, prix: T.prix(f.prixNum ?? f.prix), detail: T.pieces(f.pieces), cta: T.voirFormule }
}
const cartePlateau = (id, T) => {
  const p = PLATEAUX.find((x) => x.id === id)
  if (!p) return null
  return { id: `plateau:${id}`, href: `/creations/plateaux-repas/${p.id}`, img: p.img, nom: p.nom, prix: T.prix(prixMenu(p)), detail: T.plateau, cta: T.voirPlateau }
}
const carteMenu = (key, T) => {
  const m = MENUS.find((x) => x.key === key)
  if (!m) return null
  const prix = (String(m.prix).match(/(\d+[.,]\d{2})/) || [])[1]
  if (!prix) return null
  return { id: `menu:${key}`, href: `/creations/a-partager/${m.key}`, img: m.img, nom: m.nom, prix: T.prix(prix), detail: T.menu, cta: T.voirMenu }
}
const carteBox = (id, T, langue) => {
  const b = BOXES.find((x) => x.id === id)
  if (!b) return null
  return { id: `lunchbox:${id}`, href: `/creations/lunch-box/${b.id}`, img: b.img, nom: b.nom, prix: T.prix(b.prix), detail: langue === 'en' ? null : b.sousTitre, cta: T.voirBox }
}

const FAMILLES = {
  plateaux: (T) => [cartePlateau('e2', T), cartePlateau('e5', T), cartePlateau('e1', T)],
  lunch: (T, l) => [carteBox('lb3', T, l), carteBox('lb1', T, l), carteBox('lb4', T, l)],
  menus: (T) => [carteMenu('jardin', T), carteMenu('mediterraneen', T), carteMenu('parisien', T)],
  cocktails: (T) => [carteCocktail('classique', T), carteCocktail('signature', T), carteCocktail('prestige', T)],
  mixte: (T) => [carteMenu('mediterraneen', T), carteCocktail('signature', T), cartePlateau('e2', T)],
}

// Guides où des cartes produit n'ont pas de sens (droit, sources, recettes, RH).
const SANS_CARTES = /allergenes|code-du-travail|vaisselle-jetable|alimentation-fidelisation|bien-manger|recette|barometre|traiteur-rse|calendrier|devis-traiteur-ce-qui|questions-poser|conseils-reserver|comparer-devis|florale|maitre|mocktail|boissons|retroplanning|pieces-vegetariennes|dessert/

export function familleDeLArticle(slug) {
  if (SANS_CARTES.test(slug)) return null
  if (/petit-dejeuner|gouter|pause-gourmande|viennoiser|madeleine|cookie|macaron|brunch|cafe|the-/.test(slug) && !/cocktail|plateau/.test(slug)) return null
  if (/lunch-box/.test(slug)) return 'lunch'
  if (/plateau[x]?-repas/.test(slug)) return 'plateaux'
  const cocktail = /cocktail|dinatoire|aperitif|afterwork|inauguration|lancement|pot-de-depart|soiree/.test(slug)
  const menus = /buffet|a-partager|mezze/.test(slug)
  if (cocktail && menus) return 'mixte'
  if (menus) return 'menus'
  if (cocktail) return 'cocktails'
  if (/^budget-traiteur|halal|seminaire|dejeuner/.test(slug)) return 'mixte'
  return null
}

// Cartes de fin d'article pour la famille déduite, ou null (l'article garde alors ses relatedProducts).
// `langue` : 'fr' (défaut) ou 'en' ; les liens EN sont à passer ensuite par lienLocalise.
export function cartesFinArticle(article, langue = 'fr') {
  const cle = familleDeLArticle(article.slug)
  const T = TEXTES[langue] || TEXTES.fr
  if (!FAMILLES[cle]) return null
  const cartes = FAMILLES[cle](T, langue).filter(Boolean)
  return cartes.length >= 2 ? { titre: T.titres[cle], cartes } : null
}
