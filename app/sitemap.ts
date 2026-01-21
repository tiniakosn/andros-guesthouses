import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // ΠΡΟΣΟΧΗ: Βάλε εδώ το αληθινό σου domain (π.χ. https://andros-guesthouses.gr)
  const baseUrl = 'https://andros-guesthouses.vercel.app'; 

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/#rooms`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/experience`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];
}