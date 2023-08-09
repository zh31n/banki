import React from 'react';
import s from './OfferItem.module.scss';
import bam from '@/assets/icons/banki_icon/loco.svg';
import Image from "next/image";
import loc_bank from "@/assets/icons/banki_icon/loco.svg";

type Props = {
    img:string
    name:string
    subtitle:string
    time:number
    year_money:number
}

const OfferItem = ({img,name,subtitle,time,year_money}:Props) => {
    return (
        <div className={s.offer_item}>
            <div className={s.inf}>
                <Image src={img} />
                <div className={s.info}>
                    <div className={s.name}>{name}</div>
                    <div className={s.subtitle}>{subtitle}</div>
                </div>
            </div>
            <div className={s.line}></div>
            <div className={s.tarifs}>
                <div className={s.years}>
                    <div className={s.title}>Годовых</div>
                    <span>до {year_money}%</span>
                </div>
                <div className={s.years}>
                    <div className={s.title}>Срок</div>
                    <span>{time} дн.</span>
                </div>
            </div>
        </div>
    );
};

export default OfferItem;