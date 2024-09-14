import { HeaderProps } from './types/header.type'
import ServiceIcon from '../assets/service-icon'
import ReviewsIcon from '../assets/reviews-icon'
import LayerIcon from '../assets/layer-icon'
import CloseIcon from '../assets/close-icon'
import MenuIcon from '../assets/menu-icon'
import HomeIcon from '../assets/home-icon'

const Header: React.FC<HeaderProps> = ({ active }) => {
	return (
		<>
			<div className='md:h-40 fixed top-0 px-7 h-20 w-full flex justify-between items-center bg-transparent backdrop-blur-md z-40'>
				<div className='font-NerkoOne'>
					<div className='text-2xl leading-5'>
						<span>Abraham</span>
						<span> Domenick</span>
					</div>
					<div className='text-right text-lg'>
						<span>Web3</span>
						<span className='text-green-700'> Enthusiast</span>
					</div>
				</div>
				<MenuIcon className='w-7' />
			</div>

			{/** CATEGORY BANNER */}
			<div className='fixed hidden flex-col inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50'>
				<div className='w-full h-20 flex items-center justify-end pr-7'>
					<CloseIcon className='w-7' />
				</div>
				{/** MAIN CONTENT */}
				<div className='w-full h-full flex items-center justify-center'>
					<div className='max-w-[80%] bg-white rounded-2xl bg-opacity-60 flex flex-wrap justify-evenly font-NerkoOne'>
						<div className='flex flex-col bg-red-500 p-6 gap-1 items-center'>
							<HomeIcon className='w-14' />
							<span className='text-xl'>Home</span>
						</div>
						<div className='flex flex-col p-6 gap-1 items-center'>
							<ServiceIcon className='w-14' />
							<span className='text-xl'>Services</span>
						</div>
						<div className='flex flex-col p-6 gap-1 items-center'>
							<LayerIcon className='w-14' />
							<span className='text-xl'>Threads</span>
						</div>
						<div className='flex flex-col gap-1 p-6 items-center'>
							<ReviewsIcon className='w-14' />
							<span className='text-xl'>Reviews</span>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Header
