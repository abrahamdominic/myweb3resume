import Header from './components/Header'
import QuoteIcon from './assets/icons/quote.png'

export default function App(): React.FC {
	return (
		<div className='bg-blue-200'>
			<Header active={'home'} />

			<div
				className='md:rounded-none rounded-3xl px-10 md:px-32 py-2 bg-white text-center flex flex-col items-center'
				id='home-tab'
			>
				<p className='mt-10 font-JakartaSans text-base'>
					👋, I am{' '}
					<span className='text-green-500 font-medium font-MontserratAlternates'>
						Abraham Domenick
					</span>{' '}
					and I am a Prolific
				</p>
				<p className='mt-3 md:mt-6 text-5xl font-extrabold font-MontserratAlternates'>
					Brand & <span className='text-green-600'>Marketing</span>{' '}
					Strategist.
				</p>
				<p className='mt-5 md:mt-8 font-Montserrat'>
					Enhancing projects visibility and fostering meaningful
					connections within the crypto space.
				</p>
				<div className='mt-8 md:mt-10 flex gap-2 font-Montserrat font-medium text-[13px]'>
					<a href='#'>
						<button className='transition rounded-full bg-green-600 text-white hover:text-green-600 hover:bg-white border border-green-600 px-2 md:px-3 py-3'>
							Contact me
						</button>
					</a>
					<a href='#'>
						<button className='transition rounded-full text-green-600 hover:bg-green-600 hover:text-white border border-green-600 px-2 md:px-3 py-3'>
							Join my community
						</button>
					</a>
				</div>
				<div className='mt-5'>
					<img src='https://ernestofweb3.netlify.app/images/real%20hero.png' />
				</div>
			</div>

			<br id='services-tab' />
			<div className='mt-5 text-center px-10 md:px-32 font-MontserratAlternates'>
				<p className='font-medium text-2xl md:text-5xl h'>
					Prolific and Efficient Web-3 Services in one place.
				</p>
				<br />
				<p className='text-sm md:text-lg'>
					Discover my prolific Web3 skills that drive innovation and unlock
					new possibilities in the decentralized world.
				</p>
			</div>

			<div className='mt-10 md:mt-16 px-8 w-full flex flex-wrap gap-10 justify-center'>
				<div className='md:w-[45%] w-full text-center p-8 rounded-lg font-MontserratAlternates bg-white shadow-lg shadow-gray-400'>
					<p className='text-xl mb-3 font-semibold'>
						Prolific Brand and marketing strategy
					</p>
					<p className='text-sm'>
						I have masterred the art of Prolific Brand and Marketing
						Strategy to elevate your Web3 presence and impact.
					</p>
					<img
						className='w-[70%] mx-auto mt-10'
						src='https://ernestofweb3.netlify.app/images/_all_the_data_re_hh4w.svg'
					/>
				</div>

				<div className='md:w-[45%] w-full text-center p-8 rounded-lg font-MontserratAlternates bg-white shadow-lg shadow-gray-400'>
					<p className='text-xl mb-3 font-semibold'>
						Prolific writing Services. Threads & Threads
					</p>
					<p className='text-sm'>
						Masterful Web3 content creation, delivering impactful Threads
						& Threads.
					</p>
					<img
						className='w-[70%] mx-auto mt-10'
						src='https://ernestofweb3.netlify.app/images/writer.svg'
					/>
				</div>

				<div className='md:w-[45%] w-full text-center p-8 rounded-lg font-MontserratAlternates bg-white shadow-lg shadow-gray-400'>
					<p className='text-xl mb-3 font-semibold'>
						Iconic Researcher and Analyst
					</p>
					<p className='text-sm'>
						Expert in delivering sharp, data-driven insights as an Iconic
						Researcher and Analyst in the web3 space.
					</p>
					<img
						className='w-[70%] mx-auto mt-10'
						src='https://ernestofweb3.netlify.app/images/_the_search_s0xf.svg'
					/>
				</div>
			</div>

			<br id='threads-tab' />
			<br />
			<div className='mt-5 text-center px-7 md:px-32 font-MontserratAlternates'>
				<p className='font-medium text-2xl md:text-5xl h'>
					Some Prominent Threads by my humble self.
				</p>
				<br />
				<p className='text-sm md:text-lg'>
					Explore my latest Twitter threads for insights, tips, and
					opportunities in the world of Web3 jobs.
				</p>
			</div>

			<div className='mt-10 md:mt-16 px-8 w-full flex flex-wrap gap-10 justify-center'>
				<div className='md:w-[45%] w-full p-3 rounded-lg font-MontserratAlternates transition duration-300 bg-neutral-100 hover:bg-green-600'>
					<div className='mb-5 w-full'>
						<img
							className='object-contain object-center rounded-lg w-full'
							src='https://ernestofweb3.netlify.app/images/Thread%201.jpeg'
						/>
					</div>
					<p className='text-xl mb-4 font-semibold'>
						The Ultimate Job Hunting Strategy/Guide.
					</p>
					<p className='text-sm'>
						Here are 15 easy to navigate websites you can use to find
						early projects while job hunting.
					</p>
					<a href='#'>
						<button className='px-4 py-2 rounded-full bg-white border border-gray-200 shadow-md mt-5 font-Montserrat text-sm font-medium text-green-600'>
							Learn More »
						</button>
					</a>
				</div>

				<div className='md:w-[45%] w-full p-3 rounded-lg font-MontserratAlternates transition duration-300 bg-neutral-100 hover:bg-green-600'>
					<div className='mb-5 w-full'>
						<img
							className='object-contain object-center rounded-lg w-full'
							src='https://ernestofweb3.netlify.app/images/t2.jpeg'
						/>
					</div>
					<p className='text-xl mb-4 font-semibold'>
						Always Choose Value. Find out more from the thread.
					</p>
					<p className='text-sm'>
						As a job hunter, I've always been the type not to focus on
						price but the value I can bring to the team.
					</p>
					<a href='#'>
						<button className='px-4 py-2 rounded-full bg-white border border-gray-200 shadow-md mt-5 font-Montserrat text-sm font-medium text-green-600'>
							Learn More »
						</button>
					</a>
				</div>
			</div>

			<br id='reviews-tab' />
			<br />
			<br />
			<div className='mt-5 text-center px-7 md:px-32 font-MontserratAlternates'>
				<p className='font-medium text-2xl md:text-5xl h'>
					Find out what web3 Devs think of my services.
				</p>
				<br />
				<p className='text-sm md:text-lg'>
					Explore honest feedback from Web3 developers who have experienced
					my services firsthand.
				</p>
			</div>

			<div className='mt-10 md:mt-16 px-8 w-full flex flex-wrap gap-10 justify-center'>
				<div className='md:w-[45%] w-full p-3 rounded-lg font-MontserratAlternates bg-white'>
					<img src={QuoteIcon} />

					<p className='text-md mt-5 mb-4 font-semibold'>
						“Working with Ernest has been one of the most stress free
						transactions i have had in a while.”
					</p>

					<a href='https://x.com/dave_conco'>
						<div className='flex gap-3 mt-2'>
							<img
								className='w-12 rounded-full'
								src='https://ernestofweb3.netlify.app/images/Alex%20Stage%20Community.jpg'
							/>
							<div className='flex flex-col justify-between'>
								<p className='font-MontserratAlternates font-semibold'>
									Dave Conco
								</p>
								<p className='text-[12px]'>
									Founder, PhpSlides Framework
								</p>
							</div>
						</div>
					</a>
				</div>

				<div className='md:w-[45%] w-full p-3 rounded-lg font-MontserratAlternates bg-white'>
					<img src={QuoteIcon} />

					<p className='text-md mt-5 mb-4 font-semibold'>
						“The thread contest hosted by Ernest brought us lots of
						visibility, volume & investors. His dedication is unbeatable.”
					</p>

					<a href='https://x.com/dave_conco'>
						<div className='flex gap-3 mt-2'>
							<img
								className='w-12 rounded-full'
								src='https://ernestofweb3.netlify.app/images/Apexx.jpg'
							/>
							<div className='flex flex-col justify-between'>
								<p className='font-MontserratAlternates font-semibold'>
									Sonny Apex
								</p>
								<p className='text-[12px]'>Founder, Apex AI</p>
							</div>
						</div>
					</a>
				</div>
			</div>

			<div className='mt-10 rounded-3xl text-center p-10 bg-white'>
				<p className='font-MontserratAlternates font-extrabold text-2xl'>
					Now that you have been&nbsp;
					<span className='text-green-600'>convinced,</span> hit any button
					below.
				</p>
				<div className='mt-8 md:mt-10 flex justify-center gap-2 font-Montserrat font-medium text-[13px]'>
					<a href='#'>
						<button className='transition rounded-full bg-green-600 text-white hover:text-green-600 hover:bg-white border border-green-600 px-2 md:px-3 py-3'>
							Contact me
						</button>
					</a>
					<a href='#'>
						<button className='transition rounded-full text-green-600 hover:bg-green-600 hover:text-white border border-green-600 px-2 md:px-3 py-3'>
							Join my community
						</button>
					</a>
				</div>
			</div>

			<footer className='text-center mt-28 px-5 pb-10'>
				<p className='font-MontserratAlternates md:text-2xl text-lg font-extrabold'>
					Abraham Domenick |&nbsp;
					<span className='font-Montserrat'>
						Web3&nbsp;
						<span className='text-green-600'>Enthusiast</span>
					</span>
				</p>

				<hr className='border-t-2 border-green-600 mt-8' />

				<div className='mt-5 flex font-MontserratAlternates md:font-semibold font-medium md:text-lg text-sm md:justify-evenly justify-around'>
					<a href='#home-tab' className='hover:text-green-600'>
						Home
					</a>
					<a href='#services-tab' className='hover:text-green-600'>
						Services
					</a>
					<a href='#threads-tab' className='hover:text-green-600'>
						Threads
					</a>
					<a href='#reviews-tab' className='hover:text-green-600'>
						Reviews
					</a>
				</div>

				<div className='mt-8 flex justify-evenly'>
					<div className='md:p-4 p-3 rounded-full bg-white md:w-16 w-12'>
						<img
							className='w-full'
							src='https://ernestofweb3.netlify.app/images/twitter%20(1).png'
						/>
					</div>
					<div className='md:p-4 p-3 rounded-full bg-white md:w-16 w-12'>
						<img
							className='w-full'
							src='https://ernestofweb3.netlify.app/images/telegram.png'
						/>
					</div>
					<div className='md:p-4 p-3 rounded-full bg-white md:w-16 w-12'>
						<img
							className='w-full'
							src='https://ernestofweb3.netlify.app/images/linkedin-logo.png'
						/>
					</div>
					<div className='md:p-4 p-3 rounded-full bg-white md:w-16 w-12'>
						<img
							className='w-full'
							src='https://ernestofweb3.netlify.app/images/discord.png'
						/>
					</div>
				</div>

				<div className='text-center mt-8 text-sm font-medium font-MontserratAlternates'>
					<p>
						&copy; <span className='text-green-600'>2024</span> Ernest of
						Web3.
					</p>
					<p>All rights reserved.</p>
				</div>
			</footer>
		</div>
	)
}
