import React, {useRef} from 'react'
import { Helmet } from 'react-helmet-async';
import HeadingInfoPage from '../../../src/components/HeadingInfoPage';
import {documentsInfo} from '../../../src/data/collegeInfo.jsx'
import InfoString from '../../../src/components/InfoString.jsx';

export default function DocumentsPage() {
    const listRef = useRef()

    return (
        <div className='flex flex-col gap-[1.43rem] px-[2.14rem] w-full mt-[5.5rem] 
        lg:max-w-[80rem] xl:p-0 md:gap-[3.75rem] 2xl:max-w-[73%] 2xl:min-w-[84.5rem]'>
            <Helmet>
                <title>Сведения об образовательной организации | Тольяттинский социально-педагогический колледж</title>
            </Helmet>
            <HeadingInfoPage listRef={listRef} titleList='Документы'/>

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
        </div>
    )
}
