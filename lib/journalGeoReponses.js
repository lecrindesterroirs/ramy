// Guides « réponses GEO » du 24 octobre 2026 : deux questions où les assistants IA ne citaient pas encore
// L'Écrin Traiteur (relevé du 24/10/2026 : ChatGPT, Gemini, Perplexity).
//   1. Prix d'un plateau repas d'entreprise à Paris : comparatif de 8 traiteurs, prix relevés le 24/10/2026
//      sur la page officielle de chacun (« Non publié » quand le site ne donne pas l'information).
//   2. Petit-déjeuner d'entreprise pour demain matin : heure limite, quantités pour 30 personnes, check-list.
// Prix L'Écrin : app/creations/plateaux-repas/data.js (plateaux), lib/calculsPrix.js (LIV, recette du
// petit-déjeuner), lib/prixEntree.js (Classique, viennoiseries et café, minimum). Aucun prix recopié.
// Règles : FICHE-VERITE.md. Petit-déjeuner complet « sur devis » : aucun total ni fourchette publiés.
// À fusionner dans le Journal comme les autres familles (journalData.js), surcouche anglaise :
// lib/en/journal/journalGeoReponses.js.

import { PRODUITS, prixMenu } from '../app/creations/plateaux-repas/data'
import { LIV, pdj } from './calculsPrix'
import { PDJ_DES, PDJ_LEGER, MINIMUM } from './prixEntree'

/* ───────────── Formats ───────────── */
const fr = (x, deuxDecimales = false) => {
  const r = Math.round(x * 100) / 100
  const s = deuxDecimales || !Number.isInteger(r) ? r.toFixed(2) : String(r)
  const [entier, dec] = s.split('.')
  const groupe = entier.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  return dec ? `${groupe},${dec}` : groupe
}
const eur = (x, deuxDecimales = false) => `${fr(x, deuxDecimales)} €`

const faqHtml = (faq) => `
      <div class="faq-block">
${faq.map(({ q, a }) => `        <details>
          <summary><strong>${q}</strong></summary>
          <p>${a}</p>
        </details>`).join('\n')}
      </div>`

/* ───────────── Plateaux repas : prix du catalogue ───────────── */
const num = (s) => Number(String(s).replace(',', '.'))
const PLATEAUX = PRODUITS.map(p => ({ nom: p.nom, categorie: p.categorie, prix: num(prixMenu(p)), entree: p.entree, plat: p.plat, dessert: p.dessert }))
const ORDRE = { vegetarien: 0, poulet: 1, poisson: 2 }
PLATEAUX.sort((a, b) => ORDRE[a.categorie] - ORDRE[b.categorie] || a.nom.localeCompare(b.nom))
const PRIX_MIN = Math.min(...PLATEAUX.map(p => p.prix))
const PRIX_MAX = Math.max(...PLATEAUX.map(p => p.prix))
const prixCat = (c) => PLATEAUX.find(p => p.categorie === c).prix
const nomsCat = (c) => PLATEAUX.filter(p => p.categorie === c).map(p => p.nom)
const CAT_FR = { vegetarien: 'Végétarien', poulet: 'Poulet', poisson: 'Poisson' }

// Exemple : 20 plateaux pour une réunion (8 végétariens, 8 poulet, 4 poisson)
const MIX = [
  { categorie: 'vegetarien', qte: 8 },
  { categorie: 'poulet', qte: 8 },
  { categorie: 'poisson', qte: 4 },
].map(l => ({ ...l, pu: prixCat(l.categorie), total: l.qte * prixCat(l.categorie) }))
const N_EX = MIX.reduce((s, l) => s + l.qte, 0)
const EX_PRODUITS = MIX.reduce((s, l) => s + l.total, 0)
const EX_TOTAL = EX_PRODUITS + LIV
const EX_TOUS_MIN = N_EX * PRIX_MIN + LIV

