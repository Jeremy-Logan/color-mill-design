
import {  InView } from 'react-intersection-observer'
import Link from 'next/link'
import Image from 'next/image'
import {
	motion,
	
} from 'framer-motion'
import HexGrid from '@components/hexGrid'

const FadeIn = ({ children }) => {
	return (
		<InView>
			{({ inView, ref, entry }) => (
				<motion.div
					className='z-30'
					ref={ref}
					animate={
						inView
							? { opacity: 1, scale: 1 }
							: { opacity: 0, scale: 0.5 }
					}
					initial='hidden'
					transition={{ type: 'spring', duration: 1, delay: 0.25 }}
					variants={{
						visible: { opacity: 1, scale: 1 },
						hidden: { opacity: 0, scale: 0.5 },
					}}>
					{children}
				</motion.div>
			)}
		</InView>
	)
}

const SlideIn = ({ children }) => {
	

	return (
		<InView>
			{({ inView, ref, entry }) => (
				<motion.div
					className='z-30 '
					ref={ref}
					animate={inView
						? { opacity: 1, x: 1 }
						: { opacity: 0, x: -100 }}
					initial='hidden'
					transition={{ type: 'spring', duration: 1, delay: 0.25 }}
					variants={{
						visible: { opacity: 1, x: 1 },
						hidden: { opacity: 0, x: -100 },
					}}>
					{children}
				</motion.div>
			)}
		</InView>
	)
}

export default function MendocinoSpiritsSection() {
	return (
		<div className='relative mb-12 sm:h-[70vh] w-screen z-10 md:pr-4'>
			<div className='flex flex-col md:flex-row mx-auto justify-center'>
				<div className='md:my-36 mb-12 z-20 mx-auto md:mx-0'>
					<FadeIn>
						<motion.button className='relative  w-[90vw] h-[90vw] mr-0 focus:outline-none sm:hidden'>
							<Link href='/mendocino-spirits'><a>
								<Image
									layout='fill'
									objectFit='contain'
									alt='Mendocino Spirits'
									quality={100}
									src='r_max/v1638489233/Color%20Mill%20Design/Mendocino-Spirits-3-Bottles_i8oym6.jpg'
								/></a>
							</Link>
						</motion.button>
					</FadeIn>
					<SlideIn>
						<Link href='/mendocino-spirits'><a>
							<button className='focus:outline-none bg-[#e2efff] p-10 shadow-xl sm:mt-0  sm:ml-10'>
								<h3 className='text-2xl xl:text-5xl md:text-3xl font-bold my-auto text-left z-20'>
									Mendocino Spirits
								</h3>
								<h4 className='xl:text-lg text-left z-30 mt-2'>
									Branding, Illustration, Web Design, Print
									Design{' '}
								</h4>
							</button></a>
						</Link>
					</SlideIn>
				</div>
				<FadeIn>
					<motion.button className='relative h-full w-[40vw] mr-0 focus:outline-none sm:flex hidden'>
						<Link href='/mendocino-spirits'><a>
							<Image
								layout='fill'
								objectFit='contain'
								alt='Mendocino Spirits'
								quality={100}
								src='r_max/v1638489233/Color%20Mill%20Design/Mendocino-Spirits-3-Bottles_i8oym6.jpg'
							/></a>
						</Link>
					</motion.button>
				</FadeIn>
				<div className='absolute top-48 hidden md:block'>
					<HexGrid className='z-0' />
				</div>
			</div>
		</div>
	)
}
