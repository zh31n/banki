import React from 'react';
import s from './OfferItem.module.scss';
import Image from "next/image";
import {DepositCardInterface} from "@/core/services/Deposits";
import mockBankIcon from "@/assets/icons/banki_icon/loco.svg";

interface OfferItemProps {
    item: DepositCardInterface;
}

const OfferItem = (props: OfferItemProps) => {
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
        <div className={s.offer_item}>
            <div className={s.inf}>
                <Image alt={'icon'} src={mockBankIcon}/>
                <div className={s.info}>
                    <div className={s.name}>{name}</div>
                    <div className={s.subtitle}>{description}</div>
                </div>
            </div>
            <div className={s.line}></div>
            <div className={s.tarifs}>
                <div className={s.years}>
                    <div className={s.title}>Годовых</div>
                    <span>
                        {'до ' + rate + ' %'}
                    </span>
                </div>
                <div className={s.years}>
                    <div className={s.title}>Срок</div>
                    <span>{timeframe_min + ' дн.'}</span>
                </div>
            </div>
        </div>
    );
};

export default OfferItem;