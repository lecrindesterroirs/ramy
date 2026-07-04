# L'Écrin — Fixed Nodes
## Blocs constants · Présents dans chaque génération · Ne jamais modifier

> Ces blocs sont les constantes absolues du système.
> Ils ne changent jamais, quelle que soit la série ou la scène.
> Les copier tels quels dans le Prompt Concatenator de Weavy.

---

## [DNA_MASTER] — Ancre d'identité

*Toujours en première position du prompt · 18 mots · Ancre émotionnelle et territoriale*

```
L'Écrin: contemporary artisan B2B hospitality, warm Parisian morning,
lived-in quiet elegance — not a bakery, not a palace
```

**Rôle :** Ancre l'univers émotionnel avant tout le reste. Sans cet ancrage, le Lock seul peut dériver vers du food photography générique. 18 mots suffisent — ne pas allonger.

---

## [COLOR_NODE] — Palette et température

*Injecter après le Lock si les couleurs dérivent · 22 mots*

```
warm cream dominant palette (#F5F0E6 tones), 4800K warm light temperature,
muted tones (-10% desaturation throughout),
shadows warm brown — never cool grey, never blue
```

**Note :** La température de couleur est déjà dans chaque Lock. COLOR_NODE est un correctif — à utiliser si les tons sont trop froids, pas systématiquement dans chaque prompt.

---

## [NEGATIVE_PROMPT] — Champ négatif complet

*Toujours dans le champ Negative Prompt de Weavy · Jamais dans le prompt principal*

```
plastic synthetic packaging, cold colors steel chrome aluminum neon fluorescent,
CGI rendered too perfect, perfectly symmetrical perfectly aligned,
Pinterest staged stock photo aesthetic, everything spotlessly clean,
harsh shadows overexposed HDR blown highlights,
faces full body people colored nail polish rings jewelry,
industrial kitchen canteen cafeteria,
watermark text overlay frame border,
digital noise JPEG artifacts motion blur,
studio lighting professional advertisement flawless highly polished,
vibrant saturated colors ultra sharp ultra detailed crispy,
8k render unreal engine octane render blender ray tracing,
rustic french bakery aesthetic provençal market tabliers farinés murs en pierre
```

**Rôle :** Exclure les dérives les plus fréquentes de l'IA image en un seul bloc compact. Ce bloc ne change jamais — le coller intégralement à chaque session.

---

## [CAMERA_REFERENCE] — Focales par série (guide de sélection — non injecté)

Ce tableau est une référence pour choisir le bon Lock. La focale est déjà dans chaque Lock — ne pas ré-injecter séparément.

| Série | Lock | Focale | Angle | Profondeur de champ |
|---|---|---|---|---|
| Flat lay plein cadre | A | `35mm` | 90° vue du dessus | Tout net |
| Flat lay serré/détail | A | `50mm` | 90° vue du dessus | Tout net |
| Plateau repas bureau | B | `50mm` | ~35° au-dessus | f/2.8-4, fond doux |
| Coffret cadeau | C | `85mm` | ~45° au-dessus | f/2.8, sélectif |
| Macro détail produit | B ou C | `85mm` | ~45° serré | f/2.8-4, très sélectif |
| Hero large établissant | B | `35mm` | ~20° | f/4-5.6, décor lisible |

---

## CE QU'ON N'INJECTE JAMAIS DANS LE PROMPT PRINCIPAL

Ces éléments sont contre-productifs quand ils sont explicitement écrits — ils signalent à l'IA une tentative de contrôle qui génère paradoxalement des images moins naturelles :

```
× "ultra realistic"
× "8k render"
× "highly detailed"
× "perfect"
× "professional"
× "cinematic"
× "award winning"
× "stunning"
```

Ces mots poussent l'IA vers du rendu CGI. Les éviter absolument.

---

*Fichier fixe · L'Écrin Système de Génération · Voir 00_PIPELINE.md pour l'usage*
