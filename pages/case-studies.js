import Head from 'next/head'
import MendocinoSpiritsSection from '@components/mendocinoSpiritsSection'
import FoodBankSection from '@components/foodBankSection'

export default function CaseStudies() {
	return (
		<div>
			<Head>
				<title>Color Mill Design | Case Studies</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='overflow-hidden '>
				<div className='md:top-80 px-8 md:pl-24 lg:pl-36 w-screen md:w-[70vw] lg:w-[60vw] z-0 mt-36 h-[600px] '>
					<h1 className='text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-loose'>
						Case Studies
					</h1>
					<h2 className='text-lg md:text-xl lg:text-2xl leading-relaxed mt-12'>
						Lorem ipsum dolor sit amet, consectetur<br/>
									adipiscing elit, sed do eiusmod tempor<br/>
									incididunt ut labore et dolore magna aliqua.
					</h2>
				</div>
				<MendocinoSpiritsSection />
				<FoodBankSection />
			</main>
		</div>
	)
}
