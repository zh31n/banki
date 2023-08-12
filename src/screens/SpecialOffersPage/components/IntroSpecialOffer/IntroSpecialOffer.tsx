import React from 'react';
import s from "./IntroSpecialOffer.module.scss";
import ChoiseItem from "@/components/Choise/ChoiseItem/ChoiseItem";


type choisesT = {
    name: string
    active: boolean
}
type Props = {
    choises: choisesT[]
}

const IntroSpecialOffer = ({choises}: Props) => {

    const choiseItems = choises.map((el, index) => <ChoiseItem key={index} name={el.name} active={el.active}/>)

    return (
        <div className={s.page_info}>
            <div className={s.page_info_i}>
                <div className={s.pageName}>
                    Главная / Вклады / <mark>Специальные предложения</mark>
                </div>
                <div className={s.title}>
                    Специальные <mark>предложения</mark>
                </div>
                <div className={s.choiseItems}>{choiseItems}</div>
            </div>
        </div>
    );
};

export default IntroSpecialOffer;