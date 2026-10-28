/*
  Le paiement de la commande en ligne — la couture laissée ouverte (29/10/2026).

  LA CONTRAINTE DE RAMY : « le débit intervient le jour de la livraison, pas au
  clic ». Rien n'est encaissé pour une commande qui n'est pas partie, donc
  aucun remboursement à gérer en cas d'annulation.

  CE QUI COINCE, ET QU'IL FAUT TRANCHER :

  - Une autorisation carte ne tient qu'environ sept jours. Une commande peut
    être passée trois semaines à l'avance. « Autoriser maintenant, capturer le
    jour J » ne couvre donc pas toutes les commandes.
  - Garder la carte et la débiter le jour J (card-on-file + 3DS) demande un
    compte PSP direct. Les liens de paiement Pennylane (Adyen) ne le font pas,
    et Stripe a été abandonné le 11/10/2026 à cause du rapprochement comptable.
  - Si la carte est refusée le matin de la livraison, la production est déjà
    faite.

  EN ATTENDANT : la commande est enregistrée et acceptée, et le client reçoit
  un lien de paiement. C'est exactement ce qui se passe aujourd'hui pour les
  clients qui paient par carte (Coyote), sauf que le client n'attend plus que
  Ramy monte un devis. Aucune carte ne transite par le site.

  Quand le prestataire sera choisi, c'est ce fichier qu'on remplace — le
  tunnel, lui, n'a pas à changer.
*/

export const MODES = {
  facture: {
    id: 'facture',
    titre: 'Sur facture, à 30 jours',
    detail: 'La facture part après la livraison, comme pour vos commandes précédentes.',
    tag: 'Votre habitude',
  },
  carte: {
    id: 'carte',
    titre: 'Par carte bancaire',
    detail: 'Vous recevez le lien de paiement par email. Le débit intervient le jour de la livraison, pas aujourd\'hui.',
    tag: 'Visa · Mastercard',
  },
}

/* Ce que l'écran de confirmation annonce au client. */
export function suiteDuPaiement(reglement) {
  return reglement === 'facture'
    ? 'Votre facture partira après la livraison, payable à 30 jours.'
    : 'Vous recevez le lien de paiement par email. Le débit intervient le jour de la livraison.'
}
