import React from 'react';
import s from './TopObligations.module.scss';
import TopObligationItem from "@/screens/ObligationsInv/components/TopObligationItem/TopObligationItem";

type banksT = {
    title: string
    sub: string
    price: string
    profit: string
}
type Props = {
    fz?: number
    title?: string
    sub?: string
    obligations: banksT[]
}

const TopObligations = ({title, sub, obligations, fz}: Props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.title} style={{fontSize: `${fz}px`}}>
                <mark>{!title ? 'ТОП 10' : title}</mark>
                {!sub ? ' облигаций в 2023 году' : sub}
            </div>
            <div className={s.banks_items}>
                {obligations.map((el, index) => <TopObligationItem key={index} item={el}/>)}
            </div>
        </div>
    );
};

export default TopObligations;