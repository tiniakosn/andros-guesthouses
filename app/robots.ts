import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://andros-guesthouses.vercel.app/sitemap.xml', // ΑΛΛΑΞΕ ΤΟ LINK ΕΔΩ
  };
}