import React from 'react'
import { Link } from 'react-router-dom'

export default function LinkedCard({children, link}) {
    return (
        <>
            <Link to={link} className='lg:min-h-[200px] lg:rounded-[1.25rem] rounded-[0.71rem] py-[1.43rem] px-[0.71rem] lg:p-[1.875rem] gap-5 flex flex-col items-center justify-center
                text-white/80 lg:text-18 text-base font-semibold lg:hover:bg-[#1762f4cc] duration-[.15s] bg-[#434343]'>
                {children}
            </Link>
        </>
    )
}
