# L'Écrin — Direction Artistique Photographique
## Référence conceptuelle · DA de marque · Vision et philosophie

> **Ce document = la vision et les règles de la marque.**  
> Pour générer des images en production, utiliser le dossier **`LECRIN_SYSTEM/`** (pipeline modulaire Weavy).  
> Ce document reste la référence pour comprendre le *pourquoi* de chaque décision visuelle.

> Ce document définit l'univers visuel fixe de L'Écrin. Il ne décrit pas d'images spécifiques. Il définit les règles, le style, la philosophie et les contraintes qui s'appliquent à TOUTES les images de la marque, sans exception.

---

## 1. IDENTITÉ & POSITIONNEMENT

**Marque :** L'Écrin Traiteur  
**Activité :** Livraison artisanale en entreprise — petits déjeuners, plateaux repas, coffrets  
**Zone :** Paris et Île-de-France  
**Cible :** Office managers, assistantes de direction, RH — B2B pur

**Positionnement :** Traiteur artisanal du terroir. Ni industriel, ni luxe froid. Un luxe vivant, avec des humains derrière.

**Métaphore directrice :** L'écrin — la boîte qui révèle un objet précieux. Chaque image est un écrin : elle protège, elle révèle, elle crée le désir.

**Émotion cible :** Chaleur, authenticité, soin. Comme si un ami boulanger vous livrait le meilleur du marché directement au bureau. Pas "luxe magazine", pas "cantine propre" — entre les deux, exactement.

**Territoire visuel exact :** Un mélange entre artisanat contemporain, hospitality premium, réception parisienne, maison food éditoriale, élégance chaleureuse et luxe discret. Pas une pâtisserie. Pas un palace. Quelque chose entre les deux qui n'existe pas encore dans le food B2B.

**Objectif de reconnaissance :** Une image L'Écrin doit être immédiatement reconnaissable sans voir le logo. La cohérence de l'univers — palette, lumière, matières, imperfections calibrées — crée cette signature.

**Ce que les photos doivent raconter :** Des moments réels, des instants de réception, des scènes crédibles. Pas des produits posés sur une table. Chaque image suggère : une réunion qui commence, un accueil qui se prépare, une pause élégante, un moment de partage. Le produit est dans la scène — il n'est pas la scène.

