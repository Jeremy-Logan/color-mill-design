import Layout from '../components/layout.js'
import { useEffect } from 'react'
// import Instagram from 'instagram-web-api'
import MendocinoSpiritsSection from '@components/mendocinoSpiritsSection'
import FoodBankSection from '@components/foodBankSection'
import CapabilitiesSection from '@components/capabilitiesSection'
import { instagramPosts } from '../lib/instagramPosts.js'
import { useInView } from 'react-intersection-observer'
import {
	motion,
	useViewportScroll,
	useTransform,
	useSpring,
	useAnimation,
} from 'framer-motion'

const posts = [
	'CNvS8bOruNQ',
	'CKXn_6mL-ND',
	'CJuPZ-RLmnb',
	'CJFR10IrLet',
	'CGk5SF7haOQ',
	'CGBNL8uhBRy',
	'CK4WciCLWzs',
]
const post = 'CNvS8bOruNQ'
const instagramUrl = 'https://www.instagram.com/p/' + post

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

export default function Home({ data }) {
	useEffect(() => {
		if (window.instgrm) window.instgrm.Embeds.process()
	}, [instagramPosts.id])

	const token = process.env.IG_TOKEN
	const { scrollYProgress } = useViewportScroll()
	const yRange = useTransform(scrollYProgress, [0, 1], [0, 1])
	const pathLength = useSpring(yRange, { stiffness: 400, damping: 80 })
	return (
		<>
			<Layout
				pageTitle='Home'
				description='Designing delightful branding and custom web experiences. We use design and creative thinking to help businesses tell their story.'>
				<main className='overflow-hidden '>
					{/* <svg
					className='absolute top-[550px]'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 1200 3800'>
					<motion.path
						style={{ pathLength }}
						fill='none'
						stroke='#27aae1'
						strokeMiterlimit='10'
						strokeWidth='3px'
						d="M1200,25.2H1040.5a9.5,9.5,0,0,0-9.5,9.5V365.6a9.5,9.5,0,0,1-9.5,9.5H878a9.5,9.5,0,0,1-9.5-9.5V320.9a9.5,9.5,0,0,0-9.5-9.5H585.3a9.5,9.5,0,0,0-9.5,9.5V717a9.5,9.5,0,0,1-9.5,9.5H293.8a9.5,9.5,0,0,0-9.5,9.5v396.7a11.5,11.5,0,0,0,11.5,11.5H504.4a11.5,11.5,0,0,0,11.5-11.5V892a11.5,11.5,0,0,0-11.5-11.5H184.6A11.5,11.5,0,0,0,173.1,892v582.2a11.5,11.5,0,0,0,11.5,11.5H772.8a11.5,11.5,0,0,1,11.5,11.5v114.5a11.5,11.5,0,0,0,11.5,11.5h229.6a11.5,11.5,0,0,1,11.5,11.5v523a11.5,11.5,0,0,1-11.5,11.5H768.2a11.5,11.5,0,0,1-11.5-11.5v-86.2a11.5,11.5,0,0,1,11.5-11.5H903.7a11.5,11.5,0,0,1,11.5,11.5v175.7a11.5,11.5,0,0,1-11.5,11.5H285.9a11.5,11.5,0,0,0-11.5,11.5v240.51s-3,16.05,14,16.05H580.89c8.2,0,14.84,4,14.84,13v7.92c0,15.21,6.64,14.31,14.83,14.31h625.19a14.83,14.83,0,0,1,14.83,14.83v741.4a14.83,14.83,0,0,1-14.83,14.83H456.42c-10.13,0-14.83,3.74-14.83,10.56s5.65,10.23,14.83,10.23H585.17c8.19,0,14.83,4.7,14.83,12.08V4518.61"/></svg>
				 */}
					<div className='px-8 md:pl-24 xl:pl-48 lg:pl-36 w-screen md:w-[70vw] xl:w-[70vw] 2xl:w-[70vw] z-0 mb-12 mt-36 sm:mt-24 h-full xl:mb-48 '>
						<h1 className='text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl font-serif font-bold '>
							Designing delightful branding and custom web
							experiences.
						</h1>
						<h2 className=' md:block text-lg md:text-xl lg:text-2xl 2xl:text-3xl leading-relaxed mt-4 md:mt-12'>
							We use design and creative thinking to help
							businesses tell their story.
						</h2>
					</div>
					<div>
						<MendocinoSpiritsSection />
						<FoodBankSection />
						<CapabilitiesSection />
						<SlideIn>
							<h3 className='text-5xl font-bold mt-36 mb-12 z-20 mx-[15vw]'>
								See us on Instagram...
							</h3>
						</SlideIn>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-screen px-12'>
							{instagramPosts.map((post) => (
								<div
									key={post.id}
									className=' flex flex-col relative -mb-24'>
									<div className='bg-white z-50 absolute top-0 w-screen h-14' />
									<div
										className='z-0'
										key={post.id}
										dangerouslySetInnerHTML={{
											__html: post.post,
										}}></div>
									<div className='bg-white z-50 absolute bottom-0 w-screen h-[170px]' />
								</div>
							))}
						</div>
					</div>
				</main>
			</Layout>
		</>
	)
}

export async function getStaticProps(context) {
	const username = process.env.IG_USERNAME
	const token = process.env.IG_TOKEN

	// request photos for a specific instagram user
	const res = await fetch(
		`https://graph.facebook.com/v10.0/instagram_oembed?url=https://www.instagram.com/p/CNvS8bOruNQ/&access_token=${token}`
	)

	const data = await res.json()

	if (!data) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			data,
		},
	}
}
