import React from 'react';
import s from './OfferMoth.module.scss';
import arr_l from "@/assets/icons/banki_icon/Стрелка_left.svg";
import arr_r from "@/assets/icons/banki_icon/Стрелка_right.svg";
import Image, {StaticImageData} from "next/image";
import OfferMothItemsMap from "@/components/Offers/OfferMothItemsMap/OfferMothItemsMap";
import ChoiseItemsMap from "@/components/Choise/ChoiseItemsMap/ChoiseItemsMap";

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
type Props = {
    choiseItems?: ItemT[]
    offers: offers[]
}


const OfferMoth = ({choiseItems, offers}: Props) => {
    return (
        <div className={s.offer_month}>
            <div className={s.title}>Предложения <span>месяца</span></div>
            {(choiseItems && choiseItems.length !== 0) && <div className={s.select_items}>
                <ChoiseItemsMap choiseItems={choiseItems}/>
            </div>}
            <div className={s.offer_cont}>
                <Image alt={'icon'} src={arr_l}/>
                <OfferMothItemsMap offers={offers}/>
                <Image alt={'icon'} src={arr_r}/>
            </div>
        </div>
    );
};

export default OfferMoth;