# Composants — L'Écrin Traiteur

> Refaite le 9 octobre 2026 à partir des 41 fichiers réels de `components/` (Next.js 14, JavaScript).
> Charte : `references/brand.md`. Avant de créer un composant, vérifier qu'il n'existe pas déjà ici.

## Conventions du site

- **Un composant par fichier**, PascalCase `.js`, export par défaut (sauf `FAQSchema`, `PriceSchema`, `CTADevis` : exports nommés). Sections en `XxxSection`, données structurées en `XxxJsonLd` / `XxxSchema`. Imports relatifs (`../lib/…`).
- **Style** : objets `style={{…}}` en ligne, typographie comprise. Pas de Tailwind, pas de modules CSS, pas de shadcn/ui. Quelques classes de `globals.css` seulement : `container`, `label`, `body`, `reveal`, `reveal-stagger`, `img-zoom`, `accent-line`, `section-title-xl`.
- **Responsive** : chaque composant finit par `<style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `…` }} />` avec des media queries sur des **classes locales préfixées** (`mad-`, `faq-`, `gf-`…), en `!important` pour passer devant les styles en ligne. Ces classes sont globales de fait : préfixe unique obligatoire.
- **Points de rupture** : 768 px (mobile) et 769–1024 px (tablette). Navbar : hamburger sous 960 px.
- **Gouttières** : 72 px ordinateur, 40 px tablette, 24 px mobile. Largeurs max : 1440 px (sections larges), 1280 px (`.container`, fiches), 760 px (texte long).
- **Coins** : `border-radius: 0 !important` global. Un `borderRadius` en ligne est ignoré ; un arrondi voulu demande une règle CSS en `!important`.
- **Survols** : `onMouseEnter` / `onMouseLeave` ou `useState` → d'où `'use client'` sur beaucoup de composants.
- **Images** : `next/image` en `fill` + `sizes` dans un parent `position: relative` dimensionné (heros, cartes produit, parallaxes) ; `<img loading="lazy">` pour logos, SVG, Navbar, Footer. Fichiers `.webp` dans `public/`.
- **Liens** : `<a href>` presque partout ; `next/link` seulement dans `Breadcrumb`, `GalleryFiche`, `ArtisansMapSection`.
- **Hauteur d'en-tête** : `paddingTop: 'var(--header-h)'`, ou `calc(var(--banner-h) + var(--nav-h))` avec `<Navbar showBanner />`.
- **Apparitions**, deux mécanismes :
  1. classe `.reveal` / `.reveal-stagger` + `ScrollRevealInit` global — sections de la page d'accueil. Piège : un élément `.reveal` inséré plus de 300 ms après le montage n'est jamais révélé.
  2. composant `<Reveal delay mode y duration>` — pages intérieures. Piège : son wrapper est un `div` en `display: grid`.

## Gabarit d'une section

```jsx
<section className="xxx-section" style={{ background: 'var(--bg-primary)', paddingTop: '112px', paddingBottom: '56px' }}>
  <div className="reveal xxx-title-wrap" style={{ padding: '0 72px 40px', textAlign: 'center' }}>
    <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: '14px' }}>
      Sur-titre
    </p>
    <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(28px, 3.2vw, 44px)', fontWeight: 400, letterSpacing: '-0.01em', lineHeight: 1.15, color: 'var(--text-primary)', marginBottom: '14px' }}>
      Titre de section
    </h2>
    <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.7, color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto' }}>
      Texte d'introduction.
    </p>
  </div>
  {/* contenu */}
  <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
    @media (max-width: 768px) { .xxx-title-wrap { padding: 0 24px 28px !important; } }
  ` }} />
</section>
```
(modèle réel : `CreationsSection.js`). Appels à l'action : lien souligné (10–12 px, majuscules, `borderBottom: 1px solid`, flèche `→`) ou bouton plein (fond `var(--accent)`, texte `#1A1A18`, 11–12 px majuscules, `padding: 14px 32px`, survol opacité 0,85).

## 1. Structure et navigation

| Composant | Rôle | Props | À savoir |
|---|---|---|---|
| `Navbar` | Barre fixe, mega-menus à cartes image, menu mobile plein écran, bandeau défilant | `showBanner` (bool), `forceScrolled` (bool) | Menus en dur (`MOMENTS`, `UNIVERS_ITEMS`, `JOURNAL_ITEMS`). Transparente seulement sur `/` avant 60 px de défilement. Panneaux toujours dans le HTML (liens explorables). Bouton devis rose pendant Octobre Rose. |
| `Footer` | Pied de page : logo, 5 colonnes de liens, barre légale | — | Coordonnées et « © 2026 » en dur. `MobileCTA` repère la balise `<footer>`. |
| `PromoBanner` | Bandeau de campagne fixe, refermable | — (objet `CAMPAGNE` dans le fichier) | Monté dans `app/layout.js`. Pose `promo-on` sur `<html>` (→ `--promo-h`). Dates dupliquées dans `lib/campagneOctobreRose.js` : garder alignées. |
| `Breadcrumb` | Fil d'Ariane visible | `items` `[{label, href?}]`, `variant` `'bar'｜'inline'`, `maxWidth` | N'émet pas de JSON-LD. |
| `MobileCTA` | Barre fixe en bas sur mobile (téléphone + devis) | — | Monté dans le layout ; masqué sur `/devis` et quand le pied de page est visible. Suivi `phone_click`. |
| `LegalTemplate` | Gabarit des pages légales | `title`, `category`, `updated`, `children` | Exporte `h2Style`, `h3Style`, `pStyle`, `sectionStyle`. |