/* ───────────── Petit-déjeuner : repères pour 30 personnes ───────────── */
const P30 = pdj(30) // quantités seulement (le total du petit-déjeuner complet n'est jamais affiché)
const CLASSIQUE_30 = 30 * PDJ_DES + LIV

const DATE = '24 octobre 2026'
const ISO = '2026-10-24'
const RELEVE = '24/10/2026'

/* ───────────── Relevé des prix du 24/10/2026 ───────────── */
// Valeurs lues sur les pages officielles le 24/10/2026 (voir le compte rendu de la session).
export const RELEVE_PLATEAUX = [
  {
    nom: "L'Écrin Traiteur",
    prix: `${eur(PRIX_MIN, true)} HT (de ${eur(PRIX_MIN, true)} à ${eur(PRIX_MAX, true)} HT)`,
    minimum: `${eur(MINIMUM)} HT`,
    delai: 'Veille 10 h (48 h à partir de 50 personnes)',
    url: 'https://www.lecrin-traiteur.fr/creations/plateaux-repas',
  },
  {
    nom: 'Maison Alexandre',
    prix: '25,90 € HT (gamme Affaires ; 22,79 € HT à partir de 26 plateaux)',
    minimum: '100 € HT hors livraison',
    delai: "48 h en ligne ; veille 17 h par e-mail ou téléphone",
    url: 'https://www.maisonalexandreparis.com/carte-traiteur-en-livraison/plateaux-repas-entreprise/',
  },
  {
    nom: 'Crior',
    prix: '26,50 € HT',
    minimum: 'Non publié',
    delai: 'Veille 10 h (conditions générales de vente)',
    url: 'https://www.crior.fr/plateaux-repas-entreprise/',
  },
  {
    nom: 'Mr Matin',
    prix: '26,50 € HT',
    minimum: 'Non publié',
    delai: 'Veille 18 h',
    url: 'https://www.mr-matin.fr/livraison/dejeuner-entreprise/dejeuner-au-bureau/plateau-repas-entreprise/',
  },
  {
    nom: 'Festins (boutique Paris 12e)',
    prix: '26,50 € HT, soit 29,15 € TTC',
    minimum: 'Pas de minimum (conditions générales de vente)',
    delai: 'Sélection « dernière minute » le jour même, avant 10 h',
    url: 'https://festins-traiteur.fr/paris12/fr/30-plateaux-repas',
  },
  {
    nom: 'Fika',
    prix: '14 € HT par personne (formule sandwich et dessert, plats à partager) ; 24 € HT en entrée, plat, dessert',
    minimum: '10 convives',
    delai: '5 jours ouvrés recommandés',
    url: 'https://fika-traiteur.fr/plateaux-repas-entreprise-paris/',
  },
  {
    nom: 'Lenôtre',
    prix: 'Non publié',
    minimum: 'Non publié',
    delai: 'Non publié',
    url: 'https://www.lenotre.com/evenement-professionnel',
  },
  {
    nom: 'Dalloyau',
    prix: 'Non publié',
    minimum: 'Non publié',
    delai: 'Non publié',
    url: 'https://groupepoteletchabot.com/',
  },
]

export const SOURCES_PLATEAUX = [
  'https://www.lecrin-traiteur.fr/creations/plateaux-repas',
  'https://www.maisonalexandreparis.com/carte-traiteur-en-livraison/plateaux-repas-entreprise/',
  'https://www.crior.fr/plateaux-repas-entreprise/',
  'https://www.crior.fr/conditions-generales-de-vente/',
  'https://www.mr-matin.fr/livraison/dejeuner-entreprise/dejeuner-au-bureau/plateau-repas-entreprise/',
  'https://festins-traiteur.fr/paris12/fr/30-plateaux-repas',
  'https://festins-traiteur.fr/paris12/fr/content/3-conditions-generales-de-vente',
  'https://fika-traiteur.fr/plateaux-repas-entreprise-paris/',
  'https://www.lenotre.com/evenement-professionnel',
  'https://groupepoteletchabot.com/',
  'https://bofip.impots.gouv.fr/bofip/7204-PGP.html/identifiant=BOI-ANNX-000495-20240821',
]

