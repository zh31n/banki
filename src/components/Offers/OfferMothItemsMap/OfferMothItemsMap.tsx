import React from 'react';
import OfferItem from "@/components/Offers/OfferItem/OfferItem";

type offer = {
    img: string
    name: string
    subtitle: string
    time?: number | undefined
    year_money?: number | undefined
    title_1?: string | undefined
    title1_key?: string | undefined
    title2?: string | undefined
    title2_key?: string | undefined
}
type Props = {
    offers: offer[]
}

const OfferMothItemsMap = ({offers}: Props) => {
    return (
        <>
            {offers.map((el, index) => <OfferItem
                key={index} img={el.img} name={el.name} subtitle={el.subtitle}
                time={el.time} year_money={el.year_money} title_1={el.title_1} title2={el.title2}
                title1_key={el.title1_key} title2_key={el.title2_key}
            />)
            }
        </>
    );
};

export default OfferMothItemsMap;