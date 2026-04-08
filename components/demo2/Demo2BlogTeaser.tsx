"use client";

import Link from "next/link";
import { RevealD2 } from "@/components/demo2/Reveal";

const posts = [
  {
    tag: "Tarım",
    title: "Toprak mikrobiyomu ve sürdürülebilir verim",
    excerpt: "Doğal dengenin korunması ve ürün kalitesi için biyoteknolojik yaklaşımlar.",
  },
  {
    tag: "Teknik",
    title: "Doğru doz ve zamanlama: saha notları",
    excerpt: "Uygulama protokollerinde dikkat edilmesi gereken temel adımlar.",
  },
];

export function Demo2BlogTeaser() {
  return (
    <section id="blog" className="scroll-mt-28 bg-d2-panel py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <RevealD2 className="flex flex-col gap-6 border-b border-d2-line pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-d2mono text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-d2-emeraldGlow">
              Blog
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Bilgi paylaşımı
            </h2>
          </div>
          <Link
            href="/demo-2#iletisim"
            className="font-d2mono text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-d2-emeraldGlow hover:underline"
          >
            Tüm içeriklere abone olun →
          </Link>
        </RevealD2>

        <ul className="mt-0 divide-y divide-d2-line">
          {posts.map((p, i) => (
            <li key={p.title} className="group py-8">
              <RevealD2 delay={i * 0.05}>
                <div className="grid gap-4 sm:grid-cols-12 sm:items-start sm:gap-8">
                  <div className="sm:col-span-3">
                    <span className="font-d2mono text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-zinc-500">
                      {p.tag}
                    </span>
                  </div>
                  <div className="sm:col-span-9">
                    <h3 className="text-lg font-semibold text-zinc-100 transition group-hover:text-d2-emeraldGlow sm:text-xl">
                      {p.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-500 sm:text-base">{p.excerpt}</p>
                  </div>
                </div>
              </RevealD2>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
