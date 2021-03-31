import Hexagon from '@components/hexagon'
import {
	motion,
	useViewportScroll,
	useTransform,
	useSpring,
} from 'framer-motion'

export default function HexGrid() {
const delayArray=[0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.10, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.20]

	return (
		<div className='w-screen overflow-hidden z-0' >
			<motion.div className='flex'>
				{delayArray.map(delay=> <Hexagon delay={delay} key={delay}/>)}
			</motion.div>
			<motion.div className='flex transform translate-x-[2.5%] -mt-1'>
				{delayArray.map(delay=> <Hexagon  delay={delay} key={delay}/>)}
			</motion.div>
            <motion.div className='flex -mt-1'>
				{delayArray.map(delay=> <Hexagon delay={delay} key={delay}/>)}
			</motion.div>
            <motion.div className='flex transform translate-x-[2.5%] -mt-1'>
				{delayArray.map(delay=> <Hexagon delay={delay} key={delay}/>)}
			</motion.div>
		</div>
	)
}
