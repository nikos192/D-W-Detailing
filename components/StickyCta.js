import Link from 'next/link'
import { useRouter } from 'next/router'
import { business } from '../data/siteContent'

export default function StickyCta() {
  const router = useRouter()

  if (router.pathname === '/contact') {
    return null
  }

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 border-t border-white/15 bg-[#090d13]/95 backdrop-blur-md md:hidden">
      <div className="px-4 py-3 grid grid-cols-2 gap-2">
        <a
          href={`tel:${business.phone.replace(/[^+\d]/g, '')}`}
          className="btn-ghost !rounded-xl !py-2.5 !text-sm"
        >
          Call Now
        </a>
        <Link href="/contact" className="btn-primary !rounded-xl !py-2.5 !text-sm">
          Book A Detail
        </Link>
      </div>
    </div>
  )
}
