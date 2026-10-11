/* Assistant du site : répond aux questions sur la carte, les prix publics et
 * les règles de commande, puis dépose la demande qualifiée dans L'Écrin OS.
 *
 * Rien ne part jamais vers le client : l'assistant répond dans la fenêtre et
 * crée une ligne dans demandes_entrantes. C'est Ramy qui décide de la suite
 * depuis /demandes.
 */

import Anthropic from '@anthropic-ai/sdk'
import { catalogueTexte } from '@/lib/catalogueIA'
import { logDemandeToOS } from '@/lib/os-demande'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const MODEL = 'claude-haiku-4-5'
const MAX_MESSAGES = 40          // garde-fou : une conversation ne dérive pas en boucle
const MAX_CHARS = 2000           // par message utilisateur

/* Les règles opérationnelles, reprises de la FAQ du site : elles doivent rester
 * identiques aux réponses publiques, sinon l'assistant dit autre chose que la page. */
const REGLES = `
# Règles de commande (identiques à la FAQ du site)
- Délai standard : commande la veille avant 14 h, livraison le lendemain dès 6 h 30 à l'heure choisie.
- Dernière minute : accepté jusqu'à 10 h le matin même, sur la sélection disponible du jour (petits-déjeuners et plateaux repas, quantités limitées).
- Minimum de commande : 50 € HT. Livraison : 29 € HT pour Paris et les communes proches ; ailleurs en Île-de-France, à confirmer au cas par cas.
- Facturation entreprise avec TVA sur toutes les commandes.
- Inclus sans supplément : gobelets, serviettes, vaisselle et couverts jetables, présentation dressée, prêt à servir.
- Modification jusqu'à 14 h la veille. Annulation : écrire à commercial@lecrin-traiteur.fr au plus tôt.
- Zone : Paris intramuros, La Défense, Neuilly, Boulogne, Versailles, Massy, Saint-Denis et plus de 20 villes du 92, 93, 94 et 78.
- Régimes : tout est halal et sans porc. Options végétariennes et vegan, certains produits sans gluten. Les madeleines Mado Paris sont bio.
- Devis : réponse sous 24 h.
- Contact : commercial@lecrin-traiteur.fr · 01 74 54 23 10.
`.trim()

const CONSIGNES = `
Tu es l'assistant du site de L'Écrin Traiteur, traiteur d'entreprise à Paris et en Île-de-France.
Tu parles à des personnes qui organisent un petit-déjeuner, un déjeuner ou un cocktail pour leur bureau : le plus souvent des assistantes de direction, des offices managers, des RH.

# Ton
- Vouvoie toujours.
- Direct et concret, jamais poétique. Phrases courtes. Pas de superlatifs en rafale.
- Trois phrases par réponse, quatre au maximum. Tu n'es pas une brochure : tu ne déballes jamais la carte, tu proposes deux ou trois options et tu demandes de quoi affiner.
- Texte brut uniquement. Jamais de markdown : pas d'astérisques, pas de titres, pas de listes à puces, pas de tableau. Ta réponse s'affiche telle quelle.
- N'emploie jamais le mot « pro » ni le mot « bio » à répétition.
- Pas d'emoji.

# Ce que tu peux dire
- La carte, les compositions, les prix publics HT du catalogue ci-dessous, les allergènes, les régimes.
- Les règles de commande, de livraison et de facturation listées plus bas.
- Tu peux recommander une formule en fonction de l'occasion, de l'effectif et du moment de la journée.
- Quand tu cites un produit, donne son lien : le chemin relatif seul, en fin de phrase, sans parenthèses ni crochets (par exemple : … à 18,90 € HT. Voir /creations/lunch-box/lb3). Au maximum deux liens par réponse.

# Ce que tu ne fais jamais
- Ne jamais inventer un produit, un prix, une quantité ou une date de disponibilité. Si ce n'est pas dans le catalogue ci-dessous, dis que tu ne l'as pas et propose de transmettre la demande.
- Ne jamais accorder, suggérer ou négocier une remise, ni annoncer un tarif différent de celui du catalogue.
- Ne jamais confirmer une commande, une réservation ni un créneau : tu transmets une demande, l'équipe confirme.
- Ne jamais garantir l'absence d'un allergène. Rappelle que les préparations sont faites dans un atelier qui manipule gluten, fruits à coque, lait et œufs, et qu'une contrainte médicale doit être signalée à l'équipe.
- Ne jamais parler des fournisseurs, des marges, des coûts, ni de l'organisation interne.
- Si on te demande autre chose que la restauration d'entreprise, ramène poliment au sujet.

# Transmettre la demande
Dès que la personne a un besoin réel (une occasion, une date approximative ou un effectif), propose de transmettre sa demande à l'équipe.
Pour cela il te faut au minimum : son email, et ce qu'elle veut. Le reste (nom, société, téléphone, date, effectif, ville) est utile mais pas bloquant.
Demande les informations manquantes une ou deux à la fois, jamais sous forme de formulaire.
Quand tu as l'email et le besoin, appelle l'outil enregistrer_demande, puis confirme en une phrase que l'équipe revient sous 24 h.
N'appelle l'outil qu'une seule fois par conversation, sauf si la personne corrige une information.
`.trim()

