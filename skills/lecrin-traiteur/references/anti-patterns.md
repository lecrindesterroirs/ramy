# Anti-patterns — L'Écrin Traiteur

Ce fichier liste ce qui est interdit. Vérifier ces règles avant de valider tout rendu.

---

## Polices interdites

```
Inter, Roboto, Montserrat, Poppins, Open Sans, Nunito, Raleway, Lato,
DM Sans, Plus Jakarta Sans, Outfit seul, Quicksand, Mulish,
toute police "system-ui" par défaut pour les titres
```

**Pourquoi :** Ces polices sont omniprésentes dans les sites SaaS et food génériques. Elles ne portent aucune identité.

---

## Couleurs interdites

```
Tout bleu (#0000FF, #3B82F6, #2563EB...)
Tout violet (#8B5CF6, #7C3AED...)
Orange vif numérique (#FF6B00, #F97316...)
Jaune fluo (#FFD700, #F5E642...)
Gris neutre froid (#F3F4F6, #E5E7EB, #9CA3AF comme couleur principale)
Noir pur (#000000) — utiliser --ecrin-dark (#1A1A18) à la place
Blanc pur (#FFFFFF) — utiliser --ecrin-white (#FAFAF7)
Dégradés linéaires (gradient hero, gradient de fond, gradient sur bouton)
```

---

## Patterns de layout interdits

### La grille de 3 cards identiques
```tsx
// ❌ INTERDIT
<div className="grid grid-cols-3 gap-6">
  <OfferCard ... />
  <OfferCard ... />
  <OfferCard ... />
</div>

// ✅ Utiliser OfferRow en layout alterné
```

### Le hero générique
```tsx
// ❌ INTERDIT — hero avec gradient de couleur
<section style={{ background: 'linear-gradient(135deg, #E0A126, #3E5232)' }}>
  <h1>Bienvenue chez L'Écrin</h1>
  <p>Votre traiteur artisanal de confiance</p>
  <button>Découvrir</button>
</section>

// ✅ Hero : photo réelle + overlay discret OU fond crème + ornement typographique
```

### Le footer 4 colonnes SaaS
```tsx
// ❌ INTERDIT
<footer>
  <div className="grid grid-cols-4">
    <div><h3>Produits</h3>...</div>
    <div><h3>Entreprise</h3>...</div>
    <div><h3>Ressources</h3>...</div>
    <div><h3>Légal</h3>...</div>
  </div>
</footer>

// ✅ Footer sobre : logo + nav principale + contact + réseaux
```

### Le carrousel / slider
```
❌ Aucun carousel (testimonials, photos, offres)
✅ Une ou deux citations fixes, pas de défilement automatique
✅ Galerie statique en mosaïque si nécessaire
```

### La section "Pourquoi nous choisir"
```tsx
// ❌ INTERDIT
<section>
  <h2>Pourquoi choisir L'Écrin ?</h2>
  <div className="grid grid-cols-4">
    <div><Icon /><h3>Qualité</h3><p>...</p></div>
    <div><Icon /><h3>Rapidité</h3><p>...</p></div>
    <div><Icon /><h3>Artisanal</h3><p>...</p></div>
    <div><Icon /><h3>Livraison</h3><p>...</p></div>
  </div>
</section>

// ✅ Remplacer par une section ProducerSpotlight ou une citation client avec contexte
```

### La liste à checkmarks génériques
```tsx
// ❌ INTERDIT
<ul>
  <li>✓ Artisanal</li>
  <li>✓ Local</li>
  <li>✓ Frais</li>
  <li>✓ Sans conservateurs</li>
</ul>

// ✅ Nommer les producteurs : "Pain au levain de la Boulangerie Dupont, Melun"
```

---

## Éléments UI interdits

```
Chat widget flottant (Intercom, Crisp, Tawk...)
Bandeau cookie au-dessus du fold (intégrer en bas, discret)
Compteurs animés ("500+ clients satisfaits")
Stars de notation / avis Google embed
Progress bars / jauge de "satisfaction" ou "qualité"
Compte à rebours ou offre limitée
Pop-in à l'entrée du site
Notification push opt-in immédiat
Prix publics (tableur de tarifs, starting from...)
Icônes FontAwesome ou Heroicons style "outline plat 2px"
Badge "Nouveau" ou "Populaire" sur toutes les offres
Bouton WhatsApp vert flottant
```

---

## Animations interdites

```
Parallaxe agressif (arrière-plan qui défile à vitesse différente et donne le vertige)
Animations de texte lettre par lettre sur les titres longs
Bounce / spring sur les boutons
Rotation / flip de carte au hover
Loader élaboré au chargement de page
Effets de confetti ou particules
Curseur personnalisé
Page entière qui "slide" à chaque scroll
```

---

## Textes et copywriting interdits

### Accroches génériques
```
❌ "Des produits artisanaux sélectionnés avec soin"
❌ "Notre expertise au service de votre entreprise"
❌ "La qualité, notre priorité"
❌ "Nous mettons tout en œuvre pour votre satisfaction"
❌ "Faites confiance à notre savoir-faire"
❌ "Une équipe passionnée à votre écoute"
❌ "Bienvenue chez L'Écrin, votre traiteur de confiance"
```

### Libellés de boutons interdits
```
❌ "En savoir +" (avec signe +)
❌ "Cliquez ici"
❌ "Commandez maintenant"
❌ "Réservez"
❌ "Profitez de"
❌ "Découvrez nos formules exceptionnelles"
```

### Structure de page interdite
```
❌ Page À Propos avec seulement des valeurs abstraites ("Authenticité · Excellence · Passion")
   sans photo humaine, sans histoire concrète

❌ Page Offres avec seulement des noms de produits et des prix
   sans contexte d'usage, sans preuve d'origine

❌ Page Contact avec seulement un formulaire
   sans adresse, sans zone de livraison, sans indication de délai de réponse
```

---

## Checklist de validation avant livraison

Avant de considérer un composant ou une page comme terminé, vérifier :

- [ ] Aucune police de la liste interdite
- [ ] Aucune couleur hors des tokens `--ecrin-*`
- [ ] Texte clair sur fond clair : contraste vérifié (≥ 4.5:1)
- [ ] Texte clair sur jaune `#E0A126` : uniquement `--ecrin-dark` (jamais blanc)
- [ ] Au moins une mention d'origine/producteur dans les sections offres
- [ ] Pas de grille de cards identiques pour les offres
- [ ] Pas de prix publics
- [ ] Pas de slider/carrousel
- [ ] Navigation mobile via Sheet shadcn
- [ ] Images via `next/image` avec `alt` descriptif incluant contexte géographique
- [ ] Le CTA principal est "Demander un devis" ou équivalent
