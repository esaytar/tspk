import React, {useRef, useEffect} from 'react'
import {documentsInfo} from '../../../src/data/collegeInfo.jsx'
import InfoString from '../../../src/components/InfoString.jsx';

export default function DocumentsPage({func}) {
    useEffect(() => {
        func('Документы')
    }, [])

    return (
        <div className='text-18 flex flex-col gap-[1.88rem]'>
            {
                documentsInfo.map((item, index) => (
                    <InfoString 
                        title={item.title}
                        key={index}
                    >
                        {Array.isArray(item.content) ? (
                            item.content.map((contentItem, index) => 
                                <div key={index} className='px-2.5 flex flex-col gap-5' >{contentItem}</div>
                            )
                        ) : (
                            <div key={index} className='px-2.5'>{item.content}</div>
                        )}
                    </InfoString>
                ))
            }
        </div>
    )
}
