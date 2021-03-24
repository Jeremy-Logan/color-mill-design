import {
	motion,
	useViewportScroll,
	useTransform,
	useSpring,
} from 'framer-motion'

export default function Hexagon({delay}) {
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
    const opacityDelay = [(delay+0.03), (delay+0.08), (delay+0.1), (delay+0.18)]
    const opacity = useTransform(scrollYProgress, opacityDelay, [0, .75, 1, 0])
    const scaleDelay = [(delay+0.005), (delay+0.08), (delay+0.1), (delay+0.2)]
    const scale = useTransform(scrollYProgress, scaleDelay, [0, 1, 1, 0])

	const topStyle = {
		width: '0',
		borderBottom: '30px solid' + randomColor,
		borderLeft: '52px solid transparent',
		borderRight: '52px solid transparent',
        opacity: opacity,

	}
	const midStyle = {
		backgroundColor: randomColor,
		width: '104px',
		height: '60px',
        opacity: opacity,

	}
	const botStyle = {
		width: '0',
		borderTop: '30px solid' + randomColor,
		borderLeft: '52px solid transparent',
		borderRight: '52px solid transparent',
        opacity: opacity,

	}
	// const color = '#FF7A2E'
	return (
		<motion.div className='m-2' style={{scale:scale}}>
			<motion.div style={topStyle} />
			<motion.div style={midStyle} />
			<motion.div style={botStyle} />
		</motion.div>
	)
}
