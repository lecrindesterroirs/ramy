# Brand System — L'Écrin Traiteur

> Mis à jour le 9 octobre 2026 à partir du code réel du site (`app/globals.css`, `components/`).
> L'ancienne charte (Cormorant Garamond, Source Serif 4, Jost, tokens `--ecrin-*`, Tailwind / shadcn)
> n'a jamais été celle du site déployé : ne plus l'utiliser.

## Polices

| Rôle | Police | Fichier (`public/fonts/`) |
|---|---|---|
| Titres | **Baskerville Display PT**, poids 400 (repli Georgia) | `BaskervilleDisplayPT.woff2` |
| Corps, labels, boutons, navigation | **Neue Montreal** (PP Neue Montreal), 400 et 500 (repli Helvetica Neue) | `PPNeueMontreal-Regular.woff2`, `PPNeueMontreal-Medium.woff2` |

Chargées par `@font-face` dans `app/globals.css` (`font-display: swap`). Pas de Google Fonts, pas de `next/font/google`.

**Règles**
- **Jamais d'italique dans les titres.** Le site neutralise même `<em>` dans les titres (`font-style: normal`).
  L'italique n'existe que sur de courtes citations éditoriales (manifeste, témoignages, signature du pied de page)
  et, par exception admise par Ramy, un titre de la page « Qui nous sommes ». Ne pas en ajouter ailleurs.
- Titres en poids 400 uniquement : la hiérarchie vient de la taille, pas de la graisse.
- Labels et boutons : Neue Montreal 500, MAJUSCULES, interlettrage 0,10 à 0,12 em ; sur-titres de section 11px, interlettrage 0,18 à 0,22 em, couleur `--accent-deep`.
- Pas de petites capitales, pas d'ornements « luxe générique » (losanges ◆, filets décoratifs en série).

## Échelle typographique (classes de `globals.css`)

| Classe | Police | Taille | Interligne | Interlettrage |
|---|---|---|---|---|
| `.hero-title` | Baskerville | `clamp(54px, 6.4vw, 92px)` | 1,08 | −0,02 em |
| `.section-title-xl` | Baskerville | `clamp(40px, 4vw, 64px)` | 0,97 | 0,01 em |
| `.section-title-md` | Baskerville | `clamp(28px, 3vw, 44px)` | 1,0 | 0,008 em |
| `.body-lg` | Neue Montreal 400 | 18px | 1,65 | — |
| `.body` (et `body`) | Neue Montreal 400 | 16px | 1,7 | — |
| `.caption` | Neue Montreal 400 | 12px | — | 0,06 em |
| `.label` | Neue Montreal 500, majuscules | 11px | — | 0,12 em |

## Couleurs (variables de `:root`)

```css
:root {
  --bg-primary:     #FFFFFF;  /* fond de page */
  --bg-secondary:   #F8F5EF;  /* crème : sections alternées */
  --white:          #FFFFFF;
  --text-primary:   #111111;  /* titres, texte fort */
  --text-secondary: #605A4F;  /* corps de texte — WCAG AA, y compris sur crème */
  --accent:         #E0A126;  /* jaune signature : fonds, filets, ornements */
  --accent-deep:    #875E10;  /* jaune profond : l'accent EN TEXTE sur fond clair (WCAG AA) */
}
```

Autres teintes présentes dans le code : `#1C1614` (titre du hero), `#1A1A18` (texte sur fond jaune),
`#151515` / `#171310` (fonds sombres).

**Règles**
- **`#E0A126` ne s'utilise jamais en texte sur fond clair** (contraste insuffisant) : pour un mot ou un label
  jaune, prendre `--accent-deep` `#875E10`.
- Sur fond jaune : texte sombre `#1A1A18`, jamais blanc.
- Le jaune reste un accent : filet de 40px × 1px (`.accent-line`), bordure du bouton accent, un bloc d'appel
  à l'action (`.cta-yellow-box`). Pas de grandes sections jaunes, pas d'ombres colorées.
- Pas de vert de marque, pas d'autre couleur d'accent.

## Formes, boutons, espacement

- **Angles vifs partout** : `border-radius: 0 !important` est appliqué globalement (un `borderRadius` en ligne est
  ignoré). Exceptions voulues, en CSS `!important` : pastilles rondes à 50 %, vignettes du menu à 4px.
- **Boutons réellement utilisés** (Neue Montreal 500, 11–12px, majuscules, interlettrage 0,1 em) :
  - bouton plein : fond `var(--accent)`, **texte sombre `#1A1A18`**, `padding: 14px 32px`, survol = opacité 0,85 ;
  - lien souligné : texte + `borderBottom: 1px solid` + flèche `→` ;
  - sur photo ou fond sombre : bordure blanche, texte blanc.
  - Jamais de texte blanc sur fond jaune.
  - Les classes `.btn-primary` / `.btn-secondary` / `.btn-accent` existent dans `globals.css` mais ne sont pas
    utilisées par les composants (styles en ligne) ; ne pas s'appuyer dessus.
- **Gouttières** : 72px ordinateur, 40px tablette, 24px mobile. Largeurs max : 1440px (sections larges), 1280px (`.container`, fiches), 760px (texte long).
- **Sections** : grand rythme vertical (de l'ordre de 120px en haut et en bas sur ordinateur).
- Focus clavier visible : contour 2px `#111111`.

## Photographie

- Vrais produits, sur **planches de bois**, en **lumière naturelle**. Ne pas flouter les photos produit :
  elles sont l'argument de vente.
- **Texte sur photo : texte nu**, avec un assombrissement en dégradé pleine largeur (ou un léger filtre
  global, luminosité ≈ 0,80). **Jamais de bloc ou de cartouche sombre derrière le texte.**
- Survol : zoom discret (`.img-zoom`, échelle 1,03 en 0,8 s).
- Images via `next/image` ; formats `.webp` dans `public/`.

## Mouvement

- Défilement fluide **Lenis** sur tout le site (`components/SmoothScroll.js`) : ne jamais ajouter
  `scroll-behavior: smooth`.
- Apparitions et parallaxe : composants `Reveal`, `ScrollRevealInit`, `ParallaxImage` et classe `.reveal`.
  Pas de Framer Motion.

## Logo

- `public/logo-lecrin.svg` (fond clair) et `public/logo-footer.svg` (pied de page).
- Ne pas recomposer le logo en texte, ne pas le colorer en jaune.

## Technique (rappel)

Next.js 14 (App Router) en **JavaScript** (`.js`), React 18. Style par **classes CSS de `globals.css` +
styles en ligne** dans les composants. Pas de Tailwind, pas de shadcn/ui, pas de TypeScript.

## Livrables hors site (catalogue PDF, documents)

- Mêmes polices, embarquées en base64 pour un fichier autonome.
- Ne jamais mettre `box-shadow` sur un petit élément (pastille, icône) : utiliser `filter: drop-shadow(...)`.
  `box-shadow` reste possible sur une grande carte rectangulaire.
