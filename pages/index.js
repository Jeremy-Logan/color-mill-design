import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Color Mill Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header/>
        <div className='absolute top-60 mx-[12vw] w-[40vw] z-0'>
        <h1 className="text-6xl font-serif font-bold">
          Designing delightful branding and web experiences.
        </h1></div>
      </main>

      <Footer />
    </div>
  )
}
