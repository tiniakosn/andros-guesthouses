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

// ΕΔΩ ΕΒΑΛΑ ΤΑ EXTRA ΣΤΟΙΧΕΙΑ ΓΙΑ ΤΗ GOOGLE
export const metadata: Metadata = {
  // ... (τα υπόλοιπα: title, description, metadataBase κλπ μένουν όπως είναι)
  metadataBase: new URL("https://andros-guesthouses.vercel.app"), // Βεβαιώσου ότι έχεις το σωστό Link εδώ
  title: "Andros Guesthouses | Luxury Living",
  description: "Πολυτελείς κατοικίες και αυθεντική φιλοξενία στη Χώρα της Άνδρου.",
  keywords: ["Andros", "Guesthouses", "Accommodation", "Neimporio", "Rooms", "Suites"],
  
  openGraph: {
    title: "Andros Guesthouses | Luxury Living",
    description: "Ζήστε την αυθεντική φιλοξενία της Άνδρου. Πολυτελή δωμάτια στο Νειμποριό.",
    url: "https://andros-guesthouses.vercel.app",
    siteName: "Andros Guesthouses",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Andros Guesthouses View",
      },
    ],
    locale: "el_GR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },

  // --- ΕΔΩ ΜΠΑΙΝΕΙ Ο ΚΩΔΙΚΟΣ GOOGLE ΠΟΥ ΜΟΥ ΕΔΩΣΕΣ ---
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