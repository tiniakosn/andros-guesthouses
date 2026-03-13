import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.androsguesthouses.gr';

  const routes = [
    '', // Η μία και μοναδική Αρχική σου
    '/experience', 
    '/contact', 
    
    // Δωμάτια
    '/rooms/aegean-studio',
    '/rooms/garden-suite',
    '/rooms/grand-residence',
    
    // Diary - Ελληνικά
    '/el/diary',
    '/el/diary/chora-and-wind',
    '/el/diary/secret-beaches',
    '/el/diary/local-flavors',
    
    // Diary - English
    '/en/diary',
    '/en/diary/chora-and-wind',
    '/en/diary/secret-beaches',
    '/en/diary/local-flavors',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : (route.includes('rooms') ? 0.9 : 0.7),
  }));
}