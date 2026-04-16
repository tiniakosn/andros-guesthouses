import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.androsguesthouses.gr';

  // Ορίζουμε τις βασικές διαδρομές
  const routes = [
    '', // Home
    '/experience', 
    '/contact', 
    '/rooms/aegean-studio',
    '/rooms/garden-suite',
    '/rooms/grand-residence',
  ];

  // Ορίζουμε τα άρθρα του Diary (Ελληνικά & Αγγλικά)
  const diarySlugs = ['chora-and-wind', 'secret-beaches', 'local-flavors'];

  // Δημιουργία των entries για τις βασικές σελίδες
  const mainPages = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : (route.includes('rooms') ? 0.9 : 0.8),
  }));

  // Δημιουργία entries για το Diary (EL & EN)
  const diaryPages = ['el', 'en'].flatMap((lang) => [
    {
      url: `${baseUrl}/${lang}/diary`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    ...diarySlugs.map((slug) => ({
      url: `${baseUrl}/${lang}/diary/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  ]);

  return [...mainPages, ...diaryPages];
}