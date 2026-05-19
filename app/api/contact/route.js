import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const body = await request.json()
    const { nom, societe, email, telephone, type, personnes, date, message } = body

    if (!nom || !email) {
      return Response.json({ error: 'Champs requis manquants.' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'L\'Écrin Traiteur <onboarding@resend.dev>',
      to: ['contact@lecrindesterroirs.fr'],
      replyTo: email,
      subject: `Nouvelle demande de contact — ${nom} (${societe})`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #FDFBF7;">
          <h2 style="font-family: Georgia, serif; font-weight: 400; color: #1A1A1A; border-bottom: 1px solid #E8DFD0; padding-bottom: 16px; margin-bottom: 24px;">
            Nouvelle demande de contact
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-family: sans-serif; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.1em; width: 160px;">Nom</td><td style="padding: 8px 0; font-family: sans-serif; font-size: 14px; color: #1A1A1A;">${nom}</td></tr>
            <tr><td style="padding: 8px 0; font-family: sans-serif; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.1em;">Société</td><td style="padding: 8px 0; font-family: sans-serif; font-size: 14px; color: #1A1A1A;">${societe || '—'}</td></tr>
            <tr><td style="padding: 8px 0; font-family: sans-serif; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.1em;">Email</td><td style="padding: 8px 0; font-family: sans-serif; font-size: 14px; color: #E0A126;"><a href="mailto:${email}" style="color: #E0A126;">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; font-family: sans-serif; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.1em;">Téléphone</td><td style="padding: 8px 0; font-family: sans-serif; font-size: 14px; color: #1A1A1A;">${telephone || '—'}</td></tr>
            <tr><td style="padding: 8px 0; font-family: sans-serif; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.1em;">Type d'événement</td><td style="padding: 8px 0; font-family: sans-serif; font-size: 14px; color: #1A1A1A;">${type || '—'}</td></tr>
            <tr><td style="padding: 8px 0; font-family: sans-serif; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.1em;">Nombre de personnes</td><td style="padding: 8px 0; font-family: sans-serif; font-size: 14px; color: #1A1A1A;">${personnes || '—'}</td></tr>
            <tr><td style="padding: 8px 0; font-family: sans-serif; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.1em;">Date souhaitée</td><td style="padding: 8px 0; font-family: sans-serif; font-size: 14px; color: #1A1A1A;">${date || '—'}</td></tr>
          </table>
          ${message ? `
          <div style="margin-top: 24px; padding: 16px 20px; background: #FFFFFF; border-left: 3px solid #E0A126;">
            <p style="font-family: sans-serif; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 8px;">Message</p>
            <p style="font-family: sans-serif; font-size: 14px; color: #1A1A1A; line-height: 1.7; margin: 0;">${message.replace(/\n/g, '<br>')}</p>
          </div>` : ''}
          <p style="font-family: sans-serif; font-size: 11px; color: #999; margin-top: 32px; padding-top: 16px; border-top: 1px solid #E8DFD0;">
            Reçu depuis le formulaire de contact — L'Écrin Traiteur
          </p>
        </div>
      `,
    })

    return Response.json({ success: true })
  } catch (err) {
    console.error('Resend contact error:', err)
    return Response.json({ error: 'Erreur lors de l\'envoi.' }, { status: 500 })
  }
}
