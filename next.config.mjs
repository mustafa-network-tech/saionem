/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    /* Mobil / bazı ağlarda görsel optimizasyon proxy’si kırılabiliyor; doğrudan kaynak URL kullan */
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
