import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  try {
    const { items, customer, total } = await req.json()

    if (!items || items.length === 0) {
      return Response.json({ error: 'Panier vide' }, { status: 400 })
    }

    const formatPrice = (n) =>
      n.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + '€'

    const formatComposition = (comp) => {
      if (!comp) return ''
      if (comp.mode === 'flavors') {
        return `<div style="margin-top:4px;font-size:11px;color:#888;font-style:italic;">Saveurs : ${comp.selected.join(', ')}</div>`
      }
      const lines = Object.entries(comp.quantities)
        .filter(([, n]) => n > 0)
        .map(([id, n]) => `${n} × ${id.replace(/-/g, ' ')}`)
        .join(' · ')
      return lines ? `<div style="margin-top:4px;font-size:11px;color:#888;font-style:italic;">${lines}</div>` : ''
    }

    const itemsRows = items.map(item =>
      `<tr style="border-bottom:1px solid #f0ebe2;">
        <td style="padding:10px 16px;font-family:'Helvetica Neue',sans-serif;font-size:13px;color:#111;">
          ${item.name}${formatComposition(item.composition)}
        </td>
        <td style="padding:10px 16px;font-family:'Helvetica Neue',sans-serif;font-size:13px;color:#555;">${item.qty}</td>
        <td style="padding:10px 16px;font-family:'Helvetica Neue',sans-serif;font-size:13px;color:#555;text-align:center;">${item.quantity}</td>
        <td style="padding:10px 16px;font-family:'Helvetica Neue',sans-serif;font-size:13px;color:#111;text-align:right;">${formatPrice(item.price * item.quantity)}</td>
      </tr>`
    ).join('')

    const dateStr = customer.date
      ? new Date(customer.date).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
      : 'Non précisée'

    const html = `
      <!DOCTYPE html>
      <html lang="fr">
      <head><meta charset="UTF-8"></head>
      <body style="margin:0;padding:0;background:#faf8f4;font-family:'Helvetica Neue',sans-serif;">
        <div style="max-width:600px;margin:40px auto;background:#FFFFFF;border:1px solid #e8e0d4;">

          <!-- Header -->
          <div style="background:#111;padding:32px 40px;text-align:center;">
            <p style="font-family:Georgia,serif;font-size:22px;font-weight:400;letter-spacing:0.12em;color:#FFFFFF;margin:0 0 4px;">L'ÉCRIN</p>
            <p style="font-size:9px;letter-spacing:0.22em;text-transform:uppercase;color:rgba(255,255,255,0.55);margin:0;">TRAITEUR</p>
          </div>

          <!-- Body -->
          <div style="padding:40px 40px 32px;">
            <p style="font-family:Georgia,serif;font-size:24px;font-weight:400;color:#111;margin:0 0 8px;">Nouvelle commande sur facture</p>
            <p style="font-size:13px;color:#888;margin:0 0 32px;">Reçue le ${new Date().toLocaleDateString('fr-FR')}</p>

            <!-- Client -->
            <div style="background:#faf8f4;padding:20px 24px;margin-bottom:24px;">
              <p style="font-size:10px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:#E0A126;margin:0 0 12px;">Client</p>
              <p style="font-size:13px;color:#111;margin:0 0 4px;"><strong>${customer.prenom} ${customer.nom}</strong></p>
              <p style="font-size:13px;color:#555;margin:0 0 4px;">${customer.entreprise}</p>
              <p style="font-size:13px;color:#555;margin:0 0 4px;">${customer.email}${customer.telephone ? ' · ' + customer.telephone : ''}</p>
            </div>

            <!-- Livraison -->
            <div style="background:#faf8f4;padding:20px 24px;margin-bottom:24px;">
              <p style="font-size:10px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:#E0A126;margin:0 0 12px;">Livraison</p>
              <p style="font-size:13px;color:#111;margin:0 0 4px;">${customer.adresse}</p>
              <p style="font-size:13px;color:#555;margin:0 0 4px;">${customer.codepostal} ${customer.ville}</p>
              <p style="font-size:13px;color:#555;margin:0 0 4px;">${dateStr}${customer.heure ? ' à ' + customer.heure : ''}</p>
              ${customer.notes ? `<p style="font-size:12px;color:#888;margin:8px 0 0;font-style:italic;">${customer.notes}</p>` : ''}
            </div>

            <!-- Produits -->
            <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
              <thead>
                <tr style="background:#faf8f4;">
                  <th style="padding:10px 16px;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:#888;font-weight:500;text-align:left;">Produit</th>
                  <th style="padding:10px 16px;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:#888;font-weight:500;text-align:left;">Format</th>
                  <th style="padding:10px 16px;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:#888;font-weight:500;text-align:center;">Qté</th>
                  <th style="padding:10px 16px;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:#888;font-weight:500;text-align:right;">Total</th>
                </tr>
              </thead>
              <tbody>${itemsRows}</tbody>
              <tfoot>
                <tr>
                  <td colspan="3" style="padding:16px;text-align:right;font-family:Georgia,serif;font-size:16px;color:#111;">Total</td>
                  <td style="padding:16px;text-align:right;font-family:Georgia,serif;font-size:18px;font-weight:400;color:#111;">${formatPrice(total)}</td>
                </tr>
              </tfoot>
            </table>

            <p style="font-size:12px;color:#aaa;font-style:italic;">Paiement sur facture — à envoyer sous 48h.</p>
          </div>

          <!-- Footer -->
          <div style="border-top:1px solid #f0ebe2;padding:20px 40px;text-align:center;">
            <p style="font-size:11px;color:#aaa;margin:0;">L'Écrin Traiteur · Paris · commercial@lecrin-traiteur.fr</p>
          </div>
        </div>
      </body>
      </html>
    `

    // Email to the team
    await resend.emails.send({
      from: "L'Écrin Traiteur <commercial@lecrin-traiteur.fr>",
      to: ['commercial@lecrin-traiteur.fr'],
      subject: `Commande sur facture — ${customer.entreprise || customer.nom} — ${formatPrice(total)}`,
      html,
    })

    // Confirmation email to the client
    await resend.emails.send({
      from: "L'Écrin Traiteur <commercial@lecrin-traiteur.fr>",
      to: [customer.email],
      subject: "Votre commande a bien été reçue — L'Écrin Traiteur",
      html: `
        <!DOCTYPE html>
        <html lang="fr">
        <body style="margin:0;padding:0;background:#faf8f4;font-family:'Helvetica Neue',sans-serif;">
          <div style="max-width:560px;margin:40px auto;background:#FFFFFF;border:1px solid #e8e0d4;">
            <div style="background:#111;padding:28px 40px;text-align:center;">
              <p style="font-family:Georgia,serif;font-size:20px;letter-spacing:0.12em;color:#FFFFFF;margin:0 0 4px;">L'ÉCRIN</p>
              <p style="font-size:9px;letter-spacing:0.22em;text-transform:uppercase;color:rgba(255,255,255,0.55);margin:0;">TRAITEUR</p>
            </div>
            <div style="padding:40px;">
              <p style="font-family:Georgia,serif;font-size:22px;font-weight:400;color:#111;margin:0 0 20px;">Merci ${customer.prenom},</p>
              <p style="font-size:14px;color:#555;line-height:1.75;margin:0 0 16px;">
                Votre commande a bien été reçue. Notre équipe va la traiter et vous enverra votre facture dans les plus brefs délais.
              </p>
              <p style="font-size:14px;color:#555;line-height:1.75;margin:0 0 32px;">
                Pour toute question, n'hésitez pas à nous contacter à <a href="mailto:commercial@lecrin-traiteur.fr" style="color:#E0A126;">commercial@lecrin-traiteur.fr</a>.
              </p>
              <div style="border-top:1px solid #f0ebe2;padding-top:24px;">
                <p style="font-size:13px;color:#888;margin:0 0 4px;font-weight:500;">${formatPrice(total)} · ${dateStr}</p>
                <p style="font-size:12px;color:#aaa;margin:0;">${customer.adresse}, ${customer.codepostal} ${customer.ville}</p>
              </div>
            </div>
            <div style="border-top:1px solid #f0ebe2;padding:16px 40px;text-align:center;">
              <p style="font-size:11px;color:#aaa;margin:0;">L'Écrin Traiteur · Paris · commercial@lecrin-traiteur.fr</p>
            </div>
          </div>
        </body>
        </html>
      `,
    })

    return Response.json({ success: true })
  } catch (err) {
    console.error('Commande facture error:', err)
    return Response.json({ error: err.message }, { status: 500 })
  }
}
