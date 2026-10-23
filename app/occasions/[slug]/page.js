import OccasionView from '../../../components/occasions/OccasionView'

export default function OccasionPage({ params }) {
  return <OccasionView slug={params.slug} />
}
