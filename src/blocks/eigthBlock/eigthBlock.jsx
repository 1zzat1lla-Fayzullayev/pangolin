import { motion, useAnimation } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import Wrapper from '../../layout/wrapper'

function EigthBlock() {
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
					className='flex items-end flex-col md:flex-row mt-[100px] justify-between gap-[50px] lg:gap-[150px] mx-[20px] xl:mx-0 font-Poppins pb-[100px] relative'
					ref={ref}
				>
					<motion.div
						initial='hidden'
						animate={controls}
						variants={imageVariants}
					>
						<img
							src='/assets/eigthBlock.jpg'
							alt='404'
							className='w-full px-[10px] md:px-0'
						/>
						<p className='max-w-[400px] mt-[50px] ml-[10px]'>
							The entire infrastructure of the Kids Club is aimed at{' '}
							<span className='bg-lightBlue'>
								continuous activities, development and entertainment of kids
							</span>{' '}
							under professional supervision.
						</p>
					</motion.div>
					<motion.div
						className='flex flex-col gap-[20px] md:max-w-[400px] lg:max-w-[430px] font-Poppins'
						initial='hidden'
						animate={controls}
						variants={textVariants}
					>
						<h2 className='text-[25px] md:text-[30px] lg:text-[40px] tracking-[10px] font-extralight '>
							INDOOR & OUTDOOR
						</h2>
						<div className='flex flex-col gap-4'>
							<div className='clk flex  gap-3 items-center'>
								<motion.div
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.8, delay: 0.3 }}
									className='box w-[20px] sm:w-[25px] md:w-[30px] h-[20px] sm:h-[25px] md:h-[30px] bg-pink'
								></motion.div>
								<motion.p
									initial={{ opacity: 0, x: -50 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.8, delay: 0.5 }}
									className='text-[11px] font-Poppins sm:text-xs md:text-[18px] w-[250px] font-medium text-pink'
								>
									VARIETY OF PLAY ROOMS
								</motion.p>
							</div>
							<div className=' flex gap-4 items-center'>
								<motion.div
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.8, delay: 0.3 }}
									className='box w-[20px] sm:w-[25px] md:w-[30px] h-[20px] sm:h-[25px] md:h-[30px] bg-purple'
								></motion.div>
								<motion.p
									initial={{ opacity: 0, x: -50 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.8, delay: 0.5 }}
									className='text-[11px] font-Poppins sm:text-xs md:text-[18px] w-[250px] font-medium text-purple'
								>
									GAMES IN GROUPS
								</motion.p>
							</div>
							<div className=' flex gap-4 items-center'>
								<motion.div
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.8, delay: 0.3 }}
									className='box w-[20px] sm:w-[25px] md:w-[30px] h-[20px] sm:h-[25px] md:h-[30px] bg-lightBlue'
								></motion.div>
								<motion.p
									initial={{ opacity: 0, x: -50 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.8, delay: 0.5 }}
									className='text-[11px] font-Poppins sm:text-xs md:text-[18px] w-[250px] font-medium text-lightBlue'
								>
									MASTER CLASSES
								</motion.p>
							</div>{' '}
							<div className='clk flex gap-4 items-center'>
								<motion.div
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.8, delay: 0.3 }}
									className='box w-[20px] sm:w-[25px] md:w-[30px] h-[20px] sm:h-[25px] md:h-[30px] bg-green'
								></motion.div>
								<motion.p
									initial={{ opacity: 0, x: -50 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.8, delay: 0.5 }}
									className='text-[11px] font-Poppins sm:text-xs md:text-[18px] w-[250px] font-medium text-green'
								>
									PERFORMANCES
								</motion.p>
							</div>
						</div>
					</motion.div>
					<img
						src='/assets/kids_club.png'
						alt='kids_club'
						className='absolute w-[150px] right-0 bottom-0'
					/>
				</div>
			</Wrapper>
		</>
	)
}

export default EigthBlock
