/*
  Préparation des pages de la carte (/creations/<catégorie> et /en), CÔTÉ
  SERVEUR. Refonte du 23/10/2026 (audit design, chantier 5).

  Pour chaque catégorie : les cartes légères de la grille (nom, photo, prix
  lus dans la fiche), les sections, les formules, le tableau « Combien
  prévoir », la ligne de faits et les questions de la page. Tous les prix
  viennent des fiches ou de lib/prixEntree.js et lib/calculsPrix.js : rien
  n'est recopié à la main. Le gabarit components/ProductsPageTemplate.js ne
  fait que mettre en page.

  Ce fichier lit tous les catalogues : à n'importer que dans une page serveur.
*/
import { PRODUCTS } from './productsData'
import { BOISSONS } from './boissonsData'
import { PAUSES, COFFRETS_MADELEINES } from '../app/creations/pauses-gourmandes/data'
import { PRODUITS as PLATEAUX_REPAS, PRIX as PRIX_PLATEAUX, prixMenu } from '../app/creations/plateaux-repas/data'
import { BOXES } from '../app/creations/lunch-box/data'
import { MENUS } from '../app/creations/a-partager/data'
import { PLATEAUX } from '../app/creations/plateaux-aperitifs/data'
import { ANIMATIONS, UNIVERS_LABEL, slugAnim, prixDesAnimation } from '../app/creations/animations-culinaires/data'
import { FORMULES, LIV } from './calculsPrix'
import { MINIMUM, PDJ_DES, PDJ_LEGER, PAUSE_DES, ANIMATION_DES, euroFr, euroEn } from './prixEntree'
import { enPetitDejeuner } from './en/produits/petitsDejeuners'
import { enPause } from './en/produits/pausesGourmandes'
import { enLunchBox } from './en/produits/lunchBox'
import { enMenu } from './en/produits/aPartager'
import { enPlateauAperitif, FAMILLES_EN } from './en/produits/plateauxAperitifs'
import { enAnimation, UNIVERS_EN } from './en/produits/animations'
import { catalogueAnimations } from './animationsPratique'
import { enBoisson, qtyEn } from './en/produits/boissons'

/* ───────── Formats ───────── */
const ht = (x, en) => (en ? `${euroEn(x)} excl. VAT` : `${euroFr(x)} HT`)
const pp = (en) => (en ? 'per person' : 'par personne')
const num = (s) => {
  const m = [...String(s ?? '').matchAll(/(\d+[.,]\d{1,2}|\d+)/g)].pop()
  return m ? Number(m[1].replace(',', '.')) : null
}
const uniteEn = (u) => (u ? String(u)
  .replace(/(\d+)\s*pièces?/i, '$1 pieces').replace(/(\d+)\s*brochettes?/i, '$1 skewers')
  .replace(/(\d+)\s*mini cr[êe]pes?/i, '$1 mini crêpes').replace(/(\d+)\s*(grandes )?cr[êe]pes?/i, '$1 crêpes')
  .replace(/(\d+)\s*madeleines?/i, '$1 madeleines').replace(/(\d+)\s*pains?/i, '$1 rolls')
  .replace(/(\d+)\s*[-à]\s*(\d+)\s*fruits?/i, '$1 to $2 fruits').replace(/(\d+)\s*à\s*(\d+)\s*pers(onnes)?\.?/i, '$1 to $2 people')
  .replace(/(\d+)\/(\d+)\s*pers\.?/i, '$1 to $2 people').replace(/(\d+)-(\d+)\s*pers\.?/i, '$1 to $2 people')
  .replace(/tranches/i, 'slices').replace(/À partager/i, 'to share') : u)

/* Carte légère de la grille. prix : nombre HT ou null (« sur devis »). */
function carte({ href, nom, img, prix, des = false, parPersonne = false, unite, section, en }) {
  const montant = prix != null ? `${des ? (en ? 'from ' : 'dès ') : ''}${ht(prix, en)}${parPersonne ? ` ${pp(en)}` : ''}` : (en ? 'on request' : 'sur devis')
  return { href: `${en ? '/en' : ''}${href}`, nom, img: img || null, prix, prixTexte: montant, unite: unite || null, section }
}

/* Tableau total livré : n × prix + livraison. */
const livre = (n, prix) => n * prix + LIV
const noteLivraison = (en) => (en
  ? `Totals excl. VAT with delivery (${ht(LIV, true)} in Paris and nearby towns). Minimum order ${ht(MINIMUM, true)}.`
  : `Totaux HT livraison comprise (${ht(LIV)} à Paris et dans les communes proches). Minimum de commande ${ht(MINIMUM)}.`)
