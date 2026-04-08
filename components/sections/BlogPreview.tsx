"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useHydratedReducedMotion } from "@/lib/useHydratedReducedMotion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const posts = [
  {
    category: "Tarım",
    title: "Toprak mikrobiyomu ve sürdürülebilir verim",
    excerpt:
      "Kök çevresi sağlığını destekleyen uygulamalarla uzun vadeli toprak kalitesini nasıl korursunuz?",
    href: "#blog",
  },
  {
    category: "Çevre",
    title: "Atık yönetiminde biyoteknolojik denge",
    excerpt:
      "Doğal ayrıştırma süreçlerini hızlandırırken çevresel uyumu güçlendiren temel prensipler.",
    href: "#blog",
  },
  {
    category: "İnovasyon",
    title: "Japon teknolojisi ile doğal dönüşüm",
    excerpt:
      "Disiplinli AR-GE kültürünün, tarım ve yaşam bilimlerinde güven oluşturan yansımaları.",
    href: "#blog",
  },
];

export function BlogPreview() {
  const reduce = useHydratedReducedMotion();

  return (
    <section id="blog" className="bg-cream-50 py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-leaf-700">Bilgi paylaşımı</p>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-charcoal-900 sm:text-4xl">
              Blog ve uzman içerikleri
            </h2>
            <p className="mt-4 max-w-lg text-base text-charcoal-800/75">
              SEO uyumlu yapı için kategori, başlık ve özet alanları hazır — içerik stratejinizi güçlendirin.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <Link
              href="#blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-leaf-800 underline-offset-4 hover:underline"
            >
              Tüm yazılar
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.06}>
              <motion.article
                whileHover={reduce ? undefined : { y: -4 }}
                className="flex h-full flex-col rounded-3xl border border-leaf-200/60 bg-white/95 p-6 shadow-soft transition-shadow hover:shadow-card"
              >
                <span className="w-fit rounded-full bg-leaf-100 px-3 py-1 text-xs font-semibold text-leaf-800">
                  {post.category}
                </span>
                <h3 className="font-display mt-4 text-lg font-semibold leading-snug text-charcoal-900 sm:text-xl">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-800/75">{post.excerpt}</p>
                <Link
                  href={post.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-leaf-800"
                >
                  Devamını oku
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
