import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function About() {
	return (
		<div>
			<Head>
				<title>Color Mill Design About</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Header />
				<h1 className='text-6xl'>About</h1>
			</main>

			<Footer />
		</div>
	)
}
