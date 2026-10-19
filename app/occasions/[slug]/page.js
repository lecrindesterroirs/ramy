import OccasionView from './OccasionView'

export default function OccasionPage({ params }) {
  return <OccasionView slug={params.slug} en={false} />
}
