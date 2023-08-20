import React from 'react';
import s from './OffersBanks.module.scss';
import CustomSelect from "@/UI/CustomSelect/CustomSelect";
import lines from "@/assets/icons/banki_icon/3-line.svg";
import DepositItemsMap from "@/components/Deposit/DepositItemsMap/DepositItemsMap";
import BlueBtn from "@/UI/BlueBtn/BlueBtn";
import {StaticImageData} from "next/image";

type dep = {
    name: string
    sub: string
    stavka: string
    time: string
    money: string
    img: StaticImageData
    charcs: string[]
    btn?:  string | undefined
    count?: string | undefined
}
type Props = {
    deposits: dep[]
    title: string
    sub: string
    options: string[]
}

const OffersBanks = ({deposits, options, title, sub}: Props) => {
    return (
        <div className={s.deposits}>
            <div className={s.title}>
                    <span>
                        <mark>{title}</mark>
                        {sub}
                    </span>
                <CustomSelect img={lines} options={options}/>
            </div>
            <div className={s.deposit_offers}>
                <DepositItemsMap deposits={deposits}/>
            </div>
            <div className={s.btn_cont}>
                <BlueBtn text={'Смотреть все'} width={235}/>
            </div>
        </div>
    );
};

export default OffersBanks;