import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import {
	motion,
	useAnimation,
	useViewportScroll,
    AnimateSharedLayout,
	useTransform,
	useSpring,
} from 'framer-motion'
import CapabilitiesCard from './capabilitiesCard'

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

export default function CapabilitiesSection() {
    
	return (
		<>
			<div className='w-screen z-30'>
				<div className='flex '>
					<div className='w-screen mx-[20vw] z-20'>
						<SlideIn>
							<h3 className='text-5xl font-bold my-36 z-20 '>
								Our Capabilities
							</h3>
						</SlideIn>
                        <AnimateSharedLayout>
						<ul className='grid grid-cols-3 gap-12 text-2xl '>
							<CapabilitiesCard
								title='Creative Web Design'
								description='Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.'
							/>
							<CapabilitiesCard
								title='Brand Strategy'
								description='Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.'
							/>
							<CapabilitiesCard
								title='Print Design'
								description='Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.'
							/>
							<CapabilitiesCard
								title='Web Development'
								description='Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.'
							/>
							<CapabilitiesCard
								title='Marketing'
								description='Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.'
							/>
							
							<CapabilitiesCard
								title='E-Commerce'
								description='Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.'
							/>
						</ul></AnimateSharedLayout>
						<SlideIn>
							<h3 className='text-5xl font-bold my-36 z-20'>
								Our Approach
							</h3>
						</SlideIn>
					</div>
				</div>
			</div>
		</>
	)
}
