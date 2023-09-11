import React from 'react';
import s from './DepositOfferItem.module.scss';
import Image, {StaticImageData} from "next/image";
import ques_I from '@/assets/icons/banki_icon/Question_i.svg';
import dang_i from '@/assets/icons/banki_icon/Danger_i.svg';
import arr_d from '@/assets/icons/Arrow_d.svg';
import BlueBtn from "@/UI/BlueBtn/BlueBtn";
import {DepositCardInterface} from "@/core/services/Deposits";
import mockBankImage from "@/assets/icons/banki_icon/loco.svg";

interface DepositOfferItemProps {
    item: DepositCardInterface;
}

const DepositOfferItem = (props: DepositOfferItemProps) => {
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
            <div className={s.up}>
                <div className={s.info}>
                    <Image src={mockBankImage} alt={'иконка банка'}/>
                    <div className={s.name}>
                        <div>{name}</div>
                        <span>{description}</span>
                    </div>
                    <div className={s.about_b}>
                        <div className={s.info_item}>
                            <div className={s.title}>
                                Ставка
                                <Image src={ques_I} alt={'иконка вопроса'}/>
                            </div>
                            <span>{rate}%</span>
                        </div>
                        <div className={s.info_item}>
                            <div className={s.title}>
                                Срок
                            </div>
                            <span>{timeframe_min} — {timeframe_max} дн.</span>
                        </div>
                        <div className={s.info_item}>
                            <div className={s.title}>
                                Сумма
                            </div>
                            <span>{min_amount} — {max_amount} ₽</span>
                        </div>
                    </div>
                </div>
                <button className={s.btn_dung}>
                    <Image src={dang_i} alt='иконка опасности'/>
                </button>
            </div>
            <div className={s.down}>
                <div className={s.count}>
                    Ещё {12} вкладов
                    <Image src={arr_d} alt={'иконка стрелочки вниз'}/>
                </div>
                <div className={s.blue_charc}>
                    {['Партнер раздела'].map((el, index) => {
                        if (el !== '') return <BlueBtn key={index} text={el} width={147} height={36} fSize={14}/>
                    })}
                </div>
                <BlueBtn text={'Открыть вклад'} width={222} fSize={20}/>
            </div>
        </div>
    );
};

export default DepositOfferItem;