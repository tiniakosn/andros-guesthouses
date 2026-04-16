import type { Metadata } from "next";
import { Manrope } from "next/font/google"; 
import "./globals.css";
import Script from 'next/script';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppBtn from "@/components/WhatsAppBtn";
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
  metadataBase: new URL("https://www.androsguesthouses.gr"),
  
  // SRE SEO Upgrade: Προσθήκη "Official Site" και "Best Rates" για αύξηση του CTR
  title: {
    default: "Andros Guesthouses | Boutique Stay in Chora | Official Site",
    template: "%s | Andros Guesthouses"
  },
  description: "Experience authentic luxury at Andros Guesthouses in Chora. Premium sea view suites near Nimborio beach. Book direct for the best rates and exclusive offers.",
  
  keywords: [
    'andros accommodation', 
    'boutique hotel andros',
    'rooms chora andros',
    'sea view apartments andros',
    'διαμονή άνδρος χώρα', 
    'ενοικιαζόμενα δωμάτια άνδρος χώρα', 
    'δωμάτια άνδρος', 
    'andros guesthouses',
    'andros suites',
    'best hotels in andros'
  ],

  alternates: {
    canonical: "https://www.androsguesthouses.gr",
  },

  openGraph: {
    title: "Andros Guesthouses | Official Site | Sea View Suites in Chora",
    description: "Your private stone retreat in Andros. panoramic sea views, authentic hospitality, and the best rates guaranteed on our official website.",
    url: "https://www.androsguesthouses.gr",
    siteName: "Andros Guesthouses",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image-v3.jpg", 
        width: 1200,
        height: 630,
        alt: "Andros Guesthouses - Official Website",
      },
    ],
  },
  
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
    google: "-yRKvY_-TqJiBkK8AtG5_K8_732TAzNcNBRQlArJzyw", 
  },

  manifest: '/site.webmanifest',

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
        <link rel="preconnect" href="https://www.androsguesthouses.gr" />
        <link rel="dns-prefetch" href="https://www.androsguesthouses.gr" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${manrope.variable} antialiased text-stone-900 bg-stone-50`}>
        <Navbar />
        {children}

        <SpeedInsights />
        <Analytics />
        <Footer />
        <WhatsAppBtn />
        <CookieConsent />
        
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            setTimeout(() => {
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "v6wxwu35gn");
            }, 4000);
          `}
        </Script>

        {/* Διορθωμένο Schema: GuestHouse Type με Amenities */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GuestHouse",
              "name": "Andros Guesthouses",
              "alternateName": "Ενοικιαζόμενα Δωμάτια Άνδρος - Andros Guesthouses",
              "image": "https://www.androsguesthouses.gr/opengraph-image-v3.jpg",
              "@id": "https://www.androsguesthouses.gr",
              "url": "https://www.androsguesthouses.gr",
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
              "priceRange": "€€",
              "description": "Authentic stone-built guesthouse in Chora, Andros. Features panoramic sea views and premium rooms near the beach.",
              "amenityFeature": [
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Sea View",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Free Wi-Fi",
                  "value": true
                }
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}