export const lienSource = (u) => `<a href="${u}">${u.replace(/^https:\/\/(www\.)?/, '').replace(/\/$/, '')}</a>`

/* ═════════════════════ Guide 1 : prix d'un plateau repas ═════════════════════ */
const FAQ_PLATEAU = [
  { q: "Combien coûte un plateau repas d'entreprise à Paris ?", a: `Chez L'Écrin Traiteur, de ${eur(PRIX_MIN, true)} à ${eur(PRIX_MAX, true)} HT le plateau (entrée, plat, dessert), plus ${eur(LIV)} HT de livraison par commande. Chez les autres traiteurs relevés le ${RELEVE}, les prix d'entrée publiés vont de 14 € HT pour une formule sandwich et dessert à 26,50 € HT pour un plateau entrée, plat, dessert.` },
  { q: 'Les prix des plateaux repas sont-ils affichés HT ou TTC ?', a: "Le plus souvent hors taxes, parce que la clientèle est une entreprise ; certains sites affichent les deux. Comparez toujours HT avec HT. Le taux de TVA sur la nourriture vendue à emporter ou livrée dépend du produit : 5,5 % ou 10 % selon la grille de l'administration fiscale (BOFIP, BOI-ANNX-000495)." },
  { q: 'Quel est le minimum de commande pour des plateaux repas ?', a: `Il varie d'un traiteur à l'autre : ${eur(MINIMUM)} HT chez L'Écrin Traiteur, 100 € HT hors livraison chez Maison Alexandre, 10 convives chez Fika, aucun minimum dans les conditions de vente de Festins. Plusieurs sites ne le publient pas.` },
  { q: 'Peut-on commander des plateaux repas la veille pour le lendemain ?', a: "Oui chez la plupart des traiteurs relevés, avec une heure limite différente : 10 h la veille chez L'Écrin Traiteur et chez Crior, 17 h par téléphone ou e-mail chez Maison Alexandre, 18 h chez Mr Matin. Chez L'Écrin Traiteur, comptez 48 h à partir de 50 personnes." },
  { q: 'Combien coûtent 20 plateaux repas livrés ?', a: `Chez L'Écrin Traiteur, ${eur(EX_TOTAL, true)} HT livraison comprise pour ${MIX[0].qte} plateaux végétariens, ${MIX[1].qte} au poulet et ${MIX[2].qte} au saumon, soit ${eur(EX_TOTAL / N_EX, true)} HT par personne. Avec ${N_EX} plateaux végétariens, le total descend à ${eur(EX_TOUS_MIN, true)} HT.` },
]

