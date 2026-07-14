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
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          Les offres sont proposées sous réserve de disponibilité des produits. Les visuels présentés sur le site (photographies, illustrations, compositions) sont donnés à titre indicatif. L'Écrin Traiteur se réserve le droit de substituer un produit équivalent en cas d'indisponibilité, après information du client.
        </p>
        <p style={pStyle}>
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Tous les visuels, photographies et images publiés sur le site et dans les supports commerciaux sont la propriété exclusive de L'Écrin Traiteur</strong> ou de ses partenaires autorisés. Leur reproduction, même partielle, sous quelque forme et par quelque moyen que ce soit (numérique, imprimé, capture d'écran, téléchargement, impression, projection), est strictement interdite sans autorisation écrite préalable. Cela s'applique à des fins commerciales, professionnelles, académiques, promotionnelles ou personnelles.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Article 2bis, Propriété intellectuelle et droits d'auteur</h2>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Tous les contenus du site</strong> (textes, images, photographies, vidéos, graphiques, compositions, mises en page, codes, logos, marques, designs) sont la propriété exclusive de L'Écrin Traiteur ou sont utilisés avec l'autorisation de leurs propriétaires respectifs. Ces contenus sont protégés par les dispositions du Code de la Propriété Intellectuelle français et par les lois internationales sur les droits d'auteur.
        </p>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>L'accès au site confère un droit de consultation personnelle et non-commercial uniquement.</strong> Tout droit de reproduction, de modification, d'adaptation, de traduction, d'extraction, de compilation ou de dérivation est expressément réservé à L'Écrin Traiteur.
        </p>
        <p style={pStyle}>
          La tentative de contournement des mesures techniques de protection (scraping, téléchargement en masse, utilisation de bots) est formellement interdite et pourra donner lieu à des poursuites judiciaires.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Article 2ter, Interdictions d'utilisation et de réutilisation des contenus</h2>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Le client s'engage expressément à :</strong>
        </p>
        <p style={{ ...pStyle, marginBottom: '8px' }}>
          • <strong>Ne pas</strong> reproduire, copier, télécharger, imprimer, sauvegarder ou archiver les photographies et images du site, sauf à titre strictement privé et non-transmissible ;
        </p>
        <p style={{ ...pStyle, marginBottom: '8px' }}>
          • <strong>Ne pas</strong> modifier, adapter, transformer, dénaturer ou altérer les visuels, photographies ou contenus sous quelque forme que ce soit ;
        </p>
        <p style={{ ...pStyle, marginBottom: '8px' }}>
          • <strong>Ne pas</strong> utiliser les photographies ou visuels dans un contexte commercial, promotionnel, publicitaire ou à titre professionnel sans autorisation écrite explicite ;
        </p>
        <p style={{ ...pStyle, marginBottom: '8px' }}>
          • <strong>Ne pas</strong> intégrer, importer ou réutiliser les images dans d'autres sites, plateformes, réseaux sociaux, applications ou supports de distribution, y compris à des fins de portfolio, de présentation ou de démonstration ;
        </p>
        <p style={{ ...pStyle, marginBottom: '8px' }}>
          • <strong>Ne pas</strong> utiliser les contenus pour entraîner des modèles d'intelligence artificielle, des systèmes de machine learning, ou toute technologie de traitement automatisé sans consentement écrit ;
        </p>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          • <strong>Ne pas</strong> revendiquer la paternité, l'authorship ou la création des visuels et contenus, ni les présenter comme étant de son propre travail.
        </p>
        <p style={pStyle}>
          L'utilisation des contenus dans des buts de plagiat, de contrefaçon, de confusion de marque ou d'usurpation d'identité est strictement interdite et engagera la responsabilité civile et pénale du contrevenant.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Article 2quater, Limitation de l'utilisation personnelle</h2>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          La consultation du site à titre personnel n'autorise pas le client à :
        </p>
        <p style={{ ...pStyle, marginBottom: '8px' }}>
          • Partager les photographies auprès de tiers de manière à contourner l'accès au site ;
        </p>
        <p style={{ ...pStyle, marginBottom: '8px' }}>
          • Utiliser les visuels pour créer de contenus dérivés (mockups, compositions, collages, retouches) ;
        </p>
        <p style={{ ...pStyle, marginBottom: '8px' }}>
          • Transférer, céder ou donner accès à un tiers aux photographies téléchargées ;
        </p>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          • Utiliser les contenus de manière répétitive ou systématique (scraping, archivage volontaire) ;
        </p>
        <p style={pStyle}>
          Toute violation de ces restrictions entraînera des dommages-intérêts proportionnés au préjudice subi, sans préjudice de toute action pénale.
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

      <div style={sectionStyle}>
        <h2 style={h2Style}>Article 9bis, Sanctions en cas de violation des droits de propriété intellectuelle</h2>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>En cas de violation</strong> des droits de propriété intellectuelle de L'Écrin Traiteur, y compris mais non limité à la reproduction non-autorisée de photographies, de contenus ou de visuels, le contrevenant sera tenu responsable de :
        </p>
        <p style={{ ...pStyle, marginBottom: '8px' }}>
          • Des dommages-intérêts égaux au minimum à la valeur commerciale des licences d'utilisation non-acquittées ;
        </p>
        <p style={{ ...pStyle, marginBottom: '8px' }}>
          • Des indemnités pour manque à gagner et préjudice moral ;
        </p>
        <p style={{ ...pStyle, marginBottom: '8px' }}>
          • Des frais de l'action (avocats, huissier, expertise) ;
        </p>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          • Des sanctions pénales conformément aux articles L.335-2 et suivants du Code de la Propriété Intellectuelle (jusqu'à 3 ans d'emprisonnement et 300 000 € d'amende).
        </p>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          L'Écrin Traiteur se réserve le droit d'agir en contrefaçon, en concurrence déloyale, en parasitisme commercial ou en toute autre action appropriée devant tous les tribunaux compétents. L'existence d'une violation sera présumée en cas d'usage des photographies sans autorisation écrite.
        </p>
        <p style={pStyle}>
          Les dispositions de cet article s'appliquent également en cas de tentative de violation, de complicité ou d'incitation à violer les droits de propriété intellectuelle.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Article 9ter, Limitations de responsabilité accrues</h2>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>L'Écrin Traiteur décline toute responsabilité</strong> en cas :
        </p>
        <p style={{ ...pStyle, marginBottom: '8px' }}>
          • De violation des CGV par le client et des conséquences qui en découleraient ;
        </p>
        <p style={{ ...pStyle, marginBottom: '8px' }}>
          • De dommages causés par l'usage non-autorisé des contenus du site ;
        </p>
        <p style={{ ...pStyle, marginBottom: '8px' }}>
          • De pertes d'exploitation ou de clientèle résultant du non-respect des restrictions d'utilisation ;
        </p>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          • De préjudices à la réputation ou à l'image du client en cas de partage non-autorisé de contenus du site.
        </p>
        <p style={pStyle}>
          L'Écrin Traiteur ne saurait être tenue pour responsable des conséquences légales ou commerciales résultant du non-respect des interdictions énoncées dans les présentes CGV.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Article 9quater, Dispositions relatives à la sécurité et à la confidentialité des contenus</h2>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          Les photographies et visuels présentés sur le site représentent le travail créatif et les innovations de L'Écrin Traiteur. Leur divulgation non-autorisée pourrait compromettre les secrets commerciaux et professionnels de l'entreprise.
        </p>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          Le client s'engage à traiter les contenus du site comme des informations confidentielles et à ne pas les divulguer à des tiers sans autorisation préalable et écrite de L'Écrin Traiteur.
        </p>
        <p style={pStyle}>
          Cette obligation de confidentialité s'étend à une période de <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>5 ans après la dernière utilisation</strong> des contenus.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Article 9quinquies, Utilisation des photos et contenus par l'entreprise</h2>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Sauf accord écrit explicite contraire</strong>, L'Écrin Traiteur se réserve le droit d'utiliser les photographies, vidéos et contenus visuels publiés sur son site et ses supports commerciaux de manière perpétuelle, dans le monde entier et par tous les moyens (numériques, imprimés, réseaux sociaux, campagnes publicitaires).
        </p>
        <p style={pStyle}>
          Le client reconnaît que les contenus du site constituent une création originale protégée et que leur reproduction sans autorisation engagera sa responsabilité légale et civile.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Article 9sexies, Dispositions relatives aux mesures techniques et à la sécurité</h2>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          L'Écrin Traiteur se réserve le droit d'implémenter et de renforcer les mesures techniques de protection des contenus (watermarking, métadonnées, protection CSS, limitation du téléchargement) sans notification préalable.
        </p>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          Tout contournement, dépassement ou neutralisation de ces mesures est formellement interdit et constitue une violation pénale au titre du droit français (article L.331-5 du Code de la Propriété Intellectuelle).
        </p>
        <p style={pStyle}>
          L'Écrin Traiteur conserve des logs et données d'accès pour vérifier la conformité à ces CGV et pourra les utiliser comme preuve en cas de litige.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Article 9septies, Respect des obligations contractuelles renforcées</h2>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          Le client accepte que L'Écrin Traiteur puisse vérifier à tout moment le respect des restrictions d'utilisation énoncées dans les présentes CGV. Cette vérification peut inclure :
        </p>
        <p style={{ ...pStyle, marginBottom: '8px' }}>
          • L'inspection de l'usage des contenus (recherche par image inversée, audit) ;
        </p>
        <p style={{ ...pStyle, marginBottom: '8px' }}>
          • La demande de preuve du consentement en cas d'utilisation détectée ;
        </p>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          • Le retrait des contenus utilisés sans autorisation via notifications légales ou demandes DMCA.
        </p>
        <p style={pStyle}>
          En cas de doute sur le respect des obligations, L'Écrin Traiteur pourra mettre en demeure le client avant d'engager toute action judiciaire.
        </p>
      </div>

      <div style={{ ...sectionStyle, borderBottom: 'none', paddingBottom: 0, marginBottom: 0 }}>
        <h2 style={h2Style}>Article 10, Droit applicable et juridiction</h2>
        <p style={{ ...pStyle, marginBottom: '16px' }}>
          Les présentes CGV sont soumises au droit français. En cas de litige entre L'Écrin Traiteur et un client professionnel, et à défaut de résolution amiable dans un délai de 30 jours, le <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Tribunal de Commerce de Nanterre</strong> sera seul compétent.
        </p>
        <p style={pStyle}>
          <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Les dispositions relatives aux droits de propriété intellectuelle</strong> (articles 2bis à 9septies) restent valides et opposables en cas de résiliation ou fin de la relation commerciale, et ce indéfiniment pour les violations constatées.
        </p>
      </div>

    </LegalTemplate>
  )
}
