# Textes GEO à valider (26/09/2026)

Les éléments entre crochets [ ] sont à compléter par Ramy. Aucun chiffre n'a été inventé.

---

## 1. Notre maison : ✅ intégré le 26/09 (sans le parcours, « plus de 100 entreprises », italique retiré)

Version de travail d'origine ci-dessous, pour référence.

À intégrer dans `app/univers/notre-maison/page.js`. On garde le H1 « Qui sommes-nous » et la citation du fondateur, et on remplace le bloc « Notre modèle » par les sections ci-dessous. Les titres H2 sont des questions, et chaque réponse se suffit à elle-même pour qu'une IA puisse la citer.

### Qu'est-ce que L'Écrin Traiteur ?
L'Écrin Traiteur est un traiteur d'entreprise basé à Boulogne-Billancourt. Nous livrons petits-déjeuners, plateaux repas, lunch box, pauses gourmandes, cocktails et animations culinaires dans les bureaux de Paris et d'Île-de-France. La société s'appelle L'Écrin des Terroirs, L'Écrin Traiteur est son nom commercial. Nous travaillons pour [nombre] entreprises, de l'équipe de 10 personnes au séminaire de 300.

### Qui a fondé L'Écrin ?
L'Écrin a été fondé en 2025 par Ramy Abdelaty, qui le dirige toujours. [1 à 2 phrases sur son parcours : ce qu'il faisait avant, pourquoi il a lancé L'Écrin.] Il choisit lui-même chaque producteur de la carte, après l'avoir goûté.

### D'où viennent les produits ?
Nous n'avons pas de cuisine centrale qui standardise tout. Chaque produit vient d'un artisan que nous avons choisi : les madeleines de Mado Paris, les viennoiseries de la Maison Marques, les yaourts de la Ferme de Viltain à Jouy-en-Josas, les jus d'Alain Milliat. Nous nous chargeons de la mise en place, de la présentation et du transport au froid jusqu'à vos bureaux.

### Comment se passe une commande ?
Vous commandez jusqu'à la veille 14h et nous livrons dès 6h30, avec notre propre équipe, jamais en sous-traitance. Le minimum de commande est de 50 € HT et la livraison coûte 29 € HT à Paris et dans les communes proches. Vous recevez un devis sous 24h et une facture entreprise avec TVA.

### Quels régimes alimentaires couvrez-vous ?
Toute la carte est halal et sans porc par défaut, sans alcool dans les recettes. Chaque prestation existe en version végétarienne et vegan, et nous l'adaptons en sans gluten sur demande. Personne n'est mis de côté à table.

### Où livrez-vous ?
Paris et une vingtaine de villes d'Île-de-France, dont Boulogne-Billancourt, Issy-les-Moulineaux, Neuilly-sur-Seine, Levallois-Perret, Puteaux et La Défense, Courbevoie, Nanterre, Suresnes, Gennevilliers et Versailles.

### Pourquoi nous faire confiance ?
Nous sommes notés 5,0 sur 5 sur Google. [Ajouter 1 ou 2 références clients si possible, ex. « Nous livrons chaque semaine [type de client] ».] [Photo du fondateur ou de l'équipe : le skill l'exige sur cette page.]

> ⚠️ **La page actuelle utilise de l'italique** (sur le H1 et la citation), ce qui va contre la charte : jamais d'italique. À corriger lors de l'intégration.

---

## 2. Fiche Wikidata : champs à saisir

Crée-la toi-même sur wikidata.org (compte gratuit, environ 30 minutes). Je ne peux pas créer de compte à ta place. Renvoie-moi ensuite l'identifiant `Q…` : je l'ajouterai dans `sameAs` sur le site.

| Propriété | Valeur |
|---|---|
| Libellé (fr) | L'Écrin Traiteur |
| Description (fr) | traiteur d'entreprise à Paris et en Île-de-France |
| Alias | L'Écrin des Terroirs ; L'Écrin |
| nature de l'élément (P31) | entreprise (Q4830453) |
| secteur d'activité (P452) | catering (Q777754) |
| pays (P17) | France |
| siège (P159) | Boulogne-Billancourt |
| fondé par (P112) | Ramy Abdelaty. Il faut créer un élément pour lui ou le laisser en texte. |
| date de fondation (P571) | 2025 |
| numéro SIREN (P1616) | [SIREN] ← c'est l'élément qui prouve que l'entreprise existe |
| site officiel (P856) | https://www.lecrin-traiteur.fr |
| identifiant LinkedIn entreprise (P4264) | lecrin-traiteur |
| nom d'utilisateur Instagram (P2003) | lecrin_traiteur |

Pense à citer une source pour chaque valeur : l'annuaire des entreprises (annuaire-entreprises.data.gouv.fr) pour le SIREN et le siège, le site pour le reste.

---

## 3. Prix du petit-déjeuner : ✅ réglé (8 € HT/pers)

Tout est aligné sur 8 € HT/pers pour la formule Classique : pages villes (dont Boulogne, budget pour 20 personnes recalculé à 189 € HT), catégorie petits-déj (meta, FAQ, prix dans les données structurées, sous-titre), citiesData et llms.txt.
L'article Octobre Rose est aussi aligné (8 € HT/pers, 160 € HT pour 20 personnes).

---

## 4. Wikidata : où on en est (26/09/2026)
- Compte créé sous « L'ecrin Traiteur » → **demande de renommage en « Ramy Abdelaty » envoyée** (Meta-Wiki, en attente de validation ; email de confirmation à ramyabdelaty@gmail.com).
- SIREN vérifié : **100102672** (L'Écrin des Terroirs, NAF 56.21Z, siège Suresnes, société créée le 20/01/2026). Date de fondation de la marque retenue : 2025.
- Fiche **pas encore créée**. Une fois le renommage validé : libellé « L'Écrin Traiteur », description « traiteur d'entreprise à Paris et en Île-de-France », alias « L'Écrin des Terroirs | L'Écrin », puis les propriétés du tableau ci-dessus (siège = Suresnes).
- ✅ Suresnes = siège social (Wikidata, P159) ; Boulogne-Billancourt = bureaux et départ des livraisons (site, fiche Google). Les deux sont cohérents, rien à changer sur le site.
