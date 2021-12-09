import Layout from '../components/layout.js'
import ContactForm from '@components/contactForm'


export default function Contact() {
	return (
		<>
			<Layout pageTitle='Contact Us' currentURL='https://www.colormilldesign.com/contact' description='Tell us a little bit about your project.'>
			<main>
				<section className='mx-12 mt-24'>
				<h1 className='font-serif text-6xl md:ml-[25vw]'>Let's connect.</h1>
				<ContactForm/>
				</section>
			</main>
</Layout>

			
		</>
	)
}
