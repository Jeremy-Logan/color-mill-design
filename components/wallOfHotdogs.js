import Hotdog from '@components/hotdog'
import {
	motion,
	useViewportScroll,
	useTransform,
	useSpring,
} from 'framer-motion'

export default function WallOfHotdogs() {
const delayArray=[0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.10, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.20, 0.21, 0.22, 0.23]

	return (
		<div className='w-screen z-0 relative ' >
        
			<div className='absolute overflow-hidden w-screen h-[70vh]'>
            <motion.div className='flex absolute z-50 top-[120px] -mt-1 '>
				{delayArray.map(delay=> <Hotdog delay={delay} key={delay}/>)}
			</motion.div>
            <motion.div className='flex absolute z-50 top-[160px] -mt-1'>
				{delayArray.map(delay=> <Hotdog delay={delay} key={delay}/>)}
			</motion.div>
            <motion.div className='flex absolute z-50 top-[200px] -mt-1'>
				{delayArray.map(delay=> <Hotdog delay={delay} key={delay}/>)}
			</motion.div>
            <motion.div className='flex absolute z-50 top-[240px] -mt-1'>
				{delayArray.map(delay=> <Hotdog delay={delay} key={delay}/>)}
			</motion.div>
            <motion.div className='flex absolute z-50 top-[280px] -mt-1'>
				{delayArray.map(delay=> <Hotdog delay={delay} key={delay}/>)}
			</motion.div>
            <motion.div className='flex absolute z-50 top-[320px] -mt-1'>
				{delayArray.map(delay=> <Hotdog delay={delay} key={delay}/>)}
			</motion.div>
            <motion.div className='flex absolute z-50 top-[360px] -mt-1'>
				{delayArray.map(delay=> <Hotdog delay={delay} key={delay}/>)}
			</motion.div>
            <motion.div className='flex absolute z-50 top-[400px] -mt-1'>
				{delayArray.map(delay=> <Hotdog delay={delay} key={delay}/>)}
			</motion.div>
            <motion.div className='flex absolute z-50 top-[440px] -mt-1'>
				{delayArray.map(delay=> <Hotdog delay={delay} key={delay}/>)}
			</motion.div>
            </div>
		</div>
	)
}