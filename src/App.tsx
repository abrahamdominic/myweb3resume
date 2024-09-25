import Header from './components/Header'

export default function App(): React.FC {
	return (
		<div className='bg-blue-200 h-screen'>
			<Header active={'home'} />
			<div className='md:h-[calc(100%-96px)] h-[calc(100%-80px)] md:rounded-none rounded-t-3xl px-10 bg-white text-center flex flex-col items-center'>
				<p className='mt-10 font-jakartasans text-base'>
					👋, I am{' '}
					<span className='text-green-500 font-medium font-MontserratAlternates'>
						Abraham Domenick
					</span>{' '}
					and I am a Prolific
				</p>
				<p className='mt-3 text-5xl font-extrabold font-MontserratAlternates'>
					Brand & <span className='text-green-600'>Marketing</span>{' '}
					Strategist.
				</p>
				<p className='mt-5 font-Montserrat'>
					Enhancing projects visibility and fostering meaningful
					connections within the crypto space.
				</p>
				<div className='mt-5 flex gap-2 font-Montserrat font-medium text-sm'>
					<a href='#'>
						<button className='rounded-full bg-green-600 text-white px-2.5 py-3'>
							Contact me
						</button>
					</a>
					<a href='#'>
						<button className='rounded-full text-green-600 border border-green-600 px-2.5 py-3'>
							Join my community
						</button>
					</a>
				</div>
			</div>
		</div>
	)
}
