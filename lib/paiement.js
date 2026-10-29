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
    detail: 'La facture part après la livraison, comme pour vos commandes précédentes.',
    tag: 'Votre habitude',
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
