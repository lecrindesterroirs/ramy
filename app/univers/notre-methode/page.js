'use client'

import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import BreadcrumbJsonLd from '../../../components/BreadcrumbJsonLd'
import { usePathname } from 'next/navigation'
import { estAnglais } from '../../../lib/i18n'

const SERIF = "'Baskerville Display PT', Georgia, serif"
const SANS = "'Neue Montreal', sans-serif"
const h2 = { fontFamily: SERIF, fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 400, lineHeight: 1.2, color: 'var(--text-primary)', margin: '44px 0 14px' }
const p = { fontFamily: SANS, fontSize: '16px', lineHeight: 1.85, color: 'var(--text-primary)', marginBottom: '16px' }

/*
  Textes par langue. C'est une page de transparence : les faits qu'elle
  énonce — qui écrit, d'où viennent les chiffres, l'aide de l'IA, les mises à
  jour, l'adresse de signalement — doivent dire exactement la même chose dans
  les deux langues. Une version anglaise plus vague serait pire que pas de
  version anglaise.
*/
const T = {
  fr: {
    eyebrow: "L'Écrin · Le Journal",
    h1: 'Comment nous écrivons nos guides',
    intro1: 'Les guides du ',
    introLien: 'Journal',
    intro2: " sont écrits par L'Écrin Traiteur, sous la responsabilité de Ramy Abdelaty, fondateur. Ils répondent aux questions que nos clients nous posent avant de commander : quantités, budget, format, délais.",
    h2a: "D'où viennent les chiffres",
    pa: "Les prix sont ceux de notre carte, à la date indiquée sur chaque article. Les quantités viennent des règles que nous appliquons à chaque devis. Les chiffres d'activité, comme ceux du baromètre, viennent de nos commandes livrées, agrégées et sans nom de client. Quand un article cite une autre entreprise, nous indiquons la page publique consultée et sa date, dans une section « Sources ».",
    h2b: 'Comment nous les rédigeons',
    pb: "Nous utilisons un assistant d'intelligence artificielle pour préparer les brouillons et vérifier les calculs. Chaque fait est contrôlé contre notre carte et nos règles de devis, puis le texte est relu avant publication. Un article n'est publié que s'il ne contredit aucune de nos autres pages.",
    h2c: 'Quand nous les mettons à jour',
    pc: "La mention « mis à jour le » n'apparaît que si le texte a changé. Quand un prix change, les articles qui le citent sont corrigés.",
    h2d: 'Nous signaler une erreur',
    pd1: 'Écrivez à ',
    pd2: ' : nous corrigeons et indiquons la date de la correction.',
    fil: ['Accueil', 'Notre méthode'],
  },
  en: {
    eyebrow: "L'Écrin · The Journal",
    h1: 'How we write our guides',
    intro1: 'The guides in the ',
    introLien: 'Journal',
    intro2: " are written by L'Écrin Traiteur, under the responsibility of Ramy Abdelaty, founder. They answer the questions our clients ask us before they order: quantities, budget, format, lead times.",
    h2a: 'Where the numbers come from',
    pa: 'The prices are the ones on our menu, at the date shown on each article. The quantities come from the rules we apply to every quote. Activity figures, such as those in our barometer, come from the orders we have delivered, aggregated and with no client named. When an article cites another company, we give the public page we consulted and the date we consulted it, in a "Sources" section.',
    h2b: 'How we write them',
    pb: 'We use an artificial intelligence assistant to prepare the drafts and check the calculations. Every fact is checked against our menu and our quoting rules, then the text is read again before publication. An article is only published if it contradicts none of our other pages.',
    h2c: 'When we update them',
    pc: 'The "updated on" line only appears if the text has changed. When a price changes, the articles that cite it are corrected.',
    h2d: 'Telling us about a mistake',
    pd1: 'Write to ',
    pd2: ': we correct it and we show the date of the correction.',
    fil: ['Home', 'Our method'],
  },
}

// Page de transparence éditoriale (méthode SEO/IA validée par Ramy le 15/10/2026) :
// qui écrit, d'où viennent les chiffres, aide de l'IA, mises à jour, signalement.
export default function NotreMethode() {
  const en = estAnglais(usePathname() || '/')
  const t = en ? T.en : T.fr
  return (
    <>
      <Navbar />
      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'var(--header-h)' }}>
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '80px 24px 100px' }}>
          <p style={{ fontFamily: SANS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '18px' }}>
            {t.eyebrow}
          </p>
          <h1 style={{ fontFamily: SERIF, fontSize: 'clamp(34px, 5vw, 56px)', fontWeight: 400, lineHeight: 1.08, color: 'var(--text-primary)', marginBottom: '28px' }}>
            {t.h1}
          </h1>
          <p style={p}>
            {t.intro1}<a href={en ? '/en/journal' : '/journal'} style={{ color: 'var(--text-primary)' }}>{t.introLien}</a>{t.intro2}
          </p>

          <h2 style={h2}>{t.h2a}</h2>
          <p style={p}>
            {t.pa}
          </p>

          <h2 style={h2}>{t.h2b}</h2>
          <p style={p}>
            {t.pb}
          </p>

          <h2 style={h2}>{t.h2c}</h2>
          <p style={p}>
            {t.pc}
          </p>

          <h2 style={h2}>{t.h2d}</h2>
          <p style={p}>
            {t.pd1}<a href="mailto:commercial@lecrin-traiteur.fr" style={{ color: 'var(--text-primary)' }}>commercial@lecrin-traiteur.fr</a>{t.pd2}
          </p>
        </section>
      </main>
      <BreadcrumbJsonLd items={[
        { name: t.fil[0], path: en ? '/en' : '' },
        { name: t.fil[1], path: `${en ? '/en' : ''}/univers/notre-methode` },
      ]} />
      <Footer />
    </>
  )
}
