import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70dvh] flex-col items-center justify-center gap-6 bg-cream-50 px-6 text-center">
      <p className="font-display text-4xl font-semibold text-charcoal-900">404</p>
      <p className="max-w-md text-charcoal-800/80">Aradığınız sayfa bulunamadı.</p>
      <Link href="/" className="rounded-full bg-leaf-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-leaf-700">
        Ana sayfaya dön
      </Link>
    </main>
  );
}
