/*
  Page /creations/personnalisation, textes anglais.

  Surcouche de texte seulement : les six photos de familles restent lues dans
  la page française. Aucun prix n'apparaît sur cette page.

  Point tenu mot pour mot comme en français : « aucun minimum, aucun
  engagement » sur cette page-ci. C'est un engagement commercial, pas une
  formule, et il doit dire la même chose dans les deux langues.

  Les href gardent leur chemin français et passent par reecrireLiensEnDans().
*/

export const EN_PERSO = {
  /* ── Hero ── */
  heroAlt: "Personalisation at L'Écrin Traiteur",
  h1a: 'Make your events',
  h1b: 'your own.',
  heroDesc: 'Exceptional sweet things, designed in your image, down to the smallest detail.',
  heroCta: 'See what we can do →',
  fil: 'Personalisation',
  accueil: 'Home',

  /* ── Ce que nous personnalisons ── */
  famillesEyebrow: 'What we personalise',
  familles: [
    { nom: 'Macarons',    desc: 'Colours, flavours and branding.' },
    { nom: 'Chocolates',  desc: 'Squares, bars and assortments.' },
    { nom: 'Cookies',     desc: 'Flavours, packaging and personalisation.' },
    { nom: 'Madeleines',  desc: 'Flavours, gift boxes and labels.' },
    { nom: 'Number Cake', desc: 'Numbers and letters made to size.' },
    { nom: 'Packaging',   desc: 'Boxes, ribbons, stickers and finishes, plus thank-you cards and bespoke messages.' },
  ],

  /* ── Accompagnement ── */
  processEyebrow: 'Your identity, our craft',
  processTitreA: 'A service built',
  processTitreB: 'around you.',
  processDesc: 'From the design to the delivery, we build one-off touches that reflect your image and stay in people’s minds.',
  etapes: [
    'Your logo and your identity',
    'Choosing the flavours',
    'The packaging and the finishes',
    'The message that sounds like you',
    'Delivered, turnkey',
  ],

  /* ── Bandeau bas ── */
  barTexte: 'Built for your offsites, product launches, client gifts and corporate events.',
  barCta: 'Get a tailored quote →',

  /* ── Formulaire ── */
  devisTitre: 'A personalisation project in Paris or Île-de-France?',
  devisSousTitre: 'Describe your project and we will come back to you with a proposal within 24 hours.',

  /* ── Schéma ── */
  jsonLdName: 'Personalisation',

  /* ── Article SEO ── */
  seoArticle: `
  <h2>Personalised sweet creations for companies in Paris</h2>
  <p><strong>Personalisation</strong> sits at the heart of what we do: it is how a selection of artisan products becomes a one-off creation that carries your identity. From your company colours to the message you want to get across, every detail counts. L'Écrin Traiteur designs your personalisation projects across Paris and Île-de-France.</p>

  <h2>Macarons, madeleines, chocolates: six families to personalise</h2>
  <p>Our partner makers produce creations that adapt easily: <strong>macarons in your brand colours</strong>, <strong>madeleines packaged to your brand guidelines</strong>, <strong>chocolates matched to your shades</strong>, number cakes made to size, co-designed packaging, bespoke cards and messages. Each family opens up endless ways to adapt.</p>

  <h2>A genuinely bespoke service, in 5 steps</h2>
  <p>From your logo to the final delivery, we handle every stage: working in your visual identity, choosing the flavours and the formats, designing the packaging and the finishes, writing the message that sounds like you, and delivering turnkey. Nothing is left to chance.</p>

  <h2>Personalisation for product launches, offsites and client gifts</h2>
  <p>Your personalised creations belong wherever you want to make an impression: a product launch, a team offsite, a prestigious client gift, a corporate event people remember. Every occasion becomes a chance to strengthen your brand and impress your guests.</p>

  <h2>Asking for a personalisation project in Paris</h2>
  <p>Describe what you have in mind — format, volume, timing, budget — and our team puts together a tailored proposal within <strong>24 hours</strong>. Company invoicing showing VAT. No minimum, no commitment: we work at the pace of your projects, from the smallest to the most ambitious.</p>
  `,
}
