import Head from 'next/head'
import Link from 'next/Link'
import client from '../client'
import groq from 'groq'

const News = (props) => {
	const { posts = [] } = props
	return (
		<div>
			<Head>
				<title>Color Mill Design | News</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<h1 className='text-6xl'>News</h1>
				{posts.map(
					({ _id, title = '', slug = '', publishedAt = '' }) =>
						slug && (
							<li key={_id}>
								<Link
									prefetch
									href='/post/[slug]'
									as={`/post/${slug.current}`}>
									<a>{title}</a>
								</Link>{' '}
								({new Date(publishedAt).toDateString()})
							</li>
						)
				)}
			</main>
		</div>
	)
}

News.getInitialProps = async () => ({
	posts: await client.fetch(groq`
    *[_type == "post" && publishedAt < now()]|order(publishedAt desc)
`),
})

export default News
