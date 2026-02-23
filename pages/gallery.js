import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GalleryGrid from '../components/GalleryGrid'
import { galleryImages } from '../data/siteContent'

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Gallery | D&amp;W Detailers</title>
        <meta name="description" content="See detailing transformations from D&W Detailers projects across Brisbane." />
      </Head>

      <div className="site-shell min-h-screen">
        <Navbar />

        <main className="container-site py-12 md:py-16">
          <div className="kicker">Portfolio</div>
          <h1 className="font-display section-title mt-4">Detailing Transformations</h1>
          <p className="text-[#b5becc] mt-4 max-w-2xl leading-relaxed">
            Browse recent finishes from wash-and-protect packages through to paint correction and ceramic protection.
          </p>

          <div className="mt-8">
            <GalleryGrid images={galleryImages} />
          </div>

          <section className="section-space panel rounded-3xl p-6 md:p-8 text-center mt-10">
            <div className="kicker">Like What You See?</div>
            <h2 className="font-display text-[clamp(2rem,5vw,3.2rem)] mt-4 leading-[0.9]">Let’s Create The Same Result For Your Vehicle</h2>
            <p className="text-[#b7c0ce] max-w-2xl mx-auto mt-3">
              We’ll recommend the package that matches your paint and interior condition.
            </p>
            <Link href="/contact" className="btn-primary mt-7">
              Book Your Detail
            </Link>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}
