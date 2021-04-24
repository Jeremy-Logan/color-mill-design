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
	return (
		<div className='h-[1000px] w-screen overflow-hidden z-30'>
			
				<div className='flex '>
					<div className='w-1/3 my-36 ml-[20vw] z-20 '>
						<SlideIn>
							<Link href='/mendocino-spirits'>
								<button>
									<h3 className='text-5xl font-bold my-auto text-left z-20'>
										Mendocino Spirits
									</h3>
									<h4 className='text-lg text-left z-30 mt-2'>
										Branding, Package Design, Web Design,{' '}
									</h4>
								</button>
							</Link>
						</SlideIn>
					</div>
					<FadeIn>
						<motion.button className='w-[50%vw] pr-6 focus:outline-none'>
							<Link href='/mendocino-spirits'>
								<Image
									layout='intrinsic'
									width='600'
									height='600'
									alt='Mendocino Spirits'
									quality={100}
									src='ar_1:1,bo_0px_solid_rgb:ffffff,c_fill,co_rgb:ffffff,fl_alpha.preserve_transparency,g_auto,o_100,r_max,w_600/v1616447175/Color%20Mill%20Design/mendocino-spirits-cover_tzgrip.jpg'
								/>
							</Link>
						</motion.button>
					</FadeIn>
					<div className='absolute top-[1200px] '>
						<HexGrid className='z-0' />
					</div>
					
				</div>
			
		</div>
	)
}
