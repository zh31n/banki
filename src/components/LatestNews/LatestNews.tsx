import React from 'react';
import s from './LatestNews.module.scss';
import NewsItem from "@/components/NewsItem/NewsItem";
import BlueBtn from "@/UI/BlueBtn/BlueBtn";
import ChoiseItemsMap from "@/components/Choise/ChoiseItemsMap/ChoiseItemsMap";
import {NewsInterface} from "@/core/api/News";

interface ChoicesInterface {
    name: string;
    active: boolean;
}

const mockFilterItems: ChoicesInterface[] = [
    {name: 'Все', active: true},
    {name: 'Накопления', active: false},
    {name: 'Займы', active: false},
    {name: 'Страхование', active: false},
    {name: 'Безопасность', active: false},
]
interface LatestNewsProps {
    news: NewsInterface[];
}

const LatestNews = (props: LatestNewsProps) => {
    const {
        news,
    } = props;

    return (
        <div className={s.news}>
            <div className={s.title}>Свежие <span>новости</span></div>
            <div className={s.choises_cont}>
                <ChoiseItemsMap choiseItems={mockFilterItems} />
            </div>
            <div className={s.news_cont}>{news.map((item) => <NewsItem key={item.id} item={item}/>)}</div>
            <div className={s.btn_cont}>
                <BlueBtn text={'Смотреть все новости'} width={300}/>
            </div>
        </div>
    );
};

export default LatestNews;