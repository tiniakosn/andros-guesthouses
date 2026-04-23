import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.androsguesthouses.gr';

  const routes = [
    '',
    '/experience',
    '/contact',
    '/rooms/aegean-studio',
    '/rooms/garden-suite',
    '/rooms/grand-residence',
  ];

  const diarySlugs = [
    'athens-to-andros-guide',
    'andros-routes-guide',
    'chora-and-wind',
    'secret-beaches',
    'local-flavors',
  ];

  const mainPages = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : route.includes('rooms') ? 0.9 : 0.8,
    alternates: {
      languages: {
        el: `${baseUrl}${route}?lang=el`,
        en: `${baseUrl}${route}`,
      },
    },
  }));

  const diaryPages = ['el', 'en'].flatMap((lang) => [
    {
      url: `${baseUrl}/${lang}/diary`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          el: `${baseUrl}/el/diary`,
          en: `${baseUrl}/en/diary`,
        },
      },
    },
    ...diarySlugs.map((slug) => ({
      url: `${baseUrl}/${lang}/diary/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: {
        languages: {
          el: `${baseUrl}/el/diary/${slug}`,
          en: `${baseUrl}/en/diary/${slug}`,
        },
      },
    })),
  ]);

  return [...mainPages, ...diaryPages];
}