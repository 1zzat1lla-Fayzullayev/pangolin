import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Wrapper from '../../layout/wrapper'

function EighteenthBlock() {
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
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	}

	return (
		<Wrapper>
			<div
				className='mt-24 relative mx-[20px] xl:mx-0 font-Poppins overflow-hidden'
				ref={ref}
			>
				<motion.img
					src='/assets/eighteenth_1.jpg'
					alt='404'
					className='w-full h-auto'
					initial='hidden'
					animate={controls}
					variants={imageVariants}
				/>
				<motion.img
					src='/assets/eighteenth_2.png'
					alt='404'
					className='absolute min-[320px]:top-[40px] min-[320px]:right-[55px] min-[350px]:top-[50px] min-[350px]:right-[80px] min-[400px]:top-[70px] min-[400px]:right-[90px] sm:top-[80px] w-[100px] sm:right-[100px] sm:w-[300px] md:top-[100px] lg:top-[120px] md:right-[150px] md:w-[250px] lg:w-[400px] xl:w-[450px] xl:top-[20%] xl:right-[18%] lg:right-[200px]'
					initial='hidden'
					animate={controls}
					variants={imageVariants}
				/>
			</div>
		</Wrapper>
	)
}

export default EighteenthBlock
