'use client'

import { useState, useEffect } from 'react'

const fallbackFaqs = [
  {
    question: "Combien de temps à l'avance faut-il commander ?",
    reponse: "Pour une commande standard, le délai est la veille avant 18h.",
  },
  {
    question: "Y a-t-il un minimum de commande et des frais de livraison ?",
    reponse: "Le montant minimum de commande est de 50€ HT. Les frais de livraison sont de 28€ HT pour Paris et les communes proches. Contactez-nous pour les autres adresses en Île-de-France.",
  },
  {
    question: "Intervenez-vous dans toute l'Île-de-France ?",
    reponse: "Oui, nous livrons et intervenons sur l'ensemble de l'Île-de-France. Paris intramuros, La Défense, Neuilly, Boulogne, Vincennes. Contactez-nous pour confirmer votre adresse.",
  },
  {
    question: "Les prestations arrivent-elles prêtes à servir ?",
    reponse: "Oui. Toutes nos préparations arrivent dressées, prêtes à servir. Selon la formule choisie, nous assurons aussi la mise en place et le service sur place.",
  },
  {
    question: "Peut-on adapter une offre à notre événement ?",
    reponse: "Chaque prestation peut être adaptée à vos contraintes : nombre de convives, régimes alimentaires, ambiance souhaitée. Nous construisons ensemble une proposition sur-mesure.",
  },
  {
    question: "Proposez-vous des options salées ?",
    reponse: "Oui, notre offre couvre aussi bien le salé que le sucré : plateaux petits-déjeuners, buffets cocktail, formules déjeuner, finger food. Consultez notre catalogue ou demandez un devis personnalisé.",
  },
  {
    question: "Comment se passe la demande de devis ?",
    reponse: "Remplissez notre formulaire ou écrivez-nous à contact@lecrindesterroirs.fr. Nous revenons vers vous sous 24h avec une proposition adaptée.",
  },
]

export default function FAQSection() {
  const [open, setOpen]   = useState(null)
  const [faqs, setFaqs]   = useState(fallbackFaqs)

  useEffect(() => {
    fetch('/api/faq')
      .then(r => r.ok ? r.json() : null)
      .then(data => { if (data && data.length > 0) setFaqs(data) })
      .catch(() => {})
  }, [])

  return (
    <section className="faq-section" style={{ background: 'var(--bg-primary)', padding: '120px 0' }}>
      <div className="faq-inner" style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>

        {/* Header */}
        <div className="reveal" style={{ marginBottom: '64px' }}>
          <p style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: '11px', fontWeight: 500, letterSpacing: '0.22em',
            textTransform: 'uppercase', color: 'var(--accent)',
            marginBottom: '20px', textAlign: 'center',
          }}>
            Questions fréquentes
          </p>
          <h2 style={{
            fontFamily: "'Baskerville Display PT', Georgia, serif",
            fontSize: 'clamp(32px, 3.6vw, 52px)', fontWeight: 400,
            lineHeight: 1.1, letterSpacing: '-0.01em',
            color: 'var(--text-primary)', marginBottom: '20px', textAlign: 'center',
          }}>
            Ce qu'on nous demande souvent.
          </h2>
          <p style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: '14px', lineHeight: 1.7, color: 'var(--text-secondary)',
            textAlign: 'center', maxWidth: '480px', margin: '0 auto',
          }}>
            Nous avons réuni les réponses essentielles pour préparer votre prestation avec simplicité.
          </p>
        </div>

        {/* Accordion */}
        <div className="reveal">
          {faqs.map((item, i) => (
            <div
              key={i}
              style={{
                borderTop: '1px solid rgba(17,17,17,0.08)',
                ...(i === faqs.length - 1 ? { borderBottom: '1px solid rgba(17,17,17,0.08)' } : {}),
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between', padding: '24px 0',
                  background: 'none', border: 'none', textAlign: 'left', gap: '24px',
                }}
              >
                <span style={{
                  fontFamily: "'Baskerville Display PT', Georgia, serif",
                  fontSize: 'clamp(16px, 1.6vw, 20px)', fontWeight: 400,
                  color: 'var(--text-primary)', letterSpacing: '0.005em', lineHeight: 1.3,
                }}>
                  {item.question}
                </span>
                <span style={{
                  fontFamily: "'Neue Montreal', sans-serif",
                  fontSize: '22px', fontWeight: 300, color: 'var(--accent)',
                  flexShrink: 0, lineHeight: 1, transition: 'transform 0.3s ease',
                  transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)', display: 'block',
                }}>
                  +
                </span>
              </button>

              {open === i && (
                <p style={{
                  fontFamily: "'Neue Montreal', sans-serif",
                  fontSize: '14px', lineHeight: 1.75,
                  color: 'var(--text-secondary)', paddingBottom: '28px', maxWidth: '640px',
                }}>
                  {item.reponse}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <style suppressHydrationWarning>{`
        @media (max-width: 768px) {
          .faq-section { padding: 80px 0 !important; }
          .faq-inner { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  )
}
