import '@styles/globals.css'
import Layout from '@components/layout'


function Application({ Component, pageProps }) {
	return (
		<div  className='overflow-hidden'>
			
			
				<Component {...pageProps} />
			
		</div>
	)
}

export default Application
