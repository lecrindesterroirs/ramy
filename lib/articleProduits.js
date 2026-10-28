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

// Une carte : { id, href, img, nom, prix (ligne de prix), detail, cta }
const carteCocktail = (key) => {
  const f = COCKTAILS.find((x) => x.key === key)
  if (!f) return null
  return { id: `cocktail:${key}`, href: `/creations/cocktails/${f.key}`, img: f.img, nom: f.label, prix: `${fr(f.prixNum ?? f.prix)} € HT par personne`, detail: `${f.pieces} pièces par personne`, cta: 'Voir la formule' }
}
const cartePlateau = (id) => {
  const p = PLATEAUX.find((x) => x.id === id)
  if (!p) return null
  return { id: `plateau:${id}`, href: `/creations/plateaux-repas/${p.id}`, img: p.img, nom: p.nom, prix: `${fr(prixMenu(p))} € HT par personne`, detail: 'Entrée, plat et dessert', cta: 'Voir le plateau' }
}
const carteMenu = (key) => {
  const m = MENUS.find((x) => x.key === key)
  if (!m) return null
  const prix = (String(m.prix).match(/(\d+[.,]\d{2})/) || [])[1]
  if (!prix) return null
  return { id: `menu:${key}`, href: `/creations/a-partager/${m.key}`, img: m.img, nom: m.nom, prix: `${fr(prix)} € HT par personne`, detail: 'Menu à partager, 8 à 12 convives', cta: 'Voir le menu' }
}
const carteBox = (id) => {
  const b = BOXES.find((x) => x.id === id)
  if (!b) return null
  return { id: `lunchbox:${id}`, href: `/creations/lunch-box/${b.id}`, img: b.img, nom: b.nom, prix: `${fr(b.prix)} € HT par personne`, detail: b.sousTitre, cta: 'Voir la lunch box' }
}

const FAMILLES = {
  plateaux: { titre: 'Nos plateaux repas', cartes: () => [cartePlateau('e2'), cartePlateau('e5'), cartePlateau('e1')] },
  lunch: { titre: 'Nos lunch box', cartes: () => [carteBox('lb3'), carteBox('lb1'), carteBox('lb4')] },
  menus: { titre: 'Nos menus à partager', cartes: () => [carteMenu('jardin'), carteMenu('mediterraneen'), carteMenu('parisien')] },
  cocktails: { titre: 'Nos formules cocktail', cartes: () => [carteCocktail('classique'), carteCocktail('signature'), carteCocktail('prestige')] },
  mixte: { titre: 'Nos formules les plus commandées', cartes: () => [carteMenu('mediterraneen'), carteCocktail('signature'), cartePlateau('e2')] },
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
  if (/halal|seminaire|dejeuner/.test(slug)) return 'mixte'
  return null
}

// Cartes de fin d'article pour la famille déduite, ou null (l'article garde alors ses relatedProducts).
export function cartesFinArticle(article) {
  const famille = FAMILLES[familleDeLArticle(article.slug)]
  if (!famille) return null
  const cartes = famille.cartes().filter(Boolean)
  return cartes.length >= 2 ? { titre: famille.titre, cartes } : null
}
