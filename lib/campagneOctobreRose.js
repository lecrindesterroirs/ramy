// Campagne saisonnière qui colore les CTA « devis » (Navbar, Hero, MobileCTA)
// et le formulaire.
//
// Octobre Rose est terminé. La fonction renvoie false en dur, et non le
// résultat d'une comparaison de dates : les pages sont prérendues au build,
// sur un serveur en UTC. Le 28/10/2026 au matin, le build a figé le rose dans
// le HTML parce qu'il était encore le 27 en UTC — et React ne corrige pas un
// style inline à l'hydratation, donc les boutons sont restés roses en
// production alors que la fonction renvoyait bien false dans le navigateur.
//
// Pour la prochaine campagne : remettre des dates ici, mais vérifier le rendu
// en production après le déploiement, pas seulement en local.
export function isOctobreRoseActive() {
  return false
}

export const OCTOBRE_ROSE_ACCENT = '#E27FA0'
