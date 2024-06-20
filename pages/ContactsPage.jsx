import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async';
import AllContactsBlock from '../../src/blocks/contactsPage/AllContactsBlock'
import Map from '../../src/components/Map'
import QuestionForm from '../../src/components/QuestionForm'


export default function ContactsPage() {
  return (
    <>
      <Helmet>
        <title>Контакты | Тольяттинский социально-педагогический колледж</title>
      </Helmet>
      <div className='flex flex-col gap-[1.43rem] px-[2.14rem] w-full mt-[5.5rem] 
        lg:max-w-[80rem] xl:p-0 md:gap-[3.75rem] 2xl:max-w-[73%] 2xl:min-w-[84.5rem]'>
        <AllContactsBlock/>
        <div className='flex rounded-[1.88rem] flex-col lg:flex-row shadow-newShad items-center w-full lg:gap-[3.75rem] overflow-hidden'>
          <QuestionForm/>
          <div className='h-full w-full'>
            <Map styles='lg:h-[36.3rem] !w-full'/> 
          </div>
        </div>
      </div>
    </>
  )
}
