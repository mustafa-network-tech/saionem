import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#fdfcfa",
          100: "#f7f5f0",
          200: "#ede9e0",
        },
        leaf: {
          50: "#f4f7f2",
          100: "#e3ebe0",
          200: "#c5d4c0",
          300: "#9fb698",
          400: "#6d8a64",
          500: "#4f6f47",
          600: "#3d5a37",
          700: "#32482e",
          800: "#2a3b28",
          900: "#243224",
        },
        earth: {
          500: "#6b5344",
          700: "#3d3229",
          900: "#2a231c",
        },
        /* Demo 2 — kurumsal biyotek tema (emerald / charcoal) */
        d2: {
          emerald: "#10b981",
          emeraldDark: "#059669",
          emeraldGlow: "#34d399",
          charcoal: "#1f2937",
          charcoalMuted: "#374151",
          mint: "#ecfdf5",
          mintSoft: "#f0fdf4",
          white: "#ffffff",
          /* Demo 2 — koyu “teknik dosya” paleti (Demo 1’den görsel ayrım) */
          void: "#0a0e12",
          panel: "#111820",
          panelLift: "#161f2a",
          line: "#243044",
        },
        charcoal: {
          700: "#2c322b",
          800: "#1f2420",
          900: "#141714",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        d2mono: ["var(--font-d2-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(20, 23, 20, 0.08)",
        card: "0 8px 40px -12px rgba(20, 23, 20, 0.12)",
        lift: "0 20px 50px -20px rgba(47, 79, 41, 0.18)",
        "d2-glass": "0 8px 32px -8px rgba(16, 185, 129, 0.12), 0 0 0 1px rgba(255,255,255,0.5) inset",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.25rem",
        "4xl": "1.75rem",
      },
      animation: {
        "float-slow": "float 14s ease-in-out infinite",
        "float-delay": "float 18s ease-in-out 3s infinite",
        drift: "drift 22s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-12px) translateX(4px)" },
        },
        drift: {
          "0%": { transform: "translateX(-5%) rotate(0deg)" },
          "100%": { transform: "translateX(5%) rotate(3deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
