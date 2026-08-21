import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const CATALOGUE_URL = 'https://www.lecrin-traiteur.fr/catalogue-lecrin-2026.pdf'

// Échappement HTML pour éviter toute injection dans les emails
const esc = (s = '') => String(s).replace(/[&<>"']/g, c => (
  { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
))

export async function POST(request) {
  try {
    const body = await request.json()
    const { email, website } = body

    // Honeypot anti-spam
    if (website) {
      return Response.json({ success: true })
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: 'Email valide requis.' }, { status: 400 })
    }

    // Envoi du catalogue au prospect
    await resend.emails.send({
      from: 'L\'Écrin Traiteur <commercial@lecrin-traiteur.fr>',
      to: [email],
      subject: 'Votre catalogue L\'Écrin Traiteur 2026',
      html: `
        <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; padding: 40px 32px; background: #FDFBF7;">
          <p style="font-family: Georgia, serif; font-size: 22px; font-weight: 400; color: #1A1A1A; margin: 0 0 8px;">Votre catalogue 2026</p>
          <div style="width: 40px; height: 2px; background: #E0A126; margin: 16px 0 24px;"></div>
          <p style="font-family: sans-serif; font-size: 15px; line-height: 1.7; color: #333; margin: 0 0 18px;">Bonjour,</p>
          <p style="font-family: sans-serif; font-size: 15px; line-height: 1.7; color: #333; margin: 0 0 28px;">
            Voici notre catalogue 2026 : petits-déjeuners, plateaux repas, lunch box, buffets, cocktails et boissons, avec les prix et les compositions.
          </p>
          <p style="margin: 0 0 32px;">
            <a href="${CATALOGUE_URL}" style="display: inline-block; background: #E0A126; color: #1A1A18; font-family: sans-serif; font-size: 13px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; text-decoration: none; padding: 14px 32px;">Découvrir le catalogue →</a>
          </p>
          <p style="font-family: sans-serif; font-size: 15px; line-height: 1.7; color: #333; margin: 0 0 24px;">
            Un projet en vue ? Répondez simplement à cet email ou appelez-nous au <a href="tel:+33174542310" style="color: #E0A126; text-decoration: none;">01 74 54 23 10</a> : devis personnalisé sous 24&nbsp;h.
          </p>
          <p style="font-family: Georgia, serif; font-size: 15px; color: #1A1A1A; margin: 0;">L'équipe L'Écrin Traiteur</p>
          <p style="font-family: sans-serif; font-size: 13px; margin: 10px 0 0;">
            <a href="https://www.lecrin-traiteur.fr" style="color: #E0A126; text-decoration: none;">www.lecrin-traiteur.fr</a>
          </p>
          <p style="font-family: sans-serif; font-size: 12px; color: #999; margin-top: 32px; padding-top: 16px; border-top: 1px solid #E8DFD0;">
            Petits-déjeuners, plateaux repas & cocktails d'entreprise, Paris &amp; Île-de-France
          </p>
        </div>
      `,
    })

    // Notification interne (best-effort : n'échoue pas la requête si elle rate)
    try {
      await resend.emails.send({
        from: 'L\'Écrin Traiteur <commercial@lecrin-traiteur.fr>',
        to: ['commercial@lecrin-traiteur.fr'],
        replyTo: email,
        subject: `Catalogue téléchargé · ${email}`,
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #FDFBF7;">
            <h2 style="font-family: Georgia, serif; font-weight: 400; color: #1A1A1A; border-bottom: 1px solid #E8DFD0; padding-bottom: 16px; margin-bottom: 24px;">
              Nouveau lead catalogue
            </h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-family: sans-serif; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.1em; width: 160px;">Email</td><td style="padding: 8px 0; font-family: sans-serif; font-size: 14px;"><a href="mailto:${esc(email)}" style="color: #E0A126;">${esc(email)}</a></td></tr>
            </table>
            <p style="font-family: sans-serif; font-size: 13px; color: #666; margin-top: 24px;">
              Le catalogue 2026 lui a été envoyé automatiquement par email.
            </p>
          </div>
        `,
      })
    } catch (notifErr) {
      console.error('Resend catalogue notification error:', notifErr)
    }

    return Response.json({ success: true })
  } catch (err) {
    console.error('Catalogue lead error:', err)
    return Response.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}
