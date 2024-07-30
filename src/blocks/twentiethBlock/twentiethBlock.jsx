import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'
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

const TwentiethBlock = () => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })

	return (
		<Wrapper>
			<motion.div
				className='font-Poppins mt-[100px] mx-[20px] xl:mx-0'
				ref={ref}
				variants={containerVariants}
				initial='hidden'
				animate={isInView ? 'visible' : 'hidden'}
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
									src='/assets/twentieth_1.png'
									alt='block'
									className='w-[70px] md:w-[100px]'
								/>
							</div>
							<div className='flex flex-col items-start gap-[5px]'>
								<h4 className='md:text-[19px] lg:text-[22px]'>
									Current Project Value
								</h4>
								<p className='text-[16px] lg:text-[18px] text-[gray]'>
									$4,000,000
								</p>
							</div>
						</motion.div>
						<motion.div
							className='flex items-center gap-[20px]'
							variants={itemVariants}
						>
							<div>
								<img
									src='/assets/twentieth_2.png'
									alt='block'
									className='w-[70px] md:w-[100px]'
								/>
							</div>
							<div className='flex flex-col items-start gap-[5px]'>
								<h4 className='md:text-[19px] lg:text-[22px]'>
									Investment Size
								</h4>
								<p className='text-[16px] lg:text-[18px] text-[gray]'>
									Up to $1,440,000
								</p>
							</div>
						</motion.div>
						<motion.div
							className='flex items-center gap-[20px]'
							variants={itemVariants}
						>
							<div>
								<img
									src='/assets/twentieth_3.png'
									alt='block'
									className='w-[70px] md:w-[100px]'
								/>
							</div>
							<div className='flex flex-col items-start gap-[5px]'>
								<h4 className='md:text-[19px] lg:text-[22px]'>
									Investment Ticket
								</h4>
								<p className='text-[16px] lg:text-[18px] text-[gray] max-[320px]:max-w-[200px] max-w-[250px] lg:max-w-[500px]'>
									Seeking to attract up to $250 000 per investor Expected
									participation 10% of the Villas investment amount
								</p>
							</div>
						</motion.div>
						<motion.div
							className='flex items-center gap-[20px]'
							variants={itemVariants}
						>
							<div>
								<img
									src='/assets/twentieth_4.png'
									alt='block'
									className='w-[70px] md:w-[100px]'
								/>
							</div>
							<div className='flex flex-col items-start gap-[5px]'>
								<h4 className='md:text-[19px] lg:text-[22px]'>
									Expected running yield – 21.8%
								</h4>
								<p className='text-[16px] lg:text-[18px] text-[gray]'>
									$2,128,632 per year
								</p>
							</div>
						</motion.div>
					</div>
					<div className='flex flex-col gap-[20px] md:gap-[40px] mt-[40px] md:mt-0'>
						<div className='bg-lightBlue h-[70px] text-center flex justify-center items-center text-[white] text-[20px]'>
							SPECIAL TERMS & PREFERENCES
						</div>
						<div className='border border-[gray] pt-[10px] pb-[20px] px-[20px]'>
							<div className='max-w-[400px] text-center'>
								<motion.h2
									className='font-medium text-[20px]'
									variants={itemVariants}
								>
									Loss Protection
								</motion.h2>
								<motion.p variants={itemVariants}>
									Guarantied 1 year term buyout after 1 year lockup period from
									the project launch
								</motion.p>
							</div>
							<div className='max-w-[400px] text-center pt-[20px]'>
								<motion.h3
									className='font-medium text-[20px]'
									variants={itemVariants}
								>
									Dividends waterfall preference
								</motion.h3>
								<motion.p variants={itemVariants}>
									15% hurdle rate for Investor Waterfall: 100% to LPs to extent
									of hurdle rate Catch up: 0 : 100 LPs : GP, Finally: pro rata
									to LPs and GP ownership
								</motion.p>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</Wrapper>
	)
}

export default React.memo(TwentiethBlock)
