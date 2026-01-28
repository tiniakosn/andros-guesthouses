import type { Metadata } from "next";
import { Manrope } from "next/font/google"; 
import "./globals.css";
import Script from 'next/script';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import SmoothScrolling from "@/components/SmoothScrolling";
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
  metadataBase: new URL("https://andros-guesthouses.vercel.app"),
  title: "Andros Guesthouses | Luxury Living & Authentic Hospitality",
  description: "Experience the hidden gems of Andros. Stay in our traditional guesthouses in Chora with panoramic views.",
  keywords: ["Andros", "Guesthouses", "Accommodation", "Neimporio", "Chora"],
  
  // 1. Ρύθμιση για το Facebook (Open Graph)
  openGraph: {
    title: "Andros Guesthouses | Your Escape to Andros",
    description: "Discover the authentic side of Greece. Panoramic views, traditional hospitality, and hidden beaches.",
    url: "https://andros-guesthouses.vercel.app",
    siteName: "Andros Guesthouses",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image-v3.jpg", // Διαβάζεται από το public/
        width: 1200,
        height: 630,
        alt: "Andros Guesthouses View",
      },
    ],
  },
  
  // 2. Ρύθμιση για το Favicon (Browser Tab)
  icons: {
    icon: [
      { url: "/favicon-v4.png", sizes: "32x32" },
      { url: "/favicon-v4.png", sizes: "16x16" },
    ],
    apple: [
      { url: "/apple-touch-icon-v4.png", sizes: "180x180", type: "image/png" },
    ],
  },

  verification: {
    google: "-yRKvY_-TqJiBkK8AtG5_K8_732TAzNcNBRQlArJzyw",
  },

  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" className="scroll-smooth">
      <head>

        <link rel="preload" as="image" href="/images/no5.5.webp" fetchPriority="high" />
        

        {/* Χειροκίνητα tags για να μην κάνει λάθος το Facebook */}
        <meta property="og:image" content="https://andros-guesthouses.vercel.app/opengraph-image-v3.jpg" />
        <meta property="og:image:secure_url" content="https://andros-guesthouses.vercel.app/opengraph-image-v3.jpg" />
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

        <SmoothScrolling />
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
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "v6wxwu35gn");
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
                "https://andros-guesthouses.vercel.app/opengraph-image-v3.jpg"
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