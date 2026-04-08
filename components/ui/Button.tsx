"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { motion } from "framer-motion";

type AnchorForMotion = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd"
>;

type Variant = "primary" | "secondary" | "ghost" | "accent";

const variants: Record<Variant, string> = {
  primary:
    "bg-leaf-700 text-white shadow-soft hover:bg-leaf-800 hover:shadow-lift border border-leaf-800/20",
  secondary:
    "bg-white/90 text-charcoal-800 border border-leaf-200/80 shadow-soft hover:border-leaf-400 hover:bg-white",
  ghost:
    "bg-transparent text-leaf-800 border border-transparent hover:bg-leaf-50 hover:border-leaf-200/60",
  accent:
    "bg-charcoal-900 text-cream-50 border-2 border-leaf-600 shadow-[0_8px_28px_-6px_rgba(20,23,20,0.45)] hover:bg-charcoal-900 hover:border-leaf-500 hover:text-white hover:shadow-[0_14px_40px_-8px_rgba(47,79,41,0.42)]",
};

export function Button({
  children,
  className,
  variant = "primary",
  href = "#iletisim",
  ...props
}: {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  href?: string;
} & AnchorForMotion) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: variant === "accent" ? -3 : -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf-600",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </motion.a>
  );
}
