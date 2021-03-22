import { motion } from 'framer-motion'
import Link from 'next/link'

export const MenuItem = ({ i }) => {
	const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF']
	const rotate = [6, 21, 36, 51, 66]
	const links = ['/about', '/case-studies', '/#contact', '/news']
	const names = ['About', 'Case Studies', 'Contact', 'News', '']
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
		<motion.li variants={variants}  >
			<motion.div
				className='absolute w-[120vw] h-[600px] transform origin-top-left z-10'
				style={{backgroundColor: `${colors[i]}`}} >
				{' '}
				<h2 className='text-white text-8xl ml-[40vw] mt-10 transform rotate-6 origin-left font-bold transition duration-300 ease-in-out transform hover:scale-110'>
					<Link href={menuLink}>{menuName}</Link>
				</h2>
			</motion.div>
		</motion.li>
	)
}
