import {
  ArrowDown,
  ArrowRight,
  Bot,
  Check,
  Code2,
  Globe2,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Zap
} from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/site-config';

const quickServices = [
  { icon: Code2, label: 'Website & aplikasi' },
  { icon: Bot, label: 'Bot & otomatisasi AI' },
  { icon: Globe2, label: 'Domain & hosting' }
];

export default function Hero() {
  return (
    <section className="hero-section" id="beranda">
      <div className="hero-grid-pattern" aria-hidden="true" />
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <div className="eyebrow eyebrow-light">
            <span className="eyebrow-pulse" />
            PARTNER DIGITAL UNTUK BISNIS ANDA
          </div>
          <h1>
            Saatnya bisnis Anda <span>naik level</span> dengan solusi digital.
          </h1>
          <p className="hero-description">
            Dari website profesional hingga otomatisasi bisnis, Toko Digital Indonesia membantu
            mewujudkan kebutuhan teknologi Anda dalam satu tempat.
          </p>

          <div className="hero-actions">
            <a
              className="button button-primary"
              href={getWhatsAppUrl('Halo Toko Digital Indonesia, saya ingin konsultasi kebutuhan bisnis saya.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} /> Konsultasi Sekarang <ArrowRight size={17} />
            </a>
            <a className="button button-ghost" href="#layanan">
              Lihat Layanan <ArrowDown size={17} />
            </a>
          </div>

          <div className="hero-proof-row">
            <div className="proof-icon"><ShieldCheck size={19} /></div>
            <p>Solusi fleksibel, komunikasi transparan, dan dukungan yang mudah dijangkau.</p>
          </div>
        </div>

        <div className="hero-visual" aria-label="Ilustrasi layanan digital Toko Digital Indonesia">
          <div className="visual-glow" />
          <div className="dashboard-card">
            <div className="dashboard-topbar">
              <div className="window-dots"><i /><i /><i /></div>
              <span>digital.workspace</span>
              <span className="live-indicator"><i /> ACTIVE</span>
            </div>
            <div className="dashboard-content">
              <div className="dashboard-welcome">
                <div>
                  <span className="mini-label">YOUR DIGITAL PARTNER</span>
                  <h2>Semua kebutuhan,<br />satu solusi.</h2>
                </div>
                <div className="dashboard-spark"><Sparkles size={24} /></div>
              </div>

              <div className="dashboard-metrics">
                <div className="metric-card metric-main">
                  <span className="metric-icon"><Zap size={17} /></span>
                  <span className="metric-caption">Operasional lebih praktis</span>
                  <strong>Built for growth</strong>
                  <div className="metric-bars"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
                </div>
                <div className="metric-stack">
                  <div className="mini-service"><span className="mini-service-icon purple"><Code2 size={15} /></span><span><b>Web & Apps</b><small>Custom solution</small></span><Check size={15} /></div>
                  <div className="mini-service"><span className="mini-service-icon blue"><Bot size={15} /></span><span><b>Bot & AI</b><small>Smart automation</small></span><Check size={15} /></div>
                  <div className="mini-service"><span className="mini-service-icon green"><Globe2 size={15} /></span><span><b>Domain & Server</b><small>Online presence</small></span><Check size={15} /></div>
                </div>
              </div>

              <div className="dashboard-bottom">
                <div className="avatar-stack"><i>T</i><i>D</i><i>I</i></div>
                <span>One partner, more possibilities.</span>
                <span className="bottom-arrow"><ArrowRight size={16} /></span>
              </div>
            </div>
          </div>
          <div className="floating-tag floating-tag-top"><span><Zap size={15} /></span> Ide jadi solusi</div>
          <div className="floating-tag floating-tag-bottom"><span><ShieldCheck size={15} /></span> Siap berkembang</div>
          <div className="visual-decoration visual-decoration-one" />
          <div className="visual-decoration visual-decoration-two" />
        </div>
      </div>

      <div className="container hero-bottom-row">
        <span className="hero-bottom-label">SOLUSI YANG BISA ANDA ANDALKAN</span>
        <div className="hero-service-list">
          {quickServices.map(({ icon: Icon, label }) => (
            <span key={label}><Icon size={16} /> {label}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
