/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/sabun", destination: "/batanghari-river", permanent: false },
      { source: "/faq", destination: "/diocca#faq", permanent: false },
      { source: "/cara-pemesanan", destination: "/diocca#cara-pesan", permanent: false },
    ];
  },
};

module.exports = nextConfig;
