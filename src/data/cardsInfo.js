import asurso from '../assets/icons/cards/asurso.svg'
import bag from '../assets/icons/cards/bag.svg'
import courses from '../assets/icons/cards/courses.svg'
import docs from '../assets/icons/cards/docs.svg'
import fire from '../assets/icons/cards/fire.svg'
import info from '../assets/icons/cards/info-college.svg'
import moodle from '../assets/icons/cards/moodle.svg'
import people from '../assets/icons/cards/people.svg'
import puzzle from '../assets/icons/cards/puzzle.svg'
import timetable from '../assets/icons/cards/timetable.svg'
import way from '../assets/icons/cards/way.svg'
import wsr from '../assets/icons/cards/wsr.svg'

const cardsInfo = [
    {
        name: 'Сведения об образовательной организации',
        image: info,
        link: '/basic-info'
    },
    {
        name: 'Расписание занятий',
        image: timetable,
        link: ''
    },
    {
        name: 'Приемная комиссия',
        image: people,
        link: ''
    },
    {
        name: 'Наши специальности',
        image: bag,
        link: ''
    },
    {
        name: 'Дополнительное профессиональное образование',
        image: fire,
        link: ''
    },
    {
        name: 'Проф. мастерство Профессионалы',
        image: wsr,
        link: ''
    },
    {
        name: 'Дуальное обучение',
        image: puzzle,
        link: ''
    },
    {
        name: 'Содействие трудойстройству выпускников',
        image: way,
        link: ''
    },
    {
        name: 'Система дистанционного обучения Moodle',
        image: moodle,
        link: ''
    },
    {
        name: 'Перечень онлайн курсов',
        image: courses,
        link: ''
    },
    {
        name: 'Электронная система АСУ РСО',
        image: asurso,
        link: ''
    },
    {
        name: `Заказать справку`,
        image: docs,
        link: ''
    }
]

export default cardsInfo