const OUTIL = {
  name: 'enregistrer_demande',
  description:
    "Transmet la demande du visiteur à l'équipe de L'Écrin Traiteur : crée une demande dans l'outil interne. " +
    "N'appelle cet outil que lorsque tu as au moins l'email du visiteur et la description de son besoin. " +
    'Ne confirme jamais une commande : cet outil ne fait que transmettre une demande.',
  input_schema: {
    type: 'object',
    properties: {
      email: { type: 'string', description: "Email du visiteur. Obligatoire." },
      message: { type: 'string', description: "Le besoin, reformulé clairement et complètement pour l'équipe : prestation souhaitée, produits évoqués, contraintes de régime, précisions utiles." },
      nom: { type: 'string', description: 'Nom et prénom du visiteur, si donné.' },
      societe: { type: 'string', description: 'Nom de la société, si donné.' },
      telephone: { type: 'string', description: 'Téléphone, si donné.' },
      prestation: {
        type: 'string',
        enum: ['Petit-déjeuner', 'Pause goûter', 'Plateaux repas', 'Lunch box', 'Buffet à partager', 'Cocktail', 'Plateaux apéritifs', 'Animation culinaire', 'Boissons', 'Autre demande'],
        description: "Type de prestation. Choisis la valeur la plus proche du besoin ; ne mets « Autre demande » que si rien ne correspond.",
      },
      date_evenement: { type: 'string', description: "Date de l'événement au format AAAA-MM-JJ, déduite de la date du jour donnée dans le contexte (« le 20 » = le prochain 20 à venir). Chaîne vide si aucune date n'a été évoquée." },
      nb_personnes: { type: 'string', description: "Nombre de convives, si donné." },
      ville: { type: 'string', description: "Ville ou arrondissement de livraison, si donné." },
    },
    required: ['email', 'message', 'prestation', 'date_evenement'],
    additionalProperties: false,
  },
  strict: true,
}

/* Le prompt système est construit une fois et doit rester stable d'une requête
 * à l'autre : c'est la condition pour que le cache serveur s'applique. */
let SYSTEME = null
function systeme() {
  if (SYSTEME === null) {
    SYSTEME = `${CONSIGNES}\n\n${REGLES}\n\n# Catalogue (prix publics HT)\n${catalogueTexte()}`
  }
  return SYSTEME
}

/* Le modèle n'a aucune notion du jour : sans ça il date les demandes sur une
 * année au hasard. Bloc séparé et non mis en cache, pour ne pas invalider le
 * catalogue à chaque changement de date. */
