'use client'

import LegalTemplate, { h2Style, pStyle, sectionStyle } from '../../components/LegalTemplate'

export default function Cookies() {
  return (
    <LegalTemplate title="Politique de Cookies" updated="Mai 2026">

      <div style={{ ...pStyle, marginBottom: '48px', padding: '20px 24px', background: 'var(--bg-secondary)', borderLeft: '2px solid var(--accent)' }}>
        Lors de votre visite sur le site lecrin-traiteur.fr, des cookies peuvent être déposés sur votre navigateur. Cette page vous explique ce que sont les cookies, lesquels nous utilisons et comment les gérer.
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Qu'est-ce qu'un cookie ?</h2>
        <p style={pStyle}>
          Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de la visite d'un site web. Il permet au site de reconnaître votre navigateur lors d'une prochaine visite et de mémoriser certaines informations (préférences, session, statistiques). Les cookies ne peuvent pas exécuter de programmes ni transmettre de virus.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Cookies que nous utilisons</h2>
        <p style={{ ...pStyle, marginBottom: '24px' }}>
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500, display: 'block', marginBottom: '6px' }}>Cookies strictement nécessaires</strong>
          Ces cookies sont indispensables au fonctionnement du site. Ils vous permettent de naviguer et d'utiliser les fonctionnalités de base (formulaires, sécurité). Ils ne collectent pas d'informations personnelles à des fins commerciales et ne peuvent pas être désactivés.
        </p>
        <p style={{ ...pStyle, marginBottom: '24px' }}>
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500, display: 'block', marginBottom: '6px' }}>Cookies de mesure d'audience (analytiques)</strong>
          Ces cookies nous permettent de comprendre comment les visiteurs interagissent avec notre site (pages les plus consultées, durée de visite, provenance du trafic). Les données collectées sont anonymisées et agrégées. Ils nous aident à améliorer notre site et nos contenus. Leur dépôt requiert votre consentement.
        </p>
        <p style={pStyle}>
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500, display: 'block', marginBottom: '6px' }}>Cookies tiers</strong>
          Aucun cookie publicitaire ou de suivi comportemental à des fins de remarketing n'est déposé sur notre site. Nous ne partageons pas vos données de navigation avec des régies publicitaires.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Durée de conservation</h2>
        <p style={pStyle}>
          Les cookies analytiques sont conservés pour une durée maximale de <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>13 mois</strong> à compter de leur dépôt, conformément aux recommandations de la CNIL. À l'expiration de ce délai, votre consentement est à nouveau sollicité.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Gérer vos préférences</h2>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          Vous pouvez à tout moment modifier vos préférences en matière de cookies de plusieurs façons :
        </p>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Via notre bandeau de cookies :</strong> lors de votre première visite, un bandeau vous invite à accepter ou refuser les cookies non nécessaires. Vous pouvez revenir sur ce choix à tout moment.
        </p>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Via les paramètres de votre navigateur :</strong> vous pouvez configurer votre navigateur pour bloquer ou supprimer les cookies. Voici les liens vers les instructions des principaux navigateurs :<br />
          Google Chrome : chrome://settings/cookies<br />
          Firefox : about:preferences#privacy<br />
          Safari : Préférences &gt; Confidentialité<br />
          Microsoft Edge : edge://settings/privacy
        </p>
        <p style={pStyle}>
          Notez que la désactivation de certains cookies peut affecter votre expérience de navigation et limiter certaines fonctionnalités du site.
        </p>
      </div>

      <div style={{ ...sectionStyle, borderBottom: 'none', paddingBottom: 0, marginBottom: 0 }}>
        <h2 style={h2Style}>Contact</h2>
        <p style={pStyle}>
          Pour toute question relative à notre utilisation des cookies ou pour exercer vos droits, contactez-nous à : commercial@lecrin-traiteur.fr ou consultez notre{' '}
          <a href="/confidentialite" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Politique de confidentialité</a>.
        </p>
      </div>

    </LegalTemplate>
  )
}
