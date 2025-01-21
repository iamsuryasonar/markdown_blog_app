import Link from 'next/link';
import { Roboto } from 'next/font/google'
import { getSortedPostsData } from '../lib/postUtility';

const roboto = Roboto({
  weight: ['900', '700', '400', '300', '100'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  fontFamily: ["Roboto", 'sans-serif'],
})

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <section className='flex flex-col'>
      <ul className='flex flex-col gap-2'>
        {allPostsData.map(({ id, date, title, description, read, ...rest }) => (
          <PostCard key={id} id={id} date={date} title={title} description={description} readTime={read.readingTime} />
        ))}
      </ul>
    </section>
  );
}

function PostCard({ id, date, title, description, readTime }) {
  return (
    <Link key={id} href={`/${id}`}>
      <li className={`p-6 hover:scale-[102%] transition-all duration-700`}>
        <p className={`${roboto.className} text-[#00FFCA] font-[900] text-3xl`}>{title}</p>
        <span className='flex gap-1'>
          <p className='font-thin'>{readTime} min read</p>
          <p className='font-thin'>•</p>
          <p className='font-thin'>{date}</p>
        </span>
        <p className='text-xl font-light'>{description}</p>
      </li>
    </Link>
  )
}