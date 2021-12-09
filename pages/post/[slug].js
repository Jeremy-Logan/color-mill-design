import client from '../../client'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import groq from 'groq'
import Layout from '../.components/layout.js'

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
		excerpt
	} = props

	

	return (
		<Layout pageTitle={title} description={excerpt} previewImage={mainImage}>		<article className='mt-24 mx-[5vw] md:mx-[10vw]'>
			{mainImage && <img className='mx-auto' src={urlFor(mainImage).width(1440).url()} />}
			<div className='flex flex-col xl:flex-row w-[90vw] md:w-[80vw] mx-auto'>
				<aside className='w-1/2 md:w-1/4 m-4 md:m-10 flex flex-row md:flex-col'>
				<div className='flex flex-col md:flex-row ml-4 '>
					{authorImage && (
						<div className='my-2 md:mx-auto mr-0 w-7/12'>
							<img
								className='rounded-full'
								src={urlFor(authorImage).width(70).url()}
							/>
						</div>
					)}
					<div className='flex flex-col  lg:w-5/12'>
					<span className='xl:text-right font-bold'>{name}</span>
					<span className='xl:text-right mb-8'>{publishedAt}</span></div></div>
					{categories && (
						<ul className='xl:text-right font-semibold'>
							Posted in
							{categories.map((category) => (
								<li className='font-normal' key={category}>{category}</li>
							))}
						</ul>
					)}
				</aside>
				<div className='mx-auto md:mx-12 w-[85vw] xl:w-full '>
					<h1 className='text-2xl text-center xl:text-left md:text-5xl font-bold mt-4 md:mt-8 mb-4'>{title}</h1>
					<div className='bg-cyan-500 h-[2px] w-3/4 mx-auto lg:mx-0 my-8'></div>
					<BlockContent
						blocks={body}
						imageOptions={{ w: 320, h: 240, fit: 'max' }}
						{...client.config()}
					/>
				</div>
			</div>
			<div className='bg-cyan-500 h-[2px] w-3/4 mx-auto my-36'></div>
		</article></Layout>
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
