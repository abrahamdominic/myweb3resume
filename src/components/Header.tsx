import { HeaderProps } from './types/header.type'
import CloseIcon from '../assets/close-icon'
import MenuIcon from '../assets/menu-icon'
import HomeIcon from '../assets/home-icon'
import AboutIcon from '../assets/about-icon'

const Header: React.FC<HeaderProps> = ({ active }) => {
	return (
		<>
			<div className='md:h-40 fixed top-0 px-7 h-20 w-full flex justify-between items-center bg-transparent backdrop-blur-md z-40'>
				<div className='font-NerkoOne'>
					<div className='text-2xl leading-5'>
						<span>Abraham</span>
						<span> Domenic</span>
					</div>
					<div className='text-right text-lg'>
						<span>Web3</span>
						<span className='text-green-700'> Enthusiast</span>
					</div>
				</div>
				<MenuIcon className='w-7' />
			</div>

			{/** CATEGORY BANNER */}
			<div className='fixed flex flex-col inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-50'>
				<div className='w-full h-20 bg-red-300 flex items-center justify-end pr-7'>
					<CloseIcon className='w-7' />
				</div>
				{/** MAIN CONTENT */}
				<div className='w-full h-full bg-green-300 flex items-center justify-center'>
					<div className='max-w-[80%] bg-white rounded-2xl bg-opacity-60 flex flex-wrap justify-evenly font-NerkoOne'>
						<div className='flex flex-col p-6 gap-1 items-center'>
							<HomeIcon className='w-14' />
							<span className='text-xl'>Home</span>
						</div>
						<div className='flex flex-col p-6 gap-1 items-center'>
							<AboutIcon className='h-14' />
							<span className='text-xl'>About Me</span>
						</div>
						<div className='flex flex-col p-6 gap-1 items-center'>
							<HomeIcon className='w-14' />
							<span className='text-xl'>Home</span>
						</div>
						<div className='flex flex-col gap-1 p-6 items-center'>
							<HomeIcon className='w-14' />
							<span className='text-xl'>Home</span>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Header
