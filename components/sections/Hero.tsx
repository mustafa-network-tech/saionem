"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { HeroGrowthVisual } from "@/components/sections/HeroGrowthVisual";
import { useHydratedReducedMotion } from "@/lib/useHydratedReducedMotion";

const trust = [
  "Türkiye Distribütörü",
  "Biyoteknoloji Odaklı",
  "Sertifikalı Yapı",
  "Japon Teknolojisi",
];

function OrganicParticles({ reduced }: { reduced: boolean }) {
  const seeds = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: `${(i * 17 + 11) % 100}%`,
    top: `${(i * 23 + 7) % 85}%`,
    size: 3 + (i % 4),
    delay: i * 0.12,
    duration: 10 + (i % 5),
  }));

  if (reduced) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {seeds.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-leaf-400/25 blur-[1px]"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.15, 0.45, 0.15],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  const reduced = useHydratedReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] overflow-hidden bg-cream-100 pt-[4.25rem] sm:pt-[4.5rem]"
    >
      {/* Layered atmosphere */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-10%,rgba(197,212,192,0.45),transparent_55%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-cream-200/90 via-cream-100/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[32%] bg-gradient-to-t from-earth-900/12 via-transparent to-transparent" />
        {!reduced && (
          <>
            <motion.div
              className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-leaf-200/30 blur-3xl"
              animate={{ x: [0, 24, 0], y: [0, 16, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -right-20 top-1/3 h-64 w-64 rounded-full bg-leaf-300/25 blur-3xl"
              animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
              transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}
      </div>

      <OrganicParticles reduced={reduced} />

      <Container className="relative z-[1] grid gap-12 pb-16 pt-10 md:grid-cols-2 md:items-center md:gap-10 md:pb-24 md:pt-14 lg:gap-16">
        <div className="order-2 md:order-1">
          <Reveal>
            <p className="mb-4 inline-flex items-center rounded-full border border-leaf-200/80 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-leaf-800">
              Biyoteknoloji · Doğal dönüşüm
            </p>
            <h1 className="font-display text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-charcoal-900 sm:text-5xl lg:text-[3.25rem]">
              21. Yüzyıl Japon Teknolojisi ile Doğal Dönüşüm
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-charcoal-800/75 sm:text-lg">
              Tarım, çevre ve yaşam alanlarında biyoteknolojik çözümler — toprağın canlanmasından sürdürülebilir
              üretime, etkin mikroorganizmalarla güvenilir dönüşüm.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#urunler" variant="primary">
                Ürünleri İncele
              </Button>
              <Button href="#iletisim" variant="secondary">
                İletişime Geç
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="mt-10">
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {trust.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-leaf-200/70 bg-white/80 px-3 py-1.5 text-xs font-medium text-charcoal-800/80 shadow-sm backdrop-blur-sm sm:text-[0.8rem]"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <motion.div
            className="w-full max-w-lg rounded-[2rem] border border-white/60 bg-white/35 p-6 shadow-card backdrop-blur-md sm:p-8 md:rounded-3xl"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroGrowthVisual reduced={reduced} />
            <p className="mt-4 text-center text-sm leading-relaxed text-charcoal-800/65">
              Yaşamın toprakla buluştuğu noktada, bilim ve doğa bir arada — sakin, ölçülü ve sürdürülebilir bir
              dönüşüm hikâyesi.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
