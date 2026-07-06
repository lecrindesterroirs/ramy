'use client'

import { useParams, notFound } from 'next/navigation'
import GalleryFiche from '../../../../components/GalleryFiche'
import { BOXES } from '../page'

const SEO_HTML = `
  <p>La <strong>lunch box d'entreprise</strong> est la formule idéale pour les déjeuners nomades, réunions de travail et journées séminaires à Paris. Compacte et complète, elle réunit une entrée, un sandwich signature et un dessert artisanal dans un format pratique, prêt à emporter ou à servir en salle.</p>
  <h2>Des sandwichs façonnés maison, un dessert artisanal</h2>
  <p>Chaque lunch box associe des pains travaillés (baguette Signature, club moelleux, wrap souple) garnis de produits frais, une entrée de saison et un dessert artisanal. Serviette et couverts sont inclus, la boisson est proposée en option — tout est pensé pour un déjeuner soigné, sans logistique côté client.</p>
  <h2>Livraison à Paris et en Île-de-France dès 6h30</h2>
  <p>Commandez avant 14h la veille et recevez vos lunch box directement sur site. Effectifs, régimes alimentaires, facturation entreprise : nous adaptons la sélection et vous adressons un devis personnalisé sous 24h.</p>
`

export default function LunchBoxDetail() {
  const { slug } = useParams()
  const box = BOXES.find(b => b.id === slug)
  if (!box) notFound()

  const sections = [
    box.entree && { label: 'Entrée', value: box.entree },
    box.plat && { label: 'Sandwich', value: box.plat },
    box.dessert && { label: 'Dessert', value: box.dessert },
  ].filter(Boolean)

  const related = [...BOXES].filter(b => b.id !== box.id)
    .sort((a, b2) => (b2.categorie === box.categorie) - (a.categorie === box.categorie))
    .slice(0, 4)
    .map(b => ({ href: `/creations/lunch-box/${b.id}`, title: b.nom, meta: 'Lunch box' }))

  return (
    <GalleryFiche
      title={box.nom}
      related={related}
      relatedTitle="D'autres lunch box"
      subtitle={box.sousTitre}
      img={box.img}
      price={box.prix}
      priceNote="HT · par personne"
      description="Une lunch box individuelle complète — entrée, sandwich Signature, Club ou Wrap, dessert artisanal, serviette & couverts. Boisson en option."
      sections={sections}
      breadcrumb={[
        { label: 'Accueil', href: '/' },
        { label: 'Lunch Box', href: '/creations/lunch-box' },
        { label: box.nom },
      ]}
      backHref="/creations/lunch-box"
      backLabel="Retour aux lunch box"
      seoEyebrow="Lunch Box · Traiteur entreprise"
      seoTitle="La lunch box parfaite pour vos déjeuners nomades et réunions"
      seoHtml={SEO_HTML}
      devisPrestation="Lunch box"
      devisTitre="Des lunch box pour votre équipe ?"
      devisSousTitre="Répondez en 30 secondes — devis personnalisé sous 24h."
    />
  )
}
