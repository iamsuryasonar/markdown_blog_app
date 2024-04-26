import { getSortedPostsData } from '../lib/postUtility';
import Link from 'next/link';

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <section className='flex flex-col'>
      <h1 className='p-2 self-center text-3xl font-bold'>Blog</h1>
      <ul className='flex flex-col gap-4'>
        {allPostsData.map(({ id, date, title, ...rest }) => (
          <PostCard id={id} date={date} title={title} />
        ))}
      </ul>
    </section>
  );
}

function PostCard({ id, date, title }) {
  return (
    <Link key={id} href={`/${id}`}>
      <li className='bg-slate-900 p-2 rounded-md'>
        <p>{title}</p>
        <p>{id}</p>
        <p>{date}</p>
      </li>
    </Link>
  )
}