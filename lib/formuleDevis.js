// Formule ou page consultée avant une demande de devis, pour que chaque demande dise ce que le
// visiteur regardait (« Cocktail La Célébration », « Buffet à partager »…). Elle part avec la
// demande (champ `formule`), s'affiche dans l'objet du mail et dans la fiche de l'OS.
// Ajouté le 28/10/2026 à la demande de Ramy.

const COCKTAILS = {
  classique: "L'Invitation",
  signature: 'La Réception',
  prestige: 'La Célébration',
  afterwork: "L'Afterwork",
}

export function formuleDepuisChemin(chemin = '') {
  const p = String(chemin || '').split('?')[0].replace(/^\/en(?=\/|$)/, '').replace(/\/$/, '')
  let m = p.match(/^\/creations\/cocktails\/([a-z-]+)$/)
  if (m && COCKTAILS[m[1]]) return `Cocktail ${COCKTAILS[m[1]]}`
  if (p === '/creations/a-partager') return 'Buffet à partager'
  m = p.match(/^\/creations\/a-partager\/([a-z0-9-]+)$/)
  if (m) return `Buffet à partager, ${m[1].replace(/-/g, ' ')}`
  if (p === '/creations/plateaux-aperitifs') return 'Plateaux apéritifs'
  if (p === '/creations/animations-culinaires') return 'Animations culinaires'
  return ''
}

// Libellé de la demande, tel qu'il apparaît dans l'objet du mail et dans la fiche de l'OS.
// L'OS range les demandes par mots-clés (cocktail, buffet…) : on garde donc le type de prestation et
// on lui ajoute la formule. Si le visiteur a choisi un autre type que celui de la page, la page vue
// s'écrit entre parenthèses plutôt que de contredire son choix.
export function libelleDemande(prestationBase, formule) {
  if (!formule) return prestationBase
  if (/cocktail|buffet/i.test(prestationBase)) return `${prestationBase} · ${formule.replace(/^Cocktail /, '')}`
  return `${prestationBase} (page vue : ${formule})`
}

// Même texte quel que soit l'appelant : une seule ligne, sans balise, 80 caractères au plus.
export const nettoyerFormule = (v) => (typeof v === 'string' ? v.replace(/[\r\n<>]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 80) : '')
