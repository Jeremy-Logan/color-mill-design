import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

export default function Layout({ children, pageTitle, description, currentURL, previewImage}) {
	return (
		<>
			<Head>
				<meta property='og:url' content={currentURL} key='ogurl' />
				<meta
					property='og:image'
					content={previewImage ? {previewImage} : null}
					key='ogimage'
				/>
				<meta
					property='og:site_name'
					content='Color Mill Design'
					key='ogsitename'
				/>
				<meta property='og:title' content={`Color Mill Design | ${pageTitle}`} key='ogtitle' />
				<meta
					property='og:description'
					content={description}
					key='ogdesc'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			{children}
			<Footer />
		</>
	)
}
