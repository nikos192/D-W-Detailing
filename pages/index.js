import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ServiceCard from '../components/ServiceCard'
import GalleryGrid from '../components/GalleryGrid'
import { business, faqs, galleryImages, services, testimonials, trustHighlights } from '../data/siteContent'

const stats = [
  { value: '650+', label: 'Cars Detailed' },
  { value: '4.9/5', label: 'Client Rating' },
  { value: '48h', label: 'Typical Booking Turnaround' },
]

const steps = [
  {
    title: 'Tell Us Your Vehicle',
    desc: 'Share your car model, paint condition, and what result you want.',
  },
  {
    title: 'Receive Your Package Plan',
    desc: 'We recommend the best package and expected timing before you commit.',
  },
  {
    title: 'Lock In Your Booking',
    desc: 'Confirm your preferred date and we handle the rest from there.',
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Car Detailing Brisbane | D&amp;W Detailers</title>
        <meta
          name="description"
          content="Premium car detailing in Brisbane. Interior, exterior, paint correction and ceramic coating from D&W Detailers in Moorooka."
        />
      </Head>

      <div className="site-shell min-h-screen">
        <Navbar />

        <main>
          <section className="container-site pt-10 pb-16 md:pt-14 md:pb-20 grid grid-cols-1 lg:grid-cols-12 gap-9 items-start lg:items-center">
            <div className="lg:col-span-7">
              <div className="kicker reveal">Brisbane Premium Auto Care</div>
              <h1 className="font-display section-title reveal reveal-delay-1 text-[clamp(3.1rem,11vw,7.2rem)] mt-2 lg:mt-3 leading-[0.88]">
                DETAILING
                <span className="block text-[#f6c66c]">THAT FEELS NEW</span>
              </h1>

              <p className="reveal reveal-delay-2 text-[#b5becc] text-base md:text-lg leading-relaxed max-w-2xl mt-5">
                Precision interior and exterior detailing that restores gloss, protects surfaces, and gives you that
                just-delivered feeling every time you open the door.
              </p>

              <div className="reveal reveal-delay-2 mt-6 flex flex-wrap gap-2.5">
                {trustHighlights.map((item) => (
                  <span key={item} className="trust-chip">
                    {item}
                  </span>
                ))}
              </div>

              <div className="reveal reveal-delay-3 mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Book A Detail
                </Link>
                <Link href="/services" className="btn-ghost">
                  Compare Packages
                </Link>
                <a href={`tel:${business.phone.replace(/[^+\d]/g, '')}`} className="btn-ghost">
                  Call {business.phone}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="panel rounded-3xl p-5 md:p-6 float">
                <div
                  className="w-full h-[270px] md:h-[320px] rounded-2xl bg-cover bg-center"
                  style={{ backgroundImage: 'url(/hero.jpg)' }}
                  role="img"
                  aria-label="Detailed vehicle in Brisbane"
                />
                <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="text-xs uppercase tracking-[0.16em] text-[#f6c66c]">Fast Response</div>
                  <p className="text-sm text-[#c4cedc] mt-2 leading-relaxed">
                    Send your booking details once and we reply with package and timing recommendations.
                  </p>
                  <Link href="/contact" className="btn-primary w-full mt-4 !py-2.5 !rounded-xl">
                    Start Booking Request
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="container-site -mt-1 md:-mt-4">
            <div className="panel rounded-2xl p-4 md:p-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="metric-card">
                  <div className="font-display text-4xl text-[#f6c66c] leading-none">{stat.value}</div>
                  <div className="text-sm text-[#b1bbc9] mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="container-site section-space">
            <div className="flex flex-wrap gap-4 items-end justify-between">
              <div>
                <div className="kicker">Services</div>
                <h2 className="font-display section-title mt-4">Packages Built For Every Vehicle</h2>
              </div>
              <Link href="/services" className="btn-ghost !py-2.5">
                View Full Service Menu
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {services.slice(0, 3).map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </section>

          <section className="container-site section-space">
            <div className="panel rounded-3xl p-6 md:p-9">
              <div className="kicker">How It Works</div>
              <h3 className="font-display section-title mt-4">Simple Booking. Professional Execution.</h3>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                {steps.map((step, index) => (
                  <article key={step.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <div className="font-display text-4xl text-[#f6c66c] leading-none">0{index + 1}</div>
                    <h4 className="mt-3 text-lg font-semibold">{step.title}</h4>
                    <p className="mt-2 text-sm text-[#b9c3d0] leading-relaxed">{step.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="container-site section-space">
            <div className="kicker">Featured Work</div>
            <h2 className="font-display section-title mt-4">Finish Quality You Can See</h2>
            <p className="text-[#b5becc] mt-3 max-w-2xl">
              Real detailing outcomes, from paint clarity improvements to full interior resets.
            </p>
            <div className="mt-7">
              <GalleryGrid images={galleryImages} />
            </div>
          </section>

          <section className="container-site section-space">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {testimonials.map((testimonial) => (
                <article key={testimonial.name} className="panel rounded-2xl p-5">
                  <p className="text-sm text-[#d9e0ea] leading-relaxed">“{testimonial.quote}”</p>
                  <div className="mt-4 text-sm font-semibold">{testimonial.name}</div>
                  <div className="text-xs text-[#9eabbd] mt-1">{testimonial.context}</div>
                </article>
              ))}
            </div>
          </section>

          <section className="container-site section-space">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              <div className="lg:col-span-3">
                <div className="kicker">FAQ</div>
                <h3 className="font-display section-title mt-4">Questions Before You Book?</h3>
                <div className="mt-6 space-y-3">
                  {faqs.map((faq) => (
                    <article key={faq.q} className="faq-item">
                      <h4 className="text-base font-semibold">{faq.q}</h4>
                      <p className="text-sm text-[#b6c0cd] mt-2 leading-relaxed">{faq.a}</p>
                    </article>
                  ))}
                </div>
              </div>

              <aside className="lg:col-span-2 panel rounded-3xl p-6 sticky top-24">
                <div className="text-xs uppercase tracking-[0.17em] text-[#f6c66c]">Ready To Lock It In?</div>
                <h4 className="font-display text-4xl mt-3 leading-[0.9]">Book Your Detail</h4>
                <p className="text-[#b7c0ce] text-sm mt-3 leading-relaxed">
                  Send your enquiry once and we will confirm package, timing, and next steps.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <Link href="/contact" className="btn-primary w-full">
                    Start Booking
                  </Link>
                  <a href={`mailto:${business.email}?subject=${encodeURIComponent('Detailing Enquiry')}`} className="btn-ghost w-full">
                    Email Us Directly
                  </a>
                  <a href={`tel:${business.phone.replace(/[^+\d]/g, '')}`} className="btn-ghost w-full">
                    Call {business.phone}
                  </a>
                </div>
              </aside>
            </div>
          </section>

          <section className="container-site section-space pb-16">
            <div className="panel rounded-3xl p-6 md:p-10 text-center">
              <div className="kicker">Final Step</div>
              <h3 className="font-display text-[clamp(2.2rem,6vw,4rem)] mt-4 leading-[0.9]">Get Your Vehicle Looking Exceptional</h3>
              <p className="text-[#b7c0ce] max-w-2xl mx-auto mt-3">
                Premium detailing, consistent workmanship, and a finish you can actually see.
              </p>
              <Link href="/contact" className="btn-primary mt-7">
                Book Your Detail Today
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}
