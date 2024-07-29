import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Wrapper from '../../layout/wrapper'

function SeventhBlock() {
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

	const textVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	}

	const imageVariants = {
		hidden: { opacity: 0, x: -50 },
		visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
	}

	return (
		<>
			<Wrapper>
				<div
					className='flex items-center flex-col md:flex-row mt-[100px] justify-between gap-[50px] lg:gap-[150px] mx-[20px] xl:mx-0'
					ref={ref}
				>
					<motion.div
						className='flex flex-col gap-[20px] md:max-w-[400px] lg:max-w-[430px] font-Poppins'
						initial='hidden'
						animate={controls}
						variants={textVariants}
					>
						<img src='/assets/kids_logo.png' alt='logo' />
						<p className='text-[18px]'>
							We are building an experience hotel for families with kids –
							spacious villas with the high-class service in Uluwatu.
						</p>
						<p className='text-[18px]'>
							<span className='bg-yellow'>
								The heart & soul of our project is the Kids Club, a specially
								designed space unique in Bali.
							</span>{' '}
						</p>
					</motion.div>
					<motion.div
						initial='hidden'
						animate={controls}
						variants={imageVariants}
					>
						<img
							src='/assets/seventhBlock.jpg'
							alt='404'
							className='w-full px-[10px] md:px-0'
						/>
					</motion.div>
				</div>
			</Wrapper>
		</>
	)
}

export default SeventhBlock