const pers = (n, en) => (en ? `${n} people` : `${n} personnes`)
const delai = (en) => (en ? 'order by 2 pm the day before' : "commande jusqu'à la veille 14h")

/* ───────── Petit-déjeuner ───────── */
const SECTIONS_PDJ = {
  fr: ['Viennoiseries et crêpes', 'Madeleines, cakes et biscuits', 'Fruits, yaourts et verrines', 'Petit-déjeuner salé'],
  en: ['Pastries and crêpes', 'Madeleines, loaf cakes and biscuits', 'Fruit, yoghurt and verrines', 'Savoury breakfast'],
}
const sectionPdj = (p) => {
  if (p.section === 'petit-dejeuner-sale') return 3
  if (['viennoiseries-duo', 'chouquettes', 'viennoiseries-melangees', 'crepes', 'mini-crepes', 'brioche-babka'].includes(p.id)) return 0
  if (['brochettes-fruits', 'panier-fruits', 'panna-cotta', 'compote-pomme', 'verrine-salade-fruits', 'yaourt-fermier', 'yaourt-granola'].includes(p.id)) return 2
  return 1
}

export function categoriePdj(en = false) {
  const L = en ? 'en' : 'fr'
  const produits = PRODUCTS
    .filter(p => !en || enPetitDejeuner(p.id))
    .map(p => carte({
      en, href: `/creations/petits-dejeuners-et-pauses/${p.id}`,
      nom: en ? enPetitDejeuner(p.id).name : p.name,
      img: p.img, prix: p.price || null, unite: en ? uniteEn(p.qty) : p.qty,
      section: SECTIONS_PDJ[L][sectionPdj(p)],
    }))
  const effectifs = [10, 20, 50, 100]
  return {
    produits,
    sections: SECTIONS_PDJ[L],
    prixDes: PDJ_LEGER,
    faits: en
      ? `Classic from ${ht(PDJ_DES, true)} per person · pastries and coffee from ${ht(PDJ_LEGER, true)} · delivered from 6:30 am · ${delai(true)}`
      : `Classique dès ${ht(PDJ_DES)} par personne · viennoiseries et café dès ${ht(PDJ_LEGER)} · livraison dès 6h30 · ${delai()}`,
    essentiel: en
      ? `A corporate breakfast costs from ${ht(PDJ_LEGER, true)} per person for pastries and coffee (30 people, before delivery) and ${ht(PDJ_DES, true)} for the Classic (butter pastries, Alain Milliat juice, coffee, fruit). For 20 people, the Classic comes to ${ht(livre(20, PDJ_DES), true)} with delivery. Delivered from 6:30 am, Monday to Friday, across Paris and Île-de-France, ordered by 2 pm the day before.`
      : `Un petit-déjeuner d'entreprise coûte dès ${ht(PDJ_LEGER)} par personne en viennoiseries et café (pour 30 personnes, hors livraison) et ${ht(PDJ_DES)} en formule Classique (viennoiseries pur beurre, jus Alain Milliat, café, fruits). Pour 20 personnes, la Classique revient à ${ht(livre(20, PDJ_DES))} livraison comprise. Livraison dès 6h30, du lundi au vendredi, à Paris et en Île-de-France, sur commande jusqu'à la veille 14h.`,
    formules: {
      titre: en ? 'Breakfast menus and prices' : 'Les formules et leurs prix',
      intro: en ? 'Prices excl. VAT per person. Pick a menu, or build your own from the items below.' : 'Prix HT par personne. Choisissez une formule, ou composez à partir des produits de la carte ci-dessous.',
      cartes: [
        { nom: en ? 'Pastries and coffee' : 'Viennoiseries et café', prix: `${en ? 'from' : 'dès'} ${ht(PDJ_LEGER, en)} ${pp(en)}`, detail: en ? '2 butter mini pastries and coffee per person, price for 30 people before delivery' : '2 mini-viennoiseries pur beurre et du café par personne, prix pour 30 personnes hors livraison' },
        { nom: en ? 'Classic breakfast' : 'Petit-déjeuner Classique', prix: `${ht(PDJ_DES, en)} ${pp(en)}`, detail: en ? 'butter pastries, Alain Milliat juice, coffee, fresh fruit' : 'viennoiseries pur beurre, jus Alain Milliat, café, fruits frais' },
        { nom: en ? 'Full breakfast' : 'Petit-déjeuner complet', prix: en ? 'on quote' : 'sur devis', detail: en ? 'adds madeleines, loaf cake, fruit skewers or yoghurts, priced to your headcount' : 'madeleines, cake, brochettes de fruits ou yaourts en plus, chiffré selon votre effectif' },
      ],
      tableau: {
        titre: en ? 'How much to allow: Classic breakfast' : 'Combien prévoir : formule Classique',
        entetes: en ? ['Headcount', 'Total excl. VAT, delivered', 'Per person'] : ['Effectif', 'Total HT livré', 'Par personne'],
        lignes: effectifs.map(n => [pers(n, en), ht(livre(n, PDJ_DES), en), ht(livre(n, PDJ_DES) / n, en)]),
      },
      note: noteLivraison(en),
    },
  }
}

