import Header from './components/Header'

export default function App(): React.FC {
	return (
		<div className='bg-blue-200 h-screen'>
			<Header active={'home'} />
		</div>
	)
}
