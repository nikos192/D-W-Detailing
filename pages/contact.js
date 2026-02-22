import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact(){
  return (
    <>
      <Head>
        <title>Contact | D&amp;W Detailers</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-black via-charcoal to-black">
        <Navbar />
        <main className="max-w-3xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold">Book Your Detail Today</h1>
          <p className="text-gray-400 mt-2">Complete the form below or call us to arrange your appointment in Moorooka, Brisbane.</p>

          <form className="mt-6 grid grid-cols-1 gap-4 p-6 rounded-xl glass border border-white/10">
            <input placeholder="Name" className="p-3 rounded bg-black/50 border border-white/10 text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent/50" />
            <input placeholder="Phone" className="p-3 rounded bg-black/50 border border-white/10 text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent/50" />
            <input placeholder="Email" className="p-3 rounded bg-black/50 border border-white/10 text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent/50" />
            <textarea placeholder="Message" rows="5" className="p-3 rounded bg-black/50 border border-white/10 text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent/50" />
            <div>
              <button type="submit" className="px-5 py-3 bg-accent text-white rounded-md font-medium hover:opacity-90 transition-opacity">Send Message</button>
            </div>
          </form>

          <div className="mt-8 text-gray-300">
            <div><strong>Location:</strong> Moorooka, Brisbane</div>
            <div><strong>Phone:</strong> (07) 0000 0000</div>
            <div><strong>Email:</strong> info@dw-detailers.example</div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
