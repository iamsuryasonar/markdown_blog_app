'use client'
import Link from 'next/link';
import { useState, useRef } from 'react'
import { CgMenuMotion } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import useOutSideClick from '../hooks/useOnOutSideClick';
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: ['900', '700', '400', '300', '100'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
    fontFamily: ["Roboto", 'sans-serif'],
})

function SideBar({ tocHtml }) {
    const [menu, setMenu] = useState(false);
    const ref = useRef(null)

    function handleOutSideClick() {
        setMenu(false)
    }

    useOutSideClick(ref, handleOutSideClick)

    function onClickHandler(e) {
        if (e.target.tagName === 'A') {
            setMenu(!menu)
        }
    }

    if (menu) {
        return <aside ref={ref} className='h-full overscroll-contain overflow-y-auto flex flex-col fixed top-0 left-0 bottom-0 max-w-[600px] min-w-[30%] bg-slate-900 p-4'>
            <div className='flex flex-row justify-between items-center p-2'>
                <Link className={`${roboto.className} font-[700] text-2xl`} href='/'> Home </Link>
                <button
                    className=' text-[#00FFCA] hover:text-white rounded-full text-2xl'
                    onClick={() => { setMenu(!menu) }}>
                    <AiOutlineClose />
                </button>
            </div>
            <div className='sidebar' onClick={onClickHandler} dangerouslySetInnerHTML={{ __html: tocHtml }} />
        </aside>
    } else {
        return <button className='fixed bottom-4 left-4 bg-[#39ffd7] hover:bg-white hover:text-[#39ffd7] transition-all duration-500 rounded-full p-2 text-2xl shadow-2xl' onClick={() => { setMenu(!menu) }}>
            <CgMenuMotion className='' />
        </button>
    }
}

export default SideBar;