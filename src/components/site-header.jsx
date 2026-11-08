import Link from 'next/link';
import { ArrowUpRight, Menu, Sparkles, X } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/site-config';

const navigation = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Kontak', href: '#kontak' }
];

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <Sparkles size={21} strokeWidth={2.2} />
    </span>
  );
}

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="#beranda" className="brand-lockup" aria-label="Toko Digital Indonesia — Beranda">
          <BrandMark />
          <span className="brand-copy">
            <strong>Toko Digital</strong>
            <span>INDONESIA</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Navigasi utama">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          className="header-cta"
          href={getWhatsAppUrl('Halo Toko Digital Indonesia, saya ingin konsultasi.')}
          target="_blank"
          rel="noopener noreferrer"
        >
          Konsultasi <ArrowUpRight size={16} />
        </a>

        <details className="mobile-menu">
          <summary aria-label="Buka navigasi">
            <Menu className="menu-open-icon" size={23} />
            <X className="menu-close-icon" size={23} />
          </summary>
          <nav className="mobile-nav" aria-label="Navigasi mobile">
            {navigation.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
              Konsultasi via WhatsApp <ArrowUpRight size={16} />
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
