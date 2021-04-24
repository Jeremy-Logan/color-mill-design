import Hexagon from '@components/hexagon'
import {
	motion,
	useViewportScroll,
	useTransform,
	useSpring,
} from 'framer-motion'

export default function HexGrid() {
const delayArray=[0.21, 0.22, 0.23, 0.24, 0.25, 0.26, 0.27, 0.28, 0.29, 0.30, 0.31, 0.32, 0.33, 0.34, 0.35, 0.36, 0.37, 0.38, 0.39, 0.40, 0.41]

	return (
		<div className='w-screen overflow-hidden z-0' >
			<motion.div className='flex'>
				{delayArray.map(delay=> <Hexagon delay={delay} key={delay}/>)}
			</motion.div>
			<motion.div className='flex transform translate-x-[2.4%] -mt-1'>
				{delayArray.map(delay=> <Hexagon  delay={delay} key={delay}/>)}
			</motion.div>
            <motion.div className='flex -mt-1'>
				{delayArray.map(delay=> <Hexagon delay={delay} key={delay}/>)}
			</motion.div>
            <motion.div className='flex transform translate-x-[2.4%] -mt-1'>
				{delayArray.map(delay=> <Hexagon delay={delay} key={delay}/>)}
			</motion.div>
		</div>
	)
}
