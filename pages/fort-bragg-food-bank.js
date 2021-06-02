import Head from 'next/head'
import Image from 'next/image'
import {
	motion,
	useAnimation,
	useViewportScroll,
	useTransform,
	useSpring,
} from 'framer-motion'

export default function MendocinoSpirits() {
	return (
		<>
			<Head>
				<title>Color Mill Design | Fort Bragg Food Bank</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<section className='px-[5vw] mt-24 h-[180vh] '>
					<div className='w-screen ml-12'>
						<motion.h2
							animate={{ x: [-70, 0], opacity: [0.2, 1] }}
							className='font-serif text-6xl text-[#23160c]'>
							Fort Bragg Food Bank
						</motion.h2>
						<motion.svg
							height='6'
							width='500'
							className='mt-6'
							animate={{ x: [-100, 0], opacity: [0.2, 1] }}>
							<line
								x1='0'
								y1='0'
								x2='500'
								y2='0'
								style={{ stroke: '#23160c', strokeWidth: 5 }}
							/>
						</motion.svg>
					</div>
					<div className='relative mt-16'>
						<motion.div
							className='absolute h-auto p-16 ml-12 top-40 left-0 w-1/2 bg-[#1c3c79] z-20'
							animate={{ y: [600, 0], opacity: [0, 1] }}>
							<h3 className='text-white'>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in
								reprehenderit in voluptate velit esse cillum
								dolore eu fugiat nulla pariatur. Excepteur sint
								occaecat cupidatat non proident, sunt in culpa
								qui officia deserunt mollit anim id est laborum.
							</h3>
						</motion.div>
						<motion.div
							className='absolute ml-[25vw] top-0 right-0 z-10'
							animate={{
								x: [500, 0],
								opacity: [0, 1],
								scale: [0.8, 1],
							}}>
							<Image
								src='v1616447180/Color Mill Design/food-bank-cover_adu1gk.jpg'
								layout='intrinsic'
								width='1920'
								height='1280'
								alt='Fort Bragg Food Bank Newsletter'
								quality='100'></Image>
						</motion.div>
						<div className='absolute top-[600px] bg-[#018ea9] h-[150vh] w-screen -ml-24 z-0'></div>
						<div className='absolute h-[auto] p-16 ml-12 top-[700px] left-0 w-1/2 bg-[#5b2c89] z-30 '>
							<h4 className='font-fira text-4xl text-white'>
								Website
							</h4>
							<h5 className='font-sans text-2xl text-white pr-36'>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in
								reprehenderit in voluptate velit esse cillum
								dolore eu fugiat nulla pariatur. Excepteur sint
								occaecat cupidatat non proident, sunt in culpa
								qui officia deserunt mollit anim id est laborum.
							</h5>
						</div>
                        <div className='flex flex-row z-50 absolute left-[40%] top-[900px]'>
                        <div className='w-1/2 m-16'>
							<Image
								src='v1619467473/Color%20Mill%20Design/Food-Bank-Website-Page-01_pnbtck.jpg'
								layout='intrinsic'
								width='1228'
								height='3200'
								alt='Fort Bragg Food Bank Webpage 1'
								quality='100'
							/>
						</div>
						<div className='w-1/2 pt-32'>
							<Image
								src='v1619467472/Color%20Mill%20Design/Food-Bank-Website-Page-02_nqucig.jpg'
								layout='intrinsic'
								width='1134'
								height='3200'
								alt='Fort Bragg Food Bank Webpage 1'
								quality='100'
							/>
						</div><div className='h-[150vh] bg-black'></div></div>
					</div>
				</section>
                <section></section>
				
			</main>
		</>
	)
}
