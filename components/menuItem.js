import { motion } from 'framer-motion'

const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF']


export const MenuItem = ({ i }) => {
    const rotate = [0, 15, 30, 45, 60]
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
	const style = { backgroundColor: `${colors[i]}` }
	return (
		<motion.li variants={variants}>
			<div
				class='absolute w-[120vw] h-[600px] rounded-md mr-16 transform origin-top-left z-0'
				style={style}>
				{' '}
				<h2 class='text-white text-8xl ml-[40vw] mt-10 transform rotate-6 origin-left font-bold'>
					HELLO
				</h2>
			</div>
		</motion.li>
	)
}
