import Link from "next/link";
import { Linkedin, Youtube, Instagram } from "lucide-react";
import { Container } from "@/components/ui/Container";

const quick = [
  { href: "/demo-2", label: "Demo 2 (alternatif tasarım)" },
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#urunler", label: "Ürünlerimiz" },
  { href: "#uygulama-alanlari", label: "Uygulama Alanları" },
  { href: "#memnuniyet", label: "Müşteri Memnuniyeti" },
  { href: "#sertifikalar", label: "Sertifikalar" },
  { href: "#blog", label: "Blog" },
  { href: "#iletisim", label: "İletişim" },
];

const social = [
  { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
  { href: "https://youtube.com", label: "YouTube", icon: Youtube },
  { href: "https://instagram.com", label: "Instagram", icon: Instagram },
];

export function Footer() {
  return (
    <footer className="border-t border-leaf-200/50 bg-cream-100">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-xl font-semibold tracking-tight text-charcoal-900">
              SAION <span className="text-leaf-700">EMTR</span>
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-charcoal-800/75">
              Biyoteknoloji ve etkin mikroorganizma çözümlerinde Türkiye distribütörü olarak; tarım, çevre ve yaşam
              bilimlerinde güvenilir dönüşüm ortağınızız.
            </p>
            <div className="mt-6 flex gap-3">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-leaf-200/70 bg-white text-charcoal-800 transition-colors hover:border-leaf-500 hover:text-leaf-800"
                >
                  <s.icon className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.6} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-leaf-700">Hızlı menü</p>
              <ul className="mt-4 space-y-2">
                {quick.map((q) => (
                  <li key={q.href}>
                    <Link
                      href={q.href}
                      className="text-sm font-medium text-charcoal-800/80 transition-colors hover:text-leaf-800"
                    >
                      {q.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-leaf-700">İletişim</p>
              <ul className="mt-4 space-y-3 text-sm text-charcoal-800/80">
                <li>Maslak, İstanbul</li>
                <li>
                  <a href="tel:+902120000000" className="hover:text-leaf-800">
                    +90 (212) 000 00 00
                  </a>
                </li>
                <li>
                  <a href="mailto:info@saionemtr.com" className="hover:text-leaf-800">
                    info@saionemtr.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <div className="border-t border-leaf-200/50 bg-cream-200/40 py-5">
        <Container>
          <p className="text-center text-xs text-charcoal-800/60">
            © {new Date().getFullYear()} SAION EMTR. Tüm hakları saklıdır.
          </p>
        </Container>
      </div>
    </footer>
  );
}
