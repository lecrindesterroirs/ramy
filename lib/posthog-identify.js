import { readConsent } from './consent'

/*
  À l'envoi d'un formulaire : rattache le visiteur (jusque-là anonyme) à son
  adresse e-mail dans PostHog, ce qui relie tout son parcours passé à sa demande.
  Ne fait rien si le visiteur a refusé la mesure, si PostHog n'est pas chargé,
  ou si le champ piège anti-robots est rempli.
*/
export function identifierVisiteur(form, origine) {
  try {
    if (typeof window === 'undefined' || readConsent() === 'denied') return
    const ph = window.posthog
    if (!ph || typeof ph.identify !== 'function') return
    if (form?.website) return
    const email = String(form?.email || '').trim().toLowerCase()
    if (!email || !email.includes('@')) return
    const personne = { email }
    if (form.nom) personne.name = String(form.nom).trim()
    if (form.societe) personne.societe = String(form.societe).trim()
    if (form.telephone) personne.telephone = String(form.telephone).trim()
    ph.identify(email, personne)
    ph.capture('demande_envoyee', {
      origine,
      prestation: form.prestation || form.type || null,
      convives: form.convives || form.personnes || null,
      ville_evenement: form.ville || null,
      date_evenement: form.date || null,
    })
  } catch (e) { /* la mesure ne doit jamais gêner l'envoi du formulaire */ }
}
