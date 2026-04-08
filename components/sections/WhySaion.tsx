"use client";

import { motion } from "framer-motion";
import { useHydratedReducedMotion } from "@/lib/useHydratedReducedMotion";
import { Sprout, Microscope, Headphones, LayoutGrid, ShieldCheck, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const items = [
  {
    title: "Doğal dönüşüm",
    text: "Toprak ve çevre dengesini destekleyen, kimyasal yükü azaltan biyoteknolojik yaklaşım.",
    icon: Sprout,
  },
  {
    title: "Bilimsel yaklaşım",
    text: "Ürün ve süreçlerde ölçülebilir etki; saha verisiyle desteklenen uygulama rehberliği.",
    icon: Microscope,
  },
  {
    title: "Güçlü teknik destek",
    text: "Doğru doz, zamanlama ve entegrasyon için uzman ekiple uçtan uca danışmanlık.",
    icon: Headphones,
  },
  {
    title: "Geniş uygulama alanı",
    text: "Tarımdan çevreye, hayvancılıktan insan sağlığına yönelik çözümlere kadar esnek portföy.",
    icon: LayoutGrid,
  },
  {
    title: "Sertifikalı güven",
    text: "Marka tescili ve kalite belgeleriyle kurumsal güvence; şeffaf iletişim.",
    icon: ShieldCheck,
  },
  {
    title: "Türkiye genelinde yaygın yapı",
    text: "Bölge müdürlükleri ve bayilerle yerinde erişim; hızlı lojistik ve süreklilik.",
    icon: MapPin,
  },
];

export function WhySaion() {
  const reduce = useHydratedReducedMotion();

  return (
    <section className="relative border-y border-leaf-200/50 bg-cream-100 py-20 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-leaf-700">Değer önerisi</p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-charcoal-900 sm:text-4xl">
            Neden SAION EMTR?
          </h2>
          <p className="mt-4 text-base text-charcoal-800/75">
            Güven, bilim ve sürdürülebilirlik — üçlüyü aynı çatıda birleştiriyoruz.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <motion.article
                whileHover={reduce ? undefined : { y: -6 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
                className="group h-full rounded-3xl border border-leaf-200/60 bg-white/90 p-6 shadow-soft transition-shadow hover:border-leaf-300 hover:shadow-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-leaf-100 to-leaf-200/80 text-leaf-800 shadow-sm ring-1 ring-leaf-200/50 transition-transform group-hover:scale-[1.04]">
                  <item.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-charcoal-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-800/75">{item.text}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
