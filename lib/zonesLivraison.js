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

  TRANCHÉ PAR RAMY LE 30/10/2026, et c'est exactement sa règle du 19/10 :
  - rien à reprendre (viennoiseries, madeleines seules) → 29 € de livraison,
    le prix annoncé partout sur le site ;
  - du matériel à reprendre (thermos, vaisselle réutilisable) → 39 €, la
    ligne devient « Livraison et récupération ».
  La récupération s'ajoute donc toute seule, sans que le client la demande,
  et seulement quand elle a lieu d'être.
*/

export const FRAIS_LIVRAISON = 29        // € HT, la livraison seule
export const FRAIS_RECUPERATION = 10     // € HT en plus, soit 39 € avec la reprise
export const VAISSELLE = 25              // € HT, assiettes, couverts et verres réutilisables

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
  return { ok: false, dept, nom: null, frais: null, motif: 'hors-zone' }
}

export const estCouvert = (cp) => zoneDe(cp).ok === true
