import React from 'react';
import {StaticImageData} from "next/image";
import SpecialOfferItem from "@/components/Offers/SpecialOfferItem/SpecialOfferItem";

type offerDataT = {
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
    items: offerDataT[]
}
const SpecialOffersMap = ({items}:Props) => {
    return (
        <>
            {items.map((el, index) => <SpecialOfferItem name={el.name} img={el.img}
                                                                 bankImg={el.bankImg}
                                                                 bonus={el.bonus} bet={el.bet} days={el.days}
                                                                 key={index}/>)}
        </>
    );
};

export default SpecialOffersMap;