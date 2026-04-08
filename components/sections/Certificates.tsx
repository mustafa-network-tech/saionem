"use client";

import { motion } from "framer-motion";
import { useHydratedReducedMotion } from "@/lib/useHydratedReducedMotion";
import { Award, FileBadge, Building2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import {
  CertificateDemoKalite,
  CertificateDemoMarka,
  CertificateDemoUygunluk,
} from "@/components/certificates/CertificateDemoArt";

const cards = [
  {
    title: "Marka tescili",
    text: "Tescilli marka kimliği ile kurumsal güvence ve pazar ayırt ediciliği.",
    icon: Award,
    Art: CertificateDemoMarka,
  },
  {
    title: "Üretim / kalite belgeleri",
    text: "Üretim standartlarına uygunluk ve izlenebilir kalite süreçleri.",
    icon: FileBadge,
    Art: CertificateDemoKalite,
  },
  {
    title: "Güvenilir kurumsal yapı",
    text: "Şeffaf iletişim, sözleşme disiplini ve uzun vadeli iş ortaklığı.",
    icon: Building2,
    Art: CertificateDemoUygunluk,
  },
];

export function Certificates() {
  const reduce = useHydratedReducedMotion();

  return (
    <section id="sertifikalar" className="border-y border-leaf-200/50 bg-cream-100 py-20 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-leaf-700">Güvence</p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-charcoal-900 sm:text-4xl">
            Sertifikalar ve Güvence
          </h2>
          <p className="mt-4 text-base text-charcoal-800/75">
            Belgelerimiz, müşterilerimize ve iş ortaklarımıza kurumsal ciddiyetimizin görünür kanıtıdır.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <motion.div
                whileHover={reduce ? undefined : { y: -5, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="relative h-full overflow-hidden rounded-3xl border border-leaf-200/60 bg-white p-6 shadow-soft sm:p-8"
              >
                <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-leaf-100/80 blur-2xl" />
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-leaf-800 text-white shadow-lift">
                  <c.icon className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <h3 className="font-display mt-6 text-xl font-semibold text-charcoal-900">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-800/75">{c.text}</p>
                <div
                  className="mt-6 overflow-hidden rounded-2xl border border-leaf-200/70 bg-cream-50 shadow-inner"
                  role="img"
                  aria-label={`${c.title} demo sertifika önizlemesi`}
                >
                  <div className="w-full [&_svg]:block">
                    <c.Art />
                  </div>
                </div>
                <p className="mt-3 text-center text-[0.65rem] font-semibold uppercase tracking-wider text-leaf-700/80">
                  Sunum amaçlı demo görsel
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