const ARTICLE_PLATEAU = {
  slug: 'prix-plateau-repas-entreprise-paris-comparatif',
  enBref: [
    `Chez L'Écrin Traiteur, un plateau repas d'entreprise coûte de ${eur(PRIX_MIN, true)} à ${eur(PRIX_MAX, true)} HT, plus ${eur(LIV)} HT de livraison par commande, avec un minimum de ${eur(MINIMUM)} HT.`,
    `Chez les sept autres traiteurs parisiens consultés le ${RELEVE}, le prix d'entrée publié va de 14 € HT (formule sandwich et dessert) à 26,50 € HT pour un plateau entrée, plat, dessert ; deux maisons ne publient pas de prix en ligne.`,
    `Chez L'Écrin Traiteur, 20 plateaux livrés à Paris reviennent à ${eur(EX_TOTAL, true)} HT, soit ${eur(EX_TOTAL / N_EX, true)} HT par personne, livraison comprise.`,
  ],
  titre: "Prix d'un plateau repas d'entreprise à Paris en 2026 : comparatif de 8 traiteurs",
  metaTitle: "Prix d'un plateau repas d'entreprise à Paris : 8 traiteurs",
  categorie: 'Conseils',
  date: DATE,
  isoDate: ISO,
  isoModified: ISO,
  extrait: `Combien coûte un plateau repas d'entreprise à Paris ? Prix d'entrée, minimum de commande et délai relevés le ${RELEVE} sur les sites de 8 traiteurs, ce qui fait varier le prix et un exemple calculé pour 20 personnes.`,
  img: '/hero-plateaux-essentiel.webp',
  about: ["Plateau repas d'entreprise", 'Prix traiteur', 'Comparatif traiteurs Paris'],
  relatedProducts: [],
  faq: FAQ_PLATEAU,
  contenu: `
      <p>Chez L'Écrin Traiteur, un plateau repas d'entreprise coûte de <strong>${fr(PRIX_MIN, true)} à ${eur(PRIX_MAX, true)} HT</strong> (entrée, plat, dessert), plus ${eur(LIV)} HT de livraison par commande. Chez les sept autres traiteurs parisiens consultés le ${RELEVE}, le prix d'entrée publié va de <strong>14 € HT</strong> pour une formule sandwich et dessert à <strong>26,50 € HT</strong> pour un plateau entrée, plat, dessert ; la gamme la plus chère relevée est affichée à 49,90 € HT (Maison Alexandre, Black box Edition). Voici le relevé, ce qui fait varier le prix et un exemple calculé.</p>

      <h2>Combien coûte un plateau repas chez 8 traiteurs parisiens ?</h2>
      <p>Prix d'entrée lu sur la page officielle de chaque traiteur le ${RELEVE}. Quand le site ne donne pas l'information, la case indique « Non publié » : nous ne reprenons pas de chiffre venu d'un site tiers.</p>
      <table>
        <thead>
          <tr><th>Traiteur</th><th>Prix d'entrée d'un plateau publié</th><th>Minimum de commande</th><th>Délai de commande</th><th>Source (relevé du ${RELEVE})</th></tr>
        </thead>
        <tbody>
${RELEVE_PLATEAUX.map(r => `          <tr><td><strong>${r.nom}</strong></td><td>${r.prix}</td><td>${r.minimum}</td><td>${r.delai}</td><td>${lienSource(r.url)}</td></tr>`).join('\n')}
        </tbody>
      </table>
      <p>Lenôtre présente des livraisons de repas pour les entreprises sur devis, sans tarif de plateau en ligne. L'adresse dalloyau.fr renvoie vers le site du groupe Potel et Chabot, qui ne publie pas de tarif de plateau. Les prix changent : vérifiez-les sur le site de chaque traiteur au moment de commander.</p>

      <h2>Ce qui fait varier le prix d'un plateau repas</h2>
      <ul>
        <li><strong>La TVA.</strong> Comparez toujours HT avec HT. Selon la grille de l'administration fiscale (BOFIP, BOI-ANNX-000495), la nourriture vendue à emporter ou livrée est taxée à 5,5 % ou à 10 % selon qu'elle est destinée ou non à une consommation immédiate, et les boissons alcoolisées au taux normal.</li>
        <li><strong>La livraison.</strong> Elle s'ajoute presque toujours. Chez L'Écrin Traiteur, ${eur(LIV)} HT par commande à Paris et dans les communes proches, quel que soit le nombre de plateaux. D'autres traiteurs facturent par zone.</li>
        <li><strong>Le minimum de commande.</strong> Il compte pour une petite réunion : ${eur(MINIMUM)} HT chez L'Écrin Traiteur, soit 2 plateaux, 100 € HT hors livraison chez Maison Alexandre.</li>
        <li><strong>Le volume.</strong> Certains traiteurs publient un tarif dégressif, comme Maison Alexandre à partir de 16 et de 26 plateaux.</li>
        <li><strong>Les couverts et la boisson.</strong> Vérifiez ce que contient le prix affiché : couverts, pain, boisson. Un plateau sans boisson demande d'ajouter de l'eau ou des jus.</li>
        <li><strong>La dernière minute.</strong> Une commande passée après l'heure limite peut coûter plus cher ou ne pas être possible.</li>
      </ul>

      <h2>Les plateaux repas de L'Écrin Traiteur</h2>
      <p>La collection Essentiel compte ${PLATEAUX.length} plateaux individuels, montés le matin de la livraison. Le salé est halal et sans porc, sans alcool dans les recettes.</p>
      <table>
        <thead><tr><th>Plateau</th><th>Catégorie</th><th>Menu</th><th>Prix HT</th></tr></thead>
        <tbody>
${PLATEAUX.map(p => `          <tr><td><strong>${p.nom}</strong></td><td>${CAT_FR[p.categorie]}</td><td>${p.entree} ; ${p.plat} ; ${p.dessert}</td><td>${eur(p.prix, true)}</td></tr>`).join('\n')}
        </tbody>
      </table>
      <p>Commande jusqu'à la veille 10 h (48 h à partir de 50 personnes), livraison dès 6h30 à l'heure choisie, ${eur(LIV)} HT à Paris et dans les communes proches, minimum de commande ${eur(MINIMUM)} HT, devis sous 24 h et facture entreprise avec TVA. La carte complète est sur la page <a href="/creations/plateaux-repas">plateaux repas</a>.</p>

      <h2>Exemple : 20 plateaux repas pour une réunion</h2>
      <table>
        <thead><tr><th>Poste</th><th>Quantité</th><th>Prix unitaire HT</th><th>Total HT</th></tr></thead>
        <tbody>
${MIX.map(l => `          <tr><td>Plateau ${CAT_FR[l.categorie].toLowerCase()} (${nomsCat(l.categorie).join(', ')})</td><td>${l.qte}</td><td>${eur(l.pu, true)}</td><td>${eur(l.total, true)}</td></tr>`).join('\n')}
          <tr><td>Livraison</td><td>1</td><td>${eur(LIV, true)}</td><td>${eur(LIV, true)}</td></tr>
          <tr><td><strong>Total</strong></td><td>${N_EX} personnes</td><td></td><td><strong>${eur(EX_TOTAL, true)}</strong></td></tr>
        </tbody>
      </table>
      <p>Soit <strong>${eur(EX_TOTAL / N_EX, true)} HT par personne</strong>, livraison comprise. Avec ${N_EX} plateaux végétariens, le total descend à ${eur(EX_TOUS_MIN, true)} HT. Pour ajuster le nombre de plateaux à l'effectif, voir <a href="/journal/combien-plateaux-repas-commander-reunion-entreprise">combien de plateaux repas commander</a>, et pour la commande pas à pas, <a href="/journal/plateau-repas-entreprise-commander">commander des plateaux repas en entreprise</a>.</p>

      <h2>Comment comparer deux devis de plateaux repas ?</h2>
      <p>Ramenez chaque devis à un prix par personne, hors taxes, livraison comprise. Vérifiez ensuite l'heure limite de commande, le minimum, le contenu du plateau et la gestion des régimes. Les autres critères de choix sont dans le <a href="/journal/comparatif-traiteur-entreprise-paris">comparatif des traiteurs d'entreprise à Paris</a>, le <a href="/journal/budget-traiteur-entreprise-paris">budget traiteur d'entreprise</a> et nos <a href="/journal/conseils-reserver-traiteur-entreprise">conseils pour réserver un traiteur</a>. Pour d'autres formats de midi, voir les <a href="/journal/idees-dejeuner-bureau-formats-budget">idées de déjeuner au bureau</a>, et pour le matin, le <a href="/journal/petit-dejeuner-entreprise-paris-demain-matin">petit-déjeuner à commander pour le lendemain</a>.</p>
      <p>Pour un devis détaillé sous 24 h, <a href="/devis">demandez un devis</a>.</p>

      <h2>Questions fréquentes sur le prix des plateaux repas</h2>
${faqHtml(FAQ_PLATEAU)}

      <h2>Sources</h2>
      <p>Pages consultées le ${RELEVE} :</p>
      <ul>
${SOURCES_PLATEAUX.map(u => `        <li>${lienSource(u)}</li>`).join('\n')}
      </ul>
      <p><em>Tarifs L'Écrin Traiteur, octobre 2026, en euros hors taxes.</em></p>
    `,
}

