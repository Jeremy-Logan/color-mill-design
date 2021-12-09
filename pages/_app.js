import '@styles/globals.css'
import Layout from '@components/layout'


function Application({ Component, pageProps }) {
	return (
		<div  className='overflow-hidden'>
			<Layout>
			
				<Component {...pageProps} />
			</Layout>
		</div>
	)
}

export default Application
