import SiteHeader from '@/components/site-header';
import Hero from '@/components/hero';
import About from '@/components/about';
import Services from '@/components/services';
import Contact from '@/components/contact';
import SiteFooter from '@/components/site-footer';
import WhatsAppFloat from '@/components/whatsapp-float';
import { services } from '@/lib/services';
import { siteConfig, siteUrl } from '@/lib/site-config';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: siteConfig.name,
      url: siteUrl,
      email: siteConfig.email,
      telephone: `+${siteConfig.phone}`,
      logo: `${siteUrl}/og-image.png`,
      sameAs: [siteConfig.whatsappChannel],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: `+${siteConfig.phone}`,
          contactType: 'sales',
          availableLanguage: ['Indonesian']
        }
      ]
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: siteConfig.name,
      inLanguage: 'id-ID',
      publisher: { '@id': `${siteUrl}/#organization` }
    },
    {
      '@type': 'ItemList',
      name: 'Layanan Toko Digital Indonesia',
      itemListElement: services.map((service, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
          provider: { '@id': `${siteUrl}/#organization` },
          areaServed: 'ID'
        }
      }))
    }
  ]
};

export default function HomePage() {
  const safeStructuredData = JSON.stringify(structuredData).replace(/</g, '\\u003c');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeStructuredData }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
