import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://andros-guesthouses.vercel.app'; 

  // Ορίζουμε όλες τις πραγματικές διαδρομές του site
  const routes = [
    '', // Αρχική
    '/rooms',
    '/experience',
    '/contact',
    // Δωμάτια (Direct Links)
    '/rooms/aegean-studio',
    '/rooms/garden-suite',
    '/rooms/grand-residence',
    // Diary Index
    '/el/diary',
    '/en/diary',
    // Diary Άρθρα
    '/el/diary/chora-and-wind',
    '/en/diary/chora-and-wind',
    '/el/diary/secret-beaches',
    '/en/diary/secret-beaches',
    '/el/diary/local-flavors',
    '/en/diary/local-flavors',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    // ΔΙΟΡΘΩΣΗ: Απλοποιήσαμε το logic για να πιάνει σωστά και το '/rooms' και το '/diary'
    priority: route === '' ? 1 : (route.includes('rooms') || route.includes('diary') ? 0.8 : 0.5),
  }));
}