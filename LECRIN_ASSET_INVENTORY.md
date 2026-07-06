# L'Écrin Traiteur — Asset Inventory & Generation Matrix

**Date**: 2026-07-05  
**Status**: Audit en cours — Ramy scans photos réelles, l'IA crée la stratégie de génération

---

## Vue d'ensemble

Chaque **produit** a besoin de 3 assets :
1. **Photo produit** (le gâteau, le croissant, le plateau) — peut être réelle OU générée
2. **Photo emballage** (la boîte, le coffret, le packaging) — peut être réelle OU générée
3. **Photo d'ambiance** (lifestyle shot, 2-3 produits + contexte) — stylisée ou générée

**Règle de cohérence** : si on a une photo réelle (produit OU emballage), tout le reste doit être généré de façon **cohérente visuellement** — couleur, lumière, style.

---

## Produits — État des assets

### Viennoiseries

#### `viennoiseries-duo` (Croissants + Pains au chocolat)
- **Photo produit** : ❓ À scanner (dossier `Photo Petit déjeuner`)
- **Photo emballage** : ❌ Pas de photo réelle visible — à générer
- **Photo ambiance** : ❌ À générer
- **Stratégie** : Si photo réelle croissant existe → générer packaging cohérent + ambiance
- **Notes** : 16 pièces, beurre AOP Charentes-Poitou

#### `chouquettes`
- **Photo produit** : `/prod-chouquettes.webp` (GÉNÉRIQUE, vieux)
- **Photo emballage** : ❌ Non
- **Photo ambiance** : ❌ Non
- **Stratégie** : Générer complètement (produit + packaging + ambiance)
- **Texture clé** : Perles de sucre dorées, pâte à choux gonflée

### Cakes (Pâtisserie)

#### `cake-poire`
- **Photo produit** : `/prod-cake-poire.png` (IA, Jul 5 00:05)
- **Photo emballage** : ❌ Non
- **Photo ambiance** : ❌ Non
- **Stratégie** : ✅ Image IA déjà générée — créer packaging + ambiance cohérents
- **Status** : Priorité HAUTE — c'est le modèle de référence pour cohérence IA

#### `cake-pistache`
- **Photo produit** : `/prod-cake-pistache.png` (IA, Jul 5 00:07)
- **Photo emballage** : ❌ Non
- **Photo ambiance** : ❌ Non
- **Stratégie** : ✅ Image IA déjà générée — créer packaging + ambiance cohérents

#### `cake-citron`
- **Photo produit** : `/prod-cake-citron.png` (IA, Jul 5 00:07)
- **Photo emballage** : ❌ Non
- **Photo ambiance** : ❌ Non
- **Stratégie** : ✅ Image IA déjà générée — créer packaging + ambiance cohérents

#### `cake-framboise`
- **Photo produit** : `/prod-cake-framboise.png` (IA, Jul 5 00:06)
- **Photo emballage** : ❌ Non
- **Photo ambiance** : ❌ Non
- **Stratégie** : ✅ Image IA déjà générée — créer packaging + ambiance cohérents

#### `cake-chocolat`
- **Photo produit** : `/prod-cake-chocolat.png` (IA, Jul 5 00:06)
- **Photo emballage** : ❌ Non
- **Photo ambiance** : ❌ Non
- **Stratégie** : ✅ Image IA déjà générée — créer packaging + ambiance cohérents

---

### Madeleines (Petit-déjeuner/Goûter)

#### `madeleines-10` / `madeleines-20` / `madeleines-50`
- **Photo produit** : ❓ À scanner (dossier `Photo Petit déjeuner` ou `Photo Produit brut`)
- **Photo emballage** : `/coffret-madeleines-10-cut.png` (EXISTE — réelle ou styled?)
- **Photo ambiance** : ❌ Non
- **Stratégie** : À décider basé sur ce qu'on a réellement

---

### Créations (Cocktails/Goûters)

#### `cocktail-signature`
- **Photo produit** : `/cocktail-signature-hero.png` (héros page)
- **Photo emballage** : ❌ Non (le cocktail est un service, pas emballage fixe)
- **Photo ambiance** : `/cocktail.webp` (EXISTE)
- **Stratégie** : Ambiance existe — vérifier cohérence et générer produit fresh si besoin

#### `pause-orange`
- **Photo produit** : `/pause-orange.webp`
- **Photo emballage** : ❌ Non
- **Photo ambiance** : Incluse dans `/section-reception.webp`
- **Stratégie** : Vérifier cohérence visuelles des assets existants

