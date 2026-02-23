import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { business } from '../data/siteContent'

const values = [
  {
    title: 'Quality First',
    desc: 'We use proven products and methodical workflows so each service delivers measurable improvements.',
  },
  {
    title: 'No Rushed Jobs',
    desc: 'We schedule enough time to clean, correct, and protect properly instead of cutting corners.',
  },
  {
    title: 'Clear Communication',
    desc: 'Before we start, we align on your expectations, condition goals, and realistic outcomes.',
  },
]

export default function About() {
  return (
    <>
      <Head>
        <title>About | D&amp;W Detailers</title>
        <meta name="description" content="Learn about the detailing philosophy behind D&W Detailers in Brisbane." />
      </Head>

      <div className="site-shell min-h-screen">
        <Navbar />

        <main className="container-site py-12 md:py-16">
          <div className="kicker">About Us</div>
          <h1 className="font-display section-title mt-4">Driven By Craft, Not Shortcuts</h1>

          <section className="panel rounded-3xl p-6 md:p-8 mt-7">
            <p className="text-[#d3dae4] leading-relaxed">
              D&amp;W Detailers was built for owners who care about how their car feels every time they walk up to it.
              Based in {business.location}, we specialize in restoring gloss, protecting surfaces and keeping interiors
              genuinely fresh, not just briefly clean.
            </p>
            <p className="text-[#b5becc] leading-relaxed mt-4">
              Every booking is handled with a disciplined process and final quality checks. The result is a cleaner,
              sharper and better-protected vehicle that lasts beyond wash day.
            </p>
          </section>

          <section className="section-space mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {values.map((value) => (
              <article key={value.title} className="panel rounded-2xl p-5">
                <h2 className="text-lg font-semibold">{value.title}</h2>
                <p className="text-sm text-[#b8c2cf] mt-2 leading-relaxed">{value.desc}</p>
              </article>
            ))}
          </section>

          <section className="section-space mt-10 panel rounded-3xl p-6 md:p-8 text-center">
            <div className="kicker">Work With Us</div>
            <h2 className="font-display text-[clamp(2rem,5vw,3.2rem)] mt-4 leading-[0.9]">Book A Detail With Confidence</h2>
            <p className="text-[#b7c0ce] max-w-2xl mx-auto mt-3">
              Tell us your vehicle type, current condition, and goal. We will guide you to the right package.
            </p>
            <Link href="/contact" className="btn-primary mt-7">
              Start Your Booking
            </Link>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}
