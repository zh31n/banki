import React from 'react';
import s from './IntroHealth.module.scss';
import BlueBtn from "@/UI/BlueBtn/BlueBtn";
import ChoiseItemsMap from "@/components/Choise/ChoiseItemsMap/ChoiseItemsMap";

type ItemT = {
    name: string
    active: boolean
}
const IntroHealth = ({items}:{items: ItemT[]}) => {
    return (
        <div className={s.intro}>
            <div className={s.info}>
                <div className={s.breadCrumbs}>Главная / Страхование / <mark>Жизнь и здоровье</mark></div>
                <div className={s.title}>Страхование <br/><mark>жизни и здоровья</mark></div>
                <div className={s.sub}>
                    Удобный способ застраховать здоровье и жизнь. Подберите для себя<br/> выгодный вариант.
                </div>
                <div className={s.cho_c}>
                    <ChoiseItemsMap choiseItems={items}/>
                </div>
            </div>
        </div>
    );
};

export default IntroHealth;