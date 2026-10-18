'use client'

import { usePathname } from 'next/navigation'
import { estAnglais } from '../../../lib/i18n'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import BreadcrumbJsonLd from '../../../components/BreadcrumbJsonLd'
import BusinessJsonLd from '../../../components/BusinessJsonLd'

/* Fond papier (grain léger) pour l'effet parchemin. */
const GRAIN_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'>
  <filter id='g'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/>
  <feColorMatrix type='saturate' values='0'/></filter>
  <rect width='100%' height='100%' filter='url(#g)' opacity='0.4'/>
</svg>`
const GRAIN = `url("data:image/svg+xml,${encodeURIComponent(GRAIN_SVG)}")`

const GOLD = '#A9803B'

function Sprig() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', margin: '8px 0' }}>
      <span style={{ width: '54px', height: '1px', background: 'rgba(169,128,59,0.5)' }} />
      <svg width="28" height="17" viewBox="0 0 26 16" fill="none" stroke={GOLD} strokeWidth="0.9">
        <path d="M13 15 C13 9 13 5 13 1" />
        <path d="M13 11 C9 10 7 8 6.5 5.5 C9.5 6 11.5 7.5 13 10.5 Z" fill={GOLD} fillOpacity="0.28" />
        <path d="M13 11 C17 10 19 8 19.5 5.5 C16.5 6 14.5 7.5 13 10.5 Z" fill={GOLD} fillOpacity="0.28" />
        <path d="M13 7 C10 6.5 8.5 5 8 3 C10.5 3.5 12 4.8 13 6.8 Z" fill={GOLD} fillOpacity="0.28" />
        <path d="M13 7 C16 6.5 17.5 5 18 3 C15.5 3.5 14 4.8 13 6.8 Z" fill={GOLD} fillOpacity="0.28" />
      </svg>
      <span style={{ width: '54px', height: '1px', background: 'rgba(169,128,59,0.5)' }} />
    </div>
  )
}

const MANIFESTE = [
  "L'Écrin est né d'une conviction simple : les moments partagés en entreprise méritent mieux que l'ordinaire.",
  "Nous sélectionnons les meilleurs. Chaque artisan, chaque produit, chaque geste est choisi pour la justesse de son savoir-faire et l'émotion qu'il crée à la dégustation.",
  "Un petit-déjeuner livré dès 6h30, un cocktail dressé à la minute, une pause qui rassemble : nous mettons le même soin dans chaque détail, car ce sont eux dont vos équipes se souviennent.",
  "Le luxe, pour nous, n'est pas froid. Il est vivant, chaleureux, humain. C'est tout l'art de recevoir.",
]

// Réponses courtes et autonomes : ce que Google et les IA reprennent pour
// décrire L'Écrin. Uniquement des faits vérifiables.
const FAITS = [
  {
    q: "Qu'est-ce que L'Écrin Traiteur ?",
    a: "L'Écrin Traiteur est un traiteur d'entreprise basé à Boulogne-Billancourt, fondé en 2025 par Ramy Abdelaty. Nous livrons petits-déjeuners, plateaux repas, lunch box, pauses gourmandes, cocktails et animations culinaires dans les bureaux de Paris et d'Île-de-France. La société s'appelle L'Écrin des Terroirs, L'Écrin Traiteur est son nom commercial. Plus de 100 entreprises nous ont déjà confié leurs réunions, séminaires et réceptions, de 10 à 300 personnes.",
  },
  {
    q: "D'où viennent les produits ?",
    a: "Nous n'avons pas de cuisine centrale qui standardise tout. Chaque produit vient d'un artisan que nous avons goûté et choisi : les madeleines de Mado Paris, les viennoiseries de la Maison Marques, les yaourts de la Ferme de Viltain à Jouy-en-Josas, les jus d'Alain Milliat. Nous assurons la mise en place, la présentation et le transport au froid jusqu'à vos bureaux.",
  },
  {
    q: "Comment se passe une commande ?",
    a: "Vous commandez jusqu'à la veille 14h, nous livrons dès 6h30 avec notre propre équipe, jamais en sous-traitance. Minimum de commande 50 € HT, livraison 29 € HT à Paris et dans les communes proches. Devis sous 24h, facture entreprise avec TVA.",
  },
  {
    q: "Quels régimes alimentaires couvrez-vous ?",
    a: "Toute la carte est halal et sans porc par défaut, sans alcool dans les recettes. Chaque prestation existe en version végétarienne et vegan, et nous l'adaptons en sans gluten sur demande.",
  },
  {
    q: "Où livrez-vous ?",
    a: "Paris et une vingtaine de villes d'Île-de-France, dont Boulogne-Billancourt, Issy-les-Moulineaux, Neuilly-sur-Seine, Levallois-Perret, Puteaux et La Défense, Courbevoie, Nanterre, Suresnes, Gennevilliers et Versailles. Nos clients nous notent 5,0 sur 5 sur Google.",
  },
]

/*
  Textes anglais. Les faits — 2025, Boulogne-Billancourt, veille 14h, 6h30,
  50 € HT, 29 € HT, 5,0 sur Google — sont exactement les mêmes des deux
  côtés : un écart entre les deux langues serait une contradiction lue par
  les IA. Les chiffres de confiance restent ceux que Ramy a arrêtés.

  Le mot du fondateur est une citation de Ramy : la version anglaise porte la
  mention « Translated from French ».
*/
const MANIFESTE_EN = [
  "L'Écrin started from one conviction: the moments a company shares deserve better than the ordinary.",
  'We pick the best. Every maker, every product, every gesture is chosen for the craft behind it and for what it does to the people eating.',
  'A breakfast delivered from 6:30 am, a cocktail reception dressed at the last minute, a break that brings people together: we put the same care into each detail, because the details are what your team remembers.',
  'Luxury, to us, is not cold. It is warm, alive, human. That is the whole art of hosting.',
]

const FAITS_EN = [
  {
    q: "What is L'Écrin Traiteur?",
    a: "L'Écrin Traiteur is a corporate caterer based in Boulogne-Billancourt, founded in 2025 by Ramy Abdelaty. We deliver breakfasts, lunch trays, lunch boxes, afternoon breaks, cocktail receptions and live food stations to offices across Paris and Île-de-France. The registered company is L'Écrin des Terroirs; L'Écrin Traiteur is its trading name. More than 100 companies have already trusted us with their meetings, offsites and receptions, from 10 to 300 people.",
  },
  {
    q: 'Where does the food come from?',
    a: 'We do not have a central kitchen that standardises everything. Every product comes from a maker we have tasted and chosen: Mado Paris madeleines, Maison Marques pastries, yoghurts from la Ferme de Viltain in Jouy-en-Josas, Alain Milliat juices. We handle the setup, the presentation and the chilled transport to your offices.',
  },
  {
    q: 'How does ordering work?',
    a: 'You order until 2 pm the day before, and we deliver from 6:30 am with our own team, never subcontracted. Minimum order €50 excl. VAT, delivery €29 excl. VAT in Paris and nearby towns. Quote within 24 hours, company invoice showing VAT.',
  },
  {
    q: 'Which dietary needs do you cover?',
    a: 'The whole menu is halal and pork-free as standard, with no alcohol in any recipe. Every package exists in a vegetarian and a vegan version, and we adapt it to gluten-free on request.',
  },
  {
    q: 'Where do you deliver?',
    a: 'Paris and around twenty towns across Île-de-France, including Boulogne-Billancourt, Issy-les-Moulineaux, Neuilly-sur-Seine, Levallois-Perret, Puteaux and La Défense, Courbevoie, Nanterre, Suresnes, Gennevilliers and Versailles. Our clients rate us 5.0 out of 5 on Google.',
  },
]

const T_MAISON = {
  fr: {
    eyebrow: 'L\'Écrin · Notre Maison',
    titre: 'Qui sommes-nous',
    manifeste: MANIFESTE,
    signature: "L'Écrin Traiteur · Paris",
    faits: FAITS,
    motEyebrow: 'Le mot du fondateur',
    mot: "« J'ai commencé par chercher les meilleurs producteurs avant de chercher des clients. Un petit-déjeuner d'entreprise, ce n'est pas une contrainte logistique : c'est un moment qu'on offre à ses équipes. Je voulais qu'il soit à la hauteur. »",
    fondateur: 'fondateur de L\'Écrin Traiteur',
    traduit: null,
    fil: ['Accueil', 'Notre maison'],
  },
  en: {
    eyebrow: "L'Écrin · Our House",
    titre: 'Who we are',
    manifeste: MANIFESTE_EN,
    signature: "L'Écrin Traiteur · Paris",
    faits: FAITS_EN,
    motEyebrow: 'A word from the founder',
    mot: "“I went looking for the best producers before I went looking for clients. A corporate breakfast is not a logistics problem: it is something you give your team. I wanted it to be worth giving.”",
    fondateur: "founder of L'Écrin Traiteur",
    traduit: 'Translated from French',
    fil: ['Home', 'Our house'],
  },
}

export default function NotreMaison() {
  const en = estAnglais(usePathname() || '/')
  const T = en ? T_MAISON.en : T_MAISON.fr
  return (
    <>
      <Navbar showBanner={true} />

      <main
        className="pm-main"
        style={{
          minHeight: '100vh',
          paddingTop: 'calc(var(--banner-h) + var(--nav-h))',
          background: '#FFFFFF',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div className="pm-wrap" style={{ width: '100%', maxWidth: '820px', padding: '80px 40px 110px' }}>

          {/* ── Parchemin ── */}
          <article
            className="pm-scroll"
            style={{
              position: 'relative',
              backgroundColor: '#FBF6EA',
              backgroundImage: GRAIN,
              backgroundSize: '300px',
              padding: '76px 72px 68px',
              boxShadow: '0 30px 70px -30px rgba(80,60,30,0.4), inset 0 0 0 1px rgba(169,128,59,0.18)',
              textAlign: 'center',
            }}
          >
            {/* Filet doré intérieur */}
            <span style={{ position: 'absolute', inset: '18px', border: '1px solid rgba(169,128,59,0.25)', pointerEvents: 'none' }} />

            <p style={{ fontFamily: "'Cormorant SC', 'Baskerville Display PT', serif", fontSize: '13px', fontWeight: 500, letterSpacing: '0.34em', textTransform: 'uppercase', color: GOLD, marginBottom: '22px' }}>
              {T.eyebrow}
            </p>

            <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(38px, 6vw, 62px)', fontWeight: 400, lineHeight: 1.05, color: '#2A2013', marginBottom: '10px' }}>
              {T.titre}
            </h1>

            <Sprig />

            <div style={{ maxWidth: '540px', margin: '26px auto 0' }}>
              {T.manifeste.map((p, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "'Baskerville Display PT', Georgia, serif",
                    fontSize: 'clamp(17px, 2vw, 20px)',
                    lineHeight: 1.7,
                    color: 'rgba(42,32,19,0.86)',
                    marginBottom: i < MANIFESTE.length - 1 ? '22px' : '0',
                  }}
                >
                  {p}
                </p>
              ))}
            </div>

            <div style={{ marginTop: '40px' }}>
              <Sprig />
              <img loading="lazy" src="/logo-footer.svg" alt="L'Écrin" style={{ height: '38px', width: 'auto', margin: '18px auto 8px', opacity: 0.85, display: 'block' }} />
              <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '15px', color: GOLD }}>
                {T.signature}
              </p>
            </div>
          </article>

          {/* ── Qui est L'Écrin : questions-réponses factuelles (E-E-A-T + GEO) ── */}
          <section className="nm-facts" style={{ maxWidth: '620px', margin: '80px auto 0', textAlign: 'left' }}>
            {T.faits.map((f, i) => (
              <div key={f.q} style={{ marginBottom: i < T.faits.length - 1 ? '44px' : '0' }}>
                <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 400, lineHeight: 1.2, color: '#2A2013', marginBottom: '16px' }}>
                  {f.q}
                </h2>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '16px', lineHeight: 1.85, color: 'rgba(42,32,19,0.82)' }}>
                  {f.a}
                </p>
              </div>
            ))}
          </section>

          {/* ── Le mot du fondateur ── */}
          <section className="nm-founder" style={{ maxWidth: '620px', margin: '48px auto 0', paddingTop: '40px', borderTop: '1px solid rgba(169,128,59,0.3)', textAlign: 'left' }}>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: GOLD, marginBottom: '18px' }}>
              {T.motEyebrow}
            </p>
            <p style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(18px, 2vw, 22px)', lineHeight: 1.7, color: '#2A2013', marginBottom: '20px' }}>
              {T.mot}
            </p>
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '15px', color: 'rgba(42,32,19,0.7)' }}>
              <strong style={{ fontWeight: 500, color: '#2A2013' }}>Ramy Abdelaty</strong>, {T.fondateur}
              {T.traduit && <><br /><span style={{ fontSize: '12px', color: 'rgba(42,32,19,0.5)' }}>{T.traduit}</span></>}
            </p>
          </section>

        </div>
      </main>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .pm-wrap { padding: 48px 18px 72px !important; }
          .pm-scroll { padding: 52px 28px 48px !important; }
        }
      ` }} />

      <BusinessJsonLd />
      <BreadcrumbJsonLd items={[
        { name: T.fil[0], path: en ? '/en' : '' },
        { name: T.fil[1], path: `${en ? '/en' : ''}/univers/notre-maison` },
      ]} />

      <Footer />
    </>
  )
}
