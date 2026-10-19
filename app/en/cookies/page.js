'use client'

import LegalTemplate, { h2Style, pStyle, sectionStyle } from '../../../components/LegalTemplate'
import AvisTraduction from '../../../components/AvisTraduction'
import ConsentPreferencesButton from '../../../components/ConsentPreferencesButton'

const gras = { color: 'var(--text-primary)', fontWeight: 500 }
const sousTitre = { ...gras, display: 'block', marginBottom: '6px' }

export default function CookiePolicy() {
  return (
    <LegalTemplate title="Cookie Policy" updated="October 2026">

      <AvisTraduction lien="/cookies" />

      <div style={{ ...pStyle, marginBottom: '48px', padding: '20px 24px', background: 'var(--bg-secondary)', borderLeft: '2px solid var(--accent)' }}>
        When you visit lecrin-traiteur.fr, cookies may be stored in your browser. This page explains what cookies are, which ones we use and how to manage them.
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>What is a cookie?</h2>
        <p style={pStyle}>
          A cookie is a small text file placed on your device (computer, tablet, smartphone) when you visit a website. It lets the site recognise your browser on a later visit and remember certain information (preferences, session, statistics). Cookies cannot run programs or carry viruses.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Cookies we use</h2>
        <p style={{ ...pStyle, marginBottom: '24px' }}>
          <strong style={sousTitre}>Strictly necessary cookies</strong>
          These cookies are essential for the site to work. They let you browse and use the basic features (forms, security). They collect no personal information for commercial purposes and cannot be switched off.
        </p>
        <p style={{ ...pStyle, marginBottom: '24px' }}>
          <strong style={sousTitre}>Audience measurement cookies (analytics)</strong>
          These cookies let us understand how visitors use the site: pages viewed, time spent, where the traffic comes from, the path taken to a quote request. We use Google Analytics and PostHog (hosted in the European Union), which may also record how a visit unfolds in order to spot what gets in the way. They are on by default; you may refuse them at any time (see &laquo;&nbsp;Managing your preferences&nbsp;&raquo;). When you send us a request (quote, contact, catalogue), your path through the site is linked to the email address you give us, so that we can prepare a better answer. Your approximate location (town) is inferred from your connection; your IP address is not retained.
        </p>
        <p style={pStyle}>
          <strong style={sousTitre}>Advertising measurement cookies</strong>
          We run ads on Google. Google Ads places a cookie that tells us whether a visit coming from an ad led to a quote request. You may refuse it at any time (see &laquo;&nbsp;Managing your preferences&nbsp;&raquo;). We also use Leadfeeder and Leadinfo, which recognise the company a business visitor&apos;s network belongs to; they do not identify individuals.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>How long they are kept</h2>
        <p style={pStyle}>
          Measurement cookies are kept for a maximum of <strong style={gras}>13 months</strong> from the date they are placed, in line with the recommendations of the CNIL, the French data protection authority. If you refuse them, your refusal is kept on this device indefinitely.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Managing your preferences</h2>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          You can change your cookie preferences at any time, in several ways:
        </p>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          <strong style={gras}>On this page:</strong> the button below refuses audience-measurement and advertising cookies on this device, and deletes those already placed. Your refusal is remembered; you can change your mind at any time.
        </p>
        <div style={{ marginBottom: '24px' }}>
          <ConsentPreferencesButton />
        </div>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          <strong style={gras}>Through your browser settings:</strong> you can set your browser to block or delete cookies. Here are the paths for the main browsers:<br />
          Google Chrome: chrome://settings/cookies<br />
          Firefox: about:preferences#privacy<br />
          Safari: Preferences &gt; Privacy<br />
          Microsoft Edge: edge://settings/privacy
        </p>
        <p style={pStyle}>
          Note that switching off certain cookies may affect your browsing experience and limit some features of the site.
        </p>
      </div>

      <div style={{ ...sectionStyle, borderBottom: 'none', paddingBottom: 0, marginBottom: 0 }}>
        <h2 style={h2Style}>Contact</h2>
        <p style={pStyle}>
          For any question about our use of cookies, or to exercise your rights, write to us at commercial@lecrin-traiteur.fr or see our{' '}
          <a href="/en/confidentialite" style={{ color: 'var(--accent-deep)', textDecoration: 'none' }}>Privacy Policy</a>.
        </p>
      </div>

    </LegalTemplate>
  )
}
