import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/site-config';

export default function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat dengan Toko Digital Indonesia melalui WhatsApp"
    >
      <MessageCircle size={23} />
      <span>Chat WhatsApp</span>
    </a>
  );
}
