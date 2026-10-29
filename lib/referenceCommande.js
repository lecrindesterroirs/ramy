/*
  Le numéro d'une commande en ligne.

  « C-261113-HHLX » était illisible et impossible à dicter au téléphone.
  Un client lit un numéro, pas un code-barres : quatre chiffres, rien d'autre.
  La date et le reste vivent dans l'OS, pas dans la référence.

  Collisions : quatre chiffres donnent 9 000 numéros. Au rythme actuel
  (une centaine de commandes par mois), deux commandes peuvent porter le même
  numéro au bout de quelques années — elles n'auront ni la même date ni le
  même client, et l'OS garde son propre identifiant. Si le volume grossit,
  passer à cinq chiffres suffit.
*/

export function referenceCommande(_dateIso, alea = Math.random) {
  return String(1000 + Math.floor(alea() * 9000))
}

/* « Commande n° 4821 » */
export const libelleReference = (ref) => `Commande n° ${ref}`
