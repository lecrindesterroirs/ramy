/*
  Zone de livraison et frais, à partir du code postal (29/10/2026).

  Pourquoi le code postal est demandé DÈS LE PANIER : le document de
  conception interdit qu'un frais apparaisse au dernier écran. Si l'adresse
  n'arrivait qu'à l'étape 2, le total bougerait sous les yeux du client.

  Ce que le site publie aujourd'hui, et qui fait loi ici :
  - 29 € HT de livraison, « Paris et communes proches ». Ce montant est repris
    dans des dizaines de totaux calculés sur le site (« 887 € HT livraison
    comprise »), donc on ne peut pas en facturer un autre en ligne.
  - les autres zones sont « chiffrées au devis » : aucune grille code postal →
    prix n'existe dans le dépôt, donc le tunnel s'arrête et renvoie au devis.

  CHOIX À FAIRE CONFIRMER PAR RAMY : la reprise du matériel (règle du
  19/10/2026 : 39 € HT livraison + reprise à Paris, 92 et 94) n'est PAS
  facturée en plus sur une commande en ligne. Elle reste une règle de devis,
  appliquée à la main. Facturer 39 € ici contredirait tous les totaux publiés.
*/

export const FRAIS_LIVRAISON = 29        // € HT, Paris et petite couronne

/* Départements couverts par la commande en ligne. */
const COUVERTS = {
  '75': 'Paris',
  '92': 'Hauts-de-Seine',
  '93': 'Seine-Saint-Denis',
  '94': 'Val-de-Marne',
}

export const nettoieCp = (cp) => String(cp || '').replace(/\D/g, '').slice(0, 5)

/*
  Retourne { ok, dept, nom, frais, motif }.
  ok === false → le tunnel propose le devis, il ne devine pas un prix.
*/
export function zoneDe(cp) {
  const c = nettoieCp(cp)
  if (c.length < 5) return { ok: null, dept: null, nom: null, frais: null, motif: 'incomplet' }
  const dept = c.slice(0, 2)
  if (COUVERTS[dept]) {
    return { ok: true, dept, nom: COUVERTS[dept], frais: FRAIS_LIVRAISON, motif: null }
  }
  return {
    ok: false, dept, nom: null, frais: null,
    motif: 'hors-zone',
  }
}

export const estCouvert = (cp) => zoneDe(cp).ok === true
