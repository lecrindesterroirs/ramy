/* Catalogue compact destiné à l'assistant du site (app/api/chat).
 *
 * Construit UNE SEULE FOIS au chargement du module, à partir des mêmes données
 * que les pages : il n'y a donc jamais de carte parallèle à maintenir, et une
 * modification produit se répercute sur l'assistant au prochain déploiement.
 *
 * La chaîne produite doit rester stable d'une requête à l'autre : c'est elle
 * qui est mise en cache côté API (cache_control), et le moindre octet qui
 * change invalide le cache et multiplie le coût par dix.
 *
 * Ne JAMAIS y faire entrer de tarif négocié (remises client) : l'assistant ne
 * connaît que les prix publics affichés sur le site.
 */

import { PRODUCTS } from './productsData'
import { BOISSONS } from './boissonsData'
import { PRODUITS as PLATEAUX_REPAS, prixMenu } from '../app/creations/plateaux-repas/data'
import { ANIMATIONS, UNIVERS_LABEL, slugAnim } from '../app/creations/animations-culinaires/data'
import { BOXES } from '../app/creations/lunch-box/data'
import { MENUS as BUFFETS } from '../app/creations/a-partager/data'
import { FORMULES as COCKTAILS } from '../app/creations/cocktails/data'
import { PLATEAUX as APERITIFS } from '../app/creations/plateaux-aperitifs/data'

const eur = (n) => (typeof n === 'number' ? n.toFixed(2).replace('.', ',') : String(n || '')).replace(/\s*€?\s*$/, '')

/* Une ligne par produit : nom · prix · quantité · régimes · allergènes · URL. */
function ligneProduit(p, url) {
  const bouts = [p.name || p.nom]
  if (p.price != null || p.prix) bouts.push(`${eur(p.price ?? p.prix)} € HT`)
  if (p.qty) bouts.push(p.qty)
  if (p.dietary?.length) bouts.push(p.dietary.join('/'))
  if (p.allergens?.length) bouts.push(`allergènes : ${p.allergens.join(', ')}`)
  if (url) bouts.push(url)
  return `- ${bouts.join(' · ')}`
}

function groupe(titre, lignes) {
  return lignes.length ? `\n## ${titre}\n${lignes.join('\n')}` : ''
}

function construire() {
  const parts = []

  // ── Petits-déjeuners, pauses, boissons ──
  const parCategorie = new Map()
  for (const p of PRODUCTS) {
    const k = p.categoryLabel || p.category
    if (!parCategorie.has(k)) parCategorie.set(k, [])
    parCategorie.get(k).push(ligneProduit(p, `/creations/petits-dejeuners-et-pauses/${p.id}`))
  }
  for (const [cat, lignes] of parCategorie) parts.push(groupe(`Petit-déjeuner & pauses — ${cat}`, lignes))

  const parCatBoisson = new Map()
  for (const b of BOISSONS) {
    const k = b.categoryLabel || b.category
    if (!parCatBoisson.has(k)) parCatBoisson.set(k, [])
    parCatBoisson.get(k).push(ligneProduit(b, `/creations/boissons/${b.id}`))
  }
  for (const [cat, lignes] of parCatBoisson) parts.push(groupe(`Boissons — ${cat}`, lignes))

  // ── Plateaux repas ──
  parts.push(groupe('Plateaux repas (individuels, entrée + plat + dessert)', PLATEAUX_REPAS.map(p =>
    `- ${p.nom} · ${prixMenu(p)} € HT/pers · ${p.categorie} · entrée : ${p.entree} · plat : ${p.plat} · dessert : ${p.dessert} · /creations/plateaux-repas/${p.id}`
  )))

  // ── Lunch box ──
  const uneLigne = (s = '') => s.split('\n').map(l => l.trim()).filter(Boolean).filter(l => !/au choix\s*:?$/i.test(l)).join(' ou ')
  parts.push(groupe('Lunch box (sandwich + entrée + dessert, couverts inclus)', BOXES.map(b =>
    `- ${b.nom} · ${b.prix} € HT/pers · ${b.sousTitre} · entrée : ${uneLigne(b.entree)} · dessert : ${uneLigne(b.dessert)} · /creations/lunch-box/${b.id}`
  )))

  // ── Buffets à partager ──
  parts.push(groupe('Buffets à partager (posés au centre de la table)', BUFFETS.map(m =>
    `- ${m.nom} · ${m.prix} HT · salé : ${m.salees.join(', ')} · sucré : ${m.sucrees.join(', ')} · /creations/a-partager/${m.key}`
  )))

  // ── Cocktails ──
  parts.push(groupe('Cocktails d\'entreprise (pièces salées et sucrées par personne)', COCKTAILS.map(f =>
    `- ${f.label} · ${f.prix} € HT/pers · ${f.pieces} pièces · ${f.occasion || 'cocktail'} · /creations/cocktails/${f.key}`
  )))

  // ── Plateaux apéritifs ──
  parts.push(groupe('Plateaux apéritifs (à partager, prix sur devis selon l\'effectif)', APERITIFS.map(p =>
    `- ${p.nom} · ${p.description}${p.recettes?.length ? ` · ${p.recettes.join(', ')}` : ''} · /creations/plateaux-aperitifs/${p.id}`
  )))

  // ── Animations culinaires ──
  parts.push(groupe('Animations culinaires (sur devis : date, lieu, effectif, durée)', ANIMATIONS.map(a =>
    `- ${a.nom} · ${UNIVERS_LABEL[a.univers] || a.univers} · ${a.description} · /creations/animations-culinaires/${slugAnim(a.nom)}`
  )))

  return parts.filter(Boolean).join('\n')
}

let cache = null
export function catalogueTexte() {
  if (cache === null) cache = construire()
  return cache
}
