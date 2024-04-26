import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkToc from 'remark-toc'
import remarkGfm from 'remark-gfm'
import remarkSmartpants from 'remark-smartypants'
import remarkRehype from 'remark-rehype'
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'

export async function markdownToHtml(markdownContent) {
    const file = await unified()
        .use(remarkParse)
        .use(remarkToc)
        .use(remarkSmartpants)
        .use(remarkGfm)
        .use(remarkRehype)
        .use(rehypeSlug)
        .use(rehypeDocument, { title: 'Blog' })
        .use(rehypePrettyCode)
        .use(rehypeFormat)
        .use(rehypeStringify)
        .process(markdownContent)

    return String(file)
}



