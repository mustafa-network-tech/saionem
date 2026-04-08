"use client";

import { motion } from "framer-motion";
import { useHydratedReducedMotion } from "@/lib/useHydratedReducedMotion";
import { Quote, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const items = [
  {
    quote:
      "Toprak analizi sonrası önerilen uygulama ile kök gelişiminde gözle görülür fark oluştu. Teknik ekip süreci adım adım takip etti.",
    name: "Mehmet K.",
    role: "Organik sera işletmecisi · İzmir",
    rating: 5,
  },
  {
    quote:
      "Ahır ortamında koku ve yatak yönetiminde doğal çözüm arıyorduk. Protokole uyduk; hayvan refahı ve işletme düzeni açısından memnunuz.",
    name: "Ayşe T.",
    role: "Süt çiftliği yöneticisi · Konya",
    rating: 5,
  },
  {
    quote:
      "Kompost ve atık ayrıştırma hattında dengeyi kurmak zordu. Biyoteknolojik yaklaşım ve saha desteği beklentimizin üzerindeydi.",
    name: "Dr. Can Y.",
    role: "Çevre mühendisi · Ankara",
    rating: 5,
  },
  {
    quote:
      "Ürün eğitimi ve dozajlama netti. Tarımsal ilaç yükünü azaltma hedefimizle uyumlu, bilimsel referanslı bir iş birliği sundular.",
    name: "Burak S.",
    role: "Ziraat mühendisi · Adana",
    rating: 5,
  },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5" aria-hidden>
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" strokeWidth={0} />
      ))}
    </div>
  );
}

export function Testimonials() {
  const reduce = useHydratedReducedMotion();

  return (
    <section id="memnuniyet" className="relative overflow-hidden bg-gradient-to-b from-cream-50 to-cream-100 py-20 sm:py-24">
      <div
        className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-leaf-200/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-leaf-100/40 blur-3xl"
        aria-hidden
      />

      <Container className="relative z-[1]">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-leaf-700">Müşteri deneyimi</p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-charcoal-900 sm:text-4xl">
            Ürünü kullananların memnuniyeti
          </h2>
          <p className="mt-4 text-base text-charcoal-800/75">
            Saha geri bildirimleri ve uzun soluklu iş ortaklıklarımızdan seçilmiş örnekler — güveninizi pekiştirmek
            için şeffaf bir özet.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05}>
              <motion.article
                whileHover={reduce ? undefined : { y: -4 }}
                transition={{ type: "spring", stiffness: 320, damping: 24 }}
                className="flex h-full flex-col rounded-3xl border border-leaf-200/60 bg-white/95 p-6 shadow-soft sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <Quote className="h-9 w-9 shrink-0 text-leaf-300" strokeWidth={1.25} />
                  <Stars n={t.rating} />
                </div>
                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-charcoal-800/85 sm:text-[0.95rem]">
                  “{t.quote}”
                </blockquote>
                <footer className="mt-6 border-t border-leaf-100 pt-5">
                  <p className="font-semibold text-charcoal-900">{t.name}</p>
                  <p className="mt-1 text-xs text-charcoal-800/65 sm:text-sm">{t.role}</p>
                </footer>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-10 text-center">
          <p className="text-xs text-charcoal-800/55">
            Gösterilen yorumlar temsil niteliğindedir; gerçek müşteri logoları ve referansları talep üzerine
            paylaşılabilir.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
