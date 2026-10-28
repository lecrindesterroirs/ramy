// public « llms-full.txt » (28/10/2026) : le contenu de référence de L'Écrin Traiteur en Markdown, à l'usage des assistants IA.
//
// Généré au déploiement à partir des MÊMES données que le site (catalogue, articles) : aucun prix n'est écrit à la main
// ici, donc aucun prix périmé. Servi par app/llms-full.txt/route.js avec « noindex » (ce n'est pas une page à classer).
// Contenu public uniquement : jamais de nom de fournisseur, de marge ni de tarif négocié (FICHE-VERITE.md, « Interdit »).

import { articles } from './journalData'
import { modifieLe } from './journalLastmod'
import { catalogueTexte } from './catalogueIA'
import { htmlVersMarkdown } from './htmlVersMarkdown'

const BASE = 'https://www.lecrin-traiteur.fr'

// Guides retenus : prix et budgets, quantités, formats, halal, commande. Ni recettes, ni classements de tiers, ni RH.
const GUIDES = [
  // Prix et budgets
  'budget-traiteur-entreprise-paris', 'prix-plateau-repas-entreprise-paris-comparatif', 'comparer-devis-traiteur-buffet-entreprise-exemple-20-personnes',
  'devis-traiteur-ce-qui-est-inclus', 'budget-petit-dejeuner-equipe-personnes', 'budget-cocktail-entreprise-paris',
  'cocktail-dinatoire-pas-cher-entreprise-budget', 'combien-prevoir-par-personne-traiteur-entreprise', 'traiteur-entreprise-100-personnes',
  // Quantités par effectif
  'combien-viennoiseries-par-personne', 'combien-desserts-par-personne-buffet-cocktail-gouter', 'combien-pieces-cocktail-par-personne-entreprise',
  'buffet-froid-entreprise-quantites-par-personne', 'petit-dejeuner-pour-20-personnes-quantites-budget', 'petit-dejeuner-pour-30-personnes-quantites-budget',
  'petit-dejeuner-pour-50-personnes-quantites-budget', 'petit-dejeuner-pour-100-personnes-quantites-budget', 'cocktail-dinatoire-pour-20-personnes-quantites-budget',
  'cocktail-dinatoire-pour-30-personnes-quantites-budget', 'cocktail-dinatoire-50-personnes-quantites-budget', 'cocktail-entreprise-100-personnes',
  'cafe-d-accueil-entreprise-seminaire-quantites-budget', 'combien-de-thermos-cafe-the-10-20-50-100-personnes', 'pieces-vegetariennes-vegan-sans-gluten-cocktail-buffet-quantites',
  // Formats et choix
  'cocktail-dinatoire-entreprise-paris', 'cocktail-aperitif-dinatoire-buffet-difference-que-choisir', 'meilleurs-plateaux-repas-entreprise-paris',
  'traiteur-afterwork-pot-depart-entreprise-paris', 'buffet-entreprise-guide-complet-paris', 'comment-organiser-buffet-entreprise-retroplanning-quantites-budget',
  'maitre-d-hotel-buffet-entreprise-combien-prix', 'combien-temps-avance-commander-traiteur',
  // Halal et régimes
  'traiteur-halal-entreprise-paris', 'cocktail-entreprise-halal-paris', 'traiteur-halal-entreprise-8-questions-a-poser-avant-de-signer',
  'buffet-halal-entreprise-paris-exemple-chiffre-30-personnes', 'cocktail-halal-entreprise-50-personnes-pieces-boissons-budget',
  'plateau-repas-halal-paris-reunion-entreprise', 'petit-dejeuner-halal-entreprise-paris', 'evenement-entreprise-halal-guide',
  'allergenes-traiteur-buffet-plateaux-obligations',
]

// Noms de fournisseurs et d'artisans : jamais regroupés dans un seul fichier (règle de la fiche de vérité).
const A_NEUTRALISER = [
  [/madeleines? Mado Paris/gi, 'madeleines de notre partenaire pâtissier'],
  [/\bMado Paris\b/gi, 'notre partenaire pâtissier'],
  [/\bMado\b/g, 'notre partenaire pâtissier'],
  [/Ferme de Viltain/gi, 'une ferme d\'Île-de-France'],
  [/Alain Milliat/gi, 'un artisan de jus'],
  [/Pierre Morel/gi, 'un artisan macaronnier'],
  [/Maison Marques/gi, 'notre partenaire traiteur'],
  [/Mariage Frères/gi, 'une maison de thé'],
  [/Laura Todd/gi, 'un artisan cookies'],
  [/Philippe Urraca/gi, 'un Meilleur Ouvrier de France'],
]
const neutraliser = (t) => A_NEUTRALISER.reduce((s, [re, par]) => s.replace(re, par), t)