/* ───────── Pause goûter ───────── */
const SECTIONS_PAUSE = {
  fr: ['Madeleines, macarons et choux', 'Cakes, crêpes et biscuits', 'Tartelettes et verrines', 'Fruits, yaourts et compotes', 'Gâteaux à partager'],
  en: ['Madeleines, macarons and choux', 'Loaf cakes, crêpes and biscuits', 'Tartlets and verrines', 'Fruit, yoghurt and compotes', 'Large cakes to share'],
}
const sectionPause = (p) => {
  if (p.section === 'gateaux-a-partager') return 4
  if (/madeleine|macaron|choux/.test(p.id)) return 0
  if (/tartelette|tartes-fines|mousse|panna|verrine-citron/.test(p.id)) return 2
  if (/yaourt|compote|salade-fruits|brochettes|corbeille/.test(p.id)) return 3
  return 1
}

export function categoriePause(en = false) {
  const L = en ? 'en' : 'fr'
  const produits = PAUSES
    .filter(p => !en || enPause(p.id))
    .map(p => {
      const morceaux = String(p.prix || '').split(',').map(s => s.trim())
      const unite = morceaux.length > 2 ? morceaux[0] : null
      return carte({
        en, href: `/creations/pauses-gourmandes/${p.id}`, nom: en ? enPause(p.id).nom : p.nom, img: p.img,
        prix: num(p.prix), des: /^d[èe]s/i.test(p.prix || ''), unite: en ? uniteEn(unite) : unite,
        section: SECTIONS_PAUSE[L][sectionPause(p)],
      })
    })
  const mad = COFFRETS_MADELEINES[0]
  const gateaux = PAUSES.filter(p => p.section === 'gateaux-a-partager').map(p => num(p.prix)).filter(Boolean)
  const effectifs = [10, 20, 50]
  return {
    produits,
    sections: SECTIONS_PAUSE[L],
    prixDes: PAUSE_DES,
    faits: en
      ? `Afternoon break from ${ht(PAUSE_DES, true)} per person · delivered at the time you choose · ${delai(true)}`
      : `Pause gourmande dès ${ht(PAUSE_DES)} par personne · livrée à l'heure choisie · ${delai()}`,
    essentiel: en
      ? `An afternoon break starts at ${ht(PAUSE_DES, true)} per person for one pastry and one drink. For 20 people, that is ${ht(livre(20, PAUSE_DES), true)} with delivery. Madeleines, macarons, loaf cakes, tartlets and fruit, delivered at 3:30 or 4 pm, or whenever suits you, across Paris and Île-de-France.`
      : `Une pause gourmande démarre à ${ht(PAUSE_DES)} par personne, une pâtisserie et une boisson. Pour 20 personnes, comptez ${ht(livre(20, PAUSE_DES))} livraison comprise. Madeleines, macarons, cakes, tartelettes et fruits, livrés à 15h30, 16h ou à l'heure de votre choix, à Paris et en Île-de-France.`,
    formules: {
      titre: en ? 'Formats and prices' : 'Les formats et leurs prix',
      intro: en ? 'Prices excl. VAT, taken from each product page.' : 'Prix HT, lus dans chaque fiche produit.',
      cartes: [
        { nom: en ? 'Afternoon break' : 'Pause gourmande', prix: `${en ? 'from' : 'dès'} ${ht(PAUSE_DES, en)} ${pp(en)}`, detail: en ? 'one pastry and one drink per person' : 'une pâtisserie et une boisson par personne' },
        { nom: en ? `Box of ${mad.pieces} madeleines` : `Coffret de ${mad.pieces} madeleines`, prix: ht(mad.price, en), detail: en ? uniteEn(mad.sub) : mad.sub, href: `${en ? '/en' : ''}/creations/pauses-gourmandes/madeleines` },
        ...(gateaux.length ? [{ nom: en ? 'Large cake to share' : 'Gâteau à partager', prix: `${en ? 'from' : 'dès'} ${ht(Math.min(...gateaux), en)}`, detail: en ? 'for 8 to 12 people' : 'pour 8 à 12 personnes' }] : []),
      ],
      tableau: {
        titre: en ? 'How much to allow: afternoon break' : 'Combien prévoir : pause gourmande',
        entetes: en ? ['Headcount', 'Total excl. VAT, delivered', 'Per person'] : ['Effectif', 'Total HT livré', 'Par personne'],
        lignes: effectifs.map(n => [pers(n, en), ht(livre(n, PAUSE_DES), en), ht(livre(n, PAUSE_DES) / n, en)]),
      },
      note: noteLivraison(en),
    },
  }
}

