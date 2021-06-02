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
	const [ref, inView] = useInView({ delay: 500})

	useEffect(() => {
		inView ? controls.start('visible') : controls.start('hidden')
	}, [controls, inView])

	return (
		<motion.div
			className='z-30 '
			ref={ref}
			animate={controls}
			initial='hidden'
			
			variants={{
				visible: { opacity: 1, x: 1, transition:{delay: 0.25} },
				hidden: { opacity: 0, x: -100 },
			}}
			>
			{children}
		</motion.div>
	)
}

const stagger = {
			
			visible: { opacity: 1, y: 1 , transition:{ type: 'spring', duration: 0.5 }},
			hidden: { opacity: 0, y: 100,  },
			
}

const SlideUp = ({ children }) => {
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
			transition={{ staggerChildren: 0.1, delay: 1.25}}
			>
			{children}
		</motion.div>
	)
}

export default function CapabilitiesSection() {
	return (
		<>
			<div className='w-screen z-30'>
				<div className='flex '>
					<div className='w-screen mx-[15vw] z-20'>
						<SlideIn>
							<h3 className='text-5xl font-bold mt-36 z-20 '>
								Our Capabilities
							</h3>
							<h4 className='text-2xl mt-8 mb-24 z-20 '>
								We love crafting beautiful, smart and inspired
								work for businesses we believe in.
							</h4>
						</SlideIn>
						<AnimateSharedLayout>
							<ul className='grid grid-cols-4 gap-12 text-2xl '>
								<CapabilitiesCard
									title='Strategy'
									description={
										<ul className='text-left '>
											<li>Strategy</li>
											<li>Discovery and Research</li>
											<li>User Experience </li>
											<li>Brand Strategy</li>
											<li>Architecture Positioning</li>
											<li>Content strategy</li>
										</ul>
									}
								/>
								<CapabilitiesCard
									title='Branding'
									description={
										<ul className='text-left '>
											<li>Brand Development</li>
											<li>Rebranding</li>
											<li>Logo & ID systems </li>
											<li>Brand style guides</li>
											<li>Collateral</li>
											<li>Print and Packaging</li>
											<li>Iconography</li>
										</ul>
									}
								/>
								<CapabilitiesCard
									title='Digital Development'
									description={
										<ul className='text-left '>
											<li>
												Website Design & Development
											</li>
											<li>UX/UI</li>
											<li>Information Architecture</li>
											<li>Prototypes & Wireframing</li>
											<li>
												Custom Content Management
												Systems
											</li>
											<li>
												Progressive Web Applications
											</li>
										</ul>
									}
								/>
								<CapabilitiesCard
									title='Content Production'
									description={
										<ul className='text-left '>
											<li>Copywriting</li>
											<li>Storyboarding</li>
											<li>Illustration</li>
											<li>Animation</li>
										</ul>
									}
								/>
							</ul>
						</AnimateSharedLayout>
						<SlideIn>
							<h3 className='text-5xl font-bold my-24 z-20'>
								Our Approach
							</h3></SlideIn>
							<SlideUp>
							<div className='flex flex-row justify-between mb-12 mx-[10vw]'>
								<motion.h4 variants={stagger} className=' text-3xl text-[#2fa7d9] mb-8'>
									Discover.
								</motion.h4> <motion.img variants={stagger} className='transform scale-125 -mt-6 center' src='/arrows-BlueToOrange.svg'/>
								<motion.h4 variants={stagger} className=' text-3xl text-[#FF7A2E] mb-8'>
									Define. 
								</motion.h4><motion.img variants={stagger} className='transform scale-125 -mt-6 center' src='/arrows-OrangeToRed.svg'/>
								<motion.h4 variants={stagger} className=' text-3xl text-[#FF006A] mb-8'>
									Do. 
								</motion.h4><motion.img variants={stagger} className='transform scale-125 -mt-6 center' src='/arrows-RedToGreen.svg'/>
								<motion.h4 variants={stagger} className=' text-3xl text-[#41c71f] mb-8'>
									Deliver!
								</motion.h4>
							</div></SlideUp>
							<SlideUp>
							<div className='grid gap-12 grid-cols-2'>
							<motion.p variants={stagger} className='mb-2 mx-24 p-10 shadow-md bg-[#f0f8ff]'>
								<h4 className='font-bold text-xl text-[#2fa7d9]'>Discover:</h4>{' '}
								This is the part where we get to know you. We
								ask questions to get at the heart of your
								business and start to define what it is that
								makes your business special.
							</motion.p>
							<motion.p variants={stagger} className='mb-2 mx-24 p-10 shadow-md bg-[#fcf7f1]'>
								<h4 className='font-bold text-xl text-[#FF7A2E]'>Define:</h4>We
								put the user at the center of everything we
								create: prioritizing their needs, defining the
								scope with them in mind, choosing the project
								direction and details based on what will work
								for them and for your business.
							</motion.p>
							<motion.p variants={stagger} className='mb-2 mx-24 p-10 shadow-md bg-[#fdf3f7]'>
								<h4 className='font-bold text-xl text-[#FF006A]'>Do:</h4>We get
								to work! You may not hear from us for a while in
								this stage. We have collected and defined, now
								we get down to the execution. Along the way, we
								will check in with you to make sure we’re still
								on the right track. Once we all agree it’s ready
								for the consumer’s hands, we...
							</motion.p>
							<motion.p variants={stagger} className='mb-2 mx-24 p-10 shadow-md bg-[#f0fff2]'>
								<h4 className='font-bold text-xl text-[#41c71f]'>Deliver!:</h4>
								The product is done and out in the world!
							</motion.p>
						</div></SlideUp>
					</div>
				</div>
			</div>
		</>
	)
}
