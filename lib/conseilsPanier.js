/*
  Ce que le panier conseille (30/10/2026).

  Ce n'est pas une vitrine : c'est ce que Ramy dit au téléphone quand il
  relit une commande à voix haute. « Trente viennoiseries pour quinze
  personnes, il vous faut trois thermos. » Ces phrases-là évitent l'appel du
  lendemain — « on n'avait pas assez de café » — et elles ajoutent au panier
  sans forcer la main.

  Les règles viennent du coffre et de la recette de l'OS, pas d'une intuition :
  - 1 thermos d'un litre = 6 à 8 tasses ; on compte 1 thermos pour 6 personnes
  - 1 litre de jus = 5 à 6 personnes, soit un verre de 20 cl chacun
  - 2 mini-viennoiseries par personne au-delà de 10 convives, 3 en dessous
  - au-delà de 15 personnes, une brochette de fruits par personne

  Deux conseils au maximum, le plus utile d'abord. Un panier couvert d'avis
  n'est plus un panier.
*/

import { produitCommandable } from './catalogueCommande'

/* Combien de pièces d'un produit, d'après son libellé de quantité. */
function piecesDe(ligne) {
  const m = String(ligne.qteTexte || '').match(/(\d+)\s*(pièces?|madeleines?)/i)
  return m ? Number(m[1]) * ligne.qte : ligne.qte
}

/*
  L'effectif que trahit le panier. On prend le signal le plus fort : un
  client qui commande 60 viennoiseries vient pour une trentaine de personnes,
  même s'il n'a encore pris qu'un thermos.
*/
export function effectifEstime(lignes = []) {
  let n = 0
  for (const l of lignes) {
    if (l.famille === 'viennoiserie') n = Math.max(n, Math.round(piecesDe(l) / 2))
    if (l.id === 'brochettes-fruits') n = Math.max(n, piecesDe(l))
    if (l.id?.startsWith('thermos-')) n = Math.max(n, l.qte * 6)
    if (l.id?.startsWith('jus-') || l.id?.startsWith('nectar-')) n = Math.max(n, l.qte * 5)
    if (l.famille === 'plateaux-aperitifs') n = Math.max(n, Math.round(piecesDe(l) / 4))
  }
  return n
}

const quantite = (lignes, pred) => lignes.filter(pred).reduce((t, l) => t + l.qte, 0)

/*
  Renvoie au plus deux conseils, chacun avec de quoi l'appliquer d'un clic :
  { cle, titre, detail, ajout: { id, qte, nom } }
*/
export function conseilsPanier(lignes = []) {
  if (lignes.length === 0) return []
  const n = effectifEstime(lignes)
  if (n < 2) return []

  const thermos = quantite(lignes, l => l.id?.startsWith('thermos-'))
  const litres = quantite(lignes, l => l.id?.startsWith('jus-') || l.id?.startsWith('nectar-'))
  const out = []

  const ajout = (id, qte) => {
    const p = produitCommandable(id)
    return p ? { id, qte, nom: p.nom, prix: p.prix } : null
  }

  // ── Le café, d'abord : c'est ce qui manque le plus souvent ──
  const thermosVoulus = Math.max(1, Math.ceil(n / 6))
  if (thermos < thermosVoulus) {
    const manque = thermosVoulus - thermos
    out.push({
      cle: 'cafe',
      titre: thermos === 0
        ? `Rien de chaud pour ${n} personnes.`
        : `${thermos} thermos pour ${n} personnes, c'est un peu juste.`,
      detail: `Un thermos sert 6 à 8 tasses. Pour ${n} convives, nous en conseillons ${thermosVoulus}.`,
      ajout: ajout('thermos-cafe', manque),
    })
  }

  // ── Puis le froid, à partir d'une dizaine de personnes ──
  const litresVoulus = Math.ceil(n / 5)
  if (n >= 8 && litres < litresVoulus && out.length < 2) {
    const manque = litresVoulus - litres
    out.push({
      cle: 'jus',
      titre: litres === 0 ? 'Aucune boisson froide.' : `${litres} litre${litres > 1 ? 's' : ''} de jus pour ${n} personnes.`,
      detail: `Un litre sert 5 à 6 verres. Pour ${n} convives, comptez ${litresVoulus} litres.`,
      ajout: ajout('jus-orange', manque),
    })
  }

  // ── Les fruits, au-delà de quinze : c'est la règle de la recette ──
  const fruits = quantite(lignes, l => l.famille === 'fruits')
  if (n > 15 && fruits === 0 && out.length < 2) {
    out.push({
      cle: 'fruits',
      titre: 'Rien de frais sur la table.',
      detail: `Au-delà de quinze personnes, nous ajoutons des brochettes de fruits : elles partent toujours en premier.`,
      ajout: ajout('brochettes-fruits', Math.max(1, Math.ceil(n / 20))),
    })
  }

  return out.slice(0, 2)
}
