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
	const containerRef = useRef(null)

	return (
		<>
			<motion.div className='relative w-screen h-screen overflow-hidden'>
				<motion.nav
					className='w-screen  top-0 left-0'
					// initial={false}
					animate={isOpen ? 'open' : 'closed'}
					// custom={height}
					ref={containerRef}>
					<motion.div
						className='absolute top-0 left-0 bottom-0 w-screen bg-cyan-300 z-30 overflow-visible '
						variants={menu}
					/>
					<MenuToggle toggle={() => toggleOpen()} />
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: [0, 0, 0, 0, 1] }}>
						<Navigation toggle={() => toggleOpen()} />
					</motion.div>
				</motion.nav>

				<button className='absolute top-0 lg:right-10 right-4 flex flex-row focus:outline-none'>
					<Link href='/'>
						<h1 className='font-bold my-auto lg:text-4xl md:text-3xl text-2xl'>Color Mill Design</h1>
					</Link>
					<Link href='/'>
						<img className='h-[10vw] ' src='https://res.cloudinary.com/the-color-mill/image/upload/v1616105305/Color%20Mill%20Design/color-mill-animated-logo_bxjcpm.webp' />
					</Link>
				</button>
			</motion.div>
		</>
	)
}
