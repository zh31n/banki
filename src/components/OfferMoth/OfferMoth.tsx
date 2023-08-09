import React from 'react';
import s from './OfferMoth.module.scss';
import arr_l from "@/assets/icons/banki_icon/Стрелка_left.svg";
import arr_r from "@/assets/icons/banki_icon/Стрелка_right.svg";
import ChoiseItem from "@/components/ChoiseItem/ChoiseItem";
import OfferItem from "@/components/OfferItem/OfferItem";
import loc_bank from "@/assets/icons/banki_icon/loco.svg";
import Image from "next/image";

type choiseItemsT = {
    name: string
    active: boolean
}
type offersT = {
    name: string
    subtitle: string
    img: string
    time: number
    year_money: number
}

const choiseItems: choiseItemsT[] = [
    {name: 'Вклады', active: true},
    {name: 'Накопительные счета', active: false},
    {name: 'Кредиты', active: false},
    {name: 'Дебетовые карты', active: false},
    {name: 'Ипотека', active: false},
    {name: 'Микрозаймы', active: false},
    {name: 'РКО', active: false},
    {name: 'Инвестиции', active: false},
    {name: 'Ипотека от ПИК', active: false},
]
const offers: offersT[] = [
    {name: 'Локо-Банк', subtitle: 'Добро Пожаловать. Локо', img: loc_bank, time: 370, year_money: 10.10},
    {name: 'Локо-Банк', subtitle: 'Добро Пожаловать. Локо', img: loc_bank, time: 370, year_money: 10.10},
    {name: 'Локо-Банк', subtitle: 'Добро Пожаловать. Локо', img: loc_bank, time: 370, year_money: 10.10},
    {name: 'Локо-Банк', subtitle: 'Добро Пожаловать. Локо', img: loc_bank, time: 370, year_money: 10.10}
]

const choiseItemsMap = choiseItems.map((el, index) => <ChoiseItem name={el.name} active={el.active} key={index}/>)
const offerItems = offers.map((el, index) => <OfferItem key={index} img={el.img} name={el.name} subtitle={el.subtitle}
                                                        time={el.time} year_money={el.year_money}/>)


const OfferMoth = () => {
    return (
        <div className={s.offer_month}>
            <div className={s.title}>Предложения <span>месяца</span></div>
            <div className={s.select_items}>{choiseItemsMap}</div>
            <div className={s.offer_cont}>
                <Image src={arr_l}/>
                {offerItems}
                <Image src={arr_r}/>
            </div>
        </div>
    );
};

export default OfferMoth;