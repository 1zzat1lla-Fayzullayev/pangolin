import React from 'react'
import { motion } from 'framer-motion'
import Wrapper from '../../layout/wrapper'

const SixteenthBlock = () => {
	// Define animation variants
	const imageVariants = {
		hidden: { opacity: 0, scale: 0.9 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { duration: 1, ease: 'easeInOut' },
		},
	}

	const textVariants = {
		hidden: { opacity: 0, x: -50 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 1, ease: 'easeInOut' },
		},
	}

	return (
		<Wrapper>
			<div className='mx-[20px] xl:mx-0'>
				<div className='flex flex-col md:flex-row font-Poppins md:items-center md:gap-[10px] mt-[200px]'>
					<motion.img
						src='/assets/kids_club.png'
						alt='logo'
						className='w-[250px]'
						initial='hidden'
						whileInView='visible'
						variants={imageVariants}
					/>
					<div className='md:border-l md:border-l-black md:pl-[30px]'>
						<motion.h2
							className='uppercase text-[25px] md:text-[30px] font-extralight text-green'
							initial='hidden'
							whileInView='visible'
							variants={textVariants}
						>
							OUTDOOR
						</motion.h2>
					</div>
				</div>
				<div className='flex flex-col gap-[20px] md:gap-[50px] md:flex-row items-center'>
					<div>
						<div>
							<motion.h2
								className='text-green text-[20px]'
								initial='hidden'
								whileInView='visible'
								variants={textVariants}
							>
								OPEN AIR
							</motion.h2>
							<motion.p
								className='max-w-[130px] text-[19px]'
								initial='hidden'
								whileInView='visible'
								variants={textVariants}
							>
								Water games Cooking class Active games Cinema
							</motion.p>
						</div>

						<div>
							<motion.img
								src='/assets/sixteenth_1.png'
								alt='404'
								className='w-full mt-[50px]'
								initial='hidden'
								whileInView='visible'
								variants={imageVariants}
							/>
						</div>
					</div>
					<div>
						<motion.img
							src='/assets/sixteenth_2.png'
							alt='404'
							className='w-full'
							initial='hidden'
							whileInView='visible'
							variants={imageVariants}
						/>
					</div>
				</div>
			</div>
		</Wrapper>
	)
}

export default React.memo(SixteenthBlock)
