/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  env: {
    GOOGLE_GENERATIVE_AI_API_KEY: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
  },

  // --- ΕΔΩ ΠΡΟΣΘΕΤΟΥΜΕ ΤΑ REDIRECTS ΓΙΑ ΤΟ SEO ---
  async redirects() {
    return [
      {
        // Παλιά σελίδα About (ID 309)
        source: '/',
        has: [{ type: 'query', key: 'page_id', value: '309' }],
        destination: '/about',
        permanent: true,
      },
      {
        // Παλιές πληροφορίες για την Άνδρο (ID 386)
        source: '/',
        has: [{ type: 'query', key: 'page_id', value: '386' }],
        destination: '/', 
        permanent: true,
      },
      {
        // Παλιά σελίδα Επικοινωνίας (ID 793)
        source: '/',
        has: [{ type: 'query', key: 'page_id', value: '793' }],
        destination: '/contact',
        permanent: true,
      },
      {
        // Παλιά φόρμα κρατήσεων (ID 842)
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
        ],
      },
    ]
  },
}

export default nextConfig