import CocktailFicheView from '../../../../../components/cocktails/CocktailFicheView'

/*
  Fiche formule cocktail en anglais, même vue serveur que le français
  (components/cocktails/CocktailFicheView.js). Prix, pièces et photo viennent
  des données françaises ; seuls les textes viennent de la surcouche. Les noms
  des formules ne sont pas traduits : ce sont ceux du devis.
*/
export default function Page({ params }) {
  return <CocktailFicheView slug={params.slug} en />
}
