'use client'

import LegalTemplate, { h2Style, h3Style, pStyle, sectionStyle } from '../../components/LegalTemplate'

export default function CGV() {
  return (
    <LegalTemplate title="Conditions Générales de Vente" updated="Mai 2026">

      <div style={{ ...pStyle, marginBottom: '48px', padding: '20px 24px', background: 'var(--bg-secondary)', borderLeft: '2px solid var(--accent)' }}>
        Tout achat ou commande auprès de L'Écrin Traiteur implique l'adhésion entière et sans réserve du client aux présentes conditions générales de vente. Les présentes CGV peuvent être modifiées à tout moment ; les conditions applicables sont celles en vigueur à la date de la commande.
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Article 1, Champ d'application</h2>
        <p style={pStyle}>
          Les présentes Conditions Générales de Vente s'appliquent à toutes les prestations de restauration événementielle proposées par L'Écrin Traiteur (L'Écrin des Terroirs SASU, SIRET 100 102 672 00019) à destination de clients professionnels (entreprises, associations, collectivités) situés en Île-de-France. Elles régissent l'ensemble des relations contractuelles entre L'Écrin Traiteur et ses clients.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Article 2, Offre de services</h2>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          L'Écrin Traiteur propose des prestations de restauration événementielle pour les entreprises : petits-déjeuners, pauses gourmandes, plateaux repas, cocktails, buffets et événements saisonniers, élaborés avec des artisans locaux sélectionnés.
        </p>
        <p style={pStyle}>
          Les offres sont proposées sous réserve de disponibilité des produits. Les visuels présentés sur le site sont donnés à titre indicatif. L'Écrin Traiteur se réserve le droit de substituer un produit équivalent en cas d'indisponibilité, après information du client.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Article 3, Modalités de commande</h2>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          Les commandes peuvent être passées par téléphone au 01 74 54 23 10 ou par email à commercial@lecrin-traiteur.fr. Toute commande doit être validée avant <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>12h00 la veille</strong> de la livraison souhaitée.
        </p>
        <p style={pStyle}>
          Le montant minimum de commande est fixé à <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>50 € HT</strong>. Toute commande confirmée par le client vaut acceptation des présentes CGV et des tarifs en vigueur.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Article 4, Hygiène et allergènes</h2>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          Les produits sont livrés conformément aux normes d'hygiène alimentaire en vigueur. À réception, les produits réfrigérés doivent être conservés entre 0°C et 4°C et consommés dans les <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>4 heures</strong> suivant la livraison. À température ambiante, la consommation ne doit pas excéder <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>2 heures</strong>.
        </p>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          L'Écrin Traiteur décline toute responsabilité en cas de non-respect de ces conditions de conservation par le client.
        </p>
        <p style={pStyle}>
          La liste des allergènes présents dans nos produits est disponible sur demande à l'adresse commercial@lecrin-traiteur.fr. Il appartient au client de nous informer de tout régime alimentaire particulier ou allergie lors de la commande.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Article 5, Tarifs et paiement</h2>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          Tous les prix sont indiqués en euros hors taxes (HT) et s'entendent avec application de la TVA au taux en vigueur. Un <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>forfait fixe de 28 € HT</strong> est appliqué pour toute livraison à Paris intramuros et dans les communes limitrophes. Des frais spécifiques peuvent s'appliquer pour d'autres zones d'Île-de-France, communiqués lors du devis.
        </p>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          Le règlement s'effectue par virement bancaire ou carte bancaire. Les <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>factures sont payables à 30 jours fin de mois</strong> à compter de la date d'émission.
        </p>
        <p style={pStyle}>
          En cas de retard de paiement, des pénalités seront appliquées au taux de la Banque Centrale Européenne majoré de 10 points, ainsi qu'une indemnité forfaitaire pour frais de recouvrement de 40 €, conformément à l'article L.441-6 du Code de commerce.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Article 6, Livraison</h2>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          La livraison est effectuée selon le créneau convenu lors de la commande, avec une tolérance de <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>30 minutes</strong>. Les livraisons débutent dès <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>6h30</strong>.
        </p>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          Il appartient au client de vérifier la conformité de la commande à la réception. Toute anomalie doit être signalée immédiatement lors de la livraison ou dans les 2 heures suivantes par email.
        </p>
        <p style={pStyle}>
          Aucun produit alimentaire ne pourra être repris ni échangé pour des raisons de sécurité sanitaire après remise au client.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Article 7, Annulation</h2>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          Toute annulation est sans frais jusqu'à <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>2 jours ouvrés avant la date de livraison, avant 10h00</strong>. Pour les commandes de boissons uniquement, l'annulation est possible jusqu'à la veille de la livraison avant 17h00.
        </p>
        <p style={pStyle}>
          Passé ce délai, la totalité du montant de la commande reste due. En cas d'annulation le jour même, aucun avoir ni remboursement ne pourra être accordé.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Article 8, Matériel et force majeure</h2>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          Tout matériel prêté par L'Écrin Traiteur (plats, présentoirs, thermos) doit être retourné propre dans un délai de <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>72 heures</strong>. Les dégradations ou pertes seront facturées au client à leur valeur de remplacement.
        </p>
        <p style={pStyle}>
          L'Écrin Traiteur ne pourra être tenu responsable en cas de force majeure (catastrophe naturelle, grève, épidémie, panne d'infrastructure) rendant impossible l'exécution de la prestation. Dans ce cas, les sommes versées seront remboursées ou un avoir sera émis.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Article 9, Données personnelles (RGPD)</h2>
        <p style={pStyle}>
          Les données personnelles collectées dans le cadre de la relation commerciale sont traitées conformément au Règlement Général sur la Protection des Données (RGPD). Le client dispose d'un droit d'accès, de rectification, de suppression et de portabilité de ses données. Pour exercer ces droits, contacter L'Écrin Traiteur à l'adresse : commercial@lecrin-traiteur.fr ou par courrier : 2, Allée des Bergeronnettes, 92150 Suresnes. Pour plus d'informations, consultez notre{' '}
          <a href="/confidentialite" style={{ color: 'var(--accent-deep)', textDecoration: 'none' }}>Politique de confidentialité</a>.
        </p>
      </div>

      <div style={{ ...sectionStyle, borderBottom: 'none', paddingBottom: 0, marginBottom: 0 }}>
        <h2 style={h2Style}>Article 10, Droit applicable et juridiction</h2>
        <p style={pStyle}>
          Les présentes CGV sont soumises au droit français. En cas de litige entre L'Écrin Traiteur et un client professionnel, et à défaut de résolution amiable dans un délai de 30 jours, le <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Tribunal de Commerce de Nanterre</strong> sera seul compétent.
        </p>
      </div>

    </LegalTemplate>
  )
}