---

### Boissons

#### Jus & Eaux
- **Images existantes** : `/bois-jus-*.webp`, `/bois-evian-*.webp`, `/bois-thermos-cafe.webp`
- **Status** : ANCIENNES — cohérence visuelle douteuse vs cakes IA
- **Stratégie** : À intégrer ou régénérer pour cohérence avec système Master Prompt

---

## Dossiers Source (Réalité Sur Disque)

**Location** : `/Users/ramy/Documents/L'Écrin/4. Photos/`

### Photos réelles confirmées
- `Photo Petit déjeuner/` — croissants, viennoiseries, petits-déj
- `Photo Produit brut/` — cakes, pâtisseries bruts
- `Photo Goûter/` — madeleines, petit-fours, goûter
- `Photo services/` — contextes (CODIR, équipes, ambiance bureau)
- `Photo salé/` — produits salés (si applicable)
- `Photo boisson/` — boissons et thermos

### Photos de contexte/ambiance
- `Photo services/` — rassemblements, moments d'équipe
- `Fond Photo/` — backgrounds visuels
- `Photo HD/` — haute résolution
- `photo site/` — sélection finale pour site (plateau repas.png, etc.)

### Photos anciennes (à nettoyer)
- `IA PHOTO/` — anciennes générations ChatGPT/Claude (peut inspirer style)
- `Photo supprimer/` — candidates au archivage
- `Photo brut/` — raw images, souvent flou ou de test

---

## Feuille de route

### Phase 1 — Audit & Matrice (CETTE SEMAINE)
- [ ] Ramy parcourt `/Photo Petit déjeuner/` → liste croissants/viennoiseries réels
- [ ] Ramy parcourt `/Photo Produit brut/` → liste cakes/pâtisseries réels
- [ ] Ramy parcourt `/Photo Goûter/` → madeleines/small pastries
- [ ] Créer `product-assets/` structure avec métadata.json par produit
- [ ] Documenter : "on a une photo réelle" vs "faut générer"

### Phase 2 — Génération Cohérente (SEMAINE PRO)
- [ ] Générer packaging pour cakes IA existants (cohérent avec cakes)
- [ ] Générer ambiance lifestyle pour chaque série
- [ ] Valider anti-IA score (checklist 15 points)
- [ ] Ajouter aux produits du site

### Phase 3 — Complétion (LONG TERME)
- [ ] Générer pour viennoiseries/chouquettes complètement
- [ ] Générer pour autres catégories (boissons, crèmes, etc.)
- [ ] Créer galerie d'images cohérentes à 100%

---

## Prochaine étape

**Ramy doit montrer/nommer les photos réelles qu'il a**.

Dis-moi :
1. Tu as une photo réelle d'un **croissant** ? (dossier ? nom de fichier ?)
2. Tu as une photo réelle d'un **cake/pâtisserie** ? (poire, chocolat, ?)
3. Tu as une photo réelle d'une **boîte de madeleines** ?
4. Tu as d'autres photos réelles de **produits** ou **packaging** ?

Une fois qu'on a ça, je crée la structure `/product-assets/` et on lance la génération cohérente.

---

## Convention de nommage (à confirmer)

Pour chaque produit dans `/product-assets/{product-id}/` :

```
croissant-beurre/
├── product-real.jpg        (si photo réelle)
├── product-ai.png          (si généré)
├── packaging-real.jpg      (si photo réelle)
├── packaging-ai.png        (si généré)
├── ambiance-ai.png         (lifestyle, 2-3 produits)
├── metadata.json           (état + notes)
└── generation-notes.md     (prompt utilisé, anti-IA score)
```

**metadata.json** :
```json
{
  "product_id": "croissant-beurre",
  "name": "Croissant Beurre Classique",
  "category": "viennoiseries",
  "assets": {
    "product": { "type": "real", "source": "Photo Petit déjeuner/croissant.jpg", "date": "2026-07-05" },
    "packaging": { "type": "ai", "model": "gpt-image-1", "date": "2026-07-05", "anti_ia_score": 92 },
    "ambiance": { "type": "ai", "model": "gpt-image-1", "date": "2026-07-05", "anti_ia_score": 88 }
  },
  "da_notes": "Kodak Portra 400, wood surface, linen, ceramic — no glossy shine"
}
```

---

**Attendant tes infos sur les photos réelles !**
