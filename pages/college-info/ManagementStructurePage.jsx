import {React, useRef, useEffect } from 'react'
import {structureInfo} from '../../../src/data/collegeInfo.jsx'
import InfoString from '../../../src/components/InfoString.jsx';

export default function ManagementStructurePage({func}) {
    useEffect(() => {
        func('Структура и органы управления образовательной организацией')
    }, [])

    return (
        <div className='text-18 flex flex-col gap-[1.88rem]'>
            {
                structureInfo.map((item, index) => (
                    <InfoString 
                        title={item.title}
                        key={index}
                    >
                        {Array.isArray(item.content) ? (
                            item.content.map((contentItem, contentIndex) => 
                                <div key={Date().now} className='px-2.5 flex flex-col gap-5' >{contentItem}</div>
                            )
                        ) : (
                            <div key={Date().now} className='px-2.5'>{item.content}</div>
                        )}
                    </InfoString>
                ))
            }
        </div>
    )
}
