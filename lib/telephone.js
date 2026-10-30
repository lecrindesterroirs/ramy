/*
  Le numéro de téléphone du contact sur place (30/10/2026).

  Première version : une expression régulière française, qui refusait tout
  numéro étranger. Les demandes venues de l'étranger se multiplient — un
  client ne doit pas être bloqué parce qu'il appelle depuis Londres ou Dubaï.

  LES RÈGLES, dans l'ordre où elles s'appliquent. On enlève d'abord tout ce
  qui n'est ni un chiffre ni un « + » : espaces, points, tirets, parenthèses,
  points de suspension. Reste trois formes acceptées :

    +33 6 12 34 56 78   → international, « + » suivi de 8 à 15 chiffres.
                          15 est le maximum qu'autorise la norme E.164.
    0033 6 12 34 56 78  → le « 00 » des anciens préfixes vaut « + ».
    06 12 34 56 78      → format local français : un 0 puis 9 chiffres.
                          C'est la seule forme locale admise, et c'est voulu :
                          un numéro local étranger, sans indicatif, ne se
                          compose pas depuis la France.

  Ce qui est refusé : moins de 8 chiffres après l'indicatif (ce n'est pas un
  numéro), plus de 15 (la norme ne le permet pas), et un numéro local qui
  n'est pas français.
*/

/*
  Ne garde que les chiffres et un « + » de tête. Le « + » est cherché avant le
  premier chiffre, pas seulement au tout début : « (+33) 6 12 34 56 78 » est
  une forme qu'on colle souvent depuis un annuaire, et elle était refusée.
*/
export function nettoieTel(tel) {
  const brut = String(tel || '').trim()
  const plus = /^[^\d]*\+/.test(brut)
  const chiffres = brut.replace(/\D/g, '')
  return plus ? `+${chiffres}` : chiffres
}

export function telValable(tel) {
  const n = nettoieTel(tel)
  if (n.startsWith('+')) return /^\+\d{8,15}$/.test(n)
  if (n.startsWith('00')) return /^00\d{8,15}$/.test(n)
  return /^0\d{9}$/.test(n)          // France, format local
}

/*
  Le format attendu par les banques : « +33612345678 ».
  Un numéro local français est préfixé ; tout le reste garde son indicatif.
*/
export function enE164(tel) {
  const n = nettoieTel(tel)
  if (!n) return undefined
  if (n.startsWith('+')) return n
  if (n.startsWith('00')) return `+${n.slice(2)}`
  if (/^0\d{9}$/.test(n)) return `+33${n.slice(1)}`
  return `+${n}`
}
