import {
  ArrowUpRight,
  Blocks,
  HeartHandshake,
  Lightbulb,
  Workflow
} from 'lucide-react';
import SectionHeading from '@/components/section-heading';
import { getWhatsAppUrl } from '@/lib/site-config';

const values = [
  {
    icon: Lightbulb,
    title: 'Solusi sesuai kebutuhan',
    description: 'Tidak harus seragam. Rekomendasi dan pengerjaan disesuaikan dengan tujuan bisnis Anda.'
  },
  {
    icon: Workflow,
    title: 'Praktis dan terintegrasi',
    description: 'Website, sistem, bot, hosting, dan layanan digital lain dapat dirancang saling terhubung.'
  },
  {
    icon: HeartHandshake,
    title: 'Komunikasi yang dekat',
    description: 'Diskusikan kebutuhan, ruang lingkup, dan anggaran secara terbuka sebelum memulai.'
  }
];

export default function About() {
  return (
    <section className="section about-section" id="tentang">
      <div className="container">
        <div className="about-layout">
          <div className="about-main-copy">
            <span className="eyebrow">TENTANG KAMI</span>
            <h2>Teknologi yang tepat membuat pekerjaan terasa <span>lebih mudah.</span></h2>
            <p>
              Toko Digital Indonesia hadir sebagai penyedia solusi digital tepercaya untuk membantu kebutuhan
              operasional dan pengembangan bisnis. Kami menyediakan layanan mulai dari pembuatan
              website dan aplikasi custom, otomatisasi bot dan AI, domain, hosting, hingga integrasi
              pembayaran QRIS.
            </p>
            <p>
              Setiap bisnis punya tantangan yang berbeda. Karena itu, kami mengutamakan solusi yang
              fleksibel, fungsional, dan dapat dikembangkan seiring pertumbuhan usaha Anda.
            </p>
            <a
              href={getWhatsAppUrl('Halo, saya ingin mengenal layanan Toko Digital Indonesia lebih lanjut.')}
              className="text-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kenali solusi kami <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="about-visual-card">
            <div className="about-visual-top">
              <div className="about-visual-icon"><Blocks size={25} /></div>
              <span>YOUR BUSINESS, OUR DIGITAL SOLUTIONS</span>
            </div>
            <div className="about-visual-title">Dari ide kecil,<br /><strong>jadi langkah besar.</strong></div>
            <div className="about-orbit about-orbit-one" />
            <div className="about-orbit about-orbit-two" />
            <div className="about-visual-footer">
              <span><i /> Website</span>
              <span><i /> Automation</span>
              <span><i /> Infrastructure</span>
            </div>
            <div className="about-visual-stamp"><span>BUILD</span><strong>BETTER</strong><span>GO DIGITAL</span></div>
          </div>
        </div>

        <div className="value-grid">
          {values.map(({ icon: Icon, title, description }, index) => (
            <article className="value-card" key={title}>
              <div className="value-card-top">
                <span className="value-icon"><Icon size={21} /></span>
                <span className="value-number">0{index + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
