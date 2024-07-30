import { motion, useAnimation } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import Wrapper from '../../layout/wrapper'

function NinthBlock() {
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
		<Wrapper>
			<div className='font-Poppins mt-[100px] mx-[20px] xl:mx-0' ref={ref}>
				<motion.div
					initial='hidden'
					animate={controls}
					variants={textVariants}
					className='flex flex-col lg:flex-row gap-[60px] lg:gap-0 items-center justify-between'
				>
					<div className='flex items-center gap-[20px]'>
						<div className='flex flex-col items-start gap-[20px]'>
							<h2 className='text-[18px] md:text-[24px] font-semibold text-pink'>
								1.500 m2 OF PLAYGROUNDS
							</h2>
							<p className='max-w-[330px] text-[14px] md:text-[16px]'>
								The mix of a spacious, air-conditioned building with two floors
								fully equipped for activities and games, and a thoughtful
								outdoor area allows kids to{' '}
								<span className='bg-pink'>have fun all day long.</span>
							</p>
						</div>
						<motion.img
							src='/assets/ninth_1.jpg'
							alt='404'
							className='w-[70px] md:w-[100px]'
							initial='hidden'
							animate={controls}
							variants={imageVariants}
						/>
					</div>

					<div className='flex items-center gap-[20px]'>
						<motion.img
							src='/assets/ninth_2.jpg'
							alt='404'
							className='w-[70px] md:w-[100px]'
							initial='hidden'
							animate={controls}
							variants={imageVariants}
						/>
						<div className='flex flex-col items-start gap-[20px]'>
							<h2 className='text-[18px] md:text-[24px] font-semibold text-lightBlue'>
								SENSORY INTEGRATION
							</h2>
							<p className='max-w-[330px] text-[14px] md:text-[16px]'>
								A developmental methodology that allows to use all five senses
								of the kid{' '}
								<span className='bg-lightBlue'>for harmonious development</span>{' '}
								and laying the foundation for future success in life.
							</p>
						</div>
					</div>
				</motion.div>
				<div className='flex my-[30px] lg:my-0'>
					<h2 className='text-[25px] md:leading-[50px] leading-[35px] md:text-[40px] lg:text-[50px] max-w-[300px] text-start font-extralight tracking-[8px] lg:leading-[55px] md:p-5'>
						UNIQUE FEATURES{' '}
					</h2>
				</div>
				<motion.div
					initial='hidden'
					animate={controls}
					variants={textVariants}
					className='flex flex-col lg:flex-row gap-[60px] lg:gap-0 items-center justify-between'
				>
					<div className='flex items-center gap-[20px]'>
						<div className='flex flex-col items-start gap-[20px]'>
							<h2 className='text-[18px] md:text-[24px] font-semibold text-yellow'>
								TRANSFORMATIVE SPACE
							</h2>
							<p className='max-w-[330px] text-[14px] md:text-[16px]'>
								A variety of mobile elements constantly change the space
								according to the current activity and each time create{' '}
								<span className='bg-yellow'>a new sense of space for kids</span>{' '}
								so that they never get bored.
							</p>
						</div>
						<motion.img
							src='/assets/ninth_3.jpg'
							alt='404'
							className='w-[70px] md:w-[100px]'
							initial='hidden'
							animate={controls}
							variants={imageVariants}
						/>
					</div>

					<div className='flex items-center gap-[20px]'>
						<motion.img
							src='/assets/ninth_4.jpg'
							alt='404'
							className='w-[70px] md:w-[100px]'
							initial='hidden'
							animate={controls}
							variants={imageVariants}
						/>
						<div className='flex flex-col items-start gap-[20px]'>
							<h2 className='text-[18px] md:text-[24px] font-semibold text-green'>
								GREEN DEVELOPMENT
							</h2>
							<p className='max-w-[330px] text-[14px] md:text-[16px]'>
								The use of <span className='bg-green'>natural materials</span>{' '}
								in construction and interior design, as well as for equipment
								and toys.
							</p>
							<p className='max-w-[330px] text-[14px] md:text-[16px]'>
								The rooftop of the building is used for{' '}
								<span className='bg-green'>solar panels</span> which produces
								environmentally friendly energy to supply the Kids Club.
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</Wrapper>
	)
}

export default React.memo(NinthBlock)
