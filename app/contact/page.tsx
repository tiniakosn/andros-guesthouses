import { type Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact & Booking | Andros Guesthouses",
  description: "Book your stay at Andros Guesthouses in Chora, Andros. Contact us directly for the best rates. Located in Neimporio, 5 minutes from the beach.",
  alternates: {
    canonical: "https://www.androsguesthouses.gr/contact",
    languages: {
      en: "https://www.androsguesthouses.gr/contact",
      el: "https://www.androsguesthouses.gr/contact?lang=el",
    },
  },
  openGraph: {
    title: "Contact & Booking | Andros Guesthouses",
    description: "Book your stay directly for the best rates. Boutique guesthouse in Chora, Andros.",
    url: "https://www.androsguesthouses.gr/contact",
    images: [{ url: "/opengraph-image-v3.jpg", width: 1200, height: 630, alt: "Andros Guesthouses Contact" }],
  },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;
  const initialLang = lang === "el" ? "el" : "en";
  return <ContactClient initialLang={initialLang} />;
}
