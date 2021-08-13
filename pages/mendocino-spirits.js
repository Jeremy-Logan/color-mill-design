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
	const paletteColors = [
		'#077893',
		'#E68242',
		'#57A89B',
		'#A6A36D',
		'#F3C268',
		'#552919',
		'#8E513A',
		'#BF8D53',
		'#22150c',
		'#f4e3c5',
	]

	const PaletteSection = ({ color }) => {
		return (
			<div className='w-[10%] flex flex-col justify-center '>
				<div
					className={`bg-[${color}] text-black text-lg text-center py-2`}>
					{color}
				</div>
				<div
					className={`bg-[${color}]  opacity-75 h-10 text-center py-2`}
				/>
				<div
					className={`bg-[${color}]  opacity-50 h-10 text-center py-2`}
				/>
				<div
					className={`bg-[${color}]  opacity-25 h-10 text-center py-2`}
				/>
				<div
					className={`bg-[${color}]  opacity-10 h-10 text-center py-2`}
				/>
			</div>
		)
	}
	return (
		<div>
			<Head>
				<title>Color Mill Design | Mendocino Spirits</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='mt-24'>
				<section className='mx-[25vw]'>
					<h1 className=' text-6xl font-serif font-bold mb-12'>
						Mendocino Spirits
					</h1>

					<p className='text-3xl mb-24 leading-relaxed'>
						Mendocino Spirits makes amazing bourbon. And gin. And
						rye. And... the list is growing. When we met Crispin and
						Tamar, they were fearlessly forging their own way after
						decades of working with others. We wanted their new
						brand to shine-- to reflect the glorious amber liquid in
						the bottles and represent the rich personalities of
						their offerings.
					</p>
					<h2 className=' text-5xl font-serif italic text-gray-500'>
						Mendocino Spirits is quality, integrity and excellence.
					</h2>
				</section>
				<section className='mx-[20vw] mt-36'>
					<div className='bg-[hsl(38,72%,89%)] h-[60vh] flex justify-center'>
						<div className='relative h-full w-5/12 '>
							<Image
								src='c_scale,fl_sanitize,q_100,w_1280/v1628797580/Color%20Mill%20Design/mendocinoSpiritsLogo.svg'
								layout='fill'
								objectFit='contain'
								quality='100'
							/>
						</div>
					</div>
				</section>
				<section className='mx-[25vw] mt-36'>
					<h3 className=' text-4xl font-serif font-bold mb-12'>
						Our Approach
					</h3>
					<div className='flex'>
						<p className='text-2xl mb-24 pr-12'>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore
							eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia
							deserunt mollit anim id est laborum.
						</p>
						<p className='text-2xl mb-24 '>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore
							eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia
							deserunt mollit anim id est laborum.
						</p>
					</div>
				</section>

				<section className='mx-[25vw] mt-36'>
					<h3 className=' text-4xl font-serif font-bold mb-12'>
						The Stylescape
					</h3>
					<p className='text-3xl mb-24 leading-relaxed'>
						We begin all new branding projects by developing a
						stylescape-an exploration of visual elements that ground
						the brand in a mood blah, blah, blah...
					</p>
				</section>
				<div className='relative w-screen h-[40vh] '>
					<Image
						src='v1618251531/Color%20Mill%20Design/Mendocino-Spirits-Stylescape.jpg'
						layout='fill'
						objectFit='none'
					/>
				</div>
				<section className='mx-[25vw] mt-36'>
					<h2 className='text-6xl font-serif italic text-gray-500 mb-6'>
						"This is where a big testimonial from the customer will
						go."
					</h2>
					<p className='text-2xl mb-24 leading-relaxed text-center'>
						-Customer's name and company name
					</p>
				</section>
				<section className='mx-[25vw] mt-36'>
					<div className='bg-[#077893] h-[40vh] flex justify-center py-20 px-10'>
						<div className='w-1/2 mx-16'>
							<h3 className='text-white text-7xl font-alice mb-8'>
								Alice
							</h3>
							<h4 className=' text-white text-4xl leading-relaxed tracking-wide font-alice'>
								Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp
								Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
							</h4>
						</div>
						<div className='w-1/2 mx-16'>
							<h3 className='text-white text-6xl font-fira mb-8'>
								Fira Sans
							</h3>
							<h4 className=' text-white text-4xl leading-relaxed tracking-wide font-fira'>
								Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp
								Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
							</h4>
						</div>
					</div>
					<div className='flex h-36 bg-white '>
						{paletteColors && paletteColors.map((color, index) => (
							<PaletteSection color={color} key={index} />
						))}
					</div>
				</section>
				<section className=' mt-36 bg-[#bfddda] xl:py-24 py-8'>
					<div className='grid grid-cols-2 xl:grid-cols-5 gap-8 xl:gap-2 xl:mx-[15vw] mx-8 justify-items-center'>
						<div className='hidden xl:block relative h-[50vh] w-[15vw]'>
							<Image
								src='v1628809912/Color%20Mill%20Design/ginLabelSketch01_mc4oyy.jpg'
								layout='fill'
								objectFit='contain'
								quality='100'
							/>
						</div>

						<div className=' relative h-[25vh] w-[40vw] xl:w-[15vw] xl:h-[50vh]'>
							<Image
								src='v1628809913/Color%20Mill%20Design/ginLabelSketch03_dubyul.jpg'
								layout='fill'
								objectFit='contain'
								quality='100'
							/>
						</div>
						<div className=' relative h-[25vh] w-[40vw] xl:w-[15vw] xl:h-[50vh]'>
							<Image
								src='v1628879665/Color%20Mill%20Design/ginLabelSketch04_digxmu.jpg'
								layout='fill'
								objectFit='contain'
								quality='100'
							/>
						</div>
						<div className=' relative h-[25vh] w-[40vw] xl:w-[15vw] xl:h-[50vh]'>
							<Image
								src='v1628879856/Color%20Mill%20Design/ginLabelSketch05_on58rp.jpg'
								layout='fill'
								objectFit='contain'
								quality='100'
							/>
						</div>
						<div className=' relative h-[25vh] w-[42vw] xl:w-[17vw] xl:h-[50vh]'>
							<Image
								src='v1628809909/Color%20Mill%20Design/ginLabelFinal.jpg'
								layout='fill'
								objectFit='contain'
								quality='100'
							/>
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}
