import React from 'react';
import s from './IntroMicroloans.module.scss';
import CustomWhiteSelectTitle from "@/UI/CustomWhiteSelectTitle/CustomWhiteSelectTitle";
import MoneySelect from "@/UI/MoneySelect/MoneySelect";
import CustomInputTitle from "@/UI/CustomInputTitle/CustomInputTitle";
import BlueBtn from "@/UI/BlueBtn/BlueBtn";
import ChoiseItemsMap from "@/components/Choise/ChoiseItemsMap/ChoiseItemsMap";

type ItemT = {
    name: string
    active: boolean
}
type Props = {
    items: ItemT[]
}

const IntroMicroloans = ({items}: Props) => {
    return (
        <div className={s.intro}>
            <div className={s.info_cont}>
                <div className={s.breadCrumbs}>
                    Главная / Вклады / <mark>Микрозаймы</mark>
                </div>
                <div className={s.title}>
                    Микрозаймы <mark>в Москве</mark>
                </div>
                <div className={s.sub}>
                    Выгодные предложения по срочным микрозаймам для физических лиц.<br/> Выбирайте низкие проценты,
                    удобные способы оплаты и зачисления денег на карту.<br/>
                    <mark>Оставьте заявку на микрозайм онлайн.</mark>
                </div>
                <div className={s.ch_cont}>
                    <ChoiseItemsMap choiseItems={items}/>
                </div>
            </div>
        </div>
    );
};

export default IntroMicroloans;