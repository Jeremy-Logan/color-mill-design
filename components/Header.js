import { useState } from 'react'
import { useCycle, motion } from 'framer-motion'
import { MenuToggle } from './MenuToggle'
import { Navigation } from './Navigation'

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

	return (
		<>
			<motion.div class='relative w-screen h-screen overflow-hidden'>
				<img
					src='https://res.cloudinary.com/the-color-mill/image/upload/v1616105305/Color%20Mill%20Design/color-mill-animated-logo_bxjcpm.webp'
					class='absolute top-0 right-10 text-5xl'
				/>

				<motion.nav
					class='absolute w-screen h-screen top-0 right-0'
					initial={false}
					animate={isOpen ? 'open' : 'closed'}
					// custom={height}
					// ref={containerRef}
				>
					<motion.div
						class='absolute top-0 right-0 bottom-0 w-screen bg-blue-200 z-30 overflow-visible '
						variants={menu}
					/>
					<MenuToggle toggle={() => toggleOpen()} />
					<Navigation />
				</motion.nav>

				{/* <AnimatePresence>
					<motion.div
						class={
							open
								? 'absolute bg-blue-200 w-screen h-screen right-0 top-0 origin-center'
								: 'absolute bg-blue-200 w-20 h-20 rounded-full right-12 top-10 origin-center'
						}>
						<button
							onClick={() => setOpen(!open)}
							class='absolute top-5 left-7 text-4xl'>
							X
						</button>
					</motion.div>
				</AnimatePresence> */}
			</motion.div>
		</>
	)
}
