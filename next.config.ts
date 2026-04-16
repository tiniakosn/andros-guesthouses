/** @type {import('next').NextConfig} */
const nextConfig = {
  // SRE FIX: Αφαιρέθηκε το swcMinify για να φύγει το warning στο Next 16
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  
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
    deviceSizes: [480, 640, 750, 828, 1080, 1200, 1920],
  },

  env: {
    GOOGLE_GENERATIVE_AI_API_KEY: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
  },

  async redirects() {
    return [
      // 1. FIX ΓΙΑ ΤΟ ?lang=el (Σταματάμε το 404 που είδες στο GSC)
      {
        source: '/',
        has: [{ type: 'query', key: 'lang', value: 'el' }],
        destination: '/', 
        permanent: false,
      },
      // 2. ΣΥΓΚΕΚΡΙΜΕΝΑ IDs ΑΠΟ ΤΑ LOGS ΣΟΥ
      {
        source: '/',
        has: [{ type: 'query', key: 'page_id', value: '799' }],
        destination: '/experience',
        permanent: true,
      },
      {
        source: '/',
        has: [{ type: 'query', key: 'page_id', value: '795' }],
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/',
        has: [{ type: 'query', key: 'page_id', value: '309' }],
        destination: '/experience',
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
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/',
        has: [{ type: 'query', key: 'page_id', value: '386' }],
        destination: '/', 
        permanent: true,
      },
      // 3. CATCH-ALL ΓΙΑ ΟΠΟΙΟΔΗΠΟΤΕ ΑΛΛΟ ΠΑΛΙΟ ID (Anti-404 Shield)
      {
        source: '/',
        has: [{ type: 'query', key: 'page_id' }],
        destination: '/',
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