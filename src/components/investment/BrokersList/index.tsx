import React from 'react';
import s from './index.module.scss';
import Image from "next/image";
import arr_l from '@/assets/icons/banki_icon/Стрелка_left.svg';
import arr_r from '@/assets/icons/banki_icon/Стрелка_right.svg';
import BrokerItem from "@/components/investment/BrokerItem";
import {BrokerInterface} from "@/core/services/Investing";

interface BrokerListProps {
    title: string;
    brokers: BrokerInterface[];
}

const BrokerList = (props: BrokerListProps) => {
    const {
        title,
        brokers,
    } = props;

    return (
        <div className={s.wrapper}>
            <div className={s.title}>{title}</div>
            <div className={s.item_cont}>
                <Image alt={'arrow'} className={s.arr} src={arr_l}/>
                <div className={s.wrap}>
                    {brokers.map(item => <BrokerItem item={item} key={item.id}/>)}
                </div>
                <Image alt={'arrow'} className={s.arr} src={arr_r}/>
            </div>
        </div>
    );
};

export default BrokerList;