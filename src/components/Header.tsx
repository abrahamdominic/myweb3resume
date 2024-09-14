import { HeaderProps } from './types/header.type'
import MenuIcon from '../assets/MenuIcon'

const Header: React.FC<HeaderProps> = ({ active }) => {
	return (
		<div className='md:h-40 px-7 h-20 w-full flex justify-between items-center bg-red-200 backdrop-blur-md z-50'>
			<div className='font-ProtestGuerrilla text-2xl'>
				<span className=''>Abraham</span>
				<span className='text-green-700'> Domenic</span>
			</div>
			<div className='w-7'>
				<MenuIcon />
			</div>
		</div>
	)
}

export default Header
