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
      <div className='flex flex-col gap-[1.43rem] px-[1.42rem] w-full
        xl:w-[73%] md:gap-[3.75rem] xl:p-0 2xl:min-w-[84.5rem] lg:max-w-[80rem]'>
        <QuickAccessBlock/>
        <NewsBlock/>
        <ContactsBlock/>
      </div>
    </>
  )
}
