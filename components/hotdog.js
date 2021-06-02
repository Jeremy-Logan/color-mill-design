import {
	motion,
	useViewportScroll,
	useTransform,
	useSpring,
} from 'framer-motion'

export default function Hotdog({ delay }) {
	const colors = [
		'#FF7A2E',
		'#00B3A1',
		'#FF006A',
		'#C1C71F',
		'#85CFB4',
		'#FFB312',
		'#B06F6B',
        '#fff5de'
	]
	const opacities = [0.2, 0.3, 0.4, 0.5, 0.6, 0.7]
	const lengths = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]
    const startsLeft = [-3500, -3000, -2500, -2000, -1500, -1000]
	const translatesLeft = [1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500]
    const startsRight = [2000, 2500, 3000, 3500, 4000, 4500]
	const translatesRight = [-900, -800, -700, -600, -500, -300, -400, -300, -200, -100]
	const { scrollYProgress } = useViewportScroll()
	const randomColor = colors[(Math.random() * colors.length) | 0]
	const randomOpacity = opacities[(Math.random() * opacities.length) | 0]
	const opacityDelay = [0.1, 0.5, 0.8]
	const opacity = useTransform(scrollYProgress, opacityDelay, [
		0,
		randomOpacity,
		0,
	])
    const direction = ['left', 'right']
	const length = lengths[(Math.random() * lengths.length) | 0]
    const leftOrRight = direction[(Math.random() * direction.length) | 0]
	const randomStartLeft = startsLeft[(Math.random() * startsLeft.length) | 0]
	const randomSpeedLeft = translatesLeft[(Math.random() * translatesLeft.length) | 0]
    const randomStartRight = startsRight[(Math.random() * startsRight.length) | 0]
	const randomSpeedRight = translatesRight[(Math.random() * translatesRight.length) | 0]
	const translateDelay = [0.1, 0.8]
	const translate = useTransform(scrollYProgress, translateDelay, leftOrRight==='left' ? [
		randomStartLeft,
		randomSpeedLeft
	] : [randomStartRight, randomSpeedRight])

	return (
		<>
			<motion.div
				style={{
					opacity: opacity,
					backgroundColor: randomColor,
					width: length,
					translateX: translate,
				}}
				className='block h-[40px] rounded-full absolute'
			/>
			<motion.div
				style={{
					opacity: opacity,
					backgroundColor: randomColor,
					width: length,
					left: translate,
				}}
				className='block h-[40px] rounded-full absolute'
			/>
			{/* <motion.svg
					xmlns='http://www.w3.org/2000/svg'
					height='100%'
					width='100%'
					style={hexStyle}
					viewBox='0 0 500 40'>
					<motion.path
						path
						d='M616.8,273.5H165c-9.9,0-18-8.1-18-18v0c0-9.9,8.1-18,18-18h451.8c9.9,0,18,8.1,18,18v0
	C634.8,265.4,626.7,273.5,616.8,273.5z'
					/>
				</motion.svg> */}
		</>
	)
}
