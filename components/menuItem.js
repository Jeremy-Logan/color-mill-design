import { motion } from 'framer-motion'
import Link from 'next/link'

export const MenuItem = ({ i }) => {
	const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF']
	const rotate = [0.001, 15, 30, 46, 60]
	const links = ['/', '/about', '/contact', '/news', '/']
	const names = ['Home', 'About', 'Contact', 'News', '']
	const menuLink = `${links[i]}`
	const menuName = `${names[i]}`
	const variants = {
		open: {
			rotate: rotate[i],
			y: 0,
			scaleX: 1,
			opacity: 1,
			transition: {
				y: { stiffness: 1000, velocity: 100 },
			},
		},
		closed: {
			rotate: 0,
			width: 0,
			scaleX: [1, 0],
			opacity: 0,
			transition: {
				y: { stiffness: 1000 },
			},
		},
	}

	return (
		<motion.li variants={variants}>
			<motion.div
				className='absolute md:w-[180vw] w-[300vw] h-[800px] transform origin-top-left z-10 overflow-hidden'
				style={{ backgroundColor: `${colors[i]}` }}>
				{' '}
				<h2 className='text-white pl-48 lg:pl-16 text-4xl m:pl-0 xl:text-8xl lg:text-7xl md:text-6xl ml-[40vw] mt-0 xl:mt-[1.5vw] lg:mt-2 md:mt-2 transform rotate-6 origin-left font-bold transition duration-300 ease-in-out transform hover:scale-110'>
					<Link href={menuLink}>{menuName}</Link>
				</h2>
			</motion.div>
		</motion.li>
	)
}
