import React from 'react'

export default function InfoString({children, title}) {
    return (
        <div className='flex flex-col gap-5 text-18'>
            <div className='px-2.5 py-[0.31rem] bg-mainBlue/10 rounded-[0.31rem] text-mainBlue font-semibold'>{title}</div>
            <div className='text-grayMainText flex flex-col gap-4'>
                {children}
            </div>
        </div>
    ) 
}
