import React from 'react'

export default function LinkedImage({link, image, alt}) {
    return (
        <a href={link} className=' h-[50px] lg:h-[100px] inline-block'>
            <img id='image-link' src={image} alt={alt} className='rounded-[0.625rem] h-full mx-5' style={{boxShadow: '4px 4px 10px 0 rgba(69, 129, 246, 0.15)'}} />
        </a>
    ) 
}