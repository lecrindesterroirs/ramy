import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Échappement HTML pour éviter toute injection dans l'email de notification
const esc = (s = '') => String(s).replace(/[&<>"']/g, c => (
  { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
))

export async function POST(request) {
  try {
    const body = await request.json()
    const { nom, societe, email, telephone, type, personnes, date, message, website } = body

    // Honeypot anti-spam
    if (website) {
      return Response.json({ success: true })
    }

    if (!nom || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: 'Nom et email valides requis.' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'L\'Écrin Traiteur <commercial@lecrin-traiteur.fr>',
      to: ['commercial@lecrin-traiteur.fr'],
      replyTo: email,
      subject: `Nouvelle demande de contact — ${nom}${societe ? ` (${societe})` : ''}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #FDFBF7;">
          <h2 style="font-family: Georgia, serif; font-weight: 400; color: #1A1A1A; border-bottom: 1px solid #E8DFD0; padding-bottom: 16px; margin-bottom: 24px;">
            Nouvelle demande de contact
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-family: sans-serif; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.1em; width: 160px;">Nom</td><td style="padding: 8px 0; font-family: sans-serif; font-size: 14px; color: #1A1A1A;">${esc(nom)}</td></tr>
            <tr><td style="padding: 8px 0; font-family: sans-serif; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.1em;">Société</td><td style="padding: 8px 0; font-family: sans-serif; font-size: 14px; color: #1A1A1A;">${esc(societe) || '—'}</td></tr>
            <tr><td style="padding: 8px 0; font-family: sans-serif; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.1em;">Email</td><td style="padding: 8px 0; font-family: sans-serif; font-size: 14px; color: #E0A126;"><a href="mailto:${esc(email)}" style="color: #E0A126;">${esc(email)}</a></td></tr>
            <tr><td style="padding: 8px 0; font-family: sans-serif; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.1em;">Téléphone</td><td style="padding: 8px 0; font-family: sans-serif; font-size: 14px; color: #1A1A1A;">${esc(telephone) || '—'}</td></tr>
            <tr><td style="padding: 8px 0; font-family: sans-serif; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.1em;">Type d'événement</td><td style="padding: 8px 0; font-family: sans-serif; font-size: 14px; color: #1A1A1A;">${esc(type) || '—'}</td></tr>
            <tr><td style="padding: 8px 0; font-family: sans-serif; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.1em;">Nombre de personnes</td><td style="padding: 8px 0; font-family: sans-serif; font-size: 14px; color: #1A1A1A;">${esc(personnes) || '—'}</td></tr>
            <tr><td style="padding: 8px 0; font-family: sans-serif; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.1em;">Date souhaitée</td><td style="padding: 8px 0; font-family: sans-serif; font-size: 14px; color: #1A1A1A;">${esc(date) || '—'}</td></tr>
          </table>
          ${message ? `
          <div style="margin-top: 24px; padding: 16px 20px; background: #FFFFFF; border-left: 3px solid #E0A126;">
            <p style="font-family: sans-serif; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 8px;">Message</p>
            <p style="font-family: sans-serif; font-size: 14px; color: #1A1A1A; line-height: 1.7; margin: 0;">${esc(message).replace(/\n/g, '<br>')}</p>
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
