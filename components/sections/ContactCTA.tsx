"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function ContactCTA() {
  return (
    <section id="iletisim" className="relative overflow-hidden bg-charcoal-900 py-20 text-cream-50 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_20%,rgba(109,138,100,0.35),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_80%,rgba(79,111,71,0.25),transparent_45%)]"
        aria-hidden
      />
      <Container className="relative z-[1]">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-leaf-200">İletişim</p>
          <h2 className="font-display mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            Doğru biyoteknolojik çözüm için bizimle iletişime geçin
          </h2>
          <p className="mt-5 text-base leading-relaxed text-cream-100/80">
            Ürünlerimiz, uygulama alanlarımız ve iş birliği süreçleri hakkında detaylı bilgi alın.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              href="tel:+902120000000"
              variant="secondary"
              className="min-w-[200px] border-white/20 bg-white text-charcoal-900 hover:bg-cream-100"
            >
              İletişime Geç
            </Button>
            <Button
              href="mailto:info@saionemtr.com?subject=Teklif%20Talebi%20%E2%80%94%20SAION%20EMTR"
              variant="ghost"
              className="min-w-[200px] border-white/25 text-white hover:bg-white/10"
            >
              Teklif Al
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 grid gap-4 sm:grid-cols-3">
          <a
            href="tel:+902120000000"
            className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:border-leaf-400/40 hover:bg-white/10"
          >
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-leaf-200" strokeWidth={1.5} />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-leaf-200/90">Telefon</p>
              <p className="mt-1 text-sm font-medium text-white">+90 (212) 000 00 00</p>
            </div>
          </a>
          <a
            href="mailto:info@saionemtr.com"
            className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:border-leaf-400/40 hover:bg-white/10"
          >
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-leaf-200" strokeWidth={1.5} />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-leaf-200/90">E-posta</p>
              <p className="mt-1 text-sm font-medium text-white">info@saionemtr.com</p>
            </div>
          </a>
          <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-leaf-200" strokeWidth={1.5} />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-leaf-200/90">Adres</p>
              <p className="mt-1 text-sm font-medium text-white/90">
                Maslak, İstanbul <span className="block text-white/70">(örnek adres satırı)</span>
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
