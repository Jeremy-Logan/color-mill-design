import { useState, useRef, useEffect } from 'react'
import { useCycle, motion } from 'framer-motion'
import { MenuToggle } from './menuToggle'
import { Navigation } from './navigation'
import Link from 'next/link'

const menu = {
	closed: {
		clipPath: 'circle(50px at 36px 36px)',
		opacity: 0,
		transition: {
			delay: 0.6,
			type: 'spring',
			stiffness: 400,
			damping: 40,
		},
	},
	open: {
		clipPath: `circle(50px at 36px 36px)`,
		
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
			<div className='h-12 md:h-36 w-screen  bg-white z-50'>
				<motion.div className='w-screen h-screen ' >
					<motion.nav
						className=' z-30 '
						// initial={false}
						animate={isOpen ? 'open' : 'closed'}
						// custom={height}
						ref={containerRef}>
						
						<motion.div
							className={`absolute top-0 left-0 bottom-0 w-24 bg-cyan-300 z-50`}
							variants={menu}
						/>
						<MenuToggle toggle={() => toggleOpen()}/>
						<motion.div
							initial={{ opacity: 0}}
							animate={{ opacity: [0, 0, 0, 0, 1]}}>
							
							<Navigation toggle={() => toggleOpen()} />
						</motion.div>
					</motion.nav>

					<motion.button
						initial={{ opacity: 1 }}
						animate={isOpen ? 'hidden' : 'visible'}
						variants={logo}
						className='absolute top-0 lg:right-4 right-1 ml-24 flex flex-row focus:outline-none outline-none z-10'>
						<Link href='/'>
							<h1 className='font-bold my-auto lg:text-4xl md:text-3xl hidden md:block text-2xl'>
								Color Mill Design
							</h1>
						</Link>
						<Link href='/' alt='Home'>
						<picture>
						<source srcSet='https://res.cloudinary.com/the-color-mill/image/upload/v1616105305/Color%20Mill%20Design/color-mill-animated-logo_bxjcpm.webp' type='image/webp' />
						<source srcSet='https://res.cloudinary.com/the-color-mill/image/upload/v1639014317/Color%20Mill%20Design/ColorMillLogoHeader-NoText_nvtcqj.png' type='image/png'/>
							<img className='h-36' srcSet='https://res.cloudinary.com/the-color-mill/image/upload/v1639014317/Color%20Mill%20Design/ColorMillLogoHeader-NoText_nvtcqj.png' alt='Color Mill logo'/>
							</picture>
						</Link>
					</motion.button>
				</motion.div>
			</div>
		</>
	)
}
