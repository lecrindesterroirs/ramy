/*
  La page Occasion anglaise est la même page que la française
  (app/occasions/[slug]/OccasionView.js) avec `en` à true : elle fusionne
  lib/en/pages/occasions.js. Les liens de l'article gardent leur chemin
  français et passent par reecrireLiensEn().
*/
import OccasionView from '../../../occasions/[slug]/OccasionView'

export default function OccasionPageEn({ params }) {
  return <OccasionView slug={params.slug} en={true} />
}
