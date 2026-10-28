import { notFound } from "next/navigation";

import { blogs } from "@/app/data/blogs";
import { SITE_URL } from "@/app/lib/seo";

import BlogDetail from "../../components/blog/BlogDetail";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
    keywords: blog.keywords,

    openGraph: {
      type: "article",
      url: `${SITE_URL}/blog/${blog.slug}`,
      siteName: "Suraj Plastic Industries",
      locale: "en_IN",
      title: blog.metaTitle,
      description: blog.metaDescription,
      images: [blog.image],
      publishedTime: blog.datePublished,
    },

    alternates: {
      canonical: `${SITE_URL}/blog/${blog.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return blogs.map((item) => ({
    slug: item.slug,
  }));
}

export default async function Page({ params }) {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  return <BlogDetail blog={blog} />;
}
