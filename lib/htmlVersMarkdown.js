// Convertit le HTML d'un article du journal en Markdown lisible (28/10/2026), pour public/llms-full.txt (lib/llmsFull.js).
// Volontairement simple : les articles n'emploient que titres, paragraphes, listes, tableaux, liens, gras et FAQ en <details>.

const BASE = 'https://www.lecrin-traiteur.fr'

const ENTITES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', euro: '€', laquo: '«', raquo: '»', hellip: '…', rsquo: '’', lsquo: '‘', ndash: '–', mdash: '—' }
const decoder = (s) => s
  .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
  .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(parseInt(d, 10)))
  .replace(/&([a-z]+);/gi, (m, n) => (ENTITES[n.toLowerCase()] ?? m))

const retirerBalises = (s) => s.replace(/<[^>]+>/g, '')
const espaces = (s) => s.replace(/[ \t ]+/g, ' ').replace(/ *\n */g, '\n')

// Inline : gras, italique, liens (adresses relatives rendues absolues).
function inline(s) {
  return s
    .replace(/<a\s[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, (_, href, t) => {
      const texte = retirerBalises(t).trim()
      if (!texte) return ''
      const url = /^https?:/i.test(href) ? href : href.startsWith('/') ? BASE + href : href
      return /^(#|mailto:|tel:)/.test(href) ? texte : `[${texte}](${url})`
    })
    .replace(/<(strong|b)>([\s\S]*?)<\/\1>/gi, (_, __, t) => `**${retirerBalises(t).trim()}**`)
    .replace(/<(em|i)>([\s\S]*?)<\/\1>/gi, (_, __, t) => `*${retirerBalises(t).trim()}*`)
}

const cellule = (h) => decoder(retirerBalises(inline(h))).replace(/\s+/g, ' ').replace(/\|/g, '/').trim()

function tableau(t) {
  const lignes = [...t.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)].map((m) => [...m[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/gi)].map((c) => cellule(c[1])))
  if (!lignes.length) return ''
  const n = Math.max(...lignes.map((l) => l.length))
  const ligne = (l) => `| ${Array.from({ length: n }, (_, i) => l[i] ?? '').join(' | ')} |`
  return `\n\n${[ligne(lignes[0]), `| ${Array(n).fill('---').join(' | ')} |`, ...lignes.slice(1).map(ligne)].join('\n')}\n\n`
}

export function htmlVersMarkdown(html) {
  let s = String(html || '').replace(/<(script|style)[\s\S]*?<\/\1>/gi, '')
  s = inline(s)
  s = s.replace(/<table[\s\S]*?<\/table>/gi, tableau)
  s = s.replace(/<details[^>]*>\s*<summary[^>]*>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/gi, (_, q, a) => `\n\n**${retirerBalises(q).trim()}**\n${retirerBalises(a).trim()}\n\n`)
  s = s.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, (_, t) => `\n\n# ${retirerBalises(t).trim()}\n\n`)
  s = s.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, (_, t) => `\n\n## ${retirerBalises(t).trim()}\n\n`)
  s = s.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, (_, t) => `\n\n### ${retirerBalises(t).trim()}\n\n`)
  s = s.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, (_, t) => `\n\n#### ${retirerBalises(t).trim()}\n\n`)
  // Listes numérotées : numérotation explicite ; listes à puces : tiret.
  s = s.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, (_, l) => { let i = 0; return `\n\n${l.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (__, t) => `${++i}. ${retirerBalises(t).replace(/\s+/g, ' ').trim()}\n`)}\n` })
  s = s.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_, t) => `- ${retirerBalises(t).replace(/\s+/g, ' ').trim()}\n`)
  s = s.replace(/<\/(p|div|ul|section|blockquote)>/gi, '\n\n').replace(/<br\s*\/?>/gi, '\n')
  s = decoder(retirerBalises(s))
  return espaces(s).replace(/\n{3,}/g, '\n\n').trim()
}