/* ───────── Plateaux repas ───────── */
const CAT_PLATEAU = { vegetarien: ['Végétarien', 'Vegetarian'], poulet: ['Poulet', 'Chicken'], viande: ['Viande', 'Meat'], poisson: ['Poisson', 'Fish'] }

export function categoriePlateaux(en = false) {
  const i = en ? 1 : 0
  const produits = PLATEAUX_REPAS.map(p => carte({
    en, href: `/creations/plateaux-repas/${p.id}`, nom: p.nom, img: p.img, prix: num(prixMenu(p)), parPersonne: true,
    unite: en ? null : p.plat, section: CAT_PLATEAU[p.categorie]?.[i],
  }))
  const cats = Object.entries(PRIX_PLATEAUX.essentiel).map(([k, v]) => ({ k, nom: CAT_PLATEAU[k][i], prix: num(v) }))
  const prixDes = Math.min(...cats.map(c => c.prix))
  const effectifs = [10, 20, 50]
  return {
    produits,
    sections: Object.keys(CAT_PLATEAU).filter(k => PLATEAUX_REPAS.some(p => p.categorie === k)).map(k => CAT_PLATEAU[k][i]),
    prixDes,
    faits: en
      ? `From ${ht(prixDes, true)} per person · starter, main, dessert and bread · delivered at the time you set · ${delai(true)}`
      : `Dès ${ht(prixDes)} par personne · entrée, plat, dessert et pain · livré à l'heure fixée · ${delai()}`,
    essentiel: en
      ? `A lunch tray costs ${cats.map(c => `${ht(c.prix, true)} ${c.nom.toLowerCase()}`).join(', ')}, starter, main, dessert and bread included. For 20 people on vegetarian trays, that is ${ht(livre(20, prixDes), true)} with delivery. Allow about a third vegetarian when you do not know the team's preferences.`
      : `Un plateau repas coûte ${cats.map(c => `${ht(c.prix)} en ${c.nom.toLowerCase()}`).join(', ')}, entrée, plat, dessert et pain compris. Pour 20 personnes en plateaux végétariens, comptez ${ht(livre(20, prixDes))} livraison comprise. Prévoyez environ un tiers de végétarien quand vous ne connaissez pas les préférences de l'équipe.`,
    formules: {
      titre: en ? 'Prices by tray' : 'Les prix par plateau',
      intro: en ? 'Each tray is complete: starter, main, dessert and bread, cutlery included.' : 'Chaque plateau est complet : entrée, plat, dessert et pain, couverts compris.',
      cartes: cats.map(c => ({ nom: c.nom, prix: `${ht(c.prix, en)} ${pp(en)}`, detail: PLATEAUX_REPAS.filter(p => p.categorie === c.k).map(p => p.nom).join(', ') })),
      tableau: {
        titre: en ? 'How much to allow' : 'Combien prévoir',
        entetes: [en ? 'Headcount' : 'Effectif', ...cats.map(c => `${c.nom} (${en ? 'delivered' : 'livré'})`)],
        lignes: effectifs.map(n => [pers(n, en), ...cats.map(c => ht(livre(n, c.prix), en))]),
      },
      note: noteLivraison(en),
    },
  }
}