**Ce que la photo ne doit jamais être :**
- Froide, clinique, industrielle
- Trop parfaite, trop Pinterest, trop staged
- Générique (pourrait appartenir à n'importe quelle marque food)
- Une simple photo produit sans contexte ni vie
- Uniquement "boulangerie artisanale" — sans dimension B2B hospitality

---

## 2. PALETTE COULEURS — RÉFÉRENCE ABSOLUE

Ces couleurs définissent l'univers chromatique de toutes les photos. Props, décors, surfaces, lumière et post-traitement doivent rester dans cette gamme.

| Nom | Hex | Rôle dans la photo |
|---|---|---|
| Blanc cassé chaud | `#FAFAF7` | Fond principal, assiettes claires |
| Crème | `#F5F0E6` | Lin, nappes, fonds de plateau |
| Jaune signature | `#E0A126` | Packaging L'Écrin (toujours en discret) |
| Vert terroir | `#3E5232` | Herbes fraîches, touches végétales |
| Presque-noir chaud | `#1A1A18` | Ombres portées, bois foncé discret |
| Pierre / grège | `#9B9590` | Ardoise claire, béton brossé |
| Brume | `#EDE7D9` | Fonds secondaires, linge |

**Température couleur globale :** Chaude. Équivalent ~4800K. Jamais bleu, jamais froid, jamais gris-acier.

**Plages de validation palette (toutes les images de la série doivent rester dedans) :**
- Dominante : `#F5F0E6` → `#FAFAF7`
- Accent jaune : `#D09020` → `#E8B040`
- Secondaire : `#EDE7D9` → `#9B9590`
- Ombres : jamais plus froid que `#2A2820`

---

## 3. LUMIÈRE — LE FACTEUR LE PLUS IMPORTANT

La lumière réelle n'est jamais parfaite. C'est le premier signal que le cerveau humain détecte pour juger si une image est vraie ou fabriquée.

**Type :** Lumière naturelle douce, diffuse. Toujours une seule source.

**Source :** Fenêtre côté nord ou ciel couvert. Pas de soleil direct.

**Direction :** Lumière venant de la gauche, légère. Falloff naturel vers la droite.

**Heure simulée :** Matin calme, entre 8h et 10h30. Fraîcheur tranquille du début de journée.

**Saison :** Neutre, intemporelle. Aucun indice saisonnier marqué — pas de feuilles d'automne, pas de fleurs de printemps voyantes, pas de lumière estivale trop vive. Les photos fonctionnent toute l'année.

**Phrases à injecter dans chaque prompt :**
```
soft diffused north-facing window light from the left,
single light source only (no fill light on right),
warm 4800K natural morning light,
subtle natural light falloff from left to right,
realistic shadow gradients (very soft, almost absent),
gentle ambient bounce from opposite wall,
imperfect natural lighting, uneven exposure across scene,
slight natural light inconsistency
```

**Phrases à ne jamais utiliser :**
```
cinematic lighting · dramatic shadows · studio flash · HDR
ultra contrast · glowing highlights · rim light · volumetric lighting
perfectly even lighting · professional studio light
```

---

## 4. STYLE PHOTOGRAPHIQUE

**Esthétique principale :** Film grain chaud — ambiance argentique subtile. Mariage Frères rencontre Eric Kayser.

**Grain :** Léger grain de film, visible dans les zones lumineuses. Pas de bruit numérique. Texture organique, jamais agressive.

**Saturation :** Légèrement désaturée (-8 à -12%). Couleurs réelles, pas boostées. Le jaune du packaging reste le seul point de couleur fort.

**Contraste :** Doux. Les noirs ne sont pas absolus — les ombres gardent du détail.

**Post-traitement cible :** Kodak Portra 400 — rolloff doux dans les hautes lumières, ombres chaudes, midtones légèrement ternis.

**Profondeur de champ :** Moyenne. Équivalent f/2.8-4. Le sujet est net. Le fond existe et raconte quelque chose, mais reste doux — pas un mur flou indéfini.

**Focales fixes par type de scène — tableau complet (règle stricte) :**

| Type de prise de vue | Focale | Angle | Profondeur de champ |
|---|---|---|---|
| Flat lay plein cadre 90° | `35mm` | Vue du dessus | Tout net |
| Flat lay serré / détail 90° | `50mm` | Vue du dessus | Tout net |
| 3/4 plateau repas / bureau | `50mm` | ~35° au-dessus | f/2.8-4, fond doux |
| 3/4 coffret / cadeau | `85mm` | ~45° au-dessus | f/2.8, sélectif |
| Macro madeleine / ingrédient | `85mm` | ~45° serré | f/2.8-4, très sélectif |
| Macro mains / geste | `85mm` | ~45° | f/2.8, mains nettes, fond flou |
| Hero large (décor + produit) | `35mm` | ~20-30° | f/4-5.6, décor lisible |

**Règle d'or focale :** Toutes les images d'une même série ont la même focale. Un seul changement suffit pour qu'une série semble faite par deux photographes différents.

**Phrases à injecter :**
```
Kodak Portra 400 film simulation, subtle analog film grain,
slightly desaturated midtones, soft contrast,
warm tonal rolloff in highlights, shadow detail preserved (lifted blacks),
matte finish, no HDR, no digital sharpening
```

---

## 5. DÉCORS & ENVIRONNEMENTS

Trois décors sont définis pour L'Écrin. Chaque série de photos utilise UN seul décor — jamais de mélange dans une même série.

### Décor A — Plan de travail artisanal
Contexte : Process, savoir-faire, préparation.
- Surface : bois clair légèrement vieilli (frêne ou chêne clair) OU marbre blanc veiné gris très clair
- Ambiance : cuisine de maison haut de gamme — pas de cuisine professionnelle
- Ingrédients bruts possibles autour (jamais de packaging industriel)
- Cadrage serré — le fond de cuisine n'est jamais visible

### Décor B — Table de réunion / bureau
Contexte : Livraison en entreprise, déjeuner d'équipe, petit déjeuner de travail.
- Surface : table bois naturel clair ou stratifié blanc cassé de bureau premium
- Props autorisés : carnet kraft, stylo propre, verre d'eau
- Fond flou : fenêtre et chaises de bureau indistinctes
- Ce qui n'apparaît jamais : téléphones, ordinateurs, câbles, logos d'entreprise

### Décor C — Fond neutre pour flat lay
Contexte : Catalogue, réseaux sociaux, web.
- Support : lin écru posé à plat OU ardoise claire mate OU marbre blanc
- Vue de dessus strictement
- Props ultra-minimalistes (une herbe, une fleur séchée, un linge)

---

## 6. PROPS & VAISSELLE

### Matériaux autorisés
- **Céramique artisanale :** Assiettes et bols irréguliers, émail blanc cassé ou beige chaud, fait main apparent. Légère imperfection de glaçure visible.
- **Lin naturel :** Serviettes froissées, sous-verres coton, tons crème/beige/terracotta clair. Jamais repassé, jamais plié en carré.
- **Verre transparent simple :** Carafes et verres droits non taillés, sans logo.
- **Bois naturel clair :** Petites planches minces (pas épaisses type charcuterie), cuillères pour confitures.

### Matériaux interdits
Inox · métal chromé · plastique · porcelaine trop blanche/froide · nappes synthétiques · vaisselle colorée vive

### Palette des props
`#FAFAF7` blanc cassé · `#F5F0E6` beige · `#EDE7D9` crème · terracotta très doux · bois clair · vert sauge (herbes)

---

## 7. PRÉSENCE HUMAINE

**Règle :** Mains uniquement. Jamais de visage, jamais de corps entier.

**Style des mains :**
- Peau naturelle, ongles courts, pas de vernis (ou nude/transparent uniquement)
- Mains soignées mais pas parfaites — mains de quelqu'un qui travaille
- Vêtement visible : manchon lin naturel, coton blanc, pull laine beige. Jamais de couleur synthétique.
- Position : geste en mouvement capturé (poser, verser, arranger) — jamais une pose statique

**Ce qui n'apparaît jamais :** Visages, bagues, manucure colorée, bijoux, costume/cravate

---

## 8. PACKAGING L'ÉCRIN

**Description :** Boîtes jaune signature, couleur exacte `#E0A126`, carton mat noble, typographie sobre.

**Présence dans les photos :** Toujours en arrière-plan discret. La boîte est visible, elle ancre la marque — mais elle n'est jamais le sujet principal. Légèrement floue, posée à côté ou en fond.

**À ne jamais faire :** Boîte au premier plan, boîte parfaitement nette et centrée, boîte avec logo visible en gros plan.

**Phrase à injecter :**
```
warm yellow artisan gift box (color #E0A126), matte cardboard finish,
slightly out of focus in background, partially visible at frame edge
```

---

## 9. ANGLES & CADRAGES

Deux angles principaux. Jamais d'autre angle sans décision délibérée.

### Angle A — Flat lay 90°
- Vue strictement perpendiculaire au plan
- Tout dans le même plan focal, tout net
- Composition intentionnelle mais pas symétrique
- Espace négatif généreux (minimum 30% de surface vide)
- Aucun élément coupé net au pixel — un bord qui déborde légèrement est permis

### Angle B — 3/4 plongeant
- Caméra en légère plongée, environ 30-45° au-dessus du plan
- Bokeh moyen sur le fond (f/2.8-4) — fond lisible mais doux
- Sujet positionné à tiers gauche ou tiers droit (règle des tiers — jamais centré parfaitement)
- Profondeur et volume du sujet visibles

**Ce qui est interdit :** Grand angle (déformation), tilt-shift, contre-plongée, fish-eye.

---

## 10. PRODUITS & CATÉGORIES

Les produits sont fournis à l'outil IA sous forme de photos de référence réelles. Les prompts décrivent le CONTEXTE autour du produit — jamais le produit lui-même en détail.

### Petits déjeuners
- Décor associé : Série A (plan de travail) ou Série C (flat lay)
- Angle : flat lay privilégié, 3/4 possible
- Ingrédients autour possibles : pot confiture, yaourt, jus, café, miel
- Émotion : calme du matin, début de journée, douceur

### Plateaux repas
- Décor associé : Série B (table bureau)
- Angle : 3/4 obligatoire (pour montrer le volume et la générosité)
- Herbes fraîches comme garniture naturelle
- Émotion : déjeuner d'équipe, convivialité professionnelle

### Coffrets cadeaux
- Décor associé : Série C (bois clair, fond neutre)
- Angle : 3/4 avec la boîte ouverte ou fermée
- Boîte jaune en premier plan ici (exception à la règle d'arrière-plan)
- Émotion : découverte, soin, cadeau intentionnel

---

## 11. INTERDITS ABSOLUS

Ces éléments ne doivent jamais apparaître dans aucune photo L'Écrin.

| Interdit | Raison |
|---|---|
| Plastique sous toute forme | Contre-valeur fondamentale de la marque |
| Logos de marques tierces | Dilution et confusion |
| Décor encombré ou désordonné | Contraire à l'univers épuré |
| Couleurs froides (bleu, acier, gris froid) | Évoque la restauration industrielle |
| Inox / métal chromé | "Cantine", pas "artisan" |
| Lumière artificielle visible (halos, flash direct) | Casse l'ambiance naturelle |
| Produits trop parfaits / CGI / trop brillants | Perd l'authenticité |
| Composition parfaitement symétrique | Signal d'image IA ou de stock photo |
| Personnes entières ou visages | Hors direction artistique |
| Textes ou typographies dans le décor | Sauf packaging L'Écrin en discret |

---

## 12. RÉFÉRENCES VISUELLES

**Mariage Frères** — thé haut de gamme français. Tons dorés/crèmes, packaging précieux, lumière enveloppante et douce. L'Écrin vise cette chaleur artisanale premium.

**Eric Kayser Boulangerie** — grain visible, bois, lin, produits imparfaitement parfaits. Authenticité immédiate sans effort apparent.

**Mots-clés de style à utiliser dans les prompts :**
```
artisan french editorial food photography
Mariage Frères aesthetic · Eric Kayser bakery feel
warm terroir français · quiet Parisian morning
slow hospitality · understated luxury
```

---

## 13. RÉALISME ULTIME — LES 14 PRINCIPES ANTI-EFFET IA

> **Vérité fondamentale :** Le réalisme extrême ne vient pas d'un meilleur prompt. Il vient des imperfections contrôlées. L'IA paraît fake quand tout est trop propre, trop symétrique, trop parfait. Il faut de la fragilité visuelle.

---

### Principe 1 — Lumière imparfaite (priorité absolue)
```
uneven natural light falloff, slight exposure imperfections,
realistic ambient bounce, imperfect light distribution,
subtle natural light inconsistency across scene
```

### Principe 2 — Micro imperfections physiques
```
slightly wrinkled linen (not folded), natural crumbs scattered unevenly,
imperfect object alignment, subtle asymmetry,
handmade surface imperfections, organic placement,
realistic wear on objects, uneven fabric folds,
naturally bent packaging corner, fabric compression where objects rest
```

**Micro désordre physique avancé** — les détails que le cerveau cherche inconsciemment :
```
micro dust particles visible in bright highlights,
subtle fingerprint smudge on glass surface,
tiny scratches on ceramic glaze (signs of real use),
faint dried liquid trace or ring on wood surface,
slight paper fiber irregularities on kraft labels,
natural patina on wooden props (not pristine new wood),
real-world object wear — nothing looks brand new
```

### Principe 3 — Textures matières (toujours)
```
tactile textures visible on all surfaces,
realistic material grain, matte surfaces (not glossy),
ceramic micro-texture with tiny glaze variation,
natural wood grain variation (not uniform),
soft textile fibers visible, organic material feel
```

### Principe 4 — Optique réaliste
```
subtle chromatic aberration at frame edges,
natural focus falloff (not abrupt), imperfect edge sharpness,
realistic lens softness in corners, slight grain in shadow areas,
natural bokeh transition (not perfect circles),
slight optical distortion at edges, realistic dynamic range limitations
```

**Focus hierarchy** — un vrai objectif ne met pas tout parfaitement net au même plan :
```
natural focus priority: sharpest at center subject, softer toward frame edges,
slight focus inconsistency even within same focal plane,
corners 5-10% softer than center (realistic lens behavior),
focus transitions gradually — no abrupt sharp-to-blur cutoff,
eye naturally guided from sharp foreground to soft background
```

### Principe 5 — Couleurs désaturées
```
slightly desaturated throughout (-8 to -12%),
muted realistic tones, soft color transitions,
non-HDR color grading, restrained color palette,
analog tonal rolloff, imperfect exposure balance
```

### Principe 6 — Composition avec tension légère
```
naturally composed (not designed), candid arrangement,
imperfect framing, realistic unequal object spacing,
subtle asymmetry as a design choice, lived-in composition,
one element slightly outside "perfect" position,
subtle visual imbalance that feels right
```

**Bruit visuel minimal** — chaque vraie photo a des éléments imperceptibles qui ancrent la réalité :
```
subtle background texture visible (wall grain, fabric weave, wood pores),
slight environmental randomness in negative space,
believable spatial irregularity in prop placement,
small unintentional detail that grounds the image in a real place
```

### Principe 7 — Présence humaine implicite
```
recently touched objects, gently disturbed composition,
used but clean aesthetic, subtle human activity traces,
naturally lived-in elegance, imperfect but intentional styling,
someone was just here
```

### Principe 8 — Réalisme alimentaire
```
realistic food texture (not plastic-looking),
natural moisture variation, imperfect pastry edges (handmade),
uneven browning on baked goods, realistic crumb structure,
authentic bakery inconsistency, non-commercial food styling
```

### Principe 9 — Poids & gravité
```
realistic object weight implied,
natural gravity on fabric (sagging, compression folds),
believable physical balance, cloth compressed where ceramic rests,
realistic surface compression under objects
```

### Principe 10 — Temporalité précise
```
quiet Parisian morning atmosphere (9am feel),
just-served coffee feeling, before-the-meeting calm,
slow hospitality moment — a specific moment in time, not a timeless image
```

### Principe 11 — Humidité & reflets imparfaits
```
soft irregular steam diffusion (not perfect column),
realistic condensation if applicable,
naturally reflective surfaces (not mirror-perfect),
diffused imperfect reflections, subtle moisture texture
```

### Principe 12 — La retenue (le plus grand secret)
Le cerveau croit au réel quand il sent qu'on n'essaie pas trop.
```
understated realism, restrained luxury,
quiet visual storytelling, believable imperfection,
non-styling styling (seems accidental, is intentional),
casually elegant, relaxed refinement
```

---

### Principe 13 — Color resonance (les objets s'influencent entre eux)
Dans une vraie photo, la lumière rebondit entre les objets et crée des échanges chromatiques. L'IA génère souvent des objets chromatiquement isolés les uns des autres — ce n'est pas réaliste.
```
warm yellow color from packaging casting subtle golden warmth on nearby surfaces,
cream linen reflecting soft light onto underside of ceramic,
warm wood tone bleeding slightly into shadow areas of adjacent objects,
realistic inter-object light bounce and color bleeding,
no object exists in chromatic isolation — everything influences everything
```

---

### Principe 14 — Environmental storytelling (le monde au-delà du cadre)
Une vraie photo existe dans un lieu réel. Des indices subtils suggèrent ce lieu sans le montrer.
```
faint shadow of window frame or curtain edge on background wall,
suggestion of natural light source just outside the frame left,
ambient warmth implying a real kitchen or office environment,
one element at frame edge implies a larger scene beyond,
the image feels like an excerpt of a real morning — not a constructed set
```

---

## 14. ADN DE SÉRIE — LES 7 ÉLÉMENTS À VERROUILLER

> **Principe :** Dans une série, seul le SUJET change. Tout le reste est identique d'une image à l'autre. L'œil humain détecte immédiatement quand les assiettes, les surfaces ou la lumière varient — et l'univers devient fake instantanément.

**1. Surface principale** — une seule description, mot pour mot dans chaque prompt
```
light ash wood surface with subtle natural grain, slightly matte finish,
warm honey-beige tone, grain direction not perfectly uniform
```

**2. Vaisselle** — une seule description
```
handmade off-white ceramic with slightly irregular glaze,
warm ivory tone, subtle enamel imperfections, matte-satin finish,
small rim thickness variations
```

**3. Textile** — une seule description
```
ecru linen textile, natural unbleached fiber (#EDE7D9 tone),
visible weave texture, not ironed, soft compression folds where objects rest
```

**4. Lumière** — identique dans chaque prompt
```
soft diffused light from north-facing window on the left,
warm 4800K, single source, gentle falloff toward right, no fill light
```

**5. Focale** — ne jamais varier dans une même série
- Flat lay → `35mm equivalent`
- 3/4 → `50mm equivalent`
- Macro → `85mm equivalent`

**6. Post-traitement** — identique
```
Kodak Portra 400 film simulation, subtle analog grain,
slightly desaturated midtones, warm highlights, soft shadow lift,
matte blacks, gentle highlight rolloff
```

**7. Niveau d'imperfection** — calibré, pas trop propre, pas trop chaotique
```
controlled imperfection level: subtle (curated lived-in, not messy),
3 to 4 visible micro-imperfections per image, imperfect but intentional
```

**Principe de cohérence émotionnelle :** La cohérence émotionnelle entre les images est plus importante que la variété extrême. Toutes les images doivent appartenir au même univers émotionnel — chaleur, calme, hospitalité — même si les sujets varient. Une image trop différente dans le ton (trop froide, trop festive, trop dynamique) rompt la série même si les couleurs sont correctes.

---

## 15. BLOC MAÎTRE ANTI-IA

Ce bloc unique concentre tous les principes de réalisme. À ajouter à la fin de chaque prompt, sans modification.

```
— RÉALISME PHYSIQUE —
soft diffused north-facing window light from left, single source, warm 4800K,
subtle uneven light falloff left to right, no fill light,
slight chromatic aberration at frame edges,
natural focus falloff, realistic depth of field f/2.8-4,
subtle lens softness in corners, slight grain in shadows,
natural bokeh transition, tactile surface textures throughout,
matte materials with visible grain, realistic object weight and gravity,
fabric compression where objects rest on surfaces,

— RÉALISME HUMAIN —
slightly wrinkled linen (naturally tossed, not folded),
natural crumbs scattered unevenly,
subtle asymmetry — nothing perfectly aligned or equidistant,
small organic imperfections (slight drip, cup at slight angle, one item off-center),
gently disturbed composition, recently touched objects,
used but clean, subtle traces of human presence,

— RÉALISME ALIMENTAIRE —
imperfect pastry surface, uneven browning, realistic crumb structure,
natural moisture variation, non-commercial food styling,

— RÉALISME ÉMOTIONNEL —
quiet Parisian morning moment, slow hospitality feeling,
understated realism, restrained luxury, non-styling styling,
believable imperfection, authentic lived-in elegance,

— COLOR RESONANCE —
warm color bleeding between adjacent objects,
yellow packaging casting subtle golden warmth on nearby surfaces,
realistic inter-object light bounce, no chromatic isolation,

— ENVIRONMENTAL STORYTELLING —
faint shadow of window frame on background wall,
image feels like an excerpt of a real place — not a constructed set,
subtle seasonal neutrality (no strong seasonal markers),

— ANTI IA —
NOT Pinterest staged, NOT stock photo perfect, NOT CGI rendered,
photographed by a real editorial food photographer,
handheld realism, natural human framing instinct,
imperfect premium aesthetic, organic and believable,
subtle natural imperfections make this image feel real,
micro dust in highlights, fingerprint on glass, scratch on ceramic glaze
```

---

## 16. MOTS INTERDITS DANS LES PROMPTS

Ces termes indiquent à l'IA de générer du rendu 3D ou du stock photo — exactement ce qu'on veut éviter.

```
ultra detailed · hyper realistic CGI · 8k render · 4k render
unreal engine · octane render · blender render · ray tracing
perfect composition · luxury commercial ad · flawless · highly polished
vibrant colors · sharp everywhere · ultra sharp · crispy detail
professional studio · advertisement · perfect lighting
product shot (commercial context) · perfectly symmetrical
```

---

## 17. CHECKLIST VALIDATION — 15 POINTS

Avant de valider toute image générée pour L'Écrin.

**Lumière**
- [ ] La lumière vient d'un seul côté et n'est pas parfaitement uniforme
- [ ] Pas de reflets parfaits, pas de halos, pas d'ombres dures
- [ ] Les ombres sont douces et légèrement irrégulières

**Imperfections**
- [ ] Miettes visibles et éparpillées asymétriquement
- [ ] Lin/tissu froissé, jamais plié parfaitement
- [ ] Au moins 2 objets légèrement désalignés
- [ ] Micro-texture visible sur toutes les surfaces (bois, céramique, tissu)

**Composition**
- [ ] Composition non symétrique
- [ ] Aucun élément parfaitement centré
- [ ] Tension visuelle légère — pas d'équilibre trop statique

**Humain & moment**
- [ ] On sent une présence humaine récente
- [ ] L'image représente un moment précis (pas une image abstraite)
- [ ] La nourriture a des imperfections réalistes (pas CGI)

**Global**
- [ ] L'image ne "sauterait" pas dans un moodboard Pinterest
- [ ] Montrée sans contexte, personne ne devinerait que c'est de l'IA
