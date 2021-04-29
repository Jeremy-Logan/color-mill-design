import { useState, useRef, useEffect } from 'react'
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

const logo = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			delay: 0.5,
			type: 'spring',
			stiffness: 400,
			damping: 40,
		},
	},
}

export default function Header({ title }) {
	const [isOpen, toggleOpen] = useCycle(false, true)
	const containerRef = useRef(null)

	useEffect(() => {
		isOpen ? (document.body.style.overflow = 'hidden')
		: (document.body.style.overflow = '')
	}, [isOpen])

	return (
		<>
			<div className='h-36 w-screen '>
				<motion.div className='w-screen h-screen overflow-hidden'>
					<motion.nav
						className='w-screen z-50 '
						// initial={false}
						animate={isOpen ? 'open' : 'closed'}
						// custom={height}
						ref={containerRef}>
						<motion.div
							className='absolute top-0 left-0 bottom-0 w-screen bg-cyan-300 z-50'
							variants={menu}
						/>
						<MenuToggle toggle={() => toggleOpen()} />
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: [0, 0, 0, 0, 1] }}>
							<Navigation toggle={() => toggleOpen()} />
						</motion.div>
					</motion.nav>

					<motion.button
						initial={{ opacity: 1 }}
						animate={isOpen ? 'hidden' : 'visible'}
						variants={logo}
						className='absolute top-0 lg:right-10 right-4 flex flex-row focus:outline-none outline-none z-50'>
						<Link href='/'>
							<h1 className='font-bold my-auto lg:text-4xl md:text-3xl text-2xl'>
								Color Mill Design
							</h1>
						</Link>
						<Link href='/' className='h-[10vw] focus:outline-none'>
							<img src='https://res.cloudinary.com/the-color-mill/image/upload/v1616105305/Color%20Mill%20Design/color-mill-animated-logo_bxjcpm.webp' />
						</Link>
					</motion.button>
				</motion.div>
			</div>
		</>
	)
}
