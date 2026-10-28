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
- Délai standard : commande la veille avant 10 h, livraison le lendemain dès 6 h 30 à l'heure choisie.
- Dernière minute : la règle reste la veille avant 10 h. Pour une demande le matin même, orienter vers le 01 74 54 23 10 (réponse selon la disponibilité du jour). Seule exception publiée : à Boulogne-Billancourt (atelier), commande acceptée jusqu'à 10 h le matin même sur la sélection du jour.
- Minimum de commande : 50 € HT. Livraison : 29 € HT pour Paris et les communes proches ; ailleurs en Île-de-France, à confirmer au cas par cas.
- Facturation entreprise avec TVA sur toutes les commandes.
- Inclus sans supplément : gobelets, serviettes, vaisselle et couverts jetables, présentation dressée, prêt à servir.
- Modification jusqu'à 10 h la veille. Annulation : écrire à commercial@lecrin-traiteur.fr au plus tôt.
- Zone : Paris intramuros, La Défense, Neuilly, Boulogne, Versailles, Massy, Saint-Denis et plus de 20 villes du 92, 93, 94 et 78.
- Régimes : le salé (cocktails, plateaux, buffets) est halal et sans porc ; ne pas mettre en avant halal, sans porc ni sans alcool sur le sucré (petit-déjeuner, goûter, boissons). Options végétariennes et vegan, certains produits sans gluten. Les madeleines Mado Paris sont faites avec des ingrédients biologiques, sans huile de palme.
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
      recapitulatif: { type: 'string', description: "Le besoin reformulé pour l'équipe, TOUJOURS EN FRANÇAIS même si la conversation se tient en anglais (c'est l'équipe qui le lit), en deux ou trois phrases : prestation, produits évoqués, contraintes de régime, horaire, précisions utiles. Ce texte est affiché à la personne et modifiable par elle." },
      prestation: {
        type: 'string',
        enum: ['petit-dejeuner', 'plateaux-repas', 'cocktail-buffet', 'gouter', 'evenement-sur-mesure', 'autre'],
        description: "Type de prestation le plus proche du besoin.",
      },
      date_dite: { type: 'string', description: "Les mots EXACTS employés par la personne pour la date, recopiés tels quels : « jeudi prochain », « next Thursday », « le 20 », « demain », « 18 novembre ». Chaîne vide si elle n'a évoqué aucune date. Ne traduis pas, ne reformule pas, ne calcule rien." },
      date: { type: 'string', description: "Ta meilleure estimation au format AAAA-MM-JJ, ou chaîne vide si tu n'es pas sûr. En cas de désaccord avec date_dite, c'est date_dite qui fait foi." },
      convives: { type: 'string', description: "Nombre de convives, en chiffres. Chaîne vide si inconnu." },
      ville: { type: 'string', description: "Ville ou arrondissement de livraison. Chaîne vide si inconnu." },
    },
    required: ['recapitulatif', 'prestation', 'date_dite', 'date', 'convives', 'ville'],
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
const JOURS = {
  lundi: 1, monday: 1, mardi: 2, tuesday: 2, mercredi: 3, wednesday: 3, jeudi: 4, thursday: 4,
  vendredi: 5, friday: 5, samedi: 6, saturday: 6, dimanche: 0, sunday: 0,
}

/* Le modèle sait recopier, il ne sait pas compter les jours : il a daté un
 * « next Thursday » du lundi 12 octobre au samedi 17. On résout donc la date
 * ici, à partir des mots employés par le visiteur, et on ne garde son
 * estimation que si on ne reconnaît rien. */
