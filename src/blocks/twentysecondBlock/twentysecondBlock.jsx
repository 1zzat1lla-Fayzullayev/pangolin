import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'
import Wrapper from '../../layout/wrapper'

// Define vintage animation variants
const fadeInVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { duration: 1.5 } },
}

const slideInVariants = {
	hidden: { opacity: 0, x: -100 },
	visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeInOut' } },
}

const scaleInVariants = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: { duration: 1, ease: 'easeInOut' },
	},
}

function TwentysecondBlock() {
	const ref = useRef(null)
	const inView = useInView(ref, { once: true })

	return (
		<Wrapper>
			<div className='font-Poppins mt-[100px] mx-[20px] xl:mx-0' ref={ref}>
				<motion.h2
					className='text-[20px] tracking-[3px] md:text-[30px] lg:text-[35px] font-extralight md:tracking-[6px]'
					variants={fadeInVariants}
					initial='hidden'
					animate={inView ? 'visible' : 'hidden'}
				>
					OUR KIDS CLUBS ARE THE HEART OF FAMILY NEST, WHICH IS GROWING INTO AN
					INTERNATIONAL CHAIN OF EXPERIENCE HOTELS FOR FAMILIES WITH KIDS
				</motion.h2>
				<div className='flex flex-col md:flex-row items-start mt-[40px] gap-[20px]'>
					<motion.div
						className='max-w-[250px]'
						variants={slideInVariants}
						initial='hidden'
						animate={inView ? 'visible' : 'hidden'}
					>
						Shareholders of Kids Club Bali are guaranteed{' '}
						<span className='bg-lightBlue'>
							a priority right to participate
						</span>{' '}
						in our future projects.
					</motion.div>
					<motion.div
						variants={scaleInVariants}
						initial='hidden'
						animate={inView ? 'visible' : 'hidden'}
					>
						<img src='/assets/twentysecond_1.jpg' alt='404' />
					</motion.div>
				</div>
			</div>
		</Wrapper>
	)
}

export default React.memo(TwentysecondBlock)
