import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Wrapper from '../../layout/wrapper'

function FivethBlock() {
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
						initial='hidden'
						animate={controls}
						variants={imageVariants}
					>
						<img
							src='/assets/fivethBlock.jpg'
							alt='404'
							className='w-full px-[10px] md:px-0'
						/>
					</motion.div>
					<motion.div
						className='flex flex-col gap-[20px] md:max-w-[400px] lg:max-w-[450px] font-Poppins'
						initial='hidden'
						animate={controls}
						variants={textVariants}
					>
						<h2 className='text-[25px] md:text-[40px] font-extralight tracking-[7px] xl:w-[500px]'>
							BALI WELCOMES FAMILIES WITH KIDS!
						</h2>
						<p className='text-[18px] xl:w-[500px]'>
							Developing{' '}
							<span className='bg-yellow'>
								kids’ infrastructure in Bali is important for the entire
								community of the island:
							</span>{' '}
							for families with children who come as tourists, and for expat
							parents, and for the locals themselves.
						</p>
						<ul className='list-disc ml-[50px]'>
							<li>
								<p>
									Do kids get more out of Bali than enjoying the lush tropical
									nature and going to the beach?
								</p>
							</li>
							<li>
								<p>Is there access to modern trends in edutainment here?</p>
							</li>
							<li>
								<p>
									<span className='bg-yellow'>
										Will Bali be a precious experience for a kid for life?
									</span>
								</p>
							</li>
						</ul>
						<p className='text-[18px]'>
							<span className='bg-lightBlue'>
								Our project gives the long-awaited answer - YES!
							</span>
						</p>
					</motion.div>
				</div>
			</Wrapper>
		</>
	)
}

export default FivethBlock
