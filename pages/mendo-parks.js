import Layout from '../components/layout'
import Image from 'next/image'
import { useHorizontalScroll } from '../components/hooks/useHorizontalScroll'

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
		<div className='md:w-1/5 w-full'>
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

export default function MendParks() {
	const scrollRef = useHorizontalScroll()
	return (
		<>
			<Layout
				pageTitle='Mendo Parks'
				description='As the leading non-profit supporting California State Parks in Mendocino County, MendoParks contributes financial support, additional hands, and innovative ideas to all projects they undertake. Their partnership with State Parks ensures the longevity and accessibility of the many green spaces in the county.'>
				<main className='lg:mt-24 mt-36  '>
					<section className='mx-[5vw] lg:mx-[25vw]'>
						<h1 className='text-4xl xl:text-6xl font-serif font-bold mb-12'>
							Mendo Parks
						</h1>
						<h2 className='text-3xl xl:text-5xl font-serif italic text-gray-500 mb-12'>
							We believe in our parks.
						</h2>
						<p className='sm:text-lg xl:text-xl xl:mb-24 leading-relaxed'>
							As the leading non-profit supporting California
							State Parks in Mendocino County, MendoParks
							contributes financial support, additional hands, and
							innovative ideas to all projects they undertake.
							Their partnership with State Parks ensures the
							longevity and accessibility of the many green spaces
							in the county. The nonprofit world is highly
							competitive; organizations compete for donor dollars
							and support. MendoParks needed something that would
							get people’s attention and educate them about what
							the organization stands for. They knew that once
							their mission was shared with the community, people
							would rally their support. But first, they needed a
							brand that would evoke the emotions they feel while
							enjoying the parks: that nature inspires well-being,
							calm and tranquility. To feel the beauty of the
							earth and lose yourself in it.
						</p>
					</section>

					<section className='mx-[5vw] 2xl:mx-[10vw] mt-12 xl:mt-36'>
						<h3 className='text-2xl xl:text-4xl font-serif font-bold mb-4 mt-4 sm:mt-0 xl:mb-12 '>
							Nature inspires well-being.
						</h3>
						<p className='sm:text-lg xl:text-xl mb-24 xl:pr-12 text-justify'>
							MendoParks is all about preserving our beautiful
							natural spaces: on land and sea. The color palette
							draws on the turquoise ocean waves, dark redwood
							boughs and the cool forest floor. Including spirited
							images of families along with people of all ages
							enjoying the parks was essential to instill the
							sense of community and openness that can be found in
							the parks.
						</p>
					</section>
					<div className='overflow-auto mb-12'>
						<div className='relative w-[3000px] h-[700px]  '>
							<Image
								src='v1657063423/Color%20Mill%20Design/MendoParks-Stylescape-Web_ca37xu.jpg'
								layout='fill'
								alt='stylescape'
								objectFit='contain'
								placeholder='blur'
								blurDataURL='https://res.cloudinary.com/the-color-mill/image/upload/t_placeholder/v1657063423/Color%20Mill%20Design/MendoParks-Stylescape-Web_ca37xu.jpg'
							/>
						</div>
					</div>
					<section className='mx-[5vw] 2xl:mx-[20vw] mt-36'>
						<div className='flex flex-col md:flex-row'>
							<div className='relative w-[90vw] h-[90vw] md:w-1/2 md:hidden'>
								<Image
									src='v1628892703/Color%20Mill%20Design/mendocino-spirits-logo-comp_tztjbh.jpg'
									layout='fill'
									alt='Logo comp'
									objectFit='contain'
									placeholder='blur'
									blurDataURL='https://res.cloudinary.com/the-color-mill/image/upload/t_placeholder/v1628892703/Color%20Mill%20Design/mendocino-spirits-logo-comp_tztjbh.jpg'
								/>
							</div>
							<div className='md:w-1/2'>
								<h3 className='text-2xl xl:text-4xl font-serif font-bold mb-2 mt-4 sm:mt-0 xl:mb-12 '>
									Culmination of spirit
								</h3>
								<p className='sm:text-lg xl:text-xl mb-24 pr-12 text-justify'>
									The logo was distilled from the essences of
									the stylescape, Art Nouveau illustrations,
									and a desire to establish Mendocino Spirits
									as a premium product: all while maintaining
									a link to old-world traditions. <br />
									<br />
									Swirling grains and a distinct font choice
									subtly hint at the Art Nouveau style without
									restricting the brand to only that narrow
									style. The blue evokes images of blue sky
									above wheat fields, while the copper not
									only represents the grains the spirits are
									made of, but also the copper stills the
									spirits spend much of their lives in.
								</p>
							</div>
							<div className='relative w-full md:w-1/2 hidden md:block'>
								<Image
									src='v1628892703/Color%20Mill%20Design/mendocino-spirits-logo-comp_tztjbh.jpg'
									layout='fill'
									alt='Logo comp'
									objectFit='contain'
									placeholder='blur'
									blurDataURL='https://res.cloudinary.com/the-color-mill/image/upload/t_placeholder/v1628892703/Color%20Mill%20Design/mendocino-spirits-logo-comp_tztjbh.jpg'
								/>
							</div>
						</div>
					</section>
					

					
				</main>
			</Layout>
		</>
	)
}
