import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { FaChevronCircleDown, FaChevronCircleUp } from 'react-icons/fa'
import {
	motion,
	useAnimation,
	AnimatePresence,
	useViewportScroll,
	useTransform,
	useSpring,
} from 'framer-motion'

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
		<li className='text-2xl lg:text-3xl mb-12' style={{ color: titleColor }}>
			<div className='-mt-1'>{title}</div>

			<div className='text-lg lg:text-xl w-5/6 mt-6 font-normal text-black text-left overflow-hidden lg:ml-24 max-w-6xl'>
				{description}
			</div>
		</li>
	)
}
