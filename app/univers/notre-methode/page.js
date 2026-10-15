import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import BreadcrumbJsonLd from '../../../components/BreadcrumbJsonLd'

const SERIF = "'Baskerville Display PT', Georgia, serif"
const SANS = "'Neue Montreal', sans-serif"
const h2 = { fontFamily: SERIF, fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 400, lineHeight: 1.2, color: 'var(--text-primary)', margin: '44px 0 14px' }
const p = { fontFamily: SANS, fontSize: '16px', lineHeight: 1.85, color: 'var(--text-primary)', marginBottom: '16px' }

// Page de transparence éditoriale (méthode SEO/IA validée par Ramy le 15/10/2026) :
// qui écrit, d'où viennent les chiffres, aide de l'IA, mises à jour, signalement.
export default function NotreMethode() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'var(--header-h)' }}>
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '80px 24px 100px' }}>
          <p style={{ fontFamily: SANS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '18px' }}>
            L&apos;Écrin · Le Journal
          </p>
          <h1 style={{ fontFamily: SERIF, fontSize: 'clamp(34px, 5vw, 56px)', fontWeight: 400, lineHeight: 1.08, color: 'var(--text-primary)', marginBottom: '28px' }}>
            Comment nous écrivons nos guides
          </h1>
          <p style={p}>
            Les guides du <a href="/journal" style={{ color: 'var(--text-primary)' }}>Journal</a> sont écrits par L&apos;Écrin Traiteur, sous la responsabilité de Ramy Abdelaty, fondateur. Ils répondent aux questions que nos clients nous posent avant de commander : quantités, budget, format, délais.
          </p>

          <h2 style={h2}>D&apos;où viennent les chiffres</h2>
          <p style={p}>
            Les prix sont ceux de notre carte, à la date indiquée sur chaque article. Les quantités viennent des règles que nous appliquons à chaque devis. Les chiffres d&apos;activité, comme ceux du baromètre, viennent de nos commandes livrées, agrégées et sans nom de client. Quand un article cite une autre entreprise, nous indiquons la page publique consultée et sa date, dans une section « Sources ».
          </p>

          <h2 style={h2}>Comment nous les rédigeons</h2>
          <p style={p}>
            Nous utilisons un assistant d&apos;intelligence artificielle pour préparer les brouillons et vérifier les calculs. Chaque fait est contrôlé contre notre carte et nos règles de devis, puis le texte est relu avant publication. Un article n&apos;est publié que s&apos;il ne contredit aucune de nos autres pages.
          </p>

          <h2 style={h2}>Quand nous les mettons à jour</h2>
          <p style={p}>
            La mention « mis à jour le » n&apos;apparaît que si le texte a changé. Quand un prix change, les articles qui le citent sont corrigés.
          </p>

          <h2 style={h2}>Nous signaler une erreur</h2>
          <p style={p}>
            Écrivez à <a href="mailto:commercial@lecrin-traiteur.fr" style={{ color: 'var(--text-primary)' }}>commercial@lecrin-traiteur.fr</a> : nous corrigeons et indiquons la date de la correction.
          </p>
        </section>
      </main>
      <BreadcrumbJsonLd items={[
        { name: 'Accueil', path: '' },
        { name: 'Notre méthode', path: '/univers/notre-methode' },
      ]} />
      <Footer />
    </>
  )
}
