import React from 'react';
import s from './Feedback.module.scss';
import FeedbackItem from "@/components/FeedbackItem/FeedbackItem";
import BlueBtn from "@/components/BlueBtn/BlueBtn";
import TitleMarkLast from "@/components/TitleMarkLast/TitleMarkLast";
import ChoiseItemsMap from "@/components/ChoiseItemsMap/ChoiseItemsMap";


const Feedback = ({title, sub, chois}) => {
    return (
        <div className={s.feedback}>
            {(!title || !sub) ? <div className={s.title}>
                <mark>Что говорят</mark>
                наши клиенты
            </div> : <TitleMarkLast title={'Отзывы'} sub={'о вкладах'}/>
            }
            {(chois && chois.length !== 0) && <div className={s.choise_items}>
                <ChoiseItemsMap choiseItems={chois}/>
            </div>}
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