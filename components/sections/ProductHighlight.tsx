"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useHydratedReducedMotion } from "@/lib/useHydratedReducedMotion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const products = [
  {
    name: "Toprak Canlandırıcı Seri",
    benefit: "Mikrobiyal aktiviteyi destekleyerek kök çevresi sağlığını güçlendirir.",
    image: "https://images.unsplash.com/photo-1654089669464-dcc57c490d2b?auto=format&fit=crop&w=900&q=85",
    alt: "Toprakta genç filiz ve yapraklar — kök çevresi",
    href: "#iletisim",
  },
  {
    name: "Hayvancılık Hijyen Çözümü",
    benefit: "Yatak ve ortam yönetiminde doğal dengeyi koruyan uygulama protokolleri.",
    image: "https://images.unsplash.com/photo-1641939193329-7071068dc40f?auto=format&fit=crop&w=900&q=85",
    alt: "Yeşil alanda otlayan inekler — hayvancılık",
    href: "#iletisim",
  },
  {
    name: "Çevre Denge Formülasyonu",
    benefit: "Organik yük ve koku kontrolünde sürdürülebilir biyoteknolojik destek.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=85",
    alt: "Yeşil orman ve doğal çevre",
    href: "#iletisim",
  },
  {
    name: "Yaşam Alanı Bakım Serisi",
    benefit: "Günlük hijyen ihtiyaçlarında kontrollü, güvenilir ve doğa dostu kullanım.",
    image: "https://images.unsplash.com/photo-1593898710828-935576df601d?auto=format&fit=crop&w=900&q=85",
    alt: "Kasede taze domates ve yeşillikler — doğal beslenme",
    href: "#iletisim",
  },
];

export function ProductHighlight() {
  const reduce = useHydratedReducedMotion();

  return (
    <section id="urunler" className="border-y border-leaf-200/50 bg-gradient-to-b from-cream-100 to-cream-50 py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-leaf-700">Ürün ve çözümler</p>
            <h2 className="font-display mt-3 max-w-xl text-3xl font-semibold tracking-tight text-charcoal-900 sm:text-4xl">
              Kurumsal vitrin: seçkin çözüm hatları
            </h2>
            <p className="mt-4 max-w-lg text-base text-charcoal-800/75">
              E-ticaret kataloğu hissi vermeden, her kart bir ihtiyaca karşılık gelen kurumsal çözüm özetidir.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          {products.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 0.06}
              className={i === 0 ? "lg:col-span-7" : i === 1 ? "lg:col-span-5" : i === 2 ? "lg:col-span-5" : "lg:col-span-7"}
            >
              <motion.article
                whileHover={reduce ? undefined : { y: -5 }}
                className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-leaf-200/60 bg-white/95 shadow-soft lg:flex-row"
              >
                <div
                  className={`relative h-52 w-full shrink-0 overflow-hidden sm:h-64 lg:h-auto lg:min-h-[240px] lg:flex-1 ${i % 2 === 0 ? "lg:w-[52%]" : "lg:w-[48%]"}`}
                >
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading={i < 2 ? "eager" : "lazy"}
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/25 to-transparent lg:bg-gradient-to-r" />
                </div>
                <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
                  <h3 className="font-display text-xl font-semibold text-charcoal-900 sm:text-2xl">{p.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-800/75 sm:text-base">{p.benefit}</p>
                  <Link
                    href={p.href}
                    className="mt-6 inline-flex w-fit items-center rounded-full border border-leaf-300 bg-leaf-50 px-5 py-2.5 text-sm font-semibold text-leaf-900 transition-colors hover:bg-leaf-100"
                  >
                    Detayları Gör
                  </Link>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
