import React from 'react';
import s from './TopBanks.module.scss';
import TopBankItem from "@/components/TopBankItem/TopBankItem";

const TopBanks = ({title, sub,banks}) => {
    return (
        <div className={s.wrapper}>
            <div className={s.title}>
                <mark>{!title ? 'ТОП 10 банков' : title}</mark>
                {!sub ? ' с выгодными вкладами в 2023 году' : sub}
            </div>
            <div className={s.banks_items}>
                {banks.map((el,index) => <TopBankItem key={index} item={el}/>)}
            </div>
        </div>
    );
};

export default TopBanks;