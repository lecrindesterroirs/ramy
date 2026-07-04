# Image Server — L'Écrin Traiteur

Petit serveur local qui expose GPT Image (génération d'images) et GPT-5.5 (texte) via HTTP,
pour que Claude Code puisse déclencher des générations sans jamais voir la clé API.

## Installation

```bash
cd image-server
npm install
cp .env.example .env
```

Puis remplir `.env` avec ta vraie clé OpenAI (`OPENAI_API_KEY=sk-...`).

## Lancer le serveur

```bash
npm start
```

Le serveur écoute uniquement sur `127.0.0.1:4545` (pas accessible depuis le réseau).

## Endpoints

### `POST /generate-image`

```json
{
  "prompt": "Professional food photography of...",
  "filename": "prod-cake-poire.png",
  "outputPath": "public/prod-cake-poire.png",
  "size": "1024x1024"
}
```

- `outputPath` est optionnel. Si omis, l'image est sauvegardée dans `image-server/generated/`
  (staging) pour validation avant intégration au site.
- Si fourni, le chemin est relatif à la racine du repo (ex: `public/prod-cake-poire.png`) et
  écrit directement là — utile une fois qu'on a validé le style sur une page donnée.

Réponse :
```json
{ "success": true, "path": "public/prod-cake-poire.png", "bytes": 843221 }
```

### `POST /generate-text`

```json
{ "prompt": "Améliore ce prompt pour...", "model": "gpt-5.5" }
```

### `GET /health`

Vérifie que le serveur tourne et affiche les modèles configurés.
