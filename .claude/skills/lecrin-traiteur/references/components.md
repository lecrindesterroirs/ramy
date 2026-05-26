# Composants — L'Écrin Traiteur

## shadcn/ui — surcharges obligatoires

Tous les composants shadcn/ui doivent être surchargés avec les tokens L'Écrin. Ne jamais utiliser les variants par défaut (bleu, gris neutre, police système).

### Button

```tsx
// variants/button.ts — surcharge complète
const buttonVariants = cva(
  "inline-flex items-center justify-center font-[var(--font-ui)] font-medium text-[var(--text-ui)] transition-all duration-200 tracking-wide rounded-sm",
  {
    variants: {
      variant: {
        // CTA principal — fond jaune, texte sombre
        primary: "bg-[var(--ecrin-yellow)] text-[var(--ecrin-dark)] hover:brightness-95 active:brightness-90",
        // Secondaire — contour fin, pas de fond
        outline: "border border-[var(--ecrin-dark)] text-[var(--ecrin-dark)] bg-transparent hover:bg-[var(--ecrin-mist)]",
        // Ghost — texte seulement, underline au hover
        ghost: "text-[var(--ecrin-dark)] hover:underline underline-offset-4 decoration-[var(--ecrin-yellow)]",
        // Inverse (sur fond sombre)
        inverse: "bg-[var(--ecrin-white)] text-[var(--ecrin-dark)] hover:bg-[var(--ecrin-cream)]",
      },
      size: {
        sm:  "h-9 px-4 text-sm",
        md:  "h-11 px-6",
        lg:  "h-13 px-8 text-base",
      }
    },
    defaultVariants: { variant: "primary", size: "md" }
  }
)
```

**Libellés de boutons autorisés :**
- "Demander un devis", "Nous contacter", "Découvrir nos offres", "En savoir plus"

**Libellés interdits :**
- "Commander", "Réserver", "S'inscrire", "Acheter", "Commencer"

---

### Card

```tsx
// Surcharge — bord fin, pas d'ombre dramatique
<Card className="border border-[var(--ecrin-mist)] bg-[var(--ecrin-white)] shadow-[var(--shadow-sm)] rounded-[var(--radius-md)]">
```

**Règle :** Les cards ne sont utilisées que pour le formulaire de devis et les témoignages. Les offres utilisent le composant `OfferRow`, pas des cards en grille.

---

### Badge

```tsx
// Label d'origine ou de catégorie
<Badge className="font-[var(--font-ui)] text-xs font-medium tracking-[0.08em] uppercase bg-[var(--ecrin-mist)] text-[var(--ecrin-green)] border-0 rounded-sm">
  Normandie
</Badge>

// Badge accent jaune
<Badge className="bg-[var(--ecrin-yellow)] text-[var(--ecrin-dark)] ...">
  Artisanal
</Badge>
```

---

### Input / Form

```tsx
// Surcharge input
<Input className="
  bg-[var(--ecrin-white)]
  border-[var(--ecrin-stone)]
  focus:border-[var(--ecrin-yellow)]
  focus:ring-1 focus:ring-[var(--ecrin-yellow)]
  font-[var(--font-ui)]
  text-[var(--ecrin-dark)]
  placeholder:text-[var(--ecrin-stone)]
  rounded-[var(--radius-sm)]
" />
```

---

### Sheet (menu mobile)

Utiliser le Sheet shadcn/ui pour la navigation mobile — pas un menu hamburger custom.

```tsx
<Sheet>
  <SheetTrigger asChild>
    <button aria-label="Menu" className="lg:hidden">
      {/* icône menu simple — 3 traits fin, couleur --ecrin-dark */}
    </button>
  </SheetTrigger>
  <SheetContent side="right" className="bg-[var(--ecrin-white)] w-[280px]">
    {/* Navigation verticale */}
  </SheetContent>
</Sheet>
```

---

## Composants custom

