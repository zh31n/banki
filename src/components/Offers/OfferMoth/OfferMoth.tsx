import React from 'react';
import s from './OfferMoth.module.scss';
import arr_l from "@/assets/icons/banki_icon/Стрелка_left.svg";
import arr_r from "@/assets/icons/banki_icon/Стрелка_right.svg";
import Image, {StaticImageData} from "next/image";
import ChoiseItemsMap from "@/components/Choise/ChoiseItemsMap/ChoiseItemsMap";
import OfferItem from "@/components/Offers/OfferItem/OfferItem";
import {DepositCardInterface} from "@/core/api/Deposits";

type offers = {
    img: StaticImageData
    name: string
    subtitle: string
    time?: number | undefined
    year_money?: number | undefined
    title_1?: string | undefined
    title1_key?: string | undefined
    title2?: string | undefined
    title2_key?: string | undefined
}
type ItemT = {
    name: string
    active: boolean
}
type OfferMonthProps = {
    choiceItems?: ItemT[]
    offers: DepositCardInterface[]
}


const OfferMonth = (props: OfferMonthProps) => {
    const {
        choiceItems,
        offers,
    } = props;

    return (
        <div className={s.offer_month}>
            <div className={s.title}>Предложения <span>месяца</span></div>
            {/*{(choiseItems && choiseItems.length !== 0) && <div className={s.select_items}>*/}
            {/*    <ChoiseItemsMap choiseItems={choiseItems}/>*/}
            {/*</div>}*/}
            <div className={s.offer_cont}>
                <Image className={s.arr} alt={'icon'} src={arr_l}/>
                {offers.map((item) => <OfferItem item={item} key={item.id}/>)}
                <Image className={s.arr} alt={'icon'} src={arr_r}/>
            </div>
        </div>
    );
};

export default OfferMonth;