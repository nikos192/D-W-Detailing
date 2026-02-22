import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ServiceCard from '../components/ServiceCard'
import GalleryGrid from '../components/GalleryGrid'

const services = [
  {title:'Exterior Detail', desc:'Restore gloss and protect exterior surfaces.', time:'2-4 hours', img:'/service-exterior.svg'},
  {title:'Interior Detail', desc:'Deep clean, sanitise and rejuvenate interiors.', time:'2-3 hours', img:'/service-interior.svg'},
  {title:'Full Detail', desc:'Complete interior and exterior premium service.', time:'4-6 hours', img:'/service-full.svg'},
  {title:'Paint Correction', desc:'Remove swirl marks and restore paint clarity.', time:'Varies', img:'/service-paint.svg'},
  {title:'Ceramic Coating', desc:'Long-term protection and extreme hydrophobic finish.', time:'1-2 days', img:'/service-ceramic.svg'},
]

const gallery = ['/thumb1.svg','/thumb2.svg','/thumb3.svg','/thumb1.svg']

export default function Home(){
  return (
    <>
      <Head>
        <title>Car Detailing Brisbane | D&amp;W Detailers</title>
        <meta name="description" content="Professional car detailing in Brisbane. Interior, exterior, paint correction and ceramic coating services in Moorooka." />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-black via-charcoal to-black">
        <Navbar />

        <section className="relative h-screen flex items-center" style={{backgroundImage:'url(/hero.svg)', backgroundSize:'cover', backgroundPosition:'center'}}>
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="bg-black/50 p-8 rounded-lg inline-block">
              <h1 className="text-4xl md:text-6xl font-bold">Premium Car Detailing in Brisbane</h1>
              <p className="mt-4 text-gray-300 max-w-2xl mx-auto">Professional interior, exterior, and ceramic coating services that restore and protect your vehicle.</p>
              <div className="mt-6 flex justify-center gap-4">
                <Link href="/contact" className="px-6 py-3 bg-accent text-white rounded-md font-semibold hover:opacity-90 transition-opacity">Book a Detail</Link>
                <Link href="/services" className="px-6 py-3 border border-gray-600 rounded-md hover:bg-white/5 transition-colors">View Services</Link>
              </div>
            </div>
          </div>
        </section>

        <main className="max-w-6xl mx-auto px-6 -mt-24">
          <section className="bg-gradient-to-b from-black/60 to-black/40 glass rounded-xl p-6 shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-4">
                  <div className="text-2xl">⭐</div>
                  <div>
                    <div className="font-semibold">4.3 Star Rated Brisbane Detailer</div>
                    <div className="text-gray-300 text-sm">Professional Grade Products • Experienced Specialists • Premium Finish Guarantee</div>
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-300">Local to Moorooka • Trusted by Brisbane car enthusiasts</div>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-semibold">Our Services</h2>
            <p className="text-gray-400 mt-1">Premium packages tailored for every vehicle.</p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.slice(0,3).map(s => (
                <ServiceCard key={s.title} title={s.title} desc={s.desc} time={s.time} img={s.img} />
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link href="/services" className="px-5 py-2 bg-transparent border border-gray-600 rounded-md hover:bg-white/5 transition-colors">View All Services</Link>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold">Gallery</h2>
            <p className="text-gray-400 mt-1">Before &amp; after results showing our premium finish.</p>
            <div className="mt-4">
              <GalleryGrid images={gallery} />
            </div>
            <div className="mt-4 text-center">
              <Link href="/gallery" className="px-5 py-2 bg-transparent border border-gray-600 rounded-md hover:bg-white/5 transition-colors">View Full Gallery</Link>
            </div>
          </section>

          <section className="mt-12 bg-gradient-to-b from-black/50 to-black/30 glass rounded-xl p-8">
            <h3 className="text-xl font-semibold">Why Choose Us</h3>
            <ul className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 text-gray-300">
              <li>Premium products</li>
              <li>Attention to detail</li>
              <li>Experienced team</li>
              <li>Local Brisbane business</li>
            </ul>
          </section>

          <section id="book" className="mt-12 p-8 rounded-xl text-center glass">
            <h2 className="text-3xl font-bold">Restore Your Vehicle’s Showroom Finish</h2>
            <p className="text-gray-300 mt-3">Book a premium detailing service today and see the transformation.</p>
            <div className="mt-6">
              <Link href="/contact" className="px-6 py-3 bg-accent text-white rounded-md font-semibold hover:opacity-90 transition-opacity">Book Now</Link>
            </div>
          </section>

        </main>

        <Footer />
      </div>
    </>
  )
}
