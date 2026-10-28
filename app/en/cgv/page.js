'use client'

import LegalTemplate, { h2Style, pStyle, sectionStyle } from '../../../components/LegalTemplate'
import AvisTraduction from '../../../components/AvisTraduction'

const gras = { color: 'var(--text-primary)', fontWeight: 500 }
const p16 = { ...pStyle, marginBottom: '16px' }

export default function TermsOfSale() {
  return (
    <LegalTemplate title="Terms and Conditions of Sale" updated="May 2026">

      <AvisTraduction lien="/cgv" />

      <div style={{ ...pStyle, marginBottom: '48px', padding: '20px 24px', background: 'var(--bg-secondary)', borderLeft: '2px solid var(--accent)' }}>
        Any purchase or order placed with L&apos;Écrin Traiteur implies the client&apos;s full and unreserved acceptance of these terms and conditions of sale. These terms may be amended at any time; the terms that apply are those in force on the date of the order.
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Article 1, Scope</h2>
        <p style={pStyle}>
          These Terms and Conditions of Sale apply to all event catering services offered by L&apos;Écrin Traiteur (L&apos;Écrin des Terroirs SASU, SIRET 100 102 672 00019) to professional clients (companies, associations, public bodies) located in the Paris region. They govern the whole of the contractual relationship between L&apos;Écrin Traiteur and its clients.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Article 2, Services offered</h2>
        <p style={p16}>
          L&apos;Écrin Traiteur provides event catering for companies: breakfasts, afternoon breaks, lunch trays, cocktail receptions, buffets and seasonal events, prepared with selected local artisans.
        </p>
        <p style={p16}>
          Offers are subject to product availability. The images shown on the site (photographs, illustrations, arrangements) are indicative. L&apos;Écrin Traiteur reserves the right to substitute an equivalent product if an item is unavailable, after informing the client.
        </p>
        <p style={pStyle}>
          <strong style={gras}>All images, photographs and pictures published on the site and in commercial materials are the exclusive property of L&apos;Écrin Traiteur</strong> or of its authorised partners. Their reproduction, even in part, in any form and by any means (digital, printed, screenshot, download, printing, projection), is strictly prohibited without prior written authorisation. This applies to commercial, professional, academic, promotional and personal purposes alike.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Article 2bis, Intellectual property and copyright</h2>
        <p style={p16}>
          <strong style={gras}>All the content of the site</strong> (text, images, photographs, videos, graphics, arrangements, layouts, code, logos, trade marks, designs) is the exclusive property of L&apos;Écrin Traiteur or is used with the authorisation of its respective owners. This content is protected by the French Intellectual Property Code and by international copyright law.
        </p>
        <p style={p16}>
          Access to the site confers a right of personal, non-commercial consultation only. All rights of reproduction, modification, adaptation, translation, extraction, compilation and derivation are expressly reserved to L&apos;Écrin Traiteur.
        </p>
        <p style={pStyle}>
          Any attempt to circumvent technical protection measures (scraping, bulk downloading, use of bots) is formally prohibited and may give rise to legal proceedings.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Article 2ter, Prohibited uses and re-uses of the content</h2>
        <p style={p16}>The client expressly undertakes:</p>
        <p style={pStyle}>
          • <strong style={gras}>Not to</strong> reproduce, copy, download, print, save or archive the photographs and images of the site, except strictly privately and without passing them on;<br /><br />
          • <strong style={gras}>Not to</strong> modify, adapt, transform, distort or alter the images, photographs or content in any form whatsoever;<br /><br />
          • <strong style={gras}>Not to</strong> use the photographs or images in a commercial, promotional, advertising or professional context without explicit written authorisation;<br /><br />
          • <strong style={gras}>Not to</strong> embed, import or re-use the images in other sites, platforms, social networks, applications or distribution media, including for portfolio, presentation or demonstration purposes;<br /><br />
          • <strong style={gras}>Not to</strong> use the content to train artificial intelligence models, machine learning systems or any automated processing technology without written consent;<br /><br />
          • <strong style={gras}>Not to</strong> claim authorship or creation of the images and content, nor present them as their own work.
        </p>
        <p style={{ ...pStyle, marginTop: '16px' }}>
          Using the content for plagiarism, counterfeiting, brand confusion or impersonation is strictly prohibited and will engage the civil and criminal liability of the infringer.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Article 2quater, Limits of personal use</h2>
        <p style={p16}>Consulting the site for personal purposes does not authorise the client to:</p>
        <p style={p16}>
          • Share the photographs with third parties in a way that bypasses access to the site;<br />
          • Use the images to create derivative content (mockups, compositions, collages, retouching);<br />
          • Transfer, assign or give a third party access to downloaded photographs;<br />
          • Use the content repeatedly or systematically (scraping, deliberate archiving).
        </p>
        <p style={pStyle}>
          Any breach of these restrictions will give rise to damages proportionate to the loss suffered, without prejudice to any criminal action.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Article 2quinquies, Database maker&apos;s right</h2>
        <p style={p16}>
          The L&apos;Écrin Traiteur site constitutes a database within the meaning of articles L.112-3 and L.341-1 of the French Intellectual Property Code. It gathers, verifies and systematically presents a body of data: prices per service and per person, reference quantities per guest and per format, costed budgets by headcount, compositions, lead times and delivery areas, product sheets and practical guides.
        </p>
        <p style={p16}>
          Building, verifying and presenting this database represents a <strong style={gras}>substantial financial, material and human investment</strong> by L&apos;Écrin Traiteur. L&apos;Écrin Traiteur is therefore the maker of this database and holds the <em>sui generis</em> right provided for by article L.342-1 of the same code, independently of any protection by copyright.
        </p>
        <p style={p16}>The following are consequently prohibited, save with prior written authorisation:</p>
        <p style={p16}>
          • Extraction, by permanent or temporary transfer, of all or of a qualitatively or quantitatively substantial part of the contents of this database, onto another medium, by any means and in any form;<br />
          • Re-use, by making available to the public, of all or of a qualitatively or quantitatively substantial part of those contents, in whatever form;<br />
          • Repeated and systematic extraction or re-use of insubstantial parts of the contents, where this manifestly exceeds the normal conditions of use of the database.
        </p>
        <p style={pStyle}>
          These prohibitions apply whatever the method used, including manual consultation, automated copying, indexing for the purpose of republication, and rewording. Infringements of the database maker&apos;s right are punishable under article L.343-1 of the French Intellectual Property Code, which provides for <strong style={gras}>three years&apos; imprisonment and a €300,000 fine</strong>, without prejudice to the civil actions for counterfeiting, unfair competition and parasitism mentioned in article 9bis.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Article 3, How to order</h2>
        <p style={p16}>
          Orders may be placed by telephone on +33 1 74 54 23 10 or by email at commercial@lecrin-traiteur.fr. Every order must be confirmed before <strong style={gras}>10 am on the day before</strong> the requested delivery.
        </p>
        <p style={pStyle}>
          The minimum order is <strong style={gras}>€50 excl. VAT</strong>. Any order confirmed by the client constitutes acceptance of these terms and of the prices in force.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Article 4, Hygiene and allergens</h2>
        <p style={p16}>
          Products are delivered in accordance with the food hygiene standards in force. On receipt, chilled products must be kept between 0°C and 4°C and eaten within <strong style={gras}>4 hours</strong> of delivery. At room temperature, consumption must not exceed <strong style={gras}>2 hours</strong>. L&apos;Écrin Traiteur accepts no liability where the client does not observe these storage conditions.
        </p>
        <p style={pStyle}>
          A table of the allergens present in the products ordered (the 14 regulated allergens) is attached to the quote and the delivery note; it is also available from commercial@lecrin-traiteur.fr. It is for the client to inform us of any particular diet or allergy when ordering.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Article 5, Prices and payment</h2>
        <p style={p16}>
          All prices are shown in euros excluding VAT, to which VAT is added at the rate in force. A <strong style={gras}>flat charge of €29 excl. VAT</strong> applies to any delivery within Paris and the neighbouring towns. Specific charges may apply to other parts of the Paris region, stated on the quote.
        </p>
        <p style={p16}>
          Payment is made by bank transfer or card. <strong style={gras}>Invoices are payable within 30 days end of month</strong> from the date of issue.
        </p>
        <p style={pStyle}>
          In the event of late payment, penalties will be applied at the European Central Bank rate plus 10 points, together with a fixed recovery charge of €40, in accordance with article L.441-6 of the French Commercial Code.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Article 6, Delivery</h2>
        <p style={p16}>
          Delivery is made within the slot agreed when ordering, with a tolerance of <strong style={gras}>30 minutes</strong>. Deliveries start from <strong style={gras}>6:30 am</strong>.
        </p>
        <p style={p16}>
          It is for the client to check that the order conforms on receipt. Any discrepancy must be reported immediately on delivery, or within the following 2 hours by email.
        </p>
        <p style={pStyle}>
          For food safety reasons, no food product can be taken back or exchanged once handed over to the client.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Article 7, Cancellation</h2>
        <p style={p16}>
          Cancellation is free of charge up to <strong style={gras}>2 working days before the delivery date, before 10 am</strong>. For drinks-only orders, cancellation is possible until 5 pm on the day before delivery.
        </p>
        <p style={pStyle}>
          After that point, the full amount of the order remains due. Where cancellation occurs on the day itself, no credit note or refund can be granted.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Article 8, Equipment and force majeure</h2>
        <p style={p16}>
          Any equipment lent by L&apos;Écrin Traiteur (dishes, stands, thermoses) must be returned clean within <strong style={gras}>72 hours</strong>. Damage or loss will be charged to the client at replacement value.
        </p>
        <p style={pStyle}>
          L&apos;Écrin Traiteur cannot be held liable in cases of force majeure (natural disaster, strike, epidemic, infrastructure failure) making performance impossible. In such a case, sums paid will be refunded or a credit note issued.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Article 9, Personal data (GDPR)</h2>
        <p style={pStyle}>
          Personal data collected in the course of the commercial relationship is processed in accordance with the General Data Protection Regulation (GDPR). The client has rights of access, rectification, erasure and portability over their data. To exercise these rights, contact L&apos;Écrin Traiteur at commercial@lecrin-traiteur.fr or by post at 2, Allée des Bergeronnettes, 92150 Suresnes, France. For more information, see our{' '}
          <a href="/en/confidentialite" style={{ color: 'var(--accent-deep)', textDecoration: 'none' }}>Privacy Policy</a>.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Article 9bis, Penalties for infringement of intellectual property rights</h2>
        <p style={p16}>
          <strong style={gras}>In the event of infringement</strong> of the intellectual property rights of L&apos;Écrin Traiteur, including but not limited to the unauthorised reproduction of photographs, content or images, the infringer will be liable for:
        </p>
        <p style={p16}>
          • Damages equal at least to the commercial value of the unpaid usage licences;<br />
          • Compensation for lost earnings and moral prejudice;<br />
          • The costs of the action (lawyers, bailiff, expert reports);<br />
          • Criminal penalties under articles L.335-2 et seq. of the French Intellectual Property Code (up to 3 years&apos; imprisonment and a €300,000 fine).
        </p>
        <p style={p16}>
          L&apos;Écrin Traiteur reserves the right to bring actions for counterfeiting, unfair competition, commercial parasitism or any other appropriate action before any competent court. An infringement will be presumed where photographs are used without written authorisation.
        </p>
        <p style={pStyle}>
          The provisions of this article also apply to attempted infringement, complicity, and incitement to infringe intellectual property rights.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Article 9ter, Extended limitations of liability</h2>
        <p style={p16}>
          <strong style={gras}>L&apos;Écrin Traiteur accepts no liability</strong> in the event of:
        </p>
        <p style={p16}>
          • Breach of these terms by the client and the consequences flowing from it;<br />
          • Damage caused by unauthorised use of the content of the site;<br />
          • Loss of business or of clientele resulting from failure to observe the restrictions on use;<br />
          • Harm to the client&apos;s reputation or image where content from the site is shared without authorisation.
        </p>
        <p style={pStyle}>
          L&apos;Écrin Traiteur cannot be held responsible for the legal or commercial consequences of failing to observe the prohibitions set out in these terms.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Article 9quater, Security and confidentiality of the content</h2>
        <p style={p16}>
          The photographs and images shown on the site represent the creative work and the innovations of L&apos;Écrin Traiteur. Their unauthorised disclosure could compromise the company&apos;s commercial and professional secrets.
        </p>
        <p style={pStyle}>
          The client undertakes to treat the content of the site as confidential information and not to disclose it to third parties without the prior written authorisation of L&apos;Écrin Traiteur. This obligation of confidentiality extends for a period of <strong style={gras}>5 years after the last use</strong> of the content.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Article 9quinquies, Use of photographs and content by the company</h2>
        <p style={p16}>
          <strong style={gras}>Save for explicit written agreement to the contrary</strong>, L&apos;Écrin Traiteur reserves the right to use the photographs, videos and visual content published on its site and in its commercial materials in perpetuity, worldwide and by any means (digital, printed, social networks, advertising campaigns).
        </p>
        <p style={pStyle}>
          The client acknowledges that the content of the site constitutes a protected original creation and that reproducing it without authorisation will engage their legal and civil liability.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Article 9sexies, Technical and security measures</h2>
        <p style={p16}>
          L&apos;Écrin Traiteur reserves the right to put in place and strengthen technical measures protecting the content (watermarking, metadata, CSS protection, download limits) without prior notice.
        </p>
        <p style={p16}>
          Any circumvention, overriding or neutralisation of these measures is formally prohibited and constitutes a criminal offence under French law (article L.331-5 of the French Intellectual Property Code).
        </p>
        <p style={pStyle}>
          L&apos;Écrin Traiteur keeps logs and access data in order to verify compliance with these terms, and may use them as evidence in the event of a dispute.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Article 9septies, Verification of contractual obligations</h2>
        <p style={p16}>
          The client accepts that L&apos;Écrin Traiteur may verify at any time that the restrictions on use set out in these terms are being observed. Such verification may include:
        </p>
        <p style={p16}>
          • Inspection of how the content is used (reverse image search, audit);<br />
          • A request for proof of consent where use is detected;<br />
          • Removal of content used without authorisation, through legal notices or DMCA requests.
        </p>
        <p style={pStyle}>
          Where there is doubt as to compliance, L&apos;Écrin Traiteur may serve formal notice on the client before bringing any legal action.
        </p>
      </div>

      <div style={{ ...sectionStyle, borderBottom: 'none', paddingBottom: 0, marginBottom: 0 }}>
        <h2 style={h2Style}>Article 10, Governing law and jurisdiction</h2>
        <p style={p16}>
          These terms are governed by French law. In the event of a dispute between L&apos;Écrin Traiteur and a professional client, and failing an amicable resolution within 30 days, the Tribunal de Commerce de Nanterre shall have sole jurisdiction.
        </p>
        <p style={pStyle}>
          The provisions relating to intellectual property rights (articles 2bis to 9septies) remain valid and enforceable after termination or the end of the commercial relationship, and do so indefinitely in respect of infringements established.
        </p>
      </div>

    </LegalTemplate>
  )
}
