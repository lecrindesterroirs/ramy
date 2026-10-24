import { notFound } from 'next/navigation'
import GalleryFiche from '../../../../components/GalleryFiche'
import { MENUS } from '../data'

/*
  Fiche d'un menu à partager (Le Méditerranéen, Le Parisien, Le Jardin). Page serveur :
  les trois menus viennent de ../data.js. L'ancienne fiche lisait SALADES (vide depuis la
  refonte des menus) : les liens de la page /creations/a-partager répondaient 404.
*/
const prixNombre = (prix) => (/(\d+[,.]\d{2})/.exec(prix || '') || [])[1]?.replace('.', ',') || null

export default function MenuDetail({ params }) {
  const m = MENUS.find(x => x.key === params.slug)
  if (!m) notFound()
  const prix = prixNombre(m.prix)

  const autres = MENUS.filter(x => x.key !== m.key)
    .map(x => ({ href: `/creations/a-partager/${x.key}`, title: x.nom, meta: 'Menu à partager', img: x.img }))

  const seoHtml = `
    <p><strong>${m.nom}</strong> est un menu à partager pour <strong>8 à 12 personnes</strong> : ${m.accroche.charAt(0).toLowerCase() + m.accroche.slice(1)} Il se pose au centre de la table et circule de main en main, pour un déjeuner d'équipe, un accueil ou un séminaire à Paris et en Île-de-France.</p>
    <h2>Au menu : ${m.salees.length} pièces salées et ${m.sucrees.length} douceurs</h2>
    <p><strong>Salé :</strong> ${m.salees.join(' ; ')}.</p>
    <p><strong>Sucré :</strong> ${m.sucrees.join(' ; ')}.</p>
    <h2>Commande et livraison</h2>
    <p>${prix ? `Le menu est à ${prix} € HT par personne. ` : ''}Commande avant <strong>14h la veille</strong>, livraison dès <strong>6h30</strong> à Paris et en Île-de-France, dressé et prêt à poser sur la table. Minimum de commande 50 € HT, livraison 29 € HT, facturation entreprise avec TVA. Toute la carte salée est halal et sans porc.</p>
  `

  return (
    <GalleryFiche
      title={m.nom}
      subtitle="Menu à partager"
      img={m.img}
      price={prix}
      priceNote="HT · par personne"
      description={`${m.accroche} Pour 8 à 12 personnes : ${m.salees.length} pièces salées et ${m.sucrees.length} douceurs, dressées le matin et livrées dès 6h30.`}
      sections={[
        { label: 'Salé', value: m.salees.join(' · ') },
        { label: 'Sucré', value: m.sucrees.join(' · ') },
      ]}
      related={autres}
      relatedTitle="Les autres menus à partager"
      breadcrumb={[
        { label: 'Accueil', href: '/' },
        { label: 'À partager', href: '/creations/a-partager' },
        { label: m.nom },
      ]}
      backHref="/creations/a-partager"
      backLabel="Retour aux menus à partager"
      seoEyebrow="À partager · Traiteur entreprise"
      seoTitle={`${m.nom}, un menu à partager pour vos déjeuners d'équipe`}
      seoHtml={seoHtml}
      devisPrestation="Plateaux repas"
      devisTitre="Un déjeuner à partager ?"
      devisSousTitre="Répondez en 30 secondes, devis personnalisé sous 24h."
    />
  )
}
