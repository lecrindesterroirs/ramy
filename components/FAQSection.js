'use client'

import { useState, useEffect } from 'react'

const fallbackFaqs = [
  {
    question: "Combien de temps à l'avance faut-il commander ?",
    reponse: "Pour une commande standard, le délai est la veille avant 14h. Votre commande est livrée le lendemain matin dès 6h30 à l'heure que vous choisissez.",
  },
  {
    question: "Acceptez-vous les commandes de dernière minute ?",
    reponse: "Oui. Nous acceptons les commandes de dernière minute jusqu'à 10h le matin même, sur notre sélection disponible du jour : plateaux de petits-déjeuners et plateaux repas en quantité limitée. Pour garantir votre choix complet de produits artisanaux, nous recommandons de commander avant 14h la veille.",
  },
  {
    question: "Y a-t-il un minimum de commande et des frais de livraison ?",
    reponse: "Le montant minimum de commande est de 50€ HT. Les frais de livraison sont de 28€ HT pour Paris et les communes proches. Contactez-nous pour les autres adresses en Île-de-France.",
  },
  {
    question: "Proposez-vous une facturation entreprise avec TVA ?",
    reponse: "Oui. Nous émettons des factures entreprise avec TVA pour toutes les commandes. Vous pouvez renseigner le nom de votre société, votre numéro de TVA et l'adresse de facturation lors de la commande ou nous contacter directement.",
  },
  {
    question: "Comment gérez-vous les régimes alimentaires spécifiques ?",
    reponse: "Plusieurs de nos produits sont adaptés à des régimes spécifiques : nos madeleines Mado Paris sont certifiées Bio, nos brochettes de fruits et compotes sont vegan, certains cakes sont disponibles sans gluten. Pour les régimes sans lactose, nous pouvons adapter la sélection selon les produits du jour. Pour les régimes halal, nous excluons les charcuteries et orientons la sélection en conséquence. Précisez vos contraintes lors de la commande et nous adaptons.",
  },
  {
    question: "Livrez-vous dans les tours et immeubles sécurisés ?",
    reponse: "Oui, c'est notre quotidien. La Défense, Boulogne, Issy : nos livreurs connaissent les procédures d'accès : réception, monte-charge, badge. Précisez vos contraintes à la commande.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="faq-inner" style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 40px' }}>

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

        {/* Accordion — 2 colonnes */}
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
                        style={{
                          width: '100%', display: 'flex', alignItems: 'center',
                          justifyContent: 'space-between', padding: '22px 0',
                          background: 'none', border: 'none', textAlign: 'left', gap: '20px',
                        }}
                      >
                        <span style={{
                          fontFamily: "'Baskerville Display PT', Georgia, serif",
                          fontSize: 'clamp(15px, 1.4vw, 18px)', fontWeight: 400,
                          color: 'var(--text-primary)', letterSpacing: '0.005em', lineHeight: 1.3,
                        }}>
                          {item.question.replace(/ \?/g, ' ?')}
                        </span>
                        <span style={{
                          fontFamily: "'Neue Montreal', sans-serif",
                          fontSize: '20px', fontWeight: 300, color: 'var(--accent)',
                          flexShrink: 0, lineHeight: 1, transition: 'transform 0.3s ease',
                          transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)', display: 'block',
                        }}>
                          +
                        </span>
                      </button>

                      {open === i && (
                        <p style={{
                          fontFamily: "'Neue Montreal', sans-serif",
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
