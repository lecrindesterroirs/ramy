import Image from 'next/image'
import Navbar from './Navbar'
import Footer from './Footer'
import Breadcrumb from './Breadcrumb'
import ParallaxImage from './ParallaxImage'
import ReviewsBadge from './ReviewsBadge'
import DevisRapide from './DevisRapide'
import { FORMULES, LIV } from '../lib/calculsPrix'
import { MINIMUM, RECUP, LIV_RECUP_PROCHE, ANIMATION_DES, PLATEAU_DES, euroFr, euroEn } from '../lib/prixEntree'
import { BUSINESS_ID } from '../lib/site'
import { MENUS } from '../app/creations/a-partager/data'

/* Prix « dès » des menus à partager, lu dans leurs fiches (« 34,90 € / pers. »). */
const PARTAGE_DES = Math.min(...MENUS.map(m => Number(String(m.prix).match(/(\d+(?:,\d+)?)/)[1].replace(',', '.'))))

/*
  Page « Événement sur mesure » (/creations/receptions-sur-mesure et /en),
  refaite le 22/10/2026 : l'ancienne page alignait huit cartes non cliquables
  et des images sans rapport. Rendu serveur ; prix lus dans lib/prixEntree.js
  et lib/calculsPrix.js. Styles : app/globals.css, .ev- et .rsm-.
*/
const BASE = 'https://www.lecrin-traiteur.fr'
const CHEMIN = '/creations/receptions-sur-mesure'

