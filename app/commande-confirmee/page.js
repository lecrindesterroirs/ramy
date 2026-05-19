'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

function ConfirmationContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 300)
    return () => clearTimeout(t)
  }, [])

  return (
    <main
      style={{
        background: '#FFFFFF',
        minHeight: '100vh',
        paddingTop: '72px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px',
        opacity: ready ? 1 : 0,
        transition: 'opacity 0.5s ease',
      }}
    >
      {/* Icône succès */}
      <div style={{
        width: '64px',
        height: '64px',
        borderRadius: '50%',
        background: 'rgba(224,161,38,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '32px',
      }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20,6 9,17 4,12"/>
        </svg>
      </div>

      <p style={{
        fontFamily: "'Neue Montreal', sans-serif",
        fontSize: '11px',
        fontWeight: 500,
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: 'var(--accent)',
        marginBottom: '16px',
      }}>
        Paiement confirmé
      </p>

      <h1 style={{
        fontFamily: "'Baskerville Display PT', Georgia, serif",
        fontSize: 'clamp(28px, 5vw, 52px)',
        fontWeight: 400,
        lineHeight: 1.05,
        color: 'var(--text-primary)',
        textAlign: 'center',
        marginBottom: '24px',
      }}>
        Votre commande est confirmée.
      </h1>

      <p style={{
        fontFamily: "'Neue Montreal', sans-serif",
        fontSize: '15px',
        lineHeight: 1.8,
        color: 'var(--text-secondary)',
        maxWidth: '480px',
        textAlign: 'center',
        marginBottom: '48px',
      }}>
        Merci pour votre commande. Vous allez recevoir une confirmation par e-mail avec tous les détails de votre livraison. Notre équipe prend en charge le reste.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <a
          href="/creations/petits-dejeuners-et-pauses"
          style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#FFFFFF',
            background: 'var(--accent)',
            padding: '14px 32px',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'opacity 0.3s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          Continuer à commander →
        </a>
        <a
          href="/"
          style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: '11px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(17,17,17,0.4)',
            textDecoration: 'none',
            borderBottom: '1px solid rgba(17,17,17,0.15)',
            paddingBottom: '2px',
          }}
        >
          Retour à l'accueil
        </a>
      </div>
    </main>
  )
}

export default function CommandeConfirmee() {
  return (
    <>
      <Navbar />
      <Suspense fallback={
        <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: '72px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="spinner" />
        </main>
      }>
        <ConfirmationContent />
      </Suspense>
      <style>{`.spinner { width: 32px; height: 32px; border: 2px solid rgba(224,161,38,0.2); border-top-color: var(--accent); border-radius: 50%; animation: spin 0.7s linear infinite; } @keyframes spin { to { transform: rotate(360deg); } }`}</style>
      <Footer />
    </>
  )
}
