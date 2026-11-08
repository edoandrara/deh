import './globals.css';
import { siteConfig, siteUrl } from '@/lib/site-config';

const title = 'Toko Digital Indonesia | Solusi Digital untuk Bisnis';
const description = siteConfig.description;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s | Toko Digital Indonesia'
  },
  description,
  applicationName: siteConfig.name,
  keywords: [
    'Toko Digital Indonesia',
    'jasa pembuatan website',
    'website company profile',
    'pembuatan toko online',
    'aplikasi custom',
    'jasa bot WhatsApp',
    'Telegram bot',
    'Discord bot',
    'otomatisasi AI',
    'jual domain',
    'domain .COM',
    'domain .ID',
    'hosting Node.js',
    'hosting Pterodactyl',
    'integrasi QRIS'
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: 'technology',
  alternates: {
    canonical: '/'
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg'
  },
  manifest: '/site.webmanifest',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: siteUrl,
    siteName: siteConfig.name,
    title,
    description,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Toko Digital Indonesia — Solusi Digital untuk Bisnis'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#07172f'
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
