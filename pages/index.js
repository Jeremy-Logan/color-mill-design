import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import MendocinoSpirits from '@components/mendocinoSpirits'
import {
	motion,
	useViewportScroll,
	useTransform,
	useSpring,
} from 'framer-motion'

export default function Home() {
	

	return (
		<div className='overflow-hidden'>
			<Head>
				<title>Color Mill Design</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='overflow-hidden'>
				<Header />
				{console.log()}
				<div className='absolute top-60 px-8 md:pl-24 lg:pl-36 w-screen md:w-[70vw] lg:w-[60vw] z-0 '>
					<h1 className='text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-loose'>
						Designing delightful branding and web experiences.
					</h1>
					<h2 className='text-lg md:text-xl lg:text-2xl leading-relaxed mt-12'>
						We are a branding and web design studio in <br/> Mendocino
						County, California and Portland, Oregon.
						<br /> We use design and creative thinking to help
						businesses tell their story.
					</h2>
          
				</div>
				<MendocinoSpirits/>
        
			</main>

			<Footer />
		</div>
	)
}
