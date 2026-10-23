import Image from 'next/image'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Breadcrumb from '../Breadcrumb'
import ParallaxImage from '../ParallaxImage'
import ReviewsBadge from '../ReviewsBadge'
import DevisRapide from '../DevisRapide'
import { thematique } from '../../lib/thematiquesVue'
import { BUSINESS_ID } from '../../lib/site'

/*
  Pages Healthy et Éco-responsable (FR et /en), rendues côté serveur.
  Refonte du 23/10/2026 (audit design, chantier 10) sur le modèle de la page
  halal : question posée en clair, tableau de prix calculés, carte de fiches
  cliquables, faits, FAQ visible identique au balisage, devis.
  Textes et prix : lib/thematiquesVue.js. Styles : globals.css (.ev-).
*/
const BASE = 'https://www.lecrin-traiteur.fr'

export default function ThematiqueView({ cle, en = false }) {
  const t = thematique(cle, en)
  const pre = en ? '/en' : ''
  const url = `${BASE}${pre}${t.chemin}`
  const fil = [{ label: en ? 'Home' : 'Accueil', href: en ? '/en' : '/' }, { label: t.fil }]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: fil.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.label, item: c.href ? `${BASE}${c.href === '/' ? '' : c.href}` : url })) },
      {
        '@type': 'Service', '@id': `${url}#service`, name: t.h1, description: t.chapo,
        serviceType: en ? 'Corporate catering' : "Traiteur d'entreprise",
        provider: { '@id': BUSINESS_ID },
        areaServed: [{ '@type': 'City', name: 'Paris' }, { '@type': 'AdministrativeArea', name: 'Île-de-France' }],
        offers: { '@type': 'AggregateOffer', lowPrice: t.prixDes.toFixed(2), priceCurrency: 'EUR' },
      },
      { '@type': 'ItemList', '@id': `${url}#carte`, itemListElement: t.produits.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p.nom, url: `${BASE}${p.href}` })) },
      { '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: t.faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    ],
  }

  return (
    <>
      <Navbar showBanner />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="ev-main">
        <Breadcrumb items={fil} jsonLd={false} maxWidth="1440px" />

        <section className="ev-hero">
          <div className="ev-hero-texte">
            <p className="ev-surtitre">{t.surtitre}</p>
            <h1 className="ev-h1">{t.h1}</h1>
            <p className="ev-chapo">{t.chapo}</p>
            <p className="ev-faits">{t.faits}</p>
            <div className="ev-actions">
              <a className="ev-btn" href="#devis">{en ? 'Ask for a quote' : 'Demander un devis'}</a>
              <a className="ev-btn-filet" href="#prix">{en ? 'See the prices' : 'Voir les prix'}</a>
            </div>
            <ReviewsBadge showCount />
          </div>
          <div className="ev-hero-img">
            <ParallaxImage priority sizes="(max-width: 900px) 100vw, 55vw" src={t.img} alt={t.alt}
              strength={0.05} style={{ position: 'absolute', inset: 0 }} imgStyle={{ objectPosition: 'center' }} />
          </div>
        </section>

        <section className="ev-bloc ev-etroit">
          <h2 className="ev-h2">{t.questionTitre}</h2>
          <p className="ev-texte">{t.reponse}</p>
        </section>

        <section id="prix" className="ev-bloc ev-etroit">
          <h2 className="ev-h2">{t.prixTitre}</h2>
          <div className="ev-table-wrap">
            <table className="ev-table">
              <thead><tr>{t.entetes.map(h => <th key={h}>{h}</th>)}</tr></thead>
              <tbody>
                {t.lignesTableau.map(l => (
                  <tr key={l[0]}>{l.map((c, i) => (i === 0 ? <td key={i}><strong>{c}</strong></td> : <td key={i} className={i >= 2 ? 'ev-nowrap' : undefined}>{c}</td>))}</tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="ev-note">{t.note}</p>
        </section>

        <section className="ev-bloc">
          <h2 className="ev-h2">{t.carteTitre}</h2>
          <p className="ev-intro">{t.carteIntro}</p>
          <div className="ev-cartes occ-cartes">
            {t.produits.map(p => (
              <a key={p.href} href={p.href} className="ev-carte">
                <span className="ev-carte-img">
                  {p.img ? <Image fill sizes="(max-width: 768px) 50vw, 25vw" src={p.img} alt={p.nom} style={{ objectFit: 'cover' }} /> : <span className="pgr-sans-photo">{p.nom}</span>}
                </span>
                <span className="ev-carte-nom">{p.nom}</span>
                <span className="ev-carte-prix">{p.prixTexte}</span>
                {p.unite && <span className="ev-carte-unite">{p.unite}</span>}
              </a>
            ))}
          </div>
        </section>

        <section className="ev-bloc ev-etroit">
          <h2 className="ev-h2">{t.faitsTitre}</h2>
          <ul className="ev-lignes">
            {t.faitsListe.map(([a, b]) => <li key={a}><strong>{a}&nbsp;:</strong> {b}</li>)}
          </ul>
        </section>

        <section className="ev-bloc ev-etroit">
          <h2 className="ev-h2">{en ? 'Frequently asked questions' : 'Questions fréquentes'}</h2>
          <div className="ev-faq">
            {t.faq.map(f => (<details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>))}
          </div>
        </section>

        <section id="devis" className="ev-devis">
          <div className="ev-devis-inner">
            <DevisRapide defaultPrestation={t.devis} titre={t.devisTitre} titreEn={t.devisTitre}
              sousTitre="Répondez en 30 secondes, devis détaillé sous 24h, livraison dans toute l'Île-de-France."
              sousTitreEn="Answer in 30 seconds, a detailed quote within 24 hours, delivery across the Paris region." />
          </div>
        </section>

        <section className="ev-bloc ev-etroit">
          <h2 className="ev-h2">{en ? 'See also' : 'Voir aussi'}</h2>
          <ul className="ev-liens">
            {t.liens.map(([href, label]) => <li key={href}><a href={`${pre}${href}`}>{label}</a></li>)}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  )
}
