import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const PRESTATIONS = {
  'petit-dejeuner': 'Petit-déjeuner',
  'plateaux-repas': 'Plateaux repas',
  'cocktail-buffet': 'Cocktail / Buffet',
  'gouter': 'Goûter',
  'evenement-sur-mesure': 'Événement sur mesure',
  'autre': 'Autre demande',
}

export async function POST(request) {
  try {
    const body = await request.json()
    const { prestation, date, convives, ville, budget, message, nom, societe, email, telephone } = body

    if (!nom || !email) {
      return Response.json({ error: 'Champs requis manquants.' }, { status: 400 })
    }

    const prestationLabel = PRESTATIONS[prestation] || prestation || '—'
    const dateLabel = date
      ? new Date(date + 'T00:00:00').toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' })
      : '—'

    await resend.emails.send({
      from: 'L\'Écrin Traiteur <onboarding@resend.dev>',
      to: ['contact@lecrindesterroirs.fr'],
      replyTo: email,
      subject: `Nouvelle demande de devis — ${prestationLabel} · ${nom} (${societe})`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #FDFBF7;">
          <h2 style="font-family: Georgia, serif; font-weight: 400; color: #1A1A1A; border-bottom: 1px solid #E8DFD0; padding-bottom: 16px; margin-bottom: 8px;">
            Nouvelle demande de devis
          </h2>
          <p style="font-family: Georgia, serif; font-size: 20px; font-weight: 400; color: #E0A126; margin: 0 0 28px;">${prestationLabel}</p>

          <h3 style="font-family: sans-serif; font-size: 11px; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: #888; margin: 0 0 12px;">Détails du projet</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr><td style="padding: 8px 0; font-family: sans-serif; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.1em; width: 160px;">Date souhaitée</td><td style="padding: 8px 0; font-family: sans-serif; font-size: 14px; color: #1A1A1A;">${dateLabel}</td></tr>
            <tr><td style="padding: 8px 0; font-family: sans-serif; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.1em;">Nombre de convives</td><td style="padding: 8px 0; font-family: sans-serif; font-size: 14px; color: #1A1A1A;">${convives || '—'}</td></tr>
            <tr><td style="padding: 8px 0; font-family: sans-serif; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.1em;">Ville</td><td style="padding: 8px 0; font-family: sans-serif; font-size: 14px; color: #1A1A1A;">${ville || '—'}</td></tr>
            <tr><td style="padding: 8px 0; font-family: sans-serif; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.1em;">Budget estimé</td><td style="padding: 8px 0; font-family: sans-serif; font-size: 14px; color: #1A1A1A;">${budget || '—'}</td></tr>
          </table>

          ${message ? `
          <div style="margin-bottom: 24px; padding: 16px 20px; background: #FFFFFF; border-left: 3px solid #E0A126;">
            <p style="font-family: sans-serif; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 8px;">Détails du projet</p>
            <p style="font-family: sans-serif; font-size: 14px; color: #1A1A1A; line-height: 1.7; margin: 0;">${message.replace(/\n/g, '<br>')}</p>
          </div>` : ''}

          <h3 style="font-family: sans-serif; font-size: 11px; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: #888; margin: 0 0 12px;">Coordonnées</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-family: sans-serif; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.1em; width: 160px;">Nom</td><td style="padding: 8px 0; font-family: sans-serif; font-size: 14px; color: #1A1A1A;">${nom}</td></tr>
            <tr><td style="padding: 8px 0; font-family: sans-serif; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.1em;">Société</td><td style="padding: 8px 0; font-family: sans-serif; font-size: 14px; color: #1A1A1A;">${societe || '—'}</td></tr>
            <tr><td style="padding: 8px 0; font-family: sans-serif; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.1em;">Email</td><td style="padding: 8px 0; font-family: sans-serif; font-size: 14px; color: #E0A126;"><a href="mailto:${email}" style="color: #E0A126;">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; font-family: sans-serif; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.1em;">Téléphone</td><td style="padding: 8px 0; font-family: sans-serif; font-size: 14px; color: #1A1A1A;">${telephone || '—'}</td></tr>
          </table>

          <p style="font-family: sans-serif; font-size: 11px; color: #999; margin-top: 32px; padding-top: 16px; border-top: 1px solid #E8DFD0;">
            Reçu depuis le formulaire de devis — L'Écrin Traiteur
          </p>
        </div>
      `,
    })

    return Response.json({ success: true })
  } catch (err) {
    console.error('Resend devis error:', err)
    return Response.json({ error: 'Erreur lors de l\'envoi.' }, { status: 500 })
  }
}
