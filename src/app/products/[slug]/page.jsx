import { notFound } from "next/navigation";

import { products } from "@/app/data/products";

import Hero from "../../components/product/Hero";
import ProductOverview from "../../components/product/ProductOverview";
import Specification from "../../components/product/Specification";
import SeoRenderer from "../../components/product/SeoRenderer";
import JsonLd from "../../components/JsonLd";
import { SITE_URL, faqSchemaFromBlocks, productBreadcrumbSchema } from "@/app/lib/seo";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: product.metaTitle,
    description: product.metaDescription,
    keywords: product.keywords,

    openGraph: {
      type: "website",
      url: `${SITE_URL}/products/${product.slug}`,
      siteName: "Suraj Plastic Industries",
      locale: "en_IN",
      title: product.metaTitle,
      description: product.metaDescription,
      images: [product.image],
    },

    alternates: {
      canonical: `${SITE_URL}/products/${product.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return products.map((item) => ({
    slug: item.slug,
  }));
}

export default async function Page({ params }) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  // Auto-generate FAQ schema from every faq block in seo/seoBefore content
  const allBlocks = [...(product.seoBefore || []), ...(product.seo || [])];

  const finalSchema = [
    ...(product.schema || [faqSchemaFromBlocks(allBlocks)]),
    productBreadcrumbSchema(product.name, `/products/${product.slug}`),
  ];

  return (
    <>
      <JsonLd schemas={finalSchema} />

      <Hero
        title={product.name}
        image={product.heroImage}
      />

      <ProductOverview product={product} />

      {product.seoBefore?.length > 0 && (
        <SeoRenderer content={product.seoBefore} />
      )}

      {!product.showSpecificationInOverview && product.specification && (
        <Specification
          title={
            product.specification.title ||
            "Technical Specifications"
          }
          headers={product.specification.headers}
          rows={product.specification.rows}
        />
      )}

      {product.seo?.length > 0 && (
        <SeoRenderer content={product.seo} />
      )}
    </>
  );
}
