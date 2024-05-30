import React from 'react'
import { Helmet } from 'react-helmet-async'
import HeadBlock from '../../src/blocks/mainPage/HeadBlock/HeadBlock'
import QuickAccessBlock from '../../src/blocks/mainPage/QuickAccessBlock'
import NewsBlock from '../../src/blocks/mainPage/NewsBlock'
import ContactsBlock from '../../src/blocks/mainPage/ContactsBlock'

export default function MainPage() {
  return (
    <>
      <Helmet>
        <title>Главная | Тольяттинский социально-педагогический колледж</title>
      </Helmet>
      <HeadBlock/>
      <div className='flex flex-col xl:w-[73%] gap-[1.43rem] md:gap-[3.75rem] px-[1.42rem] xl:p-0 w-full'>
        <QuickAccessBlock/>
        <NewsBlock/>
        <ContactsBlock/>
      </div>
    </>
  )
}
