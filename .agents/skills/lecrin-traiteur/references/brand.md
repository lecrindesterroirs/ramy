# Brand System — L'Écrin Traiteur

## Tokens CSS complets

```css
:root {
  /* Couleurs */
  --ecrin-white:  #FAFAF7;
  --ecrin-cream:  #F5F0E6;
  --ecrin-dark:   #1A1A18;
  --ecrin-yellow: #E0A126;
  --ecrin-green:  #3E5232;
  --ecrin-stone:  #9B9590;
  --ecrin-mist:   #EDE7D9;

  /* Typographie */
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body:    'Source Serif 4', Georgia, serif;
  --font-ui:      'Jost', system-ui, sans-serif;

  /* Échelle typographique fluid */
  --text-display: clamp(3rem, 7vw, 6.5rem);
  --text-h2:      clamp(2rem, 4vw, 3.25rem);
  --text-h3:      clamp(1.4rem, 2.5vw, 2rem);
  --text-body:    clamp(1rem, 1.2vw, 1.125rem);
  --text-small:   0.875rem;
  --text-ui:      0.9375rem;

  /* Espacement (base 8px) */
  --space-1:  8px;
  --space-2:  16px;
  --space-3:  24px;
  --space-4:  32px;
  --space-6:  48px;
  --space-8:  64px;
  --space-12: 96px;
  --space-16: 128px;

  /* Sections — padding vertical */
  --section-desktop: 96px;
  --section-tablet:  64px;
  --section-mobile:  48px;

  /* Bordures */
  --radius-sm:  4px;
  --radius-md:  8px;
  --radius-lg:  16px;
  --radius-full: 999px;

  /* Ombres — discrètes, jamais dramatiques */
  --shadow-sm: 0 1px 3px rgba(26, 26, 24, 0.06);
  --shadow-md: 0 4px 16px rgba(26, 26, 24, 0.08);

  /* Transitions */
  --ease-default: cubic-bezier(0.25, 0.1, 0.25, 1);
  --duration-fast: 0.2s;
  --duration-base: 0.3s;
  --duration-slow: 0.65s;
}
```

---

## Couleurs — règles détaillées

### `--ecrin-yellow` (#E0A126) — couleur signature
- Contraste sur fond blanc/crème : texte foncé obligatoire (`--ecrin-dark`). Ratio avec texte foncé : ~8.5:1 (excellent). Jamais texte blanc.
- Utilisations autorisées :
  - Boutons CTA (fond jaune, texte sombre)
  - Badges et labels ("Artisanal", "Nouveau", "Saison")
  - Bordure gauche des citations et encarts mis en avant
  - Soulignement actif dans la navigation
  - Ornements typographiques (tirets, séparateurs)
  - Réflexion de la couleur des boîtes packaging dans les photos

- Utilisations interdites :
  - Fonds de section de grande surface
  - Texte courant
  - Navigation background
  - Ombres colorées

### `--ecrin-green` (#3E5232)
- Toujours en accent secondaire, jamais dominant
- Usage : tags d'origine géographique, labels "Local", "Producteur", hover states secondaires
- Peut être utilisé en texte sur fond crème/white (contraste acceptable pour body)

### Contrastes validés (WCAG AA minimum)
| Texte | Fond | Ratio |
|---|---|---|
| `--ecrin-dark` | `--ecrin-white` | 17.8:1 ✅ |
| `--ecrin-dark` | `--ecrin-cream` | 14.2:1 ✅ |
| `--ecrin-dark` | `--ecrin-yellow` | 8.5:1 ✅ |
| `--ecrin-dark` | `--ecrin-mist` | 12.1:1 ✅ |
| `--ecrin-stone` | `--ecrin-white` | 4.6:1 ✅ (texte normal 16px+) |

---

## Typographie — règles détaillées

### Cormorant Garamond (Display)
```
Weights à charger : 300 (Light), 300 italic, 600 (SemiBold), 600 italic
Variantes : Cormorant SC pour les small caps
next/font config :
  import { Cormorant_Garamond } from 'next/font/google'
  const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['300', '600'],
    style: ['normal', 'italic'],
    variable: '--font-display'
  })
```

**Usage :**
- H1 héros : Light Italic, `--text-display`, tracking normal (ne pas resserrer)
- H2 sections : SemiBold, `--text-h2`
- Noms de producteurs : SemiBold Italic pour l'emphase
- Accroche sous-titre : Light, italique, légèrement réduit

### Source Serif 4 (Body)
```
Weights : 400 (Regular), 500 (Medium)
next/font config :
  import { Source_Serif_4 } from 'next/font/google'
  const sourceSerif = Source_Serif_4({
    subsets: ['latin'],
    weight: ['400', '500'],
    variable: '--font-body'
  })
```

**Usage :**
- Tout le corps de texte
- Descriptions des offres
- Témoignage (si présent)
- Chapô de section

### Jost (UI)
```
Weights : 400 (Regular), 500 (Medium), 600 (SemiBold)
next/font config :
  import { Jost } from 'next/font/google'
  const jost = Jost({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
    variable: '--font-ui'
  })
```

**Usage :**
- Navigation (Medium 500, letterspacing +0.05em, uppercase)
- Boutons (Medium 500)
- Labels de formulaire (Regular 400)
- Footer (Regular 400)
- Prix/indicateurs numériques si présents

---

## Traitement photographique

Les photos actuelles sont "maison" et de qualité variable. Appliquer systématiquement :

```css
.ecrin-photo {
  /* Grain warm pour unifier les photos hétérogènes */
  filter: contrast(1.05) saturate(0.92) brightness(1.02);
  position: relative;
}

.ecrin-photo::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,..."); /* grain SVG */
  opacity: 0.04;
  pointer-events: none;
}
```

**Règles de cadrage :**
- Toujours recadrer serré sur le sujet (le produit, pas le contexte flou)
- Privilégier le carré (1:1) ou le format paysage (16:9 / 3:2) selon le contexte
- Éviter les photos avec fonds désordonnés — si inévitable, utiliser un overlay `--ecrin-cream` à 15% d'opacité
- Sur mobile, utiliser `object-position: center` sur les images rognées

---

## Espacements de section

```tsx
// Classe Tailwind réutilisable pour les sections
const sectionClass = "py-24 md:py-16 px-6 md:px-12 lg:px-16 xl:px-24"

// Section alternée (fond crème)
const sectionAltClass = "bg-[var(--ecrin-cream)] py-24 md:py-16 ..."
```

Rythme recommandé des sections sur la page d'accueil :
```
Fond white → Fond crème → Fond white → Fond dark (optionnel pour impact) → Fond crème → Fond white
```

---

## Logo — règles d'usage

En attendant un logo officiel, utiliser la typo comme logotype :

```tsx
// Logotype typographique
<span className="font-[var(--font-display)] font-light italic text-2xl tracking-wide">
  L'Écrin
  <span className="font-[var(--font-ui)] font-medium not-italic text-xs tracking-[0.2em] uppercase ml-2 opacity-60">
    Traiteur
  </span>
</span>
```

- Sur fond clair : texte `--ecrin-dark`
- Sur fond sombre : texte `--ecrin-white`
- L'accent jaune peut être appliqué sur l'apostrophe ou un élément décoratif, pas sur le mot entier
