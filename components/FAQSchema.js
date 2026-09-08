export function FAQSchema({ faqs, pageTitle }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": pageTitle,
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.name,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