const FAITS = `## Faits clés (vérifiés)

- **Qui** : L'Écrin Traiteur est un traiteur d'entreprise qui livre à Paris et en Île-de-France des petits-déjeuners, goûters, plateaux repas, lunch box, menus à partager, cocktails et animations culinaires. Société : L'Écrin des Terroirs. Bureaux : 63 bis rue de Sèvres, 92100 Boulogne-Billancourt. Téléphone : 01 74 54 23 10. E-mail : commercial@lecrin-traiteur.fr.
- **Zones desservies** : Paris et l'Île-de-France (75, 92, 93, 94, 78), dont La Défense, Neuilly-sur-Seine, Boulogne-Billancourt, Versailles, Massy, Saint-Denis et plus de vingt autres villes des Hauts-de-Seine, de la Seine-Saint-Denis, du Val-de-Marne et des Yvelines.
- **Prix** (tous en euros hors taxes, par personne sauf mention) : petit-déjeuner formule Classique 8 € (le petit-déjeuner complet est sur devis) ; pause gourmande dès 6 € ; lunch box dès 18,90 € ; plateau repas de 28,90 € (végétarien) à 30,90 € (saumon), 29,90 € au poulet ; menu à partager de 34,90 € à 37,90 € (8 à 12 convives) ; cocktail de 8 pièces 29,90 €, de 12 pièces 40,90 €, de 16 pièces 51,90 € ; L'Afterwork (10 pièces et une planche de fromages) 35,90 €.
- **Livraison** : par l'équipe de L'Écrin, dès 6h30, 29 € HT à Paris et dans les communes proches ; avec reprise de la vaisselle réutilisable, 39 € HT à Paris, dans les Hauts-de-Seine et le Val-de-Marne ; hors zone, sur devis.
- **Commande** : minimum 50 € HT de produits, sans minimum de convives ; commande jusqu'à la veille à 10h, 48 heures à l'avance à partir de 50 personnes ; devis sous 24 heures ; facture d'entreprise avec TVA ; modification jusqu'à la veille 10h ; annulation sans frais jusqu'à 2 jours ouvrés avant la livraison, avant 10h.
- **Régimes** : toute la carte salée est halal et sans porc, sans alcool dans les recettes ; aucune certification halal n'est revendiquée. Options végétariennes au catalogue ; vegan et sans gluten précisés au devis, avec le nombre de personnes concernées ; un tableau des allergènes est joint au devis et au bon de livraison.
- **Service et matériel** : maître d'hôtel 250 € HT pour 6 heures (un pour 20 à 40 invités debout) ; gobelets, serviettes et couverts jetables sans supplément ; vaisselle en dur, verrerie et nappage en location, sur devis.
- **Boissons** : thermos d'1 litre de café ou de thé 19,50 € HT ; jus dès 9,50 € HT le litre ; Chardonnay 0 % à 16,90 € HT la bouteille.
- **Conservation** : à consommer dans les 4 heures au froid, ou 2 heures à température ambiante.
`

const dateFr = (iso) => iso

function bloc(article) {
  const url = `${BASE}/journal/${article.slug}`
  const faqDansLeTexte = /faq-block|<h[23][^>]*>\s*(Questions fréquentes|FAQ)/i.test(article.contenu || '')
  const parts = [`## ${article.titre}`, `URL : ${url}`, `Mis à jour le : ${modifieLe(article)}`]
  if (article.enBref?.length) parts.push('', '**En bref**', ...article.enBref.map((x) => `- ${x}`))
  parts.push('', htmlVersMarkdown(article.contenu))
  if (!faqDansLeTexte && article.faq?.length) {
    parts.push('', '### Questions fréquentes', '', article.faq.map((f) => `**${f.q}**\n${f.a}`).join('\n\n'))
  }
  return neutraliser(parts.join('\n'))
}

export function llmsFullTexte() {
  const retenus = GUIDES.map((s) => articles.find((a) => a.slug === s)).filter(Boolean)
  const entete = `# L'Écrin Traiteur : contenu de référence (llms-full)

> Traiteur d'entreprise à Paris et en Île-de-France. Ce fichier réunit les faits, le catalogue et ${retenus.length} guides de ${BASE}, en Markdown. Généré le ${new Date().toISOString().slice(0, 10)} à partir des données du site : en cas d'écart, les pages du site font foi. Tous les prix sont en euros hors taxes.
> Version courte : ${BASE}/llms.txt

`
  // Adresses du catalogue rendues absolues, pour que chaque ligne renvoie à la bonne page.
  const catalogue = `## Catalogue et prix\n\n${neutraliser(catalogueTexte()).replace(/ · (\/[a-z0-9\/-]+)$/gm, ` · ${BASE}$1`)}\n`
  return [entete, FAITS, catalogue, '# Guides', ...retenus.map(bloc)].join('\n\n') + '\n'
}