## 2. Sections de la page d'accueil

Ordre dans `app/page.js` : `Hero`, `LogosSection`, `CreationsSection`, `ArtisansMapSection`, `MadeleinesSection`, `ExperiencesSection`, `SelectionSection`, `ManifestoSection`, `DetailSection`, `TestimonialsSection`, `FAQSection`, `VillesSection`, `CTASection`. Sans props, sauf `LogosSection`. Textes en dur dans chaque fichier.

| Composant | Rôle | À savoir |
|---|---|---|
| `Hero` | Hero plein écran : photo, voile crème, H1, 2 boutons, badge avis, téléphone | `next/image` prioritaire ; parallaxe maison ; ouvre `CatalogueModal` ; suivi `phone_click`. |
| `LogosSection` | Bandeau de logos clients défilant | Props `subtitle`, `style`. 11 logos en dur, triplés : l'animation suppose exactement 3 copies. Réutilisé sur devis, pages villes et pages `traiteur-*`. |
| `CreationsSection` | « Notre carte » : grille 3×2 de catégories | Tableau `creations` en dur. Composant serveur. |
| `ArtisansMapSection` | Carte de France avec épingles des artisans | Données `lib/artisansData`. Aussi sur `/univers/nos-artisans`. |
| `MadeleinesSection` | Produit signature : image parallaxe, 6 saveurs | Données `MADELEINE_FLAVORS` (`lib/productsData`). |
| `ExperiencesSection` | Texte + image, lien souligné | — |
| `SelectionSection` | « L'art de la sélection » : image + 3 arguments | Deux rendus du même contenu (cartes ordinateur / accordéon mobile). |
| `ManifestoSection` | Citation centrée sur fond crème | Composant serveur. |
| `DetailSection` | Grande image + texte superposé + 3 arguments | Sur mobile le texte passe sous l'image. |
| `TestimonialsSection` | Témoignage vedette + 2 cartes + logos | Données en dur (n'utilise pas `lib/testimonialsData.js`). |
| `FAQSection` | FAQ en accordéon, 2 colonnes | 10 questions en dur ; émet le JSON-LD `FAQPage`. |
| `VillesSection` | Grille des villes livrées | Données `lib/citiesData` ; liens `/traiteur/{slug}`. |
| `CTASection` | Bloc jaune « Prêt à organiser votre événement ? » | `id="contact"`. |
| `PrometteSection` | Section éditoriale | Importée mais **désactivée** (commentée dans `app/page.js`). |

## 3. Pages produits et catégories

**`ProductsPageTemplate`** — page catégorie complète (Navbar, hero, fil d'Ariane, onglets + tri, grille, vente croisée, clôture, FAQ, JSON-LD, Footer). Utilisé par `petits-dejeuners-et-pauses`, `receptions-sur-mesure`, `boissons`.
- Props : `heroImg`, `heroTitle`, `fallbackProducts` (requis) ; `heroImgPosition`, `heroSubtitle`, `breadcrumb`, `seoArticle`, `basePath`, `editorial` (→ `CategoryClosing`), `crossSell` (→ `CrossSellBanner`), `sectionFilterLabel` / `sectionFilterKey`.
- Produit : `{ id, name, img, imgPosition?, label, section?, sectionTitle? }` ; `label` = « 16 pièces · 26,80€ » (séparateur `·`) ; `sectionTitle` insère un H2 avant la carte ; sans `id`, la carte renvoie vers `/devis`.
- Grille 4 colonnes → 3 → 2.

**`GalleryFiche`** — fiche produit complète. Utilisée par les `[slug]/page.js` de `plateaux-aperitifs`, `lunch-box`, `boissons`, `plateaux-repas`, `a-partager`, `pauses-gourmandes`.
- Props : `title`, `subtitle`, `img`, `gallery`, `description`, `sections` `[{label, value}]`, `listItems`, `listLabel`, `allergens`, `price` (déjà formaté), `priceNote`, `breadcrumb`, `backHref`, `backLabel`, `seoEyebrow`, `seoTitle`, `seoHtml`, `devisPrestation`, `devisTitre`, `devisSousTitre`, `related`, `relatedTitle`.
- Émet `BreadcrumbList` + `Product` / `Offer` (si `price`) et `BusinessJsonLd`.
- Pièges : `DevisRapide` et le lien retour n'apparaissent que si `seoTitle` ou `seoHtml` est fourni ; les miniatures ne sont pas cliquables ; le fil d'Ariane y est recodé (pas `Breadcrumb`).

| Composant | Rôle | Props |
|---|---|---|
| `CategoryTabs` | Onglets des 8 catégories + tri et compteur | `sort`, `onSort`, `count`, `sorts`. Exporte `CATEGORIES`, `DEFAULT_SORTS`, `priceFromLabel`, `sortItems`. |
| `CategoryClosing` | Clôture de catégorie : titre, 4 arguments, appel devis, article SEO | `eyebrow`, `title` (`\n` → saut de ligne), `body`, `args` `[{icon, titre, desc}]` (icônes `quality`, `delivery`, `custom`, `support`), `ctaQuestion`, `seoArticle` (HTML). |
| `CrossSellBanner` | Bandeau crème de vente croisée | `title`, `buttonLabel`, `href`, `body?`, `products?` `[{id, name, img, price, href?}]`. |
| `RelatedLinks` | Cartes de maillage interne | `eyebrow`, `title`, `items` `[{href, title, meta?, img?}]`, `columns` (3), `background`. |

## 4. Devis, formulaires, appels à l'action

| Composant | Rôle | Props | À savoir |
|---|---|---|---|
| `DevisRapide` | Mini-formulaire de devis (prestation, convives, date, e-mail) | `defaultPrestation`, `titre`, `sousTitre` | POST `/api/devis` (`source: 'devis-rapide'` + attribution) ; champ piège `website` ; événement `devis_submit`. `marginTop: 56px` intégré ; son `<style>` cible `input` / `select` sans préfixe. |
| `CatalogueModal` | Modale e-mail → catalogue PDF | `open`, `onClose` | POST `/api/catalogue` ; événement `catalogue_lead`. Utilisée par `Hero`. |
| `ReviewsBadge` | Badge « 5 étoiles · Avis Google » | `variant` `'light'｜'onImage'`, `showCount`, `style` | Données `lib/site` (régénérées au `prebuild` depuis `lib/gbpData.json`). |
| `CTADevis` | Encart jaune « Demander un devis » | `category`, `phone` | **Inutilisé** et hors charte : ne pas le réutiliser. |

Les grands formulaires (`app/devis/page.js`, `app/contact/page.js`) sont codés dans les pages. Pas de composant panier : `context/CartContext.js` enveloppe le site mais rien ne l'utilise (pas de boutique publique).

## 5. Mouvement

| Composant | Rôle | Props |
|---|---|---|
| `SmoothScroll` | Défilement fluide Lenis global (layout) | — ; coupé si `prefers-reduced-motion`. Ne jamais ajouter `scroll-behavior: smooth`. |
| `ScrollRevealInit` | Observateur global des `.reveal` / `.reveal-stagger` (layout) | — |
| `Reveal` | Apparition autonome en fondu montant | `delay` (ms), `mode` `'scroll'｜'mount'`, `y` (24), `duration` (0,65), `style` |
| `ParallaxImage` | `next/image` en `fill` avec léger parallaxe | `src`, `alt`, `strength` (0,07), `sizes`, `priority`, `quality`, `className`, `style`, `imgStyle`. Le parent doit avoir une hauteur. |

## 6. SEO et données structurées

| Composant | Émet | Props | À savoir |
|---|---|---|---|
| `BreadcrumbJsonLd` | `BreadcrumbList` | `items` `[{name, path}]` | Clés différentes du `Breadcrumb` visible (`label` / `href`). |
| `BusinessJsonLd` | nœud `#business` complet | — | Ne pas le poser sur accueil, contact, devis, `/traiteur`, catégories, journal : ils l'émettent déjà. |
| `CategoryJsonLd` | `BreadcrumbList` + `Service` + `ItemList` + `FAQPage` | `name`, `path`, `items?`, `serviceType?` | FAQ tirée de `lib/categoryFaq`. |
| `FAQSchema` | `FAQPage` | `faqs` `[{name, answer}]` | Utilisé par `petit-dejeuner-entreprise/[ville]`. |
| `PriceSchema` | `Product` + `AggregateOffer` | `productName`, `minPrice`, `currency` | **Inutilisé.** |

## 7. Mesure

- `DeferredGTM` (`gtmId`) : charge Google Tag Manager à la première interaction ou après 3,5 s (layout).
- `AttributionCapture` : mémorise l'origine de la visite (`lib/attribution`), jointe aux demandes de devis.

| Événement `dataLayer` | Paramètre | Émis par |
|---|---|---|
| `phone_click` | `phone_number` | `lib/tracking.js`, branché dans `Hero` et `MobileCTA` |
| `devis_submit` | `form_location: 'devis_rapide'` ｜ `'page_devis'` | `DevisRapide`, `app/devis/page.js` |
| `contact_submit` | `form_location: 'page_contact'` | `app/contact/page.js` |
| `catalogue_lead` | `form_location: 'hero'` | `CatalogueModal` |

Ajouter un formulaire ou un numéro de téléphone cliquable = brancher l'événement correspondant, sinon la conversion n'est pas mesurée.
