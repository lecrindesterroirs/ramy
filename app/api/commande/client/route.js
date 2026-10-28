/*
  « Ce client a-t-il déjà commandé chez nous ? » (29/10/2026)

  Sert à n'afficher le règlement sur facture à 30 jours qu'aux clients qui ont
  déjà un compte. Ne renvoie QUE oui ou non : jamais un nom, jamais une
  adresse, jamais un encours.

  DÉSACTIVÉE PAR DÉFAUT, ET C'EST VOLONTAIRE. Lire la base de l'OS demande une
  clé de service, alors que Ramy a fermé l'accès du rôle anon à deux reprises
  (migrations v35 et v63). Tant que OS_SUPABASE_SERVICE_KEY n'est pas posée
  dans l'environnement du site, cette route répond « inconnu » pour tout le
  monde : le tunnel ne propose alors que la carte, ce qui est le comportement
  le plus prudent. Rien ne change en production sans décision explicite.

  À SAVOIR AVANT DE L'ACTIVER : l'email seul ne prouve rien. Quiconque connaît
  l'adresse d'un contact d'un gros client obtiendrait le paiement à 30 jours en
  son nom. Si on active cette route, il faut un code à usage unique envoyé à
  cette adresse avant d'ouvrir l'option facture (ce n'est pas un compte à
  créer, juste quatre chiffres par mail).
*/

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export async function POST(request) {
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