function blocsSysteme() {
  const aujourdhui = new Intl.DateTimeFormat('fr-FR', {
    timeZone: 'Europe/Paris', weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  }).format(new Date())
  const iso = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Paris' }).format(new Date())
  return [
    { type: 'text', text: systeme(), cache_control: { type: 'ephemeral' } },
    { type: 'text', text: `Nous sommes le ${aujourdhui} (${iso}). Calcule toujours les dates à partir de là ; « mardi prochain » ou « le 20 » se résolvent par rapport à aujourd'hui, jamais sur une autre année.` },
  ]
}

/* N'accepte que ce que le client a le droit d'envoyer : du texte, dans des
 * tours user/assistant. Les tool_result sont reconstruits côté serveur. */
function nettoyer(messages) {
  if (!Array.isArray(messages)) return []
  return messages
    .filter(m => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
    .map(m => ({ role: m.role, content: m.content.slice(0, MAX_CHARS) }))
    .slice(-MAX_MESSAGES)
}

export async function POST(request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('api/chat: ANTHROPIC_API_KEY manquante')
    return Response.json({ error: 'indisponible' }, { status: 503 })
  }

  let body
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'requête invalide' }, { status: 400 })
  }

  const messages = nettoyer(body.messages)
  if (!messages.length || messages[0].role !== 'user') {
    return Response.json({ error: 'requête invalide' }, { status: 400 })
  }

  const attribution = body.attribution && typeof body.attribution === 'object' ? body.attribution : null
  const page = typeof body.page === 'string' ? body.page.slice(0, 300) : null

  const client = new Anthropic()

  try {
    let reponse = await client.messages.create({
      model: MODEL,
      max_tokens: 1024,
      system: blocsSysteme(),
      tools: [OUTIL],
      messages,
    })

    let demandeEnregistree = false

    // Un seul aller-retour d'outil suffit : l'assistant transmet, puis conclut.
    if (reponse.stop_reason === 'tool_use') {
      const appels = reponse.content.filter(b => b.type === 'tool_use')
      const resultats = []

      for (const appel of appels) {
        if (appel.name !== 'enregistrer_demande') {
          resultats.push({ type: 'tool_result', tool_use_id: appel.id, is_error: true, content: 'Outil inconnu.' })
          continue
        }
        const d = appel.input || {}
        try {
          await logDemandeToOS({
            source: 'assistant-site',
            nom: d.nom || null,
            societe: d.societe || null,
            email: d.email,
            telephone: d.telephone || null,
            prestation: d.prestation || 'Autre demande',
            date_evenement: d.date_evenement || null,
            nb_personnes: d.nb_personnes || null,
            ville: d.ville || null,
            message: d.message,
            raw: { ...d, page, attribution, conversation: messages },
          })
          demandeEnregistree = true
          resultats.push({
            type: 'tool_result',
            tool_use_id: appel.id,
            content: "Demande transmise à l'équipe. Confirme en une phrase que quelqu'un revient vers la personne sous 24 h, et ne redemande plus ses coordonnées.",
          })
        } catch (e) {
          console.error('api/chat: échec enregistrement demande', e)
          resultats.push({
            type: 'tool_result',
            tool_use_id: appel.id,
            is_error: true,
            content: "Transmission impossible. Invite la personne à écrire à commercial@lecrin-traiteur.fr.",
          })
        }
      }

      reponse = await client.messages.create({
        model: MODEL,
        max_tokens: 1024,
        system: blocsSysteme(),
        tools: [OUTIL],
        messages: [
          ...messages,
          { role: 'assistant', content: reponse.content },
          { role: 'user', content: resultats },
        ],
      })
    }

    const texte = reponse.content.filter(b => b.type === 'text').map(b => b.text).join('\n').trim()

    return Response.json({
      reply: texte || "Je n'ai pas réussi à répondre. Écrivez-nous à commercial@lecrin-traiteur.fr, on revient vers vous sous 24 h.",
      demandeEnregistree,
    })
  } catch (e) {
    if (e instanceof Anthropic.RateLimitError) {
      return Response.json({ error: 'surcharge' }, { status: 429 })
    }
    console.error('api/chat: erreur', e)
    return Response.json({ error: 'indisponible' }, { status: 502 })
  }
}
