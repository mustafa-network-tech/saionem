import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-d2-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SAIONEM | Kurumsal Biyoteknoloji",
  description:
    "SAION EM (Etkin Mikroorganizmalar) — Sanko Sangyo Co. Ltd. (Japonya) Türkiye mümessili. Tarım, hayvancılık ve çevrede sürdürülebilir doğal çözümler.",
  openGraph: {
    title: "SAIONEM | 21. Yüzyıl Japon Teknolojisi",
    description:
      "Egem Doğal ve Biyoteknoloji Tarım Ürünleri ile %100 doğal, genetik müdahalesiz biyoteknolojik uygulamalar.",
  },
};

export default function Demo2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${inter.className} ${jetbrainsMono.variable} min-h-screen bg-d2-void text-zinc-200 antialiased selection:bg-d2-emerald/35 selection:text-white`}
    >
      {children}
    </div>
  );
}
