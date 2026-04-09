"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useHydratedReducedMotion } from "@/lib/useHydratedReducedMotion";

const VISIBLE_MS = 4000;

export function DemoCreditSplash() {
  const pathname = usePathname();
  const reduced = useHydratedReducedMotion();
  const [show, setShow] = useState(true);

  const isDemo2 = pathname?.startsWith("/demo-2") ?? false;

  useEffect(() => {
    const t = window.setTimeout(() => setShow(false), VISIBLE_MS);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[9999] flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0 : 0.35 }}
          aria-live="polite"
          role="status"
        >
          <motion.div
            initial={reduced ? false : { scale: 0.88, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={reduced ? { opacity: 0 } : { scale: 0.92, opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
            className={
              isDemo2
                ? "flex h-[min(220px,72vw)] w-[min(220px,72vw)] flex-col items-center justify-center rounded-full border-2 border-d2-emerald/45 bg-d2-panel/95 px-5 py-6 text-center shadow-[0_12px_40px_-8px_rgba(0,0,0,0.55)] ring-1 ring-d2-emerald/20 backdrop-blur-md sm:h-[240px] sm:w-[240px]"
                : "flex h-[min(220px,72vw)] w-[min(220px,72vw)] flex-col items-center justify-center rounded-full border-2 border-leaf-600/35 bg-cream-50/95 px-5 py-6 text-center shadow-lift ring-1 ring-leaf-200/50 backdrop-blur-md sm:h-[240px] sm:w-[240px]"
            }
          >
            <p
              className={
                isDemo2
                  ? "font-sans text-[0.68rem] leading-snug text-zinc-200 sm:text-[0.72rem]"
                  : "font-sans text-[0.68rem] leading-snug text-charcoal-800 sm:text-[0.72rem]"
              }
            >
              Bu sayfa{" "}
              <span className={isDemo2 ? "font-semibold text-d2-emeraldGlow" : "font-semibold text-leaf-800"}>
                MK Digital Systems
              </span>{" "}
              tarafından{" "}
              <span className={isDemo2 ? "font-semibold text-white" : "font-semibold text-charcoal-900"}>
                SAİONEMTR
              </span>{" "}
              için demo olarak hazırlanmıştır.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
