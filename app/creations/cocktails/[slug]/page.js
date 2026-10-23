import CocktailFicheView from '../../../../components/cocktails/CocktailFicheView'

/* Fiche formule cocktail, rendue côté serveur (components/cocktails/CocktailFicheView.js). */
export default function CocktailPage({ params }) {
  return <CocktailFicheView slug={params.slug} />
}
