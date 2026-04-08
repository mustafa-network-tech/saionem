"use client";

import Image from "next/image";
import { RevealD2 } from "@/components/demo2/Reveal";

const stats = [
  { k: "GDO", v: "Yok" },
  { k: "İçerik", v: "%100 doğal" },
  { k: "Ortak", v: "Sanko Sangyo · JP" },
];

export function Demo2About() {
  return (
    <section id="kurumsal" className="scroll-mt-28 border-y border-d2-line bg-d2-panel py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <RevealD2 className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-d2mono text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-d2-emeraldGlow">
              Kurumsal
            </p>
            <h2 className="mt-2 max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Egem Doğal ve Biyoteknoloji Tarım Ürünleri
            </h2>
          </div>
          <p className="max-w-sm font-d2mono text-[0.6rem] uppercase leading-relaxed tracking-[0.2em] text-zinc-500">
            Dosya ref. · TR-JP-EM
          </p>
        </RevealD2>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {stats.map((s, i) => (
            <RevealD2 key={s.k} delay={i * 0.05}>
              <div className="flex items-baseline justify-between border border-d2-line bg-d2-panelLift px-4 py-4 sm:flex-col sm:gap-1 sm:py-5">
                <span className="font-d2mono text-[0.6rem] uppercase tracking-[0.25em] text-zinc-500">{s.k}</span>
                <span className="text-lg font-semibold text-d2-emeraldGlow sm:text-xl">{s.v}</span>
              </div>
            </RevealD2>
          ))}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-8">
          <RevealD2 className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-d2-line bg-d2-void sm:aspect-[3/4]">
              <Image
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=82"
                alt="Modern laboratuvar ve bilim ortamı"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-d2-void via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 font-d2mono text-[0.6rem] uppercase tracking-wider text-zinc-300">
                Ar-Ge disiplini ve doğaya saygılı biyoteknoloji
              </p>
            </div>
          </RevealD2>

          <div className="flex flex-col justify-center space-y-6 lg:col-span-7">
            <RevealD2 delay={0.06}>
              <blockquote className="border-l-2 border-d2-emerald pl-5 text-lg font-medium leading-snug text-zinc-200 sm:text-xl">
                Genetik müdahale içermeyen, %100 doğal içerikli çözümlerle toprak ve suyun iyileşmesine katkı.
              </blockquote>
            </RevealD2>
            <RevealD2 delay={0.1} className="space-y-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
              <p>
                <strong className="text-zinc-200">Egem Doğal ve Biyoteknoloji Tarım Ürünleri</strong>, Japonya
                merkezli <strong className="text-zinc-200">Sanko Sangyo Co. Ltd.</strong> ürünlerinin Türkiye&apos;deki
                üretim ve dağıtımını üstlenen kurumsal yapıdır. SAION EM ürün gamı, etkin mikroorganizma
                teknolojisini tarımsal üretim, hayvancılık ve çevresel uygulamalarla buluşturur.
              </p>
              <p>
                Misyonumuz; <strong className="text-zinc-200">genetik müdahale içermeyen</strong>,{" "}
                <strong className="text-zinc-200">%100 doğal</strong> içerikli çözümlerle toprak ve suyun
                iyileşmesine, hayvan refahına ve sürdürülebilir verime katkı sağlamaktır.
              </p>
            </RevealD2>
            <RevealD2 delay={0.14}>
              <div className="rounded-sm border border-d2-emerald/25 bg-d2-panelLift/80 p-5 sm:p-6">
                <p className="font-d2mono text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-d2-emeraldGlow">
                  Öne çıkan taahhüt
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                  Genetik modifikasyon yok · Doğal fermantasyon ve seçilmiş mikroorganizma suşları · Bilimsel
                  uygulama protokolleri ve saha desteği.
                </p>
              </div>
            </RevealD2>
          </div>
        </div>
      </div>
    </section>
  );
}
