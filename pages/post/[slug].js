import client from '../../client'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import groq from 'groq'

function urlFor(source) {
	return imageUrlBuilder(client).image(source)
}

const Post = (props) => {
	const {
		title = 'Missing title',
		name = 'Missing name',
		categories,
		mainImage,
		authorImage,
		publishedAt,
		body,
	} = props

	

	return (
		<article className='mt-24 mx-[10vw]'>
			{mainImage && <img className='mx-auto' src={urlFor(mainImage).width(1440).url()} />}
			<div className='flex w-[1440px] mx-auto'>
				<aside className='w-1/5 m-10 flex flex-col'>
					{authorImage && (
						<div className='my-2 mx-auto mr-0'>
							<img
								className='rounded-full'
								src={urlFor(authorImage).width(70).url()}
							/>
						</div>
					)}
					<span className='text-right font-bold'>{name}</span>
					<span className='text-right mb-8'>{publishedAt}</span>
					{categories && (
						<ul className='text-right'>
							Posted in
							{categories.map((category) => (
								<li key={category}>{category}</li>
							))}
						</ul>
					)}
				</aside>
				<div className='mx-12 w-full '>
					<h1 className='text-6xl font-bold mt-8'>{title}</h1>
					<BlockContent
						blocks={body}
						imageOptions={{ w: 320, h: 240, fit: 'max' }}
						{...client.config()}
					/>
				</div>
			</div>
			<div className='bg-cyan-500 h-[2px] w-3/4 mx-auto my-36'></div>
		</article>
	)
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
    title,
    "name": author->name,
    "categories": categories[]->title,
	"authorImage": author->image,
	mainImage,
	publishedAt,
	body
}`

Post.getInitialProps = async function (context) {
	// It's important to default the slug so that it doesn't return "undefined"
	const { slug = '' } = context.query
	return await client.fetch(query, { slug })
}

export default Post
