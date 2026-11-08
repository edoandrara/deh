export const siteConfig = {
  name: 'Toko Digital Indonesia',
  shortName: 'TDI',
  email: 'edopratamadigital@gmail.com',
  phone: '6285178906681',
  phoneDisplay: '+62 851-7890-6681',
  whatsappChannel: 'https://whatsapp.com/channel/0029Vb9aZQ1A2pL3yio2N42B',
  description:
    'Solusi digital untuk membantu bisnis berkembang. Layanan pembuatan website dan aplikasi custom, bot dan AI, domain, hosting Pterodactyl, hingga integrasi pembayaran QRIS.',
  defaultMessage:
    'Halo Toko Digital Indonesia, saya ingin konsultasi mengenai layanan digital.'
};

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const siteUrl =
  configuredSiteUrl && /^https?:\/\//i.test(configuredSiteUrl)
    ? configuredSiteUrl.replace(/\/+$/, '')
    : 'https://tokodigitalindonesia.vercel.app';

export function getWhatsAppUrl(message = siteConfig.defaultMessage) {
  return `https://wa.me/${siteConfig.phone}?text=${encodeURIComponent(message)}`;
}
