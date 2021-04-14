
import { motion } from 'framer-motion'
import { MenuItem } from './menuItem'

const variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, delayChildren: 0.2 },
	},
}

export const Navigation = ({toggle}) => {
	
	return (
		<div className='z-40 overflow-hidden w-screen absolute top-0 left-0 bottom-0' >
		<motion.ul
			className=' absolute top-0 bottom-0 left-0'
			variants={variants}
			onClick={toggle}
            >
            
			{itemIds.map((i) => (
				<MenuItem i={i} key={i} />
			))}
		</motion.ul>
		</div>
	)
}

const itemIds = [0, 1, 2, 3, 4]
