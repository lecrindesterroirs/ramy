'use client'

import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Reveal from '../../../components/Reveal'
import LogosSection from '../../../components/LogosSection'
import DevisRapide from '../../../components/DevisRapide'

const SEO_ARTICLE = `
  <h2>Personnalisation de créations gourmandes pour l'entreprise à Paris</h2>
  <p>La <strong>personnalisation</strong> est le cœur de nos prestations : c'est le moyen de transformer une sélection de produits artisanaux en une création unique qui porte votre identité. De vos couleurs d'entreprise au message que vous souhaitez transmettre, chaque détail compte. L'Écrin Traiteur conçoit vos projets de personnalisation à Paris et en Île-de-France.</p>

  <h2>Macarons, madeleines, chocolats : six familles à personnaliser</h2>
  <p>Nos artisans partenaires produisent des créations qui se déclinent facilement : <strong>macarons aux couleurs de votre marque</strong>, <strong>madeleines emballées à votre charte graphique</strong>, <strong>chocolats assortis à vos nuances</strong>, number cakes en format personnalisé, packagings co-créés, cartes et messages sur-mesure. Chaque famille offre des possibilités infinies d'adaptation.</p>

  <h2>Un accompagnement véritablement sur-mesure : 5 étapes</h2>
  <p>De votre logo à la livraison finale, nous gérons chaque étape : intégration de votre identité visuelle, sélection des saveurs et des formats, conception du packaging et des finitions, rédaction du message qui vous ressemble, et livraison clé en main. Rien n'est laissé au hasard.</p>

  <h2>Personnalisation pour les lancements produits, séminaires et cadeaux clients</h2>
  <p>Vos créations personnalisées trouvent leur place partout où vous voulez marquer les esprits : lancement de produit, séminaire d'équipe, cadeau client prestigieux, événement d'entreprise mémorable. Chaque occasion devient une opportunité de renforcer votre marque et d'impressionner vos invités.</p>

  <h2>Demander un projet de personnalisation à Paris</h2>
  <p>Décrivez votre vision — format, volume, délai, budget — et nos équipes composent une proposition personnalisée sous <strong>24h</strong>. Facturation entreprise avec TVA. Aucun minimum, aucun engagement : nous travaillons au rythme de vos projets, du plus petit au plus ambitieux.</p>
`

/* Ce que nous personnalisons — 6 familles */
const FAMILLES = [
  { nom: 'Macarons',          desc: 'Couleurs, parfums et marquage.',            img: '/prod-macarons.webp' },
  { nom: 'Madeleines',        desc: 'Parfums, coffrets et étiquettes.',          img: '/madeleine-home.webp' },
  { nom: 'Chocolats',         desc: 'Carrés, plaques et assortiments.',          img: '/perso-chocolats-bouygues.webp' },
  { nom: 'Number Cake',       desc: 'Chiffres et lettres en format sur-mesure.', img: '/perso-number-cake.webp' },
  { nom: 'Packaging',         desc: 'Boîtes, rubans, stickers et finitions.',    img: '/perso-packaging.webp' },
  { nom: 'Cartes & Messages', desc: 'Cartes de remerciement et messages sur-mesure.', img: '/perso-cartes.webp' },
]

/* Accompagnement sur-mesure — 5 étapes */
const ETAPES = [
  { n: '01', title: 'Votre logo et votre identité' },
  { n: '02', title: 'Le choix des saveurs' },
  { n: '03', title: 'Le packaging et les finitions' },
  { n: '04', title: 'Le message qui vous ressemble' },
  { n: '05', title: 'Livraison clé en main' },
]