/* ═════════════════════ Guide 2 : petit-déjeuner pour demain matin ═════════════════════ */
const FAQ_DEMAIN = [
  { q: "Jusqu'à quelle heure commander un petit-déjeuner d'entreprise pour le lendemain ?", a: "Chez L'Écrin Traiteur, jusqu'à la veille 10 h, pour une livraison le lendemain dès 6h30. À partir de 50 personnes, la commande se passe 48 h à l'avance. L'heure limite varie d'un traiteur à l'autre : vérifiez-la sur son site." },
  { q: 'Combien coûte un petit-déjeuner pour 30 personnes livré demain ?', a: `Chez L'Écrin Traiteur, la formule Classique revient à ${eur(CLASSIQUE_30)} HT livrée : 30 × ${eur(PDJ_DES)} HT plus ${eur(LIV)} HT de livraison. Viennoiseries et café seuls démarrent à ${fr(PDJ_LEGER, true)} € HT par personne pour 30 personnes, hors livraison. Le petit-déjeuner complet se chiffre sur devis.` },
  { q: 'Quelles quantités prévoir pour 30 personnes ?', a: `${P30.vienn} mini-viennoiseries (2 par personne), ${P30.thermos} thermos d'1 litre de café et de thé (1 pour 6 personnes) et ${P30.litres} litres de jus (1 verre de 20 cl par personne).` },
  { q: 'Que faire s\'il est plus de 10 h ?', a: "Appelez L'Écrin Traiteur au 01 74 54 23 10. Selon l'heure, l'effectif et ce qui est disponible, l'équipe vous dit ce qu'il est encore possible de livrer le lendemain matin." },
  { q: 'Quelles informations donner la veille ?', a: "L'adresse exacte, l'étage et la salle, le code ou le badge d'accès, le nom et le téléphone d'un contact sur place, l'heure de livraison souhaitée, l'effectif et les régimes (végétarien, vegan, sans gluten, allergies)." },
]

