import HubView from '../../../components/evenements/HubView'

/* Page d'accueil des événements saisonniers, rendue côté serveur.
   Régénérée chaque jour : « prochain rendez-vous » et dates suivent le calendrier. */
export const revalidate = 86400

export default function EvenementsSaisonniers() {
  return <HubView en={false} />
}
