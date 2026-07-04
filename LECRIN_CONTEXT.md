# L'Écrin — Dossier de Contexte Complet
## Contexte de marque · Références visuelles · Assets réels · Anti-références

> **Ce document = le contexte et les références visuelles.**  
> Pour générer des images en production, utiliser le dossier **`LECRIN_SYSTEM/`** (pipeline modulaire Weavy).  
> Ce document reste la référence pour briefer l'IA sur l'univers complet de L'Écrin.

> Plus tu nourris le contexte, moins tu as besoin de prompts compliqués.
> L'IA comprend l'univers global et génère dedans — comme un photographe briefé par un vrai DA.

---

## 1. DNA VISUEL DU SITE

Les photos ne vivent pas seules. Elles s'intègrent dans un site avec un rythme, des proportions, une hiérarchie visuelle précise. Une photo cohérente avec le site semble avoir été créée pour lui.

**Rythme :** Lent et généreux. 96px de padding vertical par section. Tout respire. Les photos doivent avoir le même espace autour d'elles — pas coincées dans une card serrée.

**Hiérarchie typographique :** Très marquée. H1 massif en Cormorant Garamond Light Italic (jusqu'à 6.5rem). Les photos sont le fond — le texte est le premier plan. Une photo chargée tue la lisibilité du titre.

**Minimalisme :** Élevé. Layout éditorial alterné (image / texte), pas de grilles de cards identiques. Une idée par image, 3 à 5 éléments max par composition.

**Proportions :** Desktop-first. Compositions larges et horizontales pour les héros. 4:5 portrait pour les cards produit.

**Couleur site :** Fonds quasi-exclusivement neutres (`#FAFAF7` blanc cassé, `#F5F0E6` crème). Le jaune `#E0A126` est rare — seulement sur les CTA et badges. Les photos respectent cette rareté : le packaging jaune est discret, jamais dominant.

**Ce que ça implique pour les photos :**
- Beaucoup d'espace négatif pour que le texte cohabite
- Une seule tension visuelle par image
- Belle à 30% de sa taille (card) ET à 100% (hero pleine largeur)
- Jamais plus de 5 éléments dans le cadre

---

## 2. RÉFÉRENCES VISUELLES — AVEC LES POURQUOI

> Pas des "j'aime bien". Des références précises avec l'élément exact à retenir — et ce qu'on ne prend pas.

---

### Mariage Frères
**Ce qu'on prend :** La relation entre le packaging et la lumière. Leurs boîtes projettent une chaleur ambiante sans jamais dominer. Lumière enveloppante, jamais directe. Tons crème/dorés.
**Ce qu'on ne prend pas :** Le côté trop sombre, trop cabinet de curiosités. L'Écrin est plus clair, plus matin, plus vivant.
```
→ retenir : packaging as ambient color source · warm enveloping light · premium without coldness
```

### Eric Kayser Boulangerie
**Ce qu'on prend :** L'authenticité immédiate. Grain visible. Bois, lin, produits légèrement imparfaits. On croit immédiatement que quelqu'un a fait ça à la main ce matin.
**Ce qu'on ne prend pas :** La frontalité parfois trop simple, le manque de profondeur.
```
→ retenir : instant believability · analog grain · handmade imperfection · real morning energy
```

### Aesop
**Ce qu'on prend :** La discipline de composition. Jamais trop d'éléments. La texture est une star. Le silence entre les objets est intentionnel. Les matières parlent sans explication.
**Ce qu'on ne prend pas :** Le côté trop minimaliste/froid, l'absence d'émotion food.
```
→ retenir : texture as hero · silence between objects · material speaks for itself · editorial discipline
```

### Polène
**Ce qu'on prend :** La rigueur de composition. Fond simple, objet respirant, espace vide généreux. Le produit traité comme une sculpture. Lumière naturelle toujours.
**Ce qu'on ne prend pas :** L'absence de chaleur humaine — trop froid pour L'Écrin.
```
→ retenir : negative space as design · product as sculpture · natural light discipline
```

### Jacquemus
**Ce qu'on prend :** L'énergie. La chaleur. Le luxe vivant — joyeux, léger. Couleurs qui semblent chauffées par le soleil. L'impression que des humains sont là, heureux.
**Ce qu'on ne prend pas :** La saturation colorée, le côté mode éloigné du food artisanal.
```
→ retenir : living luxury · warmth and joy · human energy · light that feels sun-warmed
```

### Aman (hôtels)
**Ce qu'on prend :** Le sens du lieu. Chaque photo dit "tu es quelque part de réel et beau". Lumière toujours naturelle. L'hospitalité est palpable — on sent qu'on va être reçu.
**Ce qu'on ne prend pas :** L'échelle (grands espaces), le budget visuel.
```
→ retenir : sense of real place · palpable hospitality · natural light always · you feel welcomed
```

---

**Phrase à injecter dans les prompts pour ancrer les références :**
```
Mariage Frères ambient warmth, Eric Kayser instant believability,
Aesop material discipline, Polène breathing composition,
Jacquemus living warmth, Aman real hospitality feel
```

---

## 3. ANTI-RÉFÉRENCES — CE QUE L'ÉCRIN REFUSE

> Aussi important que les références positives. Montrer ce qu'on refuse aide l'IA à comprendre les frontières exactes.

---

### Nespresso / publicité café corporate
**Pourquoi non :** Trop parfait, trop studio, trop aspirationnel froid. Café qui flotte sur fond noir avec reflet miroir. Zéro humanité, zéro grain, zéro réalité.
**Signal à éviter :** Lumière studio parfaite · fond foncé dramatique · reflets miroir sur liquides

### Food Instagram / Pinterest food saturé
**Pourquoi non :** Saturation maximale, tout centré, zéro grain, zéro imperfection. Le croissant a l'air en plastique. On reconnaît le staging à 100m.
**Signal à éviter :** Couleurs boostées · composition symétrique · propreté totale · zéro grain

### Gastro sombre / restaurant étoilé
**Pourquoi non :** Fonds noirs, lumières dramatiques, produits comme des bijoux sur velours. Luxe froid — exactement l'opposé de L'Écrin. Prestige intimidant, pas chaleur vivante.
**Signal à éviter :** Fonds sombres · rim light · ombres dramatiques · théâtralité

### Deliveroo / UberEats / apps food delivery
**Pourquoi non :** Tout trop bright, trop commercial, trop "clic ici". Couleurs primaires, fond blanc pur, éclairage uniforme. L'antithèse du terroir artisanal.
**Signal à éviter :** Fond blanc pur · éclairage uniforme · couleurs vives · catalogue commercial

### IA glossy générique / Midjourney food par défaut
**Pourquoi non :** Perfection uniforme, saturation maximale, aucun défaut, surfaces trop lisses. On reconnaît le rendu IA immédiatement par excès de propreté.
**Signal à éviter :** Perfection uniforme · saturation max · aucun défaut · surfaces lisses

### Paul / Brioche Dorée / boulangerie industrielle
**Pourquoi non :** Logos partout, plastique, lumière fluorescente, standardisation. L'opposé absolu du terroir.
**Signal à éviter :** Packaging plastique · logos de chaîne · lumière froide artificielle

### Pâtisserie / boulangerie artisanale classique ← RISQUE SPÉCIFIQUE L'ÉCRIN
**Pourquoi non :** C'est le risque le plus subtil — et le plus dangereux. L'Écrin fait de l'artisanal, donc l'IA va naturellement dériver vers "ambiance boulangerie de quartier" : tabliers farinés, murs en pierre, planches de bois épaisses, décor rustico-provençal. Ce n'est pas L'Écrin. L'Écrin c'est du B2B premium — réception d'entreprise, hospitalité contemporaine. Pas une vitrine de boulangerie.
**Signal à éviter :** Décor trop "rustico-artisanal" · tabliers ou tenues de cuisine visibles · planches épaisses style charcuterie · murs pierre · ambiance marché provençal · produits empilés en vrac

---

**Phrase à injecter si l'image dérive :**
```
NOT Nespresso studio commercial, NOT Pinterest food saturated,
NOT dark fine dining, NOT food delivery app style,
NOT AI glossy perfect, NOT industrial chain bakery,
NOT rustic french bakery aesthetic, NOT provençal market style,
contemporary premium B2B hospitality, not a boulangerie de quartier,
authentic imperfect artisan, NOT aspirational cold luxury
```

---

## 4. STRUCTURE DES 4 DOSSIERS — Le workflow complet

> Organise tes fichiers ainsi avant toute session de génération. Fournis-les à l'IA dans cet ordre.

---

### DOSSIER 1 — Brand System
```
LECRIN_DA_PHOTO.md              ← la DA pure (règles, principes, couleurs, lumière)
couleurs-palette.png            ← les 7 hex visuels côte à côte
typographie-exemples.png        ← Cormorant / Source Serif / Jost en situation
```

*Screenshots du site à annoter :*
```
site-hero-accueil.png           → "j'aime le rythme lent, l'espace, le titre en grand"
site-page-offres.png            → "j'aime le layout alterné image/texte"
site-page-produit.png           → "j'aime la proportion image 40% / texte 60%"
```

---

### DOSSIER 2 — Assets réels ← LE PLUS IMPORTANT

Ces photos font que l'IA reproduit TES matières et TES produits, pas des versions génériques.

**Convention de nommage :** `NNN-categorie-description.jpg` (ex: `001-produit-madeleines-nature.jpg`)  
**Résolution minimum :** 2000px sur le petit côté · Format JPG qualité 90 ou PNG · Pas de compression agressive

```
produits/
  001-madeleines-nature.jpg                ← photo de face + vue de dessus, lumière neutre
  002-madeleines-chocolat.jpg
  003-madeleines-pistache-framboise.jpg
  004-madeleines-ananas-coco.jpg
  005-plateau-viennoiseries-dessus.jpg     ← vue de dessus ET vue 3/4 (deux fichiers)
  006-plateau-repas-compose.jpg
  007-coffret-ferme-plusieurs-angles.jpg   ← face, 3/4, dessus
  008-coffret-ouvert-contenu-visible.jpg

matieres/
  101-ceramique-assiette-face.jpg          ← la vraie assiette — photo nette sur fond neutre
  102-ceramique-detail-glaçure.jpg         ← zoom sur la texture de l'émail (imperfections)
  103-lin-ecru-texture-gros-plan.jpg       ← tissu étalé, lumière rasante pour voir le grain
  104-bois-surface-vue-dessus.jpg          ← la vraie surface bois, lumière directe
  105-bois-texture-detail-fibre.jpg        ← zoom sur le grain du bois (pores visibles)
  106-packaging-carton-texture.jpg         ← texture exacte du carton jaune #E0A126
  107-packaging-carton-pliure-detail.jpg   ← imperfections naturelles du carton (angle, pli)

lumiere/
  201-lumiere-matin-espace-reel.jpg        ← photo dans ton vrai espace le matin, naturelle
  202-lumiere-surface-bois-matin.jpg       ← comment la lumière tombe sur TA surface bois
  203-ombre-portee-objet-reel.jpg          ← comment les ombres se comportent dans ton espace
```

**Ce que chaque catégorie fait pour l'IA :**
- `produits/` → l'IA connaît exactement la texture, la couleur et la forme de tes produits
- `matieres/` → l'IA reproduit TES matériaux, pas une version générique du bois ou du lin
- `lumiere/` → l'IA comprend comment la lumière se comporte dans TON espace réel

---

### LE HACK ULTIME — Tes Photos Moches Comme Référence

> C'est le secret le moins intuitif, et le plus puissant.

**Le principe :** Une photo prise avec ton iPhone dans ton espace réel — même mal cadrée, même sous-exposée, même floue — donne à l'IA quelque chose qu'aucun prompt ne peut donner : **la réalité de ton grain d'air, de ta lumière spécifique, de tes matières exactes.**

**Ce qu'il faut photographier "en moche" :**
1. Ta surface de travail en lumière matinale naturelle — juste la table, rien dessus
2. Tes madeleines telles qu'elles sortent du four, avant toute mise en scène
3. Ta céramique posée sur ta surface habituelle, sans arrangement
4. Ton lin tel qu'il sort du tiroir — froissé, naturel, pas préparé
5. Ton packaging jaune dans ton espace réel, sans scénographie

**Comment les utiliser dans Weavy :**
Joindre 1-2 de ces photos comme image de référence, avec ce texte dans le prompt :
```
reference image: real space lighting and material context only,
use this for ambient light quality, material textures, and color warmth,
do NOT replicate the composition or staging of this reference — only extract the atmosphere
```

**Pourquoi ça marche :** L'IA extrait la vraie couleur de la lumière dans ton espace, la vraie texture de tes surfaces, le vrai grain de ta matière — et l'applique à une composition idéale. Tu obtiens une image parfaitement composée avec ta réalité à l'intérieur.

---

### DOSSIER 3 — Références visuelles annotées

```
references-oui/
  mariage-freres.jpg      → annoter : "lumière enveloppante + chaleur packaging"
  eric-kayser.jpg         → annoter : "grain + imperfection + authenticité matin"
  aesop.jpg               → annoter : "silence entre les objets + texture comme star"
  polene.jpg              → annoter : "espace négatif + produit comme sculpture"
  jacquemus.jpg           → annoter : "chaleur + luxe vivant + énergie humaine"
  aman.jpg                → annoter : "sens du lieu + hospitalité palpable"

references-non/
  nespresso.jpg           → annoter : "REFUS — studio, froid, perfection morte"
  pinterest-food.jpg      → annoter : "REFUS — saturé, centré, zéro grain, staged"
  dark-gastro.jpg         → annoter : "REFUS — dramatique, luxe intimidant"
  ia-glossy.jpg           → annoter : "REFUS — perfection IA évidente, aucun défaut"
```

---

### DOSSIER 4 — Scene Prompts

```
scenes-a-generer/
  scene-petit-dejeuner.txt
  scene-mains-coffret.txt
  scene-plateau-reunion.txt
  scene-macro-madeleine.txt
  scene-gouter-pause.txt
  scene-catalogue-gamme.txt

prompts-valides/
  [archiver ici chaque prompt validé avec son seed et sa date]
```

---

## 5. ORDRE DE CHARGEMENT POUR L'IA

Quand tu ouvres une session de génération, charger dans cet ordre :

```
1. LECRIN_DA_PHOTO.md          → contexte DA complet (règles, principes, couleurs)
2. LECRIN_CONTEXT.md           → ce document (site, références, anti-références)
3. Photos Dossier 2            → tes vraies matières et produits comme références visuelles
4. 2-3 photos Dossier 3 OUI   → références positives annotées
5. 1-2 photos Dossier 3 NON   → anti-références pour délimiter
6. Prompt de scène             → depuis LECRIN_STORYBOARD.md
7. Bloc Maître Anti-IA         → section 15 de LECRIN_DA_PHOTO.md
```

**Résultat :** L'IA comprend l'univers complet. Elle génère L'Écrin — pas une belle photo food générique.

---

*Document de contexte — L'Écrin Traiteur*
*À utiliser conjointement avec LECRIN_DA_PHOTO.md et LECRIN_STORYBOARD.md*
