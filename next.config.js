const isDev = process.env.NODE_ENV !== "production";

/* Content-Security-Policy: hanya memuat skrip, gaya, gambar, dan font dari domain sendiri.
   Pengecualian: iframe Google Maps di halaman kontak. 'unsafe-eval' hanya untuk mode dev (React Refresh);
   'unsafe-inline' di style-src dibutuhkan framer-motion & next/font yang menulis style inline. */
const csp = [
  "default-src 'self'",
  `script-src 'self'${isDev ? " 'unsafe-eval' 'unsafe-inline'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  `connect-src 'self'${isDev ? " ws:" : ""}`,
  "frame-src https://www.google.com",
  "worker-src 'self' blob:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  // Situs tidak boleh dibingkai situs lain (mencegah clickjacking)
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Strict-Transport-Security", value: "max-age=63072000" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Jangan umumkan bahwa situs memakai Next.js (header X-Powered-By)
  poweredByHeader: false,
  images: {
    // Hanya WebP; AVIF tidak dioptimasi (lihat GHSA-2xp9-vwfh-vxw4) dan tidak ada gambar dari domain luar
    formats: ["image/webp"],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return [
      { source: "/sabun", destination: "/batanghari-river", permanent: false },
      { source: "/faq", destination: "/diocca#faq", permanent: false },
      { source: "/cara-pemesanan", destination: "/diocca#cara-pesan", permanent: false },
    ];
  },
};

module.exports = nextConfig;
