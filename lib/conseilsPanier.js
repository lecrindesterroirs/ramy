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

/*
  Le matériel qui revient. Les thermos repartent avec le livreur : c'est la
  seule reprise qui ne souffre aucune ambiguïté, et c'est aussi la question
  que les clients posent au téléphone — « on les laisse où ? ».

  Volontairement étroit. Les planches en bois et les plateaux reviennent eux
  aussi, mais selon la commande et le lieu ; les annoncer systématiquement
  ferait une promesse que la tournée ne tient pas toujours. Pour élargir,
  il suffit d'ajouter une famille ici.
*/
export function materielARendre(lignes = []) {
  const thermos = lignes.filter(l => l.id?.startsWith('thermos-')).reduce((n, l) => n + l.qte, 0)
  if (thermos === 0) return null
  return {
    thermos,
    texte: `${thermos} thermos ${thermos > 1 ? 'sont repris' : 'est repris'} après votre pause, reprise comprise dans la livraison.`,
  }
}

/*
  Ce qui part avec la commande sans rien coûter (31/10/2026, demande de
  Ramy). Le client voit « 25 € » pour la vaisselle réutilisable et peut
  croire qu'au-dessous il n'y a rien : il faut dire ce qui est déjà dedans.

  La liste suit le panier, parce qu'une touillette sans café ne veut rien
  dire : des gobelets dès qu'il y a une boisson à verser, touillettes et
  sucre avec le chaud, une cuillère avec ce qui se mange à la cuillère.
  Sans boisson, il reste les serviettes, qui partent toujours.

  Volontairement, PAS d'assiettes ni de couverts : c'est ce que vend
  l'option à 25 €. Ici on ne met que les consommables.
*/
/* Tout ce qui se mange à la cuillère, par préfixe : le catalogue en ajoute
   des parfums sans prévenir (yaourt-fruits, compote-tonka, verrine-citron). */
const A_LA_CUILLERE = /^(yaourt-|compote-|verrine-|panna-cotta|tiramisu|mousse-)/

export function jetableInclus(lignes = []) {
  const un = (pred) => lignes.some(pred)
  const chaud = un(l => String(l.id || '').startsWith('thermos-'))
  /* Les 33 cl se boivent à la bouteille : seules les grandes demandent un gobelet. */
  const aVerser = un(l => /^(jus-|nectar-|infusion-)/.test(String(l.id || '')) || ['evian-75', 'badoit-75'].includes(l.id))

  const out = ['serviettes']
  if (chaud || aVerser) out.push('gobelets')
  if (chaud) out.push('touillettes', 'sucre')
  if (un(l => A_LA_CUILLERE.test(String(l.id || '')))) out.push('petites cuillères')
  return out
}

/** « Serviettes, gobelets, touillettes et sucre. » */
export function phraseJetable(lignes = []) {
  const l = jetableInclus(lignes)
  const liste = l.length > 1 ? `${l.slice(0, -1).join(', ')} et ${l[l.length - 1]}` : l[0]
  return `${liste.charAt(0).toUpperCase()}${liste.slice(1)}.`
}