### NavigationBar

**Comportement :** transparente sur fond blanc/crème → fond `--ecrin-white` avec `border-bottom: 1px solid var(--ecrin-mist)` au scroll (threshold: 80px).

```tsx
interface NavigationBarProps {
  transparent?: boolean  // true sur hero plein écran
}

// Structure
<nav>
  <div className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between h-20">
    <Logo />
    <NavLinks />         {/* hidden lg:flex */}
    <div className="flex items-center gap-4">
      <Button variant="ghost">Contact</Button>
      <Button variant="primary">Demander un devis</Button>
      <MobileMenuTrigger />  {/* lg:hidden */}
    </div>
  </div>
</nav>
```

**Liens de navigation :** Accueil · Nos offres · Notre histoire · Contact

---

### HeroSection

Plein viewport (100dvh), photo de fond ou fond crème avec ornement typographique. Ne jamais mettre un gradient de couleur sur le fond.

```tsx
interface HeroSectionProps {
  image?: string           // chemin next/image — optionnel
  title: string            // titre en Cormorant Garamond Light Italic
  subtitle?: string        // sous-titre en Source Serif 4
  ctaLabel: string
  ctaHref: string
  overlay?: boolean        // overlay sombre si image de fond
}
```

**Avec image :**
```tsx
<section className="relative h-screen min-h-[600px] overflow-hidden">
  <Image src={image} fill className="object-cover ecrin-photo" alt="..." />
  <div className="absolute inset-0 bg-[var(--ecrin-dark)] opacity-30" />  {/* overlay discret */}
  <div className="absolute inset-0 flex flex-col justify-center px-6 lg:px-24">
    <h1 className="font-[var(--font-display)] font-light italic text-[var(--ecrin-white)]
                   text-[var(--text-display)] max-w-3xl leading-[1.1]">
      {title}
    </h1>
    {subtitle && <p className="mt-6 font-[var(--font-body)] text-[var(--ecrin-white)] opacity-80 text-xl max-w-xl">{subtitle}</p>}
    <Button variant="inverse" size="lg" className="mt-10 self-start">{ctaLabel}</Button>
  </div>
</section>
```

**Sans image (fond crème + ornement) :**
- Fond `--ecrin-cream`
- Ornement décoratif au-dessus du titre : ligne fine de 40px en `--ecrin-yellow`
- Texte en `--ecrin-dark`

---

### OfferRow

Layout éditorial alterné pour présenter les offres. **Ne jamais utiliser une grille de cards identiques en 3 colonnes.**

```tsx
interface OfferRowProps {
  title: string
  description: string
  details: string[]          // liste courte (3-4 items max)
  imageUrl: string
  imageAlt: string
  origin?: string            // ex: "Pain artisanal · Boulangerie Dupont, Seine-et-Marne"
  badge?: string             // ex: "Nouveau" | "Best-seller"
  ctaLabel?: string
  ctaHref?: string
  reverse?: boolean          // image à droite (alterner entre offres)
}
```

**Layout desktop :**
```
[Image 40%] [Texte 60%]  ← reverse=false
[Texte 60%] [Image 40%]  ← reverse=true
```

**Layout mobile :** image en haut pleine largeur, texte en dessous.

