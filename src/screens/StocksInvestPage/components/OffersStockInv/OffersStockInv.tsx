'use client'

import React from 'react';
import s from './OffersStockInv.module.scss';
import CustomSelect from "@/UI/CustomSelect/CustomSelect";
import lines from "@/assets/icons/banki_icon/3-line.svg";
import BlueBtn from "@/UI/BlueBtn/BlueBtn";
import {StaticImageData} from "next/image";
import StockOfferItem from "@/screens/StocksInvestPage/components/StockOfferItem/StockOfferItem";

type dep = {
    name: string
    sub: string
    price: string
    change: string
    subPrice?: string
    img: StaticImageData
}
type Props = {
    offers: dep[]
    count: number
    options: string[]
    isSelect: boolean
}

const OffersStockInv = ({offers, options, count, isSelect}: Props) => {

    const offerMap = offers.map((el, index) => <StockOfferItem
        name={el.name} sub={el.sub} price={el.price} change={el.change} img={el.img} subPrice={el.subPrice}
        key={index}
    />)

    return (
        <div className={s.deposits}>
            <div className={s.title}>
                    <span>
                        {count} акций
                    </span>
                {isSelect && <CustomSelect img={lines} options={options}/>}
            </div>
            <div className={s.deposit_offers}>{offerMap}</div>
            <div className={s.btn_cont}>
                <BlueBtn text={'Смотреть все'} width={235}/>
            </div>
        </div>
    );
};

export default OffersStockInv;