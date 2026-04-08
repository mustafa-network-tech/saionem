"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Menü / modal sonrası sayfa değişiminde takılı kalan body overflow kilidini kaldırır */
export function BodyScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = "";
  }, [pathname]);

  return null;
}
