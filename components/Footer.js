import Link from 'next/link'
import { FaInstagram } from 'react-icons/fa'

export default function Footer() {
	return (
		<>
			<footer className='w-screen overflow-hidden mt-24'>
				<div className='flex flex-col sm:flex-row justify-center items-center h-full w-screen sm:px-16 py-12 mt-12'>
					<span className='text-center align-middle text-3xl mx-8 text-black mb-4'>
						Let's talk!
					</span>
					<button className='bg-[#fae06a] text-gray-800 text-xl font-semibold py-4 px-6 hover:bg-[#94df57] transform hover:scale-105 shadow-md hover:shadow-lg transition duration-250'>
						<Link href='/contact' alt='contact' passHref>
							<a>Contact Us</a>
						</Link>
					</button>{' '}
				</div>
				<div className='h-full w-screen bg-gradient-to-r from-[#8b004d] to-[#b81803] px-16 py-12 mt-12 flex justify-between'>
					<div>
						<h4 className='font-bold text-2xl w-screen text-white'>
							{' '}
							Color Mill Design
						</h4>
						<h5 className='text-white'>339 E Redwood Ave.</h5>
						<h5 className='text-white'>Fort Bragg, CA 95437</h5>
						<h5 className='text-white '>707.964.9645</h5>
						<div className='text-white text-3xl mt-4'>
							<a
							href='https://www.instagram.com/the_colormill/'
							target='_blank'
							rel='noopener noreferrer'>
							<FaInstagram />
						</a>
						</div>
					</div>
					
				</div>
			</footer>
		</>
	)
}
