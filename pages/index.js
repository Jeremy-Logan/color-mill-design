import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import {
	motion,
	useViewportScroll,
	useTransform,
	useSpring,
} from 'framer-motion'

export default function Home() {
	const { scrollYProgress } = useViewportScroll()
	const yRange = useTransform(scrollYProgress, [0, 1], [0, 1])
	const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 })

	return (
		<div>
			<Head>
				<title>Color Mill Design</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='overflow-hidden'>
				<Header />
				{console.log()}
				<div className='absolute top-60 mx-[12vw] w-[40vw] z-0 '>
					<h1 className='text-6xl font-serif font-bold leading-normal'>
						Designing delightful branding and web experiences.
					</h1>
					<h2 className='text-2xl leading-relaxed mt-12'>
						We are a branding and web design studio in Mendocino
						County, California and Portland, Oregon.
						<br /> We use design and creative thinking to help
						businesses tell their story.
					</h2>
				</div>
				<div className='h-[4000px]'>
        <img
						className='absolute w-[30vw] right-1/4 z-30'
						src='https://res.cloudinary.com/the-color-mill/image/upload/ar_1:1,bo_0px_solid_rgb:ffffff,c_fill,co_rgb:ffffff,fl_alpha.preserve_transparency,g_auto,o_100,r_max,w_1000/v1616447175/Color%20Mill%20Design/mendocino-spirits-cover_tzgrip.jpg'
					/>
					<svg
						className='absolute top-[500px]'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 1200 2200'
						>
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
			</main>

			<Footer />
		</div>
	)
}
