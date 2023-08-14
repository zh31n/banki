import React from 'react';
import s from './WebLoanItem.module.scss';
import Image from "next/image";
import sq from '@/assets/icons/blue_sq.svg';
import star from '@/assets/icons/yellow_star.svg';
import BlueLikeBtn from "@/UI/BlueLikeBtn/BlueLikeBtn";
import warn from '@/assets/icons/warning_icon.svg'
import BlueBtn from "@/UI/BlueBtn/BlueBtn";

type Props = {
    sum: string
    days: string
    stavka: string | number
    titleBtn: string
}

const WebLoanItem = ({sum, days, stavka, titleBtn}: Props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <Image src={sq}/>
                <div className={s.info}>
                    <div className={s.title}>Веб-займ</div>
                    <div className={s.sub}>Онлайн для новых клиентов</div>
                    <div className={s.star}>
                        <Image src={star}/>
                        4,3
                    </div>
                </div>
            </div>
            <div className={s.line}></div>
            <div className={s.of_info}>
                <div>
                    <span>Сумма</span>
                    <span>{sum} ₽</span>
                </div>
                <div>
                    <span>Срок</span>
                    <span>{days}</span>
                </div>
                <div>
                    <span>Ставка</span>
                    <span>{stavka}%</span>
                </div>
            </div>
            <div className={s.line}></div>
            <div className={s.btn_cont}>
                <BlueLikeBtn title={'Узнать вероятность одобрения'}/>
                <div className={s.warn}>
                    <Image src={warn}/>
                </div>
                <BlueBtn text={titleBtn} height={40} width={183} fSize={16}/>
            </div>
        </div>
    );
};

export default WebLoanItem;