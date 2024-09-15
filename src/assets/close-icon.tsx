const CloseIcon: React.FC = ({
	className,
	color = '#ffffff'
}: {
	className: string
	color: string
}) => (
	<div className={className}>
		<svg
			viewBox='0 0 24.00 24.00'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			stroke={color}
		>
			<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
			<g
				id='SVGRepo_tracerCarrier'
				strokeLinecap='round'
				strokeLinejoin='round'
				stroke='#CCCCCC'
				strokeWidth='3'
			></g>
			<g id='SVGRepo_iconCarrier'>
				<path
					d='M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5'
					stroke={color}
					strokeWidth='2'
					strokeLinecap='round'
				></path>
				<path
					d='M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7'
					stroke={color}
					strokeWidth='2'
					strokeLinecap='round'
				></path>
			</g>
		</svg>
	</div>
)

export default CloseIcon
