'use client'

import { usePathname } from 'next/navigation'
import { estAnglais, lienLocalise } from '../lib/i18n'
import { t } from '../lib/en/interface'
import { enSlugs } from '../lib/en/journal'

const linkStyle = {
  fontFamily: "'Neue Montreal', sans-serif",
  fontSize: '13px',
  fontWeight: 400,
  color: 'var(--text-secondary)',
  textDecoration: 'none',
  lineHeight: 1.5,
  transition: 'color 0.25s ease',
  display: 'block',
}

const colTitleStyle = {
  fontFamily: "'Neue Montreal', sans-serif",
  fontSize: '10px',
  fontWeight: 500,
  textTransform: 'uppercase',
  letterSpacing: '0.18em',
  color: 'var(--accent-deep)',
  marginBottom: '22px',
  display: 'block',
}

export default function Footer() {
  /* Langue de la page courante. Les libellés basculent, et chaque lien part
     vers sa version anglaise quand elle existe — sinon il reste en français :
     jamais de renvoi vers une adresse qui n'existe pas. */
  const pathname = usePathname() || '/'
  const langue = estAnglais(pathname) ? 'en' : 'fr'
  const slugsEn = enSlugs()
  const lien = (href) => lienLocalise(href, langue, slugsEn)
  const mot = (o, champ = 'label') => (langue === 'en' && o[champ + 'En']) || o[champ]

  return (
    <footer style={{ background: 'var(--bg-secondary)', borderTop: '1px solid rgba(17,17,17,0.07)' }}>

      {/* ── Main ── */}
      <div className="footer-main" style={{ maxWidth: '1440px', margin: '0 auto', padding: '80px 72px 64px' }}>
        <div className="footer-grid" style={{ display: 'flex', alignItems: 'flex-start', gap: '48px' }}>

          {/* Logo + tagline */}
          <div style={{ flexShrink: 0, width: '200px' }}>
            <a href="/" style={{ textDecoration: 'none', display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '24px' }}>
              <img loading="lazy" src="/logo-footer.svg" alt="L'Écrin Traiteur" style={{ height: '90px', width: 'auto', display: 'block', marginBottom: '6px' }} />
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '22px', fontWeight: 400, letterSpacing: '0.12em', color: '#111111', lineHeight: 1 }}>L'ÉCRIN</span>
                <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '9px', fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#111111', marginTop: '4px' }}>TRAITEUR</span>
              </div>
            </a>
            <div style={{ width: '28px', height: '1px', background: 'var(--accent)', marginBottom: '16px' }} />
            <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '14px', fontStyle: 'italic', color: 'var(--text-secondary)', lineHeight: 1.65, maxWidth: '200px' }}>
              {t('pied.signature1', langue)} <br />{t('pied.signature2', langue)}
            </p>
          </div>

          {/* Colonnes de liens — plan de site & maillage interne (présent sur toutes les pages) */}
          <div className="footer-cols" style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '40px' }}>
            {[
              { title: 'La Carte', titleEn: 'Our menu', links: [
                { label: 'Petits-déjeuners & Pauses', labelEn: 'Breakfasts & Breaks', href: '/creations/petits-dejeuners-et-pauses' },
                { label: 'Pause Goûter', labelEn: 'Afternoon break', href: '/creations/pauses-gourmandes' },
                { label: 'Plateaux repas', labelEn: 'Lunch trays', href: '/creations/plateaux-repas' },
                { label: 'Lunch box', labelEn: 'Lunch boxes', href: '/creations/lunch-box' },
                { label: 'Cocktails', labelEn: 'Cocktail receptions', href: '/creations/cocktails' },
                { label: 'Buffet à partager', labelEn: 'Sharing buffet', href: '/creations/a-partager' },
                { label: 'Plateaux apéritifs', labelEn: 'Canapé platters', href: '/creations/plateaux-aperitifs' },
                { label: 'Animations culinaires', labelEn: 'Live food stations', href: '/creations/animations-culinaires' },
                { label: 'Boissons', labelEn: 'Drinks', href: '/creations/boissons' },
                { label: 'Personnalisation', labelEn: 'Personalisation', href: '/creations/personnalisation' },
                { label: 'Événements saisonniers', labelEn: 'Seasonal events', href: '/creations/evenements-saisonniers' },
                { label: 'Réceptions sur-mesure', labelEn: 'Bespoke receptions', href: '/creations/receptions-sur-mesure' },
                { label: 'Coffrets cadeaux', labelEn: 'Gift boxes', href: '/creations/coffrets-cadeaux' },
              ]},
              { title: 'Occasions', titleEn: 'Occasions', links: [
                { label: "Petit-déjeuner d'entreprise", labelEn: 'Corporate breakfast', href: '/occasions/petit-dejeuner-entreprise' },
                { label: 'Séminaire & réunion', labelEn: 'Offsites & meetings', href: '/occasions/seminaire-entreprise' },
                { label: "Cocktail d'entreprise", labelEn: 'Corporate cocktail', href: '/occasions/cocktail-entreprise' },
                { label: 'CODIR & COMEX', labelEn: 'Board & exec meetings', href: '/occasions/petit-dejeuner-codir' },
                { label: "Déjeuner d'entreprise", labelEn: 'Corporate lunch', href: '/occasions/dejeuner-entreprise' },
                { label: 'Traiteur halal', labelEn: 'Halal catering', href: '/traiteur-halal' },
                { label: 'Traiteur halal Paris', labelEn: 'Halal catering in Paris', href: '/traiteur-halal/paris' },
                { label: "Buffet halal d'entreprise", labelEn: 'Corporate halal buffet', href: '/traiteur-halal/buffet-entreprise' },
                { label: 'Plateaux repas halal', labelEn: 'Halal lunch trays', href: '/traiteur-halal/plateaux-repas' },
                { label: 'Traiteur éco-responsable', labelEn: 'Sustainable catering', href: '/traiteur-eco-responsable' },
                { label: 'Traiteur healthy', labelEn: 'Healthy catering', href: '/traiteur-healthy' },
                { label: 'Toutes les occasions', labelEn: 'All occasions', href: '/occasions' },
              ]},
              { title: 'Traiteur à Paris & IDF', titleEn: 'Catering in Paris & Île-de-France', links: [
                { label: 'Traiteur Paris', href: '/traiteur/paris' },
                { label: 'Traiteur La Défense', href: '/traiteur/la-defense' },
                { label: 'Traiteur Boulogne', href: '/traiteur/boulogne-billancourt' },
                { label: 'Traiteur Neuilly', href: '/traiteur/neuilly-sur-seine' },
                { label: 'Traiteur Levallois', href: '/traiteur/levallois-perret' },
                { label: 'Traiteur Issy', href: '/traiteur/issy-les-moulineaux' },
                { label: 'Petit-déjeuner Puteaux', href: '/petit-dejeuner-entreprise/puteaux' },
                { label: 'Petit-déjeuner Courbevoie', href: '/petit-dejeuner-entreprise/courbevoie' },
                { label: 'Petit-déjeuner La Défense', href: '/petit-dejeuner-entreprise/la-defense' },
                { label: 'Petit-déjeuner Suresnes', href: '/petit-dejeuner-entreprise/suresnes' },
                { label: 'Petit-déjeuner Nanterre', href: '/petit-dejeuner-entreprise/nanterre' },
                { label: 'Toutes les zones', labelEn: 'All areas', href: '/traiteur' },
              ]},
              { title: "L'Univers", titleEn: 'About us', links: [
                { label: 'Notre Maison', labelEn: 'Our story', href: '/univers/notre-maison' },
                { label: 'Nos Artisans', labelEn: 'Our makers', href: '/univers/nos-artisans' },
                { label: 'Nos Engagements', labelEn: 'Our commitments', href: '/univers/nos-engagements' },
                { label: 'Cas clients', labelEn: 'Case studies', href: '/univers/cas-clients' },
                { label: 'Notre méthode', labelEn: 'Our method', href: '/univers/notre-methode' },
                { label: 'Le Journal', labelEn: 'The Journal', href: '/journal' },
              ]},
              { title: 'Entreprise', titleEn: 'Company', links: [
                { label: 'Contact', labelEn: 'Contact', href: '/contact' },
                { label: 'Obtenir un devis', labelEn: 'Get a quote', href: '/devis' },
                { label: 'Tarifs 2026', labelEn: '2026 prices', href: '/tarifs' },
                { label: 'Avis clients', labelEn: 'Reviews', href: '/univers/avis-clients' },
                { label: '01 74 54 23 10', href: 'tel:+33174542310' },
                { label: 'commercial@lecrin-traiteur.fr', href: 'mailto:commercial@lecrin-traiteur.fr' },
                { label: '63 bis rue de Sèvres, Boulogne-Billancourt', href: 'https://www.google.com/maps/search/?api=1&query=63+bis+rue+de+Sèvres+92100+Boulogne-Billancourt' },
              ]},
            ].map(col => (
              <div key={col.title}>
                <span style={colTitleStyle}>{mot(col, 'title')}</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
                  {col.links.map(l => {
                    const ext = l.href.startsWith('http')
                    return (
                      <a key={l.label} href={lien(l.href)} style={linkStyle}
                        target={ext ? '_blank' : undefined} rel={ext ? 'noopener noreferrer' : undefined}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                      >{mot(l)}</a>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ borderTop: '1px solid rgba(17,17,17,0.07)' }}>
        <div className="footer-bottom" style={{ maxWidth: '1440px', margin: '0 auto', padding: '18px 72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Légal */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
            {[
              { label: 'Mentions légales', href: '/mentions-legales' },
              { label: 'CGV', href: '/cgv' },
              { label: 'English', href: '/corporate-catering-paris' },
              { label: 'Confidentialité', href: '/confidentialite' },
              { label: 'Cookies', href: '/cookies' },
            ].map(l => (
              <a key={l.label} href={l.href}
                style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', color: 'rgba(17,17,17,0.62)', textDecoration: 'none', letterSpacing: '0.03em', transition: 'color 0.2s ease' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(17,17,17,0.62)'}
              >{mot(l)}</a>
            ))}
          </div>

          {/* Droite */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', color: 'rgba(17,17,17,0.6)', letterSpacing: '0.03em' }}>
              © 2026 L'Écrin Traiteur — L'Écrin des Terroirs
            </p>
          </div>

        </div>
      </div>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .footer-main { padding: 60px 24px 48px !important; }
          .footer-grid { flex-direction: column !important; gap: 40px !important; }
          .footer-grid > div:first-child { width: 100% !important; }
          .footer-cols { grid-template-columns: 1fr 1fr !important; gap: 32px 40px !important; }
          .footer-bottom { flex-direction: column !important; align-items: center !important; gap: 16px !important; padding: 20px 24px !important; }
          .footer-bottom > div:first-child { flex-wrap: wrap !important; gap: 12px 20px !important; justify-content: center !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .footer-main { padding: 60px 40px 48px !important; }
          .footer-cols { grid-template-columns: repeat(3, 1fr) !important; gap: 28px !important; }
        }
      ` }} />

    </footer>
  )
}