/* ───────── Lunch box ───────── */
export function categorieLunchBox(en = false) {
  const i = en ? 1 : 0
  const boxes = BOXES.filter(b => !en || enLunchBox(b.id))
  const produits = boxes.map(b => carte({
    en, href: `/creations/lunch-box/${b.id}`, nom: b.nom, img: b.img, prix: num(b.prix), parPersonne: true,
    unite: en ? enLunchBox(b.id).sousTitre : b.sousTitre, section: CAT_PLATEAU[b.categorie]?.[i],
  }))
  const cats = Object.keys(CAT_PLATEAU).map(k => {
    const l = BOXES.filter(b => b.categorie === k)
    return l.length ? { k, nom: CAT_PLATEAU[k][i], prix: Math.min(...l.map(b => num(b.prix))), noms: l.map(b => b.nom) } : null
  }).filter(Boolean)
  const prixDes = Math.min(...cats.map(c => c.prix))
  const effectifs = [10, 20, 50]
  return {
    produits,
    sections: cats.map(c => c.nom),
    prixDes,
    faits: en
      ? `From ${ht(prixDes, true)} per person · sandwich, starter and dessert · delivered from 6:30 am · ${delai(true)}`
      : `Dès ${ht(prixDes)} par personne · sandwich, entrée et dessert · livraison dès 6h30 · ${delai()}`,
    essentiel: en
      ? `A lunch box costs from ${ht(prixDes, true)} per person: a sandwich on baguette or brioche bread, a starter and a dessert, napkin and cutlery included. For 20 people, allow ${ht(livre(20, prixDes), true)} with delivery.`
      : `Une lunch box coûte dès ${ht(prixDes)} par personne : un sandwich en baguette ou en pain viennois, une entrée et un dessert, serviette et couverts compris. Pour 20 personnes, comptez ${ht(livre(20, prixDes))} livraison comprise.`,
    formules: {
      titre: en ? 'Prices by box' : 'Les prix par box',
      cartes: cats.map(c => ({ nom: c.nom, prix: `${en ? 'from' : 'dès'} ${ht(c.prix, en)} ${pp(en)}`, detail: c.noms.join(', ') })),
      tableau: {
        titre: en ? 'How much to allow' : 'Combien prévoir',
        entetes: [en ? 'Headcount' : 'Effectif', ...cats.map(c => `${c.nom} (${en ? 'delivered' : 'livré'})`)],
        lignes: effectifs.map(n => [pers(n, en), ...cats.map(c => ht(livre(n, c.prix), en))]),
      },
      note: noteLivraison(en),
    },
  }
}

/* ───────── À partager ───────── */
export function categoriePartage(en = false) {
  const menus = MENUS.map(m => ({ ...m, prixNum: num(m.prix) }))
  const prixDes = Math.min(...menus.map(m => m.prixNum))
  const produits = menus.map(m => carte({
    en, href: `/creations/a-partager/${m.key}`, nom: (en && enMenu(m.key)?.nom) || m.nom, img: m.img, prix: m.prixNum, parPersonne: true,
    unite: (en && enMenu(m.key)?.accroche) || m.accroche,
  }))
  const effectifs = [10, 20, 30]
  return {
    produits,
    sections: [],
    prixDes,
    faits: en
      ? `From ${ht(prixDes, true)} per person · salads and boards set out to share · ${delai(true)}`
      : `Dès ${ht(prixDes)} par personne · salades et planches dressées à partager · ${delai()}`,
    essentiel: en
      ? `A sharing menu costs from ${ht(prixDes, true)} per person: plated salads, boards and sweet pieces set in the middle of the table. For 20 people, allow ${ht(livre(20, prixDes), true)} with delivery.`
      : `Un menu à partager coûte dès ${ht(prixDes)} par personne : salades dressées, planches et douceurs posées au centre de la table. Pour 20 personnes, comptez ${ht(livre(20, prixDes))} livraison comprise.`,
    formules: {
      titre: en ? 'The menus and their prices' : 'Les menus et leurs prix',
      cartes: menus.map(m => ({ nom: (en && enMenu(m.key)?.nom) || m.nom, prix: `${ht(m.prixNum, en)} ${pp(en)}`, detail: (en && enMenu(m.key)?.accroche) || m.accroche, href: `${en ? '/en' : ''}/creations/a-partager/${m.key}` })),
      tableau: {
        titre: en ? 'How much to allow' : 'Combien prévoir',
        entetes: [en ? 'Headcount' : 'Effectif', ...menus.map(m => (en && enMenu(m.key)?.nom) || m.nom)],
        lignes: effectifs.map(n => [pers(n, en), ...menus.map(m => ht(livre(n, m.prixNum), en))]),
      },
      note: noteLivraison(en),
    },
  }
}

/* ───────── Plateaux apéritifs ───────── */
const FAMILLES_FR = { sandwichs: 'Sandwichs', gourmands: 'Fromages et charcuteries', fraicheur: 'Fraîcheur', signature: 'Signature', sucre: 'Sucré' }
const PIECES_APERO = 6 // pièces par personne pour un apéritif (repère des guides du Journal : 6 à 8)

