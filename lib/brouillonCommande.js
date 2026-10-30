/*
  Le reste de la commande en cours : code postal, date, créneau, adresse,
  contact, règlement. Séparé du panier parce que les trois étapes sont trois
  pages : sans ça, revenir en arrière effacerait l'adresse déjà saisie.

  Même principe que le panier : localStorage, aucun envoi au serveur avant que
  le client ne valide.
*/

const CLE = 'lecrin-commande-v1'
const EVT = 'lecrin:commande'

const dispo = () => typeof window !== 'undefined'

export const VIDE = {
  cp: '',
  date: '',
  heure: '',        // début du créneau, « HH:MM »
  heureFin: '',     // fin du créneau
  societe: '',
  adresse: '',
  ville: '',
  acces: '',          // étage, code, quai, accueil
  contactNom: '',
  contactTel: '',
  email: '',

  /*
    La facturation. L'entité qui paie n'est pas toujours celle qui reçoit :
    un siège règle pour une agence, un cabinet pour son client. Quand c'est la
    même, « factMeme » recopie l'adresse de livraison et le bloc se referme.
  */
  factMeme: true,
  factEntite: '',
  factAdresse: '',
  factCp: '',
  factVille: '',
  factPays: 'FR',
  emailFacturation: '',
  factReference: '',   // bon de commande, référence interne
  reglement: 'carte', // 'carte' | 'facture'
  motACompagner: '',
}

export function lireBrouillon() {
  if (!dispo()) return { ...VIDE }
  try {
    const brut = window.localStorage.getItem(CLE)
    const o = brut ? JSON.parse(brut) : null
    return o && typeof o === 'object' ? { ...VIDE, ...o } : { ...VIDE }
  } catch {
    return { ...VIDE }
  }
}

export function ecrireBrouillon(champs) {
  const suivant = { ...lireBrouillon(), ...champs }
  if (!dispo()) return suivant
  try {
    window.localStorage.setItem(CLE, JSON.stringify(suivant))
  } catch { /* stockage indisponible */ }
  window.dispatchEvent(new CustomEvent(EVT, { detail: suivant }))
  return suivant
}

export function viderBrouillon() {
  if (dispo()) {
    try { window.localStorage.removeItem(CLE) } catch {}
    window.dispatchEvent(new CustomEvent(EVT, { detail: { ...VIDE } }))
  }
  return { ...VIDE }
}

export function surBrouillon(fn) {
  if (!dispo()) return () => {}
  const h = (e) => fn(e.detail || lireBrouillon())
  window.addEventListener(EVT, h)
  return () => window.removeEventListener(EVT, h)
}
