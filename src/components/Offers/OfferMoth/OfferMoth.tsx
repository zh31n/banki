import React from 'react';
import s from './OfferMoth.module.scss';
import arr_l from "@/assets/icons/banki_icon/Стрелка_left.svg";
import arr_r from "@/assets/icons/banki_icon/Стрелка_right.svg";
import ChoiseItem from "@/components/Choise/ChoiseItem/ChoiseItem";
import OfferItem from "@/components/Offers/OfferItem/OfferItem";
import loc_bank from "@/assets/icons/banki_icon/loco.svg";
import Image from "next/image";
import OfferMothItemsMap from "@/components/Offers/OfferMothItemsMap/OfferMothItemsMap";
import ChoiseItemsMap from "@/components/Choise/ChoiseItemsMap/ChoiseItemsMap";



type Props = {
    choiseItems?: object[]
    offers: object[]
}


const OfferMoth = ({choiseItems, offers}: Props) => {
    return (
        <div className={s.offer_month}>
            <div className={s.title}>Предложения <span>месяца</span></div>
            {(choiseItems && choiseItems.length !== 0) && <div className={s.select_items}>
                <ChoiseItemsMap choiseItems={choiseItems}/>
            </div>}
            <div className={s.offer_cont}>
                <Image src={arr_l}/>
                <OfferMothItemsMap offers={offers}/>
                <Image src={arr_r}/>
            </div>
        </div>
    );
};

export default OfferMoth;