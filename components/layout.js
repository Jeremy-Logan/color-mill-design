import Header from '@components/header.js'
import Footer from './footer.js'

export default function Layout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}
