import React from 'react';
import s from './MicroLoansOrgs.module.scss';
import Image from "next/image";
import arr_l from '@/assets/icons/banki_icon/Стрелка_left.svg';
import arr_r from '@/assets/icons/banki_icon/Стрелка_right.svg';
import LoanOrgItem from "@/screens/MicroLoans/components/LoanOrgItem/LoanOrgItem";

type itemT = {
    img: string
    title: string
    sub: string
}
type Props = {
    title: string
    items: itemT[]
}

const MicroLoansOrgs = ({title, items}: Props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.title}>{title}</div>
            <div className={s.item_cont}>
                <Image src={arr_l}/>
                <div className={s.wrap}>
                    {items.map((el, index) => <LoanOrgItem img={el.img} title={el.title} sub={el.sub} key={index}/>)}
                </div>
                <Image src={arr_r}/>
            </div>
        </div>
    );
};

export default MicroLoansOrgs;