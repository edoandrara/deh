import { ArrowUpRight, Check, Sparkles } from 'lucide-react';
import SectionHeading from '@/components/section-heading';
import { services } from '@/lib/services';
import { getWhatsAppUrl } from '@/lib/site-config';

export default function Services() {
  return (
    <section className="section services-section" id="layanan">
      <div className="container">
        <SectionHeading
          eyebrow="LAYANAN KAMI"
          title={<>Satu tempat untuk berbagai <span>kebutuhan digital.</span></>}
          description="Pilih layanan yang Anda butuhkan. Kami siap membantu mulai dari tahap perencanaan hingga solusi siap digunakan."
        />

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            const message = `Halo Toko Digital Indonesia, saya tertarik dengan layanan ${service.title}. Boleh minta informasi lebih lanjut?`;

            return (
              <article className={`service-card service-${service.accent}${index === 0 ? ' service-featured' : ''}`} key={service.id}>
                <div className="service-card-heading">
                  <span className="service-icon"><Icon size={23} strokeWidth={1.8} /></span>
                  <span className="service-number">{service.number}</span>
                </div>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-price-wrap">
                  <span className="service-price-label">INVESTASI LAYANAN</span>
                  <strong className="service-price">{service.price}</strong>
                  {service.note ? <small>{service.note}</small> : null}
                </div>
                <div className="service-divider" />
                <ul className="service-features">
                  {service.features.map((feature) => (
                    <li key={feature}><span><Check size={13} /></span>{feature}</li>
                  ))}
                </ul>
                <a
                  className="service-link"
                  href={getWhatsAppUrl(message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Konsultasi layanan ${service.title} melalui WhatsApp`}
                >
                  Konsultasi layanan <ArrowUpRight size={17} />
                </a>
              </article>
            );
          })}
        </div>

        <div className="services-note">
          <span><Sparkles size={18} /></span>
          <p>Harga awal dapat menyesuaikan fitur, spesifikasi, ekstensi, dan ruang lingkup pekerjaan. Hubungi kami untuk mendapatkan penawaran yang sesuai.</p>
        </div>
      </div>
    </section>
  );
}
