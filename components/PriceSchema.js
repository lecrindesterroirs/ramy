export function PriceSchema({ productName, minPrice, currency = "EUR" }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": productName,
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": currency,
      "lowPrice": minPrice.toString(),
      "offerCount": "1",
      "availability": "https://schema.org/InStock"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
