import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar(){
  const [sticky, setSticky] = useState(false)
  useEffect(()=>{
    const onScroll = ()=> setSticky(window.scrollY>20)
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  return (
    <header className={`w-full sticky top-0 z-40 transition-all border-b ${sticky ? 'backdrop-blur-sm bg-black/75 border-white/10 shadow-lg' : 'bg-black/50 border-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-white font-semibold text-lg">D&amp;W Detailers</Link>
        <nav className="hidden md:flex gap-6 items-center text-sm text-gray-200">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          <Link href="/contact" className="ml-2 px-4 py-2 bg-accent text-white rounded-md font-medium hover:opacity-90 transition-opacity">Book a Detail</Link>
        </nav>
      </div>
    </header>
  )
}
