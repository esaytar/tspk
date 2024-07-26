import React, {useEffect} from 'react'
import InfoString from '../../../src/components/InfoString'
import {criteriInfo} from '../../../src/data/teachersInfo'

export default function CriteriaPage({func}) {
    useEffect(() => {
        func('Критерии назначения стимулирующих выплат')
    }, [])

    return (
        <div className='text-18 flex flex-col gap-[1.45rem]'>
            {
                criteriInfo.map((item, index) => (
                    <InfoString 
                        title={item.title}
                        key={index}
                    >
                        {Array.isArray(item.content) ? (
                            item.content.map((contentItem, index) => 
                                <div key={index} className='px-2.5 flex flex-col gap-5' >{contentItem}</div>
                            )
                        ) : (
                            <div className='px-2.5'>{item.content}</div>
                        )}
                    </InfoString>
                ))
            }
            <a className='underline text-mainBlue' href="https://docs.google.com/forms/d/e/1FAIpQLSeeKkWkTECsQLXHFZcFXOciv1ULf1VgWwEEaNkgD-8mwMYmpQ/viewform" target='_blank'>Форма для обсуждения критериев назначения стимулирующих выплат</a>
        </div>
    )
}