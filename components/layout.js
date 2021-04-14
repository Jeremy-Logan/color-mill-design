import Header from '@components/header.js'
import Footer from '@components/footer'

export default function Layout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}
