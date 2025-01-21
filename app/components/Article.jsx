import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: ['700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
    fontFamily: ["Roboto", 'sans-serif'],
})

function Article({ postMetaData, htmlContent }) {
    return <div className='flex flex-col overflow-hidden'>
        <h1 className={`${roboto.className} text-[#00FFCA] p-4 self-start text-3xl font-bold capitalize`}>{postMetaData.title}</h1>
        <span className='px-4 flex gap-1'>
            <p className='text-sm font-thin'>{postMetaData.read.readingTime} min read</p>
            <p className='text-sm font-thin'>•</p>
            <p className='text-sm font-thin'>{postMetaData.date}</p>
        </span>
        <p className='px-4 text-sm font-thin'>{postMetaData.read.wordCount} words</p>
        <div className='w-full h-[1px] my-4 bg-slate-800'></div>
        <div className="markdown mx-6 my-2">
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
    </div>
}

export default Article;