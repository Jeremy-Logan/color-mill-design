import Head from 'next/head'
import Image from 'next/image'
import { useHorizontalScroll } from '../components/hooks/useHorizontalScroll'
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
		<div className='w-1/5'>
			<div className='flex flex-col justify-center h-48'>
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
		</div>
	)
}

export default function MendocinoSpirits() {
	const scrollRef = useHorizontalScroll()
	return (
		<div>
			<Head>
				<title>Color Mill Design | Mendocino Spirits</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='mt-24 '>
				<section className='mx-[25vw]'>
					<h1 className=' text-6xl font-serif font-bold mb-20'>
						Mendocino Spirits
					</h1>
					<h2 className=' text-5xl font-serif italic text-gray-500 mb-12'>
						Quality. Integrity. Excellence.
					</h2>
					<p className='sm:text-lg xl:text-xl mb-24 leading-relaxed'>
						Mendocino Spirits is a delicious mix of old world
						traditions and constant innovation. They use ancient
						casks, rare botanicals and sparkling copper stills to
						produce their spirits. In such a competitive market-
						when people choose their drink based on the label then
						discover something fantastic waiting inside- we wanted
						to ensure that their brand was as unique and inspiring
						as the product itself. And that it would entice new
						customers and old to pick their bottle off the shelf. We
						had been stalking Mendocino Spirits for years-- showing
						up to their whiskey dinners, going to tastings, becoming
						super fans of their work-- so we were thrilled when they
						asked us to do their branding.
					</p>
				</section>

				<section className='mx-[5vw] 2xl:mx-[20vw] mt-36'>
					<div className='flex flex-col md:flex-row'>
						<div className='relative w-[90vw] h-[90vw] md:w-1/2 md:hidden'>
							<Image
								src='v1638557076/Color%20Mill%20Design/4-bottles_kvoqtt.jpg'
								layout='fill'
								objectFit='contain'
							/>
						</div>
						<div className='md:w-1/2'>
							<h3 className='text-2xl xl:text-4xl font-serif font-bold mb-2 mt-4 sm:mt-0 xl:mb-12 '>
								The Seasons of Mendo
							</h3>
							<p className='sm:text-lg xl:text-xl mb-24 pr-12 text-justify'>
								Owners Tamar Kaye and Crispin Cain came to us in
								the early stages of their company’s life wanting
								a label that would stand out from the crowd- to
								be so different that it couldn't be ignored.{' '}
								<br />
								<br />
								We started with a vague notion that the brand
								should be Art Nouveau inspired, feminine feeling
								and embody the local Mendocino County,
								California area. This lead us to create a
								quartet of bottles: Bourbon, Aged Gin, Rye and
								Dry Gin. Each label was illustrated by hand and
								its subject matter carefully chosen to reflect
								the spirits inside.
							</p>
						</div>
						<div className='relative w-full md:w-1/2 hidden md:block '>
							<Image
								src='v1638557076/Color%20Mill%20Design/4-bottles_kvoqtt.jpg'
								layout='fill'
								objectFit='contain'
							/>
						</div>
					</div>
				</section>
				{/* <section className='md:mx-[20vw] mt-36 '>
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
				</section> */}

				<section className='mx-[25vw] mt-36'>
					<h3 className=' text-4xl font-serif font-bold mb-12'>
						Identity
					</h3>
					<p className='sm:text-lg xl:text-xl mb-8 leading-relaxed'>
						Inspiration for the stylescape was drawn from the
						established Art Nouveau direction and the colors of deep
						golden grains, the bright copper still and of course,
						the amber liquid inside the bottles. We wanted to evoke
						thoughts of sitting in a velvet parlor chair, sipping a
						glass of the warming, spicy, smooth whiskey.
					</p>
				</section>
				<div className='overflow-auto '>
					<div className='relative w-[3000px] h-[700px]  '>
						<Image
							src='v1618251531/Color%20Mill%20Design/Mendocino-Spirits-Stylescape.jpg'
							layout='fill'
							objectFit='contain'
						/>
					</div>
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
				<section className='mx-[5vw] 2xl:mx-[20vw] mt-36'>
					<div className='flex flex-col md:flex-row'>
						<div className='relative w-[90vw] h-[90vw] md:w-1/2 md:hidden'>
							<Image
								src='v1628892703/Color%20Mill%20Design/mendocino-spirits-logo-comp_tztjbh.jpg'
								layout='fill'
								objectFit='contain'
							/>
						</div>
						<div className='md:w-1/2'>
							<h3 className='text-2xl xl:text-4xl font-serif font-bold mb-2 mt-4 sm:mt-0 xl:mb-12 '>
								Logo
							</h3>
							<p className='sm:text-lg xl:text-xl mb-24 pr-12 text-justify'>
								The logo was distilled from the essences of the
								stylescape, Art Nouveau illustrations, and a
								desire to establish Mendocino Spirits as a
								premium product: all while maintaining a link to
								old-world traditions. <br />
								<br />
								Swirling grains and a distinct font choice
								subtly hint at the Art Nouveau style without
								restricting the brand to only that narrow style.
								The blue evokes images of blue sky above wheat
								fields, while the copper not only represents the
								grains the spirits are made of, but also the
								copper stills the spirits spend much of their
								lives in.
							</p>
						</div>
						<div className='relative w-full md:w-1/2 hidden md:block'>
							<Image
								src='v1628892703/Color%20Mill%20Design/mendocino-spirits-logo-comp_tztjbh.jpg'
								layout='fill'
								objectFit='contain'
							/>
						</div>
					</div>
				</section>
				<section className='mx-[5vw] 2xl:mx-[20vw] my-36'>
					<h3 className='text-3xl xl:text-4xl font-serif font-bold mb-12 mt-4 sm:mt-0 xl:mb-12 '>
						Typography and Palette
					</h3>
					<div className='flex flex-col md:flex-row'>
						<div className='md:w-1/2'>
							<h3 className='text-black xl:text-5xl lg:text-5xl text-3xl font-alice mb-2'>
								Alice{'  '}
								<span className='font-sans text-xl'>
									(headings)
								</span>
							</h3>
							<p className='text-black sm:text-xl xl:text-3xl leading-relaxed tracking-wide font-alice'>
								Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp
								Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
							</p>
							<h3 className='text-black xl:text-4xl lg:text-5xl text-3xl font-fira mt-8 mb-4'>
								Fira Sans{'  '}
								<span className='font-sans text-xl'>
									(body)
								</span>
							</h3>
							<p className='text-black sm:text-xl xl:text-xl leading-relaxed tracking-wide font-fira'>
								Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp
								Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
							</p>
						</div>
						<div className='md:w-1/2 flex-col '>
							<div className='flex bg-white ml-12 shadow-2xl'>
								{paletteColors
									.slice(0, 5)
									.map((color, index) => (
										<PaletteSection
											color={color.bg}
											key={index}
											text={color.text}
										/>
									))}
							</div>
							<div className='flex bg-white ml-12 shadow-2xl'>
								{paletteColors.slice(5).map((color, index) => (
									<PaletteSection
										color={color.bg}
										key={index}
										text={color.text}
									/>
								))}
							</div>
						</div>
					</div>
				</section>

				<section className='mx-[5vw] 2xl:mx-[10vw] mt-48 '>
					<div className='flex flex-col md:flex-row w-full' style={{height: '1400px'}}>
						<div className='w-full md:w-1/2 flex flex-col place-content-start'>
							<h3 className='text-2xl xl:text-4xl font-serif font-bold mb-2 mt-4 sm:mt-0 xl:mb-12'>
								Selling to the whole world (or close to it)
							</h3>
							<p className='sm:text-lg xl:text-xl mb-24 pr-12 text-justify'>
								Mendocino Spirits are true artists, but until
								now their brand has not been as well known as
								some of their colleagues. The new website was
								designed to reposition them as a top-shelf
								brand, elevating their unique spirits and
								creating a far reaching brand that can be
								discovered and experienced throughout the
								county, country and globe. <br/> <br/>The integration of a
								strong ecommerce platform allows them to sell
								and ship their spirits nationally. As many
								people view websites on their mobile devices, we
								designed the site across both mobile and desktop
								ensuring a great experience no matter where it’s
								viewed.
							</p>
						</div>
						<div className='flex w-full md:w-1/2 '>
						<div className='relative w-1/2 md:w-1/2 ml-10 '>
							<Image
								src='v1638656091/Color%20Mill%20Design/MS-Home-Page-Shadow_lz7f6z.jpg'
								layout='fill'
								objectFit='contain'
								
							/>
						</div>
						<div className='relative w-1/2 md:w-1/2 '>
							<Image
								src='v1638815347/Color%20Mill%20Design/MS-Product-Page-Shadow_f3ojfo.jpg'
								layout='fill'
								objectFit='contain'
							/>
						</div></div>
					</div>
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
