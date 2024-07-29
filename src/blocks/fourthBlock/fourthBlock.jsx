import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Wrapper from '../../layout/wrapper'

function FourthBlock() {
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
						<p className='text-[18px] lg:w-[500px]'>
							<span className='bg-lightBlue'>
								It is well-known that "Bali is a paradise on earth".
							</span>
						</p>
						<p className='text-[18px]'>
							Surfers get perfect waves, divers enjoy unique spots, lovers have
							the most romantic sunsets, and gourmets can choose from
							restaurants of any cuisine in the world.
						</p>
						<p className='text-[18px]'>
							But{' '}
							<span className='bg-lightBlue'>
								when it comes to families with kids, the belief that Bali is the
								best option seems to melt away.
							</span>{' '}
							The point is they face difficulties due to the lack of
							accommodations & infrastructure suiting their needs.
						</p>
					</motion.div>
					<motion.div
						initial='hidden'
						animate={controls}
						variants={imageVariants}
					>
						<img
							src='/assets/fourthBlock.jpg'
							alt='404'
							className='w-full px-[10px] md:px-0'
						/>
					</motion.div>
				</div>
			</Wrapper>
		</>
	)
}

export default FourthBlock
