import {
  Bot,
  Code2,
  CreditCard,
  Globe2,
  Server
} from 'lucide-react';

export const services = [
  {
    id: 'website-aplikasi',
    number: '01',
    icon: Code2,
    title: 'Website & Aplikasi Custom',
    price: 'Mulai Rp130.000',
    description:
      'Bangun kehadiran digital dan sistem kerja yang sesuai kebutuhan bisnis Anda.',
    features: [
      'Website company profile',
      'Toko online dan katalog produk',
      'Sistem kasir dan dashboard',
      'Aplikasi custom, dll.'
    ],
    accent: 'blue'
  },
  {
    id: 'bot-otomatisasi-ai',
    number: '02',
    icon: Bot,
    title: 'Otomatisasi Bot & AI',
    price: 'Mulai Rp80.000',
    description:
      'Otomatiskan aktivitas berulang agar respons dan operasional bisnis lebih efisien.',
    features: [
      'WhatsApp bot',
      'Telegram dan Discord bot',
      'Integrasi AI dan workflow',
      'Notifikasi otomatis, dll.'
    ],
    accent: 'violet'
  },
  {
    id: 'domain',
    number: '03',
    icon: Globe2,
    title: 'Penyedia Domain Resmi',
    price: 'Rp1.700 – Rp1.700.000',
    description:
      'Temukan nama domain yang tepat untuk identitas dan kredibilitas bisnis Anda.',
    features: [
      'Ekstensi .COM dan .ID',
      '.MY.ID, .XYZ, dll.',
      'Bantuan registrasi domain',
      'Pilihan sesuai kebutuhan'
    ],
    accent: 'cyan'
  },
  {
    id: 'hosting-pterodactyl',
    number: '04',
    icon: Server,
    title: 'Hosting & Panel Pterodactyl',
    price: 'Rp15.000/bulan pertama',
    description:
      'Hosting untuk menjalankan aplikasi dan layanan berbasis server dengan panel yang praktis.',
    features: [
      'Dukungan Node.js',
      'Panel Pterodactyl',
      'Performa tinggi',
      'Fleksibel untuk bot dan aplikasi, dll.'
    ],
    accent: 'emerald',
    note: 'Harga perkenalan untuk bulan pertama.'
  },
  {
    id: 'integrasi-qris',
    number: '05',
    icon: CreditCard,
    title: 'Integrasi Pembayaran QRIS',
    price: 'Konsultasikan kebutuhan',
    description:
      'Hubungkan proses pembayaran dengan sistem bisnis agar transaksi lebih praktis dan tercatat.',
    features: [
      'Integrasi QRIS dinamis',
      'Notifikasi pembayaran otomatis',
      'Pencatatan dan rekonsiliasi',
      'Otomatisasi pembayaran ke rekening sesuai penyedia, dll.'
    ],
    accent: 'orange'
  }
];
