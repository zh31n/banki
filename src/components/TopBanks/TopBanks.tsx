import React from 'react';
import s from './TopBanks.module.scss';
import TopBankItem from "@/components/TopBankItem/TopBankItem";

type banksT = {
    title: string
    sub: string
    stavka: number
    time: number | string
    money: string
    osob?: string
}
type Props = {
    fz?: number
    title?: string
    sub?: string
    banks: banksT[]
}

const TopBanks = ({title, sub, banks, fz}: Props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.title} style={{fontSize: fz ? `${fz}px` : ''}}>
                <mark>{!title ? 'ТОП 10 банков' : title}</mark>
                {!sub ? ' с выгодными вкладами в 2023 году' : sub}
            </div>
            <div className={s.banks_items}>
                {banks.map((el, index) => <TopBankItem key={index} item={el}/>)}
            </div>
        </div>
    );
};

export default TopBanks;