import { notFound } from 'next/navigation'
import GalleryFiche from '../../../../../components/GalleryFiche'
import { MENUS } from '../../../../creations/a-partager/data'
import { enMenu } from '../../../../../lib/en/produits/aPartager'

/*
  Fiche d'un menu à partager en anglais. Prix et photo viennent du fichier français ;
  seuls les textes sont pris dans lib/en/produits/aPartager.js.
*/
const prixNombre = (prix) => (/(\d+[,.]\d{2})/.exec(prix || '') || [])[1]?.replace(',', '.') || null

export default function MenuDetailEn({ params }) {
  const m = MENUS.find(x => x.key === params.slug)
  const en = m && enMenu(m.key)
  if (!m || !en) notFound()
  const prix = prixNombre(m.prix)

  const autres = MENUS.filter(x => x.key !== m.key && enMenu(x.key))
    .map(x => ({ href: `/en/creations/a-partager/${x.key}`, title: x.nom, meta: 'Sharing menu', img: x.img }))

  const seoHtml = `
    <p><strong>${m.nom}</strong> is a sharing menu for <strong>8 to 12 people</strong>: ${en.accroche.charAt(0).toLowerCase() + en.accroche.slice(1)} It is set in the middle of the table and passed from hand to hand, for a team lunch, a welcome or an offsite in Paris and the Île-de-France.</p>
    <h2>On the menu: ${en.salees.length} savoury pieces and ${en.sucrees.length} sweet ones</h2>
    <p><strong>Savoury:</strong> ${en.salees.join('; ')}.</p>
    <p><strong>Sweet:</strong> ${en.sucrees.join('; ')}.</p>
    <h2>Ordering and delivery</h2>
    <p>${prix ? `The menu is €${prix} excl. VAT per person. ` : ''}Order until <strong>10 am the day before</strong>, delivery from <strong>6:30 am</strong> in Paris and the Île-de-France, laid out and ready to set on the table. Minimum order €50 excl. VAT, delivery €29 excl. VAT, company invoicing with VAT. The whole savoury menu is halal and pork-free.</p>
  `

  return (
    <GalleryFiche
      lang="en"
      title={m.nom}
      subtitle="Sharing menu"
      img={m.img}
      price={prix}
      priceNote="excl. VAT · per person"
      description={`${en.accroche} For 8 to 12 people: ${en.salees.length} savoury pieces and ${en.sucrees.length} sweet ones, laid out in the morning and delivered from 6:30 am.`}
      sections={[
        { label: 'Savoury', value: en.salees.join(' · ') },
        { label: 'Sweet', value: en.sucrees.join(' · ') },
      ]}
      related={autres}
      relatedTitle="The other sharing menus"
      breadcrumb={[
        { label: 'Home', href: '/en' },
        { label: 'Sharing menus', href: '/en/creations/a-partager' },
        { label: m.nom },
      ]}
      backHref="/en/creations/a-partager"
      backLabel="Back to sharing menus"
      seoEyebrow="Sharing menu · Corporate catering"
      seoTitle={`${m.nom}, a sharing menu for your team lunches`}
      seoHtml={seoHtml}
      devisPrestation="Plateaux repas"
      devisTitre="A sharing lunch to organise?"
      devisSousTitre="Answer in 30 seconds, personalised quote within 24 hours."
    />
  )
}
