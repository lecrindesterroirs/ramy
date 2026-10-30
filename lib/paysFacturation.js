/*
  Les pays proposés pour l'adresse de facturation (30/10/2026).

  Liste courte et volontairement incomplète : la France d'abord, puis les pays
  d'où viennent réellement les demandes de L'Écrin. Les codes sont ceux
  attendus par Stripe (ISO 3166-1 alpha-2). Pour en ajouter un, une ligne
  suffit.
*/
export const PAYS = [
  ['FR', 'France'],
  ['BE', 'Belgique'],
  ['CH', 'Suisse'],
  ['LU', 'Luxembourg'],
  ['DE', 'Allemagne'],
  ['ES', 'Espagne'],
  ['IT', 'Italie'],
  ['NL', 'Pays-Bas'],
  ['PT', 'Portugal'],
  ['IE', 'Irlande'],
  ['GB', 'Royaume-Uni'],
  ['US', 'États-Unis'],
  ['CA', 'Canada'],
  ['MA', 'Maroc'],
  ['TN', 'Tunisie'],
  ['DZ', 'Algérie'],
  ['AE', 'Émirats arabes unis'],
  ['SA', 'Arabie saoudite'],
  ['QA', 'Qatar'],
  ['SG', 'Singapour'],
  ['JP', 'Japon'],
  ['ID', 'Indonésie'],
]

const NOMS = new Map(PAYS)
export const nomDuPays = (code) => NOMS.get(code) || code
export const paysValable = (code) => NOMS.has(code)
