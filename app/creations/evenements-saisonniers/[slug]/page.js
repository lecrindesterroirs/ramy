'use client'

import { useParams, usePathname } from 'next/navigation'
import Image from 'next/image'
import { estAnglais, lienLocaliseDans } from '../../../../lib/i18nBase'
import { useEnSlugs, useEnChemins } from '../../../../components/EnSlugsProvider'
import { EN_EVENEMENTS, EN_EV_UI } from '../../../../lib/en/pages/evenements'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import RelatedLinks from '../../../../components/RelatedLinks'
import Breadcrumb from '../../../../components/Breadcrumb'
import BreadcrumbJsonLd from '../../../../components/BreadcrumbJsonLd'
import { evenements } from '../evenementsData'
import { articles } from '../../../../lib/journalData'
import ParallaxImage from '../../../../components/ParallaxImage'

export default function EvenementDetail() {
  const { slug } = useParams()
  const en = estAnglais(usePathname() || '/')
  const T = en ? EN_EV_UI : null
  const slugsEn = useEnSlugs()
  const cheminsEn = useEnChemins()
  const L = (href) => lienLocaliseDans(cheminsEn, href, en ? 'en' : 'fr', slugsEn)
  // Slug, photo et ordre restent lus en français : la surcouche ne porte que
  // le texte, et sa clé est le slug, identique dans les deux langues.
  const brut = evenements.find(e => e.slug === slug)
  const ev = brut && en ? { ...brut, ...(EN_EVENEMENTS[brut.slug] || {}) } : brut
  // Nom anglais d'un événement voisin, pour le bloc de liens.
  const nomDe = (e) => (en && EN_EVENEMENTS[e.slug]?.nom) || e.nom

  if (!ev) {
    return (
      <>
        <Navbar showBanner={true} />
        <main style={{ paddingTop: 'calc(var(--banner-h) + var(--nav-h))', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '14px', color: 'var(--text-secondary)' }}>
            {en ? EN_EV_UI.introuvable : 'Événement non trouvé.'}
          </p>
        </main>
        <Footer />
      </>
    )
  }

  // Certains événements masquent le bandeau défilant (data : masquerBandeau)
  const bandeau = !ev.masquerBandeau

  return (
    <>
      <Navbar showBanner={bandeau} />

      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: bandeau ? 'calc(var(--banner-h) + var(--nav-h))' : 'var(--nav-h)' }}>

        <Breadcrumb items={en
          ? [{ label: T.accueil, href: '/en' }, { label: T.fil, href: L('/creations/evenements-saisonniers') }, { label: ev.nom }]
          : [{ label: 'Accueil', href: '/' }, { label: 'Événements saisonniers', href: '/creations/evenements-saisonniers' }, { label: ev.nom }]} jsonLd={false} />

        {/* En-tête — écriture de fiche : monogramme, filet doré, titre serif */}
        <div className="ev-header" style={{ background: 'var(--bg-secondary)', padding: '52px 72px 46px' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
            <img loading="lazy" src="/logo-footer.svg" alt="L'Écrin" style={{ height: '30px', width: 'auto', margin: '0 auto 18px', opacity: 0.9, display: 'block' }} />

            <p style={{
              fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: 'var(--accent-deep)',
              marginBottom: '14px',
            }}>
              {ev.mois}
            </p>

            <h1 style={{
              fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif",
              fontSize: 'clamp(34px, 4.4vw, 60px)',
              fontWeight: 400,
              lineHeight: 1.02,
              letterSpacing: '-0.01em',
              color: 'var(--text-primary)',
            }}>
              {ev.nom}
            </h1>

            <span style={{ display: 'block', width: '44px', height: '1px', background: 'var(--accent)', margin: '22px auto' }} />

            <p style={{
              fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
              fontSize: '14px',
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
              maxWidth: '560px',
              margin: '0 auto',
            }}>
              {ev.descCourt}
            </p>

            <p style={{
              fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(17,17,17,0.38)',
              marginTop: '20px',
            }}>
              {ev.tags.join('  ·  ')}
            </p>
          </div>
        </div>

        {/* Image pleine largeur */}
        <div style={{ position: 'relative', width: '100%', height: '55vh', overflow: 'hidden', minHeight: '320px', maxHeight: '580px' }}>
          <ParallaxImage priority sizes="100vw" src={ev.img}
            alt={ev.imgAlt || ev.nom}
            strength={0.05} style={{ position: 'absolute', inset: 0 }}
            imgStyle={{ objectPosition: ev.imgPos || 'center' }}
          />
        </div>

        {/* Contenu principal */}
        <div
          className="ev-content"
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '48px 72px 96px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
          }}
        >
          {/* Colonne gauche */}
          <div>
            <p style={{
              fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--accent-deep)',
              marginBottom: '20px',
            }}>
              L'événement
            </p>
            <p style={{
              fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
              fontSize: '16px',
              lineHeight: 1.85,
              color: 'var(--text-secondary)',
              marginBottom: '48px',
            }}>
              {ev.desc}
            </p>

            <div style={{ borderLeft: '2px solid var(--accent)', paddingLeft: '24px' }}>
              <p style={{
                fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
                fontSize: '9px',
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--accent-deep)',
                marginBottom: '10px',
              }}>
                {ev.differentiateur.label}
              </p>
              <p style={{
                fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
                fontSize: '14px',
                lineHeight: 1.75,
                color: 'var(--text-primary)',
              }}>
                {ev.differentiateur.text}
              </p>
            </div>
          </div>

          {/* Colonne droite */}
          <div style={{ background: 'var(--bg-secondary)', padding: '40px' }}>
            <p style={{
              fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--accent-deep)',
              marginBottom: '24px',
            }}>
              {en ? T.programme : 'Au programme'}
            </p>

            <div style={{ marginBottom: '40px' }}>
              {ev.produits.map((prod, i) => (
                <div
                  key={i}
                  style={{
                    padding: '13px 0',
                    borderBottom: '1px solid rgba(17,17,17,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                  }}
                >
                  <span style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    flexShrink: 0,
                  }} />
                  <span style={{
                    fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
                    fontSize: '13px',
                    color: 'var(--text-primary)',
                  }}>
                    {prod}
                  </span>
                </div>
              ))}
            </div>

            <a
              href={L('/devis')}
              style={{
                fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                background: 'var(--accent)',
                padding: '15px 28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                textDecoration: 'none',
                transition: 'opacity 0.3s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              {en ? T.organiser : 'Organiser cet événement →'}
            </a>
          </div>
        </div>

        {/* ── Article SEO ── */}
        <div
          className="ev-article"
          style={{
            borderTop: '1px solid rgba(17,17,17,0.07)',
            background: '#FFFFFF',
          }}
        >
          <div
            style={{
              maxWidth: '760px',
              margin: '0 auto',
              padding: '80px 40px 96px',
            }}
          >
            {/* Label article */}
            <p style={{
              fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--accent-deep)',
              marginBottom: '20px',
            }}>
              {en ? T.guide : 'Guide pratique'}
            </p>

            {/* Titre article */}
            <h2 style={{
              fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif",
              fontSize: 'clamp(24px, 3vw, 42px)',
              fontWeight: 400,
              lineHeight: 1.1,
              color: 'var(--text-primary)',
              marginBottom: '56px',
              letterSpacing: '-0.01em',
            }}>
              {ev.article.titre}
            </h2>

            {/* Sections */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              {ev.article.sections.map((section, i) => (
                <div key={i}>
                  <h3 style={{
                    fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--text-primary)',
                    marginBottom: '16px',
                  }}>
                    {section.heading}
                  </h3>
                  <p style={{
                    fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
                    fontSize: '15px',
                    lineHeight: 1.9,
                    color: 'var(--text-secondary)',
                  }}>
                    {section.texte}
                  </p>
                  {/* Photo facultative sous le paragraphe qu'elle illustre. */}
                  {section.img && (
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', marginTop: '24px', overflow: 'hidden', background: '#F8F5EF' }}>
                      <Image fill sizes="(max-width: 900px) 100vw, 720px" src={section.img} alt={section.imgAlt || ''} style={{ objectFit: 'cover' }} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA inline article */}
            <div style={{
              marginTop: '64px',
              padding: '32px 36px',
              background: 'var(--bg-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
              flexWrap: 'wrap',
            }}>
              <p style={{
                fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
                fontSize: '14px',
                lineHeight: 1.6,
                color: 'var(--text-primary)',
                maxWidth: '380px',
              }}>
                {/* ctaNom : tournure de la phrase quand « la {nom} » sonne faux
                    (« le Dry January », « un iftar ou l'Aïd »). En anglais, on ne
                    lit que la surcouche, pour ne jamais afficher la tournure française. */}
                {en ? T.ctaTitre(EN_EVENEMENTS[ev.slug]?.ctaNom || ev.nom) : <>Vous organisez {ev.ctaNom || (ev.nom === 'Halloween' || ev.nom === 'Noël' || ev.nom === 'Pâques' ? ev.nom : `la ${ev.nom}`)} pour votre entreprise ? On s'en occupe.</>}
              </p>
              <a
                href={L('/devis')}
                style={{
                  fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
                  fontSize: '10px',
                  fontWeight: 500,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  background: 'var(--accent)',
                  padding: '13px 24px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  transition: 'opacity 0.3s ease',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                {en ? T.ctaBouton : 'Obtenir un devis →'}
              </a>
            </div>
          </div>
        </div>

        {/* CTA bas */}
        <div
          className="ev-footer-cta"
          style={{
            background: 'var(--bg-secondary)',
            padding: '72px',
            textAlign: 'center',
            borderTop: '1px solid rgba(17,17,17,0.06)',
          }}
        >
          <p style={{
            fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif",
            fontSize: 'clamp(22px, 2.8vw, 38px)',
            fontWeight: 400,
            color: 'var(--text-primary)',
            marginBottom: '16px',
            lineHeight: 1.15,
          }}>
            D'autres événements à organiser ?
          </p>
          <p style={{
            fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
            fontSize: '14px',
            color: 'var(--text-secondary)',
            maxWidth: '380px',
            margin: '0 auto 36px',
            lineHeight: 1.75,
          }}>
            {en ? T.ctaBas : 'Dites-nous votre contexte, votre date, votre effectif. Devis sous 24h.'}
          </p>
          <a
            href={L('/devis')}
            style={{
              fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              background: 'var(--accent)',
              padding: '14px 32px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              transition: 'opacity 0.3s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            {en ? T.ctaBouton : 'Obtenir un devis →'}
          </a>
        </div>

        {/* Retour */}
        <div
          className="ev-nav"
          style={{ padding: '40px 72px', display: 'flex', justifyContent: 'center' }}
        >
          <a
            href={L('/creations/evenements-saisonniers')}
            style={{
              fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
              fontSize: '11px',
              fontWeight: 400,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            {en ? T.retour : '← Voir tous les événements'}
          </a>
        </div>

      </main>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .ev-header { padding: 36px 24px 32px !important; }
          .ev-content {
            grid-template-columns: 1fr !important;
            padding: 48px 24px 60px !important;
            gap: 40px !important;
          }
          .ev-article > div { padding: 56px 24px 72px !important; }
          .ev-footer-cta { padding: 48px 24px !important; }
          .ev-nav { padding: 32px 24px !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .ev-header { padding: 44px 40px 38px !important; }
          .ev-content { padding: 60px 40px 80px !important; gap: 48px !important; }
          .ev-article > div { padding: 64px 40px 80px !important; }
          .ev-footer-cta { padding: 56px 40px !important; }
          .ev-nav { padding: 32px 40px !important; }
        }
      ` }} />

      {/* En anglais, quatre événements voisins plutôt que deux événements et
          deux guides : les titres du Journal ne sont lisibles que depuis
          lib/en/journal, qu'une page client n'a pas le droit d'importer
          (2,9 Mo de JavaScript). Mieux vaut quatre liens anglais que deux
          titres français au milieu d'un bloc anglais. */}
      <RelatedLinks
        eyebrow={en ? EN_EV_UI.relatedEyebrow : "À découvrir aussi"}
        title={en ? EN_EV_UI.relatedTitre : "Autres rendez-vous & lectures"}
        items={en
          ? evenements.filter(e => e.slug !== ev.slug).slice(0, 4).map(e => ({
              href: L(`/creations/evenements-saisonniers/${e.slug}`), title: nomDe(e), meta: EN_EV_UI.fil,
            }))
          : [
          ...evenements.filter(e => e.slug !== ev.slug).slice(0, 2).map(e => ({ href: `/creations/evenements-saisonniers/${e.slug}`, title: e.nom, meta: 'Événement saisonnier' })),
          // `articles` de l'événement : les guides du cluster, dans l'ordre voulu.
          // Sans liste déclarée, on retombe sur les 2 premiers articles du journal.
          ...(ev.articles?.length
            ? ev.articles.map(slug => articles.find(a => a.slug === slug)).filter(Boolean)
            : articles.slice(0, 2)
          ).map(a => ({ href: `/journal/${a.slug}`, title: a.metaTitle || a.titre, meta: a.categorie })),
        ]}
        columns={4}
      />

      <BreadcrumbJsonLd items={en ? [
        { name: EN_EV_UI.accueil, path: '/en' },
        { name: EN_EV_UI.fil, path: '/en/creations/evenements-saisonniers' },
        { name: ev.nom, path: `/en/creations/evenements-saisonniers/${ev.slug}` },
      ] : [
        { name: 'Accueil', path: '' },
        { name: 'Événements saisonniers', path: '/creations/evenements-saisonniers' },
        { name: ev.nom, path: `/creations/evenements-saisonniers/${ev.slug}` },
      ]} />

      <Footer />
    </>
  )
}
