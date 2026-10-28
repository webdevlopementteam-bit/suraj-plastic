export default function JsonLd({ schemas = [] }) {
  return schemas.filter(Boolean).map((schema, index) => (
    <script
      key={index}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  ));
}
