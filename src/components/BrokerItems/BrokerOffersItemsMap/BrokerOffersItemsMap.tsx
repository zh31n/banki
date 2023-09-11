import React from 'react';
import {StaticImageData} from "next/image";
import BorkerOfferItem from "@/components/BrokerItems/BorkerOfferItem/BorkerOfferItem";

type dep = {
    name: string
    sub: string
    comm: string
    serv: string
    img: StaticImageData
    charcs: string[]
    btn?: string
    count?: string
}

type Props = {
    deposits: dep[]
}

const BrokerOffersItemsMap = ({deposits}: Props) => {
    return (
        <>
            {deposits.map((el, index) => <BorkerOfferItem name={el.name} sub={el.sub} comm={el.comm}
                                                          serv={el.serv} img={el.img} charcs={el.charcs}
                                                          key={index} btn={el.btn} count={el.count}/>)}
        </>
    );
};

export default BrokerOffersItemsMap;