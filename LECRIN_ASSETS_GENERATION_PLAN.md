# L'Écrin Traiteur — Plan de Génération d'Assets

**Date** : 2026-07-05  
**Status** : PLANIFICATION LOCALE (pas de push en prod)  
**Photos réelles reçues** : 21 images (madeleines, viennoiseries, produits sucrés)

---

## Stratégie par catégorie

### 1️⃣ VIENNOISERIES (Croissants, Pains au Chocolat, Chouquettes)

**Produits concernés** :
- `viennoiseries-duo` (16 pièces, 26,80€)
- `viennoiseries-melangees` (30 pièces, 48,90€)
- `chouquettes` (30 pièces, 26,80€)

**Statut assets** :
- ✅ **Produit** : VRAIE PHOTO (dans tes 21 images AirDrop)
- ❌ **Plateau/présentation** : À générer (plateau bois light ash wood)
- ❌ **Ambiance** : À générer (contexte office/petit-déj)

**Stratégie de génération** :
1. Utiliser ta vraie photo de croissants/viennoiseries comme base visuelle
2. Générer **plateau en bois** (light ash wood, linen naturel) cohérent avec la photo réelle
3. Générer **ambiance lifestyle** (petit-déj d'équipe, moment office, 7-8h du matin)

**Anti-IA Priority** : Photos réelles du produit → pas de suspicion

---

### 2️⃣ MADELEINES (Coffrets 10, 20, 50)

**Produits concernés** :
- `madeleines-10` (24,90€)
- `madeleines-20` (49,00€)
- `madeleines-50` (119,00€)

**Statut assets** :
- ✅ **Produit** : VRAIE PHOTO (dans tes 21 images — madeleines dorées)
- ❌ **Plateau/coffret** : À générer (boîte/plateau artisan OU plateau bois selon style)
- ❌ **Ambiance** : À générer (contexte pause gourmande, bureau 10h)

**Stratégie de génération** :
1. Prendre ta vraie photo de madeleines (caramélisées, dorées)
2. Générer **coffret/plateau** autour (bois ? céramique ? décision esthétique)
3. Générer **ambiance office** (pause café, 10h du matin, équipe calme)

**Anti-IA Priority** : Madeleines réelles = crédibilité immédiate

---

### 3️⃣ CAKES/PÂTISSERIE (Poire, Pistache, Citron, Framboise, Chocolat)

**Produits concernés** :
- `cake-poire` ✅ (IA déjà généré, Jul 5)
- `cake-pistache` ✅ (IA déjà généré, Jul 5)
- `cake-citron` ✅ (IA déjà généré, Jul 5)
- `cake-framboise` ✅ (IA déjà généré, Jul 5)
- `cake-chocolat` ✅ (IA déjà généré, Jul 5)

**Statut assets** :
- ✅ **Produit** : IA généré (existe déjà)
- ❌ **Plateau/présentation** : À générer (plateau bois naturel, simple)
- ❌ **Ambiance** : À générer (scène élégante, contexte réception, couleur cake visible)

**Stratégie de génération** :
1. Cake image = déjà IA → reprendre celle existante
2. Générer **plateau bois** minimaliste (focus sur le cake)
3. Générer **ambiance lifestyle** (table de réception, assiette, moment gourmand)

**Anti-IA Priority** : Cake IA déjà validé — consolider avec plateaux/ambiance cohérents

---

## Visions d'ambiance (à toi de choisir)

Pour chaque catégorie, tu peux choisir parmi :

### Option 1 : Ambiance Office (petit-déj/pause d'équipe)
- Contexte : Table de bureau, ordinateur flou en arrière-plan
- Moment : 8h30 (petit-déj) ou 10h (pause)
- Plateau : En bois clair (light ash wood)
- Linge : Ecru, naturel, décontracté
- Feeling : Travail + pause gourmande = équilibre

### Option 2 : Ambiance Réception (cake/pâtisserie)
- Contexte : Table élégante, peu d'éléments, mise en avant du produit
- Moment : Après-midi, réunion client, moment calme
- Plateau : Marbre blanc pale OU bois très épuré
- Linge : Ecru, quelques plis naturels
- Feeling : Luxe discret, artisanal

### Option 3 : Ambiance Pause Gourmande (madeleines)
- Contexte : Table café, 10h du matin, moment solitaire ou petit groupe
- Moment : Lumière matin (8-10h), douce
- Plateau : Bois naturel OU céramique simple
- Accompagnement : Thé/café flou au fond
- Feeling : Moment pour soi, qualité

---

## Ordre de priorité (exécution)

### Phase 1 — Images manquantes CRITIQUES (cette semaine)
1. **Plateau bois** pour viennoiseries (1 image de référence)
2. **Ambiance petit-déj** viennoiseries (2 variations)
3. **Plateau** pour madeleines (1 image)
4. **Ambiance pause** madeleines (1 image)

### Phase 2 — Cohérence Cakes
1. **Plateau** pour chaque cake (5 images — une par flavor)
2. **Ambiance réception** cake (1-2 images de contexte)

### Phase 3 — Assets supplémentaires (si temps)
- Images alternatives (angles différents)
- Coffrets/emballages en détail
- Contextes saisonniers

---

## Notes importantes

✅ **Tous les produits sucrés** (pas salé, pas tarte/quiche — confirmé avec Ramy)  
✅ **21 photos réelles reçues** — source de vérité visuelle  
✅ **Pas de boîtes jaunes sauf pour plateaux repas** — pour viennoiseries/madeleines/cakes = plateaux bois  
✅ **Master Prompt System** = guide de cohérence pour toutes les générations  
✅ **Tout en local** — pas de push avant validation Ramy  

---

## Prochaines étapes

1. [ ] Analyser les 21 photos pour identifier types exactes (quel produit dans quelle photo)
2. [ ] Créer `/product-assets/{product-id}/` pour chaque produit
3. [ ] Générer images manquantes via Master Prompt (local server)
4. [ ] Valider anti-IA score (checklist 15 points)
5. [ ] Montrer à Ramy pour validation
6. [ ] Push en prod UNE FOIS VALIDÉ

