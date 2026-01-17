import type { Metadata } from "next";
// ΑΛΛΑΓΗ: Βγάλαμε την Cormorant και βάλαμε την EB_Garamond που έχει ελληνικά
import { EB_Garamond, Outfit, Italiana } from "next/font/google"; 
import "./globals.css";

// Components που θέλουμε να φαίνονται ΠΑΝΤΟΥ
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import SmoothScrolling from "@/components/SmoothScrolling";

// 1. Ρύθμιση EB Garamond (Αντικαταστάτης της Cormorant για τέλεια Ελληνικά)
const ebGaramond = EB_Garamond({ 
  subsets: ["latin", "greek"], // <--- Τώρα αυτό δουλεύει κανονικά!
  variable: '--font-serif',    // Την ονομάζουμε γενικά serif
  weight: ["400", "500", "600", "700"], // Αφαιρέσαμε το 300 γιατί η EB Garamond ξεκινάει από 400 συνήθως
  display: 'swap',
});

// 2. Ρύθμιση Outfit (Κείμενα - Sans)
const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: '--font-outfit',
  display: 'swap',
});

// 3. Ρύθμιση Italiana (Τίτλοι Wow Effect - Μόνο Αγγλικά/Αριθμοί)
const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
  variable: '--font-italiana', 
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Andros Guesthouses | Authentic Hospitality",
  description: "Πολυτελείς πέτρινες κατοικίες στη Χώρα της Άνδρου.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el">
      {/* Χρησιμοποιούμε το ebGaramond.variable αντί για cormorant */}
      <body className={`${ebGaramond.variable} ${outfit.variable} ${italiana.variable} font-serif antialiased bg-stone-50`}>
        
        <SmoothScrolling />
        <Preloader />
        
        {/* Navbar (Μία φορά για όλα) */}
        <Navbar />

        {/* Περιεχόμενο σελίδων */}
        {children}

        {/* Footer (Μία φορά για όλα) */}
        <Footer />
        
      </body>
    </html>
  );
}