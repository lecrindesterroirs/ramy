'use client'

import LegalTemplate, { h2Style, pStyle, sectionStyle } from '../../../components/LegalTemplate'
import AvisTraduction from '../../../components/AvisTraduction'

const gras = { color: 'var(--text-primary)', fontWeight: 500 }

export default function PrivacyPolicy() {
  return (
    <LegalTemplate title="Privacy Policy" updated="May 2026">

      <AvisTraduction lien="/confidentialite" />

      <div style={{ ...pStyle, marginBottom: '48px', padding: '20px 24px', background: 'var(--bg-secondary)', borderLeft: '2px solid var(--accent)' }}>
        L&apos;Écrin Traiteur takes the protection of your personal data seriously. This policy sets out what data we collect, why and how we use it, in accordance with the General Data Protection Regulation (GDPR).
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Data controller</h2>
        <p style={pStyle}>
          The controller of your personal data is:<br />
          <strong style={gras}>L&apos;Écrin Traiteur</strong>, L&apos;Écrin des Terroirs SASU<br />
          SIRET 100 102 672 00019<br />
          2, Allée des Bergeronnettes, 92150 Suresnes, France<br />
          commercial@lecrin-traiteur.fr, +33 1 74 54 23 10
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Data collected and purposes</h2>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          We collect only the data needed to manage your relationship with L&apos;Écrin Traiteur. The data collected and the purposes are as follows:
        </p>
        <p style={pStyle}>
          <strong style={gras}>Contact form:</strong> surname, first name, email, telephone, company, message. Purpose: answering your request.<br /><br />
          <strong style={gras}>Quote form:</strong> surname, first name, email, telephone, company, headcount, date, type of service, budget. Purpose: preparing a tailored quote.<br /><br />
          <strong style={gras}>Browsing data:</strong> IP address, pages visited, time spent. Purpose: audience measurement and improvement of the site (see our cookie policy).
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Legal basis for processing</h2>
        <p style={pStyle}>
          The processing of your personal data rests on the following legal bases:<br /><br />
          <strong style={gras}>Performance of a contract</strong> or of pre-contractual steps (handling quotes and orders).<br />
          <strong style={gras}>Legitimate interest</strong> of the company (improving services, commercial relationship).<br />
          <strong style={gras}>Consent</strong> for marketing communications, which you may withdraw at any time.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Retention periods</h2>
        <p style={pStyle}>
          Your data is kept for the following periods:<br /><br />
          <strong style={gras}>Client and order data:</strong> 10 years from the end of the commercial relationship (statutory accounting obligation).<br />
          <strong style={gras}>Contact requests with no follow-up:</strong> 3 years from the last contact.<br />
          <strong style={gras}>Browsing data:</strong> 13 months maximum.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Who receives the data</h2>
        <p style={pStyle}>
          Your personal data is intended solely for the teams of L&apos;Écrin Traiteur, in order to handle your request. It is never sold or passed to third parties for commercial purposes. It may be shared with technical providers (hosting provider, emailing tool) strictly to carry out their work, under a processing agreement compliant with the GDPR.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Your rights</h2>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          Under the GDPR, you have the following rights over your personal data:
        </p>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          <strong style={gras}>Right of access:</strong> obtain a copy of your data.<br />
          <strong style={gras}>Right to rectification:</strong> correct inaccurate or incomplete data.<br />
          <strong style={gras}>Right to erasure:</strong> ask for your data to be deleted.<br />
          <strong style={gras}>Right to portability:</strong> receive your data in a structured format.<br />
          <strong style={gras}>Right to object:</strong> object to certain processing.
        </p>
        <p style={pStyle}>
          To exercise these rights, contact us at commercial@lecrin-traiteur.fr, or by post: L&apos;Écrin Traiteur, 2, Allée des Bergeronnettes, 92150 Suresnes, France. We undertake to reply within one month. If our answer does not satisfy you, you may lodge a complaint with the <strong style={gras}>CNIL</strong>, the French data protection authority (www.cnil.fr).
        </p>
      </div>

      <div style={{ ...sectionStyle, borderBottom: 'none', paddingBottom: 0, marginBottom: 0 }}>
        <h2 style={h2Style}>Changes to this policy</h2>
        <p style={pStyle}>
          L&apos;Écrin Traiteur reserves the right to amend this privacy policy at any time. The date it was last updated is shown at the top of this page. We encourage you to consult it regularly.
        </p>
      </div>

    </LegalTemplate>
  )
}
