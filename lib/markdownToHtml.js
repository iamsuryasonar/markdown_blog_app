import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkToc from 'remark-toc';
import remarkGfm from 'remark-gfm';
import remarkSmartpants from 'remark-smartypants';
import remarkRehype from 'remark-rehype';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import { getPostMetaData } from '../lib/postUtility';

export async function markdownToHtml(slug, markdownContent) {
    const file = await unified()
        .use(remarkParse)
        .use(remarkSmartpants)
        .use(remarkGfm)
        .use(remarkRehype)
        .use(rehypeSlug)
        .use(rehypeDocument, { title: 'Blog' })
        .use(rehypePrettyCode)
        .use(rehypeFormat)
        .use(rehypeStringify)
        .process(markdownContent)

    const postMetaData = getPostMetaData(slug) // extract metadata from frontmatter to get toc

    const toc = await unified()
        .use(remarkParse)
        .use(remarkSmartpants)
        .use(remarkGfm)
        .use(remarkRehype)
        .use(rehypeSlug)
        .use(rehypePrettyCode)
        .use(rehypeFormat)
        .use(rehypeStringify)
        .process(postMetaData.toc)

    return { htmlContent: String(file), tocHtml: String(toc) }
}



