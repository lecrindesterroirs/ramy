'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { getAttribution } from '../lib/attribution'
import { identifierVisiteur } from '../lib/posthog-identify'
import { estAnglais } from '../lib/i18nBase'

const PRESTATIONS = [
  'Petit-déjeuner',
  'Plateaux repas',
  'Cocktail / Buffet',
  'Goûter',
  'Séminaire',
  'Personnalisation',
  'Événement sur mesure',
]

/*
  Les VALEURS envoyées restent françaises, dans les deux langues : elles
  arrivent telles quelles dans l'OS et sur le devis que Diego envoie. Seul
  l'affichage est traduit, par ces deux tables. Traduire la valeur mettrait
  « Breakfast » sur un devis français.
*/
const PRESTATIONS_EN = {
  'Petit-déjeuner': 'Breakfast',
  'Plateaux repas': 'Lunch trays',
  'Cocktail / Buffet': 'Cocktail / Buffet',
  'Goûter': 'Afternoon break',
  'Séminaire': 'Offsite',
  'Personnalisation': 'Personalisation',
  'Événement sur mesure': 'Bespoke event',
}

const FAMILLES_PERSO_EN = {
  'Macarons': 'Macarons',
  'Chocolats': 'Chocolates',
  'Cookies': 'Cookies',
  'Madeleines': 'Madeleines',
  'Number Cake': 'Number cake',
  'Packaging': 'Packaging',
}

const T = {
  fr: {
    titre: 'Un projet à Paris ou en Île-de-France ?',
    sousTitre: 'Répondez en 30 secondes, devis personnalisé sous 24h.',
    prestation: 'Type de prestation',
    choisir: 'Choisir…',
    famille: 'Famille de personnalisation',
    convives: 'Nombre de personnes',
    exConvives: 'Ex : 25 personnes',
    exConvives50: 'Ex : 50 personnes',
    date: 'Date souhaitée',
    email: 'Email professionnel *',
    exEmail: 'marie@entreprise.com',
    envoi: 'Envoi…',
    envoyer: 'Recevoir un devis →',
    detaille: 'Formulaire détaillé →',
    erreur: "Erreur d'envoi. Réessayez ou écrivez-nous à commercial@lecrin-traiteur.fr",
    succes: 'Demande envoyée avec succès.',
    succesDetail: 'Nous vous recontactons sous 24h avec une proposition personnalisée.',
  },
  en: {
    titre: 'An event in Paris or Île-de-France?',
    sousTitre: 'Answer in 30 seconds, personalised quote within 24 hours.',
    prestation: 'What do you need?',
    choisir: 'Choose…',
    famille: 'What would you like personalised?',
    convives: 'How many people?',
    exConvives: 'e.g. 25 people',
    exConvives50: 'e.g. 50 people',
    date: 'Date you need it',
    email: 'Work email *',
    exEmail: 'marie@company.com',
    envoi: 'Sending…',
    envoyer: 'Get a quote →',
    detaille: 'Full form →',
    erreur: 'Could not send. Try again, or email us at commercial@lecrin-traiteur.fr',
    succes: 'Request sent.',
    succesDetail: 'We will come back to you within 24 hours with a personalised proposal.',
  },
}

const FAMILLES_PERSO = [
  'Macarons',
  'Chocolats',
  'Cookies',
  'Madeleines',
  'Number Cake',
  'Packaging',
]

