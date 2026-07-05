import 'dotenv/config'
import express from 'express'
import OpenAI, { toFile } from 'openai'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PROJECT_ROOT = path.resolve(__dirname, '..')
const STAGING_DIR = path.join(__dirname, 'generated')

const PORT = process.env.PORT || 4545
const IMAGE_MODEL = process.env.OPENAI_IMAGE_MODEL || 'gpt-image-1'
const TEXT_MODEL = process.env.OPENAI_TEXT_MODEL || 'gpt-5.5'

if (!process.env.OPENAI_API_KEY) {
  console.error('OPENAI_API_KEY manquant. Crée un fichier .env dans image-server/ avec OPENAI_API_KEY=sk-...')
  process.exit(1)
}

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
const app = express()
app.use(express.json({ limit: '2mb' }))

// Résout un chemin de sortie fourni par l'appelant en le confinant au repo du site.
// Empêche toute tentative d'écriture hors du projet (../../ etc).
function resolveOutputPath(outputPath, filename) {
  if (!outputPath) {
    return path.join(STAGING_DIR, filename)
  }
  const resolved = path.resolve(PROJECT_ROOT, outputPath)
  if (!resolved.startsWith(PROJECT_ROOT + path.sep)) {
    throw new Error('outputPath doit rester à l\'intérieur du projet')
  }
  return resolved
}

app.get('/health', (req, res) => {
  res.json({ ok: true, imageModel: IMAGE_MODEL, textModel: TEXT_MODEL })
})

// POST /generate-image
// body: { prompt, filename, outputPath?, size? }
// - filename: nom du fichier (ex: "prod-cake-poire.png")
// - outputPath: chemin relatif au repo (ex: "public/prod-cake-poire.png") — si omis, va dans generated/
// - size: "1024x1024" | "1024x1536" | "1536x1024" (défaut 1024x1024)
app.post('/generate-image', async (req, res) => {
  const { prompt, filename, outputPath, size } = req.body || {}
  if (!prompt || !filename) {
    return res.status(400).json({ success: false, error: 'prompt et filename sont requis' })
  }

  try {
    const result = await openai.images.generate({
      model: IMAGE_MODEL,
      prompt,
      size: size || '1024x1024',
      n: 1,
    })

    const b64 = result.data[0].b64_json
    const buffer = Buffer.from(b64, 'base64')

    const destPath = resolveOutputPath(outputPath, filename)
    await fs.mkdir(path.dirname(destPath), { recursive: true })
    await fs.writeFile(destPath, buffer)

    res.json({
      success: true,
      path: path.relative(PROJECT_ROOT, destPath),
      bytes: buffer.length,
    })
  } catch (err) {
    console.error('generate-image error:', err.message)
    res.status(500).json({ success: false, error: err.message })
  }
})

// POST /edit-image
// body: { imagePath, prompt, filename, outputPath?, size? }
// - imagePath: chemin de l'image source (absolu, ex: /Users/.../macarons.jpg — ou relatif au repo)
// - Garde le sujet de l'image source et applique le prompt (ex: changer le décor/l'ambiance)
app.post('/edit-image', async (req, res) => {
  const { imagePath, prompt, filename, outputPath, size } = req.body || {}
  if (!imagePath || !prompt || !filename) {
    return res.status(400).json({ success: false, error: 'imagePath, prompt et filename sont requis' })
  }

  try {
    const srcPath = path.isAbsolute(imagePath) ? imagePath : path.resolve(PROJECT_ROOT, imagePath)
    const ext = path.extname(srcPath).toLowerCase()
    const mime = ext === '.png' ? 'image/png' : ext === '.webp' ? 'image/webp' : 'image/jpeg'
    const srcBuffer = await fs.readFile(srcPath)
    const imageFile = await toFile(srcBuffer, path.basename(srcPath), { type: mime })

    const result = await openai.images.edit({
      model: IMAGE_MODEL,
      image: imageFile,
      prompt,
      size: size || '1024x1024',
      n: 1,
    })

    const b64 = result.data[0].b64_json
    const buffer = Buffer.from(b64, 'base64')

    const destPath = resolveOutputPath(outputPath, filename)
    await fs.mkdir(path.dirname(destPath), { recursive: true })
    await fs.writeFile(destPath, buffer)

    res.json({
      success: true,
      path: path.relative(PROJECT_ROOT, destPath),
      bytes: buffer.length,
    })
  } catch (err) {
    console.error('edit-image error:', err.message)
    res.status(500).json({ success: false, error: err.message })
  }
})

// POST /generate-text
// body: { prompt, model? }
// Utile pour affiner/valider un prompt avec GPT avant génération image.
app.post('/generate-text', async (req, res) => {
  const { prompt, model } = req.body || {}
  if (!prompt) {
    return res.status(400).json({ success: false, error: 'prompt est requis' })
  }

  try {
    const completion = await openai.chat.completions.create({
      model: model || TEXT_MODEL,
      messages: [{ role: 'user', content: prompt }],
    })
    res.json({ success: true, text: completion.choices[0].message.content })
  } catch (err) {
    console.error('generate-text error:', err.message)
    res.status(500).json({ success: false, error: err.message })
  }
})

app.listen(PORT, '127.0.0.1', () => {
  console.log(`Image server L'Écrin — http://127.0.0.1:${PORT}`)
  console.log(`  Modèle image : ${IMAGE_MODEL}`)
  console.log(`  Modèle texte : ${TEXT_MODEL}`)
  console.log(`  Staging      : ${STAGING_DIR}`)
})
