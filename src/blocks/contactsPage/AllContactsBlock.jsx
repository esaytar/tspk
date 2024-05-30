import React from 'react'
import ContactsCard from '../../components/ContactsCard'

export default function AllContactsBlock() { 
    const contactsInfo = [
        {
            num: 1,
            name: '1 КОРПУС (Мурысева 84)',
            phoneNumber1: <p><a href='tel:+78482246592'>8 (8482) 24-65-92</a> - Приемная комиссия</p>,
            phoneNumber2: <p><a href="tel:+78482241025">8 (8482) 24-10-25</a> - Вахта 1 корпуса</p>,
            phoneNumber3: <p> <a href="tel:+78482243054">8 (8482) 24-30-54</a> - Приемная директора</p>,
            email: <a href="mailto:so_tspk@samara.edu.ru">so_tspk@samara.edu.ru</a>,
            address: '445012, Самарская область, г. Тольятти, ул. Мурысева, 84',
            link: 'https://yandex.ru/maps/-/CDbsMB6u',
            mode: 'bg-mainBlue text-white rounded-leftMobile lg:rounded-leftCard',
            fill: 'fill-white'
        },
        {
            num: 2,
            name: '2 КОРПУС (Ленинградская 28)',
            phoneNumber1: <p><a href="tel:+78482482093">8 (8482) 48-20-93</a> - Вахта 2 корпуса (очное ФК, АФК и заочное отделение)</p>,
            phoneNumber2: <p><a href="tel:+78482283644">8 (8482) 28-36-44</a> - Секретарь учебной части ФК, АФК</p>,
            phoneNumber3: '',
            email: <p><a href="mailto:college.korpys2@yandex.ru">college.korpys2@yandex.ru</a> - Секретарь учебной части ФК, АФК</p>,
            address: '445010, Самарская область, г. Тольятти, ул. Ленинградская, 28',
            link: 'https://yandex.ru/maps/-/CDbsMY6H',
            mode: 'bg-white text-grayMainText rounded-rightMobile lg:rounded-rightCard',
            fill: 'fill-grayMainText'
        },
    ]

    return (
        <div className='flex flex-col gap-5 w-full'>
            <div className='flex w-full flex-col lg:flex-row'>
                {
                    contactsInfo.map((item) => (
                        <ContactsCard 
                            key={item.num}
                            name={item.name}
                            firstNum={item.phoneNumber1}
                            secondNum={item.phoneNumber2}
                            thirdNum={item.phoneNumber3}
                            mail={item.email}
                            adress={item.address}
                            link={item.link}
                            mode={item.mode}
                            fillSVG={item.fill}
                        />
                    ))
                }
            </div>
            <p className='text-center text-grayMainText'>Для соединения с остальными службами необходимо позвонить на Вахту и сообщить службу для соединения. (Например: соедините меня с кабинетом 104) Заочное отделение находится во 2 корпусе, Ленинградская 28 (позвонить на вахту и попросить соединить с методистом заочного отделения) </p>
        </div>    
    )
}
