import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Wrapper from '../../layout/wrapper'

function FirstBlock() {
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

	const imageVariants = {
		hidden: { opacity: 0, x: -100 },
		visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
	}

	const textVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
	}

	return (
		<Wrapper>
			<div
				className='flex font-Poppins flex-col md:flex-row items-center justify-center gap-8 mx-[20px] xl:mx-0 md:gap-16'
				ref={ref}
			>
				<motion.div
					className='w-full md:w-1/2 flex justify-center md:justify-start'
					initial='hidden'
					animate={controls}
					variants={imageVariants}
				>
					<img
						src='/assets/firstBlock.jpg'
						alt='404'
						className='w-full h-auto md:max-w-none'
					/>
				</motion.div>
				<motion.div
					className='w-full md:w-1/2 flex flex-col items-center md:items-start'
					initial='hidden'
					animate={controls}
					variants={textVariants}
				>
					<img
						src='/assets/logo.png'
						alt='logo'
						className='max-w-full w-full md:w-[550px] mb-8 md:mb-0'
					/>
					<div className='border-t border-b border-black py-8 md:py-16 w-full'>
						<h2 className='text-2xl md:text-4xl xl:w-[600px] tracking-wider md:tracking-[8px] text-center md:text-left'>
							THE NEW ATTRACTION POINT FOR FAMILIES WITH KIDS IN BALI
						</h2>
					</div>
					<div className='flex justify-between flex-col lg:flex-row items-center w-full mt-4 md:mt-8'>
						<p className='text-sm flex text-center md:text-start flex-col md:flex-row md:text-base tracking-[6px] uppercase '>
							<span className='md:border-r md:pr-[20px] md:border-r-black'>
								indonesia
							</span>
							<span className='md:border-r md:pr-[20px] md:pl-[20px] md:border-r-black'>
								bali
							</span>
							<span className='md:pl-[20px]'>uluwatu</span>
						</p>
						<p className='text-sm md:text-base tracking-[6px] uppercase'>
							2023
						</p>
					</div>
				</motion.div>
			</div>
		</Wrapper>
	)
}

export default FirstBlock
