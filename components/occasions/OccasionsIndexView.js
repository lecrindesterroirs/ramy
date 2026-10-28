import Image from 'next/image'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Breadcrumb from '../Breadcrumb'
import ParallaxImage from '../ParallaxImage'
import ReviewsBadge from '../ReviewsBadge'
import DevisRapide from '../DevisRapide'
import { listeOccasions, prixHT, LIV, MINIMUM, BASE, CHEMIN } from '../../lib/occasionsVue'

/*
  Index des occasions (/occasions et /en/occasions), rendu côté serveur.
  Refonte du 23/10/2026 : les dix cartes beiges identiques deviennent une
  liste éditoriale (photo, phrase concrète, prix d'entrée calculé, délai),
  suivie d'un tableau récapitulatif et d'une FAQ visible et balisée.
*/
const T = {
  fr: {
    accueil: 'Accueil', fil: 'Occasions', surtitre: "Traiteur d'entreprise",
    h1: 'Un traiteur pour chaque occasion au bureau',
    chapo: "CODIR, séminaire, accueil client, formation, goûter, afterwork : pour chaque moment, ce que nous livrons, combien prévoir et le prix.",
    faits: (des, liv) => `Dès ${des} par personne · livraison ${liv} à Paris et dans les communes proches · commande jusqu'à la veille 10h`,
    devis: 'Demander un devis', voir: 'Voir les occasions',
    listeTitre: 'Les occasions',
    meta: (des) => `Dès ${des} par personne · commande jusqu'à la veille 10h`,
    tableTitre: 'Les prix en un tableau',
    entetes: ['Occasion', 'Formats conseillés', 'Prix d\'entrée HT par personne', 'Exemple livré'],
    note: (liv, min) => `Exemples livraison comprise (${liv} à Paris et dans les communes proches). Minimum de commande ${min}.`,
    faq: 'Questions fréquentes',
    q: (liv, min) => [
      { q: "Jusqu'à quand peut-on commander ?", a: "Jusqu'à la veille 10h pour une livraison dès 6h30, du lundi au vendredi. À partir de 50 personnes ou pour plusieurs sites, un préavis de 48 h est recommandé." },
      { q: 'Quel est le minimum de commande ?', a: `${min} par commande, sans minimum de participants. La livraison est de ${liv} à Paris et dans les communes proches ; au-delà, le prix de la zone figure au devis.` },
      { q: 'Le salé est-il halal ?', a: 'Oui. Tout notre salé est halal et sans porc, sans alcool et sans supplément. Options végétariennes, vegan et sans gluten sur demande.' },
      { q: 'Peut-on commander plusieurs moments pour la même journée ?', a: "Oui. Accueil café, pauses et déjeuner peuvent partir dans une seule commande, livrés ensemble ou à des heures différentes. Le devis les détaille service par service." },
    ],
    devisTitre: 'Une occasion à organiser ?',
    devisSous: "Répondez en 30 secondes, devis détaillé sous 24h, livraison dans toute l'Île-de-France.",
  },
  en: {
    accueil: 'Home', fil: 'Occasions', surtitre: 'Corporate catering',
    h1: 'A caterer for every occasion at the office',
    chapo: 'Board meeting, offsite, client welcome, training day, afternoon break, afterwork: for each one, what we deliver, how much to allow and the price.',
    faits: (des, liv) => `From ${des} per person · delivery ${liv} in Paris and nearby towns · order by 10 am the day before`,
    devis: 'Ask for a quote', voir: 'See the occasions',
    listeTitre: 'The occasions',
    meta: (des) => `From ${des} per person · order by 10 am the day before`,
    tableTitre: 'Prices in one table',
    entetes: ['Occasion', 'Recommended formats', 'Starting price excl. VAT per person', 'Delivered example'],
    note: (liv, min) => `Examples include delivery (${liv} in Paris and nearby towns). Minimum order ${min}.`,
    faq: 'Frequently asked questions',
    q: (liv, min) => [
      { q: 'How late can you order?', a: "Until 10 am the day before for delivery from 6:30 am, Monday to Friday. From 50 people or across several sites, 48 hours' notice is recommended." },
      { q: 'What is the minimum order?', a: `${min} per order, with no minimum headcount. Delivery is ${liv} in Paris and nearby towns; further out, the zone price is shown in the quote.` },
      { q: 'Is the savoury food halal?', a: 'Yes. All our savoury food is halal and pork-free, alcohol-free and at no extra cost. Vegetarian, vegan and gluten-free options on request.' },
      { q: 'Can we order several services for the same day?', a: 'Yes. Welcome coffee, breaks and lunch can go in one order, delivered together or at different times. The quote sets them out service by service.' },
    ],
    devisTitre: 'An occasion to organise?',
    devisSous: 'Answer in 30 seconds, a detailed quote within 24 hours, delivery across the Paris region.',
  },
}

