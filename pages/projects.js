import Layout from '../components/layout'
import MendocinoSpiritsSection from '@components/mendocinoSpiritsSection'
import FoodBankSection from '@components/foodBankSection'

export default function Projects() {
	return (
		<>
			<Layout pageTitle='Projects' currentURL='https://www.colormilldesign.com/projects' description='Selected current and past projects.'>
			
				<main className='overflow-hidden '>
					<div className='md:top-80 px-8 md:pl-24 lg:pl-36 w-screen md:w-[70vw] lg:w-[60vw] z-0 mt-36 h-[600px] '>
						<h1 className='text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-loose'>
							Projects
						</h1>
						
					</div>
					<MendocinoSpiritsSection />
					<FoodBankSection />
				</main>
			</Layout>
		</>
	)
}
