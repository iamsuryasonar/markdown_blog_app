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

    return <>
        <aside ref={ref} className='min-w-[300px] sticky top-[40px] bottom-0 max-h-[calc(100vh-40px)] overflow-auto overscroll-contain hidden lg:flex lg:flex-col z-40 bg-slate-950 p-4'>
            <div className='flex flex-row justify-between items-center px-2'>
                <p className={`${roboto.className} font-[700] text-2xl`} > In this article </p>
            </div>
            <div className='sidebar text-sm' dangerouslySetInnerHTML={{ __html: tocHtml }} />
        </aside>
        {
            menu ? <aside ref={ref} className='w-[300px] z-50 h-full lg:hidden flex flex-col fixed top-0 left-0 bottom-0  bg-slate-900 p-4'>
                <div className='flex flex-row justify-between items-center px-2'>
                    <p className={`${roboto.className} font-[700] text-2xl`} > In this article </p>
                    <button
                        className=' text-[#00FFCA] hover:text-white rounded-full text-2xl'
                        onClick={() => { setMenu(!menu) }}>
                        <AiOutlineClose />
                    </button>
                </div>
                <div className='sidebar h-full overscroll-contain overflow-y-auto' onClick={onClickHandler} dangerouslySetInnerHTML={{ __html: tocHtml }} />
            </aside>
                : <button className='block lg:hidden fixed bottom-4 left-4 bg-[#39ffd7] hover:bg-white hover:text-[#39ffd7] transition-all duration-500 rounded-full p-2 text-2xl shadow-2xl' onClick={() => { setMenu(!menu) }}>
                    <CgMenuMotion className='' />
                </button>
        }
    </>
}

export default SideBar;