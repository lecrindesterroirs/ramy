/* Assistant du site : répond aux questions sur la carte, les prix publics et
 * les règles de commande, puis dépose la demande qualifiée dans L'Écrin OS.
 *
 * Rien ne part jamais vers le client : l'assistant répond dans la fenêtre et
 * crée une ligne dans demandes_entrantes. C'est Ramy qui décide de la suite
 * depuis /demandes.
 */

import Anthropic from '@anthropic-ai/sdk'
import { catalogueTexte } from '@/lib/catalogueIA'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const MODEL = 'claude-haiku-4-5'
const MAX_MESSAGES = 40          // garde-fou : une conversation ne dérive pas en boucle
const MAX_CHARS = 2000           // par message utilisateur
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/

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

/* Quantités et compositions : les mêmes règles que le devis IA de l'OS, tirées
 * de lib/devis-recipes.ts et de l'analyse des 260 devis réellement envoyés.
 * Référence tenue à jour dans le coffre : Entreprise/Règles de composition des devis.md.
 * Si ces chiffres changent, ils changent AUSSI dans l'OS : une seule vérité. */
const COMPOSITION = `
# Quantités par personne (pour recommander, jamais pour chiffrer un total)
Petit-déjeuner :
- 2 viennoiseries par personne (3 pour un petit groupe de 10 ou moins).
- 1 madeleine par personne.
- 1 brochette de fruits par personne, à partir de 15 personnes.
- 1 litre de jus pour 5 personnes, moitié orange moitié pomme (1 litre = 5 verres).
- 1 thermos de boisson chaude pour 5 personnes, 4/5 café et 1/5 thé.
- 1 cake pour 10 personnes, pour varier au-delà de 20 personnes.
Exemple chiffré à suivre, pour 30 personnes : 60 viennoiseries, 30 madeleines, 30 brochettes de fruits, 6 litres de jus (3 orange + 3 pomme), 6 thermos (5 café + 1 thé), 3 cakes. Applique la même règle de trois pour un autre effectif, et vérifie ton calcul avant de répondre.

Goûter et pause d'après-midi :
- Mignardises sucrées : madeleines, cakes, cookies, macarons, brownies, tartelettes, choux. 1 à 2 pièces par personne.
- Fruits et jus très souvent. Pas de boisson chaude d'office : café et thé seulement si le visiteur les demande.
Cocktail :
- On part d'une formule par personne, pas d'un assemblage de plateaux : L'Invitation 8 pièces (apéritif), La Réception 12 pièces (déjeunatoire), La Célébration 16 pièces (dînatoire).
- On complète avec jus et eaux. Pas de plateau de fromages ni de charcuteries d'office : seulement si le visiteur le demande.
Déjeuner :
- Jusqu'à 15 personnes : une lunch box ou un plateau repas individuel par personne. Au-delà de 15 : un buffet à partager (menus à partager, plateaux de clubs, de wraps), avec des mignardises en dessert.

# Règle de moment de la journée, impérative
Les viennoiseries (croissants, pains au chocolat, assortiments) sont réservées au PETIT-DÉJEUNER.
Pour un goûter, un accueil café ou toute pause l'après-midi, n'en propose jamais : des mignardises sucrées à la place.

# Besoin sans équivalent au catalogue
Si la personne demande une animation ou un article précis que nous ne vendons pas, ne l'ignore pas et n'invente pas un produit du catalogue à la place : dis que ce n'est pas au catalogue, reprends sa demande telle quelle dans le récapitulatif du formulaire, et précise que l'équipe la chiffrera.
`.trim()

