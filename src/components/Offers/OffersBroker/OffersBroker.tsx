'use client'

import React from 'react';
import s from './OffersBroker.module.scss';
import CustomSelect from "@/UI/CustomSelect/CustomSelect";
import lines from "@/assets/icons/banki_icon/3-line.svg";
import BlueBtn from "@/UI/BlueBtn/BlueBtn";
import {StaticImageData} from "next/image";
import BrokerOffersItemsMap from "@/components/BrokerItems/BrokerOffersItemsMap/BrokerOffersItemsMap";

type dep = {
    name: string
    sub: string
    comm: string
    serv: string
    img: StaticImageData
    charcs: string[]
    btn?: string
    count?: string
}
type Props = {
    deposits: dep[]
    title: string
    options: string[]
    isSelect: boolean
}

const OffersBroker = ({deposits, options, title, isSelect}: Props) => {
    return (
        <div className={s.deposits}>
            <div className={s.title}>
                    <span>
                        {title} брокера
                    </span>
                {isSelect && <CustomSelect img={lines} options={options}/>}
            </div>
            <div className={s.deposit_offers}>
                <BrokerOffersItemsMap deposits={deposits}/>
            </div>
            <div className={s.btn_cont}>
                <BlueBtn text={'Смотреть все'} width={235}/>
            </div>
        </div>
    );
};

export default OffersBroker;