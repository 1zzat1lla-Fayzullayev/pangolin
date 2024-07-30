import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Wrapper from '../../layout/wrapper'

// Define animation variants
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
			duration: 1,
		},
	},
}

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 1, ease: 'easeInOut' },
	},
}

const NineteenthBlock = () => {
	const ref = useRef(null)
	const inView = useInView(ref, { once: true })

	return (
		<Wrapper>
			<motion.div
				className='font-Poppins mt-[100px] mx-[20px] xl:mx-0'
				ref={ref}
				variants={containerVariants}
				initial='hidden'
				animate={inView ? 'visible' : 'hidden'}
			>
				<div className='border-b border-b-black'>
					<motion.h2
						className='font-extralight text-[25px] md:text-[40px] lg:text-[50px] tracking-[10px]'
						variants={itemVariants}
					>
						FINANCIAL MODEL ESSENTIALS
					</motion.h2>
				</div>
				<div className='flex flex-col md:flex-row justify-between mt-[50px]'>
					<div className='flex flex-col gap-[60px]'>
						<motion.div
							className='flex items-center gap-[20px]'
							variants={itemVariants}
						>
							<div>
								<img
									src='/assets/nineteenth_1.png'
									alt='block'
									className='w-[100px]'
								/>
							</div>
							<div className='flex flex-col items-start gap-[5px]'>
								<h4 className='md:text-[19px] lg:text-[22px]'>
									Avrg Revenue at Stable Stage
								</h4>
								<p className='text-[16px] lg:text-[18px] text-[gray]'>
									$2,128,632 per year
								</p>
							</div>
						</motion.div>
						<motion.div
							className='flex items-center gap-[20px]'
							variants={itemVariants}
						>
							<div>
								<img
									src='/assets/nineteenth_2.png'
									alt='block'
									className='w-[100px]'
								/>
							</div>
							<div className='flex flex-col items-start gap-[5px]'>
								<h4 className='md:text-[19px] lg:text-[22px]'>
									Operating Income (before tax)
								</h4>
								<p className='text-[16px] lg:text-[18px] text-[gray]'>
									$774,633 per year
								</p>
							</div>
						</motion.div>
						<motion.div
							className='flex items-center gap-[20px]'
							variants={itemVariants}
						>
							<div>
								<img
									src='/assets/nineteenth_3.png'
									alt='block'
									className='w-[100px]'
								/>
							</div>
							<div className='flex flex-col items-start gap-[5px]'>
								<h4 className='md:text-[19px] lg:text-[22px]'>
									12 months past launch till full load
								</h4>
								<p className='text-[16px] lg:text-[18px] text-[gray]'>
									$2,128,632 per year
								</p>
							</div>
						</motion.div>
					</div>
					<div className='flex gap-[20px] md:gap-[40px] mt-[40px] md:mt-0'>
						<div>
							<motion.img
								src='/assets/nineteenth_4.jpg'
								alt='404'
								className='w-[30px]'
								variants={itemVariants}
							/>
						</div>
						<div className='flex flex-col max-[320px]:gap-[35px] gap-[90px] md:gap-[55px]'>
							<motion.div
								className='max-w-[300px] flex flex-col gap-[5px]'
								variants={itemVariants}
							>
								<h4 className='md:text-[19px] lg:text-[22px]'>
									1 <sup>st</sup> year (starting Jan25)
								</h4>
								<p className='text-[16px] lg:text-[18px] text-[gray]'>
									Operating income (before tax) $600,261 per year Profitability
									36%
								</p>
							</motion.div>
							<motion.div
								className='max-w-[300px] flex flex-col gap-[5px]'
								variants={itemVariants}
							>
								<h4 className='md:text-[19px] lg:text-[22px]'>
									2 <sup>nd</sup> year
								</h4>
								<p className='text-[16px] lg:text-[18px] text-[gray]'>
									Operating income (before tax) $774,633 per year Profitability
									36%
								</p>
							</motion.div>
							<motion.div
								className='max-w-[300px] flex flex-col gap-[5px]'
								variants={itemVariants}
							>
								<h4 className='md:text-[19px] lg:text-[22px]'>
									5 <sup>th</sup> year / (stabilized CF)
								</h4>
								<p className='text-[16px] lg:text-[18px] text-[gray]'>
									Full payback for Investor
								</p>
							</motion.div>
						</div>
					</div>
				</div>
			</motion.div>
		</Wrapper>
	)
}

export default NineteenthBlock
