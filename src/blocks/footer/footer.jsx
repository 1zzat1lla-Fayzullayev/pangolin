import React from 'react'
import Wrapper from '../../layout/wrapper'
import { motion } from 'framer-motion'

const containerVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.5,
		},
	},
}

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 },
}

function Footer() {
	return (
		<>
			<div className='bg-green font-Poppins mt-[100px] pb-[25px]'>
				<Wrapper>
					<motion.div
						className='flex flex-col md:flex-row justify-between pt-[80px] mx-[20px] xl:mx-0'
						variants={containerVariants}
						initial='hidden'
						animate='visible'
					>
						<motion.div
							className='gap-[20px] flex flex-col mb-[40px] md:mb-0'
							variants={itemVariants}
						>
							<h2 className='text-[20px] md:text-[24px] font-semibold pb-[20px]'>
								Contact Us
							</h2>
							<div className='flex items-start gap-2'>
								<p className='font-medium'>Address: </p>
								<a
									href='https://www.google.com/search?kgmid=/g/11scjnyx8m&hl=en-LU&q=Family+Nest&kgs=641fae017813ebb6&shndl=17&shem=ssic&source=sh/x/kp/osrp/m5/1'
									target='_blank'
									className='transition-all ease-in-out hover:underline max-w-[580px]'
								>
									Jl. Labuansait Jl. Pantai Cemongkak, Pecatu, Kec. Kuta Sel.,
									Kabupaten Badung, Bali 80361, Indonesia
								</a>
							</div>
							<div className='flex items-center gap-2'>
								<p className='font-medium'>Phone number: </p>
								<a
									href='tel:+6281959999909'
									className='transition-all ease-in-out hover:underline'
								>
									+6281959999909
								</a>
							</div>
							<div className='flex items-center gap-2'>
								<p className='font-medium'>Mail to: </p>
								<a
									href='mailto:ask@familynest.com'
									target='_blank'
									className='transition-all ease-in-out hover:underline'
								>
									ask@familynest.com
								</a>
							</div>
							<p>PT. BLUE OCEAN CAPITAL</p>
						</motion.div>
						<motion.div
							className='gap-[20px] flex flex-col'
							variants={itemVariants}
						>
							<h2 className='text-[20px] md:text-[24px] font-semibold pb-[20px]'>
								Follow Us
							</h2>
							<div className='flex items-center gap-[20px]'>
								<a
									href='https://www.facebook.com/profile.php?id=100093279678896&'
									target='_blank'
									rel='noopener noreferrer'
								>
									<img
										src='/assets/facebook.svg'
										alt='facebook'
										className='w-[35px] md:w-[45px] cursor-pointer'
									/>
								</a>
								<a
									href='https://www.instagram.com/familynestbali'
									target='_blank'
									rel='noopener noreferrer'
								>
									<img
										src='/assets/instagram.svg'
										alt='instagram'
										className='w-[35px] md:w-[45px] cursor-pointer'
									/>
								</a>
								<a
									href='https://api.whatsapp.com/send/?phone=%2B622150890691&text=I%27m+inquiring+about+the+villas&type=phone_number&app_absent=0'
									target='_blank'
									rel='noopener noreferrer'
								>
									<img
										src='/assets/twiter.svg'
										alt='twitter'
										className='w-[35px] md:w-[45px] cursor-pointer'
									/>
								</a>
							</div>
							<div className='flex flex-col gap-2 mt-[20px]'>
								<input
									type='text'
									placeholder='Enter your email here*'
									className='px-3 py-2 rounded-[5px] outline-none border border-gray-300'
								/>
								<button className='bg-black text-[white] rounded-[5px] p-2 transition-all ease-in-out hover:bg-gray-800'>
									Subscribe Now
								</button>
							</div>
						</motion.div>
					</motion.div>
				</Wrapper>
			</div>
		</>
	)
}

export default Footer
