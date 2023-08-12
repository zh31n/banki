import React from 'react';
import s from './DepositOfferItem.module.scss';
import Image from "next/image";
import ques_I from '@/assets/icons/banki_icon/Question_i.svg';
import dang_i from '@/assets/icons/banki_icon/Danger_i.svg';
import arr_d from '@/assets/icons/Arrow_d.svg';
import BlueBtn from "@/UI/BlueBtn/BlueBtn";

type Props = {
    name: string
    sub: string
    stavka: string
    time: string
    money: string
    img: string
    charcs: string[]
    btn?: string
}


const DepositOfferItem = ({name, charcs, sub, money, time, img, stavka, btn}: Props) => {
    return (
        <div className={s.item}>
            <div className={s.up}>
                <div className={s.info}>
                    <Image src={img} alt={'иконка банка'}/>
                    <div className={s.name}>
                        <div>{name}</div>
                        <span>{sub}</span>
                    </div>
                    <div className={s.about_b}>
                        <div className={s.info_item}>
                            <div className={s.title}>
                                Ставка
                                <Image src={ques_I} alt={'иконка вопроса'}/>
                            </div>
                            <span>{stavka}%</span>
                        </div>
                        <div className={s.info_item}>
                            <div className={s.title}>
                                Срок
                            </div>
                            <span>{time}</span>
                        </div>
                        <div className={s.info_item}>
                            <div className={s.title}>
                                Сумма
                            </div>
                            <span>{money} ₽</span>
                        </div>
                    </div>

                </div>
                <button className={s.btn_dung}>
                    <Image src={dang_i} alt='иконка опасности'/>
                </button>
            </div>
            <div className={s.down}>
                <div className={s.count}>
                    Ещё 12 вкладов
                    <Image src={arr_d} alt={'иконка стрелочки вниз'}/>
                </div>
                <div className={s.blue_charc}>
                    {charcs.map((el, index) => {
                        if (el !== '') return <BlueBtn key={index} text={el} width={147} height={36} fSize={14}/>
                    })}
                </div>
                <BlueBtn text={!btn ? 'Открыть вклад' : btn} width={222} fSize={20}/>
            </div>
        </div>
    );
};

export default DepositOfferItem;