export function resoudreDate(dit, estimation, maintenant = new Date()) {
  const iso = (d) => new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Paris' }).format(d)
  const valide = (v) => (ISO_DATE.test(v || '') ? v : '')
  const texte = String(dit || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  if (!texte) return valide(estimation)

  const base = Math.floor(maintenant.getTime() / 86400000)
  const dans = (n) => iso(new Date((base + n) * 86400000 + 43200000))

  if (/apres.?demain|day after tomorrow/.test(texte)) return dans(2)
  if (/\bdemain\b|\btomorrow\b/.test(texte)) return dans(1)
  if (/aujourd|\btoday\b/.test(texte)) return dans(0)

  const nom = Object.keys(JOURS).find(j => new RegExp(`\\b${j}\\b`).test(texte))
  if (nom) {
    // Toujours la prochaine occurrence a venir ; « jeudi » dit un jeudi = le jeudi suivant.
    const actuel = new Date(dans(0) + 'T12:00:00Z').getUTCDay()
    let ecart = (JOURS[nom] - actuel + 7) % 7
    if (ecart === 0) ecart = 7
    if (/\b(2|deux|two)\s+semaines?\b|\bin\s+(2|two)\s+weeks?\b/.test(texte)) ecart += 7
    return dans(ecart)
  }

  // Date explicite avec un mois : « 18 novembre », « November 18 ».
  const MOIS = {
    janvier: 1, january: 1, fevrier: 2, february: 2, mars: 3, march: 3, avril: 4, april: 4,
    mai: 5, may: 5, juin: 6, june: 6, juillet: 7, july: 7, aout: 8, august: 8,
    septembre: 9, september: 9, octobre: 10, october: 10, novembre: 11, november: 11,
    decembre: 12, december: 12,
  }
  const nomMois = Object.keys(MOIS).find(x => new RegExp(`\\b${x}\\b`).test(texte))
  if (nomMois) {
    const j = texte.match(/\b(\d{1,2})(?:er|eme|th|st|nd|rd)?\b/)
    if (j) {
      const jour = parseInt(j[1], 10)
      const mois = MOIS[nomMois]
      const annee = texte.match(/\b(20\d{2})\b/)
      if (jour >= 1 && jour <= 31) {
        const aujourdhui = dans(0)
        let an = annee ? parseInt(annee[1], 10) : parseInt(aujourdhui.slice(0, 4), 10)
        const candidat = `${an}-${String(mois).padStart(2, '0')}-${String(jour).padStart(2, '0')}`
        // Sans année donnée, un mois déjà passé désigne l'année suivante.
        if (!annee && candidat < aujourdhui) {
          return `${an + 1}-${String(mois).padStart(2, '0')}-${String(jour).padStart(2, '0')}`
        }
        return candidat
      }
    }
  }

  // « le 20 », « the 20th » : le prochain 20 a venir.
  const m = texte.match(/\b(?:le |the )?(\d{1,2})(?:er|eme|th|st|nd|rd)?\b/)
  if (m && !/\d{4}/.test(texte)) {
    const n = parseInt(m[1], 10)
    if (n >= 1 && n <= 31) {
      for (let i = 0; i <= 62; i++) {
        const d = dans(i)
        if (parseInt(d.slice(8), 10) === n) return d
      }
    }
  }
  return valide(estimation)
}

/* Le modèle se trompe de jour quand on lui dit « jeudi prochain » : on lui donne
 * la correspondance jour/date toute faite plutôt que de le laisser compter. */
function septJours() {
  const fmt = new Intl.DateTimeFormat('fr-FR', { timeZone: 'Europe/Paris', weekday: 'long', day: 'numeric', month: 'long' })
  const iso = (d) => new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Paris' }).format(d)
  const out = []
  for (let i = 1; i <= 7; i++) {
    const d = new Date(Date.now() + i * 86400000)
    out.push(`${fmt.format(d)} = ${iso(d)}`)
  }
  return out.join(', ')
}

function blocsSysteme() {
  const aujourdhui = new Intl.DateTimeFormat('fr-FR', {
    timeZone: 'Europe/Paris', weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  }).format(new Date())
  const iso = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Paris' }).format(new Date())
  return [
    { type: 'text', text: systeme(), cache_control: { type: 'ephemeral' } },
    { type: 'text', text:
      `Nous sommes le ${aujourdhui} (${iso}).\n` +
      `Toute date se calcule à partir de là, jamais sur une autre année. Avant d'écrire une date, VÉRIFIE le jour de la semaine : ` +
      `les sept prochains jours sont ${septJours()}. Si la personne dit « jeudi prochain » ou « next Thursday », prends le jeudi de cette liste. ` +
      `Si tu hésites entre deux dates, ne devine pas : laisse la date vide et dis-le.` },
  ]
}

/* Le visiteur a basculé en anglais : on ne traduit ni le catalogue ni les règles
 * (ce serait un deuxième prompt à maintenir et à repayer), on demande juste de
 * répondre en anglais. Les noms de produits restent en français : ce sont des
 * noms propres, et c'est ce qui figure sur le devis. */
const CONSIGNE_EN = `
RÉPONDS EXCLUSIVEMENT EN ANGLAIS, quelle que soit la langue de la question. Tu t'adresses à une personne anglophone.
Garde les noms de produits et de formules en français, tels qu'ils sont au catalogue (ils figurent ainsi sur le devis) : « La Réception », « Coffret de 20 madeleines », « Brochettes de fruits frais ». Tu peux ajouter une courte traduction entre parenthèses la première fois si ce n'est pas évident.
Les prix restent en euros HT ; précise « excl. VAT ».
UNE SEULE EXCEPTION : le champ « recapitulatif » de l'outil ouvrir_formulaire s'écrit TOUJOURS EN FRANÇAIS, même ici. Ce texte n'est pas lu par le visiteur mais par l'équipe, qui travaille en français.
Tout le reste de tes consignes reste valable à l'identique.
`.trim()

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

  const langue = body.langue === 'en' ? 'en' : 'fr'
  const attribution = body.attribution && typeof body.attribution === 'object' ? body.attribution : null
  const page = typeof body.page === 'string' ? body.page.slice(0, 300) : null

  const client = new Anthropic()

  try {
    let reponse = await client.messages.create({
      model: MODEL,
      max_tokens: 1024,
      system: langue === 'en' ? [...blocsSysteme(), { type: 'text', text: CONSIGNE_EN }] : blocsSysteme(),
      tools: [OUTIL],
      messages,
    })

    let formulaire = null
    /* Ce que l'assistant a dit AVANT d'ouvrir le formulaire : c'est là qu'est sa
     * recommandation. Après l'outil il ne sait plus que commenter le formulaire,
     * quelle que soit la consigne — on garde donc les deux et on les recolle. */
    let avant = ''

    // Un seul aller-retour d'outil : l'assistant ouvre le formulaire, puis conclut.
    if (reponse.stop_reason === 'tool_use') {
      const appels = reponse.content.filter(b => b.type === 'tool_use')
      const resultats = []
      avant = reponse.content.filter(b => b.type === 'text').map(b => b.text).join('\n').trim()

      for (const appel of appels) {
        if (appel.name !== 'ouvrir_formulaire') {
          resultats.push({ type: 'tool_result', tool_use_id: appel.id, is_error: true, content: 'Outil inconnu.' })
          continue
        }
        const d = appel.input || {}
        formulaire = {
          recapitulatif: String(d.recapitulatif || '').slice(0, 1200),
          prestation: String(d.prestation || 'autre'),
          date: resoudreDate(d.date_dite, d.date),
          convives: String(d.convives || '').slice(0, 20),
          ville: String(d.ville || '').slice(0, 120),
        }
        resultats.push({
          type: 'tool_result',
          tool_use_id: appel.id,
          content:
            "Le formulaire est affiché, pré-rempli. Réponds par UNE SEULE phrase disant qu'il n'y a plus qu'à " +
            "compléter le nom et l'email pour recevoir le devis sous 24 h. Ne décris pas le formulaire, ne redemande " +
            "aucune coordonnée, ne répète pas le récapitulatif.",
        })
      }

      reponse = await client.messages.create({
        model: MODEL,
        max_tokens: 1024,
        system: langue === 'en' ? [...blocsSysteme(), { type: 'text', text: CONSIGNE_EN }] : blocsSysteme(),
        tools: [OUTIL],
        messages: [
          ...messages,
          { role: 'assistant', content: reponse.content },
          { role: 'user', content: resultats },
        ],
      })
    }

    const apres = reponse.content.filter(b => b.type === 'text').map(b => b.text).join('\n').trim()
    const texte = [avant, apres].filter(Boolean).join('\n\n')

    return Response.json({
      reply: texte || (langue === 'en'
        ? "I couldn't answer. Please email us at commercial@lecrin-traiteur.fr and we'll reply within 24 hours."
        : "Je n'ai pas réussi à répondre. Écrivez-nous à commercial@lecrin-traiteur.fr, on revient vers vous sous 24 h."),
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
