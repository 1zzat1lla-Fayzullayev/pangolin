import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Wrapper from '../../layout/wrapper'

function TwentyfirstBlock() {
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
					src='/assets/twentyfirst_1.jpg'
					alt='404'
					className='w-full h-auto'
					initial='hidden'
					animate={controls}
					variants={imageVariants}
				/>
				<motion.img
					src='/assets/twentyfirst_2.png'
					alt='404'
					className='absolute min-[320px]:top-[50px] min-[320px]:right-[55px] min-[350px]:top-[60px] min-[350px]:right-[80px] min-[400px]:top-[80px] min-[400px]:right-[90px] sm:top-[80px] w-[100px] sm:right-[100px] sm:w-[300px] md:top-[25%] lg:top-[120px] md:right-[150px] md:w-[250px] lg:w-[400px] xl:w-[500px] xl:top-[20%] xl:right-[170px] lg:right-[150px]'
					initial='hidden'
					animate={controls}
					variants={imageVariants}
				/>
			</div>
		</Wrapper>
	)
}

export default TwentyfirstBlock
