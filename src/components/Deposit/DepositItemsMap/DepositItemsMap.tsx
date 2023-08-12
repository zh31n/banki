import React from 'react';
import DepositOfferItem from "@/components/Deposit/DepositOfferItem/DepositOfferItem";

const DepositItemsMap = ({deposits}) => {
    return (
        <>
            {deposits.map((el, index) => <DepositOfferItem name={el.name} sub={el.sub} stavka={el.stavka} time={el.time}
                                                           money={el.money} img={el.img} charcs={el.charcs}
                                                           key={index} btn={el.btn} />)}
        </>
    );
};

export default DepositItemsMap;