import Link from "next/link";
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: ['900', '700', '400', '300', '100'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
    fontFamily: ["Roboto", 'sans-serif'],
})

function NavBar() {
    return <nav className='sticky top-0 left-0 right-0 h-[40px] w-full z-40 flex items-center justify-center bg-slate-950 border-b-[1px] border-slate-700'>
        <div className='max-w-7xl w-full px-6 flex justify-between items-center'>
            <Link href={'/'} className={`${roboto.className} text-xl font-[900]`}>Web Snippets</Link>
            {/* <a className='hover:border-[#00FFCA] border-[2px] border-transparent rounded-full p-[2px]' href='https://iamsuryasonar.netlify.app' target='_blank'>
            <img className='w-10 h-10 rounded-full' src='https://iamsuryasonar.netlify.app/assets/dp-bIzYPUqU.jpg'></img>
          </a> */}
        </div>
    </nav>
}

export default NavBar;