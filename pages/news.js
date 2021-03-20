import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function News() {
	return (
		<div>
			<Head>
				<title>Color Mill Design News</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Header title='Welcome to my app!' />
				<h1 className='text-6xl'>News</h1>
			</main>

			<Footer />
		</div>
	)
}
