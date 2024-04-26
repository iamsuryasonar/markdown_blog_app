import './markdown.css'
import { getSortedPostsData, getPostContent } from '../../lib/postUtility'
import { markdownToHtml } from '@/lib/markdownToHtml'

export const generateStaticParams = async () => {
    const posts = getSortedPostsData();
    return posts.map(post => ({
        slug: post.id,
    }))
}

async function PostPage(props) {
    const slug = props.params.slug;
    const content = getPostContent(slug)
    const htmlContent = await markdownToHtml(content)

    return (
        <div className='flex flex-col'>
            <h1 className='p-4 self-center text-3xl font-bold capitalize'>{slug.replace(/[_ -]/g, ' ')}</h1>
            <div className='w-full h-[1px] bg-slate-800'></div>
            <div className="markdown m-6">
                <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </div>
        </div>
    )
}

export default PostPage;