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
        link: '/basic-data'
    },
    {
        name: 'Расписание занятий',
        image: timetable,
        link: '/error'
    },
    {
        name: 'Приемная комиссия',
        image: people,
        link: '/error'
    },
    {
        name: 'Наши специальности',
        image: bag,
        link: '/error'
    },
    {
        name: 'Дополнительное профессиональное образование',
        image: fire,
        link: 'http://x927215g.beget.tech/index.html'
    },
    {
        name: 'Проф. мастерство Профессионалы',
        image: wsr,
        link: '/error'
    },
    {
        name: 'Дуальное обучение',
        image: puzzle,
        link: '/error'
    },
    {
        name: 'Содействие трудойстройству выпускников',
        image: way,
        link: '/error'
    },
    {
        name: 'Система дистанционного обучения Moodle',
        image: moodle,
        link: 'https://new-moodle.tspk.org/login/index.php'
    },
    {
        name: 'Перечень онлайн курсов',
        image: courses,
        link: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRl0KPCK0w3Hmd_iuqzj3sGd0LoQTBNsjNPhS5l5XyK_TiiL-06GUDqQ8ehaZIm_3Ulry-D-2_BJtBL/pubhtml?gid=0&single=true'
    },
    {
        name: 'Электронная система АСУ РСО',
        image: asurso,
        link: 'https://spo.asurso.ru/security/#/login'
    },
    {
        name: 'Заказать справку',
        image: docs,
        link: 'https://forms.yandex.ru/u/624426f8af261e15d298638a/'
    }
]

export default cardsInfo