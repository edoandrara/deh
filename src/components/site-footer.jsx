import Link from 'next/link';
import { ArrowUpRight, Mail, MessageCircle, Sparkles } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '@/lib/site-config';

const footerLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Kontak', href: '#kontak' }
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand-column">
            <Link href="#beranda" className="brand-lockup footer-brand">
              <span className="brand-mark"><Sparkles size={21} /></span>
              <span className="brand-copy"><strong>Toko Digital</strong><span>INDONESIA</span></span>
            </Link>
            <p>Partner solusi digital untuk mendukung operasional dan pertumbuhan bisnis Anda.</p>
            <div className="footer-socials">
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><MessageCircle size={17} /></a>
              <a href={`mailto:${siteConfig.email}`} aria-label="Email"><Mail size={17} /></a>
              <a href={siteConfig.whatsappChannel} target="_blank" rel="noopener noreferrer" aria-label="Saluran WhatsApp"><ArrowUpRight size={17} /></a>
            </div>
          </div>

          <div className="footer-link-column">
            <h2>Navigasi</h2>
            {footerLinks.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
          </div>

          <div className="footer-link-column footer-contact-column">
            <h2>Hubungi Kami</h2>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">{siteConfig.phoneDisplay}</a>
            <a href={siteConfig.whatsappChannel} target="_blank" rel="noopener noreferrer">Saluran WhatsApp <ArrowUpRight size={14} /></a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Toko Digital Indonesia. Dilindungi Undang-Undang Hak Cipta & ITE yang berlaku, dll.</p>
          <a href="#beranda">Kembali ke atas <ArrowUpRight size={14} /></a>
        </div>
      </div>
    </footer>
  );
}
