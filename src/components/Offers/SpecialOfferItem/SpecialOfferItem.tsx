import React from 'react';
import s from './SpecialOfferItem.module.scss';
import Image, {StaticImageData} from "next/image";
import BlueBtn from "@/UI/BlueBtn/BlueBtn";
import mockOfferImage from "@/assets/icons/offer_img1.png";
import mockBankImage from "@/assets/icons/banki_icon/dom.svg";
import {DepositCardInterface} from "@/core/services/Deposits";

interface SpecialOfferItemProps {
    item: DepositCardInterface;
}

const SpecialOfferItem = (props: SpecialOfferItemProps) => {
    const {
        item: {
            id,
            bank_id,
            name,
            rating,
            rate,
            min_amount,
            max_amount,
            timeframe_min,
            timeframe_max,
            description,
        }
    } = props;

    return (
        <div className={s.item}>
            <Image alt={'icon'} className={s.img} src={mockOfferImage}/>
            <div className={s.item_info}>
                <Image alt={'icon'} src={mockBankImage}/>
                <div className={s.name}>{name}</div>
                {/*TODO wait for api bonus*/}
                <div className={s.bonus} style={{height: '12px'}}>Бонус 500 ₽ за вклад</div>
                <div className={s.line}></div>
                <div className={s.info_more}>
                    <div className={s.info_item}>
                        <div className={s.title}>Ставка</div>
                        <span>{`до ${rate}%`}</span>
                    </div>
                    <div className={s.info_item}>
                        <div className={s.title}>Срок</div>
                        <span>{`${timeframe_min} - ${timeframe_max} дней`}</span>
                    </div>
                </div>
                <BlueBtn text={'Посмотреть'} width={230} height={40} fSize={16}/>
            </div>
        </div>
    );
};

export default SpecialOfferItem;