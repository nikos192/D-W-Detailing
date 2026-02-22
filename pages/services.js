import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const services = [
  {title:'Exterior Detail', desc:'Wash, decontaminate, polish and protect exterior surfaces.', time:'2-4 hours', img:'/service-exterior.svg'},
  {title:'Interior Detail', desc:'Deep clean seats, carpets, trim, and sanitise interior areas.', time:'2-3 hours', img:'/service-interior.svg'},
  {title:'Full Detail', desc:'Comprehensive interior + exterior premium detailing package.', time:'4-6 hours', img:'/service-full.svg'},
  {title:'Paint Correction', desc:'Multi-stage polishing to remove swirls and restore gloss.', time:'Varies by vehicle', img:'/service-paint.svg'},
  {title:'Ceramic Coating', desc:'High-grade ceramic for long-term protection and gloss.', time:'1-2 days', img:'/service-ceramic.svg'},
]

export default function Services(){
  return (
    <>
      <Head>
        <title>Services | D&amp;W Detailers</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-black via-charcoal to-black">
        <Navbar />
        <main className="max-w-5xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold">Our Services</h1>
          <p className="text-gray-400 mt-2">Premium packages designed to protect and restore your vehicle.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map(s => (
              <div key={s.title} className="p-6 bg-black/50 glass rounded-lg">
                <div className="flex gap-4">
                  <div className="w-28 h-20 bg-cover rounded-md" style={{backgroundImage:`url(${s.img})`}} />
                  <div>
                    <h3 className="text-xl font-semibold">{s.title}</h3>
                    <p className="text-gray-300 mt-2">{s.desc}</p>
                    <div className="mt-4 text-sm text-gray-400">Estimated duration: {s.time}</div>
                    <div className="mt-4">
                      <Link href="/contact" className="px-4 py-2 bg-accent text-white rounded-md font-medium hover:opacity-90 transition-opacity">Book Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
