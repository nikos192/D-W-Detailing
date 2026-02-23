import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { business } from '../data/siteContent'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const router = useRouter()
  const [sticky, setSticky] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          sticky
            ? 'border-white/15 bg-[#090d13]/92 backdrop-blur-md'
            : 'border-transparent bg-transparent'
        }`}
      >
        <div className="hidden lg:block border-b border-white/10 bg-black/25">
          <div className="container-site py-2 flex items-center justify-between text-xs text-[#b9c3d1]">
            <div>Professional Car Detailing in {business.location}</div>
            <div className="flex items-center gap-4">
              <a href={`tel:${business.phone.replace(/[^+\d]/g, '')}`} className="hover:text-white transition-colors">
                {business.phone}
              </a>
              <a href={`mailto:${business.email}`} className="hover:text-white transition-colors">
                {business.email}
              </a>
            </div>
          </div>
        </div>

        <div className="container-site py-4 flex items-center justify-between gap-3">
          <Link href="/" className="font-display text-2xl md:text-3xl leading-none">
            D&amp;W <span className="text-[#f6c66c]">Detailers</span>
          </Link>

          <nav className="hidden md:flex items-center gap-2 text-sm text-[#d9dfe8]">
            {links.map((link) => {
              const active = router.pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-full transition-colors ${
                    active
                      ? 'bg-white/10 text-white'
                      : 'hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link href="/contact" className="btn-primary ml-2 !py-2.5 !px-4">
              Get A Quote
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/20 bg-white/5"
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1.5">
              <span
                className={`w-5 h-[2px] bg-white rounded transition-transform ${
                  mobileOpen ? 'translate-y-[7px] rotate-45' : ''
                }`}
              />
              <span
                className={`w-5 h-[2px] bg-white rounded transition-opacity ${
                  mobileOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`w-5 h-[2px] bg-white rounded transition-transform ${
                  mobileOpen ? '-translate-y-[7px] -rotate-45' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#0a0f17]/95 backdrop-blur-sm md:hidden">
          <div className="max-w-sm mx-auto px-6 py-20 space-y-4">
            <div className="panel rounded-2xl p-4 text-sm text-[#c4cedc]">
              <div>{business.location}</div>
              <a href={`tel:${business.phone.replace(/[^+\d]/g, '')}`} className="block mt-2 text-white">
                {business.phone}
              </a>
            </div>

            {links.map((link, index) => {
              const active = router.pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block panel rounded-2xl px-5 py-4 text-lg reveal ${
                    active ? 'text-white border-[#f6c66c]/50' : 'text-[#d5dde8]'
                  }`}
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  {link.label}
                </Link>
              )
            })}

            <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn-primary w-full mt-4">
              Book Your Detail
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
