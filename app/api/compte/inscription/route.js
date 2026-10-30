/*
  Création d'un compte. L'OS fait le travail : il hache le mot de passe, le
  rattache à la bonne fiche client, et décide quoi envoyer par email.

  La réponse est TOUJOURS la même, que l'adresse ait déjà un compte ou non.
  Sinon ce formulaire devient un moyen de savoir qui est client de L'Écrin.
*/
import { inscrire } from '@/lib/compteOS'

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const texte = (v, n) => String(v ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, n)

export async function POST(request) {
  let b
  try { b = await request.json() } catch { return Response.json({ erreur: 'Requête illisible.' }, { status: 400 }) }
  if (b.website) return Response.json({ ok: true })        // honeypot

  const email = texte(b.email, 120).toLowerCase()
  const motDePasse = String(b.motDePasse ?? '')
  if (!EMAIL.test(email)) return Response.json({ erreur: 'Indiquez une adresse email valable.' }, { status: 400 })
  if (motDePasse.length < 10) {
    return Response.json({ erreur: 'Votre mot de passe doit faire au moins 10 caractères.' }, { status: 400 })
  }

  await inscrire({
    email, motDePasse,
    nom: texte(b.nom, 80),
    societe: texte(b.societe, 120),
    telephone: texte(b.telephone, 30),
  })
  return Response.json({ ok: true })
}
