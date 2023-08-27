import React from 'react';
import s from './LatestNews.module.scss';
import ChoiseItem from "@/components/Choise/ChoiseItem/ChoiseItem";
import new_1 from '@/assets/icons/new_1.png';
import new_2 from '@/assets/icons/new_2.png';
import NewsItem from "@/components/NewsItem/NewsItem";
import BlueBtn from "@/UI/BlueBtn/BlueBtn";
import ChoiseItemsMap from "@/components/Choise/ChoiseItemsMap/ChoiseItemsMap";
import {StaticImageData} from "next/image";

type choisesT = {
    name: string
    active: boolean
}
type newsT = {
    title: string
    img: StaticImageData
    subtitle: string
    text: string
    date: string
    views: number
    down_new: {
        date: string,
        views: string,
        title: string,
        text: string,
    }
}

const choises: choisesT[] = [
    {name: 'Все', active: true},
    {name: 'Накопления', active: false},
    {name: 'Займы', active: false},
    {name: 'Страхование', active: false},
    {name: 'Безопасность', active: false},
]
const news: newsT[] = [
    {
        title: 'Льготное обслуживание и кэшбэк на образование:',
        subtitle: 'как работает «Молодежная СберКарта» от Сбербанка',
        img: new_1,
        text: '«Молодежная СберКарта» от Сбербанка — это дебетовая карта, рассчитанная на подростков и студентов. Разобрали, как она работает и какие бонусы дает.',
        date: '30.06.2023',
        views: 124242,
        down_new: {
            date: '30.06.2023',
            views: '124242',
            title: 'Как получить до 7,5 тыс. рублей за три месяца:',
            text: 'шесть актуальных депозитов июля',
        }
    },
    {
        title: 'Экономические циклы:',
        subtitle: 'на каком этапе сейчас экономика и будет ли нефть по 300 долларов',
        img: new_2,
        text: 'Каждый цикл включает несколько фаз – период подъема и спада экономики. Циклы происходят в экономике как страны, так и мира.',
        date: '30.06.2023',
        views: 124242,
        down_new: {
            date: '30.06.2023',
            views: '124242',
            title: 'Как получить до 7,5 тыс. рублей за три месяца:',
            text: 'шесть актуальных депозитов июля',
        }
    },
    {
        title: 'Экономические циклы:',
        subtitle: 'на каком этапе сейчас экономика и будет ли нефть по 300 долларов',
        img: new_2,
        text: 'Каждый цикл включает несколько фаз – период подъема и спада экономики. Циклы происходят в экономике как страны, так и мира.',
        date: '30.06.2023',
        views: 124242,
        down_new: {
            date: '30.06.2023',
            views: '124242',
            title: 'Как получить до 7,5 тыс. рублей за три месяца:',
            text: 'шесть актуальных депозитов июля',
        }
    },
]

const choiseItems = choises.map((el, index) => <ChoiseItem key={index} name={el.name} active={el.active}/>)
const newsItems = news.map((el, index) => <NewsItem key={index} title={el.title} img={el.img} subtitle={el.subtitle}
                                                    text={el.text}
                                                    date={el.date} views={el.views} date_t={el.down_new.date}
                                                    views_t={el.down_new.views} title_t={el.down_new.title}
                                                    text_t={el.down_new.text}/>)

const LatestNews = () => {
    return (
        <div className={s.news}>
            <div className={s.title}>Свежие <span>новости</span></div>
            <div className={s.choises_cont}>
                <ChoiseItemsMap choiseItems={choises} />
            </div>
            <div className={s.news_cont}>{newsItems}</div>
            <div className={s.btn_cont}>
                <BlueBtn text={'Смотреть все новости'} width={300}/>
            </div>
        </div>
    );
};

export default LatestNews;