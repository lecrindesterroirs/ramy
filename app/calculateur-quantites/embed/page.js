import CalculateurQuantites from '../../../components/CalculateurQuantites'

/* Version intégrable (iframe) du calculateur : ni en-tête ni pied de page, noindex, canonique vers
   la page principale. Cadre autorisé depuis tout site (next.config.mjs, embedHeaders) ; bandeau,
   barre mobile et assistant masqués sur cette adresse. Le lien d'attribution est dans le composant. */
export const metadata = {
  title: { absolute: "Calculateur de quantités | L'Écrin Traiteur" },
  alternates: { canonical: '/calculateur-quantites' },
  robots: { index: false, follow: true },
}

export default function CalculateurEmbed() {
  return (
    <main style={{ background: '#FFFFFF', padding: '20px 16px' }}>
      <CalculateurQuantites lang="fr" embed />
    </main>
  )
}
