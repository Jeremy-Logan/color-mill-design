import Head from 'next/head'
import ContactForm from '@components/contactForm'


export default function Contact() {
	return (
		<div>
			<Head>
				<title>Color Mill Design | Contact</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<section className='mx-12'>
				<h1 className='font-serif text-6xl ml-[25vw]'>Let's connect.</h1>
				<ContactForm/>
				</section>
			</main>

			
		</div>
	)
}
