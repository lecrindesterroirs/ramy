/*
  Référence lisible d'une commande en ligne : « C-261030-4K7P ».
  Date de livraison + quatre caractères, sans voyelles ni caractères
  ambigus (0/O, 1/I), pour qu'elle se dicte au téléphone sans erreur.
*/
const ALPHABET = '23456789BCDFGHJKLMNPQRSTVWXZ'

export function referenceCommande(dateIso, alea = Math.random) {
  const d = (dateIso || '').replace(/-/g, '').slice(2) || '000000'
  let s = ''
  for (let i = 0; i < 4; i++) s += ALPHABET[Math.floor(alea() * ALPHABET.length)]
  return `C-${d}-${s}`
}
