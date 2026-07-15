import { businessNode } from '../lib/site'

/*
  Émet l'entité #business (LocalBusiness/FoodEstablishment complète) sur une page.
  À poser UNIQUEMENT sur les pages qui ne définissent/référencent pas déjà
  #business (fiches produit, pages Univers) pour consolider l'entité côté IA/GEO.
  Ne PAS l'ajouter sur home, contact, devis, /traiteur, catégories, journal :
  ils émettent déjà le nœud → éviter un doublon d'@id.
*/
export default function BusinessJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', ...businessNode() }) }}
    />
  )
}
