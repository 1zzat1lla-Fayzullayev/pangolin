import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Wrapper from '../../layout/wrapper'

function SecondBlock() {
	const controls = useAnimation()
	const [ref, inView] = useInView({
		triggerOnce: true, 
		threshold: 0.2, 
	})

	React.useEffect(() => {
		if (inView) {
			controls.start('visible')
		}
	}, [controls, inView])

	const itemVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	}

	return (
		<Wrapper>
			<div className='mt-12 mx-[20px] xl:mx-0 font-Poppins' ref={ref}>
				<div className='border-b border-black'>
					<h2 className='tracking-wider text-3xl md:text-4xl font-light pb-[10px]'>
						CONTENTS
					</h2>
				</div>
				<div className='mt-12 md:mt-24 flex flex-col md:flex-row items-start justify-start gap-8 md:gap-16 lg:gap-24'>
					<div className='flex flex-col gap-5 md:gap-8'>
						<motion.div
							className='flex items-center gap-5 md:gap-12'
							initial='hidden'
							animate={controls}
							variants={itemVariants}
						>
							<div className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] bg-pink text-[white] flex justify-center items-center text-[17px] md:text-[27px]'>
								01
							</div>
							<h2 className='text-[17px] md:text-[27px] font-extralight tracking-widest'>
								INTRO
							</h2>
						</motion.div>
						<motion.div
							className='flex items-center gap-5 md:gap-12'
							initial='hidden'
							animate={controls}
							variants={itemVariants}
						>
							<div className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] bg-orange text-[white] flex justify-center items-center text-[17px] md:text-[27px]'>
								02
							</div>
							<h2 className='text-[17px] md:text-[27px] font-extralight tracking-widest'>
								THE PROJECT
							</h2>
						</motion.div>
						<motion.div
							className='flex items-center gap-5 md:gap-12'
							initial='hidden'
							animate={controls}
							variants={itemVariants}
						>
							<div className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] bg-green text-[white] flex justify-center items-center text-[17px] md:text-[27px]'>
								03
							</div>
							<h2 className='text-[17px] md:text-[27px] font-extralight tracking-widest'>
								VISUALS
							</h2>
						</motion.div>
					</div>
					<div className='flex flex-col gap-5 md:gap-4'>
						<motion.div
							className='flex items-center gap-5 md:gap-12'
							initial='hidden'
							animate={controls}
							variants={itemVariants}
						>
							<div className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] bg-lightBlue text-[white] flex justify-center items-center text-[17px] md:text-[27px]'>
								04
							</div>
							<h2 className='text-[17px] md:text-[27px] font-extralight tracking-widest max-w-xs'>
								FINANCIAL ESSENTIALS
							</h2>
						</motion.div>
						<motion.div
							className='flex items-center gap-5 md:gap-12'
							initial='hidden'
							animate={controls}
							variants={itemVariants}
						>
							<div className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] bg-yellow text-[white] flex justify-center items-center text-[17px] md:text-[27px]'>
								05
							</div>
							<h2 className='text-[17px] md:text-[27px] font-extralight tracking-widest'>
								FUTURE PLANS
							</h2>
						</motion.div>
					</div>
				</div>
			</div>
		</Wrapper>
	)
}

export default SecondBlock
