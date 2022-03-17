import { InView } from 'react-intersection-observer'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import WallOfHotdogs from '@components/wallOfHotdogs'

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
					transition={{ type: 'spring', duration: 1, delay: 0.25 }}>
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
					animate={
						inView ? { opacity: 1, x: 1 } : { opacity: 0, x: 100 }
					}
					initial='hidden'
					transition={{ type: 'spring', duration: 1, delay: 0.25 }}
					variants={{
						visible: { opacity: 1, x: 1 },
						hidden: { opacity: 0, x: 100 },
					}}>
					{children}
				</motion.div>
			)}
		</InView>
	)
}

export default function FoodBankSection() {
	return (
		<div className='relative mx-auto sm:h-[70vh] w-screen overflow-hidden z-10'>
			<div className='flex xs:flex-col sm:flex-row mx-auto justify-center'>
				<FadeIn>
					<motion.button className='relative h-full w-[40vw] mr-0 focus:outline-none sm:flex hidden'>
						<Link href='/fort-bragg-food-bank'>
							<a><Image
								layout='fill'
								objectFit='contain'
								alt='Fort Bragg Food Bank'
								quality={100}
								src='r_max/v1639017304/Color%20Mill%20Design/FB-Food-Bank-3-Newsletters-2020_ujxydi.png'
							/></a>
						</Link>
					</motion.button>
				</FadeIn>

				<div className='md:my-36 mb-12 z-20 '>
					<FadeIn>
						<motion.button className='relative mx-4 w-[90vw] h-[90vw] mr-0 focus:outline-none sm:hidden'>
							<Link href='/fort-bragg-food-bank'>
								<a><Image
									layout='fill'
									objectFit='contain'
									alt='Fort Bragg Food Bank'
									quality={100}
									src='r_max/v1639017304/Color%20Mill%20Design/FB-Food-Bank-3-Newsletters-2020_ujxydi.png'
								/></a>
							</Link>
						</motion.button>
					</FadeIn>

					<div>
						<SlideIn>
							<Link href='/fort-bragg-food-bank'>
								<a><button className='focus:outline-none bg-[#e2efff] w-full p-10 shadow-xl sm:mt-0 '>
									<h3 className='text-2xl xl:text-5xl md:text-3xl font-bold my-auto text-left z-20'>
										Fort Bragg Food Bank
									</h3>
									<h4 className='xl:text-lg text-left z-30 mt-2'>
										Branding, Print Design, Web Design{' '}
									</h4>
								</button></a>
							</Link>
						</SlideIn>
					</div>
				</div>
				<div className='absolute top-[10vh] w-screen hidden md:block'>
					<WallOfHotdogs className='z-0' />
				</div>
			</div>
		</div>
	)
}
