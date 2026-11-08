import { siteUrl } from '@/lib/site-config';

export default function sitemap() {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    }
  ];
}
