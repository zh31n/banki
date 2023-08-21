import React from 'react';
import s from './SpecialOffersInsurance.module.scss';
import {StaticImageData} from "next/image";
import SpecialOfferItem from "@/components/Offers/SpecialOfferItem/SpecialOfferItem";

type OfferI = {
    name: string
    img: StaticImageData
    bankImg: StaticImageData
    bonus?: string
    bet?: number
    days?: string
    title_1?: string
    count1?: string
    title_2?: string
    count2?: string
}
type Props = {
    items: OfferI[]
}
const SpecialOffersInsurance = ({items}: Props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.title}>
                <mark>Специальные </mark>
                предложения
            </div>
            <div className={s.cont}>
                {items.map((el, index) => <SpecialOfferItem bonus={el.bonus} title_1={el.title_1} count1={el.count1}
                                                            title_2={el.title_2} count2={el.count2}
                                                            name={el.name} img={el.img} bankImg={el.bankImg}
                                                            key={index}/>
                )}
            </div>
        </div>
    );
};

export default SpecialOffersInsurance;