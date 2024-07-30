import React from 'react'
import { motion } from 'framer-motion'
import Wrapper from '../../layout/wrapper'

const TwelfthBlock = () => {
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
							className='uppercase text-[25px] md:text-[30px] font-extralight text-lightBlue'
							initial='hidden'
							whileInView='visible'
							variants={textVariants}
						>
							GROUND FLOOR
						</motion.h2>
					</div>
				</div>
				<div className='flex flex-col md:flex-row items-center'>
					<div>
						<div>
							<motion.h2
								className='text-lightBlue text-[20px]'
								initial='hidden'
								whileInView='visible'
								variants={textVariants}
							>
								ACTIVE SPACE
							</motion.h2>
							<motion.p
								className='max-w-[230px] text-[19px]'
								initial='hidden'
								whileInView='visible'
								variants={textVariants}
							>
								Reception & lobby & shop Active games Stage for performances
							</motion.p>
						</div>
						<div className='flex flex-col sm:flex-row items-center gap-[20px] relative mt-[60px] md:hidden'>
							<motion.img
								src='/assets/twelfth_1.png'
								alt=''
								initial='hidden'
								whileInView='visible'
								variants={imageVariants}
								className='w-full'
							/>
							<motion.img
								src='/assets/twelfth_2.jpg'
								alt=''
								initial='hidden'
								whileInView='visible'
								variants={imageVariants}
								className='w-full'
							/>
						</div>
						<div>
							<motion.img
								src='/assets/twelfth_zapas.png'
								alt='404'
								className='w-full mt-[50px] hidden md:block'
								initial='hidden'
								whileInView='visible'
								variants={imageVariants}
							/>
						</div>
					</div>
					<div>
						<motion.img
							src='/assets/twelfth_3.png'
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

export default React.memo(TwelfthBlock)
