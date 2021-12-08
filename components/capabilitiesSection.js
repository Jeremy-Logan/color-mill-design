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
			<div className='w-screen z-30 mt-12'>
				<div className='flex '>
					<div className='w-screen mx-8 2xl:mx-[15vw] z-20'>
						<SlideIn>
							<h3 className='text-4xl lg:text-5xl font-bold z-20 mb-24'>
								What we do
							</h3>
						</SlideIn>
						<AnimateSharedLayout>
							<ul>
								<SlideIn>
									<CapabilitiesCard
										title='Web Design and Development'
										description={
											<div>
												<p className='text-2xl font-semibold'>
													Always custom, never from
													templates.
												</p>
												<br />
												<p>
													Our designs are always fully
													custom and hand coded, we
													never force your vision into
													someone else's pre-made box.
													Using cutting edge
													technology, our websites
													are: lightning fast,
													inherently secure and
													require virtually zero
													monthly maintenance.
												</p>
											</div>
										}
									/>
								</SlideIn>
								<SlideIn>
									<CapabilitiesCard
										title='Branding'
										description={
											<div>
												<p className='text-2xl font-semibold'>
													Your brand is your promise.
												</p>
												<br />
												<p>
													A brand is much more than
													just a logo: it promises to
													inspire customers, insight
													emotion and keep them coming
													back. We guide you through
													the process of finding your
													voice, your style and that
													emotional hook that will
													have people coming back time
													and again.
												</p>
											</div>
										}
									/>
								</SlideIn>
								<SlideIn>
									<CapabilitiesCard
										title='Graphic Design'
										description={
											<div>
												<p className='text-2xl font-semibold'>
													Design brings inspiration to
													life.
												</p>
												<br />
												<p>
													Great design helps you grow
													your brand by telling your
													story and engaging your
													audience. Always user
													centric, our design is
													clean, on-brand and
													inspiring. We specialize in
													design for collateral,
													packaging, labels,
													promotions and marketing.
												</p>
											</div>
										}
									/>
								</SlideIn>
								<SlideIn>
									<CapabilitiesCard
										title='Messaging'
										description={
											<div>
												<p className='text-2xl font-semibold'>
													Great messaging makes your
													brand relatable.
												</p>
												<br />
												<p>
													Your messaging leads the
													conversation about who you
													are and how you want people
													to perceive your
													organization. It compliments
													the brand visuals and
													creates a whole, cohesive
													and consistent feeling. From
													website copy to headlines on
													your printed collateral, we
													create content that gets you
													more attention, customers
													and conversions.
												</p>
											</div>
										}
									/>
								</SlideIn>
							</ul>
						</AnimateSharedLayout>
						<SlideIn>
							<h3 className='text-3xl lg:text-5xl font-bold mt-24 mb-8 z-20'>
								How We Work
							</h3>
						</SlideIn>
						<SlideUp>
							<div className='flex flex-col md:flex-row justify-between mb-12 mx-[10vw]'>
								<motion.h4
									variants={stagger}
									className='text-2xl md:text-3xl text-[#2fa7d9] mb-8'>
									Discover.
								</motion.h4>{' '}
								<motion.img
									variants={stagger}
									className='hidden md:block transform scale-125 -mt-6 center'
									src='/arrows-BlueToOrange.svg'
								/>
								<motion.h4
									variants={stagger}
									className='text-2xl md:text-3xl text-[#FF7A2E] mb-8'>
									Define.
								</motion.h4>
								<motion.img
									variants={stagger}
									className='hidden md:block transform scale-125 -mt-6 center'
									src='/arrows-OrangeToRed.svg'
								/>
								<motion.h4
									variants={stagger}
									className='text-2xl md:text-3xl text-[#FF006A] mb-8'>
									Do.
								</motion.h4>
								<motion.img
									variants={stagger}
									className='hidden md:block transform scale-125 -mt-6 center'
									src='/arrows-RedToGreen.svg'
								/>
								<motion.h4
									variants={stagger}
									className='text-2xl md:text-3xl text-[#41c71f] mb-8'>
									Deliver!
								</motion.h4>
							</div>
						</SlideUp>
						<SlideUp>
							<div className='grid gap-6 grid-cols-1 lg:grid-cols-2'>
								<motion.p
									variants={stagger}
									className='mb-2   p-10 shadow-md bg-[#f0f8ff]'>
									<h4 className='font-bold text-xl text-[#2fa7d9] mb-2'>
										Discover:
									</h4>{' '}
									We start with an in‑depth discovery phase to
									immerse ourselves in your business. What we
									get from this is an action plan on executing
									a holistic brand and user experience.
								</motion.p>
								<motion.p
									variants={stagger}
									className='mb-2  p-10 shadow-md bg-[#fcf7f1]'>
									<h4 className='font-bold text-xl text-[#FF7A2E] mb-2'>
										Define:
									</h4>
									Based on the discovery & research results,
									we create a static prototype that will allow
									you to see the aesthetics and flow before we
									start production—this lets us make changes
									easily before we start programming.
								</motion.p>
								<motion.p
									variants={stagger}
									className='mb-2 p-10 shadow-md bg-[#fdf3f7]'>
									<h4 className='font-bold text-xl text-[#FF006A] mb-2'>
										Do:
									</h4>
									Our full‑stack design and development team
									provides front‑end and back‑end development
									services working closely with our graphic
									designers. This ensures the websites we
									create are completely custom, easy to use,
									look great, and represent your brand in the
									best way possible.
								</motion.p>
								<motion.p
									variants={stagger}
									className='mb-2  p-10 shadow-md bg-[#f0fff2]'>
									<h4 className='font-bold text-xl text-[#41c71f] mb-2'>
										Deliver!:
									</h4>
									Once we have everything designed and
									functioning perfectly, we check it again. In
									this phase, we do thorough quality testing
									on the site. Once any issues have been
									addressed, we then launch the site to the
									public.
								</motion.p>
							</div>
						</SlideUp>
					</div>
				</div>
			</div>
		</>
	)
}
