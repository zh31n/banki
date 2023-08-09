import React from 'react';
import s from './Feedback.module.scss';
import ChoiseItem from "@/components/ChoiseItem/ChoiseItem";
import FeedbackItem from "@/components/FeedbackItem/FeedbackItem";
import BlueBtn from "@/components/BlueBtn/BlueBtn";

const chois = [
    {name: 'Все', active: true},
    {name: 'МФО', active: false},
    {name: 'Страховые компании', active: false},
    {name: 'Инвестиции', active: false},
]
const choiseItems = chois.map((el, index) => <ChoiseItem key={index} name={el.name} active={el.active}/>)

const Feedback = () => {
    return (
        <div className={s.feedback}>
            <div className={s.title}>
                <mark>Что говорят</mark>
                наши клиенты
            </div>
            <div className={s.choise_items}>{choiseItems}</div>
            <div className={s.feedback_cont}>
                <FeedbackItem/>
                <FeedbackItem/>
                <FeedbackItem/>
            </div>
            <div className={s.btn_cont}>
                <button className={s.blueTrBtn}>Оставить отзыв</button>
                <BlueBtn text={'Смотреть все отзывы'} width={300}/>
            </div>
        </div>
    );
};

export default Feedback;