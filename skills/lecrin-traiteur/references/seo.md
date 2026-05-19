# SEO — L'Écrin Traiteur (Paris / Île-de-France)

## Stratégie générale

**Type de SEO :** Local, ville + IDF  
**Priorité :** Apparaître en tête sur les requêtes intentionnistes B2B à Paris et IDF  
**Cible secondaire :** Notoriété de marque pour les recherches directes "L'Écrin Traiteur"

**Profil de recherche cible :**
```
"traiteur petit déjeuner entreprise Paris"
"livraison plateaux repas bureau Paris"
"traiteur goûter réunion Paris"
"traiteur artisanal livraison entreprise IDF"
"plateau petit déjeuner livraison bureau Île-de-France"
```

---

## Format des balises par page

### Accueil
```
Title     : Traiteur Artisanal Livraison Entreprise Paris | L'Écrin
             (≤ 60 caractères)
Meta desc : L'Écrin livre petits déjeuners, goûters et plateaux repas artisanaux
             en entreprise à Paris et Île-de-France. Produits du terroir, sourcing identifié.
             (≤ 155 caractères)
H1        : Traiteur artisanal livraison entreprise à Paris
```

### Nos Offres (page principale)
```
Title     : Nos Offres Traiteur — Petits Déjeuners, Goûters, Plateaux | L'Écrin Paris
Meta desc : Petit déjeuner artisanal, goûter, plateau repas et buffet livrés en entreprise
             à Paris et IDF. Découvrez les formules L'Écrin.
H1        : Nos offres de livraison en entreprise
```

### Pages d'offre individuelles (URLs distinctes)
```
/offres/petit-dejeuner
  Title : Livraison Petit Déjeuner Artisanal en Entreprise Paris | L'Écrin
  H1    : Petit déjeuner artisanal livré en entreprise à Paris

/offres/gouter
  Title : Livraison Goûter d'Entreprise Paris — Traiteur Artisanal | L'Écrin
  H1    : Goûter artisanal pour vos équipes, livré à Paris

/offres/plateau-repas
  Title : Plateaux Repas Artisanaux Livraison Bureau Paris | L'Écrin
  H1    : Plateaux repas artisanaux livrés dans vos bureaux

/offres/buffet
  Title : Buffet Traiteur Entreprise Paris — Livraison | L'Écrin
  H1    : Buffet artisanal pour vos événements d'entreprise
```

### Notre Histoire
```
Title     : Notre Histoire — L'Écrin, Traiteur Artisanal Paris
Meta desc : Découvrez l'histoire de L'Écrin, traiteur artisanal parisien qui sélectionne
             des producteurs du terroir pour livrer en entreprise à Paris et IDF.
H1        : L'Écrin — une histoire de terroir et de soin
```

### Contact
```
Title     : Demander un Devis — L'Écrin Traiteur Paris
Meta desc : Contactez L'Écrin pour un devis de livraison traiteur en entreprise à Paris
             et Île-de-France. Réponse sous 24h.
H1        : Demandez votre devis — livraison en entreprise à Paris
```

---

## Schema.org (JSON-LD)

À injecter dans le `<head>` de la page d'accueil via `generateMetadata` ou `Script` Next.js :

```json
{
  "@context": "https://schema.org",
  "@type": ["FoodService", "LocalBusiness"],
  "name": "L'Écrin Traiteur",
  "description": "Traiteur artisanal spécialisé dans la livraison de petits déjeuners, goûters, plateaux repas et buffets en entreprise à Paris et Île-de-France.",
  "url": "https://www.lecraintraiteur.fr",
  "email": "contact@lecrindesterroirs.fr",
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 48.8566,
      "longitude": 2.3522
    },
    "geoRadius": "50000"
  },
  "servesCuisine": "French",
  "priceRange": "€€€",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Paris",
    "addressRegion": "Île-de-France",
    "addressCountry": "FR"
  },
  "sameAs": [
    "https://www.instagram.com/lecrintraiteur",
    "https://www.linkedin.com/company/lecrin-traiteur"
  ]
}
```

**Note :** Mettre à jour `url`, `email`, `address` et `sameAs` avec les vraies valeurs dès disponibles.

---

## Règles d'optimisation images

```
Format     : WebP obligatoire (next/image le gère automatiquement)
Taille     : Jamais d'image > 800KB à l'upload original
Alt text   : Descriptif + géolocalisation + contexte

Exemples d'alt corrects :
  ✅ "plateau petit déjeuner artisanal avec viennoiseries livré en entreprise Paris"
  ✅ "goûter d'entreprise avec tartelettes et jus frais, L'Écrin Traiteur IDF"
  ✅ "Julien Dupont, boulanger artisanal Seine-et-Marne, partenaire L'Écrin"

Exemples d'alt incorrects :
  ❌ "photo1.jpg"
  ❌ "plateau repas"
  ❌ "image de nos produits"
```

---

## Structure d'URL

```
/                          → Accueil
/offres                    → Page principale des offres
/offres/petit-dejeuner     → Offre petit déjeuner
/offres/gouter             → Offre goûter
/offres/plateau-repas      → Offre plateaux repas
/offres/buffet             → Offre buffet
/notre-histoire            → À Propos
/contact                   → Contact + formulaire de devis
```

**Règles d'URL :**
- Tout en minuscules, pas de majuscules
- Tirets (pas underscores)
- Pas d'accents dans les URLs (é → e, û → u)
- Pas de paramètres `?id=` dans les URLs de pages
- Pas de trailing slash (ou cohérence totale — Next.js gère)

---

## Cohérence NAP (Nom · Adresse · Téléphone)

Le NAP doit être **identique** sur :
1. Le site (footer + page contact)
2. Google Business Profile
3. Toutes les citations locales (annuaires, réseaux)

Format standardisé :
```
L'Écrin Traiteur
[Adresse complète]
Paris, Île-de-France, 75XXX
Tél : +33 X XX XX XX XX
Email : contact@lecrindesterroirs.fr
```

---

## Contenu pour SEO long-traîne (optionnel, phase 2)

Une section ou un blog "Nos Terroirs" permet de cibler des requêtes plus spécifiques :

```
"Où trouver du pain artisanal au levain pour livraison entreprise Paris ?"
"Produits du terroir normand pour petit déjeuner d'entreprise"
"Comment organiser un goûter d'entreprise original Paris ?"
```

Structure recommandée pour chaque article :
- H1 avec mot-clé principal
- 300-600 mots minimum
- Mention du producteur avec région (renforce l'angle terroir)
- Lien interne vers la page d'offre correspondante
- Image optimisée avec alt contextuel

---

## Next.js Metadata API

```tsx
// app/layout.tsx — metadata globales
export const metadata: Metadata = {
  metadataBase: new URL('https://www.lecrintraiteur.fr'),
  title: {
    template: '%s | L\'Écrin Traiteur Paris',
    default: 'Traiteur Artisanal Livraison Entreprise Paris | L\'Écrin'
  },
  description: 'L\'Écrin livre petits déjeuners, goûters et plateaux repas artisanaux en entreprise à Paris et IDF.',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'L\'Écrin Traiteur',
  },
  robots: {
    index: true,
    follow: true,
  }
}

// app/offres/petit-dejeuner/page.tsx — metadata de page
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Livraison Petit Déjeuner Artisanal en Entreprise Paris',
    description: '...',
    openGraph: { ... }
  }
}
```