export function categorieAperitifs(en = false) {
  const liste = PLATEAUX.filter(p => !en || enPlateauAperitif(p.id))
  const familles = Object.keys(FAMILLES_FR).filter(k => liste.some(p => p.famille === k))
  const nomF = (k) => (en ? FAMILLES_EN[k] : FAMILLES_FR[k])
  const produits = liste.map(p => carte({
    en, href: `/creations/plateaux-aperitifs/${p.id}`, nom: en ? enPlateauAperitif(p.id).nom : p.nom, img: p.img,
    prix: p.prix || null, unite: p.pieces ? (en ? `${p.pieces} pieces` : `${p.pieces} pièces`) : null, section: nomF(p.famille),
  }))
  const chiffres = PLATEAUX.filter(p => p.prix && p.pieces)
  const ref = chiffres.reduce((a, b) => (a.prix <= b.prix ? a : b))
  const cocktail = FORMULES.invitation
  const effectifs = [10, 20, 50]
  const plateaux = (n) => Math.ceil((n * PIECES_APERO) / ref.pieces)
  return {
    produits,
    sections: familles.map(nomF),
    prixDes: ref.prix,
    faits: en
      ? `Platters of ${ref.pieces} pieces from ${ht(ref.prix, true)} · cocktail menu from ${ht(cocktail.prix, true)} per person · ${delai(true)}`
      : `Plateaux de ${ref.pieces} pièces dès ${ht(ref.prix)} · cocktail dès ${ht(cocktail.prix)} par personne · ${delai()}`,
    essentiel: en
      ? `Aperitif platters are ordered by the platter: ${ref.pieces} pieces from ${ht(ref.prix, true)}. Allow ${PIECES_APERO} pieces per person for drinks of an hour or two. Cheese, salmon, crudités and signature platters are priced on quote. For a full reception, the ${cocktail.nom} cocktail menu (${cocktail.pieces} pieces) costs ${ht(cocktail.prix, true)} per person.`
      : `Les plateaux apéritifs se commandent au plateau : ${ref.pieces} pièces dès ${ht(ref.prix)}. Comptez ${PIECES_APERO} pièces par personne pour un apéritif d'une à deux heures. Les plateaux de fromages, de saumon, de crudités et signature se chiffrent au devis. Pour une réception complète, la formule cocktail ${cocktail.nom} (${cocktail.pieces} pièces) coûte ${ht(cocktail.prix)} par personne.`,
    formules: {
      titre: en ? 'Formats and prices' : 'Les formats et leurs prix',
      cartes: [
        ...chiffres.map(p => ({ nom: en ? enPlateauAperitif(p.id)?.nom || p.nom : `Plateau ${p.nom}`, prix: ht(p.prix, en), detail: en ? `${p.pieces} pieces` : `${p.pieces} pièces`, href: `${en ? '/en' : ''}/creations/plateaux-aperitifs/${p.id}` })),
        { nom: en ? `${cocktail.nom} cocktail menu` : `Cocktail ${cocktail.nom}`, prix: `${ht(cocktail.prix, en)} ${pp(en)}`, detail: en ? `${cocktail.pieces} savoury and sweet pieces per person` : `${cocktail.pieces} pièces salées et sucrées par personne`, href: `${en ? '/en' : ''}/creations/cocktails/classique` },
      ],
      tableau: {
        titre: en ? `How much to allow: ${ref.pieces}-piece platters, ${PIECES_APERO} pieces per person` : `Combien prévoir : plateaux de ${ref.pieces} pièces, ${PIECES_APERO} pièces par personne`,
        entetes: en ? ['Headcount', 'Platters', 'Total excl. VAT, delivered'] : ['Effectif', 'Plateaux', 'Total HT livré'],
        lignes: effectifs.map(n => [pers(n, en), String(plateaux(n)), ht(plateaux(n) * ref.prix + LIV, en)]),
      },
      note: en ? `Based on the ${enPlateauAperitif(ref.id)?.nom || ref.nom} platter (${ht(ref.prix, true)}). ${noteLivraison(true)}` : `Calcul sur le plateau ${ref.nom} (${ht(ref.prix)}). ${noteLivraison(false)}`,
    },
  }
}

/* ───────── Boissons ───────── */
const SECTIONS_BOISSONS = { 'Jus & Nectars': ['Jus, nectars et infusions', 'Juices, nectars and infusions'], 'Boissons Chaudes': ['Boissons chaudes', 'Hot drinks'], 'Eaux': ['Eaux', 'Water'] }

