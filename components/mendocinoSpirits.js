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
import HexGrid from '@components/hexGrid'

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
				hidden: { opacity: 0, x: -100 },
			}}>
			{children}
		</motion.div>
	)
}

export default function MendocinoSpirits() {
	const { scrollYProgress } = useViewportScroll()
	const yRange = useTransform(scrollYProgress, [0, 1], [0, 1])

	const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 })
	return (
		<div className='h-[4000px] w-screen overflow-hidden'>
			<div className='flex '>
				<div className='w-1/3 my-36 ml-[20vw] z-40 '>
					<SlideIn>
						<Link href='/mendocino-spirits'>
							<button>
								<h3 className='text-5xl font-bold my-auto text-left z-30'>
									Mendocino Spirits
								</h3>
								<h4 className='text-lg text-left z-30'>
									Branding, Package Design, Web Design,{' '}
								</h4>
							</button>
						</Link>
					</SlideIn>
				</div>
				<FadeIn>
					<motion.button className='w-[50%vw] pr-6 '>
						<Link href='/mendocino-spirits'>
						
								<Image
									
									layout='intrinsic'
									width='600'
									height='600'
									alt='Mendocino Spirits'
									quality='100'
									src='ar_1:1,bo_0px_solid_rgb:ffffff,c_fill,co_rgb:ffffff,fl_alpha.preserve_transparency,g_auto,o_100,r_max,w_600/v1616447175/Color%20Mill%20Design/mendocino-spirits-cover_tzgrip.jpg'
								/>
						
						</Link>
					</motion.button>
				</FadeIn>
				<div className='absolute top-[1300px] '>
					<HexGrid className='z-0' />
				</div>
				<svg
					className='absolute top-[550px]'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 1200 2200'>
					<motion.path
						style={{ pathLength }}
						fill='none'
						stroke='#27aae1'
						strokeMiterlimit='10'
						strokeWidth='3px'
						d='M1200,25.2h-159.5c-5.3,0-9.5,4.3-9.5,9.5v330.9c0,5.3-4.3,9.5-9.5,9.5H878c-5.3,0-9.5-4.3-9.5-9.5v-44.7
	c0-5.3-4.3-9.5-9.5-9.5H585.3c-5.3,0-9.5,4.3-9.5,9.5V717c0,5.3-4.3,9.5-9.5,9.5H293.8c-5.3,0-9.5,4.3-9.5,9.5v396.7
	c0,6.4,5.2,11.5,11.5,11.5h208.6c6.4,0,11.5-5.2,11.5-11.5V892c0-6.4-5.2-11.5-11.5-11.5H184.6c-6.4,0-11.5,5.2-11.5,11.5v582.2
	c0,6.4,5.2,11.5,11.5,11.5h588.2c6.4,0,11.5,5.2,11.5,11.5v114.5c0,6.4,5.2,11.5,11.5,11.5h229.6c6.4,0,11.5,5.2,11.5,11.5v523
	c0,6.4-5.2,11.5-11.5,11.5H768.2c-6.4,0-11.5-5.2-11.5-11.5v-86.2c0-6.4,5.2-11.5,11.5-11.5h135.5c6.4,0,11.5,5.2,11.5,11.5v175.7
	c0,6.4-5.2,11.5-11.5,11.5H285.9c-6.4,0-11.5,5.2-11.5,11.5v562.2'
					/>
				</svg>
			</div>
		</div>
	)
}
