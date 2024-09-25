import React from 'react'
import { HeaderProps, HeaderLinks } from './types/header.type'

import ServiceIcon from '../assets/service-icon'
import ReviewsIcon from '../assets/reviews-icon'
import LayerIcon from '../assets/layer-icon'
import CloseIcon from '../assets/close-icon'
import MenuIcon from '../assets/menu-icon'
import HomeIcon from '../assets/home-icon'

const Header: React.FC<HeaderProps> = ({ active }) => {
	const [category, setCategory] = React.useState<boolean>(false)
	const [activeLinks, setActiveLinks] = React.useState<HeaderLinks>(active)
	const [initialAction, setInitialAction] = React.useState<HeaderLinks>(active)

	const categoryLinks = {
		card: React.useRef<HTMLElement>(null),
		wrapper: React.useRef<HTMLElement>(null)
	}

	React.useEffect(() => {
		let wrapper = categoryLinks.wrapper.current
		let card = categoryLinks.card.current

		wrapper.addEventListener('click', (e: MouseEvent) => {
			if (e.target.contains(card)) {
				setCategory(false)
			}
		})

		/** MAKE ICONS ACTIVE ON HOVER */
		const headerIcon = card.querySelectorAll('.header-icon')

		headerIcon.forEach(node => {
			node.addEventListener('mouseover', () => {
				let id = node.id.split('-')
				id = id[id.length - 1]

				setActiveLinks(id)
			})
		})
	}, [])

	return (
		<header className='h-20 md:h-24'>
			<nav className='h-20 md:h-24 fixed top-0 px-7 w-full flex justify-between items-center bg-blue-200 z-40'>
				<div>
					<a href='/'>
						<div className='md:text-[40px] text-2xl font-ProtestGuerrilla leading-5 md:leading-7'>
							<span>Abraham</span>
							<span> Domenick</span>
						</div>
						<div className='md:text-3xl font-NerkoOne text-right text-lg'>
							<span>Web3</span>
							<span className='text-green-700'> Enthusiast</span>
						</div>
					</a>
				</div>

				{/* DESKTOP NAV LINKS */}
				<div className='md:block hidden'>
					<ul className='flex gap-9'>
						<li
							className={`font-MontserratAlternates font-semibold text-base transition-all duration-200 px-4 py-2.5 rounded-full shadow-gray-500 ${
								activeLinks === 'home' && 'bg-white shadow-sm'
							}`}
							onClick={() => setInitialAction('home')}
							onMouseOver={() => setActiveLinks('home')}
							onMouseLeave={() => setActiveLinks(initialAction)}
						>
							<a href='#home-tab'>Home</a>
						</li>
						<li
							className={`font-MontserratAlternates font-semibold text-base transition-all duration-200 px-4 py-2.5 rounded-full shadow-gray-500 ${
								activeLinks === 'services' && 'bg-white shadow-sm'
							}`}
							onClick={() => setInitialAction('services')}
							onMouseOver={() => setActiveLinks('services')}
							onMouseLeave={() => setActiveLinks(initialAction)}
						>
							<a href='#services-tab'>Services</a>
						</li>
						<li
							className={`font-MontserratAlternates font-semibold text-base transition-all duration-200 px-4 py-2.5 rounded-full shadow-gray-500 ${
								activeLinks === 'threads' && 'bg-white shadow-sm'
							}`}
							onClick={() => setInitialAction('threads')}
							onMouseOver={() => setActiveLinks('threads')}
							onMouseLeave={() => setActiveLinks(initialAction)}
						>
							<a href='#threads-tab'>Threads</a>
						</li>
						<li
							className={`font-MontserratAlternates font-semibold text-base transition-all duration-200 px-4 py-2.5 rounded-full shadow-gray-500 ${
								activeLinks === 'reviews' && 'bg-white shadow-sm'
							}`}
							onClick={() => setInitialAction('reviews')}
							onMouseOver={() => setActiveLinks('reviews')}
							onMouseLeave={() => setActiveLinks(initialAction)}
						>
							<a href='#reviews-tab'>Reviews</a>
						</li>
					</ul>
				</div>

				<div className='md:hidden w-7' onClick={() => setCategory(e => !e)}>
					<MenuIcon />
				</div>
			</nav>

			{/** CATEGORY BANNER */}
			<div
				className={`md:hidden fixed transition-all duration-300 flex-col inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 category-wrapper ${
					category ? 'flex opacity-100' : 'opacity-0 pointer-events-none'
				}`}
				ref={categoryLinks.wrapper}
			>
				<div className='w-full h-20 flex items-center justify-end pr-7'>
					<div className='w-7' onClick={() => setCategory(false)}>
						<CloseIcon />
					</div>
				</div>
				{/** MAIN CONTENT */}
				<div
					className='w-full h-full flex items-center justify-center'
					ref={categoryLinks.card}
				>
					<div className='max-w-[80%] bg-white rounded-2xl bg-opacity-60 flex flex-wrap justify-evenly font-NerkoOne'>
						{/* HOME ICON */}
						<a href='#home-tab'>
							<div
								className='flex flex-col p-6 gap-1 items-center header-icon'
								id='header-icon-home'
							>
								<HomeIcon
									className='w-14'
									color={
										activeLinks === 'home' ? '#007100' : '#000000'
									}
								/>
								<span
									className={`text-xl ${
										activeLinks === 'home' && 'text-green-700'
									}`}
								>
									Home
								</span>
							</div>
						</a>
						{/* SERVICES ICON */}
						<a href='#services-tab'>
						<div
							className='flex flex-col p-6 gap-1 items-center header-icon'
							id='header-icon-services'
						>
							<ServiceIcon
								className='w-14'
								color={
									activeLinks === 'services' ? '#007100' : '#000000'
								}
							/>
							<span
								className={`text-xl ${
									activeLinks === 'services' && 'text-green-700'
								}`}
							>
								Services
							</span>
						</div>
						</a>
						{/* THREAD LAYER ICON */}
						<a href='#threads-tab'>
						<div
							className='flex flex-col p-6 gap-1 items-center header-icon'
							id='header-icon-threads'
						>
							<LayerIcon
								className='w-14'
								color={
									activeLinks === 'threads' ? '#007100' : '#000000'
								}
							/>
							<span
								className={`text-xl ${
									activeLinks === 'threads' && 'text-green-700'
								}`}
							>
								Threads
							</span>
						</div>
						</a>
						{/* REVIEWS ICON */}
						<a href='#reviews-tab'>
						<div
							className='flex flex-col gap-1 p-6 items-center header-icon'
							id='header-icon-reviews'
						>
							<ReviewsIcon
								className='w-14'
								color={
									activeLinks === 'reviews' ? '#007100' : '#000000'
								}
							/>
							<span
								className={`text-xl ${
									activeLinks === 'reviews' && 'text-green-700'
								}`}
							>
								Reviews
							</span>
						</div>
						</a>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
