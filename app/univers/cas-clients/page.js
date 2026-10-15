import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import BreadcrumbJsonLd from '../../../components/BreadcrumbJsonLd'

const SERIF = "'Baskerville Display PT', Georgia, serif"
const SANS = "'Neue Montreal', sans-serif"
const h2 = { fontFamily: SERIF, fontSize: 'clamp(24px, 2.8vw, 34px)', fontWeight: 400, lineHeight: 1.2, color: 'var(--text-primary)', margin: '56px 0 16px' }
const p = { fontFamily: SANS, fontSize: '16px', lineHeight: 1.85, color: 'var(--text-primary)', marginBottom: '14px' }
const li = { ...p, marginBottom: '6px' }
const label = { fontWeight: 500 }

// Cas clients validés par Ramy le 15/10/2026. Chiffres lus dans l'OS le même jour
// (commandes livrées). Clients nommés : liste autorisée le 11/10/2026 ; les autres restent anonymes.
// Aucun montant par client.
const CAS = [
  {
    titre: 'Bain & Company : le petit-déjeuner de chaque semaine',
    contexte: "Cabinet de conseil, bureaux à Paris. Les équipes organisent des petits-déjeuners de réunion plusieurs fois par mois.",
    demande: "Un petit-déjeuner prêt avant l'arrivée des équipes, de 8 à 40 personnes selon la réunion, parfois dès 6h30.",
    livraison: ["Mini-viennoiseries, madeleines, cakes maison, brochettes de fruits, café et jus Alain Milliat, livrés en général à 7h45.", "Selon les semaines, des pauses goûter et, fin août, trois jours de déjeuners de séminaire."],
    chiffres: "46 livraisons entre le 23 février et le 14 octobre 2026 : 38 petits-déjeuners, 3 pauses goûter, 3 jours de séminaire et 2 déjeuners.",
    lecon: "Un traiteur de petit-déjeuner sert surtout à ne plus y penser : même horaire, mêmes quantités, sans avoir à tout redemander à chaque fois.",
  },
  {
    titre: 'Sia Partners : 100 personnes à 7h30',
    contexte: "Cabinet de conseil, bureaux à Paris. Des matinées d'équipe d'une centaine de personnes, revenues régulièrement depuis avril.",
    demande: "Un petit-déjeuner pour 100 personnes, installé entre 7h30 et 8h00.",
    livraison: ["7 plateaux de 30 mini-viennoiseries, soit 210 pièces.", "3 plateaux de 30 mini-chouquettes.", "2 coffrets de 50 madeleines.", "60 brochettes de fruits."],
    chiffres: "9 petits-déjeuners livrés entre le 16 avril et le 7 octobre 2026.",
    lecon: "« Le livreur nous a même aidé à tout installer. » Rose Jean, Office Manager, Sia Partners.",
  },
  {
    titre: "Un séminaire de 3 jours dans le Val-d'Oise",
    contexte: "Un organisateur de séminaires, pour un événement de trois jours à Ermont (95), du 16 au 18 juin 2026.",
    demande: "Le petit-déjeuner et le déjeuner des participants, trois jours de suite, hors de Paris.",
    livraison: ["Chaque matin à 7h00 : 250 à 350 mini-viennoiseries, 5 percolateurs de café et 1 de thé.", "Chaque midi à 11h30 : 59 à 71 plateaux repas en cinq menus (un végétarien, deux viandes, deux poissons), avec café et thé."],
    chiffres: "6 livraisons en 3 jours, dont 193 plateaux repas. Le même client nous avait confié, au début du mois, deux matinées de 150 et 100 personnes à Nanterre.",
    lecon: "Un séminaire se prépare comme une tournée : un menu par régime, les mêmes horaires chaque jour, et une équipe qui livre aussi hors de Paris.",
  },
]

export default function CasClients() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'var(--header-h)' }}>
        <section style={{ maxWidth: '760px', margin: '0 auto', padding: '80px 24px 100px' }}>
          <p style={{ fontFamily: SANS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '18px' }}>
            L&apos;Écrin · Cas clients
          </p>
          <h1 style={{ fontFamily: SERIF, fontSize: 'clamp(34px, 5vw, 56px)', fontWeight: 400, lineHeight: 1.08, color: 'var(--text-primary)', marginBottom: '28px' }}>
            Trois prestations, telles que nous les avons livrées
          </h1>
          <p style={p}>
            Les quantités et les horaires ci-dessous viennent de nos commandes livrées, relues le 15 octobre 2026. Les clients cités ont accepté d&apos;être nommés ; les autres restent anonymes.
          </p>

          {CAS.map((c) => (
            <article key={c.titre}>
              <h2 style={h2}>{c.titre}</h2>
              <p style={p}><span style={label}>Contexte.</span> {c.contexte}</p>
              <p style={p}><span style={label}>Demande.</span> {c.demande}</p>
              <p style={{ ...p, marginBottom: '6px' }}><span style={label}>Ce que nous livrons.</span></p>
              <ul style={{ paddingLeft: '20px', marginBottom: '14px' }}>
                {c.livraison.map((l) => <li key={l} style={li}>{l}</li>)}
              </ul>
              <p style={p}><span style={label}>En chiffres.</span> {c.chiffres}</p>
              <p style={{ ...p, color: 'rgba(17,17,17,0.72)' }}>{c.lecon}</p>
            </article>
          ))}

          <h2 style={h2}>Votre prestation</h2>
          <p style={p}>
            Donnez-nous votre effectif, votre date et vos contraintes : nous appliquons les mêmes règles de quantités et vous envoyons un <a href="/devis" style={{ color: 'var(--text-primary)' }}>devis sous 24h</a>. Les quantités par effectif sont détaillées dans notre <a href="/journal/budget-petit-dejeuner-equipe-personnes" style={{ color: 'var(--text-primary)' }}>guide du budget petit-déjeuner</a>.
          </p>
        </section>
      </main>
      <BreadcrumbJsonLd items={[
        { name: 'Accueil', path: '' },
        { name: 'Cas clients', path: '/univers/cas-clients' },
      ]} />
      <Footer />
    </>
  )
}
