import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    // ΔΙΟΡΘΩΣΗ: Χρησιμοποιούμε το επίσημο domain με το www
    sitemap: 'https://www.androsguesthouses.gr/sitemap.xml',
  };
}