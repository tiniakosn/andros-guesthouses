/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  
  // ΤΟ ΚΛΕΙΔΙ ΓΙΑ ΤΑ 50KiB: Αυτόματη βελτιστοποίηση των βιβλιοθηκών
  experimental: {
    optimizePackageImports: ['framer-motion', 'react-icons', 'lucide-react'],
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    formats: ['image/avif', 'image/webp'],
    // Δημιουργία πιο αποδοτικών μεγεθών για κινητά
    deviceSizes: [480, 640, 750, 828, 1080, 1200, 1920],
  },

  env: {
    GOOGLE_GENERATIVE_AI_API_KEY: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
  },

  async redirects() {
    return [
      {
        source: '/',
        has: [{ type: 'query', key: 'page_id', value: '309' }],
        destination: '/about',
        permanent: true,
      },
      {
        source: '/',
        has: [{ type: 'query', key: 'page_id', value: '386' }],
        destination: '/', 
        permanent: true,
      },
      {
        source: '/',
        has: [{ type: 'query', key: 'page_id', value: '793' }],
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/',
        has: [{ type: 'query', key: 'page_id', value: '842' }],
        destination: '/booking', 
        permanent: true,
      },
    ]
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live https://*.google.com https://*.gstatic.com https://www.clarity.ms https://*.clarity.ms; script-src-elem 'self' 'unsafe-inline' https://*.google.com https://www.clarity.ms https://*.clarity.ms; img-src 'self' data: https: https://*.clarity.ms; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://*.clarity.ms; font-src 'self' data: https://fonts.gstatic.com; frame-src 'self' https://www.google.com https://*.google.com; connect-src 'self' https://*.clarity.ms https://*.google-analytics.com https://api.emailjs.com; frame-ancestors 'none'; object-src 'none';",
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig;