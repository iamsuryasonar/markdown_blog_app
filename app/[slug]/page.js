import './markdown.css'
import { getSortedPostsData, getPostContent, getPostMetaData } from '../../lib/postUtility'
import { markdownToHtml } from '@/lib/markdownToHtml'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: ['700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
    fontFamily: ["Roboto", 'sans-serif'],
})

export const generateStaticParams = async () => {
    const posts = getSortedPostsData();
    return posts.map(post => ({
        slug: post.id,
    }))
}

async function PostPage(props) {
    const slug = props.params.slug;
    const content = getPostContent(slug)
    const postMetaData = getPostMetaData(slug)
    const htmlContent = await markdownToHtml(content)

    return (
        <div className='flex flex-col'>
            <h1 className={`${roboto.className} text-[#00FFCA] px-4 py-2 self-start text-3xl font-bold capitalize`}>{postMetaData.title}</h1>
            <span className='px-4 flex gap-1'>
                <p className='text-sm font-thin'>{postMetaData.read.readingTime} min read</p>
                <p className='text-sm font-thin'>•</p>
                <p className='text-sm font-thin'>{postMetaData.date}</p>
            </span>
            <p className='px-4 text-sm font-thin'>{postMetaData.read.wordCount} words</p>
            <div className='w-full h-[1px] my-4 bg-slate-800'></div>
            <div className="markdown m-6">
                <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </div>
        </div>
    )
}

export default PostPage;