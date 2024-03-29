import { useEffect } from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import '@styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Application({ Component, pageProps }) {
	const router = useRouter()
	useEffect(() => {
		const handleRouteChange = (url) => {
			gtag.pageview(url)
		}
		router.events.on('routeChangeComplete', handleRouteChange)
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange)
		}
	}, [router.events])

	return (
		<div className='overflow-hidden'>
			<Script
				strategy='afterInteractive'
				src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
			/>
			<Script
				id='gtag-init'
				strategy='afterInteractive'
				dangerouslySetInnerHTML={{
					__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
            });
            `,
				}}
			/><Header/>
			<Component {...pageProps} />
			<Footer/>
		</div>
	)
}

export default Application
