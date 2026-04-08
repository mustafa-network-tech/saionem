"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

const tabs = [
  {
    id: "etkileri",
    label: "Etkileri",
    points: [
      "Toprağın doğal dengesini destekler; mikrobiyal çeşitliliğe katkı sağlar.",
      "Organik madde dönüşümünü hızlandırarak verimliliği destekler.",
      "Kök çevresi sağlığını güçlendirerek bitki stresini azaltmaya yardımcı olur.",
      "Çevresel etki ayak izini düşüren süreçlere uyumludur.",
    ],
  },
  {
    id: "kullanimi",
    label: "Kullanımı",
    points: [
      "Saha koşullarına göre doz ve zamanlama planı ile uygulanır.",
      "Mevcut gübre ve sulama sistemleriyle entegre edilebilir.",
      "Depolama ve seyreltme talimatlarıyla güvenli kullanım sağlanır.",
      "Teknik ekip tarafından izlenen uygulama protokolleri sunulur.",
    ],
  },
  {
    id: "faydalari",
    label: "Faydaları",
    points: [
      "Verim ve kaliteyi destekleyen sürdürülebilir üretim yaklaşımı.",
      "Çevre dostu çözümlerle regülasyonlara uyumlu operasyon.",
      "Sağlıklı üretim süreçlerine katkı; tüketici güvenini güçlendirir.",
      "Uzun vadede maliyet optimizasyonu ve iş sürekliliği.",
    ],
  },
] as const;

export function ScientificBenefits() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("etkileri");
  const content = tabs.find((t) => t.id === active)!;

  return (
    <section className="bg-cream-50 py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-leaf-700">Bilimsel çerçeve</p>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-charcoal-900 sm:text-4xl">
              Etki · kullanım · fayda — tek bakışta
            </h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal-800/75">
              Uzun metin blokları yerine, karar vericilerin ihtiyaç duyduğu netlik: uygulanabilir bilgi, ölçülebilir
              hedef ve kurumsal güven.
            </p>
            <div className="mt-8 hidden rounded-3xl border border-leaf-200/60 bg-gradient-to-br from-leaf-50 to-cream-100 p-8 shadow-soft lg:block">
              <p className="font-display text-lg font-medium text-charcoal-900">
                &ldquo;Doğanın ritmiyle uyumlu biyoteknoloji, ölçülü hareket eder.&rdquo;
              </p>
              <p className="mt-4 text-sm text-charcoal-800/65">SAION EMTR · Kurumsal vizyon özeti</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              className="rounded-3xl border border-leaf-200/60 bg-white/95 p-2 shadow-card backdrop-blur-sm"
              role="tablist"
              aria-label="Bilimsel bölümler"
            >
              <div className="grid grid-cols-3 gap-1 rounded-2xl bg-cream-100/90 p-1">
                {tabs.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    role="tab"
                    aria-selected={active === t.id}
                    onClick={() => setActive(t.id)}
                    className={cn(
                      "relative rounded-xl px-2 py-3 text-center text-xs font-semibold transition-colors sm:text-sm",
                      active === t.id ? "text-charcoal-900" : "text-charcoal-800/55 hover:text-charcoal-800"
                    )}
                  >
                    {active === t.id && (
                      <motion.span
                        layoutId="tabPill"
                        className="absolute inset-0 rounded-xl bg-white shadow-soft ring-1 ring-leaf-200/60"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-[1]">{t.label}</span>
                  </button>
                ))}
              </div>

              <div className="px-4 pb-6 pt-5 sm:px-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={content.id}
                    role="tabpanel"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ul className="space-y-4">
                      {content.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 rounded-2xl border border-leaf-100 bg-cream-50/80 px-4 py-3 text-sm leading-relaxed text-charcoal-800/85"
                        >
                          <span
                            className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-leaf-500"
                            aria-hidden
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
