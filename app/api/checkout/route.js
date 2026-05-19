import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-06-20',
})

export async function POST(req) {
  try {
    const { items, customer } = await req.json()

    if (!items || items.length === 0) {
      return Response.json({ error: 'Panier vide' }, { status: 400 })
    }

    const lineItems = items.map(item => ({
      price_data: {
        currency: 'eur',
        product_data: {
          name: item.name,
          description: item.qty || '',
          images: [],
        },
        unit_amount: Math.round(item.price * 100), // centimes
      },
      quantity: item.quantity,
    }))

    const origin = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.lecrindesterroirs.fr'

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: lineItems,
      customer_email: customer?.email || undefined,
      metadata: {
        prenom: customer?.prenom || '',
        nom: customer?.nom || '',
        entreprise: customer?.entreprise || '',
        adresse: customer?.adresse || '',
        codepostal: customer?.codepostal || '',
        ville: customer?.ville || '',
        date: customer?.date || '',
        heure: customer?.heure || '',
        telephone: customer?.telephone || '',
        notes: (customer?.notes || '').substring(0, 500),
      },
      success_url: `${origin}/commande-confirmee?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/panier`,
      locale: 'fr',
      shipping_address_collection: undefined,
      payment_intent_data: {
        description: `Commande L'Écrin — ${customer?.entreprise || customer?.email || ''}`,
      },
    })

    return Response.json({ url: session.url })
  } catch (err) {
    console.error('Stripe checkout error:', err)
    return Response.json({ error: err.message }, { status: 500 })
  }
}
