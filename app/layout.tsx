import type { Metadata } from "next";
import { Manrope } from "next/font/google"; 
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import SmoothScrolling from "@/components/SmoothScrolling";
import WhatsAppBtn from "@/components/WhatsAppBtn"; // <--- Import
import ShareBtn from "@/components/ShareBtn"; // <--- Import
import CookieConsent from "@/components/CookieConsent";

// Φορτώνουμε την Manrope
const manrope = Manrope({ 
  subsets: ["latin", "greek"],
  variable: '--font-sans',
  weight: ["300", "400", "500", "600", "700"], 
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://andros-guesthouses.vercel.app"), // Βάλε το τελικό σου domain (ή το vercel app)
  
  // --- GOOGLE SEO (ENGLISH) ---
  title: "Andros Guesthouses | Luxury Living & Authentic Hospitality",
  description: "Experience the hidden gems of Andros. Stay in our traditional guesthouses in Chora with panoramic views. Book your authentic Greek summer now.",
  keywords: ["Andros", "Guesthouses", "Accommodation", "Neimporio", "Chora", "Luxury Rooms", "Suites"],
  
  // --- SOCIAL MEDIA (Open Graph) ---
  openGraph: {
    title: "Andros Guesthouses | Your Escape to Andros",
    description: "Discover the authentic side of Greece. Panoramic views, traditional hospitality, and hidden beaches.",
    url: "https://androsguesthouses.gr",
    siteName: "Andros Guesthouses",
    images: [
      {
        url: "/opengraph-image-v3.jpg", // Η εικόνα που έβαλες στο public
        width: 1200,
        height: 630,
        alt: "Andros Guesthouses View",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  icons: {
    icon: "/favicon.ico",
  },

  // --- GOOGLE VERIFICATION CODE ---
  verification: {
    google: "-yRKvY_-TqJiBkK8AtG5_K8_732TAzNcNBRQlArJzyw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" className="scroll-smooth">
      <body className={`${manrope.variable} antialiased text-stone-900 bg-stone-50`}>
        
        <style>{`
          :root {
            --font-display: ${manrope.style.fontFamily};
            --font-serif: ${manrope.style.fontFamily};
            --font-sans: ${manrope.style.fontFamily};
          }

          /* Απαλό Gradient στο φόντο */
          body {
            font-family: var(--font-sans);
            background-color: #fafaf9; 
            background-image: 
              radial-gradient(at 0% 0%, rgba(132, 165, 157, 0.05) 0px, transparent 50%),
              radial-gradient(at 100% 100%, rgba(168, 162, 158, 0.1) 0px, transparent 50%);
            background-attachment: fixed;
          }

          /* Selection Color */
          ::selection {
            background-color: #4d7c0f; 
            color: white;
          }

          /* ΤΥΠΟΓΡΑΦΙΑ */
          h1, h2, h3, h4, h5, h6 {
            font-weight: 600 !important;
            letter-spacing: -0.02em !important; 
            color: #1c1917;
          }
          
          p {
            font-weight: 400;
            color: #57534e; 
            line-height: 1.8; 
          }

          /* SHADOWS */
          input, textarea, .bg-white {
            box-shadow: 0 4px 20px -5px rgba(0,0,0,0.05) !important;
            border: 1px solid rgba(0,0,0,0.05) !important;
          }
          
          input:focus, textarea:focus {
             border-color: #65a30d !important;
             box-shadow: 0 0 0 4px rgba(101, 163, 13, 0.1) !important;
          }

          button {
             font-weight: 700 !important;
             letter-spacing: 0.05em !important;
          }
        `}</style>

        <SmoothScrolling />
        <Preloader />
        
        {/* Αφού τα έχεις εδώ, θα φαίνονται ΠΑΝΤΟΥ */}
        <Navbar />
        {children}
        {/* ... Navbar, Children, Footer ... */}
        
        <Footer />

        <ShareBtn />
        <WhatsAppBtn />
        <CookieConsent />
        
        {/* --- ΤΟ ΜΥΣΤΙΚΟ ΟΠΛΟ SEO --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness", // Λέμε στη Google ότι είμαστε κατάλυμα
              "name": "Andros Guesthouses",
              "image": [
                "https://andros-guesthouses.vercel.app/images/hero.jpg"
              ],
              "@id": "https://andros-guesthouses.vercel.app",
              "url": "https://andros-guesthouses.vercel.app",
              "telephone": "+306936934390",
              "email": "androsguesthouses@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Νειμποριό",
                "addressLocality": "Χώρα Άνδρου",
                "postalCode": "84500",
                "addressCountry": "GR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 37.839, // Βάλε τις ακριβείς συντεταγμένες αν τις ξέρεις (από Google Maps)
                "longitude": 24.936
              },
              "priceRange": "$$"
            }),
          }}
        />

      </body>
    </html>
  );
}