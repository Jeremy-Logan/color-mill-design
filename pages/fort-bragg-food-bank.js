import Layout from '../components/layout'
import Image from 'next/image'
import { useHorizontalScroll } from '../components/hooks/useHorizontalScroll'
import {
	motion,
	useAnimation,
	useViewportScroll,
	useTransform,
	useSpring,
} from 'framer-motion'

export default function FortBraggFoodBank() {
	const scrollRef = useHorizontalScroll()
	return (
		<>
			<Layout pageTitle='Fort Bragg Food Bank' description='Established in 1979, Fort Bragg Food Bank has been
						taking care of the community for many years. When they approached
						us to update their brand and redesign their website, we
						knew we had to create a vibrant bright look that would
						reflect their mission.'>
			<main className='lg:mt-24 mt-36 '>
				<section className='mx-[5vw] lg:mx-[25vw]'>
					<h1 className='text-4xl xl:text-6xl font-serif font-bold mb-12'>
						Fort Bragg Food Bank
					</h1>
					<h2 className='text-3xl xl:text-5xl font-serif italic text-gray-500 mb-12'>
						People coming together to create hope for an abundant
						life for everyone.
					</h2>
					<p className='sm:text-lg xl:text-xl xl:mb-24 leading-relaxed'>
						Established in 1979, Fort Bragg Food Bank has been
						taking care of the community for many years. They offer
						hope and health to those in need and shine a light on
						food insecurity in our community. When they approached
						us to update their brand and redesign their website, we
						knew we had to create a vibrant bright look that would
						reflect this mission.
					</p>
				</section>

				{/* <section className='mx-[5vw] 2xl:mx-[20vw] mt-36'>
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
				</section> */}
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
				<section className='mx-[5vw] 2xl:mx-[10vw] mt-12 xl:mt-36'>
					<div className='flex flex-col md:flex-row'>
						<div className='relative w-[90vw] h-[90vw] md:w-1/2 md:hidden'>
							<Image
								src='v1638817822/Color%20Mill%20Design/Food-Bank-before-after_fvfsq1.jpg'
								layout='fill'
								objectFit='contain'
								placeholder='blur'
								blurDataURL='https://res.cloudinary.com/the-color-mill/image/upload/t_placeholder/v1638817822/Color%20Mill%20Design/Food-Bank-before-after_fvfsq1.jpg'
							/>
						</div>
						<div className='w-full md:w-1/2'>
							<h3 className='text-2xl xl:text-4xl font-serif font-bold mb-4 mt-4 sm:mt-0 xl:mb-12 '>
								How do you build a new brand around an existing
								logo?
							</h3>
							<p className='sm:text-lg xl:text-xl mb-24 xl:pr-12 text-justify'>
								Along with bright new leadership, facility
								upgrades, new delivery vans and an expanded
								staff, FBFB was ready for an upgrade to their
								brand. Their logo, established around the
								organization’s conception, is steadfast and very
								recognizable. It’s a legacy they want to
								maintain. So how do we build a brand that
								radiates vibrancy and progress around a B&W logo
								created in the 80s? We create a palette of
								bright painterly colors and watercolor textures,
								adding splashes of color to everything:
								accentuating the intricate line work of the pen
								and ink drawing while also expressing their
								vibrant new direction.
							</p>
						</div>
						<div className='relative w-full md:w-1/2 hidden md:block'>
							<Image
								src='v1638817822/Color%20Mill%20Design/Food-Bank-before-after_fvfsq1.jpg'
								layout='fill'
								objectFit='contain'
								placeholder='blur'
								blurDataURL='https://res.cloudinary.com/the-color-mill/image/upload/t_placeholder/v1638817822/Color%20Mill%20Design/Food-Bank-before-after_fvfsq1.jpg'
							/>
						</div>
					</div>
				</section>

				{/* <div className='overflow-auto '>
					<div className='relative w-[3000px] h-[700px]  '>
						<Image
							src='v1618251531/Color%20Mill%20Design/Mendocino-Spirits-Stylescape.jpg'
							layout='fill'
							objectFit='contain'
						/>
					</div>
				</div> */}
				<section className='mx-[15vw] xl:my-36 mb-4 xl:mb-24'>
					<h2 className='text-3xl xl:text-5xl font-serif italic text-gray-500 mb-6'>
						"The Color Mill's work increased donations and added
						vibrancy to our entire organization."
					</h2>
					<p className='text-lg xl:text-2xl  leading-relaxed text-center'>
						Amanda Friscia - Executive Director, Fort Bragg Food
						Bank
					</p>
				</section>
				<section className='mx-[5vw] 2xl:mx-[10vw] xl:mt-36'>
					<div className='flex flex-col md:flex-row'>
						<div className='relative w-[90vw] h-[90vw] md:hidden'>
							<Image
								src='v1616447180/Color%20Mill%20Design/food-bank-cover_adu1gk.jpg'
								layout='fill'
								objectFit='contain'
								placeholder='blur'
								blurDataURL='https://res.cloudinary.com/the-color-mill/image/upload/t_placeholder/v1616447180/Color%20Mill%20Design/food-bank-cover_adu1gk.jpg'
							/>
						</div>
						<div className='md:w-1/2 w-full'>
							<h3 className='text-2xl xl:text-4xl font-serif font-bold mb-2 mt-4 sm:mt-0 xl:mb-12 '>
								Expressing a message of inspiration.
							</h3>
							<p className='sm:text-lg xl:text-xl mb-24 xl:pr-12 text-justify'>
								The design of the Food Bank’s newsletters needed
								to appeal to donors and potential donors while
								also creating a lasting impression for the
								months between publications. Merging elements of
								the brand’s new strategy with their bright
								visual identity helped express their message of
								openness, vibrancy and inspiring the community.
								This created a publication that is inspiring,
								easy to digest and inviting. The infographics
								show off the organization’s accomplishments and
								help the potential donor see the possibilities
								and the achievements of the organization. <br />
								<br />
								With the first issue of the newsletter came
								praise from donors saying the new look changed
								the entire feeling of the Food Bank-- it felt
								more vibrant and happier than ever before. The
								newly designed newsletter has also increased
								donations by over 100%, year over year. This,
								along with a newly designed services brochure,
								stickers, magnets and staff business cards
								rounds out the Food Bank's brand and delivers a
								consistent message in everything they do.
							</p>
						</div>
						<div className='relative w-full md:w-1/2 hidden md:block'>
							<Image
								src='v1616447180/Color%20Mill%20Design/food-bank-cover_adu1gk.jpg'
								layout='fill'
								objectFit='contain'
								placeholder='blur'
								blurDataURL='https://res.cloudinary.com/the-color-mill/image/upload/t_placeholder/v1616447180/Color%20Mill%20Design/food-bank-cover_adu1gk.jpg'
							/>
						</div>
					</div>
				</section>
				{/* <section className='mx-[5vw] 2xl:mx-[20vw] my-36'>
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
				</section> */}

				<section className='mx-[5vw] 2xl:mx-[10vw] mt-48 '>
					<div className='flex flex-col lg:flex-row w-full'>
						<div className='w-full lg:w-5/12 flex flex-col '>
							<h3 className='text-2xl xl:text-4xl font-serif font-bold mb-2 mt-4 sm:mt-0 xl:mb-12'>
								Information delivered beautifully.
							</h3>
							<p className='text-sm xl:text-xl xl:pr-12 text-justify'>
								Our goal was to create a site that embodied the
								brightness and inspiring nature of the
								organization, while also creating a site that
								could be easily updated and maintained by their
								busy team. The result is a colorful, well
								organized platform that captures and
								demonstrates the Food Bank’s mission of being a
								helpful community resource. <br /> <br />
								When it came to designing the site and
								establishing the overall look and flow, we used
								the existing site as a loose guide to help us
								understand what was important to the customers--
								and what wasn’t working. We introduced a bright
								color palette paired with custom photography
								that was created specifically for the website.
								This allowed for very targeted and appropriate
								content that fit seamlessly into the design.
								Through this effort, we were able to redefine
								the look and feel of the brand and also make
								resources and information available and easily
								accessible to the Food Bank’s clients.
							</p>
						</div>
						<a
							href='https://www.fortbraggfoodbank.org'
							alt='Fort Bragg Food Bank'
							target='_blank'
							rel='noopener noreferrer'>
							<div className='flex flex-row mx-auto w-full h-[40vh] lg:h-[90vh] lg:w-[55vw] content-start mt-12 lg:mt-0'>
								<div className='relative w-1/2 lg:ml-10'>
									<Image
										src='v1638815894/Color%20Mill%20Design/Food-Bank-Website-Page-01-Shadow-01_xvkupd.jpg'
										layout='fill'
										objectFit='contain'
										placeholder='blur'
										blurDataURL='https://res.cloudinary.com/the-color-mill/image/upload/t_placeholder/v1638815894/Color%20Mill%20Design/Food-Bank-Website-Page-01-Shadow-01_xvkupd.jpg'
									/>
								</div>
								<div className='relative w-1/2 '>
									<Image
										src='v1638815892/Color%20Mill%20Design/Food-Bank-Website-Page-02-Shadow-01_rttial.jpg'
										layout='fill'
										objectFit='contain'
										placeholder='blur'
										blurDataURL='https://res.cloudinary.com/the-color-mill/image/upload/t_placeholder/v1638815892/Color%20Mill%20Design/Food-Bank-Website-Page-02-Shadow-01_rttial.jpg'
									/>
								</div>
							</div>
						</a>
					</div>
				</section>
			</main></Layout>
		</>
	)
}
