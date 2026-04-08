"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useHydratedReducedMotion } from "@/lib/useHydratedReducedMotion";

export function Demo2Hero() {
  const reduced = useHydratedReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] scroll-mt-28 overflow-hidden pt-[4.5rem] sm:pt-[5.25rem] lg:grid lg:min-h-[min(100dvh,900px)] lg:grid-cols-12 lg:gap-0 lg:pt-24"
    >
      {/* Sol: tipografi paneli — Demo 1’deki tam ekran fotoğraf hero’dan yapısal ayrım */}
      <div className="relative z-[2] flex flex-col justify-end px-4 pb-12 pt-8 sm:px-6 sm:pb-16 lg:col-span-5 lg:justify-center lg:px-10 lg:pb-24 lg:pt-0 xl:px-14">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-d2-void lg:bg-gradient-to-br lg:from-d2-void lg:via-d2-panel lg:to-d2-void" />
        <motion.div
          initial={reduced ? false : { opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-d2mono text-[0.65rem] font-medium uppercase tracking-[0.35em] text-d2-emeraldGlow">
            SAION EM · Etkin Mikroorganizmalar
          </p>
          <p className="mt-6 font-d2mono text-[0.6rem] uppercase tracking-[0.4em] text-zinc-600">Kapak / 01</p>
          <h1 className="mt-3 max-w-xl text-balance text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.35rem] xl:text-5xl">
            21. Yüzyıl Japon Teknolojisi ile Doğayı Yeniden Canlandırın.
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-zinc-400 sm:text-base">
            SAION EM (Etkin Mikroorganizmalar) ile tarım, hayvancılık ve çevrede sürdürülebilir, %100 doğal
            çözümler.
          </p>
          <div className="mt-10 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-3">
            <Link
              href="/demo-2#kategoriler"
              className="inline-flex items-center justify-center rounded-sm border border-zinc-500 px-7 py-3 text-center font-d2mono text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-zinc-100 transition hover:border-d2-emeraldGlow hover:text-d2-emeraldGlow"
            >
              Ürünleri Keşfet
            </Link>
            <Link
              href="/demo-2#urun-ozellikleri"
              className="inline-flex items-center justify-center rounded-sm bg-d2-emerald px-7 py-3 text-center font-d2mono text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-d2-void transition hover:bg-d2-emeraldDark"
            >
              Teknik Bilgi Al
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Sağ: keskin maskeli görsel bloğu */}
      <div className="relative min-h-[42vh] lg:col-span-7 lg:min-h-0">
        <div
          className="absolute inset-0 lg:[clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]"
          aria-hidden
        >
          <Image
            src="https://images.unsplash.com/photo-1654089669464-dcc57c490d2b?auto=format&fit=crop&w=1920&q=82"
            alt=""
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-d2-void via-d2-void/20 to-transparent lg:bg-gradient-to-l lg:from-d2-void lg:via-transparent lg:to-transparent" />
          {!reduced && (
            <motion.div
              className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-d2-emerald/15 blur-[80px] lg:bottom-auto lg:right-1/3 lg:top-1/4"
              animate={{ opacity: [0.25, 0.45, 0.25] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
