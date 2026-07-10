import { Metadata } from "next";
import ExperienceClient from "./ExperienceClient";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}): Promise<Metadata> {
  const { lang } = await searchParams;
  const isEl = lang === "el";

  const url = isEl
    ? "https://www.androsguesthouses.gr/experience?lang=el"
    : "https://www.androsguesthouses.gr/experience";

  return {
    title: isEl
      ? "Εμπειρίες στην Άνδρο | Παραλίες, Πεζοπορία & Πολιτισμός"
      : "Things to Do in Andros | Beaches, Hiking & Culture Guide",
    description: isEl
      ? "Ανακαλύψτε την Άνδρο: κρυστάλλινες παραλίες, μονοπάτια πεζοπορίας, τοπική γαστρονομία και τον αρχοντικό πολιτισμό της Χώρας."
      : "Discover Andros: pristine beaches, hiking trails, local gastronomy, and the noble culture of Chora. Your complete island experience guide.",
    alternates: {
      canonical: url,
      languages: {
        el: "https://www.androsguesthouses.gr/experience?lang=el",
        en: "https://www.androsguesthouses.gr/experience",
      },
    },
    openGraph: {
      title: isEl
        ? "Εμπειρίες στην Άνδρο | Andros Guesthouses"
        : "Things to Do in Andros | Andros Guesthouses",
      description: isEl
        ? "Παραλίες, μονοπάτια, πολιτισμός και γεύσεις στο νησί της Άνδρου."
        : "Beaches, trails, culture and flavors on the island of Andros.",
      url,
    },
  };
}

export default async function ExperiencePage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;
  const initialLang = lang === "el" ? "el" : "en";

  return <ExperienceClient initialLang={initialLang} />;
}