export function categorieBoissons(en = false) {
  const i = en ? 1 : 0
  const liste = BOISSONS.filter(b => !en || enBoisson(b.id))
  const produits = liste.map(b => carte({
    en, href: `/creations/boissons/${b.id}`, nom: en ? enBoisson(b.id).name : b.name, img: b.img, prix: b.price || null,
    unite: en ? qtyEn(b.qty) : b.qty, section: SECTIONS_BOISSONS[b.categoryLabel]?.[i] || (en ? 'Other' : 'Autres'),
  }))
  const thermos = BOISSONS.find(b => b.id === 'thermos-cafe')
  const jus = BOISSONS.find(b => b.id === 'jus-orange')
  const chard = BOISSONS.find(b => b.id === 'chardonnay-blanc-de-blancs-0')
  const effectifs = [10, 20, 50]
  const nbThermos = (n) => Math.max(1, Math.ceil(n / 6))
  const nbJus = (n) => Math.ceil(n / 5)
  return {
    produits,
    sections: Object.values(SECTIONS_BOISSONS).map(s => s[i]),
    prixDes: Math.min(...BOISSONS.map(b => b.price).filter(Boolean)),
    faits: en
      ? `Coffee thermos ${ht(thermos.price, true)} · Alain Milliat juice from ${ht(jus.price, true)} per litre · delivered with your order`
      : `Thermos de café ${ht(thermos.price)} · jus Alain Milliat dès ${ht(jus.price)} le litre · livrés avec votre commande`,
    essentiel: en
      ? `Allow one 1-litre thermos for 6 people (6 to 8 cups) and one litre of juice for 5 people. For 20 people, ${nbThermos(20)} thermoses and ${nbJus(20)} litres of juice come to ${ht(nbThermos(20) * thermos.price + nbJus(20) * jus.price, true)}, before delivery. Everything is alcohol-free; still water is added only if you ask for it.`
      : `Comptez un thermos d'un litre pour 6 personnes (6 à 8 tasses) et un litre de jus pour 5 personnes. Pour 20 personnes, ${nbThermos(20)} thermos et ${nbJus(20)} litres de jus reviennent à ${ht(nbThermos(20) * thermos.price + nbJus(20) * jus.price)}, hors livraison. Tout est sans alcool ; l'eau en bouteille s'ajoute seulement si vous la demandez.`,
    formules: {
      titre: en ? 'Reference prices' : 'Les prix de référence',
      cartes: [
        { nom: en ? enBoisson(thermos.id)?.name || thermos.name : thermos.name, prix: ht(thermos.price, en), detail: en ? qtyEn(thermos.qty) : thermos.qty, href: `${en ? '/en' : ''}/creations/boissons/${thermos.id}` },
        { nom: en ? enBoisson(jus.id)?.name || jus.name : `${jus.name} Alain Milliat`, prix: ht(jus.price, en), detail: en ? 'one litre, 5 glasses' : '1 litre, 5 verres', href: `${en ? '/en' : ''}/creations/boissons/${jus.id}` },
        ...(chard ? [{ nom: en ? enBoisson(chard.id)?.name || chard.name : chard.name, prix: ht(chard.price, en), detail: en ? '75 cl, to raise a glass' : '75 cl, pour trinquer sans alcool', href: `${en ? '/en' : ''}/creations/boissons/${chard.id}` }] : []),
      ],
      tableau: {
        titre: en ? 'How much to allow: coffee and juice' : 'Combien prévoir : café et jus',
        entetes: en ? ['Headcount', 'Thermoses (1 L)', 'Juice (litres)', 'Total excl. VAT'] : ['Effectif', 'Thermos (1 L)', 'Jus (litres)', 'Total HT'],
        lignes: effectifs.map(n => [pers(n, en), String(nbThermos(n)), String(nbJus(n)), ht(nbThermos(n) * thermos.price + nbJus(n) * jus.price, en)]),
      },
      note: en ? `Before delivery (${ht(LIV, true)} in Paris and nearby towns), usually added to a breakfast or cocktail order.` : `Hors livraison (${ht(LIV)} à Paris et dans les communes proches), en général ajoutée à un petit-déjeuner ou un cocktail.`,
    },
  }
}

