import EvenementView from '../../../../components/evenements/EvenementView'

/* Fiche événement, rendue côté serveur (components/evenements/EvenementView.js).
   Régénérée chaque jour pour que la prochaine date reste juste. */
export const revalidate = 86400

export default function EvenementPage({ params }) {
  return <EvenementView slug={params.slug} en={false} />
}
