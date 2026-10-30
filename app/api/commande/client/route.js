/*
  « Ce client a-t-il déjà commandé chez nous ? » (29/10/2026)

  Sert à étiqueter le règlement sur facture à 30 jours : « Votre habitude »
  pour qui a déjà commandé, « À vérifier » pour les autres. L'option est
  proposée dans les deux cas (arbitrage de Ramy du 30/10/2026). Ne renvoie QUE
  oui ou non : jamais un nom, jamais une adresse, jamais un encours.

  La lecture directe de la base de l'OS, elle, reste éteinte par défaut : elle
  demande une clé de service, alors que Ramy a fermé l'accès du rôle anon à
  deux reprises (migrations v35 et v63). Sans OS_SUPABASE_SERVICE_KEY, un
  visiteur non connecté est simplement « à vérifier ».

  L'EMAIL SEUL NE PROUVE RIEN. Quiconque connaît l'adresse d'un contact d'un
  gros client obtiendrait le paiement à 30 jours en son nom. C'est pourquoi on
  demande d'abord à la SESSION : un client connecté a prouvé son adresse en
  cliquant le lien de confirmation, et l'OS ne répond alors que pour son
  compte à lui. La lecture par email ne sert plus qu'au visiteur non connecté,
  et seulement si la clé de service est posée.
*/

import { commandes } from '@/lib/compteOS'
import { jetonDeSession } from '@/lib/sessionCompte'

export const dynamic = 'force-dynamic'   // la route lit le cookie de session

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export async function POST(request) {
  /*
    Client connecté : on compte ses commandes passées. Une au moins, c'est
    un habitué — la facture à 30 jours porte « Votre habitude ». Aucune, il
    n'a jamais commandé : l'option reste proposée, mais « À vérifier ».
  */
  const jeton = jetonDeSession()
  if (jeton) {
    const liste = await commandes(jeton)
    if (liste !== null) return Response.json({ connu: liste.length > 0 })
  }

  let email = ''
  try {
    const body = await request.json()
    email = String(body?.email || '').trim().toLowerCase()
  } catch {
    return Response.json({ connu: false })
  }
  if (!EMAIL.test(email)) return Response.json({ connu: false })

  const url = process.env.OS_SUPABASE_URL
  const key = process.env.OS_SUPABASE_SERVICE_KEY
  if (!url || !key) return Response.json({ connu: false, lectureDesactivee: true })

  try {
    const base = url.replace(/\/$/, '')
    const entetes = { apikey: key, Authorization: `Bearer ${key}` }
    // Contact principal, puis contacts secondaires (une entreprise = une fiche,
    // un nouvel interlocuteur est un contact ajouté : il compte comme connu).
    const q = encodeURIComponent(email)
    const direct = await fetch(`${base}/rest/v1/clients?select=id&email=eq.${q}&limit=1`, { headers: entetes })
    if (direct.ok && (await direct.json()).length > 0) return Response.json({ connu: true })

    const secondaires = await fetch(
      `${base}/rest/v1/clients?select=id&contacts=cs.${encodeURIComponent(JSON.stringify([{ email }]))}&limit=1`,
      { headers: entetes }
    )
    if (secondaires.ok && (await secondaires.json()).length > 0) return Response.json({ connu: true })
  } catch (e) {
    console.error('commande/client: lecture de l\'OS impossible', e)
  }
  return Response.json({ connu: false })
}