/* ───────── Animations culinaires ───────── */
export function categorieAnimations(en = false) {
  const liste = ANIMATIONS.filter(a => !en || enAnimation(a.id))
  const univers = [...new Set(liste.map(a => a.univers))]
  const nomU = (u) => (en ? UNIVERS_EN[u] : UNIVERS_LABEL[u]) || u
  const produits = liste.map(a => {
    const des = prixDesAnimation(a)
    return carte({ en, href: `/creations/animations-culinaires/${slugAnim(a.nom)}`, nom: en ? enAnimation(a.id).nom : a.nom, img: a.img, prix: des, des: !!des, section: nomU(a.univers) })
  })
  return {
    produits,
    sections: univers.map(nomU),
    prixDes: ANIMATION_DES,
    faits: en
      ? `From ${ht(ANIMATION_DES, true)} per station, set-up and portions included · quote within 24 hours`
      : `Dès ${ht(ANIMATION_DES)} par animation, mise en place et portions comprises · devis sous 24h`,
    essentiel: en
      ? `A live food station costs from ${ht(ANIMATION_DES, true)}, set-up and portions included; the quote follows the headcount and how long it runs. Ask at least a week ahead so we can check access, water and power. Machine rental and infused waters are priced on quote.`
      : `Une animation culinaire coûte dès ${ht(ANIMATION_DES)}, mise en place et portions comprises ; le devis suit l'effectif et la durée. Demandez-la au moins une semaine avant pour que nous vérifiions l'accès, le point d'eau et l'électricité. La location de machine et les eaux infusées se chiffrent au devis.`,
    formules: {
      titre: en ? 'Prices by type of station' : "Les prix par type d'animation",
      cartes: univers.map(u => {
        const l = liste.filter(a => a.univers === u)
        const avecPrix = l.some(a => prixDesAnimation(a))
        return { nom: nomU(u), prix: avecPrix ? `${en ? 'from' : 'dès'} ${ht(ANIMATION_DES, en)}` : (en ? 'on quote' : 'sur devis'), detail: l.slice(0, 4).map(a => (en ? enAnimation(a.id)?.nom : a.nom)).join(', ') }
      }),
    },
    // Blocs GEO du bas de page (29/10/2026) : occasions, coût par personne, FAQ, ItemList.
    animations: catalogueAnimations(en),
  }
}

/* ───────── Coffrets cadeaux ───────── */
const COFFRETS = ['madeleines-20', 'macarons', 'cookies']
const NOMS_COFFRETS = {
  'madeleines-20': [['Coffret de madeleines', '20 madeleines'], ['Box of madeleines', '20 madeleines']],
  macarons: [['Coffret de macarons', '24 macarons'], ['Box of macarons', '24 macarons']],
  cookies: [['Coffret de cookies', '6 cookies Laura Todd'], ['Box of cookies', '6 Laura Todd cookies']],
}

export function categorieCoffrets(en = false) {
  const i = en ? 1 : 0
  const liste = COFFRETS.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean)
  const produits = liste.map(p => carte({ en, href: `/creations/petits-dejeuners-et-pauses/${p.id}`, nom: NOMS_COFFRETS[p.id][i][0], img: p.img, prix: p.price, unite: NOMS_COFFRETS[p.id][i][1] }))
  const prix = liste.map(p => p.price)
  const prixDes = Math.min(...prix)
  const effectifs = [10, 25, 50]
  const ref = liste.find(p => p.id === 'madeleines-20') || liste[0]
  return {
    produits,
    sections: [],
    prixDes,
    faits: en
      ? `Boxes from ${ht(prixDes, true)} to ${ht(Math.max(...prix), true)} · personalised on quote · ${delai(true)}`
      : `Coffrets de ${ht(prixDes)} à ${ht(Math.max(...prix))} · personnalisables sur devis · ${delai()}`,
    essentiel: en
      ? `Our gift boxes cost from ${ht(prixDes, true)} to ${ht(Math.max(...prix), true)} depending on what is inside: madeleines, macarons, Laura Todd cookies. Ribbon, card and message can be personalised on quote, with a few extra days. We deliver to one site, or to several addresses for remote teams.`
      : `Nos coffrets coûtent de ${ht(prixDes)} à ${ht(Math.max(...prix))} selon le contenu : madeleines, macarons, cookies Laura Todd. Ruban, carte et message se personnalisent sur devis, avec quelques jours de délai. Nous livrons sur un site, ou à plusieurs adresses pour les équipes à distance.`,
    formules: {
      titre: en ? 'How much to allow' : 'Combien prévoir',
      tableau: {
        entetes: en ? ['Boxes', NOMS_COFFRETS[ref.id][1][0], 'Total excl. VAT, delivered'] : ['Coffrets', NOMS_COFFRETS[ref.id][0][0], 'Total HT livré'],
        lignes: effectifs.map(n => [String(n), ht(n * ref.price, en), ht(n * ref.price + LIV, en)]),
      },
      note: en ? `One delivery in Paris and nearby towns (${ht(LIV, true)}); several addresses are priced in the quote.` : `Une livraison à Paris et dans les communes proches (${ht(LIV)}) ; plusieurs adresses se chiffrent au devis.`,
    },
  }
}

export { ht, livre }
