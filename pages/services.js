import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ServiceCard from '../components/ServiceCard'
import { business, services } from '../data/siteContent'

const process = [
  {
    title: 'Inspect & Plan',
    desc: 'We assess paint condition, interior wear and contamination before selecting the right detailing path.',
  },
  {
    title: 'Detail & Protect',
    desc: 'Precision cleaning, restoration and protective layers are applied using safe, professional products.',
  },
  {
    title: 'Final Quality Check',
    desc: 'Every service ends with a complete finish inspection so your vehicle leaves spotless and protected.',
  },
]

const assurance = [
  'Transparent package pricing before booking',
  'Paint-safe methods and tested products only',
  'Consistent quality checks before handover',
]

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | D&amp;W Detailers</title>
        <meta
          name="description"
          content="Explore interior, exterior, full detail, paint correction and ceramic coating packages from D&W Detailers in Brisbane."
        />
      </Head>

      <div className="site-shell min-h-screen">
        <Navbar />

        <main className="container-site py-12 md:py-16">
          <div className="kicker">Our Services</div>
          <h1 className="font-display section-title mt-4">Precision Packages. Premium Results.</h1>
          <p className="text-[#b6bfcc] mt-4 max-w-3xl leading-relaxed">
            Choose the level of care your vehicle needs now, then scale up whenever you are ready for deeper restoration and longer-term protection.
          </p>

          <div className="mt-9 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <section className="section-space panel rounded-3xl p-6 md:p-9">
            <div className="flex flex-wrap gap-4 items-end justify-between">
              <h2 className="font-display text-[clamp(2rem,5vw,3.1rem)] leading-[0.92] m-0">Our Detailing Process</h2>
              <Link href="/contact" className="btn-primary !py-2.5">
                Request Your Quote
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {process.map((step, index) => (
                <article key={step.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="font-display text-4xl text-[#f6c66c]">0{index + 1}</div>
                  <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-[#b5becc] leading-relaxed">{step.desc}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section-space grid grid-cols-1 lg:grid-cols-5 gap-6 items-start pb-6">
            <div className="lg:col-span-3 panel rounded-3xl p-6 md:p-8">
              <div className="kicker">Booking Confidence</div>
              <h3 className="font-display text-[clamp(2rem,5vw,3.2rem)] mt-4 leading-[0.9]">Why Clients Keep Coming Back</h3>
              <ul className="mt-6 space-y-3 text-sm text-[#cad3df]">
                {assurance.map((item) => (
                  <li key={item} className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="lg:col-span-2 panel rounded-3xl p-6">
              <div className="text-xs uppercase tracking-[0.16em] text-[#f6c66c]">Need Help Choosing?</div>
              <p className="mt-3 text-sm text-[#b8c1cf] leading-relaxed">
                Tell us your car type and condition and we will point you to the right package before booking.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Link href="/contact" className="btn-primary w-full">
                  Get A Recommended Package
                </Link>
                <a href={`tel:${business.phone.replace(/[^+\d]/g, '')}`} className="btn-ghost w-full">
                  Call {business.phone}
                </a>
              </div>
            </aside>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}
