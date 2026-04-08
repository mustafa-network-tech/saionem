"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const links = [
  { href: "#hero", label: "Anasayfa" },
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#urunler", label: "Ürünlerimiz" },
  { href: "#uygulama-alanlari", label: "Uygulama Alanları" },
  { href: "#memnuniyet", label: "Memnuniyet" },
  { href: "#sertifikalar", label: "Sertifikalar" },
  { href: "#blog", label: "Blog" },
  { href: "#iletisim", label: "İletişim" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,border-color] duration-500",
        scrolled
          ? "border-b border-leaf-200/50 bg-cream-50/92 shadow-soft backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container className="flex h-[4.25rem] items-center justify-between gap-3 sm:h-[4.5rem] sm:gap-4">
        <a
          href="#hero"
          className="min-w-0 shrink-0 font-display text-lg font-semibold tracking-tight text-charcoal-900 sm:text-xl"
        >
          SAION <span className="text-leaf-700">EMTR</span>
        </a>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-4 lg:flex xl:gap-7"
          aria-label="Ana menü"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-charcoal-800/75 transition-colors hover:text-leaf-800"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex xl:gap-3">
          <Link
            href="/demo-2"
            className="whitespace-nowrap rounded-full border-2 border-leaf-600/50 bg-leaf-50 px-3 py-2 text-sm font-bold text-leaf-900 shadow-sm transition-colors hover:border-leaf-700 hover:bg-leaf-100"
          >
            Demo 2
          </Link>
          <a
            href="#blog"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-leaf-200/70 bg-white/60 text-charcoal-700 transition-colors hover:border-leaf-400 hover:bg-white"
            aria-label="Arama"
          >
            <Search className="h-[1.05rem] w-[1.05rem]" strokeWidth={1.75} />
          </a>
          <Button href="#iletisim" variant="secondary" className="px-5 py-2.5 text-sm font-semibold">
            İletişime Geç
          </Button>
          <Button href="#iletisim" variant="accent" className="px-6 py-2.5 text-sm font-bold shadow-lg">
            Teklif Al
          </Button>
        </div>

        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <Link
            href="/demo-2"
            className="whitespace-nowrap rounded-full border-2 border-leaf-600/55 bg-white px-2.5 py-1.5 text-[0.7rem] font-extrabold uppercase tracking-wide text-leaf-900 shadow-sm sm:px-3 sm:text-xs"
          >
            Demo 2
          </Link>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-leaf-200/70 bg-white/70 text-charcoal-800"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-leaf-200/50 bg-cream-50/98 backdrop-blur-xl lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-charcoal-800 transition-colors hover:bg-leaf-50"
                >
                  {l.label}
                </motion.a>
              ))}
              <div className="mt-3 border-t border-leaf-200/60 pt-4">
                <Link
                  href="/demo-2"
                  onClick={() => setOpen(false)}
                  className="mb-3 flex w-full items-center justify-center rounded-2xl border-2 border-leaf-600/40 bg-leaf-50 py-3 text-sm font-bold text-leaf-900 transition-colors hover:border-leaf-700 hover:bg-leaf-100"
                >
                  Demo 2 — alternatif sayfa
                </Link>
                <div className="flex flex-col gap-2">
                <Button href="#iletisim" variant="accent" className="w-full py-3.5 text-base font-bold" onClick={() => setOpen(false)}>
                  Teklif Al
                </Button>
                <Button href="#iletisim" variant="secondary" className="w-full py-3" onClick={() => setOpen(false)}>
                  İletişime Geç
                </Button>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
