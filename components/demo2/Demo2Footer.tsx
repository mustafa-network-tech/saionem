"use client";

import Link from "next/link";

export function Demo2Footer() {
  return (
    <footer
      id="iletisim"
      className="scroll-mt-28 border-t border-d2-emerald/20 bg-d2-void py-16 text-zinc-300 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <p className="font-d2mono text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-zinc-500">
              <span className="text-zinc-300">SAION</span>
              <span className="text-d2-emeraldGlow">EM</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              Egem Doğal ve Biyoteknoloji Tarım Ürünleri — Sanko Sangyo Co. Ltd. (Japonya) Türkiye mümessili.
              Etkin mikroorganizma çözümleri.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:gap-16">
            <div>
              <p className="font-d2mono text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-d2-emeraldGlow">
                İletişim
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                <li>Örnek: İstanbul, Türkiye</li>
                <li>
                  <a href="tel:+902120000000" className="hover:text-d2-emeraldGlow">
                    +90 (212) 000 00 00
                  </a>
                </li>
                <li>
                  <a href="mailto:info@saionemtr.com" className="hover:text-d2-emeraldGlow">
                    info@saionemtr.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-d2mono text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-d2-emeraldGlow">
                Gezinme
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/demo-2#kurumsal" className="text-zinc-400 hover:text-d2-emeraldGlow">
                    Kurumsal
                  </Link>
                </li>
                <li>
                  <Link href="/demo-2#kategoriler" className="text-zinc-400 hover:text-d2-emeraldGlow">
                    Ürünler
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-zinc-400 hover:text-d2-emeraldGlow">
                    Demo 1 (önceki tasarım)
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-14 border-t border-d2-line pt-8 font-d2mono text-[0.55rem] uppercase tracking-[0.2em] text-zinc-600">
          © {new Date().getFullYear()} SAIONEM · Demo 2 — alternatif düzen. Metinler saionemtr.com içeriğinden
          uyarlanmıştır.
        </p>
      </div>
    </footer>
  );
}
