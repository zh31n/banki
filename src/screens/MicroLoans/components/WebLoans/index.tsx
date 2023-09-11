import React from 'react';
import s from './index.module.scss';
import WebLoanItem from "@/screens/MicroLoans/components/WebLoanItem";
import BlueBtn from "@/UI/BlueBtn/BlueBtn";
import {CreditInterface} from "@/core/api/Credits";

interface WebLoansProps {
    credits: CreditInterface[];
}

const WebLoans = (props: WebLoansProps) => {
    const {
        credits,
    } = props;

    return (
        <div className={s.loans}>
            <div className={s.wrapper}>
                {credits.map(item => <WebLoanItem key={item.id} item={item}/>)}
            </div>
            <BlueBtn text={'Показать ещё'} width={236} height={60}/>
        </div>
    );
};

export default WebLoans;