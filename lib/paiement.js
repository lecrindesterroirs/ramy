/*
  Les textes du règlement, vus par le client (30/10/2026).

  Arbitrage de Ramy : la carte se saisit et se débite sur le site, au clic.
  Le prestataire est Stripe (voir lib/stripe.js pour le pourquoi), et le
  formulaire vit dans la page — aucune donnée de carte ne passe par nous.

  Sans clés Stripe dans l'environnement, la carte retombe sur l'envoi d'un
  lien de paiement : le tunnel reste utilisable, et c'est ce que disent alors
  les textes ci-dessous.
*/

export const MODES = {
  facture: {
    id: 'facture',
    titre: 'Sur facture, à 30 jours',
    /*
      Deux phrases, parce qu'il y a deux clients. « Comme pour vos commandes
      précédentes » ne se dit qu'à celui dont on a reconnu la fiche. Quand la
      reconnaissance de l'OS est éteinte, le site ne sait pas qui il a en
      face : il propose quand même la facture, mais il ne prétend rien.
    */
    detail: 'La facture part après la livraison, comme pour vos commandes précédentes.',
    detailAVerifier: 'La facture part après la livraison. Nous vérifions que votre compte est ouvert avant de lancer la production.',
    tag: 'Votre habitude',
    tagAVerifier: 'À vérifier',
  },
  carte: {
    id: 'carte',
    titre: 'Par carte bancaire',
    detail: 'Vous réglez maintenant, sur cette page. Vos coordonnées bancaires ne passent pas par nous.',
    tag: 'Visa · Mastercard',
  },
}

/* Ce que l'écran de confirmation annonce au client. */
export function suiteDuPaiement(reglement) {
  return reglement === 'facture'
    ? 'Votre facture partira après la livraison, payable à 30 jours.'
    : 'Votre paiement est enregistré. Le reçu vous arrive par email.'
}
