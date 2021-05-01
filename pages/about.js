import Head from 'next/head'
import Image from 'next/image'
import {
	motion,
	useViewportScroll,
	useTransform,
	useSpring,
} from 'framer-motion'

export default function About() {
	const { scrollYProgress } = useViewportScroll()
	const rotateRange1 = useTransform(scrollYProgress, [0, 0.2], [0, 10])
	const heightRange1 = useTransform(
		scrollYProgress,
		[0, 0.2],
		['200px', '600px']
	)
	const rotateRange2 = useTransform(scrollYProgress, [0.3, 0.5], [0, -8])
	const heightRange2 = useTransform(
		scrollYProgress,
		[0.3, 0.5],
		['200px', '600px']
	)

	return (
		<div>
			<Head>
				<title>Color Mill Design | About</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<section className='mt-36 mx-[15vw] overflow-hidden'>
					<h1 className='font-serif font-bold text-6xl '>About Us</h1>
					<h2 className='text-lg md:text-xl lg:text-2xl leading-relaxed mt-12 '>
						A team of escapees from the corporate world who decided
						that the forests of entrepreneurship seemed incredibly
						more rewarding than the daily grind. Our priorities lie
						in helping businesses tell their story, creating things
						that make people go Wow!, and using our unique blend of
						talents to bring ideas to life.
						<br />
						<br /> We value conversations over texts, creativity
						over blandness, martinis over water, and structure over
						chaos. We are small enough to be personally involved
						with every one of our clients and nimble enough to
						deliver what we say we will.{' '}
					</h2>
				</section>
				<section className='overflow-hidden flex flex-col h-[400vh]'>
					<div className='w-screen bg-white h-96 z-30 relative'>
						<div className='absolute flex flex-row top-[550px] w-screen z-50'>
							<div className='w-2/12'></div>
							<div className='w-5/12 pl-36 p-36 mt-24'>
								{' '}
								<h2 className='font-bold text-3xl mb-2'>
									Aspen Logan <h3 className='text-xl mt-2'>CEO</h3> 
								</h2>
								<h3 className='text-md leading-7'>
									Aspen is a project manager, writer, a Myers
									Briggs certified extrovert and a Canadian.
									After spending some time as a digital
									artist, she found her calling nearly 20
									years ago as a software producer, managing
									video games for companies like Disney,
									Warner Brothers, Pixar and Dreamworks.
									Aspen’s personality made project management
									a natural fit-- she gets energized by
									talking with people and thrives in a
									structured, carefully planned environment.
									She also understands the creative process
									and therefore knows how to coax artists and
									coders to be creative on her schedule.
									<br />
									<br />
									“I write only when inspiration strikes.
									Fortunately it strikes every morning at nine
									o'clock sharp.” ― W Somerset Maugham
								</h3>
							</div>
							<div className='w-3/12'>
								<Image
									src='c_scale,h_1200,w_800/v1619826510/Color%20Mill%20Design/Aspen-portrait.jpg'
									height={473}
									width={315}
									layout='intrinsic'
									className=' z-50'></Image>
							</div>

							<div className='w-2/12'></div>
						</div>
					</div>
					<motion.div
						style={{
							transformOrigin: '0% 0%',
							rotate: rotateRange1,
							height: heightRange1,
						}}
						className='w-[150vw] bg-[indigo] -mt-96 z-0'></motion.div>
					<div className='h-[600px] bg-transparent'></div>
					<div className='w-screen bg-white h-96 z-30 relative'>
						<div className='absolute flex flex-row top-[550px] w-screen z-50'>
							<div className='w-2/12'></div>
							<div className='w-3/12 pl-36'>
								<Image
									src='c_scale,h_1200,w_800/v1619826510/Color%20Mill%20Design/Jeremy-portrait.jpg'
									height={473}
									width={315}
									layout='intrinsic'
									className=' z-50'></Image>
							</div>
							<div className='w-5/12 pl-36 p-36 mt-24'>
								{' '}
								<h2 className='font-bold text-3xl mb-2'>
									Jeremy Logan<h3 className='text-xl mt-2'> Creative Director and CFO</h3>
								</h2>
								<h3 className='text-md leading-7'>
									Jeremy is a fine art oil painter, animator
									and coder. He spent 20 years in software,
									animating AAA video games before
									transitioning his creative skills to design.
									He has an innate sense of curiosity which
									has allowed him to simultaneously master
									coding and create beautifully intricate
									illustrations. Jeremy is an expert in
									front-end web development and oversees all
									creative projects. He has shaped the Color
									Mill into what it is today by bringing a
									relentless design sense, an unwavering drive
									to push creative boundaries and a gift for
									imagining the unimaginable.
									<br />
									<br />
									“To be an artist means never to avert one's
									eyes.” ― Akira Kurosawa
								</h3>
							</div>
						</div>
					</div>
					<motion.div
						style={{
							transformOrigin: '100% 0%',
							rotate: rotateRange2,
							height: heightRange2,
						}}
						className='transform -ml-96 w-[150vw] bg-[cyan] -mt-96  z-0'></motion.div>
				</section>
			</main>
		</div>
	)
}
