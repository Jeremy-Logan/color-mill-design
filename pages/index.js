import Head from 'next/head'
import {useEffect} from 'react'
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
    if (window.instgrm)
        window.instgrm.Embeds.process();
    }, [instagramPosts.id]);
	
	const token = process.env.IG_TOKEN
	const { scrollYProgress } = useViewportScroll()
	const yRange = useTransform(scrollYProgress, [0, 1.5], [0, 1])
	const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 })
	return (
		<div className='overflow-hidden'>
			<Head>
				<title>Color Mill Design</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='overflow-hidden '>
				<div className='md:top-80 px-8 md:pl-24 lg:pl-36 w-screen md:w-[70vw] lg:w-[60vw] z-0 mt-36 h-[400px] md:h-[600px] '>
					<h1 className='text-2xl md:text-5xl lg:text-6xl font-serif font-bold md:leading-loose'>
						Designing delightful branding and web experiences.
					</h1>
					<h2 className='hidden md:block text-lg md:text-xl lg:text-2xl leading-relaxed mt-12'>
						We are a branding and web design studio in <br />{' '}
						Mendocino County, California and Portland, Oregon.
						<br /> We use design and creative thinking to help
						businesses tell their story.
					</h2>
					<h2 className=' text-lg mt-4 md:hidden'>
						We are a branding and web design studio in Mendocino
						County, California and Portland, Oregon. We use design
						and creative thinking to help businesses tell their
						story.
					</h2>
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
				<div>
					<MendocinoSpiritsSection />
					<FoodBankSection />
					<CapabilitiesSection />
					<SlideIn>
							<h3 className='text-5xl font-bold mt-36 mb-12 z-20 mx-[15vw]'>
								From Instagram
							</h3>
						</SlideIn>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6 w-screen px-12'>
						{instagramPosts.map((post) => (
							<div className=' flex flex-col relative -mb-24'>
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
		</div>
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
