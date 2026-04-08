"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";

export function BrandIntro() {
  return (
    <section id="hakkimizda" className="relative overflow-hidden bg-cream-50 py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 max-w-xl bg-[radial-gradient(circle_at_70%_40%,rgba(159,182,152,0.2),transparent_60%)]"
        aria-hidden
      />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/5] min-h-[260px] w-full overflow-hidden rounded-3xl border border-leaf-200/60 bg-leaf-50 shadow-card sm:aspect-[5/6] sm:min-h-0">
              <Image
                src="https://images.unsplash.com/photo-1623136299195-570a06bdae6b?auto=format&fit=crop&w=1200&q=85"
                alt="Sera içinde yoğun yeşil bitkiler — toprak ve üretim ortamı"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/35 via-transparent to-leaf-900/10" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/30 bg-white/15 p-4 backdrop-blur-md">
                <p className="text-sm font-medium text-white drop-shadow-sm">
                  Etkin mikroorganizmalar · Doğaya saygılı bilim
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-leaf-700">Hakkımızda</p>
              <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-charcoal-900 sm:text-4xl">
                Doğayı güçlendiren biyoteknoloji
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="mt-6 space-y-4 text-base leading-relaxed text-charcoal-800/80">
              <p>
                <strong className="font-semibold text-charcoal-900">SAION EMTR</strong>, etkin mikroorganizma
                tabanlı çözümlerin Türkiye&apos;de tanıtımı, pazarlaması ve projelendirilmesinde uzmanlaşmış
                kurumsal yapısıyla hizmet verir.
              </p>
              <p>
                Güçlü teknik kadromuz, bölge müdürlükleri ve bayi ağımız sayesinde ülke genelinde sürdürülebilir
                uygulamalar sunar; Japon teknolojisinin disiplinli AR-GE geleneğini doğal dönüşümle buluştururuz.
              </p>
              <ul className="grid gap-3 pt-2 sm:grid-cols-2">
                {[
                  "Kurumsal proje yönetimi",
                  "Saha destekli uygulama",
                  "Kalite ve izlenebilirlik",
                  "Uzun vadeli iş ortaklığı",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 rounded-2xl border border-leaf-200/60 bg-white/80 px-4 py-3 text-sm font-medium text-charcoal-800 shadow-sm"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-leaf-600" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
