import type { Metadata, Viewport } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { BodyScrollReset } from "@/components/layout/BodyScrollReset";
import { DemoCreditSplash } from "@/components/layout/DemoCreditSplash";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SAION EMTR | Biyoteknoloji ve Doğal Dönüşüm",
  description:
    "21. yüzyıl Japon teknolojisi ile tarım, çevre ve yaşam alanlarında etkin mikroorganizma tabanlı biyoteknolojik çözümler.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f5f0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${dmSans.variable} ${fraunces.variable}`}>
      <body className="font-sans">
        <BodyScrollReset />
        <DemoCreditSplash />
        {children}
      </body>
    </html>
  );
}