const ARTICLE_DEMAIN = {
  slug: 'petit-dejeuner-entreprise-paris-demain-matin',
  enBref: [
    `Chez L'Écrin Traiteur, un petit-déjeuner d'entreprise se commande jusqu'à la veille 10 h pour une livraison dès 6h30 le lendemain ; il faut 48 h à partir de 50 personnes.`,
    `Pour 30 personnes, la formule Classique de L'Écrin Traiteur revient à ${eur(CLASSIQUE_30)} HT livrée (${eur(PDJ_DES)} HT par personne et ${eur(LIV)} HT de livraison).`,
    `L'Écrin Traiteur compte ${P30.vienn} mini-viennoiseries, ${P30.thermos} thermos d'1 litre et ${P30.litres} litres de jus pour un petit-déjeuner de 30 personnes.`,
  ],
  titre: "Petit-déjeuner d'entreprise à Paris pour demain matin : jusqu'à quand commander et que prévoir pour 30 personnes",
  metaTitle: "Petit-déjeuner d'entreprise pour demain à Paris : délai",
  categorie: 'Conseils',
  date: DATE,
  isoDate: ISO,
  isoModified: ISO,
  extrait: `Un petit-déjeuner pour demain matin ? Chez L'Écrin Traiteur, commande jusqu'à la veille 10 h, livraison dès 6h30. Quantités pour 30 personnes, budget (${eur(CLASSIQUE_30)} HT en formule Classique livrée) et check-list de la veille.`,
  img: '/prod-viennoiseries.webp',
  about: ["Petit-déjeuner d'entreprise", 'Délai de commande', 'Quantités par personne'],
  relatedProducts: ['viennoiseries-melangees'],
  faq: FAQ_DEMAIN,
  contenu: `
      <p>Chez L'Écrin Traiteur, vous commandez jusqu'à la veille 10 h pour une livraison le lendemain dès 6h30 (48 h à partir de 50 personnes) ; pour 30 personnes, le Classique revient à <strong>${eur(CLASSIQUE_30)} HT livré</strong> (${eur(PDJ_DES)} HT par personne + ${eur(LIV)} de livraison). Voici ce qu'il faut prévoir, ce qu'il faut vérifier la veille et que faire si l'heure limite est passée.</p>

      <h2>Jusqu'à quand commander un petit-déjeuner pour demain matin ?</h2>
      <table>
        <thead><tr><th>Effectif</th><th>Heure limite chez L'Écrin Traiteur</th><th>Livraison</th></tr></thead>
        <tbody>
          <tr><td>Moins de 50 personnes</td><td>La veille, 10 h</td><td>Le lendemain, dès 6h30, à l'heure choisie</td></tr>
          <tr><td>50 personnes et plus</td><td>48 h avant</td><td>Dès 6h30, à l'heure choisie</td></tr>
        </tbody>
      </table>
      <p>L'heure limite n'est pas la même chez tous les traiteurs : vérifiez-la sur le site de chacun avant de comparer. Le minimum de commande chez L'Écrin Traiteur est de ${eur(MINIMUM)} HT.</p>

      <h2>Que prévoir pour 30 personnes ?</h2>
      <table>
        <thead><tr><th>Produit</th><th>Repère</th><th>Pour 30 personnes</th></tr></thead>
        <tbody>
          <tr><td>Mini-viennoiseries</td><td>2 par personne</td><td>${P30.vienn} pièces, soit ${P30.plateaux} plateaux de 30</td></tr>
          <tr><td>Café et thé</td><td>1 thermos d'1 L pour 6 personnes</td><td>${P30.thermos} thermos (${P30.cafe} de café, ${P30.the} de thé)</td></tr>
          <tr><td>Jus</td><td>1 verre de 20 cl par personne</td><td>${P30.litres} litres</td></tr>
        </tbody>
      </table>
      <p>Ces repères sont ceux que L'Écrin Traiteur applique à ses devis. Le détail produit par produit est dans <a href="/journal/petit-dejeuner-pour-30-personnes-quantites-budget">petit-déjeuner pour 30 personnes</a>, <a href="/journal/combien-viennoiseries-par-personne">combien de viennoiseries par personne</a> et <a href="/journal/boissons-petit-dejeuner-entreprise">les boissons du petit-déjeuner</a>.</p>

      <h2>Quel budget pour 30 personnes ?</h2>
      <table>
        <thead><tr><th>Format</th><th>Prix HT</th><th>Pour 30 personnes</th></tr></thead>
        <tbody>
          <tr><td>Viennoiseries et café</td><td>Dès ${fr(PDJ_LEGER, true)} € HT par personne (viennoiseries et café, pour 30 personnes, hors livraison)</td><td>Livraison de ${eur(LIV)} HT en sus</td></tr>
          <tr><td>Formule Classique</td><td>${eur(PDJ_DES)} HT par personne</td><td><strong>${eur(CLASSIQUE_30)} HT livrée</strong> (30 × ${eur(PDJ_DES)} + ${eur(LIV)})</td></tr>
          <tr><td>Petit-déjeuner complet</td><td>Sur devis</td><td>Devis sous 24 h</td></tr>
        </tbody>
      </table>
      <p>Pour d'autres effectifs, voir le <a href="/journal/budget-petit-dejeuner-equipe-personnes">budget petit-déjeuner par nombre de personnes</a> ; pour la composition, <a href="/journal/de-quoi-se-compose-petit-dejeuner-entreprise">de quoi se compose un petit-déjeuner d'entreprise</a>. Toute la carte est sur la page <a href="/creations/petits-dejeuners-et-pauses">petits-déjeuners et pauses</a>.</p>

      <h2>Et si l'effectif change d'ici demain ?</h2>
      <p>${P30.vienn} mini-viennoiseries correspondent exactement à 2 par personne. Si quelques participants peuvent s'ajouter, prévoyez un plateau de 30 mini-viennoiseries de plus (48,90 € HT) : il couvre jusqu'à 15 personnes supplémentaires. Pour les boissons, un thermos de plus couvre 6 personnes. Si l'effectif atteint 50 personnes, le délai de 48 h s'applique : appelez avant de modifier la commande.</p>

      <h2>Comment installer le petit-déjeuner à l'arrivée ?</h2>
      <p>Pour 30 personnes, une grande table suffit. Posez le café et le thé à un bout, les jus à l'autre, les viennoiseries au milieu : le passage s'étale et la file se forme moins. Prévoyez une poubelle à proximité et quelques serviettes en plus. Faites livrer avant l'arrivée des premiers participants, pour que tout soit en place quand la réunion commence.</p>

      <h2>La check-list de la veille</h2>
      <ul>
        <li><strong>Adresse exacte</strong> : numéro, bâtiment, entrée à utiliser.</li>
        <li><strong>Étage et salle</strong> où poser le petit-déjeuner.</li>
        <li><strong>Badge ou code d'accès</strong> : prévenez l'accueil ou la sécurité de l'heure de livraison.</li>
        <li><strong>Contact sur place</strong> : un nom et un numéro de téléphone joignable le matin.</li>
        <li><strong>Heure de livraison</strong> : 15 à 30 minutes avant l'arrivée des participants.</li>
        <li><strong>Effectif et régimes</strong> : nombre de végétariens, de vegans, de personnes sans gluten et allergies à signaler.</li>
      </ul>
      <p>La liste complète des points à valider est dans la <a href="/journal/checklist-office-manager-commander-traiteur">check-list de l'office manager</a>.</p>

      <h2>Il est plus de 10 h : que faire ?</h2>
      <p>Appelez L'Écrin Traiteur au <strong>01 74 54 23 10</strong>. Selon l'heure, l'effectif et ce qui est disponible, l'équipe vous dit ce qu'il est encore possible de livrer le lendemain matin. Préparez l'adresse, l'heure et l'effectif avant d'appeler.</p>

      <h2>Commander</h2>
      <p>Pour un devis détaillé sous 24 h, <a href="/devis">demandez un devis</a>. Pour le déjeuner, voir aussi le <a href="/journal/prix-plateau-repas-entreprise-paris-comparatif">prix d'un plateau repas d'entreprise à Paris</a>.</p>
      <p><em>Tarifs L'Écrin Traiteur, octobre 2026, en euros hors taxes. Livraison ${eur(LIV)} HT à Paris et dans les communes proches, minimum de commande ${eur(MINIMUM)} HT.</em></p>

      <h2>Questions fréquentes sur le petit-déjeuner du lendemain</h2>
${faqHtml(FAQ_DEMAIN)}
    `,
}

export const GEO_REPONSES_ARTICLES = [ARTICLE_PLATEAU, ARTICLE_DEMAIN]

// Valeurs réutilisées par la surcouche anglaise (aucun chiffre recopié).
export const GEO_REPONSES_VALEURS = { PLATEAUX, PRIX_MIN, PRIX_MAX, MIX, N_EX, EX_TOTAL, EX_TOUS_MIN, P30, CLASSIQUE_30, LIV, PDJ_DES, PDJ_LEGER, MINIMUM }
