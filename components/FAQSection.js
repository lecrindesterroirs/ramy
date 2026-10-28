'use client'

import { useState } from 'react'

const fallbackFaqs = [
  {
    question: "Combien de temps à l'avance faut-il commander ?",
    reponse: "Pour une commande standard, le délai est la veille avant 14h. Votre commande est livrée le lendemain matin dès 6h30 à l'heure que vous choisissez.",
  },
  {
    question: "Acceptez-vous les commandes de dernière minute ?",
    reponse: "La règle reste la commande avant 14h la veille, pour une livraison dès 6h30. Pour une demande le matin même, appelez le 01 74 54 23 10 : la réponse dépend de la disponibilité du jour. À Boulogne-Billancourt, où se trouve notre atelier, les commandes sont acceptées jusqu'à 10h sur la sélection du jour.",
  },
  {
    question: "Y a-t-il un minimum de commande et des frais de livraison ?",
    reponse: "Le montant minimum de commande est de 50€ HT. Les frais de livraison sont de 29€ HT pour Paris et les communes proches. Contactez-nous pour les autres adresses en Île-de-France.",
  },
  {
    question: "Proposez-vous une facturation entreprise avec TVA ?",
    reponse: "Oui. Nous émettons des factures entreprise avec TVA pour toutes les commandes. Vous pouvez renseigner le nom de votre société, votre numéro de TVA et l'adresse de facturation lors de la commande ou nous contacter directement.",
  },
  {
    question: "Comment gérez-vous les régimes alimentaires spécifiques ?",
    reponse: "Plusieurs de nos produits sont adaptés à des régimes spécifiques : nos madeleines Mado Paris sont faites avec des ingrédients biologiques et sans huile de palme, nos brochettes de fruits et compotes sont vegan, certains cakes sont disponibles sans gluten. Pour les régimes sans lactose, nous pouvons adapter la sélection selon les produits du jour. Le salé (cocktails, plateaux, buffets) est halal et sans porc par défaut, sans supplément. Précisez vos contraintes lors de la commande et nous adaptons.",
  },
  {
    question: "Fournissez-vous les gobelets et serviettes ?",
    reponse: "Oui, tout est compris dans la prestation : gobelets, serviettes, vaisselle et couverts jetables, présentation soignée. Chaque commande arrive prête à servir. Vous n'avez rien à gérer, juste à profiter du moment avec vos équipes.",
  },
  {
    question: "Peut-on modifier ou annuler une commande ?",
    reponse: "Les modifications sont acceptées jusqu'à 14h la veille de la livraison. Pour les annulations, contactez-nous dès que possible à commercial@lecrin-traiteur.fr, nous faisons notre possible pour trouver une solution selon le délai restant.",
  },
  {
    question: "Les prestations arrivent-elles prêtes à servir ?",
    reponse: "Oui. Toutes nos préparations arrivent conditionnées et prêtes à être servies directement. Selon la formule choisie, nous pouvons aussi assurer la mise en place sur place.",
  },
  {
    question: "Intervenez-vous dans toute l'Île-de-France ?",
    reponse: "Oui, nous livrons dans toute l'Île-de-France : Paris intramuros, La Défense, Neuilly, Boulogne, Versailles, Massy, Saint-Denis et plus de 20 villes du 92, 93, 94 et 78. Consultez notre page zones de livraison ou contactez-nous pour confirmer votre adresse.",
  },
  {
    question: "Comment se passe la demande de devis ?",
    reponse: "Remplissez notre formulaire en ligne ou écrivez-nous à commercial@lecrin-traiteur.fr. Nous revenons vers vous sous 24h avec une proposition adaptée à votre événement et votre budget.",
  },
]

/*
  Mêmes dix questions, mêmes faits, en anglais. Les chiffres — veille 14h,
  6h30, 50 € HT, 29 € HT, 01 74 54 23 10 — sont identiques des deux côtés :
  un écart entre les deux langues serait une contradiction lue par les IA.
*/
const faqsEn = [
  {
    question: 'How far ahead do we need to order?',
    reponse: 'For a standard order, the deadline is 2 pm the day before. Your order is delivered the next morning from 6:30 am, at the time you choose.',
  },
  {
    question: 'Do you take last-minute orders?',
    reponse: 'The rule is still 2 pm the day before, for delivery from 6:30 am. For a same-morning request, call 01 74 54 23 10: the answer depends on what is available that day. In Boulogne-Billancourt, where our kitchen is, we take orders until 10 am from that day\'s selection.',
  },
  {
    question: 'Is there a minimum order, and a delivery charge?',
    reponse: 'The minimum order is €50 excl. VAT. Delivery is €29 excl. VAT for Paris and nearby towns. Get in touch for other addresses across Île-de-France.',
  },
  {
    question: 'Do you issue company invoices with VAT?',
    reponse: 'Yes. We issue company invoices showing VAT on every order. You can give us your company name, your VAT number and the billing address when you order, or contact us directly.',
  },
  {
    question: 'How do you handle specific dietary needs?',
    reponse: 'Several of our products suit specific diets: our Mado Paris madeleines are made with organic ingredients and no palm oil, our fruit skewers and compotes are vegan, and some loaf cakes come gluten-free. For lactose-free, we can adapt the selection to what is available that day. Savoury food (cocktail receptions, lunch trays, buffets) is halal and pork-free as standard, at no extra cost. Tell us your constraints when you order and we work around them.',
  },
  {
    question: 'Do you provide cups and napkins?',
    reponse: 'Yes, everything is included: cups, napkins, disposable plates and cutlery, properly presented. Every order arrives ready to serve. There is nothing for you to handle, just the moment with your team.',
  },
  {
    question: 'Can an order be changed or cancelled?',
    reponse: 'Changes are accepted until 2 pm the day before delivery. For cancellations, contact us as soon as you can at commercial@lecrin-traiteur.fr; we do what we can depending on how much notice is left.',
  },
  {
    question: 'Does everything arrive ready to serve?',
    reponse: 'Yes. Everything arrives packed and ready to serve as it is. Depending on the package you choose, we can also set it up on site.',
  },
  {
    question: 'Do you cover the whole of Île-de-France?',
    reponse: 'Yes, we deliver across Île-de-France: central Paris, La Défense, Neuilly, Boulogne, Versailles, Massy, Saint-Denis and more than 20 towns in the 92, 93, 94 and 78. See our delivery areas page or contact us to confirm your address.',
  },
  {
    question: 'How does asking for a quote work?',
    reponse: 'Fill in our online form or email us at commercial@lecrin-traiteur.fr. We come back to you within 24 hours with a proposal built around your event and your budget.',
  },
]

