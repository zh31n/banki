import React from 'react';
import s from './WebLoans.module.scss';
import WebLoanItem from "@/screens/MicroLoans/components/WebLoanItem/WebLoanItem";
import BlueBtn from "@/UI/BlueBtn/BlueBtn";


type Item = {
    sum: string
    days: string
    stavka: string | number
    titleBtn: string
}
type Props = {
    data: Item[]
}

const WebLoans = ({data}: Props) => {
    return (
        <div className={s.loans}>
            <div className={s.wrapper}>
                {data.map((el, index) => <WebLoanItem sum={el.sum} days={el.days} stavka={el.stavka}
                                                      titleBtn={el.titleBtn} key={index}/>)}
            </div>
            <BlueBtn text={'Показать ещё'} width={236} height={60}/>
        </div>
    );
};

export default WebLoans;