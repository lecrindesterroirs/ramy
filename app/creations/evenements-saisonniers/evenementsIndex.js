/*
  Index léger des événements saisonniers : slug, nom, règle de date et liens
  vers les fiches produit. Aucun texte d'article.

  C'est le seul fichier des événements qu'un composant 'use client' a le droit
  d'importer (fiches produit pour la ligne « Idéal pour », menu). Les textes
  vivent dans evenementsData.js, lu côté serveur seulement.

  `produits` : chemins de fiches ou de catégories qui EXISTENT sur le site.
  lib/evenementsLiens.js les résout au build et fait échouer le build si l'un
  d'eux ne correspond à rien : aucun lien cassé ne part en ligne.

  `date` : règle lue par lib/evenementsCalendrier.js. Les fêtes lunaires
  (Nouvel An chinois, Ramadan) sont tenues année par année.
*/

const P = '/creations/petits-dejeuners-et-pauses/'
const G = '/creations/pauses-gourmandes/'
const B = '/creations/boissons/'
const A = '/creations/animations-culinaires/'
const C = '/creations/cocktails/'
const AP = '/creations/plateaux-aperitifs/'

const an = (occ) => occ.debut.getUTCFullYear()

export const EVENEMENTS_INDEX = [
  {
    slug: 'galette-des-rois', nom: 'Galette des Rois', nomEn: 'Galette des Rois',
    date: {
      type: 'epiphanie', duree: 27, sansConseil: true,
      libelle: (o, l) => l === 'en' ? `January ${an(o)}, from Epiphany` : `en janvier ${an(o)}, à partir de l'Épiphanie`,
    },
    produits: [`${G}galette-des-rois-frangipane`, `${G}galette-des-rois-pomme`, `${G}galette-des-rois-noisette`, `${B}jus-pomme`, `${B}thermos-cafe`, `${B}thermos-the`],
  },
  {
    slug: 'dry-january', nom: 'Dry January', nomEn: 'Dry January',
    date: { type: 'periode', debut: '01-01', fin: '01-31', libelle: (o, l) => l === 'en' ? `January ${an(o)}` : `en janvier ${an(o)}` },
    produits: [`${A}bar-a-mocktails`, `${B}chardonnay-blanc-de-blancs-0`, `${B}infusion-gingembre-10l`, `${B}nectar-mangue`, `${A}eaux-infusees`, `${C}classique`],
  },
  {
    slug: 'nouvel-an-chinois', nom: 'Nouvel An chinois', nomEn: 'Chinese New Year',
    date: { type: 'table', dates: { 2027: ['2027-02-06'], 2028: ['2028-01-26'] } },
    produits: [`${AP}si1`, `${A}atelier-sushi-et-maki`, `${B}thermos-the`, `${B}infusion-gingembre-10l`, `${B}nectar-mangue`, `${G}brochettes-fruits`],
  },
  {
    slug: 'chandeleur', nom: 'Chandeleur', nomEn: 'Candlemas',
    date: { type: 'fixe', mois: 2, jour: 2 },
    produits: [`${P}crepes`, `${P}mini-crepes`, `${A}atelier-crepes-et-pancakes`, `${B}jus-pomme`, `${B}thermos-the`, `${B}thermos-cafe`],
  },
  {
    slug: 'saint-valentin', nom: 'Saint-Valentin', nomEn: "Valentine's Day",
    date: { type: 'fixe', mois: 2, jour: 14 },
    produits: [`${G}cupcakes-roses`, `${G}choux-roses`, `${G}fraisier-grand-format`, `${G}tarte-framboise-grand-format`, `${P}cake-framboise`, `${B}jus-pomme-framboise`],
  },
  {
    slug: 'ramadan-aid', nom: 'Ramadan et Aïd', nomEn: 'Ramadan and Eid',
    date: { type: 'table', approx: true, dates: { 2027: ['2027-02-08', '2027-03-09'], 2028: ['2028-01-28', '2028-02-26'] } },
    produits: [`${C}prestige`, '/creations/a-partager', `${A}atelier-libanais-wrap-et-pita`, `${P}navettes-salees`, `${B}thermos-the`, `${B}jus-orange`],
  },
  {
    slug: 'journee-des-femmes', nom: 'Journée des droits des femmes', nomEn: "International Women's Day",
    date: { type: 'fixe', mois: 3, jour: 8 },
    produits: [`${G}cupcakes-roses`, `${G}choux-roses`, `${P}madeleines-20`, `${G}macarons`, `${G}tartes-fines`, `${B}jus-pomme-framboise`],
  },
  {
    slug: 'paques', nom: 'Pâques', nomEn: 'Easter',
    date: { type: 'paques' },
    produits: [`${G}gateau-praline-noisette-partager`, `${G}brownie`, `${G}babka`, `${P}cake-chocolat`, `${G}cookie`, `${G}macarons`],
  },
  {
    slug: 'semaine-qvt', nom: 'Semaine de la QVT', nomEn: 'Workplace Wellbeing Week',
    date: { type: 'periode', debut: '06-01', fin: '06-30', libelle: (o, l) => l === 'en' ? `June ${an(o)}` : `en juin ${an(o)}` },
    produits: [`${A}bar-a-jus-presses`, `${B}jus-orange-presse`, `${G}brochettes-fruits`, `${P}panier-fruits`, `${P}yaourt-granola`, `${P}compote-pomme`],
  },
  {
    slug: 'fete-de-la-musique', nom: 'Fête de la musique', nomEn: 'Fête de la Musique',
    date: { type: 'fixe', mois: 6, jour: 21 },
    produits: [`${AP}sw4`, `${AP}sw3`, `${C}classique`, `${A}bar-a-mocktails`, `${B}chardonnay-blanc-de-blancs-0`, `${B}infusion-passion-10l`],
  },
  {
    slug: 'fete-de-fin-dannee', nom: "Fête de fin d'année", nomEn: 'End-of-year party',
    date: { type: 'periode', debut: '06-15', fin: '07-10', libelle: (o, l) => l === 'en' ? `mid-June to early July ${an(o)}` : `de mi-juin à début juillet ${an(o)}` },
    produits: [`${C}classique`, `${C}signature`, `${AP}go1`, `${AP}go4`, `${G}tarte-citron-meringuee-grande`, `${B}chardonnay-blanc-de-blancs-0`],
  },
  {
    slug: 'ete', nom: 'Été', nomEn: 'Summer',
    date: { type: 'periode', debut: '07-01', fin: '08-31', libelle: (o, l) => l === 'en' ? `July and August ${an(o)}` : `en juillet et en août ${an(o)}` },
    produits: [`${A}bar-a-glaces-artisanales`, '/creations/lunch-box', `${G}brochettes-fruits`, `${G}panna-cotta`, `${B}infusion-gingembre-10l`, `${A}eaux-infusees`],
  },
  {
    slug: 'rentree', nom: 'Rentrée', nomEn: 'Back to work',
    date: { type: 'periode', debut: '09-01', fin: '09-30', libelle: (o, l) => l === 'en' ? `September ${an(o)}` : `en septembre ${an(o)}` },
    produits: [`${P}viennoiseries-melangees`, `${B}thermos-cafe`, `${B}thermos-the`, `${B}jus-orange`, `${P}panier-fruits`, '/creations/personnalisation'],
  },
  {
    slug: 'journee-mondiale-du-cafe', nom: 'Journée mondiale du café', nomEn: 'International Coffee Day',
    date: { type: 'fixe', mois: 10, jour: 1 },
    produits: [`${A}barista`, `${A}location-de-machine-expresso-professionnelle-en-entreprise`, `${B}thermos-cafe`, `${P}madeleines-20`, `${G}cookie`, `${G}babka`],
  },
  {
    slug: 'octobre-rose', nom: 'Octobre Rose', nomEn: 'Pink October',
    date: { type: 'periode', debut: '10-01', fin: '10-31' },
    produits: [`${P}madeleines-octobre-rose`, `${G}macarons-octobre-rose`, `${G}cupcakes-roses`, `${G}choux-roses`, `${B}petillant-vermentino-rose`, `${P}cake-framboise`],
  },
  {
    slug: 'semaine-du-gout', nom: 'Semaine du goût', nomEn: 'Taste Week',
    date: { type: 'periode', debut: '10-12', fin: '10-18', libelle: (o, l) => l === 'en' ? `mid-October ${an(o)}` : `mi-octobre ${an(o)}` },
    produits: [`${A}atelier-fromages-affines`, `${B}jus-pomme`, `${B}jus-abricot`, `${B}jus-pomme-verger`, `${G}macarons`, `${G}choux`],
  },
  {
    slug: 'halloween', nom: 'Halloween', nomEn: 'Halloween',
    date: { type: 'fixe', mois: 10, jour: 31 },
    produits: [`${G}macarons-halloween`, `${G}madeleines-halloween`, `${G}cupcakes-halloween`, `${G}cookie`, `${G}brochettes-fruits`, `${C}classique`],
  },
  {
    slug: 'movember', nom: 'Movember', nomEn: 'Movember',
    date: { type: 'periode', debut: '11-01', fin: '11-30' },
    produits: [`${G}cupcakes-movember`, `${P}madeleines-20`, `${G}brochettes-fruits`, `${P}panier-fruits`, `${G}banana-bread-sans-gluten`, `${B}thermos-cafe`],
  },
  {
    slug: 'thanksgiving', nom: 'Thanksgiving', nomEn: 'Thanksgiving',
    date: { type: 'nieme', mois: 11, jourSemaine: 4, rang: 4 },
    produits: [`${C}signature`, '/creations/a-partager', `${A}atelier-bagels-de-new-york`, `${G}carrot-cake`, `${G}cake-poire`, `${B}jus-pomme-verger`],
  },
  {
    slug: 'noel', nom: 'Noël', nomEn: 'Christmas',
    date: { type: 'periode', debut: '12-01', fin: '12-24', libelle: (o, l) => l === 'en' ? `December ${an(o)}, before the 25th` : `en décembre ${an(o)}, avant le 25` },
    produits: [`${P}madeleines-noel`, `${G}bonbonniere-noel`, `${G}panettone-artisanal-partager`, `${G}gateau-roule-fraise-partager`, `${B}petillant-vermentino-rose`, `${B}thermos-chocolat-noel`],
  },
]

/* Événements dont la sélection contient ce chemin de fiche : ligne « Idéal pour ». */
export function evenementsPourProduit(chemin) {
  if (!chemin) return []
  const c = chemin.replace(/^\/en(?=\/)/, '').replace(/\/+$/, '')
  return EVENEMENTS_INDEX.filter(e => e.produits.includes(c))
}
