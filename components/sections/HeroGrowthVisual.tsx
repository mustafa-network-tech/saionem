"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/** Tek sahne: canlılık için çok hafif “nefes” zoom (Ken Burns), slider yok */

const HERO_IMAGE = {
  src: "https://images.unsplash.com/photo-1654089669464-dcc57c490d2b?auto=format&fit=crop&w=1600&q=85",
  alt: "Toprak yüzeyinden çıkan genç filiz ve yapraklar",
} as const;

export function HeroGrowthVisual({ reduced }: { reduced: boolean }) {
  return (
    <div
      className="relative mx-auto aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-2xl bg-charcoal-900 shadow-inner ring-1 ring-leaf-200/35 sm:aspect-[5/4] sm:rounded-3xl lg:max-w-none lg:aspect-[5/4]"
      aria-label={HERO_IMAGE.alt}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 h-full w-full"
          initial={false}
          animate={
            reduced
              ? { scale: 1 }
              : {
                  scale: [1, 1.055, 1],
                }
          }
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src={HERO_IMAGE.src}
            alt={HERO_IMAGE.alt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
            priority
          />
        </motion.div>
      </div>

      <motion.div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal-900/55 via-charcoal-900/10 to-cream-50/20"
        aria-hidden
        animate={reduced ? { opacity: 1 } : { opacity: [0.92, 1, 0.92] }}
        transition={
          reduced ? { duration: 0 } : { duration: 14, repeat: Infinity, ease: "easeInOut" }
        }
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/45 to-transparent"
        aria-hidden
      />
    </div>
  );
}
