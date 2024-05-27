import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async';
import AllContactsBlock from '../../src/blocks/contactsPage/AllContactsBlock'
import Map from '../../src/components/Map'
import QuestionForm from '../../src/components/QuestionForm'


export default function ContactsPage() {
  useEffect(() => {
    document.title = 'Контакты'
  }, [])

  return (
    <>
      <Helmet>
        <title>Контакты | Тольяттинский социально-педагогический колледж</title>
      </Helmet>
      <div className='flex flex-col xl:w-[73%] gap-[1.43rem] md:gap-[3.75rem] px-[1.42rem] lg:p-0 w-full mt-[5.5rem]'>
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