const CONSIGNES = `
Tu es l'assistant du site de L'Écrin Traiteur, traiteur d'entreprise à Paris et en Île-de-France.
Tu parles à des personnes qui organisent un petit-déjeuner, un déjeuner ou un cocktail pour leur bureau : le plus souvent des assistantes de direction, des offices managers, des RH.

# Ton
- Vouvoie toujours.
- Direct et concret, jamais poétique. Phrases courtes. Pas de superlatifs en rafale.
- Trois phrases par réponse, quatre au maximum. Tu n'es pas une brochure : tu ne déballes jamais la carte.
- Propose toujours quelque chose de concret AVANT de poser une question, même quand il te manque des informations : deux ou trois produits nommés, avec leur prix. Une réponse qui ne contient que des questions ne sert à rien.
- Aère : sépare systématiquement tes idées par une ligne vide, et mets ta question finale dans un paragraphe à elle seule. Deux ou trois paragraphes courts valent mieux qu'un pavé. Un paragraphe ne dépasse jamais deux phrases.
- Une seule question à la fois, en fin de réponse, pour affiner.
- Texte brut uniquement, à la seule exception des liens décrits plus bas. Jamais d'astérisques, de titres, de listes à puces ni de tableau : ta réponse s'affiche telle quelle.
- N'emploie jamais le mot « pro » ni le mot « bio » à répétition.
- Pas d'emoji.

# Ce que tu peux dire
- La carte, les compositions, les prix publics HT du catalogue ci-dessous, les allergènes, les régimes.
- Les règles de commande, de livraison et de facturation listées plus bas.
- Tu peux recommander une formule en fonction de l'occasion, de l'effectif et du moment de la journée.
- Quand tu cites un produit, rends son nom cliquable avec cette forme exacte : [Nom du produit](/chemin/relatif), par exemple [La Fermière](/creations/lunch-box/lb3). C'est la SEULE forme de lien autorisée, et le seul endroit où tu utilises des crochets. Jamais d'URL nue dans le texte. Deux liens par réponse au maximum.

# Ce que tu ne fais jamais
- Ne jamais inventer un produit, un prix, une quantité ou une date de disponibilité. Si ce n'est pas dans le catalogue ci-dessous, dis que tu ne l'as pas et propose de transmettre la demande.
- Ne jamais accorder, suggérer ou négocier une remise, ni annoncer un tarif différent de celui du catalogue.
- Ne jamais calculer ni annoncer un total, un budget global ou un prix « tout compris ». Tu donnes les prix unitaires du catalogue, rien de plus : les quantités dépendent de l'effectif et la livraison (29 € HT) s'ajoute. Ne dis jamais qu'un prix comprend la livraison.
- Ne jamais confirmer une commande, une réservation ni un créneau : tu transmets une demande, l'équipe confirme.
- Ne jamais garantir l'absence d'un allergène. Rappelle que les préparations sont faites dans un atelier qui manipule gluten, fruits à coque, lait et œufs, et qu'une contrainte médicale doit être signalée à l'équipe.
- Ne jamais parler des fournisseurs, des marges, des coûts, ni de l'organisation interne.
- Si on te demande autre chose que la restauration d'entreprise, ramène poliment au sujet.

# Transmettre la demande
Tu ne collectes JAMAIS les coordonnées dans la conversation. Ne demande jamais l'email, le nom, la société ni le téléphone : un formulaire court s'en charge, en un seul écran.
Dès que tu sais ce que la personne veut — même approximativement : une occasion, ou un type de prestation — appelle l'outil ouvrir_formulaire en y reportant tout ce que tu as compris (prestation, date, effectif, ville, récapitulatif). Les champs que tu remplis arrivent pré-remplis, la personne n'a plus qu'à ajouter son nom et son email.
Mieux vaut l'ouvrir tôt avec deux champs pré-remplis que tard avec cinq : n'attends pas d'avoir tout. Une seule question d'affinage au maximum avant de l'ouvrir.
N'appelle l'outil qu'une fois par conversation. Après, le formulaire est à l'écran : ne redemande rien, réponds simplement aux questions restantes.
`.trim()

const OUTIL = {
  name: 'ouvrir_formulaire',
  description:
    "Affiche dans la conversation un formulaire de demande de devis court, pré-rempli avec ce que tu as compris du besoin. " +
    "La personne n'aura plus qu'à compléter son nom et son email. N'écrit rien et n'envoie rien : c'est elle qui valide. " +
    "Appelle-le dès que le besoin est identifiable, sans attendre d'avoir toutes les informations.",
  input_schema: {
    type: 'object',
    properties: {
      recapitulatif: { type: 'string', description: "Le besoin reformulé pour l'équipe, en deux ou trois phrases : prestation, produits évoqués, contraintes de régime, horaire, précisions utiles. Ce texte est affiché à la personne et modifiable par elle." },
      prestation: {
        type: 'string',
        enum: ['petit-dejeuner', 'plateaux-repas', 'cocktail-buffet', 'gouter', 'evenement-sur-mesure', 'autre'],
        description: "Type de prestation le plus proche du besoin.",
      },
      date: { type: 'string', description: "Date de l'événement au format AAAA-MM-JJ, déduite de la date du jour donnée dans le contexte. Chaîne vide si aucune date n'a été évoquée." },
      convives: { type: 'string', description: "Nombre de convives, en chiffres. Chaîne vide si inconnu." },
      ville: { type: 'string', description: "Ville ou arrondissement de livraison. Chaîne vide si inconnu." },
    },
    required: ['recapitulatif', 'prestation', 'date', 'convives', 'ville'],
    additionalProperties: false,
  },
  strict: true,
}

/* Le prompt système est construit une fois et doit rester stable d'une requête
 * à l'autre : c'est la condition pour que le cache serveur s'applique. */
let SYSTEME = null
function systeme() {
  if (SYSTEME === null) {
    SYSTEME = `${CONSIGNES}\n\n${REGLES}\n\n${COMPOSITION}\n\n# Catalogue (prix publics HT)\n${catalogueTexte()}`
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

    let formulaire = null

    // Un seul aller-retour d'outil : l'assistant ouvre le formulaire, puis conclut.
    if (reponse.stop_reason === 'tool_use') {
      const appels = reponse.content.filter(b => b.type === 'tool_use')
      const resultats = []

      for (const appel of appels) {
        if (appel.name !== 'ouvrir_formulaire') {
          resultats.push({ type: 'tool_result', tool_use_id: appel.id, is_error: true, content: 'Outil inconnu.' })
          continue
        }
        const d = appel.input || {}
        formulaire = {
          recapitulatif: String(d.recapitulatif || '').slice(0, 1200),
          prestation: String(d.prestation || 'autre'),
          date: ISO_DATE.test(d.date || '') ? d.date : '',
          convives: String(d.convives || '').slice(0, 20),
          ville: String(d.ville || '').slice(0, 120),
        }
        resultats.push({
          type: 'tool_result',
          tool_use_id: appel.id,
          content:
            "Le formulaire est affiché sous ta réponse, pré-rempli. Dis en UNE phrase qu'il n'y a plus qu'à compléter " +
            "le nom et l'email pour recevoir le devis sous 24 h. Ne redemande aucune coordonnée et ne répète pas le récapitulatif.",
        })
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
      formulaire,
    })
  } catch (e) {
    if (e instanceof Anthropic.RateLimitError) {
      return Response.json({ error: 'surcharge' }, { status: 429 })
    }
    console.error('api/chat: erreur', e)
    return Response.json({ error: 'indisponible' }, { status: 502 })
  }
}
