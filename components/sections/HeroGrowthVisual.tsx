"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Hero görsel alanı: tek bir “sahne” animasyonu yerine
 * gerçek tarım / toprak / bitki fotoğraflarının sırayla değişmesi (çapraz geçiş).
 */

const SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1623136299195-570a06bdae6b?auto=format&fit=crop&w=1400&q=82",
    alt: "Sera içinde toprakta sıralı yeşil bitkiler",
  },
  {
    src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1400&q=82",
    alt: "Toprağa fide diken eller, canlı üretim",
  },
  {
    src: "https://images.unsplash.com/photo-1654089669464-dcc57c490d2b?auto=format&fit=crop&w=1200&q=82",
    alt: "Toprak yüzeyinden çıkan genç filiz ve yapraklar",
  },
  {
    src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=82",
    alt: "Havadan yeşil tarla ve ürün örtüsü",
  },
] as const;

const INTERVAL_MS = 5200;
const FADE_SEC = 1.15;

export function HeroGrowthVisual({ reduced }: { reduced: boolean }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [reduced]);

  const current = reduced ? 0 : active;

  return (
    <div
      className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl bg-charcoal-900 shadow-inner ring-1 ring-leaf-200/30 sm:aspect-[5/4] sm:rounded-3xl md:max-w-xl"
      aria-roledescription="carousel"
      aria-label="Toprak ve bitki görselleri, otomatik değişen slayt"
    >
      {SLIDES.map((slide, i) => (
        <motion.div
          key={slide.src}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: i === current ? 1 : 0 }}
          transition={{ duration: FADE_SEC, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden={i !== current}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 520px"
            priority={i === 0}
            loading={i === 0 ? "eager" : "lazy"}
          />
        </motion.div>
      ))}

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal-900/55 via-charcoal-900/10 to-cream-50/25"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent"
        aria-hidden
      />

      {!reduced && (
        <div
          className="absolute bottom-3 left-0 right-0 z-10 flex justify-center gap-2"
          role="tablist"
          aria-label="Slayt göstergesi"
        >
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === current}
              aria-label={`Görsel ${i + 1}`}
              onClick={() => setActive(i)}
              className="h-2 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
              style={{
                width: i === current ? "1.75rem" : "0.5rem",
                backgroundColor: i === current ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.35)",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
