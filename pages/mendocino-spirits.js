import Head from 'next/head'
import Image from 'next/image'
import {
	motion,
	useAnimation,
	useViewportScroll,
	useTransform,
	useSpring,
} from 'framer-motion'

const paletteColors = [
	{ bg: '#077893', text: 'white' },
	{ bg: '#E68242', text: 'white' },
	{ bg: '#57A89B', text: 'white' },
	{ bg: '#A6A36D', text: 'white' },
	{ bg: '#F3C268', text: '#22150c' },
	{ bg: '#552919', text: 'white' },
	{ bg: '#8E513A', text: 'white' },
	{ bg: '#BF8D53', text: 'white' },
	{ bg: '#22150c', text: 'white' },
	{ bg: '#F4E3C5', text: '#22150c' },
]

const PaletteSection = ({ color, text }) => {
	return (
		<div className='w-[10%] flex flex-col justify-center h-48'>
			<div
				style={{ backgroundColor: `${color}`, color: `${text}` }}
				className={`text-md text-center py-2`}>
				{color}
			</div>
			<div
				style={{ backgroundColor: `${color}` }}
				className='opacity-80 h-full'
			/>
			<div
				style={{ backgroundColor: `${color}` }}
				className='opacity-60 h-full'
			/>
			<div
				style={{ backgroundColor: `${color}` }}
				className='opacity-40 h-full'
			/>
			<div
				style={{ backgroundColor: `${color}` }}
				className='opacity-20 h-full'
			/>
		</div>
	)
}

export default function MendocinoSpirits() {
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

					<p className='text-2xl mb-24 leading-relaxed'>
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
					<div className='bg-[#f4e8da] h-[60vh] flex justify-center'>
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
				<section className='mx-[25vw] my-36 '>
					<h2 className='text-6xl font-serif italic text-gray-500 mb-6'>
						"This is where a big testimonial from the customer will
						go."
					</h2>
					<p className='text-2xl mb-24 leading-relaxed text-center'>
						-Customer's name and company name
					</p>
				</section>
				<section className='xl:mx-[25vw] lg:mx-[10vw] md:mx-[5vw]'>
					<div className='bg-[#077893] flex justify-center py-20 md:px-10 sm:px-2'>
						<div className='w-1/2 md:mx-16 xs:mx-6'>
							<h3 className='text-white xl:text-7xl lg:text-5xl sm:text-3xl font-alice mb-8'>
								Alice
							</h3>
							<h4 className=' text-white xl:text-3xl lg:text-2xl sm:text-lg leading-relaxed tracking-wide font-alice'>
								Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp
								Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
							</h4>
						</div>
						<div className='w-1/2 md:mx-16 xs:mx-6'>
							<h3 className='text-white xl:text-6xl lg:text-4xl sm:text-2xl font-fira mb-8'>
								Fira Sans
							</h3>
							<h4 className=' text-white xl:text-3xl lg:text-2xl sm:text-lg leading-relaxed tracking-wide font-fira'>
								Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp
								Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
							</h4>
						</div>
					</div>
					<div className='flex h-36 bg-white'>
						{paletteColors.map((color, index) => (
							<PaletteSection
								color={color.bg}
								key={index}
								text={color.text}
							/>
						))}
					</div>
				</section>
				<section className='mt-60 mx-[25vw]'>
				<h3 className=' text-4xl font-serif font-bold mb-12'>
						Designing the Logo
					</h3>
					<p className='text-3xl mb-24 leading-relaxed'>
						Write something insightful about the logo design process
						here... Lorem ipsum dolor sit amet, consectetur adipiscing
						elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis
						nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat.{' '}
					</p>
				</section>
				<section className='bg-[#f4e3c5] w-screen my-36 py-20'>
					<div className='relative h-[70vh] mx-[25vw]'>
						<Image
							src='v1628892703/Color%20Mill%20Design/mendocino-spirits-logo-comp_tztjbh.jpg'
							layout='fill'
							objectFit='contain'
						/>
					</div>
				</section>
				<section className='mx-[25vw] my-36 '>
					<h2 className='text-6xl font-serif italic text-gray-500 mb-6'>
						"Big statement about our design philosophy"
					</h2>
				</section>
				<section className=' mt-48 bg-[#bfddda] xl:py-24 py-8'>
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
