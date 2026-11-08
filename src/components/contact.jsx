import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  MoveUpRight,
  RadioTower
} from 'lucide-react';
import SectionHeading from '@/components/section-heading';
import { getWhatsAppUrl, siteConfig } from '@/lib/site-config';

export default function Contact() {
  return (
    <section className="section contact-section" id="kontak">
      <div className="container">
        <div className="contact-panel">
          <div className="contact-decoration contact-decoration-one" />
          <div className="contact-decoration contact-decoration-two" />
          <div className="contact-copy">
            <span className="eyebrow eyebrow-light">MARI MULAI DISKUSI</span>
            <h2>Punya ide digital? <span>Mari wujudkan bersama.</span></h2>
            <p>
              Ceritakan kebutuhan website, sistem, bot, hosting, atau integrasi bisnis Anda. Kami
              siap membantu mencari solusi dan skema pengerjaan yang tepat.
            </p>
            <a
              className="button button-primary contact-main-cta"
              href={getWhatsAppUrl('Halo Toko Digital Indonesia, saya ingin konsultasi tentang kebutuhan digital bisnis saya.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} /> Hubungi via WhatsApp <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="contact-details">
            <div className="contact-details-heading">
              <span>INFORMASI RESMI</span>
              <i />
            </div>
            <a className="contact-detail-item" href={`mailto:${siteConfig.email}`}>
              <span className="contact-detail-icon"><Mail size={19} /></span>
              <span><small>Email</small><strong>{siteConfig.email}</strong></span>
              <MoveUpRight size={17} />
            </a>
            <a className="contact-detail-item" href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
              <span className="contact-detail-icon"><MessageCircle size={19} /></span>
              <span><small>Telepon & WhatsApp</small><strong>{siteConfig.phoneDisplay}</strong></span>
              <MoveUpRight size={17} />
            </a>
            <a className="contact-detail-item" href={siteConfig.whatsappChannel} target="_blank" rel="noopener noreferrer">
              <span className="contact-detail-icon"><RadioTower size={19} /></span>
              <span><small>Saluran WhatsApp</small><strong>Ikuti informasi terbaru kami</strong></span>
              <MoveUpRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
