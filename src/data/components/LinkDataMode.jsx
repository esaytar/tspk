import React from 'react'
import docPDF from '../../assets/icons/doc_pdf.svg'

export default function LinkDataMode({link, text}) {
    return (
        <a className='flex items-center underline gap-1 w-fit' href={link}> 
            <img src={docPDF} alt="PDF-файл" /> 
            {text}
        </a>
    )
}
