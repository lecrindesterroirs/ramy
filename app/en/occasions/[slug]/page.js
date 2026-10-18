/*
  La page Occasion anglaise est la même page que la française : elle lit sa
  langue dans le chemin et fusionne lib/en/pages/occasions.js. Les liens de
  l'article gardent leur chemin français et passent par reecrireLiensEn().
*/
export { default } from '../../../occasions/[slug]/page'
