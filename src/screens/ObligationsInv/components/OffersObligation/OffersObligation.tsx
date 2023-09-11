'use client'

import React from 'react';
import s from './OffersObligation.module.scss';
import CustomSelect from "@/UI/CustomSelect/CustomSelect";
import lines from "@/assets/icons/banki_icon/3-line.svg";
import BlueBtn from "@/UI/BlueBtn/BlueBtn";
import {StaticImageData} from "next/image";
import BrokerOffersItemsMap from "@/components/BrokerItems/BrokerOffersItemsMap/BrokerOffersItemsMap";
import StockOfferItem from "@/screens/StocksInvestPage/components/StockOfferItem/StockOfferItem";
import ObliagtionOfferItem from "@/screens/ObligationsInv/components/ObliagtionOfferItem/ObliagtionOfferItem";

type dep = {
    name: string
    sub: string
    price: string
    change: string
    subPrice?: string
    img: StaticImageData,
    subChange: string
}
type ChangeTimeT = {
    date:string
    time:string
}
type Props = {
    offers: dep[]
    count: string
    options: string[]
    changeTime:ChangeTimeT
}

const OffersObligation = ({offers, options, count}: Props) => {

    const offerMap = offers.map((el, index) => <ObliagtionOfferItem
        name={el.name} subChange={el.subChange} sub={el.sub} price={el.price} change={el.change} img={el.img}
        subPrice={el.subPrice}
        key={index}
    />)

    return (
        <div className={s.deposits}>
            <div className={s.title}>
                <div style={{display: 'flex', gap: '20px'}}>
                     <span>
                        {count}
                    </span>
                    <CustomSelect img={lines} options={options}/>
                </div>
                <span className={s.time}>Обновлено 23.08.2023 в 09:48</span>
            </div>
            <div className={s.deposit_offers}>{offerMap}</div>
            <div className={s.btn_cont}>
                <BlueBtn text={'Смотреть все'} width={235}/>
            </div>
        </div>
    );
};

export default OffersObligation;