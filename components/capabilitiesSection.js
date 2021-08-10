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
	const [ref, inView] = useInView({ delay: 500 })

	useEffect(() => {
		inView ? controls.start('visible') : controls.start('nil')
	}, [controls, inView])

	return (
		<motion.div
			className='z-30 '
			ref={ref}
			animate={controls}
			initial='hidden'
			variants={{
				visible: { opacity: 1, x: 1, transition: { delay: 0.25 } },
				hidden: { opacity: 0, x: -100 },
			}}>
			{children}
		</motion.div>
	)
}

const stagger = {
	visible: {
		opacity: 1,
		y: 1,
		transition: { type: 'spring', duration: 0.5 },
	},
	hidden: { opacity: 0, y: 100 },
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
			transition={{ staggerChildren: 0.1, delay: 1.25 }}>
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
							<h3 className='text-5xl font-bold z-20 '>
								Our Capabilities
							</h3>
							<h4 className='text-2xl mt-8 mb-24 z-20 '>
								Crafting beautiful and inspired work for
								businesses we believe in.
							</h4>
						</SlideIn>
						<AnimateSharedLayout>
							<ul><SlideIn>
								<CapabilitiesCard
									title='Web Design and Development'
									description={
										<div>
											<p className='text-2xl '>
												Clean, engaging websites. Always
												custom, never from templates.
											</p>
											<br />
											<p>
												We do all of our coding by hand
												to ensure that your website is
												unique to you and doesn't force
												your vision into someone else's
												pre-made idea. Using cutting
												edge technology our websites are
												lightning fast, never rely on
												third party plug-ins, require
												virtually zero monthly
												maintenance, and avoid the
												security pitfalls and constant
												updating of some of the more
												common site builders.
											</p>
											<br />
											<p>
												All of our websites are
												accessible, SEO friendly and
												responsive.{' '}
											</p>
										</div>
									}
								/></SlideIn>
								<SlideIn><CapabilitiesCard
									title='Branding'
									description={
										<div>
											<p className='text-2xl '>
												A brand is much more than just a
												logo. A brand is a promise.
											</p>
											<br />
											<p>
												It promises to inspire customers
												and insight emotion. It's a
												promise to your customers that
												they can expect a consistent
												experience every time. Customers
												form a deep attachment to your
												brand when you keep your brand
												promise, consistently, time
												after time.
											</p>
											<br />
											<p>
												We guide you through the process
												of finding your voice, your
												brand and that emotional hook
												that will keep people coming
												back.
											</p>
										</div>
									}
								/></SlideIn>
								<SlideIn><CapabilitiesCard
									title='Graphic Design'
									description={
										<div>
											<p className='text-2xl '>
												If the brand inspires, the
												design brings inspiration to
												life.{' '}
											</p>
											<br />
											<p>
												We believe design has the power
												to grow your brand by telling
												and expanding your story and
												engaging your audience.{' '}
											</p>
											<br />
											<p>
												We specialize in design for
												print: collateral, packaging,
												labels, promotions and
												marketing. Our design always
												keeps the user in mind, is clean
												and readable, never cluttered.
											</p>
										</div>
									}
								/></SlideIn>
								<SlideIn><CapabilitiesCard
									title='Messaging'
									description={
										<div>
											<p className='text-2xl '>
												Good messaging makes your brand
												relatable.{' '}
											</p>
											<br />
											<p>
												Headlines that demand attention,
												copy that entices customers to
												want to know more and words that
												build on your brand promise.
												Messaging is just as important
												as a logo when it comes to your
												brand expression. It leads the
												conversation about who you are
												and how you want people to see
												you. It guides your readers and
												compliments the visuals to round
												out your full picture.
											</p>
											<br />
											<p>
												From website menus and
												descriptions to headlines on
												your printed collateral, we
												create content that gets you
												more attention, customers and
												conversions.{' '}
											</p>
										</div>
									}
								/></SlideIn>
							</ul>
						</AnimateSharedLayout>
						<SlideIn>
							<h3 className='text-5xl font-bold my-24 z-20'>
								Our Approach
							</h3>
						</SlideIn>
						<SlideUp>
							<div className='flex flex-row justify-between mb-12 mx-[10vw]'>
								<motion.h4
									variants={stagger}
									className=' text-3xl text-[#2fa7d9] mb-8'>
									Discover.
								</motion.h4>{' '}
								<motion.img
									variants={stagger}
									className='transform scale-125 -mt-6 center'
									src='/arrows-BlueToOrange.svg'
								/>
								<motion.h4
									variants={stagger}
									className=' text-3xl text-[#FF7A2E] mb-8'>
									Define.
								</motion.h4>
								<motion.img
									variants={stagger}
									className='transform scale-125 -mt-6 center'
									src='/arrows-OrangeToRed.svg'
								/>
								<motion.h4
									variants={stagger}
									className=' text-3xl text-[#FF006A] mb-8'>
									Do.
								</motion.h4>
								<motion.img
									variants={stagger}
									className='transform scale-125 -mt-6 center'
									src='/arrows-RedToGreen.svg'
								/>
								<motion.h4
									variants={stagger}
									className=' text-3xl text-[#41c71f] mb-8'>
									Deliver!
								</motion.h4>
							</div>
						</SlideUp>
						<SlideUp>
							<div className='grid gap-12 grid-cols-2'>
								<motion.p
									variants={stagger}
									className='mb-2 mx-24 p-10 shadow-md bg-[#f0f8ff]'>
									<h4 className='font-bold text-xl text-[#2fa7d9] mb-2'>
										Discover:
									</h4>{' '}
									This is the part where we get to know you.
									We ask questions to get at the heart of your
									business and start to define what it is that
									makes your business special.
								</motion.p>
								<motion.p
									variants={stagger}
									className='mb-2 mx-24 p-10 shadow-md bg-[#fcf7f1]'>
									<h4 className='font-bold text-xl text-[#FF7A2E] mb-2'>
										Define:
									</h4>
									We put the user at the center of everything
									we create: prioritizing their needs,
									defining the scope with them in mind,
									choosing the project direction and details
									based on what will work for them and for
									your business.
								</motion.p>
								<motion.p
									variants={stagger}
									className='mb-2 mx-24 p-10 shadow-md bg-[#fdf3f7]'>
									<h4 className='font-bold text-xl text-[#FF006A] mb-2'>
										Do:
									</h4>
									We get to work! You may not hear from us for
									a while in this stage. We have collected and
									defined, now we get down to the execution.
									Along the way, we will check in with you to
									make sure we’re still on the right track.
									Once we all agree it’s ready for the
									consumer’s hands, we...
								</motion.p>
								<motion.p
									variants={stagger}
									className='mb-2 mx-24 p-10 shadow-md bg-[#f0fff2]'>
									<h4 className='font-bold text-xl text-[#41c71f] mb-2'>
										Deliver!:
									</h4>
									The product is done and out in the world!
								</motion.p>
							</div>
						</SlideUp>
					</div>
				</div>
			</div>
		</>
	)
}
