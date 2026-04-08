"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useHydratedReducedMotion } from "@/lib/useHydratedReducedMotion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const areas = [
  {
    title: "Tarım Alanlarında Kullanım",
    summary: "Toprak canlılığı, kök gelişimi ve bitki sağlığı için mikrobiyal destekli sürdürülebilir tarım.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=85",
    alt: "Yeşil tarla ve bitki örtüsü — tarımsal üretim",
    href: "#iletisim",
  },
  {
    title: "Hayvancılık Alanlarında Kullanım",
    summary: "Ahır hijyeni, yatak yönetimi ve sindirim dostu çözümlerle refah odaklı üretim.",
    image: "https://images.unsplash.com/photo-1641939193329-7071068dc40f?auto=format&fit=crop&w=800&q=85",
    alt: "Yeşil mera üzerinde otlayan süt sığırları",
    href: "#iletisim",
  },
  {
    title: "Çevre Alanlarında Kullanım",
    summary: "Atık ayrıştırma, koku kontrolü ve doğal dengeyi destekleyen çevre uygulamaları.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=85",
    alt: "Orman ve doğal yeşil alan",
    href: "#iletisim",
  },
  {
    title: "Dezenfeksiyon Alanlarında Kullanım",
    summary: "Güvenli yüzey ve ortam hijyeni için kontrollü, bilimsel formülasyon yaklaşımı.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=85",
    alt: "Traktörle tarlada uygulama — saha ve üretim hijyeni bağlamı",
    href: "#iletisim",
  },
  {
    title: "Kozmetik Alanlarında Kullanım",
    summary: "Doğal içerik trendine uyumlu, cilt dostu ve kontrollü mikrobiyal denge çözümleri.",
    image: "https://images.unsplash.com/photo-1609486961058-cbfe79e35cbf?auto=format&fit=crop&w=800&q=85",
    alt: "Yaprak ve bitki dokusu — doğal içerikler",
    href: "#iletisim",
  },
  {
    title: "İnsan Sağlığına Yönelik Alanlar",
    summary: "Yaşam alanları ve kişisel bakımda hijyen ile doğallığı bir arada sunan ürün yaklaşımı.",
    image: "https://images.unsplash.com/photo-1659822887922-c1386185cc6b?auto=format&fit=crop&w=800&q=85",
    alt: "Elde tutulan tabakta taze sebzeler — sağlıklı yaşam",
    href: "#iletisim",
  },
];

export function ApplicationAreas() {
  const reduce = useHydratedReducedMotion();

  return (
    <section id="uygulama-alanlari" className="bg-cream-50 py-20 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-leaf-700">Uygulama alanları</p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-charcoal-900 sm:text-4xl">
            Doğanın döngüsüne uyumlu çözümler
          </h2>
          <p className="mt-4 text-base text-charcoal-800/75">
            Her sektör için özelleştirilmiş biyoteknolojik uygulama haritaları — ölçeklenebilir ve güvenilir.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.04}>
              <motion.div whileHover={reduce ? undefined : { y: -4 }} transition={{ duration: 0.25 }}>
                <Link
                  href={a.href}
                  className="group relative block aspect-[5/6] min-h-[280px] w-full overflow-hidden rounded-3xl border border-leaf-200/50 shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf-600 sm:min-h-0 sm:aspect-[4/5]"
                >
                  <Image
                    src={a.image}
                    alt={a.alt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.05]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading={i < 3 ? "eager" : "lazy"}
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/88 via-charcoal-900/35 to-leaf-900/15" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-leaf-100/90">
                      Keşfet
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                    <h3 className="font-display mt-2 text-xl font-semibold leading-snug text-white sm:text-[1.35rem]">
                      {a.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-white/85">{a.summary}</p>
                  </div>
                </Link>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
