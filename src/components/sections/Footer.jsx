import {
  Globe,
  AtSign,
  Camera,
  Clapperboard,
  MessageCircle,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react'
import Logo from '../common/Logo.jsx'
import { CONTACT, FOOTER_LINKS } from '../../data/content.js'

const SOCIALS = [
  { icon: Globe, label: 'Website', href: '#home' },
  { icon: AtSign, label: 'X / Twitter', href: 'https://twitter.com' },
  { icon: Camera, label: 'Instagram', href: 'https://instagram.com' },
  { icon: Clapperboard, label: 'YouTube', href: 'https://youtube.com' },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    href: 'https://wa.me/971503526144',
  },
]

/**
 * Site footer: brand blurb, quick links, services, contact info.
 */
export default function Footer() {
  return (
    <footer className="bg-forest-950 text-forest-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8 xl:px-8">
        {/* Brand */}
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-xs leading-relaxed text-forest-200">
            At Healthify, We Believe Healthy Eating Should Be Convenient,
            Affordable, And Enjoyable.
          </p>
          <ul className="mt-5 flex gap-3">
            {SOCIALS.map(({ icon: Ic, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-forest-800 transition-colors hover:bg-forest-700"
                >
                  <Ic className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer quick links">
          <h3 className="text-sm font-semibold text-white">Quick Links</h3>
          <ul className="mt-5 space-y-2.5">
            {FOOTER_LINKS.quickLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-xs text-forest-200 transition-colors hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services */}
        <div>
          <h3 className="text-sm font-semibold text-white">Our Services</h3>
          <ul className="mt-5 space-y-2.5">
            {FOOTER_LINKS.services.map((service) => (
              <li key={service}>
                <a
                  href="#services"
                  className="text-xs text-forest-200 transition-colors hover:text-white"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold text-white">Get in Touch</h3>
          <ul className="mt-5 space-y-3 text-xs text-forest-200">
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
              {CONTACT.location}
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
              <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="hover:text-white">
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-white">
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-forest-800">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-5 text-xs text-forest-300 sm:px-6 lg:px-8">
          <p>Copyright &copy; 2026 Healthify. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
