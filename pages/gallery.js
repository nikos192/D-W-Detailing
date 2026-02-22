import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GalleryGrid from '../components/GalleryGrid'

const images = ['/thumb1.svg','/thumb2.svg','/thumb3.svg','/thumb1.svg','/thumb2.svg','/thumb3.svg']

export default function Gallery(){
  return (
    <>
      <Head>
        <title>Gallery | D&amp;W Detailers</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-black via-charcoal to-black">
        <Navbar />
        <main className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold">Gallery</h1>
          <p className="text-gray-400 mt-2">High-end before and after shots showcasing our work.</p>
          <div className="mt-6">
            <GalleryGrid images={images} />
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