export default function ReceptionView({ en = false }) {
  const pre = en ? '/en' : ''
  const url = `${BASE}${pre}${CHEMIN}`
  const ht = (x) => (en ? `${euroEn(x)} excl. VAT` : `${euroFr(x)} HT`)
  const cocktailDes = Math.min(...Object.values(FORMULES).map(f => f.prix))

  const T = en ? {
    accueil: 'Home', fil: 'Bespoke events',
    surtitre: 'Bespoke corporate event',
    h1: 'Bespoke corporate events in Paris',
    chapo: 'An opening, a three-day offsite, an end-of-year party: we put together the food, the live stations and the staff around your venue, your headcount and your timings.',
    faits: `Cocktail from ${ht(cocktailDes)} per person · live station from ${ht(ANIMATION_DES)} · waiting staff on request · quote within 24 hours`,
    devis: 'Ask for a quote', voir: 'See how we price it',
    brefTitre: 'At a glance',
    bref: `A bespoke event is built from pieces that already have a price: cocktail menus from ${ht(cocktailDes)} per person, live food stations from ${ht(ANIMATION_DES)} each, lunch trays from ${ht(PLATEAU_DES)}, plus waiting staff if you want service. Delivery is ${ht(LIV)} in Paris and nearby towns; delivery plus collecting the equipment afterwards, ${ht(LIV_RECUP_PROCHE)} in Paris, Hauts-de-Seine and Val-de-Marne. We send a detailed quote within 24 hours.`,
    blocsTitre: 'What we put together',
    blocsIntro: 'Each block links to its page, with prices and what is included.',
    service: 'Waiting staff',
    serviceTexte: 'On request, a waiter or maître d’hôtel sets up the buffet, serves and clears away. Staff are priced in the quote by the length of the service; tell us your start and end times.',
    derouleTitre: 'How it runs',
    deroule: [
      'You send the date, the venue, the headcount and the timings.',
      'Within 24 hours you get a detailed quote: menu, quantities, live stations, staff and delivery.',
      'We adjust: dietary needs, presentation, a second service if the event runs all day.',
      'The day before, we confirm the times and the on-site contact.',
      'On the day: delivery, setup, service if booked, and collection of the equipment.',
    ],
    chiffreTitre: 'How we price it',
    entetes: ['Item', 'How it is priced', 'From'],
    lignes: [
      ['Cocktail pieces', 'price per person × headcount, 8, 12 or 16 pieces each', `${ht(cocktailDes)} per person`],
      ['Live food station', 'setup plus portions, by headcount and length', `${ht(ANIMATION_DES)} per station`],
      ['Seated or working lunch', 'lunch trays or sharing menus, per person', `${ht(PLATEAU_DES)} per person`],
      ['Waiting staff', 'by the length of the service', 'in the quote'],
      ['Delivery', 'Paris and nearby towns; further out, by zone', ht(LIV)],
      ['Delivery and equipment collection', `Paris, Hauts-de-Seine, Val-de-Marne; elsewhere, the zone price plus ${ht(RECUP)}`, ht(LIV_RECUP_PROCHE)],
    ],
    note: `Minimum order ${ht(MINIMUM)}. Company invoice showing VAT, purchase orders accepted.`,
    casTitre: 'A real example',
    cas: 'Three days in Ermont (95) in June 2026, for an offsite organiser: breakfast every morning at 7:00 am, lunch trays in five menus (one vegetarian, two meat, two fish) every day at 11:30 am, with coffee and tea.',
    casLien: 'More client cases',
    faqTitre: 'Frequently asked questions',
    faq: [
      { q: 'How far ahead should you book a bespoke event?', a: 'For a live station or waiting staff, ask for the quote at least a week ahead so we can check access, water and power. For food only, until 2 pm the day before, 48 hours from 50 guests.' },
      { q: 'How much does a live food station cost?', a: `From ${ht(ANIMATION_DES)} per station, set-up and portions included; the quote depends on headcount and length.` },
      { q: 'Do you provide waiting staff?', a: 'Yes, on request: a waiter or maître d’hôtel sets up, serves and clears away. Priced in the quote by the length of the service.' },
      { q: 'Do you deliver outside Paris?', a: `Yes, across Île-de-France. Delivery is ${ht(LIV)} in Paris and nearby towns; further out it depends on the zone and is shown in the quote.` },
      { q: 'Is the food halal?', a: 'All our savoury food is halal and pork-free, with no alcohol, at no extra cost. Vegetarian, vegan and gluten-free options on request.' },
    ],
    devisTitre: 'An event to organise?', devisSous: 'Answer in 30 seconds, detailed quote within 24 hours.',
    blocs: [
      { href: '/en/creations/cocktails', img: '/cocktail-classique.webp', nom: 'Cocktail reception', prix: `from ${ht(cocktailDes)} per person`, unite: '8, 12 or 16 pieces per guest' },
      { href: '/en/creations/animations-culinaires', img: '/prod-atelier-crepes.webp', nom: 'Live food stations', prix: `from ${ht(ANIMATION_DES)} per station`, unite: 'crêpes, pasta, sushi, ice cream…' },
      { href: '/en/creations/a-partager', img: '/hero-a-partager.webp', nom: 'Sharing buffet', prix: `from ${ht(PARTAGE_DES)} per person`, unite: 'salads and boards for 8 to 12' },
      { href: '/en/creations/plateaux-repas', img: '/hero-plateau-signature.webp', nom: 'Lunch trays', prix: `from ${ht(PLATEAU_DES)} per person`, unite: 'starter, main, dessert' },
    ],
  } : {
    accueil: 'Accueil', fil: 'Événement sur mesure',
    surtitre: "Événement d'entreprise",
    h1: "Événement d'entreprise sur mesure à Paris",
    chapo: "Une inauguration, un séminaire de trois jours, une soirée de fin d'année : nous composons le menu, les animations et le service autour de votre lieu, de votre effectif et de vos horaires.",
    faits: `Cocktail dès ${ht(cocktailDes)} par personne · animation dès ${ht(ANIMATION_DES)} · maître d'hôtel sur demande · devis sous 24h`,
    devis: 'Demander un devis', voir: 'Voir comment on chiffre',
    brefTitre: "L'essentiel",
    bref: `Un événement sur mesure s'assemble à partir de prestations qui ont déjà un prix : formules cocktail dès ${ht(cocktailDes)} par personne, animations culinaires dès ${ht(ANIMATION_DES)} chacune, plateaux repas dès ${ht(PLATEAU_DES)}, et un maître d'hôtel si vous voulez du service. Livraison ${ht(LIV)} à Paris et dans les communes proches ; livraison et reprise du matériel ${ht(LIV_RECUP_PROCHE)} à Paris, dans les Hauts-de-Seine et le Val-de-Marne. Devis détaillé sous 24h.`,
    blocsTitre: 'Ce que nous assemblons',
    blocsIntro: 'Chaque bloc renvoie à sa page, avec les prix et ce qui est compris.',
    service: "Maîtres d'hôtel",
    serviceTexte: "Sur demande, un maître d'hôtel installe le buffet, sert et débarrasse. Le personnel est chiffré au devis selon la durée du service : indiquez l'heure de début et de fin.",
    derouleTitre: 'Le déroulé type',
    deroule: [
      "Vous nous envoyez la date, le lieu, l'effectif et les horaires.",
      'Sous 24h, un devis détaillé : menu, quantités, animations, personnel et livraison.',
      "On ajuste : régimes, présentation, second service si l'événement dure la journée.",
      'La veille, nous confirmons les horaires et le contact sur place.',
      'Le jour J : livraison, installation, service si prévu, reprise du matériel.',
    ],
    chiffreTitre: 'Comment on chiffre',
    entetes: ['Poste', 'Mode de calcul', 'À partir de'],
    lignes: [
      ['Pièces cocktail', 'prix par personne × effectif, 8, 12 ou 16 pièces', `${ht(cocktailDes)} par personne`],
      ['Animation culinaire', "mise en place + portions, selon l'effectif et la durée", `${ht(ANIMATION_DES)} par animation`],
      ['Déjeuner assis ou de travail', 'plateaux repas ou menus à partager, par personne', `${ht(PLATEAU_DES)} par personne`],
      ["Maître d'hôtel", 'selon la durée du service', 'au devis'],
      ['Livraison', 'Paris et communes proches ; au-delà, selon la zone', ht(LIV)],
      ['Livraison et reprise du matériel', `Paris, Hauts-de-Seine, Val-de-Marne ; ailleurs, prix de la zone + ${ht(RECUP)}`, ht(LIV_RECUP_PROCHE)],
    ],
    note: `Minimum de commande ${ht(MINIMUM)}. Facture entreprise avec TVA, bon de commande accepté.`,
    casTitre: 'Un exemple réel',
    cas: "Trois jours à Ermont (95) en juin 2026, pour un organisateur de séminaires : petit-déjeuner chaque matin à 7h00, plateaux repas en cinq menus (un végétarien, deux viandes, deux poissons) chaque midi à 11h30, avec café et thé.",
    casLien: 'Voir nos cas clients',
    faqTitre: 'Questions fréquentes',
    faq: [
      { q: "Combien de temps à l'avance réserver un événement sur mesure ?", a: "Pour une animation ou un maître d'hôtel, demandez le devis au moins une semaine avant : nous vérifions l'accès, le point d'eau et l'électricité. Pour la seule nourriture, jusqu'à 14h la veille, 48 h à partir de 50 personnes." },
      { q: 'Combien coûte une animation culinaire ?', a: `Dès ${ht(ANIMATION_DES)} par animation, mise en place et portions comprises ; le devis suit l'effectif et la durée.` },
      { q: "Fournissez-vous des maîtres d'hôtel ?", a: "Oui, sur demande : un maître d'hôtel installe, sert et débarrasse. Chiffré au devis selon la durée du service." },
      { q: 'Livrez-vous hors de Paris ?', a: `Oui, dans toute l'Île-de-France. Livraison ${ht(LIV)} à Paris et dans les communes proches ; au-delà, le tarif dépend de la zone et figure au devis.` },
      { q: 'Le salé est-il halal ?', a: 'Tout notre salé est halal et sans porc, sans alcool et sans supplément. Options végétariennes, vegan et sans gluten sur demande.' },
    ],
    devisTitre: 'Un événement à organiser ?', devisSous: 'Répondez en 30 secondes, devis détaillé sous 24h.',
    blocs: [
      { href: '/creations/cocktails', img: '/cocktail-classique.webp', nom: 'Cocktail', prix: `dès ${ht(cocktailDes)} par personne`, unite: '8, 12 ou 16 pièces par personne' },
      { href: '/creations/animations-culinaires', img: '/prod-atelier-crepes.webp', nom: 'Animations culinaires', prix: `dès ${ht(ANIMATION_DES)} par animation`, unite: 'crêpes, pasta, sushi, glaces…' },
      { href: '/creations/a-partager', img: '/hero-a-partager.webp', nom: 'Buffet à partager', prix: `dès ${ht(PARTAGE_DES)} par personne`, unite: 'salades et planches pour 8 à 12' },
      { href: '/creations/plateaux-repas', img: '/hero-plateau-signature.webp', nom: 'Plateaux repas', prix: `dès ${ht(PLATEAU_DES)} par personne`, unite: 'entrée, plat, dessert' },
    ],
  }

  const fil = [{ label: T.accueil, href: en ? '/en' : '/' }, { label: T.fil }]
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'BreadcrumbList', itemListElement: fil.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.label, item: c.href ? `${BASE}${c.href === '/' ? '' : c.href}` : url })) },
      {
        '@type': 'Service', '@id': `${url}#service`, name: T.h1,
        serviceType: en ? 'Bespoke corporate event catering' : "Traiteur d'événement d'entreprise sur mesure",
        provider: { '@id': BUSINESS_ID },
        areaServed: [{ '@type': 'City', name: 'Paris' }, { '@type': 'AdministrativeArea', name: 'Île-de-France' }],
        offers: { '@type': 'AggregateOffer', lowPrice: cocktailDes.toFixed(2), priceCurrency: 'EUR' },
      },
      { '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: T.faq.map(q => ({ '@type': 'Question', name: q.q, acceptedAnswer: { '@type': 'Answer', text: q.a } })) },
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
            <h1 className="ev-h1">{T.h1}</h1>
            <p className="ev-chapo">{T.chapo}</p>
            <p className="ev-faits">{T.faits}</p>
            <div className="ev-actions">
              <a className="ev-btn" href="#devis">{T.devis}</a>
              <a className="ev-btn-filet" href="#chiffrage">{T.voir}</a>
            </div>
            <ReviewsBadge showCount />
          </div>
          <div className="ev-hero-img">
            <ParallaxImage priority sizes="(max-width: 900px) 100vw, 55vw" src="/cocktail-dinatoire.webp" alt={en ? 'Savoury cocktail pieces' : 'Pièces cocktail salées'}
              strength={0.05} style={{ position: 'absolute', inset: 0 }} imgStyle={{ objectPosition: 'center' }} />
          </div>
        </section>

        <section className="ev-bloc ev-etroit">
          <h2 className="ev-h2">{T.brefTitre}</h2>
          <p className="ev-texte">{T.bref}</p>
        </section>

        <section className="ev-bloc">
          <h2 className="ev-h2">{T.blocsTitre}</h2>
          <p className="ev-intro">{T.blocsIntro}</p>
          <div className="ev-cartes rsm-cartes">
            {T.blocs.map(b => (
              <a key={b.href} href={b.href} className="ev-carte">
                <span className="ev-carte-img"><Image fill sizes="(max-width: 768px) 50vw, 25vw" src={b.img} alt={b.nom} style={{ objectFit: 'cover' }} /></span>
                <span className="ev-carte-nom">{b.nom}</span>
                <span className="ev-carte-prix">{b.prix}</span>
                <span className="ev-carte-unite">{b.unite}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="ev-signature">
          <div className="ev-signature-img">
            <Image fill sizes="(max-width: 900px) 100vw, 45vw" src="/detail-bg.webp" alt="" style={{ objectFit: 'cover' }} />
          </div>
          <div className="ev-signature-texte">
            <h2 className="ev-h2">{T.service}</h2>
            <p className="ev-texte">{T.serviceTexte}</p>
          </div>
        </section>

        <section className="ev-bloc ev-etroit">
          <h2 className="ev-h2">{T.derouleTitre}</h2>
          <ol className="rsm-deroule">
            {T.deroule.map(e => <li key={e}>{e}</li>)}
          </ol>
        </section>

        <section id="chiffrage" className="ev-bloc ev-etroit">
          <h2 className="ev-h2">{T.chiffreTitre}</h2>
          <div className="ev-table-wrap">
            <table className="ev-table">
              <thead><tr>{T.entetes.map(h => <th key={h}>{h}</th>)}</tr></thead>
              <tbody>
                {T.lignes.map(([a, b, c]) => (
                  <tr key={a}><td><strong>{a}</strong></td><td>{b}</td><td className="ev-nowrap">{c}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="ev-note">{T.note}</p>
        </section>

        <section className="ev-bloc ev-etroit">
          <h2 className="ev-h2">{T.casTitre}</h2>
          <p className="ev-texte">{T.cas}</p>
          <p className="ev-texte ckv-liens-occ"><a href={`${pre}/univers/cas-clients`}>{T.casLien}</a></p>
        </section>

        <section className="ev-bloc ev-etroit">
          <h2 className="ev-h2">{T.faqTitre}</h2>
          <div className="ev-faq">
            {T.faq.map(q => (<details key={q.q}><summary>{q.q}</summary><p>{q.a}</p></details>))}
          </div>
        </section>

        <section id="devis" className="ev-devis rsm-devis">
          <div className="ev-devis-inner">
            <DevisRapide defaultPrestation="Événement sur mesure" titre={T.devisTitre} titreEn={T.devisTitre} sousTitre={T.devisSous} sousTitreEn={T.devisSous} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
