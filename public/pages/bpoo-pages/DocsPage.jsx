import React, {useRef} from 'react'
import { Helmet } from 'react-helmet-async';
import HeadingInfoPage from '../../../src/components/HeadingInfoPage';

export default function DocsPage() {
    const listRef = useRef()

    return (
        <div className='flex flex-col gap-[1.43rem] px-[2.14rem] w-full mt-[5.5rem] 
        lg:max-w-[80rem] xl:p-0 md:gap-[3.75rem] 2xl:max-w-[73%] 2xl:min-w-[84.5rem]'>
            <Helmet>
                <title>Базовая профессиональная образовательная организация | Тольяттинский социально-педагогический колледж</title>
            </Helmet>
            <HeadingInfoPage listRef={listRef} titleList='Документы' titlePage='Базовая профессиональная образовательная организация'/>
        </div>
    )
}
