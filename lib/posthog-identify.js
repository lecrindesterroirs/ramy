import { readConsent } from './consent'

/*
  Envoie un événement à PostHog, même s'il n'est pas encore chargé. PostHog ne
  se charge qu'à la première interaction (ou après 3,5 s) : un événement émis
  avant (étape 1 du devis, clic sur le téléphone en première action) était
  perdu, `window.posthog` n'ayant pas encore de méthode `capture`. Il attend
  alors dans `window.__phFile`, que DeferredPostHog vide au chargement.
  Mesuré le 26/10/2026 : `devis_etape` 1 n'était présent que dans 4 sessions /devis sur 29.
*/
export function capturerPostHog(nom, proprietes) {
  try {
    if (typeof window === 'undefined' || readConsent() === 'denied') return
    const ph = window.posthog
    if (ph && typeof ph.capture === 'function') { ph.capture(nom, proprietes); return }
    const file = (window.__phFile = window.__phFile || [])
    if (file.length < 50) file.push([nom, proprietes])
  } catch (e) { /* la mesure ne doit jamais gêner la page */ }
}

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

/*
  Étapes du formulaire de devis. Sans cet événement, on ne voit dans PostHog
  que « arrivé sur /devis » et « demande envoyée » : impossible de dire si les
  gens abandonnent sur le choix de l'occasion ou sur le formulaire lui-même
  (l'étape 1 est d'ailleurs sautée quand on arrive depuis une fiche produit,
  donc on ne peut rien déduire des clics autocapturés).
*/
export function suivreEtapeDevis(etape, prestation) {
  capturerPostHog('devis_etape', { etape, prestation: prestation || null })
}

/*
  Premier remplissage de chaque champ du devis : dit où le visiteur s'arrête
  (aucun événement par champ n'existait). Seul le NOM du champ part, jamais sa valeur.
*/
export function suivreChampDevis(champ, etape) {
  capturerPostHog('devis_champ', { champ, etape })
}
