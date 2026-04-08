"use client";

import { RevealD2 } from "@/components/demo2/Reveal";

const items = [
  "Açık alan ve sera üretiminde toprak canlılığı",
  "Kompost ve organik atık yönetimi süreçleri",
  "Ahır ve kümes ortamlarında hijyen dengesi",
  "Gölet, arıtma ve koku kontrolü projeleri",
];

export function Demo2Applications() {
  return (
    <section id="uygulamalar" className="scroll-mt-28 border-t border-d2-line bg-d2-panel py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <RevealD2 className="lg:col-span-4 lg:sticky lg:top-28">
            <p className="font-d2mono text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-d2-emeraldGlow">
              Uygulamalar
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Saha deneyimi ile desteklenen kullanım
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-zinc-400 sm:text-base">
              Türkiye genelinde bayi ve bölge yapılanması ile ürünlerin doğru uygulanması için teknik eşlik
              sağlanır. Proje bazlı çözümler ve eğitim oturumları talebe göre planlanır.
            </p>
          </RevealD2>

          <RevealD2 delay={0.06} className="lg:col-span-7 lg:col-start-6">
            <div className="relative border-l border-d2-line pl-6 sm:pl-10">
              <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-d2-emerald via-d2-emerald/40 to-transparent" />
              <ol className="space-y-0">
                {items.map((t, i) => (
                  <li
                    key={t}
                    className="relative border-b border-d2-line py-6 last:border-b-0 sm:flex sm:gap-8 sm:py-8"
                  >
                    <span className="font-d2mono text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-d2-emeraldGlow sm:w-16 sm:shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-zinc-200 sm:mt-0 sm:text-base">
                      {t}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </RevealD2>
        </div>
      </div>
    </section>
  );
}
