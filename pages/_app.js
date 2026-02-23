import Head from 'next/head'
import StickyCta from '../components/StickyCta'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#080a0d" />
      </Head>
      <div className="pb-20 md:pb-0">
        <Component {...pageProps} />
      </div>
      <StickyCta />
    </>
  )
}
