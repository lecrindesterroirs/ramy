import { notFound } from 'next/navigation'
import Image from 'next/image'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Breadcrumb from '../Breadcrumb'
import ParallaxImage from '../ParallaxImage'
import ReviewsBadge from '../ReviewsBadge'
import DevisRapide from '../DevisRapide'
import { BUSINESS_ID, productOfferPolicy } from '../../lib/site'
import {
  formulePour, formules, exemples, guidesCocktail, lignesPratiques, faqFormule,
  prixHT, BASE, CHEMIN, MINIMUM,
} from '../../lib/cocktailsVue'

/*
  Fiche d'une formule cocktail, rendue côté serveur (refonte du 22/10/2026,
  modèle : components/evenements/EvenementView.js). Sert
  /creations/cocktails/<formule> et /en/creations/cocktails/<formule>.
  Seuls Navbar, ParallaxImage, ReviewsBadge et DevisRapide sont des îlots
  client. Styles : app/globals.css, préfixes .ev- et .ckv-.
*/
export default function CocktailFicheView({ slug, en = false }) {
  const f = formulePour(slug, en)
  if (!f) notFound()
  const pre = en ? '/en' : ''
  const url = `${BASE}${pre}${CHEMIN}/${f.key}`
  const nom = `Cocktail ${f.label}`
  const ex = exemples(f)
  const faq = faqFormule(f, en)
  const autres = formules(en).filter(x => x.key !== f.key)
  const guides = guidesCocktail(en)
  const lignes = lignesPratiques(en)

  const T = en ? {
    accueil: 'Home', fil: 'Cocktail receptions',
    surtitre: `${f.occasion} · ${f.pieces} pieces`,
    faits: `${prixHT(f.prixNum, true)} per person · ${f.pieces} pieces · order by 2 pm the day before · minimum ${prixHT(MINIMUM, true)}`,
    devis: 'Ask for a quote', compo: 'See what is in it',
    brefTitre: 'At a glance',
    bref: `The ${f.label} cocktail menu costs ${prixHT(f.prixNum, true)} per person for ${f.pieces} pieces (${f.sale.length} savoury, ${f.sucre.length} sweet), delivered arranged across Paris and Île-de-France. For 20 guests that is ${prixHT(ex[0].total, true)} with delivery. Order until 2 pm the day before.`,
    menuSurtitre: 'The menu', compoTitre: `${f.pieces} pieces per person`, sale: 'Savoury', sucre: 'Sweet', enPlus: 'To share, on top',
    combien: 'How much to allow', entetes: ['Guests', 'Pieces delivered', 'Total excl. VAT, delivered', 'Per person'],
    pers: (n) => `${n} guests`,
    note: 'Delivery included, drinks not included. The price per person does not change with headcount.',
    pratique: 'Ordering and delivery', faqTitre: 'Frequently asked questions',
    devisTitre: `A ${f.label} cocktail to organise?`, devisSous: 'Answer in 30 seconds, detailed quote within 24 hours.',
    autres: 'The other menus', parPers: 'per person', pieces: (n) => `${n} pieces per person`,
    lectures: 'To help you prepare', guide: 'Guide',
  } : {
    accueil: 'Accueil', fil: 'Cocktails',
    surtitre: `${f.occasion} · ${f.pieces} pièces`,
    faits: `${prixHT(f.prixNum)} par personne · ${f.pieces} pièces · commande jusqu'à la veille 14h · minimum ${prixHT(MINIMUM)}`,
    devis: 'Demander un devis', compo: 'Voir la composition',
    brefTitre: "L'essentiel",
    bref: `Le cocktail ${f.label} coûte ${prixHT(f.prixNum)} par personne pour ${f.pieces} pièces (${f.sale.length} salées, ${f.sucre.length} sucrées), livrées dressées à Paris et en Île-de-France. Pour 20 personnes, comptez ${prixHT(ex[0].total)} livraison comprise. Commande jusqu'à la veille 14h.`,
    menuSurtitre: 'Le menu', compoTitre: `${f.pieces} pièces par personne`, sale: 'Salé', sucre: 'Sucré', enPlus: 'À partager, en plus',
    combien: 'Combien prévoir', entetes: ['Effectif', 'Pièces livrées', 'Total HT livré', 'Par personne HT'],
    pers: (n) => `${n} personnes`,
    note: "Livraison comprise, boissons non comprises. Le prix par personne ne change pas avec l'effectif.",
    pratique: 'Commande et livraison', faqTitre: 'Questions fréquentes',
    devisTitre: `Un cocktail ${f.label} à organiser ?`, devisSous: 'Répondez en 30 secondes, devis détaillé sous 24h.',
    autres: 'Les autres formules', parPers: 'par personne', pieces: (n) => `${n} pièces par personne`,
    lectures: 'Pour préparer', guide: 'Guide',
  }

  const fil = [
    { label: T.accueil, href: en ? '/en' : '/' },
    { label: T.fil, href: `${pre}${CHEMIN}` },
    { label: nom },
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: fil.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.label, item: c.href ? `${BASE}${c.href === '/' ? '' : c.href}` : url })),
      },
      {
        '@type': 'Product',
        '@id': `${url}#product`,
        name: nom,
        description: `${f.accroche} ${T.pieces(f.pieces)}.`,
        image: `${BASE}${f.img}`,
        brand: { '@type': 'Brand', name: "L'Écrin Traiteur" },
        category: en ? 'Corporate cocktail reception' : "Cocktail d'entreprise",
        offers: {
          '@type': 'Offer',
          price: f.prixNum.toFixed(2),
          priceCurrency: 'EUR',
          priceSpecification: { '@type': 'UnitPriceSpecification', price: f.prixNum.toFixed(2), priceCurrency: 'EUR', valueAddedTaxIncluded: false, unitText: en ? 'per person' : 'par personne' },
          availability: 'https://schema.org/InStock',
          areaServed: 'Île-de-France',
          url,
          seller: { '@id': BUSINESS_ID },
          ...productOfferPolicy(),
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: faq.map(q => ({ '@type': 'Question', name: q.q, acceptedAnswer: { '@type': 'Answer', text: q.a } })),
      },
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
            <p className="ev-surtitre">{T.surtitre}</p>
            <h1 className="ev-h1">{nom}</h1>
            <p className="ev-chapo">{f.accroche}</p>
            <p className="ev-faits">{T.faits}</p>
            <div className="ev-actions">
              <a className="ev-btn" href="#devis">{T.devis}</a>
              <a className="ev-btn-filet" href="#composition">{T.compo}</a>
            </div>
            <ReviewsBadge showCount />
          </div>
          <div className="ev-hero-img">
            <ParallaxImage priority sizes="(max-width: 900px) 100vw, 55vw" src={f.img} alt={nom}
              strength={0.05} style={{ position: 'absolute', inset: 0 }} imgStyle={{ objectPosition: 'center' }} />
          </div>
        </section>

        <section className="ev-bloc ev-etroit">
          <h2 className="ev-h2">{T.brefTitre}</h2>
          <p className="ev-texte">{T.bref}</p>
        </section>

        <section id="composition" className="ev-bloc ev-etroit">
          <div className="ckv-menu">
            <p className="ckv-menu-surtitre">{T.menuSurtitre}</p>
            <h2 className="ckv-menu-titre">{T.compoTitre}</h2>
            <span className="ckv-menu-orn" aria-hidden="true" />
            <h3 className="ckv-menu-h3">{T.sale} · {f.sale.length}</h3>
            <ul className="ckv-menu-liste">{f.sale.map(p => <li key={p}>{p}</li>)}</ul>
            <span className="ckv-menu-orn" aria-hidden="true" />
            <h3 className="ckv-menu-h3">{T.sucre} · {f.sucre.length}</h3>
            <ul className="ckv-menu-liste">{f.sucre.map(p => <li key={p}>{p}</li>)}</ul>
            {f.enPlus?.length > 0 && (
              <>
                <span className="ckv-menu-orn" aria-hidden="true" />
                <h3 className="ckv-menu-h3">{T.enPlus}</h3>
                <ul className="ckv-menu-liste">{f.enPlus.map(p => <li key={p}>{p}</li>)}</ul>
              </>
            )}
          </div>
        </section>

        <section className="ev-bloc ev-etroit">
          <h2 className="ev-h2">{T.combien}</h2>
          <div className="ev-table-wrap">
            <table className="ev-table">
              <thead><tr>{T.entetes.map(h => <th key={h}>{h}</th>)}</tr></thead>
              <tbody>
                {ex.map(x => (
                  <tr key={x.n}>
                    <td><strong>{T.pers(x.n)}</strong></td>
                    <td>{x.pieces}</td>
                    <td className="ev-nowrap">{prixHT(x.total, en)}</td>
                    <td className="ev-nowrap">{prixHT(x.parPersonne, en)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="ev-note">{T.note}</p>
        </section>

        <section className="ev-bloc ev-etroit">
          <h2 className="ev-h2">{T.pratique}</h2>
          <ul className="ev-lignes">
            {lignes.map(([label, texte]) => <li key={label}><strong>{label}&nbsp;:</strong> {texte}</li>)}
          </ul>
        </section>

        <section className="ev-bloc ev-etroit">
          <h2 className="ev-h2">{T.faqTitre}</h2>
          <div className="ev-faq">
            {faq.map(q => (
              <details key={q.q}>
                <summary>{q.q}</summary>
                <p>{q.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="devis" className="ev-devis">
          <div className="ev-devis-inner">
            <DevisRapide defaultPrestation="Cocktail / Buffet" titre={T.devisTitre} titreEn={T.devisTitre} sousTitre={T.devisSous} sousTitreEn={T.devisSous} />
          </div>
        </section>

        <section className="ev-bloc">
          <h2 className="ev-h2">{T.autres}</h2>
          <div className="ev-cartes ckv-cartes-2">
            {autres.map(x => (
              <a key={x.key} href={`${pre}${CHEMIN}/${x.key}`} className="ev-carte">
                <span className="ev-carte-img">
                  <Image fill sizes="(max-width: 768px) 50vw, 33vw" src={x.img} alt={`Cocktail ${x.label}`} style={{ objectFit: 'cover' }} />
                </span>
                <span className="ev-carte-nom">Cocktail {x.label}</span>
                <span className="ev-carte-prix">{prixHT(x.prixNum, en)} {T.parPers}</span>
                <span className="ev-carte-unite">{T.pieces(x.pieces)}</span>
              </a>
            ))}
          </div>
        </section>

        {guides.length > 0 && (
          <section className="ev-bloc ev-etroit">
            <h2 className="ev-h2">{T.lectures}</h2>
            <ul className="ev-liens">
              {guides.map(g => <li key={g.href}><a href={g.href}>{g.titre}</a><span>{T.guide}</span></li>)}
            </ul>
          </section>
        )}
      </main>

      <Footer />
    </>
  )
}
