import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function CaseStudies() {
	return (
		<div>
			<Head>
				<title>Color Mill Design Case Studies</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Header title='Welcome to my app!' />
				<h1 class='text-6xl'>Case Studies</h1>
			</main>

			<Footer />
		</div>
	)
}
