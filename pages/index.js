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
        <h1 className="text-6xl font-serif font-bold leading-normal">
          Designing delightful branding and web experiences.
        </h1>
        <h2 className="text-2xl font-bold leading-relaxed mt-8">We are a branding and web design studio in Mendocino County, California and Portland, Oregon. We use design and creative thinking to help businesses tell their story.
</h2>
        </div>
        
      </main>

      <Footer />
    </div>
  )
}
