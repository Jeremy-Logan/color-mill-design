import ContactForm from './contactForm'

export default function Footer() {
	return (
		<>
			<footer className='w-screen absolute bottom-100 overflow-hidden mt-24'>
			<ContactForm/>
			<div className='h-36 w-screen bg-gradient-to-r from-[#8b004d] to-[#b81803] px-16 pt-12 mt-12'>
				<h4 className='font-bold text-2xl w-screen text-white'> Color Mill Design</h4>
				<h5 className='text-white'>707.964.9645</h5></div>
			</footer>
		</>
	)
}
