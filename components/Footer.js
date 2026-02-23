import Link from 'next/link'
import { business } from '../data/siteContent'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/25">
      <div className="container-site py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="font-display text-3xl leading-none">D&amp;W Detailers</div>
          <p className="text-sm text-[#aeb6c3] mt-3 max-w-sm leading-relaxed">
            Precision detailing crafted for Brisbane drivers who want clean lines, lasting shine and flawless finishes.
          </p>
          <Link href="/contact" className="btn-primary mt-5 !py-2.5 !px-4">
            Book A Detail
          </Link>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.16em] text-[#f6c66c]">Navigation</h4>
          <div className="mt-4 space-y-2 text-sm text-[#cdd4df]">
            <Link className="block hover:text-white transition-colors" href="/">
              Home
            </Link>
            <Link className="block hover:text-white transition-colors" href="/services">
              Services
            </Link>
            <Link className="block hover:text-white transition-colors" href="/gallery">
              Gallery
            </Link>
            <Link className="block hover:text-white transition-colors" href="/about">
              About
            </Link>
            <Link className="block hover:text-white transition-colors" href="/contact">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.16em] text-[#f6c66c]">Book Direct</h4>
          <div className="mt-4 space-y-2 text-sm text-[#cdd4df]">
            <div>{business.location}</div>
            <a
              href={`tel:${business.phone.replace(/[^+\d]/g, '')}`}
              className="block hover:text-white transition-colors"
            >
              {business.phone}
            </a>
            <a
              href={`mailto:${business.email}?subject=${encodeURIComponent('Detailing Enquiry')}`}
              className="block hover:text-white transition-colors break-all"
            >
              {business.email}
            </a>
            <a
              href={business.facebook}
              target="_blank"
              rel="noreferrer"
              className="block hover:text-white transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-xs text-[#95a0b0]">
        <div className="container-site flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} D&amp;W Detailers. All rights reserved.</span>
          <span>Premium detailing in Brisbane</span>
        </div>
      </div>
    </footer>
  )
}
