import { useState, useRef } from 'react'
import { useCycle, motion } from 'framer-motion'
import { MenuToggle } from './menuToggle'
import { Navigation } from './navigation'
import Link from 'next/link'

const menu = {
	closed: {
		clipPath: 'circle(30px at 30px 30px)',
		transition: {
			delay: 0.5,
			type: 'spring',
			stiffness: 400,
			damping: 40,
		},
	},
	open: {
		clipPath: `circle(50px at 26px 26px)`,
		transition: {
			type: 'spring',
			stiffness: 200,
			restDelta: 2,
		},
	},
}

export default function Header({ title }) {
	const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null);



	return (
		<>
			<motion.div className='relative w-screen h-screen overflow-hidden'>
				<motion.nav
					className='w-screen  top-0 left-0'
					// initial={false}
					animate={isOpen ? 'open' : 'closed'}
					// custom={height}
					ref={containerRef}
				>
					<motion.div
						className='absolute top-0 left-0 bottom-0 w-screen bg-cyan-300 z-30 overflow-visible '
						variants={menu}
            initial='closed'
					/>
					<MenuToggle toggle={() => toggleOpen()} />
					<Navigation />
				</motion.nav>
        
<a className='absolute top-0 right-10 text-4xl cursor-pointer flex flex-row'><Link href='/'><h1 className='font-bold my-auto'>Color Mill Design</h1></Link><Link href='/'>
				<img
					src='https://res.cloudinary.com/the-color-mill/image/upload/v1616105305/Color%20Mill%20Design/color-mill-animated-logo_bxjcpm.webp'
					
				/>
</Link></a>
				{/* <AnimatePresence>
					<motion.div
						className={
							open
								? 'absolute bg-blue-200 w-screen h-screen right-0 top-0 origin-center'
								: 'absolute bg-blue-200 w-20 h-20 rounded-full right-12 top-10 origin-center'
						}>
						<button
							onClick={() => setOpen(!open)}
							className='absolute top-5 left-7 text-4xl'>
							X
						</button>
					</motion.div>
				</AnimatePresence> */}
			</motion.div>
		</>
	)
}
