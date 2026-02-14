import type { Metadata } from "next";
import { Manrope } from "next/font/google"; 
import "./globals.css";
import Script from 'next/script';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import ShareBtn from "@/components/ShareBtn";
import CookieConsent from "@/components/CookieConsent";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const manrope = Manrope({ 
  subsets: ["latin", "greek"],
  variable: '--font-sans',
  weight: ["300", "400", "500", "600", "700"], 
  display: 'swap',
});


export const metadata: Metadata = {
  // 1. ΕΝΗΜΕΡΩΣΗ: Αλλαγή στο επίσημο domain
  metadataBase: new URL("https://androsguesthouses.gr"),
  
  title: {
    default: "Andros Guesthouses | Luxury Apartments in Chora with Sea View",
    template: "%s | Andros Guesthouses"
  },
  description: "Stay at the best stone guesthouses in Chora, Andros. Walking distance to Neimporio beach, panoramic Aegean views, and authentic hospitality. Book your escape now.",
  
  openGraph: {
    title: "Andros Guesthouses | Dreamy Stay in Chora",
    description: "Your private stone retreat in Andros. Panoramic views, local tips, and authentic Greek hospitality just steps from the beach.",
    // 2. ΕΝΗΜΕΡΩΣΗ: Αλλαγή URL εδώ
    url: "https://androsguesthouses.gr",
    siteName: "Andros Guesthouses",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image-v3.jpg", 
        width: 1200,
        height: 630,
        alt: "Andros Guesthouses Panoramic View",
      },
    ],
  },
  
  // --- Τεχνικά (ΜΗΝ ΤΑ ΠΕΙΡΑΞΕΙΣ) ---
  icons: {
    icon: [
      { url: "/favicon-v4.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon-v4.png", sizes: "32x32" },
      { url: "/favicon-v4.png", sizes: "16x16" },
    ],
    apple: [
      { url: "/apple-touch-icon-v4.png", sizes: "180x180", type: "image/png" },
    ],
  },

  verification: {
    google: "-yRKvY_-TqJiBkK8AtG5_K8_732TAzNcNBRQlArJzyw", // Το κρατάμε όπως είναι!
  },

  manifest: '/site.webmanifest',

  // --- Εντολή για τη Google ---
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" className="scroll-smooth">
      <head>

        {/* 3. ΕΝΗΜΕΡΩΣΗ: Χειροκίνητα tags με το ΝΕΟ domain */}
        <meta property="og:image" content="https://androsguesthouses.gr/opengraph-image-v3.jpg" />
        <meta property="og:image:secure_url" content="https://androsguesthouses.gr/opengraph-image-v3.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </head>
      <body className={`${manrope.variable} antialiased text-stone-900 bg-stone-50`}>
        
        <style>{`
          :root {
            --font-display: ${manrope.style.fontFamily};
            --font-serif: ${manrope.style.fontFamily};
            --font-sans: ${manrope.style.fontFamily};
          }

          /* Η ΑΠΟΛΥΤΗ ΔΙΟΡΘΩΣΗ ΓΙΑ ΤΗ ΜΠΑΡΑ */
          html, body {
            overflow-x: hidden !important;
            max-width: 100% !important;
            position: relative;
            width: 100%;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: var(--font-sans);
            background-color: #fafaf9; 
            background-image: 
              radial-gradient(at 0% 0%, rgba(132, 165, 157, 0.05) 0px, transparent 50%),
              radial-gradient(at 100% 100%, rgba(168, 162, 158, 0.1) 0px, transparent 50%);
            background-attachment: fixed;
          }
          ::selection {
            background-color: #4d7c0f; 
            color: white;
          }

          h1, h2, h3, h4, h5, h6 {
            font-weight: 600 !important;
            letter-spacing: -0.02em !important; 
            color: #1c1917;
          }
          
          p {
            font-weight: 400;
            /* Από #57534e άλλαξέ το σε #44403c για καλύτερο contrast */
            color: #44403c; 
            line-height: 1.8; 
          }

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

        {/*<SmoothScrolling />*/}
        {/* <Preloader /> */}
        
        <Navbar />
        {children}

        <SpeedInsights />
        <Analytics />
        <Footer />

        <ShareBtn />
        <WhatsAppBtn />
        <CookieConsent />
        
        {/* Μεταφορά Clarity εδώ για να μην κολλάει το Performance */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            setTimeout(() => {
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "v6wxwu35gn");
            }, 4000); // Καθυστέρηση 4 δευτερολέπτων
          `}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              "name": "Andros Guesthouses",
              "image": [
                "https://androsguesthouses.gr/opengraph-image-v3.jpg" // ΔΙΟΡΘΩΘΗΚΕ
              ],
              "@id": "https://androsguesthouses.gr", // ΔΙΟΡΘΩΘΗΚΕ
              "url": "https://androsguesthouses.gr", // ΔΙΟΡΘΩΘΗΚΕ
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
                "latitude": 37.839, 
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