```tsx
<article className={`flex flex-col lg:flex-row ${reverse ? 'lg:flex-row-reverse' : ''} gap-0 min-h-[420px]`}>
  <div className="lg:w-2/5 relative overflow-hidden">
    <Image src={imageUrl} fill className="object-cover ecrin-photo" alt={imageAlt} />
  </div>
  <div className="lg:w-3/5 flex flex-col justify-center px-8 lg:px-16 py-12 bg-[var(--ecrin-white)]">
    {badge && <Badge className="self-start mb-4">{badge}</Badge>}
    <h3 className="font-[var(--font-display)] font-semibold text-[var(--text-h3)] text-[var(--ecrin-dark)]">{title}</h3>
    {origin && (
      <p className="mt-3 font-[var(--font-display)] italic text-sm text-[var(--ecrin-green)] tracking-wide">{origin}</p>
    )}
    <p className="mt-4 font-[var(--font-body)] text-[var(--ecrin-dark)] opacity-80 leading-relaxed">{description}</p>
    <ul className="mt-6 space-y-2">
      {details.map(d => (
        <li key={d} className="flex items-start gap-3 text-sm font-[var(--font-body)]">
          <span className="w-1 h-1 rounded-full bg-[var(--ecrin-yellow)] mt-2 shrink-0" />
          {d}
        </li>
      ))}
    </ul>
    {ctaLabel && <Button variant="ghost" className="mt-8 self-start">{ctaLabel} →</Button>}
  </div>
</article>
```

---

### ProducerSpotlight

Section qui met en avant UN producteur par itération. Renforce la preuve du terroir.

```tsx
interface ProducerSpotlightProps {
  name: string           // "Maison Dupont"
  role: string           // "Boulanger artisanal"
  region: string         // "Seine-et-Marne · Île-de-France"
  description: string    // 2-3 phrases max
  imageUrl: string
}
```

Layout : fond `--ecrin-cream`, image ronde ou recadrée carrée à gauche, texte à droite. Utiliser `Cormorant SC` pour la région.

---

### QuoteForm (Formulaire de devis)

3 étapes — jamais un formulaire unique à 10 champs.

```
Étape 1 — Le repas
  - Type de repas (radio : Petit déjeuner / Goûter / Plateau repas / Buffet)
  - Régimes alimentaires (checkboxes : Sans gluten / Végétarien / Halal / Autre)

Étape 2 — La logistique
  - Nombre de personnes (input number)
  - Date souhaitée (date picker)
  - Heure de livraison (time input)
  - Adresse de livraison (input text)

Étape 3 — Vos coordonnées
  - Prénom et Nom
  - Email professionnel
  - Téléphone
  - Message libre (optionnel)
```

**Validation :** React Hook Form + Zod. Chaque étape valide ses champs avant de passer à la suivante.
**Feedback :** Message de confirmation chaleureux après envoi — pas "Votre message a été envoyé".

---

### SectionIntro

Titre de section centré avec ornement. Remplace les en-têtes generiques.

```tsx
<div className="text-center max-w-2xl mx-auto">
  {/* Ornement — ligne fine jaune */}
  <div className="w-10 h-px bg-[var(--ecrin-yellow)] mx-auto mb-6" />
  
  {/* Surtitle optionnel en Jost uppercase */}
  {surtitle && (
    <p className="font-[var(--font-ui)] text-xs tracking-[0.2em] uppercase text-[var(--ecrin-stone)] mb-3">
      {surtitle}
    </p>
  )}
  
  <h2 className="font-[var(--font-display)] font-semibold text-[var(--text-h2)] text-[var(--ecrin-dark)] leading-tight">
    {title}
  </h2>
  
  {description && (
    <p className="mt-4 font-[var(--font-body)] text-[var(--ecrin-dark)] opacity-70 leading-relaxed">
      {description}
    </p>
  )}
</div>
```

---

### Separator décoratif

À utiliser entre les grandes sections pour créer du rythme. Jamais une `<hr>` HTML brute.

```tsx
// Option A — ligne fine
<div className="w-24 h-px bg-[var(--ecrin-stone)] opacity-40 mx-auto my-16" />

// Option B — ornement typographique (pour les ruptures de contenu importantes)
<div className="flex items-center gap-4 my-16 opacity-30">
  <div className="flex-1 h-px bg-[var(--ecrin-stone)]" />
  <span className="font-[var(--font-display)] italic text-lg text-[var(--ecrin-stone)]">◆</span>
  <div className="flex-1 h-px bg-[var(--ecrin-stone)]" />
</div>
```
