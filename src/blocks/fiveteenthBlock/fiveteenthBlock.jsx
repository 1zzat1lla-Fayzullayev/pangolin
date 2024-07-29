import React from 'react'
import { motion } from 'framer-motion'
import Wrapper from '../../layout/wrapper'

const FiveteenthBlock = () => {
	const imgVariants = {
		hidden: { opacity: 0, scale: 0.95 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { duration: 1, ease: 'easeInOut' },
		},
	}

	return (
		<Wrapper>
			<motion.img
				src='/assets/fiveteenth_1.png'
				alt=''
				className='mt-[100px] hidden md:block'
				initial='hidden'
				whileInView='visible'
				variants={imgVariants}
			/>
			<div className='flex flex-col gap-[20px] mx-[20px] md:mx-0 items-center'>
				<motion.img
					src='/assets/fiveteenth_2.png'
					alt='404'
					className='md:hidden w-full object-cover h-[300px]'
					initial='hidden'
					whileInView='visible'
					variants={imgVariants}
				/>
				<motion.img
					src='/assets/fiveteenth_3.png'
					alt='404'
					className='md:hidden w-full object-cover h-[300px]'
					initial='hidden'
					whileInView='visible'
					variants={imgVariants}
				/>
				<motion.img
					src='/assets/fiveteenth_4.png'
					alt='404'
					className='md:hidden w-full object-cover h-[300px]'
					initial='hidden'
					whileInView='visible'
					variants={imgVariants}
				/>
			</div>
		</Wrapper>
	)
}

export default FiveteenthBlock