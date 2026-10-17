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

function normaliser(chemin) {
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

/* ───────────────────────────────────────────────────────────────────────────
   Quelles pages existent en anglais, et réécriture des liens.

   Les surcouches du Journal gardent les liens français (c'est le contrat
   passé avec la session GEO : elle n'a aucune carte de correspondance à
   tenir). La réécriture se fait ici, au rendu : un lien ne part vers /en que
   si la page anglaise existe vraiment, sinon il reste en français. Aucun lien
   ne peut donc casser, et les pages traduites plus tard seront prises en
   compte sans rien retoucher dans les surcouches.
   ─────────────────────────────────────────────────────────────────────────── */

/* Les cinq pages anglaises historiques n'utilisent pas le chemin français :
   elles ont leur propre adresse. On les traite à part. */
export const PAGES_EN_SPECIALES = {
  '/tarifs': '/en/pricing',
  '/creations/petits-dejeuners-et-pauses': '/en/office-breakfast-paris',
  '/creations/plateaux-repas': '/en/office-lunch-paris',
  '/creations/cocktails': '/en/cocktail-reception-paris',
  '/traiteur-halal': '/en/halal-catering-paris',
}

/**
 * Équivalent anglais d'un chemin français, ou null s'il n'y en a pas.
 * @param {string} cheminFr
 * @param {string[]} slugsJournalEn slugs du Journal traduits (lib/en/journal → enSlugs())
 */
export function equivalentEn(cheminFr, slugsJournalEn = []) {
  const c = normaliser(cheminFr)
  if (PAGES_EN_SPECIALES[c]) return PAGES_EN_SPECIALES[c]
  if (c === '/journal') return '/en/journal'
  const m = /^\/journal\/([^/]+)$/.exec(c)
  if (m && slugsJournalEn.includes(m[1])) return `/en/journal/${m[1]}`
  return null
}

/**
 * Réécrit les liens internes d'un fragment HTML vers leur version anglaise,
 * quand elle existe. Les liens externes, les ancres, les mailto et les tel
 * ne sont pas touchés, ni les liens déjà en /en.
 */
export function reecrireLiensEn(html, slugsJournalEn = []) {
  if (!html) return html
  return String(html).replace(/href="(\/[^"#]*)"/g, (tout, chemin) => {
    if (chemin.startsWith('/en/') || chemin === '/en') return tout
    const en = equivalentEn(chemin, slugsJournalEn)
    return en ? `href="${en}"` : tout
  })
}
