import EvenementView from '../../../../../components/evenements/EvenementView'

/* Même vue que la fiche française, en anglais : 404 si la traduction est incomplète. */
export const revalidate = 86400

export default function EvenementPageEn({ params }) {
  return <EvenementView slug={params.slug} en />
}
