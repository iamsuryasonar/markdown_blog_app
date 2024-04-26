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
        <div className=''>
            <p>{slug}</p>
            <div className="markdown m-8">
                <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </div>
        </div>
    )
}

export default PostPage;