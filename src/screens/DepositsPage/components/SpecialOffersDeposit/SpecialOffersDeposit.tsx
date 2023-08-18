import React from 'react';
import s from './SpecialOffersDeposit.module.scss';
import SpecialOfferItem from "@/components/Offers/SpecialOfferItem/SpecialOfferItem";
import {StaticImageData} from "next/image";

type offerI = {
    name: string
    img: StaticImageData
    bankImg: StaticImageData
    bonus: string
    bet: number
    days: string
}
type Props = {
    items:offerI[]
}
const SpecialOffersDeposit = ({items}:Props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.title}>
                <mark>Специальные</mark>
                предложения
            </div>
            <div className={s.itemsCont}>
                {items.map((el, index:number) => <SpecialOfferItem name={el.name} img={el.img} bankImg={el.bankImg}
                                                            bonus={el.bonus} bet={el.bet} days={el.days} key={index}/>)}
            </div>
        </div>
    );
};

export default SpecialOffersDeposit;