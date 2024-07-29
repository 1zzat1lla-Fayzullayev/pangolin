import React from 'react'
import { motion } from 'framer-motion'
import Wrapper from '../../layout/wrapper'

const EleventhBlock = () => {
	// Define animation variants
	const headingVariants = {
		hidden: { opacity: 0, y: -50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 1, ease: 'easeInOut' },
		},
	}

	const textVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { duration: 1.5, ease: 'easeInOut' },
		},
	}

	const imageVariants = {
		hidden: { opacity: 0, scale: 0.9 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { duration: 1, ease: 'easeInOut' },
		},
	}

	return (
		<Wrapper>
			<div className='font-Poppins relative mx-[20px] xl:mx-0'>
				<motion.div
					className='border-b border-b-black text-center'
					initial='hidden'
					whileInView='visible'
					variants={headingVariants}
				>
					<h2 className='text-[40px] font-extralight tracking-[7px]'>
						KIDS FRIENDLY SPACE
					</h2>
				</motion.div>
				<motion.p
					className='mx-auto text-center max-w-[380px] mt-[20px]'
					initial='hidden'
					whileInView='visible'
					variants={textVariants}
				>
					Safe, accessible, with navigation throughout the territory, a{' '}
					<span className='bg-yellow'>
						{' '}
						large number of play elements and a community of other kids.
					</span>
				</motion.p>
				<div>
					<div className='flex flex-wrap justify-center items-center gap-[10px] mt-[50px]'>
						<motion.img
							src='/assets/eleventh_1.jpg'
							alt='404'
							className='object-cover w-full md:w-[350px] md:h-[200px]'
							initial='hidden'
							whileInView='visible'
							variants={imageVariants}
						/>
						<motion.img
							src='/assets/eleventh_2.jpg'
							alt='404'
							className='object-cover w-full md:w-[200px] md:h-[200px]'
							initial='hidden'
							whileInView='visible'
							variants={imageVariants}
						/>
						<motion.img
							src='/assets/eleventh_3.jpg'
							alt='404'
							className='object-cover w-full md:w-[350px] md:h-[200px]'
							initial='hidden'
							whileInView='visible'
							variants={imageVariants}
						/>
					</div>
				</div>
				<div className='h-[200px] w-full bg-lightBlue hidden md:block absolute bottom-[-130px] z-[-1]'></div>
			</div>
		</Wrapper>
	)
}

export default EleventhBlock
