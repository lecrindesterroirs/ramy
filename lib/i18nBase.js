/*
  Socle de la version anglaise du site.

  Trois principes, posés avec la session GEO le 17 octobre 2026 :

  1. Une seule source pour les prix et les quantités. Les fichiers anglais ne
     portent que du texte ; tout le reste (prix, images, dates, allergènes)
     est lu depuis les données françaises. Un prix ne doit jamais se corriger
     à deux endroits.
  2. Les adresses anglaises reprennent les adresses françaises sous /en.
     /creations/plateaux-repas → /en/creations/plateaux-repas. Les slugs ne
     sont pas traduits : la correspondance hreflang reste triviale et aucun
     lien ne peut casser.
  3. Une page n'existe en anglais que si elle est traduite. Pas de repli
     silencieux vers le français : une page à moitié traduite est pire que
     pas de page du tout.
*/

export const BASE = 'https://www.lecrin-traiteur.fr'
export const LANGUES = ['fr', 'en']

/** '/creations/plateaux-repas' → '/en/creations/plateaux-repas' */
export function versEn(chemin) {
  const c = normaliser(chemin)
  return c === '/' ? '/en' : `/en${c}`
}

/** '/en/creations/plateaux-repas' → '/creations/plateaux-repas' */
export function versFr(chemin) {
  const c = normaliser(chemin)
  if (c === '/en') return '/'
  return c.startsWith('/en/') ? c.slice(3) : c
}

export function estAnglais(chemin) {
  const c = normaliser(chemin)
  return c === '/en' || c.startsWith('/en/')
}

export function langueDe(chemin) {
  return estAnglais(chemin) ? 'en' : 'fr'
}

export function normaliser(chemin) {
  if (!chemin) return '/'
  let c = String(chemin).split('?')[0].split('#')[0]
  if (!c.startsWith('/')) c = '/' + c
  if (c.length > 1 && c.endsWith('/')) c = c.slice(0, -1)
  return c
}

/*
  Bloc `alternates` à poser dans generateMetadata. On ne déclare hreflang que
  si la page existe VRAIMENT dans les deux langues : un hreflang qui pointe
  vers une 404 est pire que pas de hreflang.

    alternatesPour('/creations/plateaux-repas', { en: true })
*/
export function alternatesPour(cheminFr, { en = false } = {}) {
  const fr = normaliser(cheminFr)
  const canonical = fr
  if (!en) return { canonical }
  return {
    canonical,
    languages: {
      'fr-FR': `${BASE}${fr}`,
      'en': `${BASE}${versEn(fr)}`,
      'x-default': `${BASE}${fr}`,
    },
  }
}

/** Même chose, pour la page anglaise elle-même. */
export function alternatesPourEn(cheminFr) {
  const fr = normaliser(cheminFr)
  return {
    canonical: versEn(fr),
    languages: {
      'fr-FR': `${BASE}${fr}`,
      'en': `${BASE}${versEn(fr)}`,
      'x-default': `${BASE}${fr}`,
    },
  }
}

/*
  Équivalent anglais et lien localisé, SANS dépendance aux données anglaises.

  La liste des chemins traduits (`chemins`) est calculée côté serveur par
  lib/i18n.js (CHEMINS_AVEC_EN) puis transmise aux composants client par le
  contexte (components/EnSlugsProvider.js). Les composants client importent
  ce fichier et jamais lib/i18n.js : lib/i18n.js tire tous les textes anglais
  (880 Ko, 200 Ko compressés) et les mettrait dans chaque page.
*/
export function equivalentEnDans(chemins, cheminFr, slugsJournalEn = []) {
  const c = normaliser(cheminFr)
  if (chemins.includes(c)) return versEn(c)
  if (c === '/journal') return '/en/journal'
  const m = /^\/journal\/([^/]+)$/.exec(c)
  if (m && slugsJournalEn.includes(m[1])) return `/en/journal/${m[1]}`
  return null
}

export function lienLocaliseDans(chemins, href, langue, slugsJournalEn = []) {
  if (langue !== 'en' || !href || !href.startsWith('/')) return href
  if (href.startsWith('/en/') || href === '/en') return href
  const [chemin, suite] = href.split(/(?=[?#])/)
  const en = equivalentEnDans(chemins, chemin, slugsJournalEn)
  return en ? en + (suite || '') : href
}

export function reecrireLiensEnDans(chemins, html, slugsJournalEn = []) {
  if (!html) return html
  return String(html).replace(/href="(\/[^"#]*)"/g, (tout, chemin) => {
    if (chemin.startsWith('/en/') || chemin === '/en') return tout
    const en = equivalentEnDans(chemins, chemin, slugsJournalEn)
    return en ? `href="${en}"` : tout
  })
}
