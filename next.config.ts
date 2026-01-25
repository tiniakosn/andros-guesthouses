/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Επιτρέπουμε εξωτερικές εικόνες από το Unsplash
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Δηλώνουμε επίσημα τις ποιότητες που χρησιμοποιούμε για να μην έχουμε warnings
    qualities: [65, 75], 
  },
  env: {
    GOOGLE_GENERATIVE_AI_API_KEY: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
  },
};

export default nextConfig;