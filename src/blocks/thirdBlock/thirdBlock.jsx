import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Wrapper from '../../layout/wrapper'

function ThirdBlock() {
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
			<div className='mt-24 relative mx-[20px] xl:mx-0 font-Poppins' ref={ref}>
				<motion.img
					src='/assets/thirdBlock2.jpg'
					alt='404'
					className='w-full h-auto'
					initial='hidden'
					animate={controls}
					variants={imageVariants}
				/>
				<motion.img
					src='/assets/thirdBlock.png'
					alt='404'
					className='absolute min-[320px]:top-[20px] min-[320px]:right-[30px] min-[350px]:top-[35px] min-[350px]:right-[50px] min-[400px]:top-[50px] min-[400px]:right-[60px] sm:top-[80px] w-[150px] sm:right-[100px] sm:w-[300px] md:top-[70px] lg:top-[120px] md:right-[90px] md:w-[400px] lg:w-[500px] lg:right-32'
					initial='hidden'
					animate={controls}
					variants={imageVariants}
				/>
			</div>
		</Wrapper>
	)
}

export default ThirdBlock
