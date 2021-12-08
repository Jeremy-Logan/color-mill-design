import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import Image from 'next/image'
import {
	motion,
	useAnimation,
	useViewportScroll,
	useTransform,
	useSpring,
} from 'framer-motion'
import WallOfHotdogs from '@components/wallOfHotdogs'

const FadeIn = ({ children }) => {
	const controls = useAnimation()
	const [ref, inView] = useInView()

	useEffect(() => {
		inView ? controls.start('visible') : controls.start('hidden')
	}, [controls, inView])

	return (
		<motion.div
			className='z-30'
			ref={ref}
			animate={controls}
			initial='hidden'
			transition={{ type: 'spring', duration: 1, delay: 0.25 }}
			variants={{
				visible: { opacity: 1, scale: 1 },
				hidden: { opacity: 0, scale: 0.5 },
			}}>
			{children}
		</motion.div>
	)
}

const SlideIn = ({ children }) => {
	const controls = useAnimation()
	const [ref, inView] = useInView()

	useEffect(() => {
		inView ? controls.start('visible') : controls.start('hidden')
	}, [controls, inView])

	return (
		<motion.div
			className='z-30 '
			ref={ref}
			animate={controls}
			initial='hidden'
			transition={{ type: 'spring', duration: 1, delay: 0.25 }}
			variants={{
				visible: { opacity: 1, x: 1 },
				hidden: { opacity: 0, x: 100 },
			}}>
			{children}
		</motion.div>
	)
}

export default function FoodBankSection() {
	const { scrollYProgress } = useViewportScroll()
	const yRange = useTransform(scrollYProgress, [0, 1], [0, 1])

	const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 })
	return (
		<div className='relative mx-auto sm:h-[70vh] w-screen overflow-hidden z-10'>
			<div className='flex xs:flex-col sm:flex-row mx-auto justify-center'>
				
					<FadeIn>
						<motion.button className='relative h-full w-[40vw] justify-start focus:outline-none sm:flex hidden z-20'>
							<Link href='/fort-bragg-food-bank'>
								<Image
									layout='fill'
									objectFit='contain'
									alt='Fort Bragg Food Bank'
									quality={100}
									src='ar_1:1,bo_0px_solid_rgb:ffffff,c_fill,co_rgb:ffffff,fl_alpha.preserve_transparency,g_auto,o_100,r_max,w_600/v1616447180/Color%20Mill%20Design/food-bank-cover_adu1gk.jpg'
								/>
							</Link>
						</motion.button>
					</FadeIn>
				
				<div className='md:my-36 mb-12 z-20 '>
					<FadeIn>
						<motion.button className='relative mx-4 w-[90vw] h-[90vw] mr-0 focus:outline-none sm:hidden'>
							<Link href='/fort-bragg-food-bank'>
								<Image
									layout='fill'
									objectFit='contain'
									alt='Fort Bragg Food Bank'
									quality={100}
									src='ar_1:1,bo_0px_solid_rgb:ffffff,c_fill,co_rgb:ffffff,fl_alpha.preserve_transparency,g_auto,o_100,r_max,w_600/v1616447180/Color%20Mill%20Design/food-bank-cover_adu1gk.jpg'
								/>
							</Link>
						</motion.button>
					</FadeIn>

					<div>
						<SlideIn>
							<Link href='/fort-bragg-food-bank'>
								<button className='focus:outline-none bg-[#e2efff] w-full p-10 shadow-xl sm:mt-0 '>
									<h3 className='text-2xl xl:text-5xl md:text-3xl font-bold my-auto text-left z-20'>
										Fort Bragg Food Bank
									</h3>
									<h4 className='xl:text-lg text-left z-30 mt-2'>
										Branding, Print Design, Web Design{' '}
									</h4>
								</button>
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
