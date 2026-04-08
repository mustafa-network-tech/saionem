"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { RevealD2 } from "@/components/demo2/Reveal";

const certs = [
  {
    id: "iso",
    title: "ISO 22716",
    subtitle: "Kozmetik GMP (örnek demo)",
    thumb:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80",
    full:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "marka",
    title: "Marka Tescil",
    subtitle: "Tescil belgesi önizlemesi",
    thumb:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80",
    full:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "kalite",
    title: "Kalite & Uygunluk",
    subtitle: "Kurumsal güvence",
    thumb:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
    full:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=85",
  },
];

export function Demo2Certificates() {
  const [openId, setOpenId] = useState<string | null>(null);

  const close = useCallback(() => setOpenId(null), []);

  useEffect(() => {
    if (!openId) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openId, close]);

  const active = certs.find((c) => c.id === openId);

  return (
    <section id="sertifikalar" className="scroll-mt-28 border-t border-d2-line bg-zinc-100 py-20 text-d2-charcoal sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <RevealD2 className="max-w-xl">
          <p className="font-d2mono text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-d2-emeraldDark">
            Güvence
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">Sertifikalar</h2>
          <p className="mt-4 text-sm leading-relaxed text-d2-charcoalMuted sm:text-base">
            Gerçek belgeleriniz hazır olduğunda yüksek çözünürlüklü PDF veya görsel ile değiştirilebilir.
            Şimdilik temsilî görseller; tıklayınca büyütülür.
          </p>
        </RevealD2>

        <RevealD2 delay={0.08} className="mt-12">
          <div className="grid gap-4 sm:grid-cols-3">
            {certs.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setOpenId(c.id)}
                className="group border-2 border-d2-charcoal/10 bg-white p-1 text-left transition hover:border-d2-emerald/50"
              >
                <div className="border border-d2-charcoal/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.thumb}
                    alt=""
                    className="aspect-[4/3] w-full object-cover grayscale transition duration-300 group-hover:grayscale-0"
                    loading="lazy"
                  />
                </div>
                <div className="px-2 py-3">
                  <p className="font-d2mono text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-d2-charcoalMuted">
                    {c.title}
                  </p>
                  <p className="mt-1 text-sm text-d2-charcoal">{c.subtitle}</p>
                  <span className="mt-2 inline-block font-d2mono text-[0.55rem] uppercase tracking-wider text-d2-emeraldDark">
                    Büyüt →
                  </span>
                </div>
              </button>
            ))}
          </div>
        </RevealD2>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-d2-void/90 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[90vh] max-w-4xl overflow-hidden border-2 border-d2-line bg-d2-panel shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={close}
                className="absolute right-3 top-3 z-[1] flex h-10 w-10 items-center justify-center border border-d2-line bg-d2-panelLift text-zinc-200 transition hover:border-d2-emerald/40"
                aria-label="Kapat"
              >
                <X className="h-5 w-5" />
              </button>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={active.full}
                alt={active.title}
                className="max-h-[85vh] w-full object-contain"
              />
              <div className="border-t border-d2-line px-4 py-3 sm:px-6">
                <p className="font-semibold text-zinc-100">{active.title}</p>
                <p className="text-sm text-zinc-500">{active.subtitle}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
