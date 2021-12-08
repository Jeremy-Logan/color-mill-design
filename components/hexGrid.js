import Hexagon from '@components/hexagon'
import {
	motion,
	useViewportScroll,
	useTransform,
	useSpring,
} from 'framer-motion'

export default function HexGrid() {
const delayArray=[0, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.10, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.20]

	return (
		<div className='w-screen z-0 relative ' >
		<div className='absolute w-[200vw] lg:w-screen h-[800px] '>
			<motion.div className='flex absolute '>
				{delayArray.map(delay=> <Hexagon delay={delay} key={delay}/>)}
			</motion.div>
			<motion.div className='flex absolute transform translate-y-[100%] translate-x-[-2.4%] -mt-1'>
				{delayArray.map(delay=> <Hexagon  delay={delay} key={delay}/>)}
			</motion.div>
            <motion.div className='flex absolute transform translate-y-[200%] -mt-1'>
				{delayArray.map(delay=> <Hexagon delay={delay} key={delay}/>)}
			</motion.div>
            <motion.div className='flex absolute transform translate-y-[300%] translate-x-[-2.4%] -mt-1'>
				{delayArray.map(delay=> <Hexagon delay={delay} key={delay}/>)}
			</motion.div>
			<motion.div className='flex absolute transform translate-y-[400%] -mt-1 2xl:hidden'>
				{delayArray.map(delay=> <Hexagon delay={delay} key={delay}/>)}
			</motion.div>
            <motion.div className='flex absolute transform translate-y-[500%] translate-x-[-2.4%] -mt-1 2xl:hidden'>
				{delayArray.map(delay=> <Hexagon delay={delay} key={delay}/>)}
			</motion.div>
			</div>
		</div>
	)
}
