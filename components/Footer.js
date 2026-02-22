import Link from 'next/link'

export default function Footer(){
  return (
    <footer className="mt-16 border-t border-gray-800 pt-8 pb-12">
      <div className="max-w-6xl mx-auto px-4 text-sm text-gray-300 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <div className="font-semibold text-white">D&amp;W Detailers</div>
          <div>Moorooka, Brisbane</div>
          <div>Phone: (07) 0000 0000</div>
          <div>Email: info@dw-detailers.example</div>
        </div>
        <div className="flex gap-6">
          <div>
            <div className="font-medium text-white">Pages</div>
            <ul className="space-y-1">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
