import Header from './components/Header'
import Icon from './assets/icons/icon.png'
import QuoteIcon from './assets/icons/quote.png'
import TwitterIcon from './assets/icons/twitter.png'
import DiscordIcon from './assets/icons/discord.png'
import TelegramIcon from './assets/icons/telegram.png'
import LinkedInLogo from './assets/icons/linkedin-logo.png'

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
					<a href='https://t.me/abdominic1'>
						<button className='transition rounded-full bg-green-600 text-white hover:text-green-600 hover:bg-white border border-green-600 px-2 md:px-3 py-3'>
							Contact me
						</button>
					</a>
					<a href='https://t.me/celestialchads'>
						<button className='transition rounded-full text-green-600 hover:bg-green-600 hover:text-white border border-green-600 px-2 md:px-3 py-3'>
							Join my community
						</button>
					</a>
				</div>
				<div className='mt-5'>
					<img src={Icon} />
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
						src='reviews/_all_the_data_re_hh4w.svg'
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
						src='reviews/writer.svg'
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
						src='reviews/_the_search_s0xf.svg'
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
							src='/reviews/51attack.jpeg'
						/>
					</div>
					<p className='text-xl mb-4 font-semibold'>
						A Blockchain can be Hacked by 51% Attack
					</p>
					<p className='text-sm'>
						Here are ways a blockchain can be hacked and how to prevent it.
					</p>
					<a href='https://x.com/Abrahamdomenick/status/1836371771693433077'>
						<button className='px-4 py-2 rounded-full bg-white border border-gray-200 shadow-md mt-5 font-Montserrat text-sm font-medium text-green-600'>
							Learn More »
						</button>
					</a>
				</div>

				<div className='md:w-[45%] w-full p-3 rounded-lg font-MontserratAlternates transition duration-300 bg-neutral-100 hover:bg-green-600'>
					<div className='mb-5 w-full'>
						<img
							className='object-contain object-center rounded-lg w-full'
							src='/reviews/discord.jpeg'
						/>
						
					</div>
					<p className='text-xl mb-4 font-semibold'>
						Discord Server Bot Series. Find out more from the thread.
					</p>
					<p className='text-sm'>
						Are you a Community Manager or Moderator who don't know how to
						set up Discord bot in this thread you will find valuable
						insights on how to set up a discord bots.
					</p>
					<a href='https://x.com/Abrahamdomenick/status/1820772486100738329'>
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
						“Working with Dominic has been one of the most stress free
						transactions i have had in a while.”
					</p>

					<div className='flex gap-3 mt-2'>
						<img
							className='w-12 rounded-full'
							src='/reviews/adtoshi.jpg'
						/>
						<div className='flex flex-col justify-between'>
							<p className='font-MontserratAlternates font-semibold'>
								Adtoshi
							</p>
							<p className='text-[12px]'>Founder, Acomunity DAO</p>
						</div>
					</div>
				</div>
				<div className='md:w-[45%] w-full p-3 rounded-lg font-MontserratAlternates bg-white'>
					<img src={QuoteIcon} />

					<p className='text-md mt-5 mb-4 font-semibold'>
						“I love working with Dominic he's so good in what he does.”
					</p>

					<div className='flex gap-3 mt-2'>
						<img
							className='w-12 rounded-full'
							src='/reviews/mogu.jpg'
						/>
						<div className='flex flex-col justify-between'>
							<p className='font-MontserratAlternates font-semibold'>
								Mogu
							</p>
							<p className='text-[12px]'>Founder, Green Tv DAO</p>
						</div>
					</div>
				</div>

				<div className='md:w-[45%] w-full p-3 rounded-lg font-MontserratAlternates bg-white'>
					<img src={QuoteIcon} />

					<p className='text-md mt-5 mb-4 font-semibold'>
						“The Discord Server built by Dominic is a professional server
						and i really love working with him, his community building
						skills is top notch.”
					</p>

					<div className='flex gap-3 mt-2'>
						<img
							className='w-12 rounded-full'
							src='/reviews/david-jackson.png'
						/>
						<div className='flex flex-col justify-between'>
							<p className='font-MontserratAlternates font-semibold'>
								David Crypto Jackson
							</p>
							<p className='text-[12px]'>Co-Founder, Green Tv DAO</p>
						</div>
					</div>
				</div>
			</div>

			<div className='mt-10 rounded-3xl md:rounded-none text-center p-10 bg-white'>
				<p className='font-MontserratAlternates font-extrabold text-2xl'>
					Now that you have been&nbsp;
					<span className='text-green-600'>convinced,</span> hit any button
					below.
				</p>
				<div className='mt-8 md:mt-10 flex justify-center gap-2 font-Montserrat font-medium text-[13px]'>
					<a href='https://t.me/abdominic1'>
						<button className='transition rounded-full bg-green-600 text-white hover:text-green-600 hover:bg-white border border-green-600 px-2 md:px-3 py-3'>
							Contact me
						</button>
					</a>
					<a href='https://t.me/celestialchads'>
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
					<a href='https://x.com/abrahamdomenick'>
						<div className='md:p-4 p-3 rounded-full bg-white md:w-16 w-12'>
							<img className='w-full' src={TwitterIcon} />
						</div>
					</a>
					<a href='https://t.me/abdominic1'>
						<div className='md:p-4 p-3 rounded-full bg-white md:w-16 w-12'>
							<img className='w-full' src={TelegramIcon} />
						</div>
					</a>
					<a href='https://linkedin.com/in/abrahamdominicnewton'>
						<div className='md:p-4 p-3 rounded-full bg-white md:w-16 w-12'>
							<img className='w-full' src={LinkedInLogo} />
						</div>
					</a>
					<a href='#'>
						<div className='md:p-4 p-3 rounded-full bg-white md:w-16 w-12'>
							<img className='w-full' src={DiscordIcon} />
						</div>
					</a>
				</div>

				<div className='text-center mt-8 text-sm font-medium font-MontserratAlternates'>
					<p>
						&copy; <span className='text-green-600'>2024</span> Abraham
						Domenick.
					</p>
					<p>All rights reserved.</p>
				</div>
			</footer>
		</div>
	)
}
