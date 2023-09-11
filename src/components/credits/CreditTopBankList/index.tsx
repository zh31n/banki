import React from 'react';
import s from './index.module.scss';
import {CreditInterface} from "@/core/services/Credits";
import CreditTopBankItem from "@/components/credits/CreditTopBankItem";

interface CreditTopBankListProps {
    title?: string
    sub?: string
    credits: CreditInterface[]
}

const CreditTopBankList = (props: CreditTopBankListProps) => {
    const {
        title = 'Потребительские кредиты в Москве',
        subtitle = ' - ТОП 10 банков в 2023 году',
        credits,
    } = props;

    return (
        <div className={s.wrapper}>
            <div className={s.title}>
                <mark>{title}</mark>
                {subtitle}
            </div>
            <div className={s.banks_items}>
                {credits.map((item, index) => <CreditTopBankItem key={index} item={item}/>)}
            </div>
        </div>
    );
};

export default CreditTopBankList;