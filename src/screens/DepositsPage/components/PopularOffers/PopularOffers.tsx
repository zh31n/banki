import React from 'react';
import s from './PopularOffers.module.scss';
import PopularOfferItem from "@/screens/DepositsPage/components/PopularOfferItem/PopularOfferItem";
import {StaticImageData} from "next/image";

type OfferItem = {
    active: boolean
    img: StaticImageData
    title: string
    sub: string
}

type Props = {
    data: OfferItem[]
}
const PopularOffers = ({data}:Props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.title}>
                <mark>Популярные</mark>
                предложения
            </div>
            <div className={s.itemsCont}>
                {data.map((el, index: number) => <PopularOfferItem key={index} active={el.active} img={el.img}
                                                                   title={el.title} sub={el.sub}/>)}
            </div>
        </div>
    );
};

export default PopularOffers;