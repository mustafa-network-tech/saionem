"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Droplets, Wind, FlaskConical, Microscope } from "lucide-react";
import { RevealD2 } from "@/components/demo2/Reveal";
import { cn } from "@/lib/cn";

const tabs = [
  {
    id: "fayda",
    label: "Faydaları",
    content: (
      <ul className="space-y-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
        <li>Toprak yapısının yumuşamasına ve havalanmasına katkı.</li>
        <li>Kök çevresi ve mikrobiyal aktivite için uygun ortam.</li>
        <li>Ağır metal ve tuz birikiminin azaltılmasına yönelik destekleyici yaklaşım.</li>
        <li>Organik madde dönüşümünü hızlandırmaya yardımcı mikrobiyal dengeler.</li>
      </ul>
    ),
  },
  {
    id: "uygulama",
    label: "Uygulama",
    content: (
      <ul className="space-y-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
        <li>Dozaj; ürün formülasyonuna, toprak tipine ve bitki dönemine göre belirlenir.</li>
        <li>En iyi sonuç için sabah veya akşam serinliğinde uygulama önerilir.</li>
        <li>Sulama sistemi veya yapraktan uygulama seçenekleri teknik ekiple netleştirilir.</li>
        <li>Depolama: serin, kuru ortam; direkt güneşten uzak tutunuz.</li>
      </ul>
    ),
  },
  {
    id: "bilim",
    label: "Bilimsel veri",
    content: (
      <ul className="space-y-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
        <li>Fotosentetik bakteri, laktik asit bakterileri ve maya suşlarından oluşan sinerjik karışım.</li>
        <li>Doğal fermantasyon ile üretim; GDO içermez.</li>
        <li>Sanko Sangyo Co. Ltd. kalite standartları ile uyumlu üretim disiplini.</li>
        <li>Saha geri bildirimleri ile sürekli iyileştirme yaklaşımı.</li>
      </ul>
    ),
  },
] as const;

const features = [
  { icon: Droplets, title: "Su & besin", text: "Bitki–toprak–su etkileşiminde denge." },
  { icon: Wind, title: "Havalandırma", text: "Kök bölgesi oksijen dolaşımına katkı." },
  { icon: FlaskConical, title: "Formül", text: "Seçilmiş EM suşları, doğal içerik." },
  { icon: Microscope, title: "İzlenebilirlik", text: "Uygulama ve parti takibi." },
];

export function Demo2ProductDetail() {
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("fayda");
  const [openAccordion, setOpenAccordion] = useState<(typeof tabs)[number]["id"] | null>("fayda");

  return (
    <section id="urun-ozellikleri" className="scroll-mt-28 bg-d2-void py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <RevealD2 className="max-w-2xl">
          <p className="font-d2mono text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-d2-emeraldGlow">
            Ürün özeti
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
            SAION EM teknik çerçeve
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
            Uzun metin yerine modüler özet: fayda, uygulama ve bilimsel temel tek ekranda okunabilir.
          </p>
        </RevealD2>

        <RevealD2 delay={0.06} className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="border border-d2-line bg-d2-panel px-4 py-5 sm:px-5"
            >
              <f.icon className="h-7 w-7 text-d2-emeraldGlow" strokeWidth={1.35} />
              <h3 className="mt-4 text-sm font-semibold text-zinc-100">{f.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-zinc-500 sm:text-sm">{f.text}</p>
            </div>
          ))}
        </RevealD2>

        {/* Mobil: akordeon — masaüstü: dikey sekme rayı */}
        <RevealD2 delay={0.1} className="mt-14 lg:hidden">
          <div className="divide-y divide-d2-line border border-d2-line">
            {tabs.map((t) => {
              const isOpen = openAccordion === t.id;
              return (
                <div key={t.id}>
                  <button
                    type="button"
                    onClick={() => setOpenAccordion(isOpen ? null : t.id)}
                    className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-d2mono text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-zinc-200">
                      {t.label}
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 shrink-0 text-d2-emeraldGlow transition-transform",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-d2-line bg-d2-panel px-4 py-5">{t.content}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </RevealD2>

        <RevealD2 delay={0.1} className="mt-14 hidden gap-0 border border-d2-line lg:grid lg:grid-cols-12">
          <div
            className="flex flex-col border-b border-d2-line lg:col-span-4 lg:border-b-0 lg:border-r"
            role="tablist"
            aria-label="Ürün sekmeleri"
          >
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={tab === t.id}
                onClick={() => setTab(t.id)}
                className={cn(
                  "min-h-[52px] border-b border-d2-line px-6 py-4 text-left font-d2mono text-[0.65rem] font-semibold uppercase tracking-[0.2em] transition last:border-b-0 lg:border-b lg:last:border-b",
                  tab === t.id
                    ? "bg-d2-panelLift text-d2-emeraldGlow"
                    : "text-zinc-500 hover:bg-d2-panelLift/50 hover:text-zinc-300"
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="bg-d2-panel px-6 py-8 lg:col-span-8" role="tabpanel">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.22 }}
              >
                {tabs.find((x) => x.id === tab)?.content}
              </motion.div>
            </AnimatePresence>
          </div>
        </RevealD2>
      </div>
    </section>
  );
}
