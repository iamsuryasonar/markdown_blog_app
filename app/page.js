import { getSortedPostsData } from '../lib/postUtility';
import Link from 'next/link';

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <section className='flex flex-col'>
      <h1 className='p-4 self-center text-3xl font-bold'>Blog</h1>
      <div className='w-full h-[1px] bg-slate-800'></div>
      <ul className='flex flex-col gap-2 '>
        {allPostsData.map(({ id, date, title, ...rest }) => (
          <PostCard key={id} id={id} date={date} title={title} />
        ))}
      </ul>
    </section>
  );
}

function PostCard({ id, date, title }) {
  return (
    <Link key={id} href={`/${id}`}>
      <li className='bg-slate-900 p-4 m-4 rounded-md border-[1px] border-slate-800'>
        <p className='text-2xl'>{title}</p>
        <p className='text-sm font-thin'>{date}</p>
      </li>
    </Link>
  )
}