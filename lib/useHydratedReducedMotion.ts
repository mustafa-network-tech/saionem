"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * İlk istemci çiziminde sunucu ile aynı DOM üretmek için:
 * hidrasyon tamamlanana kadar "reduced" false sayılır.
 * Aksi halde useReducedMotion() SSR'da false, mobilde true olup sayfayı kırabilir.
 */
export function useHydratedReducedMotion(): boolean {
  const [hydrated, setHydrated] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    setHydrated(true);
  }, []);

  return hydrated && !!prefersReduced;
}
