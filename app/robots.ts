import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/*?page_id=', '/*?lang=en', '/api/'],
    },
    sitemap: 'https://www.androsguesthouses.gr/sitemap.xml',
  };
}

