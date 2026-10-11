'use client'

import LegalTemplate, { h2Style, pStyle, sectionStyle } from '../../components/LegalTemplate'
import ConsentPreferencesButton from '../../components/ConsentPreferencesButton'

export default function Cookies() {
  return (
    <LegalTemplate title="Politique de Cookies" updated="Octobre 2026">

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
          Ces cookies nous permettent de comprendre comment les visiteurs utilisent le site : pages consultées, durée de visite, provenance du trafic, parcours jusqu'à la demande de devis. Nous utilisons Google Analytics et PostHog (hébergé dans l'Union européenne), qui peut aussi enregistrer le déroulé d'une visite pour repérer ce qui gêne la navigation. Ils sont actifs par défaut ; vous pouvez les refuser à tout moment (voir « Gérer vos préférences »). Lorsque vous nous envoyez une demande (devis, contact, catalogue), votre parcours sur le site est rattaché à l'adresse e-mail que vous nous communiquez, afin de mieux préparer notre réponse. Votre localisation approximative (ville) est déduite de votre connexion ; votre adresse IP n'est pas conservée.
        </p>
        <p style={pStyle}>
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500, display: 'block', marginBottom: '6px' }}>Cookies de mesure publicitaire</strong>
          Nous diffusons des annonces sur Google. Google Ads dépose un cookie qui nous indique si une visite venue d'une annonce a abouti à une demande de devis. Vous pouvez le refuser à tout moment (voir « Gérer vos préférences »). Nous utilisons aussi Leadfeeder et Leadinfo, qui reconnaissent l'entreprise à laquelle appartient le réseau d'un visiteur professionnel ; ils n'identifient pas les personnes.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Durée de conservation</h2>
        <p style={pStyle}>
          Les cookies de mesure sont conservés pour une durée maximale de <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>13 mois</strong> à compter de leur dépôt, conformément aux recommandations de la CNIL. Si vous les refusez, votre refus est conservé sur cet appareil sans limite de durée.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Gérer vos préférences</h2>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          Vous pouvez à tout moment modifier vos préférences en matière de cookies de plusieurs façons :
        </p>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Sur cette page :</strong> le bouton ci-dessous refuse les cookies de mesure d'audience et de publicité sur cet appareil, et efface ceux déjà déposés. Votre refus est conservé ; vous pouvez revenir dessus à tout moment.</p>
        <div style={{ marginBottom: '24px' }}>
          <ConsentPreferencesButton />
        </div>
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
          <a href="/confidentialite" style={{ color: 'var(--accent-deep)', textDecoration: 'none' }}>Politique de confidentialité</a>.
        </p>
      </div>

    </LegalTemplate>
  )
}
