import './markdown.css'
import { getSortedPostsData, getPostContent, getPostMetaData } from '../../lib/postUtility'
import { markdownToHtml } from '@/lib/markdownToHtml'
import SideBar from '../components/SideBar'
import Article from '../components/Article'

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
    const { htmlContent, tocHtml } = await markdownToHtml(slug, content)

    return (
        <>
            <SideBar tocHtml={tocHtml} />
            <Article postMetaData={postMetaData} htmlContent={htmlContent} />
        </>
    )
}

export default PostPage;