// compact : sans la grande marge du haut, pour la feuille de la barre mobile
// (components/DevisSheet.js) et l'encart de la grille des pages de la carte.
/*
  titre / sousTitre sont écrits en français par les pages appelantes. En
  anglais, on les IGNORE au profit du texte anglais, sinon un libellé français
  passé en prop écrase la traduction : c'est ce qui laissait « Répondez en 30
  secondes… » sur 44 pages /en. Une page qui tient à un titre anglais précis
  passe titreEn / sousTitreEn.
*/
export default function DevisRapide({ defaultPrestation = '', titre, sousTitre, titreEn, sousTitreEn, compact = false }) {
  const en = estAnglais(usePathname() || '/')
  const t = en ? T.en : T.fr
  const motPrestation = (v) => (en && PRESTATIONS_EN[v]) || v
  const motFamille = (v) => (en && FAMILLES_PERSO_EN[v]) || v
  const [form, setForm] = useState({
    prestation: defaultPrestation,
    famillePerso: '',
    convives: '',
    date: '',
    email: '',
    website: '', // honeypot anti-spam (doit rester vide)
  })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async e => {
    e.preventDefault()
    if (!form.email || !form.prestation) return
    setStatus('loading')
    try {
      const res = await fetch('/api/devis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'devis-rapide', attribution: getAttribution() }),
      })
      setStatus(res.ok ? 'success' : 'error')
      if (res.ok) {
        window.dataLayer?.push({ event: 'devis_submit', form_location: 'devis_rapide' })
        identifierVisiteur(form, 'devis_rapide')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div style={{
        marginTop: compact ? 0 : '56px',
        padding: '36px 40px',
        background: 'rgba(58,124,58,0.05)',
        border: '1px solid rgba(58,124,58,0.2)',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
      }}>
        <div style={{ width: '40px', height: '40px', background: 'rgba(58,124,58,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3a7c3a" strokeWidth="2.5"><polyline points="20,6 9,17 4,12"/></svg>
        </div>
        <div>
          <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '14px', fontWeight: 500, color: '#3a7c3a', marginBottom: '4px' }}>
            {t.succes}
          </p>
          <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '12px', color: 'rgba(17,17,17,0.5)', lineHeight: 1.6 }}>
            {t.succesDetail}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      marginTop: compact ? 0 : '56px',
      padding: compact ? '26px 20px' : '40px 40px',
      background: 'var(--bg-secondary)',
      borderLeft: '3px solid var(--accent)',
    }}>
      {/* Header */}
      <p style={{
        fontFamily: "'Baskerville Display PT', 'Baskerville Fallback', Georgia, serif",
        fontSize: '22px',
        fontWeight: 400,
        color: 'var(--text-primary)',
        marginBottom: '6px',
        lineHeight: 1.2,
      }}>
        {(en ? titreEn : titre) || t.titre}
      </p>
      <p style={{
        fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
        fontSize: '13px',
        color: 'var(--text-secondary)',
        lineHeight: 1.65,
        marginBottom: '28px',
      }}>
        {(en ? sousTitreEn : sousTitre) || t.sousTitre}
      </p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

        {/* Honeypot anti-spam, invisible aux humains, rempli par les bots */}
        <input
          type="text"
          name="website"
          value={form.website}
          onChange={e => set('website', e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
        />

        {/* Row 1, Prestation + Date */}
        <div className="dr-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <div>
            <label style={labelStyle}>{t.prestation}</label>
            <div style={{ position: 'relative' }}>
              <select
                value={form.prestation}
                onChange={e => set('prestation', e.target.value)}
                style={{ ...fieldStyle, paddingRight: '32px', cursor: 'pointer' }}
                required
              >
                <option value="">{t.choisir}</option>
                {PRESTATIONS.map(p => <option key={p} value={p}>{motPrestation(p)}</option>)}
              </select>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(17,17,17,0.35)', pointerEvents: 'none' }}><polyline points="6,9 12,15 18,9"/></svg>
            </div>
          </div>
          {form.prestation === 'Personnalisation' && (
            <div>
              <label style={labelStyle}>{t.famille}</label>
              <div style={{ position: 'relative' }}>
                <select
                  value={form.famillePerso}
                  onChange={e => set('famillePerso', e.target.value)}
                  style={{ ...fieldStyle, paddingRight: '32px', cursor: 'pointer' }}
                >
                  <option value="">{t.choisir}</option>
                  {FAMILLES_PERSO.map(f => <option key={f} value={f}>{motFamille(f)}</option>)}
                </select>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(17,17,17,0.35)', pointerEvents: 'none' }}><polyline points="6,9 12,15 18,9"/></svg>
              </div>
            </div>
          )}
          {form.prestation !== 'Personnalisation' && (
            <div>
              <label style={labelStyle}>{t.convives}</label>
              <input
                value={form.convives}
                onChange={e => set('convives', e.target.value)}
                placeholder={t.exConvives}
                style={fieldStyle}
              />
            </div>
          )}
        </div>

        {/* Row 2, Date + Number / Perso + Date + Email */}
        <div className="dr-row" style={{ display: 'grid', gridTemplateColumns: form.prestation === 'Personnalisation' ? '1fr 1fr' : '1fr 1fr', gap: '12px' }}>
          {form.prestation === 'Personnalisation' ? (
            <>
              <div>
                <label style={labelStyle}>{t.convives}</label>
                <input
                  value={form.convives}
                  onChange={e => set('convives', e.target.value)}
                  placeholder={t.exConvives50}
                  style={fieldStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>{t.date}</label>
                <input
                  type="date"
                  value={form.date}
                  onChange={e => set('date', e.target.value)}
                  style={{ ...fieldStyle, colorScheme: 'light' }}
                />
              </div>
            </>
          ) : (
            <>
              <div>
                <label style={labelStyle}>{t.date}</label>
                <input
                  type="date"
                  value={form.date}
                  onChange={e => set('date', e.target.value)}
                  style={{ ...fieldStyle, colorScheme: 'light' }}
                />
              </div>
              <div>
                <label style={labelStyle}>{t.email}</label>
                <input
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  value={form.email}
                  onChange={e => set('email', e.target.value)}
                  placeholder={t.exEmail}
                  style={fieldStyle}
                  required
                />
              </div>
            </>
          )}
        </div>

        {form.prestation === 'Personnalisation' && (
          <div className="dr-row">
            <label style={labelStyle}>{t.email}</label>
            <input
              type="email"
              autoComplete="email"
              inputMode="email"
              value={form.email}
              onChange={e => set('email', e.target.value)}
              placeholder={t.exEmail}
              style={fieldStyle}
              required
            />
          </div>
        )}

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '4px', flexWrap: 'wrap' }}>
          <button
            type="submit"
            disabled={status === 'loading'}
            style={{
              fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#1A1A18',
              background: 'var(--accent)',
              border: 'none',
              padding: '13px 32px',
              cursor: status === 'loading' ? 'default' : 'pointer',
              opacity: status === 'loading' ? 0.65 : 1,
              transition: 'opacity 0.3s ease',
              outline: 'none',
            }}
            onMouseEnter={e => { if (status !== 'loading') e.currentTarget.style.opacity = '0.82' }}
            onMouseLeave={e => { if (status !== 'loading') e.currentTarget.style.opacity = '1' }}
          >
            {status === 'loading' ? t.envoi : t.envoyer}
          </button>
          <a
            href={en ? '/en/devis' : '/devis'}
            style={{
              fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
              fontSize: '11px',
              letterSpacing: '0.06em',
              color: 'rgba(17,17,17,0.4)',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(17,17,17,0.15)',
              paddingBottom: '1px',
            }}
          >
            {t.detaille}
          </a>
        </div>

        {status === 'error' && (
          <p style={{ fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif", fontSize: '11px', color: '#c0392b', marginTop: '4px' }}>
            {t.erreur}
          </p>
        )}
      </form>

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        input[type="date"]::-webkit-calendar-picker-indicator { opacity: 0.3; cursor: pointer; }
        input::placeholder { color: rgba(17,17,17,0.35); }
        input:focus, select:focus { outline: none; border-color: rgba(224,161,38,0.45) !important; }
        @media (max-width: 600px) {
          .dr-row { grid-template-columns: 1fr !important; }
        }
      ` }} />
    </div>
  )
}

const fieldStyle = {
  width: '100%',
  fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
  fontSize: '13px',
  color: 'var(--text-primary)',
  background: '#FFFFFF',
  border: '1px solid rgba(17,17,17,0.1)',
  padding: '10px 14px',
  height: '46px',
  outline: 'none',
  boxSizing: 'border-box',
  appearance: 'none',
  WebkitAppearance: 'none',
  transition: 'border-color 0.25s ease',
}

const labelStyle = {
  display: 'block',
  fontFamily: "'Neue Montreal', 'Neue Montreal Fallback', sans-serif",
  fontSize: '10px',
  fontWeight: 500,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: 'rgba(17,17,17,0.45)',
  marginBottom: '6px',
}
