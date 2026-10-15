import { MessageCircle } from 'lucide-react'

/**
 * Fixed WhatsApp-style chat button at the bottom right.
 */
export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/971503526144"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="whatsapp-float"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  )
}
