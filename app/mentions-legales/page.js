'use client'

import LegalTemplate, { h2Style, h3Style, pStyle, sectionStyle } from '../../components/LegalTemplate'

export default function MentionsLegales() {
  return (
    <LegalTemplate title="Mentions Légales" updated="Mai 2026">

      <div style={sectionStyle}>
        <h2 style={h2Style}>Éditeur du site</h2>
        <p style={pStyle}>
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Dénomination sociale :</strong> L'ÉCRIN DES TERROIRS<br />
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Nom commercial :</strong> L'Écrin Traiteur<br />
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Forme juridique :</strong> Société par Actions Simplifiée à associé unique (SASU)<br />
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>SIREN :</strong> 100 102 672<br />
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>SIRET :</strong> 100 102 672 00019<br />
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Numéro de TVA intracommunautaire :</strong> FR05100102672<br />
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Siège social :</strong> 2, Allée des Bergeronnettes, 92150 Suresnes<br />
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Adresse opérationnelle :</strong> 63 bis rue de Sèvres, 92100 Boulogne-Billancourt<br />
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Téléphone :</strong> 01 74 54 23 10<br />
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Email :</strong> commercial@lecrin-traiteur.fr<br />
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Directeur de la publication :</strong> Ramy ABDELATY
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Hébergeur</h2>
        <p style={pStyle}>
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Société :</strong> Vercel Inc.<br />
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Adresse :</strong> 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis<br />
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Site :</strong> vercel.com
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Propriété intellectuelle</h2>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          L'ensemble du contenu de ce site (textes, photographies, images, logos, graphismes) est la propriété exclusive de L'Écrin Traiteur ou de ses partenaires, et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
        </p>
        <p style={pStyle}>
          Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable de L'Écrin Traiteur.
        </p>
        <p style={{ ...pStyle, marginTop: '16px' }}>
          Le site constitue en outre une <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>base de données</strong> au sens de l'article L.341-1 du Code de la propriété intellectuelle : tarifs, quantités de référence, budgets par effectif, compositions et guides y sont rassemblés et vérifiés au prix d'un investissement substantiel. L'Écrin Traiteur en est le producteur et bénéficie du droit <em>sui generis</em> de l'article L.342-1, indépendamment du droit d'auteur. L'extraction ou la réutilisation d'une partie substantielle de ce contenu, comme l'extraction répétée de parties non substantielles, sont interdites et sanctionnées par l'article L.343-1 (trois ans d'emprisonnement et 300 000 € d'amende). Le détail figure à l'article 2quinquies des{' '}
          <a href="/cgv" style={{ color: 'var(--accent-deep)', textDecoration: 'none' }}>conditions générales de vente</a>.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Limitation de responsabilité</h2>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          L'Écrin Traiteur s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Cependant, nous ne pouvons garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.
        </p>
        <p style={pStyle}>
          L'Écrin Traiteur décline toute responsabilité pour les dommages directs ou indirects qui pourraient résulter de l'accès au site ou de l'utilisation des informations qui y sont contenues.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Données personnelles</h2>
        <p style={pStyle}>
          Les informations recueillies via les formulaires de contact ou de devis font l'objet d'un traitement informatique destiné à la gestion de votre demande. Pour en savoir plus sur la gestion de vos données personnelles et exercer vos droits, consultez notre{' '}
          <a href="/confidentialite" style={{ color: 'var(--accent-deep)', textDecoration: 'none' }}>Politique de confidentialité</a>.
        </p>
      </div>

      <div style={{ ...sectionStyle, borderBottom: 'none', paddingBottom: 0, marginBottom: 0 }}>
        <h2 style={h2Style}>Droit applicable</h2>
        <p style={pStyle}>
          Le présent site et ses mentions légales sont soumis au droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux français seront seuls compétents.
        </p>
      </div>

    </LegalTemplate>
  )
}
