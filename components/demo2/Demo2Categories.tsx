"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Leaf, Beef, Droplets } from "lucide-react";
import { RevealD2 } from "@/components/demo2/Reveal";
import { useHydratedReducedMotion } from "@/lib/useHydratedReducedMotion";

const cards = [
  {
    title: "Tarım",
    desc: "Toprak yapısını destekleme, organik madde dengesi ve verim–kalite odaklı sürdürülebilir üretim.",
    icon: Leaf,
    href: "/demo-2#urun-ozellikleri",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=82",
    n: "01",
  },
  {
    title: "Hayvancılık",
    desc: "Probiyotik destek, ahır ortamı ve yatak yönetiminde doğal denge; koku kontrolüne katkı.",
    icon: Beef,
    href: "/demo-2#urun-ozellikleri",
    image:
      "https://images.unsplash.com/photo-1641939193329-7071068dc40f?auto=format&fit=crop&w=900&q=82",
    n: "02",
  },
  {
    title: "Çevre",
    desc: "Organik atık ayrıştırma, sıvı–gaz dengesi ve çevre dostu arıtma yaklaşımları.",
    icon: Droplets,
    href: "/demo-2#urun-ozellikleri",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=82",
    n: "03",
  },
];

export function Demo2Categories() {
  const reduced = useHydratedReducedMotion();

  return (
    <section id="kategoriler" className="scroll-mt-28 bg-d2-void py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <RevealD2 className="max-w-xl">
          <p className="font-d2mono text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-d2-emeraldGlow">
            Ürün alanları
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Uygulama kategorileri
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
            SAION EM çözümleri üç ana başlıkta yapılandırılır. Her kategori için teknik ekip tarafından dozaj ve
            zamanlama rehberliği sunulur.
          </p>
        </RevealD2>

        <RevealD2 delay={0.08} className="mt-12">
          <p className="mb-4 font-d2mono text-[0.55rem] uppercase tracking-[0.35em] text-zinc-600 lg:hidden">
            Kaydır →
          </p>
          <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 pt-1 [scrollbar-width:thin] sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:px-0 lg:pb-0">
            {cards.map((c, i) => (
              <motion.div
                key={c.title}
                className="w-[min(88vw,340px)] shrink-0 snap-center lg:w-auto"
                whileHover={reduced ? undefined : { y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
              >
                <Link
                  href={c.href}
                  className="group relative flex h-[min(72vh,520px)] flex-col justify-end overflow-hidden rounded-sm border border-d2-line bg-d2-panel p-6 lg:h-[460px]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-50 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-60"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-d2-void via-d2-void/85 to-transparent" />
                  <span className="relative font-d2mono text-5xl font-bold leading-none text-d2-emerald/25 transition group-hover:text-d2-emerald/40">
                    {c.n}
                  </span>
                  <div className="relative mt-4 flex h-10 w-10 items-center justify-center border border-d2-line bg-d2-panelLift/90 text-d2-emeraldGlow">
                    <c.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="relative mt-4 text-xl font-semibold text-white">{c.title}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-zinc-400">{c.desc}</p>
                  <span className="relative mt-5 inline-flex font-d2mono text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-d2-emeraldGlow">
                    Detayları incele →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </RevealD2>
      </div>
    </section>
  );
}
