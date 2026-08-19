# Structure des pages — L'Écrin Traiteur

## Principes communs à toutes les pages

- Chaque page commence par la `NavigationBar`
- Chaque page se termine par le `Footer`
- Le rythme des sections alterne fond `--ecrin-white` et fond `--ecrin-cream`
- Le CTA principal "Demander un devis" apparaît au moins une fois par page
- Pas de sidebar. Layout colonne unique avec largeur max `1280px`, centré.

---

## Page 1 — Accueil (`/`)

**Objectif :** Capter l'attention, qualifier le visiteur, déclencher une prise de contact.

### Sections dans l'ordre :

**1. HeroSection** (fond : photo ou crème)
- Titre : accroche sensorielle et directe (ex : "Le terroir, livré dans vos bureaux")
- Sous-titre : context B2B en 1 phrase (ex : "Petits déjeuners, goûters et plateaux repas artisanaux pour vos équipes à Paris")
- CTA : "Découvrir nos offres" (secondaire) + "Demander un devis" (primaire)
- Fond : soit photo plein écran avec overlay discret, soit fond `--ecrin-cream` avec ornement

**2. SectionIntro — La promesse** (fond : white)
- Surtitle : "Notre engagement"
- Titre : 1 phrase qui résume le différenciateur (ex : "Chaque produit, sourcé. Chaque livraison, soignée.")
- Description : 2-3 phrases max sur l'approche artisanale et le soin de présentation
- Aucun bouton dans cette section — c'est un moment de narration

**3. OfferRow × 3 — Aperçu des offres** (fond : alternance white/cream par row)
- Présenter 3 offres principales (petit déjeuner, goûter, plateau repas)
- Chaque row avec image + description courte + badge origine + lien "Voir l'offre"
- Buffet mentionné en note "Bientôt disponible" dans la 3e row ou section séparée

**4. ProducerSpotlight — Le terroir en visage** (fond : cream)
- Mettre en avant UN producteur partenaire
- Photo + nom + région + rôle + 2-3 phrases
- Accroche de section : "Nos partenaires du terroir"

**5. Section preuve sociale** (fond : white)
- 1 ou 2 témoignages d'entreprises clientes (citation + nom + entreprise + taille si possible)
- Pas de carrousel. 1 ou 2 citations côte à côte, fixes.
- Format : grande citation en Cormorant Garamond Italic, attribution en Jost small caps

**6. Section CTA finale** (fond : dark `--ecrin-dark`)
- Titre en Cormorant Garamond Light sur fond sombre
- Sous-titre rassurant (ex : "Réponse sous 24h, sans engagement")
- Bouton inverse : "Demander un devis"
- Cette section dark crée le contraste visuel final avant le footer

---

## Page 2 — Nos Offres (`/offres`)

**Objectif :** Détailler chaque offre de façon éditoriale, inciter au devis.

### Structure :

**1. Hero minimal** (fond : cream, pas de photo)
- Titre de page H1
- Courte description de l'approche globale (2 phrases)
- Ornement typographique sous le titre

**2. OfferRow × N — Une row par offre**
Ordre recommandé :
```
Petit déjeuner   → reverse=false (image gauche)
Goûter           → reverse=true  (image droite)
Plateau repas    → reverse=false
Buffet           → reverse=true (avec badge "Bientôt disponible" si non encore actif)
```

Chaque OfferRow contient :
- Nom de l'offre
- Description : ce qu'elle est, pour qui, dans quel contexte
- Détails (4 items max) : contenus typiques, occasion, zone de livraison
- Origine d'au moins un produit
- Lien ou bouton "Demander un devis pour cette offre"

**3. Section FAQ minimale** (fond : cream)
⚠️ PAS un accordion générique shadcn avec toggle chevron.  
Structure : questions en Cormorant SemiBold, réponses en Source Serif 4, layout colonne unique espacé.

Questions recommandées :
- "Dans quelle zone livrez-vous ?"
- "Quels sont vos délais de commande ?"
- "Proposez-vous des menus adaptés aux régimes alimentaires ?"
- "Comment se passe la première commande ?"

