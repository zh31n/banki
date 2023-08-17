import React from 'react';
import s from './LoanOrgItem.module.scss';
import Image from "next/image";

type Props = {
    img:string
    title:string
    sub:string
}

const LoanOrgItem = ({img,title,sub}:Props) => {
    return (
        <div className={s.loan_org}>
            <Image alt={'icon'} src={img}/>
            <div className={s.info}>
                <div>{title}</div>
                <span>{sub}</span>
            </div>
        </div>
    );
};

export default LoanOrgItem;