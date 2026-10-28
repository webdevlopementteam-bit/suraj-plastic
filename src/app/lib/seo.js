export const SITE_URL = "https://www.surajplasticindustries.in";

// FAQPage schema from every "faq" block in a SeoRenderer content array
export function faqSchemaFromBlocks(blocks = []) {
  const items = blocks
    .filter((block) => block?.type === "faq")
    .flatMap((block) => block.items);

  if (items.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

// Home › Products › <page> breadcrumb schema
export function productBreadcrumbSchema(name, path) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Products", item: `${SITE_URL}/products` },
      { "@type": "ListItem", position: 3, name, item: `${SITE_URL}${path}` },
    ],
  };
}
