'use client'

import LegalTemplate, { h2Style, pStyle, sectionStyle } from '../../../components/LegalTemplate'
import AvisTraduction from '../../../components/AvisTraduction'

const gras = { color: 'var(--text-primary)', fontWeight: 500 }

export default function LegalNotice() {
  return (
    <LegalTemplate title="Legal Notice" updated="May 2026">

      <AvisTraduction lien="/mentions-legales" />

      <div style={sectionStyle}>
        <h2 style={h2Style}>Website publisher</h2>
        <p style={pStyle}>
          <strong style={gras}>Registered name:</strong> L&apos;ÉCRIN DES TERROIRS<br />
          <strong style={gras}>Trading name:</strong> L&apos;Écrin Traiteur<br />
          <strong style={gras}>Legal form:</strong> Société par Actions Simplifiée à associé unique (SASU), a French single-shareholder simplified joint-stock company<br />
          <strong style={gras}>SIREN:</strong> 100 102 672<br />
          <strong style={gras}>SIRET:</strong> 100 102 672 00019<br />
          <strong style={gras}>EU VAT number:</strong> FR05100102672<br />
          <strong style={gras}>Registered office:</strong> 2, Allée des Bergeronnettes, 92150 Suresnes, France<br />
          <strong style={gras}>Operating address:</strong> 63 bis rue de Sèvres, 92100 Boulogne-Billancourt, France<br />
          <strong style={gras}>Telephone:</strong> +33 1 74 54 23 10<br />
          <strong style={gras}>Email:</strong> commercial@lecrin-traiteur.fr<br />
          <strong style={gras}>Publication director:</strong> Ramy ABDELATY
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Hosting provider</h2>
        <p style={pStyle}>
          <strong style={gras}>Company:</strong> Vercel Inc.<br />
          <strong style={gras}>Address:</strong> 340 Pine Street, Suite 701, San Francisco, CA 94104, United States<br />
          <strong style={gras}>Website:</strong> vercel.com
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Intellectual property</h2>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          All the content of this website (text, photographs, images, logos, graphics) is the exclusive property of L&apos;Écrin Traiteur or of its partners, and is protected by French and international intellectual property law.
        </p>
        <p style={pStyle}>
          Any reproduction, representation, modification, publication or adaptation of all or part of the elements of the site, whatever the means or process used, is prohibited without the prior written authorisation of L&apos;Écrin Traiteur.
        </p>
        <p style={{ ...pStyle, marginTop: '16px' }}>
          The site also constitutes a <strong style={gras}>database</strong> within the meaning of article L.341-1 of the French Intellectual Property Code: prices, reference quantities, budgets by headcount, compositions and guides are gathered and verified through a substantial investment. L&apos;Écrin Traiteur is the maker of that database and holds the <em>sui generis</em> right of article L.342-1, independently of copyright. Extracting or re-using a substantial part of this content, and repeatedly extracting insubstantial parts, are prohibited and punishable under article L.343-1 (three years&apos; imprisonment and a €300,000 fine). The detail is in article 2quinquies of the{' '}
          <a href="/cgv" style={{ color: 'var(--accent-deep)', textDecoration: 'none' }}>terms and conditions of sale</a>.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Limitation of liability</h2>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          L&apos;Écrin Traiteur endeavours to keep the information published on this site accurate and up to date. We cannot, however, guarantee that the information made available is accurate, precise or complete.
        </p>
        <p style={pStyle}>
          L&apos;Écrin Traiteur accepts no liability for direct or indirect damage that may result from access to the site or from the use of the information it contains.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Personal data</h2>
        <p style={pStyle}>
          The information collected through the contact and quote forms is processed in order to handle your request. To find out more about how your personal data is handled and how to exercise your rights, see our{' '}
          <a href="/en/confidentialite" style={{ color: 'var(--accent-deep)', textDecoration: 'none' }}>Privacy Policy</a>.
        </p>
      </div>

      <div style={{ ...sectionStyle, borderBottom: 'none', paddingBottom: 0, marginBottom: 0 }}>
        <h2 style={h2Style}>Governing law</h2>
        <p style={pStyle}>
          This website and its legal notice are governed by French law. In the event of a dispute, and failing an amicable resolution, the French courts shall have sole jurisdiction.
        </p>
      </div>

    </LegalTemplate>
  )
}
