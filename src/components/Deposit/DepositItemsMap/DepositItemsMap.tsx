import React from 'react';
import DepositOfferItem from "@/components/Deposit/DepositOfferItem/DepositOfferItem";

type dep = {
    name: string
    sub: string
    stavka: string
    time: string
    money: string
    img: string
    charcs: string[]
    btn?: string | undefined
    count?: string | undefined
}

type Props = {
    deposits: dep[]
}

const DepositItemsMap = ({deposits}:Props) => {
    return (
        <>
            {deposits.map((el, index) => <DepositOfferItem name={el.name} sub={el.sub} stavka={el.stavka} time={el.time}
                                                           money={el.money} img={el.img} charcs={el.charcs}
                                                           key={index} btn={el.btn} count={el.count} />)}
        </>
    );
};

export default DepositItemsMap;