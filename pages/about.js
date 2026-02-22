import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About(){
  return (
    <>
      <Head>
        <title>About | D&amp;W Detailers</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-black via-charcoal to-black">
        <Navbar />
        <main className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold">About D&amp;W Detailers</h1>
          <p className="text-gray-300 mt-4">D&amp;W Detailers is a Brisbane-based professional car detailing service specializing in restoring and protecting vehicle appearance using premium products and expert techniques. We focus on quality, attention to detail, and customer satisfaction.</p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Our Approach</h3>
            <p className="text-gray-300 mt-2">We combine modern detailing technology, professional-grade products, and experienced technicians to deliver a showroom finish every time.</p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