export default function Personnalisation() {
  return (
    <>
      <Navbar showBanner={true} />

      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'calc(var(--banner-h) + var(--nav-h))' }}>

        {/* ── Hero : bandeau image pleine largeur, texte par-dessus ── */}
        <div className="pz-hero" style={{ position: 'relative', width: '100%', height: 'clamp(420px, 46vw, 580px)', overflow: 'hidden' }}>
          <img loading="eager" src="/perso-chocolats-bouygues.webp" alt="Personnalisation L'Écrin Traiteur" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center right', display: 'block' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(16,12,9,0.82) 0%, rgba(16,12,9,0.62) 38%, rgba(16,12,9,0.2) 64%, rgba(16,12,9,0) 82%)' }} />
          <Reveal mode="mount" y={16}>
            <div className="pz-hero-text" style={{ position: 'absolute', inset: 0, zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 72px', maxWidth: '620px' }}>
              <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(34px, 4.4vw, 62px)', fontWeight: 400, lineHeight: 1.04, letterSpacing: '-0.01em', color: '#FFFFFF', marginBottom: '20px' }}>
                Personnalisez<br /><em style={{ fontStyle: 'italic' }}>vos événements.</em>
              </h1>
              <span style={{ display: 'block', width: '36px', height: '1px', background: 'var(--accent)', marginBottom: '22px' }} />
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.78)', maxWidth: '380px', marginBottom: '32px' }}>
                Des gourmandises d'exception, pensées à votre image, jusqu'au moindre détail.
              </p>
              <a
                href="#familles"
                style={{ alignSelf: 'flex-start', fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-primary)', background: '#FFFFFF', padding: '15px 32px', display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', transition: 'opacity 0.3s ease' }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                Découvrir nos possibilités →
              </a>
            </div>
          </Reveal>
        </div>

        {/* ── Ce que nous personnalisons ── */}
        <div id="familles" style={{ textAlign: 'center', padding: '80px 24px 0' }}>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)' }}>
            Ce que nous personnalisons
          </p>
        </div>
        <div className="pz-famille-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '2px', maxWidth: '1280px', margin: '0 auto', padding: '48px 72px 0' }}>
          {FAMILLES.map((f, i) => (
            <Reveal key={f.nom} delay={(i % 6) * 70}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', overflow: 'hidden', background: 'var(--bg-secondary)', marginBottom: '16px' }}>
                  <img loading="lazy" src={f.img} alt={f.nom} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '17px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '6px', lineHeight: 1.2 }}>
                  {f.nom}
                </p>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', lineHeight: 1.5, color: 'var(--text-secondary)', padding: '0 6px' }}>
                  {f.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── Un accompagnement sur-mesure ── */}
        <div style={{ background: 'var(--bg-secondary)', marginTop: '88px', padding: '80px 0' }}>
          <div className="pz-process" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 72px', display: 'grid', gridTemplateColumns: '0.9fr 1.4fr', gap: '64px', alignItems: 'center' }}>
            <Reveal>
              <div>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '18px' }}>
                  Votre identité, notre savoir-faire
                </p>
                <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(28px, 3.2vw, 44px)', fontWeight: 400, lineHeight: 1.08, letterSpacing: '-0.01em', color: 'var(--text-primary)', marginBottom: '22px' }}>
                  Un accompagnement<br /><em style={{ fontStyle: 'italic' }}>sur-mesure.</em>
                </h2>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.75, color: 'var(--text-secondary)', maxWidth: '340px' }}>
                  De la création à la livraison, nous concevons des attentions uniques qui reflètent votre image et marquent les esprits.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="pz-steps" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '18px' }}>
                {ETAPES.map((s) => (
                  <div key={s.n} style={{ borderTop: '1px solid rgba(17,17,17,0.14)', paddingTop: '18px' }}>
                    <span style={{ display: 'block', fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '30px', fontWeight: 400, color: 'var(--accent)', marginBottom: '14px', lineHeight: 1 }}>{s.n}</span>
                    <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', lineHeight: 1.5, color: 'var(--text-primary)' }}>{s.title}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* ── Ils nous font confiance ── */}
        <LogosSection />

        {/* ── Bandeau bas : contextes + CTA ── */}
        <div className="pz-bottom-bar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px', maxWidth: '1280px', margin: '0 auto', padding: '48px 72px' }}>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.6, color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>
            Pensé pour vos séminaires, lancements produits, cadeaux clients et événements d'entreprise.
          </p>
          <a
            href="/devis"
            style={{ flexShrink: 0, fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-primary)', border: '1px solid rgba(17,17,17,0.28)', padding: '16px 34px', display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', transition: 'background 0.25s ease, color 0.25s ease, border-color 0.25s ease' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = '#FFFFFF' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(17,17,17,0.28)'; e.currentTarget.style.color = 'var(--text-primary)' }}
          >
            Demander un devis personnalisé →
          </a>
        </div>

        {/* ── Formulaire devis ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '32px 72px 96px' }}>
          <DevisRapide
            defaultPrestation="Personnalisation"
            titre="Un projet de personnalisation à Paris ou en Île-de-France ?"
            sousTitre="Décrivez votre projet — nous revenons vers vous avec une proposition sous 24h."
          />
        </section>

      </main>

      {/* ── Article SEO catégorie ── */}
      <section style={{ background: '#FFFFFF', borderTop: '1px solid rgba(17,17,17,0.07)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '80px 40px 88px' }}>
          <div
            className="cat-seo-body"
            dangerouslySetInnerHTML={{ __html: SEO_ARTICLE }}
          />
        </div>
      </section>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .cat-seo-body p {
          font-family: 'Neue Montreal', sans-serif;
          font-size: 15px;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }
        .cat-seo-body h2 {
          font-family: 'Baskerville Display PT', Georgia, serif;
          font-size: 26px;
          font-weight: 400;
          color: var(--text-primary);
          margin: 40px 0 16px;
        }
        .cat-seo-body h2:first-child { margin-top: 0; }
        .cat-seo-body strong {
          color: var(--text-primary);
          font-weight: 500;
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .pz-hero-text { padding: 0 40px !important; }
          .pz-famille-grid { padding: 40px 40px 0 !important; }
          .pz-process { padding: 0 40px !important; grid-template-columns: 1fr !important; gap: 40px !important; }
          .pz-bottom-bar { padding: 40px 40px !important; }
        }
        @media (max-width: 768px) {
          .pz-hero-text { padding: 0 24px !important; max-width: 100% !important; }
          .pz-famille-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 24px 12px !important; padding: 40px 24px 0 !important; }
          .pz-process { grid-template-columns: 1fr !important; gap: 36px !important; padding: 0 24px !important; }
          .pz-steps { grid-template-columns: 1fr 1fr !important; gap: 24px 16px !important; }
          .pz-bottom-bar { flex-direction: column !important; align-items: flex-start !important; gap: 24px !important; padding: 40px 24px !important; }
          .cat-seo-body h2 { font-size: 22px !important; }
        }
      ` }} />

      <Footer />
    </>
  )
}
