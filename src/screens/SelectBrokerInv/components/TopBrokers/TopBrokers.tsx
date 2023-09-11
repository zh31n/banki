import React from 'react';
import s from './TopBrokers.module.scss';
import TopBrokerItem from "@/screens/SelectBrokerInv/components/TopBrokerItem/TopBrokerItem";

type banksT = {
    title: string
    sub: string
    comm: string
    serv: string
}
type Props = {
    fz?: number
    title?: string
    sub?: string
    banks: banksT[]
}

const TopBrokers = ({title, sub, banks, fz}: Props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.title} style={{fontSize: `${fz}px`}}>
                <mark>{!title ? 'ТОП 10' : title}</mark>
                {!sub ? ' брокеров в 2023 году' : sub}
            </div>
            <div className={s.banks_items}>
                {banks.map((el, index) => <TopBrokerItem key={index} item={el}/>)}
            </div>
        </div>
    );
};

export default TopBrokers;