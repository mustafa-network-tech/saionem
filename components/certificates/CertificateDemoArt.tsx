/** Sunum amaçlı demo sertifika görselleri — harici SVG dosyası / Image yerine DOM'da çizilir (mobil uyumlu). */

export function CertificateDemoMarka() {
  return (
    <svg
      viewBox="0 0 400 280"
      className="h-auto w-full"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="400" height="280" fill="#fdfcfa" />
      <rect x="12" y="12" width="376" height="256" rx="6" fill="none" stroke="#c5d4c0" strokeWidth="2" />
      <rect x="20" y="20" width="360" height="240" rx="4" fill="none" stroke="#4f6f47" strokeWidth="1" opacity="0.45" />
      <text
        x="200"
        y="48"
        textAnchor="middle"
        fill="#6d8a64"
        style={{ fontSize: "10px", fontFamily: "system-ui, sans-serif", letterSpacing: "0.25em" }}
      >
        DEMO BELGE
      </text>
      <text
        x="200"
        y="88"
        textAnchor="middle"
        fill="#243224"
        style={{ fontSize: "18px", fontFamily: "Georgia, serif", fontWeight: 600 }}
      >
        Marka Tescil
      </text>
      <text
        x="200"
        y="118"
        textAnchor="middle"
        fill="#2c322b"
        style={{ fontSize: "12px", fontFamily: "system-ui, sans-serif" }}
      >
        SAION EMTR
      </text>
      <circle cx="200" cy="168" r="36" fill="#e3ebe0" stroke="#4f6f47" strokeWidth="1.5" />
      <text
        x="200"
        y="174"
        textAnchor="middle"
        fill="#32482e"
        style={{ fontSize: "9px", fontFamily: "system-ui, sans-serif", letterSpacing: "0.15em" }}
      >
        ONAY
      </text>
      <line x1="60" y1="220" x2="160" y2="220" stroke="#c5d4c0" strokeWidth="1" />
      <line x1="240" y1="220" x2="340" y2="220" stroke="#c5d4c0" strokeWidth="1" />
      <text
        x="110"
        y="238"
        textAnchor="middle"
        fill="#6b5344"
        style={{ fontSize: "9px", fontFamily: "system-ui, sans-serif" }}
      >
        İmza
      </text>
      <text
        x="290"
        y="238"
        textAnchor="middle"
        fill="#6b5344"
        style={{ fontSize: "9px", fontFamily: "system-ui, sans-serif" }}
      >
        Mühür
      </text>
    </svg>
  );
}

export function CertificateDemoKalite() {
  return (
    <svg viewBox="0 0 400 280" className="h-auto w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="400" height="280" fill="#f7f5f0" />
      <rect x="14" y="14" width="372" height="252" rx="8" fill="#fff" stroke="#9fb698" strokeWidth="2" />
      <line x1="30" y1="100" x2="370" y2="100" stroke="#e3ebe0" strokeWidth="1" />
      <text
        x="200"
        y="44"
        textAnchor="middle"
        fill="#4f6f47"
        style={{ fontSize: "9px", fontFamily: "system-ui, sans-serif", letterSpacing: "0.3em" }}
      >
        DEMO SERTİFİKA
      </text>
      <text
        x="200"
        y="78"
        textAnchor="middle"
        fill="#1f2420"
        style={{ fontSize: "17px", fontFamily: "Georgia, serif", fontWeight: 600 }}
      >
        Kalite Yönetimi
      </text>
      <text
        x="200"
        y="128"
        textAnchor="middle"
        fill="#32482e"
        style={{ fontSize: "11px", fontFamily: "system-ui, sans-serif" }}
      >
        Üretim süreçleri · Örnek çerçeve
      </text>
      <rect x="70" y="148" width="260" height="72" rx="10" fill="#f4f7f2" stroke="#c5d4c0" />
      <text
        x="200"
        y="172"
        textAnchor="middle"
        fill="#2c322b"
        style={{ fontSize: "10px", fontFamily: "system-ui, sans-serif" }}
      >
        Sunum amaçlı demo görsel
      </text>
      <text
        x="200"
        y="192"
        textAnchor="middle"
        fill="#6d8a64"
        style={{ fontSize: "10px", fontFamily: "system-ui, sans-serif" }}
      >
        SAION EMTR
      </text>
      <rect x="150" y="232" width="100" height="28" rx="6" fill="none" stroke="#4f6f47" strokeWidth="1.5" />
      <text
        x="200"
        y="250"
        textAnchor="middle"
        fill="#4f6f47"
        style={{ fontSize: "9px", fontFamily: "system-ui, sans-serif", fontWeight: 600 }}
      >
        DEMO
      </text>
    </svg>
  );
}

export function CertificateDemoUygunluk() {
  return (
    <svg viewBox="0 0 400 280" className="h-auto w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="certBg" x1="0" y1="0" x2="400" y2="280" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fdfcfa" />
          <stop offset="1" stopColor="#e3ebe0" />
        </linearGradient>
      </defs>
      <rect width="400" height="280" fill="url(#certBg)" />
      <rect x="16" y="16" width="368" height="248" rx="10" fill="none" stroke="#6d8a64" strokeWidth="2" />
      <text
        x="200"
        y="56"
        textAnchor="middle"
        fill="#243224"
        style={{ fontSize: "20px", fontFamily: "Georgia, serif", fontWeight: 600 }}
      >
        Uygunluk Beyanı
      </text>
      <text
        x="200"
        y="82"
        textAnchor="middle"
        fill="#4f6f47"
        style={{ fontSize: "9px", fontFamily: "system-ui, sans-serif", letterSpacing: "0.2em" }}
      >
        DEMO · ÜRETİM
      </text>
      <text
        x="200"
        y="120"
        textAnchor="middle"
        fill="#2c322b"
        style={{ fontSize: "11px", fontFamily: "system-ui, sans-serif" }}
      >
        Biyoteknolojik çözümler (örnek)
      </text>
      <text
        x="200"
        y="144"
        textAnchor="middle"
        fill="#5a6358"
        style={{ fontSize: "10px", fontFamily: "system-ui, sans-serif" }}
      >
        İzlenebilir kalite · Kurumsal güvence
      </text>
      <polygon
        points="200,158 214,198 256,198 222,222 236,262 200,240 164,262 178,222 144,198 186,198"
        fill="#c5d4c0"
        stroke="#4f6f47"
        strokeWidth="1"
        opacity="0.9"
      />
      <text
        x="200"
        y="252"
        textAnchor="middle"
        fill="#6b5344"
        style={{ fontSize: "9px", fontFamily: "system-ui, sans-serif" }}
      >
        No: DEMO-2026-EMTR
      </text>
    </svg>
  );
}
