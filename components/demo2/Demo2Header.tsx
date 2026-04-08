"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

const kurumsal = [
  { href: "/demo-2#kurumsal", label: "Hakkımızda" },
  { href: "/demo-2#sertifikalar", label: "Sertifikalar" },
];

const urunMega = [
  { href: "/demo-2#kategoriler", label: "Tüm ürün hatları", desc: "Genel bakış" },
  { href: "/demo-2#kategoriler", label: "Tarım çözümleri", desc: "Toprak & verim" },
  { href: "/demo-2#kategoriler", label: "Hayvancılık", desc: "Probiyotik destek" },
  { href: "/demo-2#kategoriler", label: "Çevre", desc: "Atık & su" },
];

const mainLinks = [
  { href: "/demo-2#hero", label: "Anasayfa" },
  { href: "/demo-2#uygulamalar", label: "Uygulamalar" },
  { href: "/demo-2#blog", label: "Blog" },
  { href: "/demo-2#iletisim", label: "İletişim" },
];

export function Demo2Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const shell =
    scrolled || open
      ? "border-d2-line bg-d2-panel/95 shadow-lg shadow-black/40"
      : "border-white/10 bg-d2-panel/70";

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4 lg:px-6 lg:pt-6">
      <div
        className={`pointer-events-auto mx-auto flex max-w-6xl flex-col overflow-hidden rounded-md border transition-colors duration-300 backdrop-blur-xl lg:rounded-full lg:flex-row lg:items-center lg:px-2 ${shell}`}
      >
        <div className="flex h-14 items-center justify-between gap-3 px-4 sm:h-[3.75rem] sm:px-5 lg:h-12 lg:max-w-none lg:flex-1 lg:px-4">
          <Link
            href="/demo-2#hero"
            className="font-d2mono shrink-0 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-zinc-100"
          >
            <span className="text-zinc-400">SAION</span>
            <span className="text-d2-emeraldGlow">EM</span>
          </Link>

          <nav className="hidden items-center gap-0.5 font-d2mono lg:flex" aria-label="Demo 2 ana menü">
            <Link
              href="/demo-2#hero"
              className="rounded-full px-3 py-2 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-zinc-400 transition hover:bg-white/5 hover:text-d2-emeraldGlow"
            >
              Anasayfa
            </Link>

            <div className="group relative">
              <button
                type="button"
                className="flex items-center gap-1 rounded-full px-3 py-2 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-zinc-400 transition hover:bg-white/5 hover:text-d2-emeraldGlow"
              >
                Kurumsal
                <ChevronDown className="h-3 w-3 opacity-60" />
              </button>
              <div className="invisible absolute left-0 top-full z-50 mt-2 min-w-[220px] translate-y-1 rounded-md border border-d2-line bg-d2-panel p-1 opacity-0 shadow-2xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {kurumsal.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="block rounded px-3 py-2.5 text-xs font-sans font-medium tracking-normal text-zinc-300 hover:bg-d2-panelLift hover:text-d2-emeraldGlow"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="group relative">
              <button
                type="button"
                className="flex items-center gap-1 rounded-full px-3 py-2 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-zinc-400 transition hover:bg-white/5 hover:text-d2-emeraldGlow"
              >
                Ürünlerimiz
                <ChevronDown className="h-3 w-3 opacity-60" />
              </button>
              <div className="invisible absolute left-1/2 top-full z-50 mt-2 w-[min(92vw,440px)] -translate-x-1/2 translate-y-1 rounded-md border border-d2-line bg-d2-panel p-3 opacity-0 shadow-2xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="grid gap-1 sm:grid-cols-2">
                  {urunMega.map((u) => (
                    <Link
                      key={u.label}
                      href={u.href}
                      className="rounded border border-transparent px-3 py-2.5 transition hover:border-d2-line hover:bg-d2-panelLift"
                    >
                      <span className="block text-xs font-semibold text-zinc-100">{u.label}</span>
                      <span className="mt-0.5 block font-d2mono text-[0.65rem] uppercase tracking-wider text-zinc-500">
                        {u.desc}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {mainLinks.slice(1).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full px-3 py-2 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-zinc-400 transition hover:bg-white/5 hover:text-d2-emeraldGlow"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/"
              className="ml-1 rounded-full border border-d2-line/80 px-3 py-2 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-zinc-300 transition hover:border-d2-emerald/50 hover:bg-white/5 hover:text-d2-emeraldGlow"
            >
              Demo 1
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="inline-flex rounded-sm border border-d2-line px-2.5 py-1.5 font-d2mono text-[0.6rem] font-medium uppercase tracking-wider text-zinc-400 transition hover:border-d2-emerald/40 hover:text-d2-emeraldGlow lg:hidden"
            >
              Demo 1
            </Link>
            <Link
              href="/demo-2#iletisim"
              className="hidden rounded-sm bg-d2-emerald px-4 py-2 font-d2mono text-[0.65rem] font-semibold uppercase tracking-wider text-d2-void transition hover:bg-d2-emeraldDark sm:inline-flex"
            >
              İletişim
            </Link>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-sm border border-d2-line bg-d2-panelLift text-zinc-200 lg:hidden"
              aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-t border-d2-line bg-d2-panel lg:hidden"
            >
              <div className="max-h-[min(78vh,520px)] space-y-0.5 overflow-y-auto px-4 py-4 font-sans">
                <Link
                  href="/demo-2#hero"
                  onClick={() => setOpen(false)}
                  className="block rounded-sm px-3 py-3 text-sm font-medium text-zinc-200"
                >
                  Anasayfa
                </Link>
                <p className="px-3 pt-3 font-d2mono text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-d2-emeraldGlow">
                  Kurumsal
                </p>
                {kurumsal.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-sm px-3 py-2.5 pl-5 text-sm text-zinc-400"
                  >
                    {l.label}
                  </Link>
                ))}
                <p className="px-3 pt-3 font-d2mono text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-d2-emeraldGlow">
                  Ürünlerimiz
                </p>
                {urunMega.map((u) => (
                  <Link
                    key={u.label}
                    href={u.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-sm px-3 py-2.5 pl-5 text-sm text-zinc-400"
                  >
                    {u.label}
                  </Link>
                ))}
                {mainLinks.slice(1).map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-sm px-3 py-3 text-sm font-medium text-zinc-200"
                  >
                    {l.label}
                  </Link>
                ))}
                <div className="mt-4 flex flex-col gap-2 border-t border-d2-line pt-4">
                  <Link
                    href="/demo-2#iletisim"
                    onClick={() => setOpen(false)}
                    className="rounded-sm bg-d2-emerald py-3 text-center font-d2mono text-xs font-semibold uppercase tracking-wider text-d2-void"
                  >
                    İletişim
                  </Link>
                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="rounded-sm border border-d2-line py-3 text-center text-sm text-zinc-400"
                  >
                    Demo 1 sayfasına dön
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
