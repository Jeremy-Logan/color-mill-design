import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa"
import {
	motion,
	useAnimation,
	AnimatePresence,
	useViewportScroll,
	useTransform,
	useSpring,
} from 'framer-motion'

const variants = {
	titleOpen: {
		type: 'spring',
		damping: 10,
		stiffness: 200,
		marginTop: '-40px',
		scale: '1.1'
	},
	titleClosed: {
		scale: 1
	},
	descriptionOpen: {
		height: 'auto',
		opacity: 1,
		
	},
	descriptionClosed: {
		height: 0,
		opacity: 0,
	},
}

export default function CapabilitiesCard({ title, description }) {
	const [isOpen, setIsOpen] = useState(false)
	const toggleOpen = () => {
		setIsOpen(!isOpen)
	}
	const colors = [
		'#FF7A2E',
		'#00B3A1',
		'#FF006A',
		'#C1C71F',
		'#85CFB4',
		'#FFB312',
		'#B06F6B',
		'#30a7d9',
	]
	const titleColor = colors[(Math.random() * colors.length) | 0]
	return (
		<div className='h-40' onClick={toggleOpen}>
			<motion.li
				
				className='text-3xl cursor-pointer'
				style={{ color: titleColor }}
				animate={isOpen ? 'titleOpen' : 'titleClosed'}
				variants={variants}>
				<motion.div className='flex' transition={{ ease: "easeOut", duration: .5 }}>
					{isOpen ? <FaChevronCircleUp /> : <FaChevronCircleDown/>}
					<motion.div className='ml-4 -mt-1'>{title}</motion.div>
					
				</motion.div>

				<motion.div
					className='text-xl w-5/6 mt-6 font-normal text-black text-center overflow-hidden mx-auto'
					animate={isOpen ? 'descriptionOpen' : 'descriptionClosed'}
					variants={variants} transition={{ ease: "easeOut", duration: .25 }}>
					{description}
				</motion.div>
			</motion.li>
		</div>
	)
}
