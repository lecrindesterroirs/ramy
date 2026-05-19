'use client'

import { useState } from 'react'
import { useCart } from '../../context/CartContext'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const formatPrice = (n) =>
  n.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + '€'

export default function Panier() {
  const { items, updateQuantity, removeItem, clearCart, totalItems, totalPrice } = useCart()

  const [step, setStep] = useState('cart') // 'cart' | 'info' | 'loading'
  const [payMode, setPayMode] = useState(null) // 'online' | 'invoice'
  const [form, setForm] = useState({
    prenom: '', nom: '', email: '', telephone: '',
    entreprise: '', adresse: '', codepostal: '', ville: '',
    date: '', heure: '', notes: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleField = (key, val) => setForm(f => ({ ...f, [key]: val }))

  const validate = () => {
    const e = {}
    if (!form.prenom.trim()) e.prenom = true
    if (!form.nom.trim()) e.nom = true
    if (!form.email.trim() || !form.email.includes('@')) e.email = true
    if (!form.entreprise.trim()) e.entreprise = true
    if (!form.adresse.trim()) e.adresse = true
    if (!form.codepostal.trim()) e.codepostal = true
    if (!form.ville.trim()) e.ville = true
    if (!form.date.trim()) e.date = true
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handlePayOnline = async () => {
    if (!validate()) return
    setStep('loading')
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items, customer: form }),
      })
      const data = await res.json()
      if (data.url) {
        clearCart()
        window.location.href = data.url
      } else {
        alert('Une erreur est survenue. Veuillez réessayer.')
        setStep('info')
      }
    } catch {
      alert('Une erreur est survenue. Veuillez réessayer.')
      setStep('info')
    }
  }

  const handleInvoice = async () => {
    if (!validate()) return
    setStep('loading')
    try {
      const res = await fetch('/api/commande-facture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items, customer: form, total: totalPrice }),
      })
      if (res.ok) {
        clearCart()
        setSubmitted(true)
        setStep('cart')
      } else {
        alert('Une erreur est survenue. Veuillez réessayer.')
        setStep('info')
      }
    } catch {
      alert('Une erreur est survenue. Veuillez réessayer.')
      setStep('info')
    }
  }

  // Empty cart
  if (items.length === 0 && !submitted) {
    return (
      <>
        <Navbar />
        <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'var(--header-h)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '120px 24px' }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(17,17,17,0.2)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '24px' }}>
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
          <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '16px', textAlign: 'center' }}>
            Votre panier est vide
          </h1>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '40px', textAlign: 'center' }}>
            Découvrez nos produits et composez votre commande.
          </p>
          <a href="/creations/petits-dejeuners-et-pauses" style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FFFFFF', background: 'var(--accent)', padding: '14px 32px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            Voir les produits →
          </a>
        </main>
        <Footer />
      </>
    )
  }

  // Confirmation facture
  if (submitted) {
    return (
      <>
        <Navbar />
        <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'var(--header-h)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '120px 24px' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(224,161,38,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '28px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20,6 9,17 4,12"/>
            </svg>
          </div>
          <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '16px', textAlign: 'center', lineHeight: 1.1 }}>
            Commande reçue
          </h1>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '15px', lineHeight: 1.75, color: 'var(--text-secondary)', maxWidth: '460px', textAlign: 'center', marginBottom: '40px' }}>
            Merci {form.prenom} — votre commande a été transmise à notre équipe. Vous recevrez une confirmation et votre facture par e-mail dans les plus brefs délais.
          </p>
          <a href="/" style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>
            Retour à l'accueil
          </a>
        </main>
        <Footer />
      </>
    )
  }

  // Loading
  if (step === 'loading') {
    return (
      <>
        <Navbar />
        <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'var(--header-h)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div className="spinner" />
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', color: 'var(--text-secondary)', marginTop: '24px' }}>
              Traitement en cours…
            </p>
          </div>
        </main>
        <style>{`.spinner { width: 32px; height: 32px; border: 2px solid rgba(224,161,38,0.2); border-top-color: var(--accent); border-radius: 50%; animation: spin 0.7s linear infinite; margin: 0 auto; } @keyframes spin { to { transform: rotate(360deg); } }`}</style>
        <Footer />
      </>
    )
  }

  const inputStyle = (err) => ({
    width: '100%',
    fontFamily: "'Neue Montreal', sans-serif",
    fontSize: '13px',
    color: 'var(--text-primary)',
    background: '#FFFFFF',
    border: `1px solid ${err ? '#c0392b' : 'rgba(17,17,17,0.15)'}`,
    padding: '11px 14px',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s ease',
  })

  const labelStyle = {
    fontFamily: "'Neue Montreal', sans-serif",
    fontSize: '10px',
    fontWeight: 500,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'var(--text-secondary)',
    display: 'block',
    marginBottom: '6px',
  }

  return (
    <>
      <Navbar />

      <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'var(--header-h)' }}>

        {/* Header */}
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '56px 72px 40px' }}>
          <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '16px' }}>
            {step === 'cart' ? 'Mon panier' : 'Informations de livraison'}
          </p>
          <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 400, lineHeight: 1.05, color: 'var(--text-primary)' }}>
            {step === 'cart' ? `${totalItems} produit${totalItems > 1 ? 's' : ''} sélectionné${totalItems > 1 ? 's' : ''}` : 'Finaliser la commande'}
          </h1>
        </div>

        {step === 'cart' && (
          <div className="panier-layout" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 72px 120px', display: 'grid', gridTemplateColumns: '1fr 380px', gap: '48px', alignItems: 'start' }}>

            {/* Liste produits */}
            <div>
              {items.map((item, idx) => (
                <div key={item.id} style={{ display: 'grid', gridTemplateColumns: '80px 1fr auto', gap: '20px', alignItems: 'center', padding: '24px 0', borderBottom: '1px solid rgba(17,17,17,0.07)' }}>
                  <div style={{ width: '80px', height: '80px', overflow: 'hidden', background: '#F8F5EF', flexShrink: 0 }}>
                    <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '4px' }}>
                      {item.name}
                    </p>
                    <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', color: 'rgba(17,17,17,0.4)', marginBottom: '12px' }}>
                      {item.qty}
                    </p>
                    {/* Quantité */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0', border: '1px solid rgba(17,17,17,0.12)', display: 'inline-flex' }}>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        style={{ width: '32px', height: '32px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      >−</button>
                      <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', fontWeight: 500, color: 'var(--text-primary)', minWidth: '28px', textAlign: 'center' }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        style={{ width: '32px', height: '32px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      >+</button>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '8px' }}>
                      {formatPrice(item.price * item.quantity)}
                    </p>
                    <button
                      onClick={() => removeItem(item.id)}
                      style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.35)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                    >
                      Retirer
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Récapitulatif */}
            <div style={{ background: 'var(--bg-secondary)', padding: '36px 32px', position: 'sticky', top: '96px' }}>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                Récapitulatif
              </p>

              {items.map(item => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', color: 'var(--text-secondary)' }}>
                    {item.shortName} × {item.quantity}
                  </span>
                  <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', color: 'var(--text-primary)' }}>
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </div>
              ))}

              <div style={{ borderTop: '1px solid rgba(17,17,17,0.1)', marginTop: '16px', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', color: 'var(--text-secondary)' }}>Livraison</span>
                <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', color: 'rgba(17,17,17,0.4)', fontStyle: 'italic' }}>Sur devis</span>
              </div>

              <div style={{ borderTop: '1px solid rgba(17,17,17,0.1)', marginTop: '16px', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', marginBottom: '32px' }}>
                <span style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '18px', fontWeight: 400, color: 'var(--text-primary)' }}>Total</span>
                <span style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '20px', fontWeight: 400, color: 'var(--text-primary)' }}>
                  {formatPrice(totalPrice)}
                </span>
              </div>

              <button
                onClick={() => setStep('info')}
                style={{
                  width: '100%',
                  fontFamily: "'Neue Montreal', sans-serif",
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  background: 'var(--accent)',
                  border: 'none',
                  padding: '16px 24px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'opacity 0.3s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                Passer la commande →
              </button>

              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', color: 'rgba(17,17,17,0.35)', textAlign: 'center', marginTop: '16px', lineHeight: 1.6 }}>
                Livraison à Paris et en Île-de-France.<br />Dès 6h30, 7j/7.
              </p>
            </div>
          </div>
        )}

        {step === 'info' && (
          <div className="panier-layout" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 72px 120px', display: 'grid', gridTemplateColumns: '1fr 380px', gap: '48px', alignItems: 'start' }}>

            {/* Formulaire */}
            <div>

              {/* Section contact */}
              <div style={{ marginBottom: '40px' }}>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '20px' }}>
                  Contact
                </p>
                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                  <div>
                    <label style={labelStyle}>Prénom *</label>
                    <input style={inputStyle(errors.prenom)} value={form.prenom} onChange={e => handleField('prenom', e.target.value)} placeholder="Marie" />
                  </div>
                  <div>
                    <label style={labelStyle}>Nom *</label>
                    <input style={inputStyle(errors.nom)} value={form.nom} onChange={e => handleField('nom', e.target.value)} placeholder="Dupont" />
                  </div>
                </div>
                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                  <div>
                    <label style={labelStyle}>E-mail *</label>
                    <input type="email" style={inputStyle(errors.email)} value={form.email} onChange={e => handleField('email', e.target.value)} placeholder="marie@entreprise.fr" />
                  </div>
                  <div>
                    <label style={labelStyle}>Téléphone</label>
                    <input style={inputStyle(false)} value={form.telephone} onChange={e => handleField('telephone', e.target.value)} placeholder="+33 6 00 00 00 00" />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Entreprise *</label>
                  <input style={inputStyle(errors.entreprise)} value={form.entreprise} onChange={e => handleField('entreprise', e.target.value)} placeholder="Nom de votre entreprise" />
                </div>
              </div>

              {/* Section livraison */}
              <div style={{ marginBottom: '40px' }}>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '20px' }}>
                  Adresse de livraison
                </p>
                <div style={{ marginBottom: '12px' }}>
                  <label style={labelStyle}>Adresse *</label>
                  <input style={inputStyle(errors.adresse)} value={form.adresse} onChange={e => handleField('adresse', e.target.value)} placeholder="15 rue de Rivoli" />
                </div>
                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '12px' }}>
                  <div>
                    <label style={labelStyle}>Code postal *</label>
                    <input style={inputStyle(errors.codepostal)} value={form.codepostal} onChange={e => handleField('codepostal', e.target.value)} placeholder="75001" />
                  </div>
                  <div>
                    <label style={labelStyle}>Ville *</label>
                    <input style={inputStyle(errors.ville)} value={form.ville} onChange={e => handleField('ville', e.target.value)} placeholder="Paris" />
                  </div>
                </div>
              </div>

              {/* Section date */}
              <div style={{ marginBottom: '40px' }}>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '20px' }}>
                  Date et heure de livraison
                </p>
                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                  <div>
                    <label style={labelStyle}>Date souhaitée *</label>
                    <input type="date" style={inputStyle(errors.date)} value={form.date} onChange={e => handleField('date', e.target.value)} />
                  </div>
                  <div>
                    <label style={labelStyle}>Heure souhaitée</label>
                    <input type="time" style={inputStyle(false)} value={form.heure} onChange={e => handleField('heure', e.target.value)} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Notes (contraintes alimentaires, étage, digicode…)</label>
                  <textarea
                    style={{ ...inputStyle(false), resize: 'vertical', minHeight: '80px' }}
                    value={form.notes}
                    onChange={e => handleField('notes', e.target.value)}
                    placeholder="Informations complémentaires pour la livraison..."
                  />
                </div>
              </div>

              {/* Mode de paiement */}
              <div>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '20px' }}>
                  Mode de paiement
                </p>
                <div className="pay-options" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  {[
                    { key: 'online', label: 'Paiement en ligne', desc: 'Carte bancaire sécurisée via Stripe', icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
                      </svg>
                    )},
                    { key: 'invoice', label: 'Paiement sur facture', desc: 'Réservé aux clients avec un compte actif', icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
                      </svg>
                    )},
                  ].map(opt => (
                    <button
                      key={opt.key}
                      onClick={() => setPayMode(opt.key)}
                      style={{
                        background: payMode === opt.key ? 'rgba(224,161,38,0.06)' : '#FFFFFF',
                        border: `1px solid ${payMode === opt.key ? 'var(--accent)' : 'rgba(17,17,17,0.12)'}`,
                        padding: '20px',
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                      }}
                    >
                      <span style={{ color: payMode === opt.key ? 'var(--accent)' : 'rgba(17,17,17,0.5)' }}>{opt.icon}</span>
                      <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', fontWeight: 500, color: 'var(--text-primary)' }}>{opt.label}</span>
                      <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', color: 'rgba(17,17,17,0.45)', lineHeight: 1.5 }}>{opt.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Récap commande */}
            <div style={{ background: 'var(--bg-secondary)', padding: '36px 32px', position: 'sticky', top: '96px' }}>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                Votre commande
              </p>

              {items.map(item => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', color: 'var(--text-secondary)' }}>
                    {item.shortName} × {item.quantity}
                  </span>
                  <span style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', color: 'var(--text-primary)' }}>
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </div>
              ))}

              <div style={{ borderTop: '1px solid rgba(17,17,17,0.1)', marginTop: '16px', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', marginBottom: '32px' }}>
                <span style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '18px', fontWeight: 400, color: 'var(--text-primary)' }}>Total</span>
                <span style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '20px', fontWeight: 400, color: 'var(--text-primary)' }}>
                  {formatPrice(totalPrice)}
                </span>
              </div>

              <button
                onClick={() => {
                  if (!payMode) { alert('Veuillez choisir un mode de paiement.'); return }
                  if (payMode === 'online') handlePayOnline()
                  else handleInvoice()
                }}
                disabled={!payMode}
                style={{
                  width: '100%',
                  fontFamily: "'Neue Montreal', sans-serif",
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  background: payMode ? 'var(--accent)' : 'rgba(17,17,17,0.2)',
                  border: 'none',
                  padding: '16px 24px',
                  cursor: payMode ? 'pointer' : 'not-allowed',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease',
                  marginBottom: '12px',
                }}
              >
                {payMode === 'online' ? 'Payer en ligne →' : payMode === 'invoice' ? 'Confirmer la commande →' : 'Choisir un mode de paiement'}
              </button>

              <button
                onClick={() => setStep('cart')}
                style={{ width: '100%', fontFamily: "'Neue Montreal', sans-serif", fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.4)', background: 'none', border: 'none', cursor: 'pointer', padding: '8px 0', textAlign: 'center' }}
              >
                ← Modifier le panier
              </button>
            </div>
          </div>
        )}

      </main>

      <style suppressHydrationWarning>{`
        @media (max-width: 768px) {
          .panier-layout { grid-template-columns: 1fr !important; padding: 0 20px 80px !important; }
          .form-row { grid-template-columns: 1fr !important; }
          .pay-options { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .panier-layout { padding: 0 40px 100px !important; }
        }
      `}</style>

      <Footer />
    </>
  )
}
