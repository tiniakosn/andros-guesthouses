/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Επιτρέπουμε εξωτερικές εικόνες αν χρειαστούν
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Αντί για qualities, ορίζουμε τα formats που είναι πιο αποδοτικά
    formats: ['image/avif', 'image/webp'],
  },
  env: {
    GOOGLE_GENERATIVE_AI_API_KEY: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'none';",
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ]
  }
};

export default nextConfig;