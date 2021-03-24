import {
	motion,
	useViewportScroll,
	useTransform,
	useSpring,
} from 'framer-motion'
import HexGrid from '@components/hexGrid'

export default function MendocinoSpirits() {
	const { scrollYProgress } = useViewportScroll()
	const yRange = useTransform(scrollYProgress, [0, 1], [0, 1])

	const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 })
	return (
		<div className='h-[4000px] w-screen overflow-hidden'>
			<div className='flex '>
				<div className='w-1/3 my-auto ml-[20vw]'>
					<h3 className='text-5xl font-bold my-auto text-left '>
						Mendocino Spirits
					</h3>
					<h4 className='text-lg text-left'>
						Branding, Package Design, Web Design,{' '}
					</h4>
				</div>
				<motion.img
					transition={{ duration: 0.5, type:'spring' }}
					initial={{ opacity: 0.5, scale: 0.75 }}
					animate={{ opacity: 1, scale: 1 }}
					className=' h-[600px] z-30 mr-[20vw]'
					src='https://res.cloudinary.com/the-color-mill/image/upload/ar_1:1,bo_0px_solid_rgb:ffffff,c_fill,co_rgb:ffffff,fl_alpha.preserve_transparency,g_auto,o_100,r_max,w_1000/v1616447175/Color%20Mill%20Design/mendocino-spirits-cover_tzgrip.jpg'
				/>
				<div className='absolute top-[1300px] '>
					<HexGrid />
				</div>
				<svg
					className='absolute top-[550px]'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 1200 2200'>
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
		</div>
	)
}