**4. CTA finale** (fond : dark)
- Identique à la page Accueil

---

## Page 3 — Notre Histoire (`/notre-histoire`)

**Objectif :** Humaniser la marque, créer la confiance, montrer la cohérence derrière le nom.

### Structure :

**1. Hero éditorial** (fond : cream ou photo humaine)
- Titre : pas "Notre histoire" littéralement — une accroche narrative (ex : "Un nom pour une idée simple : chaque repas mérite d'être un trésor")
- Aucun CTA dans ce hero

**2. Section fondatrice** (fond : white)
- Photo de l'équipe ou du fondateur **obligatoire** — pas que des valeurs abstraites
- Texte : l'origine du projet, ce qui a déclenché L'Écrin, en quoi c'est différent des traiteurs classiques
- 3-4 paragraphes max en Source Serif 4
- Pas de liste à puces dans cette section — narration fluide

**3. Section "Notre approche du sourcing"** (fond : cream)
- Comment les producteurs sont sélectionnés
- Ce que "artisanal" signifie concrètement pour L'Écrin (critères)
- 1-2 photos de produits ou de packaging

**4. Section ProducerSpotlight × 2** (fond : alternance)
- 2 producteurs partenaires mis en avant avec photo, région, description
- Si les producteurs ne sont pas encore formalisés : laisser un placeholder "Producteur à venir" plutôt que d'inventer

**5. Section valeurs** (fond : dark)
- 3 valeurs maximum — pas de liste à 6 items avec icônes
- Chaque valeur : 1 mot en Cormorant Garamond grand + 2 phrases d'explication
- Préférer les valeurs concrètes et vérifiables aux mots vagues : pas "Passion" mais "Sourcing identifié"

---

## Page 4 — Contact / Devis (`/contact`)

**Objectif :** Convertir — transformer un visiteur intéressé en lead qualifié.

### Structure :

**1. Intro sobre** (fond : white)
- Titre H1 direct : "Demandez votre devis"
- Sous-titre rassurant : zone de livraison + délai de réponse
- Pas de hero photo dans cette page — focus sur l'action

**2. QuoteForm 3 étapes** (fond : white, card légère)
- Étape 1 : type de repas + régimes
- Étape 2 : logistique (personnes, date, heure, adresse)
- Étape 3 : coordonnées + message
- Indicateur de progression discret (1/3 · 2/3 · 3/3)
- Message de confirmation après envoi : chaleureux, humain (ex : "Merci, nous revenons vers vous sous 24h avec une proposition personnalisée")

**3. Section info pratiques** (fond : cream, colonne latérale ou dessous)
- Email de contact
- Numéro de téléphone (si disponible)
- Zone de livraison (liste des arrondissements/départements couverts)
- Délai de commande recommandé
- Horaires de livraison

**4. Section rassurance minimale** (fond : white)
- 3 phrases courtes : sans engagement / réponse rapide / adapté à votre entreprise
- Pas de badges, pas d'icônes — juste du texte bien espacé en Source Serif 4

---

## Footer (commun à toutes les pages)

```
Layout desktop : 3 colonnes
  Col 1 : Logo + tagline courte (2 lignes max)
  Col 2 : Navigation principale (Accueil, Offres, Notre histoire, Contact)
  Col 3 : Contact (email, zone de livraison, réseaux sociaux 2 icônes max)

Layout mobile : empilé vertical, centré

Fond : --ecrin-dark
Texte : --ecrin-white (opacité 0.7 pour les liens secondaires)
Accent : --ecrin-yellow pour les liens au hover (pas de soulignement par défaut)
Séparateur supérieur : 1px solid rgba(255,255,255,0.1)

Mention légale : Copyright + mentions légales sur une ligne, texte très petit, opacité 0.4
```

**Pas de :**
- Newsletter signup dans le footer
- Répétition du CTA "Demander un devis" dans le footer
- Liens vers des pages inexistantes (pas de page Blog si elle n'existe pas encore)
