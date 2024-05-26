import {React, useRef } from 'react'
import { Helmet } from 'react-helmet';
import HeadingInfoPage from '../../../src/components/HeadingInfoPage';
import {structureInfo} from '../../../src/data/collegeInfo.jsx'
import InfoString from '../../../src/components/InfoString.jsx';

export default function ManagementStructurePage() {
    const listRef = useRef()

    return (
        <div className='flex flex-col xl:w-[73%] gap-[1.43rem] md:gap-[3.75rem] px-[2.14rem] lg:p-0 w-full mt-[5.5rem]'>
            <Helmet>
                <title>Сведения об образовательной организации | Тольяттинский социально-педагогический колледж</title>
            </Helmet>
            <HeadingInfoPage listRef={listRef} titleList='Структура и органы управления образовательной организацией'/>

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
        </div>
    )
}
