import {
	motion,
	useViewportScroll,
	useTransform,
	useSpring,
} from 'framer-motion'

export default function Hexagon({ delay }) {
	const colors = [
		'#FF7A2E',
		'#00B3A1',
		'#FF006A',
		'#C1C71F',
		'#85CFB4',
		'#FFB312',
		'#B06F6B',
	]
	const randomColor = colors[(Math.random() * colors.length) | 0]
	const { scrollYProgress } = useViewportScroll()
	const opacityDelay = [delay - 0.05, delay + 0, delay + 0.1, delay + 0.2]
	const opacity = useTransform(scrollYProgress, opacityDelay, [0, 0.75, 1, 0])
	const scaleDelay = [delay - 0.05, delay + 0, delay + 0.1, delay + 0.2]
	const scale = useTransform(scrollYProgress, scaleDelay, [0, 1, 1, 0])
	const mobileScale = useTransform(scrollYProgress, scaleDelay, [0, 2, 2, 0])

	const hexStyle = {
		fill: randomColor,

	}

	return (
		<>
		<motion.div style={{ scale: (mobileScale), opacity: opacity}} className='flex sm:hidden ' >
			<motion.svg
				xmlns='http://www.w3.org/2000/svg'
				height='100%'
				width='100%'

				viewBox='0 0 280 280'>
				<motion.polygon
					style={hexStyle}
					points='261.2,210 261.2,70 140,0 18.8,70 18.8,210 140,280'
					
				/>
			</motion.svg>
		</motion.div>
		<motion.div style={{ scale: scale, opacity: opacity}} className='hidden sm:flex mx-1' >
			<motion.svg
				xmlns='http://www.w3.org/2000/svg'
				height='100%'
				width='100%'

				viewBox='0 0 280 280'>
				<motion.polygon
					style={hexStyle}
					points='261.2,210 261.2,70 140,0 18.8,70 18.8,210 140,280'
					
				/>
			</motion.svg>
		</motion.div></>
	)
}