export default function OccasionsIndexView({ en = false }) {
  const lang = en ? 'en' : 'fr'
  const L = T[lang]
  const url = `${BASE}${en ? '/en' : ''}${CHEMIN}`
  const liste = listeOccasions(en)
  const liv = prixHT(LIV, lang)
  const min = prixHT(MINIMUM, lang)
  const desTexte = prixHT(Math.min(...liste.map(o => o.desNum)), lang)
  const faq = L.q(liv, min)
  const fil = [{ label: L.accueil, href: en ? '/en' : '/' }, { label: L.fil }]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'CollectionPage', '@id': `${url}#webpage`, url, name: L.h1, inLanguage: en ? 'en-GB' : 'fr-FR', isPartOf: { '@id': `${BASE}/#website` }, mainEntity: { '@id': `${url}#liste` } },
      { '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: [
        { '@type': 'ListItem', position: 1, name: L.accueil, item: `${BASE}${en ? '/en' : ''}` },
        { '@type': 'ListItem', position: 2, name: L.fil, item: url },
      ] },
      { '@type': 'ItemList', '@id': `${url}#liste`, itemListElement: liste.map((o, i) => ({ '@type': 'ListItem', position: i + 1, name: o.nom, url: `${BASE}${o.href}` })) },
      { '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
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
            <p className="ev-surtitre">{L.surtitre}</p>
            <h1 className="ev-h1">{L.h1}</h1>
            <p className="ev-chapo">{L.chapo}</p>
            <p className="ev-faits">{L.faits(desTexte, liv)}</p>
            <div className="ev-actions">
              <a className="ev-btn" href="#devis">{L.devis}</a>
              <a className="ev-btn-filet" href="#liste">{L.voir}</a>
            </div>
            <ReviewsBadge showCount />
          </div>
          <div className="ev-hero-img">
            <ParallaxImage priority sizes="(max-width: 900px) 100vw, 55vw" src="/maitre-hotel-petit-dejeuner-salon.webp"
              alt={en ? "A corporate breakfast laid out by L'Écrin Traiteur, with a waiter" : "Petit-déjeuner d'entreprise dressé par L'Écrin Traiteur, avec un maître d'hôtel"}
              strength={0.05} style={{ position: 'absolute', inset: 0 }} imgStyle={{ objectPosition: 'center 60%' }} />
          </div>
        </section>

        <section id="liste" className="ev-bloc occ-liste">
          <h2 className="ev-h2">{L.listeTitre}</h2>
          <ul className="ev-liste">
            {liste.map(o => (
              <li key={o.slug}>
                <a href={o.href} className="ev-ligne">
                  <span className="ev-ligne-img"><Image fill sizes="(max-width: 768px) 96px, 160px" src={o.img} alt="" style={{ objectFit: 'cover' }} /></span>
                  <span className="ev-ligne-corps">
                    <span className="ev-ligne-nom">{o.nom}</span>
                    <span className="ev-ligne-desc">{o.court}</span>
                    <span className="ev-ligne-meta">{L.meta(o.des)}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="ev-bloc ev-etroit">
          <h2 className="ev-h2">{L.tableTitre}</h2>
          <div className="ev-table-wrap">
            <table className="ev-table">
              <thead><tr>{L.entetes.map(h => <th key={h}>{h}</th>)}</tr></thead>
              <tbody>
                {liste.map(o => (
                  <tr key={o.slug}>
                    <td><a href={o.href}>{o.nom}</a></td>
                    <td>{o.format.join(', ')}</td>
                    <td className="ev-nowrap">{o.des}</td>
                    <td>{o.ex ? `${o.ex.libelle} : ${o.ex.totalTexte}` : ''}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="ev-note">{L.note(liv, min)}</p>
        </section>

        <section className="ev-bloc ev-etroit">
          <h2 className="ev-h2">{L.faq}</h2>
          <div className="ev-faq">
            {faq.map(f => (<details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>))}
          </div>
        </section>

        <section id="devis" className="ev-devis occ-devis">
          <div className="ev-devis-inner">
            <DevisRapide titre={T.fr.devisTitre} titreEn={T.en.devisTitre} sousTitre={T.fr.devisSous} sousTitreEn={T.en.devisSous} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
