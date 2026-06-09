'use client'

import LegalTemplate, { h2Style, pStyle, sectionStyle } from '../../components/LegalTemplate'

export default function Confidentialite() {
  return (
    <LegalTemplate title="Politique de Confidentialité" updated="Mai 2026">

      <div style={{ ...pStyle, marginBottom: '48px', padding: '20px 24px', background: 'var(--bg-secondary)', borderLeft: '2px solid var(--accent)' }}>
        L'Écrin Traiteur attache une importance particulière à la protection de vos données personnelles. Cette politique décrit quelles données nous collectons, pourquoi et comment nous les utilisons, conformément au Règlement Général sur la Protection des Données (RGPD).
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Responsable du traitement</h2>
        <p style={pStyle}>
          Le responsable du traitement de vos données personnelles est :<br />
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>L'Écrin Traiteur</strong> — L'Écrin des Terroirs SASU<br />
          SIRET 100 102 672 00019<br />
          2, Allée des Bergeronnettes, 92150 Suresnes<br />
          contact@lecrindesterroirs.fr — 07 60 16 96 20
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Données collectées et finalités</h2>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          Nous collectons uniquement les données nécessaires à la gestion de votre relation avec L'Écrin Traiteur. Les données collectées et leurs finalités sont les suivantes :
        </p>
        <p style={pStyle}>
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Formulaire de contact :</strong> nom, prénom, email, téléphone, entreprise, message. Finalité : répondre à votre demande.<br /><br />
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Formulaire de devis :</strong> nom, prénom, email, téléphone, entreprise, effectif, date, type de prestation, budget. Finalité : établir un devis personnalisé.<br /><br />
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Données de navigation :</strong> adresse IP, pages visitées, durée de visite. Finalité : mesure d'audience et amélioration du site (voir notre politique de cookies).
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Base légale du traitement</h2>
        <p style={pStyle}>
          Le traitement de vos données personnelles repose sur les bases légales suivantes :<br /><br />
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Exécution d'un contrat</strong> ou de mesures précontractuelles (traitement des devis et commandes).<br />
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Intérêt légitime</strong> de l'entreprise (amélioration des services, relation commerciale).<br />
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Consentement</strong> pour les communications marketing, avec possibilité de retrait à tout moment.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Durée de conservation</h2>
        <p style={pStyle}>
          Vos données sont conservées pendant les durées suivantes :<br /><br />
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Données clients et commandes :</strong> 10 ans à compter de la fin de la relation commerciale (obligation légale comptable).<br />
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Demandes de contact sans suite :</strong> 3 ans à compter du dernier contact.<br />
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Données de navigation :</strong> 13 mois maximum.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Destinataires des données</h2>
        <p style={pStyle}>
          Vos données personnelles sont destinées exclusivement aux équipes de L'Écrin Traiteur dans le cadre de la gestion de votre demande. Elles ne sont jamais vendues ni cédées à des tiers à des fins commerciales. Elles peuvent être transmises à des prestataires techniques (hébergeur, outil d'emailing) dans le strict cadre de l'exécution de leurs missions, sous contrat de sous-traitance conforme au RGPD.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Vos droits</h2>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
        </p>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Droit d'accès :</strong> obtenir une copie de vos données.<br />
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Droit de rectification :</strong> corriger des données inexactes ou incomplètes.<br />
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Droit à l'effacement :</strong> demander la suppression de vos données.<br />
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Droit à la portabilité :</strong> recevoir vos données dans un format structuré.<br />
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Droit d'opposition :</strong> vous opposer à certains traitements.
        </p>
        <p style={pStyle}>
          Pour exercer ces droits, contactez-nous à : contact@lecrindesterroirs.fr ou par courrier : L'Écrin Traiteur, 2, Allée des Bergeronnettes, 92150 Suresnes. Nous nous engageons à répondre dans un délai d'un mois. En cas de réponse insatisfaisante, vous pouvez introduire une réclamation auprès de la <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>CNIL</strong> (www.cnil.fr).
        </p>
      </div>

      <div style={{ ...sectionStyle, borderBottom: 'none', paddingBottom: 0, marginBottom: 0 }}>
        <h2 style={h2Style}>Modifications de cette politique</h2>
        <p style={pStyle}>
          L'Écrin Traiteur se réserve le droit de modifier cette politique de confidentialité à tout moment. La date de dernière mise à jour est indiquée en haut de cette page. Nous vous encourageons à la consulter régulièrement.
        </p>
      </div>

    </LegalTemplate>
  )
}
