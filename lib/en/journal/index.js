// Guides du Journal en anglais : surcouches de texte par fichier source FR
// (contrat avec la session Site, 17/10/2026). Le reste (image, dates, catégorie,
// auteur) est lu dans l'article français. Un slug absent = pas de page anglaise.
import { articles, articleAuthor } from '../../journalData'
import { EN_JOURNAL as EN_SERVICE } from './journalService'
import { EN_JOURNAL as EN_PRODUITSA } from './journalProduitsA'
import { EN_JOURNAL as EN_PRODUITSB } from './journalProduitsB'
import { EN_JOURNAL as EN_PRODUITSC } from './journalProduitsC'
import { EN_JOURNAL as EN_SALED } from './journalSaleD'
import { EN_JOURNAL as EN_SALEE } from './journalSaleE'
import { EN_JOURNAL as EN_SALEF } from './journalSaleF'
import { EN_JOURNAL as EN_COCKTAIL } from './journalCocktail'
import { EN_JOURNAL as EN_HALAL } from './journalHalal'
import { EN_JOURNAL as EN_DATA } from './journalData'
import { EN_JOURNAL as EN_FINANNEE } from './journalFinAnnee'
import { EN_JOURNAL as EN_HALLOWEEN } from './journalHalloween'
import { EN_JOURNAL as EN_OFFICEA } from './journalOfficeA'
import { EN_JOURNAL as EN_OFFICEB } from './journalOfficeB'
import { EN_JOURNAL as EN_OFFICEC } from './journalOfficeC'
import { EN_JOURNAL as EN_OFFICED } from './journalOfficeD'
import { EN_JOURNAL as EN_OFFICEE } from './journalOfficeE'
import { EN_JOURNAL as EN_OFFICEF } from './journalOfficeF'
import { EN_JOURNAL as EN_QUESTIONS } from './journalQuestions'
import { EN_JOURNAL as EN_GEOGUIDES } from './journalGeoGuides'
import { EN_JOURNAL as EN_METIERS } from './journalMetiers'

const FAMILIES = [
  EN_SERVICE,
  EN_PRODUITSA,
  EN_PRODUITSB,
  EN_PRODUITSC,
  EN_SALED,
  EN_SALEE,
  EN_SALEF,
  EN_COCKTAIL,
  EN_HALAL,
  EN_DATA,
  EN_FINANNEE,
  EN_HALLOWEEN,
  EN_OFFICEA,
  EN_OFFICEB,
  EN_OFFICEC,
  EN_OFFICED,
  EN_OFFICEE,
  EN_OFFICEF,
  EN_QUESTIONS,
  EN_GEOGUIDES,
  EN_METIERS,
]

export const EN_JOURNAL_ALL = Object.assign({}, ...FAMILIES)

const CATEGORIES = { Conseils: 'Advice', Inspirations: 'Inspiration', 'Régimes': 'Dietary needs', QCVT: 'Workplace wellbeing', Recettes: 'Recipes' }
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
export const dateEn = (iso) => {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso || '')
  return m ? `${parseInt(m[3], 10)} ${MONTHS[parseInt(m[2], 10) - 1]} ${m[1]}` : ''
}

export function enSlugs() {
  return Object.keys(EN_JOURNAL_ALL).filter(slug => articles.some(a => a.slug === slug))
}

// Article anglais complet : champs non textuels du FR + texte de la surcouche.
export function enArticle(slug) {
  const fr = articles.find(a => a.slug === slug)
  const en = EN_JOURNAL_ALL[slug]
  if (!fr || !en) return null
  const author = articleAuthor(slug)
  return {
    slug,
    img: fr.img,
    imgPosition: fr.imgPosition,
    isoDate: fr.isoDate,
    isoModified: fr.isoModified,
    categorie: CATEGORIES[fr.categorie] || fr.categorie,
    author: author.isPerson ? { name: 'Ramy Abdelaty', isPerson: true } : { name: "the L'Écrin team", isPerson: false },
    titre: en.titre,
    metaTitle: en.metaTitle,
    extrait: en.extrait,
    enBref: en.enBref || [],
    contenu: en.contenu,
    faq: (en.faq || []).map(f => ({ q: f.q || f.name, a: f.a || f.answer })),
  }
}
