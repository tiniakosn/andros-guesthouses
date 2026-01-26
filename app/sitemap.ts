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
    // Βάζουμε 'weekly' γιατί το περιεχόμενο (ειδικά το Diary) μπορεί να ανανεώνεται
    changeFrequency: 'weekly',
    // Η αρχική παίρνει 1, τα δωμάτια/diary 0.8, τα υπόλοιπα 0.5
    priority: route === '' ? 1 : (route.includes('/rooms/') || route.includes('/diary/') ? 0.8 : 0.5),
  }));
}