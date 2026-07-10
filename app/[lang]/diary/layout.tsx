import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isEl = lang === "el";

  return {
    title: isEl
      ? "Andros Diary | Οδηγός για Διαμονή, Παραλίες & Πεζοπορία"
      : "Andros Diary | Guide to Accommodation, Beaches & Hiking",
    description: isEl
      ? "Ο πλήρης οδηγός μας για την Άνδρο: μονοπάτια, παραλίες, γεύσεις και πρακτικές συμβουλές διαμονής στη Χώρα."
      : "Our complete Andros guide: hiking trails, beaches, local food, and practical tips for your stay in Chora.",
    alternates: {
      canonical: `https://www.androsguesthouses.gr/${lang}/diary`,
      languages: {
        el: "https://www.androsguesthouses.gr/el/diary",
        en: "https://www.androsguesthouses.gr/en/diary",
      },
    },
  };
}

export default function DiaryLayout({ children }: { children: React.ReactNode }) {
  return children;
}