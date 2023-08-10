import React from 'react';
import OfferItem from "@/components/OfferItem/OfferItem";

const OfferMothItemsMap = ({offers}) => {
    return (
        <>
            {offers.map((el, index) => <OfferItem key={index} img={el.img} name={el.name} subtitle={el.subtitle}
                                                  time={el.time} year_money={el.year_money}/>)}
        </>
    );
};

export default OfferMothItemsMap;