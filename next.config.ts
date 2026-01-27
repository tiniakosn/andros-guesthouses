/** @type {import('next').NextConfig} */
const nextConfig = {
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
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            // Το αλλάζουμε σε SAMEORIGIN για να επιτρέπονται τα εσωτερικά frames αν χρειαστεί
            value: 'SAMEORIGIN',
          },
          {
            key: 'Content-Security-Policy',
            // Προσθήκη του 'script-src-elem' για πιο αυστηρό έλεγχο που ζητάει το Lighthouse
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live https://*.google.com https://*.gstatic.com https://www.clarity.ms https://*.clarity.ms; script-src-elem 'self' 'unsafe-inline' https://*.google.com https://www.clarity.ms https://*.clarity.ms; img-src 'self' data: https: https://*.clarity.ms; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; frame-src 'self' https://www.google.com https://*.google.com; connect-src 'self' https://*.clarity.ms https://*.google-analytics.com; frame-ancestors 'none'; object-src 'none';",
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