/*
  La page Occasion anglaise est la même vue serveur que la française
  (components/occasions/OccasionView.js) avec `en` : elle fusionne
  lib/en/pages/occasions.js.
*/
import OccasionView from '../../../../components/occasions/OccasionView'

export default function OccasionPageEn({ params }) {
  return <OccasionView slug={params.slug} en />
}