const T_FAQ = {
  fr: {
    eyebrow: 'Questions fréquentes',
    titre: "Ce qu'on nous demande souvent.",
    corps: 'Nous avons réuni les réponses essentielles pour préparer votre prestation avec simplicité.',
  },
  en: {
    eyebrow: 'Frequently asked questions',
    titre: 'What people ask us most.',
    corps: 'The answers that matter before you order, in one place.',
  },
}

// JSON-LD FAQ schema pour la homepage
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: fallbackFaqs.map(f => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.reponse },
  })),
}

export default function FAQSection({ lang = 'fr' }) {
  const [open, setOpen]   = useState(null)
  const T = T_FAQ[lang] || T_FAQ.fr
  // FAQ 100% locale (pas de WordPress) : fallbackFaqs est l'unique source.
  const faqs = lang === 'en' ? faqsEn : fallbackFaqs

  return (
    <section className="faq-section" style={{ background: 'var(--bg-primary)', padding: '120px 0' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(
          lang === 'en'
            ? { ...faqSchema, mainEntity: faqsEn.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.reponse } })) }
            : faqSchema
        ) }}
      />
      <div className="faq-inner" style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 40px' }}>

        {/* Header */}
        <div className="reveal" style={{ marginBottom: '64px' }}>
          <p style={{
            fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
            fontSize: '11px', fontWeight: 500, letterSpacing: '0.22em',
            textTransform: 'uppercase', color: 'var(--accent-deep)',
            marginBottom: '20px', textAlign: 'center',
          }}>
            {T.eyebrow}
          </p>
          <h2 style={{
            fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif",
            fontSize: 'clamp(32px, 3.6vw, 52px)', fontWeight: 400,
            lineHeight: 1.1, letterSpacing: '-0.01em',
            color: 'var(--text-primary)', marginBottom: '20px', textAlign: 'center',
          }}>
            {T.titre}
          </h2>
          <p style={{
            fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
            fontSize: '14px', lineHeight: 1.7, color: 'var(--text-secondary)',
            textAlign: 'center', maxWidth: '480px', margin: '0 auto',
          }}>
            {T.corps}
          </p>
        </div>

        {/* Accordion, 2 colonnes */}
        <div className="reveal faq-cols">
          {[0, 1].map(col => {
            const half = Math.ceil(faqs.length / 2)
            const start = col * half
            const colFaqs = col === 0 ? faqs.slice(0, half) : faqs.slice(half)
            return (
              <div key={col} className="faq-col">
                {colFaqs.map((item, j) => {
                  const i = start + j
                  const isLast = j === colFaqs.length - 1
                  return (
                    <div
                      key={i}
                      style={{
                        borderTop: '1px solid rgba(17,17,17,0.08)',
                        ...(isLast ? { borderBottom: '1px solid rgba(17,17,17,0.08)' } : {}),
                      }}
                    >
                      <button
                        onClick={() => setOpen(open === i ? null : i)}
                        aria-expanded={open === i}
                        aria-controls={`faq-answer-${i}`}
                        style={{
                          width: '100%', display: 'flex', alignItems: 'center',
                          justifyContent: 'space-between', padding: '22px 0',
                          background: 'none', border: 'none', textAlign: 'left', gap: '20px',
                        }}
                      >
                        <span style={{
                          fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif",
                          fontSize: 'clamp(15px, 1.4vw, 18px)', fontWeight: 400,
                          color: 'var(--text-primary)', letterSpacing: '0.005em', lineHeight: 1.3,
                        }}>
                          {item.question.replace(/ \?/g, ' ?')}
                        </span>
                        <span style={{
                          fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
                          fontSize: '20px', fontWeight: 300, color: 'var(--accent-deep)',
                          flexShrink: 0, lineHeight: 1, transition: 'transform 0.3s ease',
                          transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)', display: 'block',
                        }} aria-hidden="true">
                          +
                        </span>
                      </button>

                      {open === i && (
                        <p id={`faq-answer-${i}`} role="region" style={{
                          fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
                          fontSize: '13px', lineHeight: 1.75,
                          color: 'var(--text-secondary)', paddingBottom: '24px',
                        }}>
                          {item.reponse}
                        </p>
                      )}
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .faq-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 0 64px; }
        @media (max-width: 768px) {
          .faq-section { padding: 80px 0 !important; }
          .faq-inner { padding: 0 24px !important; }
          .faq-cols { grid-template-columns: 1fr !important; gap: 0 !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .faq-cols { gap: 0 40px !important; }
        }
      ` }} />
    </section>
  )
}
