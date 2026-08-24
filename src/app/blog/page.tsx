import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { BlogCard } from "@/components/site/BlogCard";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog — Medical Tourism in India Guides | MedMyTrip",
  description:
    "Guides on treatment costs, medical visas, top hospitals and choosing the right doctor in India — written for international patients planning care abroad.",
  openGraph: {
    title: "Blog — Medical Tourism in India Guides | MedMyTrip",
    description:
      "Guides on treatment costs, medical visas, top hospitals and choosing the right doctor in India — written for international patients planning care abroad.",
  },
};

export default function BlogIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "MedMyTrip Blog",
    description: "Guides on medical tourism in India for international patients.",
    url: "https://healthbridge.in/blog",
    blogPost: blogPosts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.metaDescription,
      url: `https://healthbridge.in/blog/${p.slug}`,
      datePublished: p.publishedAt,
      dateModified: p.updatedAt,
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-primary via-primary to-accent py-20 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_55%)]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Guides for your <span className="text-secondary">medical journey to India</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/85">
              Straight answers on treatment costs, medical visas, accredited hospitals and choosing
              the right specialist — written for patients planning care from abroad.
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
