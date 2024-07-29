import React, { useEffect, useState } from 'react'
import FirstBlock from './blocks/firstBlock/firstBlock'
import SecondBlock from './blocks/secondBlock/secondBlock'
import ThirdBlock from './blocks/thirdBlock/thirdBlock'
import FourthBlock from './blocks/fourthBlock/fourthBlock'
import FivethBlock from './blocks/fivethBlock/fivethBlock'
import SixthBlock from './blocks/sixthBlock/sixthBlock'
import SeventhBlock from './blocks/seventhBlock/seventhBlock'
import EigthBlock from './blocks/eigthBlock/eigthBlock'
import NinthBlock from './blocks/ninthBlock/ninthBlock'
import TenthBlock from './blocks/tenthBlock/tenthBlock'
import EleventhBlock from './blocks/eleventhBlock/eleventhBlock'
import TwelfthBlock from './blocks/twelfthBlock/twelfthBlock'
import ThirteenthBlock from './blocks/thirteenthBlock/thirteenthBlock'
import FourteenthBlock from './blocks/fourteenthBlock/fourteenthBlock'
import FiveteenthBlock from './blocks/fiveteenthBlock/fiveteenthBlock'
import SixteenthBlock from './blocks/sixteenthBlock/sixteenthBlock'
import SeventeenthBlock from './blocks/seventeenthBlock/seventeenthBlock'
import EighteenthBlock from './blocks/eighteenthBlock/eighteenthBlock'
import NinteenthBlock from './blocks/ninteenthBlock/ninteenthBlock'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
	const [loading, setLoading] = useState(true)
	const [showLoadingSpinner, setShowLoadingSpinner] = useState(false)

	useEffect(() => {
		const loadingDotsTimer = setTimeout(() => {
			setShowLoadingSpinner(true)
		}, 2000)

		const mainContentTimer = setTimeout(() => {
			setLoading(false)
		}, 5000)

		return () => {
			clearTimeout(loadingDotsTimer)
			clearTimeout(mainContentTimer)
		}
	}, [])

	if (loading) {
		return (
			<div className='flex items-center justify-center h-screen bg-gray-100'>
				<div className='text-center'>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}
						className='flex items-center gap-[30px]'
					>
						<motion.h2
							initial={{ y: -20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className='text-[25px] md:text-[30px] font-bold'
						>
							Welcome to
						</motion.h2>
						<motion.img
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.5 }}
							src='/assets/kids_club.png'
							alt='logo'
							className='w-[150px] md:w-[200px] mt-2 mx-auto'
						/>
					</motion.div>
					<AnimatePresence>
						{showLoadingSpinner && (
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 20 }}
								transition={{ duration: 0.5 }}
								className='mt-4'
							>
								<div className='lds-roller'>
									{[...Array(8)].map((_, i) => (
										<div key={i}></div>
									))}
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		)
	}

	return (
		<>
			<FirstBlock />
			<SecondBlock />
			<ThirdBlock />
			<FourthBlock />
			<FivethBlock />
			<SixthBlock />
			<SeventhBlock />
			<EigthBlock />
			<NinthBlock />
			<TenthBlock />
			<EleventhBlock />
			<TwelfthBlock />
			<ThirteenthBlock />
			<FourteenthBlock />
			<FiveteenthBlock />
			<SixteenthBlock />
			<SeventeenthBlock />
			<EighteenthBlock />
			<NinteenthBlock />
		</>
	)
}

export default App
