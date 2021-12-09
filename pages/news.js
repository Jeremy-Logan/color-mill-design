import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import client from '../client'
import imageUrlBuilder from '@sanity/image-url'
import groq from 'groq'
import Layout from '../components/layout'

function urlFor(source) {
	return imageUrlBuilder(client).image(source)
}

const News = (props) => {
	const { posts = [] } = props
	return (
		<>
			<Layout pageTitle='News'  description="Thoughts and insights from Mendocino County's Premiere Branding and Web Design Studio">

			<main>
				<h1 className='text-6xl font-serif mt-36 mx-[15vw]'>News</h1>
				<div className='grid md:grid-cols-3 grid-cols-1 gap-6 mx-auto w-[80vw] mt-36'>
					{posts.map(
						({
							_id,
							title = '',
							slug = '',
							publishedAt = '',
							mainImage = '',
							excerpt = '',
						}) =>
							slug && (
								<li
									key={_id}
									className='list-none flex flex-col mb-12 '>
									<Link
										
										href='/post/[slug]'
										as={`/post/${slug.current}`}>
										<img
											className='cursor-pointer'
											src={urlFor(mainImage)
												.width(800).
												height(600)
												.url()}
										/>
									</Link>{' '}
									<Link
										
										href='/post/[slug]'
										as={`/post/${slug.current}`}>
										<a className='text-2xl font-semibold mx-4 mt-2'>
											{title}
										</a>
									</Link>{' '}
									<span className='mx-4 my-2 text-sm'>
										{new Date(publishedAt).toDateString()}
									</span>
									<p className='mx-4'>
										{excerpt}
										<Link 
											
											href='/post/[slug]'
											as={`/post/${slug.current}`}>
											<a className="text-['#7700FF'] underline ml-2">Read more...</a>
										</Link>
									</p>
								</li>
							)
					)}
				</div>
			</main></Layout>
		</>
	)
}

News.getInitialProps = async () => ({
	posts: await client.fetch(groq`
    *[_type == "post" && publishedAt < now()]|order(publishedAt desc)
`),
})

export default News
