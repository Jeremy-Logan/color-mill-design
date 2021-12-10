import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

export default function Layout({ children, pageTitle, description, previewImage}) {
	return (
		<>
			<Head>
			<html lang='en' />
				<title>{`Color Mill Design | ${pageTitle}`}</title>
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
				<meta property='og:title' content={`Color Mill Design | ${pageTitle}`} key="title" />
				<meta
					property='og:description'
					content={description}
					key='ogdesc'
				/>
				<meta property='og:type' content='website' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			{children}
			<Footer />
		</>
	)
}
