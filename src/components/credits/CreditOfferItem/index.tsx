import React from 'react';
import s from './index.module.scss';
import Image from "next/image";
import mockBankIcon from "@/assets/icons/banki_icon/loco.svg";
import {CreditInterface} from "@/core/services/Credits";

interface CreditOfferItemProps {
    item: CreditInterface;
}

const CreditOfferItem = (props: CreditOfferItemProps) => {
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
            <div className={s.line} />
            <div className={s.tarifs}>
                <div className={s.years}>
                    <div className={s.title}>Годовых</div>
                    <span>
                        {'от ' + rate + ' %'}
                    </span>
                </div>
                <div className={s.years}>
                    <div className={s.title}>Годовых</div>
                    <span>до {(max_amount + (max_amount/100 * rate)) / 1000000} млн ₽</span>
                </div>
            </div>
        </div>
    );
};

export default CreditOfferItem;