import Head from 'next/head'
import Image from 'next/image'

export default function MendocinoSpirits() {
	return (
		<div className='overflow-hidden'>
			<Head>
				<title>Color Mill Design - Mendocino Spirits</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<div className='overflow-hidden absolute top-60 pl-[10vw] flex w-screen'>
					<div className='relative flex flex-col w-1/3 z-10'>
						<h2 className='font-alice text-6xl'>
							Mendocino Spirits
						</h2>
						<p className='font-fira mt-12'>
							"Lorem ipsum dolor sit amet, consectetur adipiscing
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
					<div className='w-2/3 -mt-24 z-0'>
						<Image
							layout='responsive'
							width='1500'
							height='1200'
							objectFit='contain'
							alt='Mendocino Spirits'
							src='c_crop,w_2340/v1617056140/Color%20Mill%20Design/mendocino-spirits-bottles_cur8m5.jpg'
						/>
					</div>
				</div>
			</main>
		</div>
	)
}
