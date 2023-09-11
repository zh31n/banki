import React from 'react';
import s from './BorkerOfferItem.module.scss';
import Image, {StaticImageData} from "next/image";
import dang_i from '@/assets/icons/banki_icon/Danger_i.svg';
import arr_d from '@/assets/icons/Arrow_d.svg';
import BlueBtn from "@/UI/BlueBtn/BlueBtn";

type Props = {
    name: string
    sub: string
    comm: string
    serv: string
    img: StaticImageData
    charcs: string[]
    btn?: string
    count?: string
}


const BorkerOfferItem = ({comm, img, sub, serv, charcs, name, count, btn}: Props) => {
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
                                Комиссия за сделку
                            </div>
                            <span>{comm}%</span>
                        </div>
                        <div className={s.info_item}>
                            <div className={s.title}>
                                Обслуживание в мес.
                            </div>
                            <span>{serv} ₽</span>
                        </div>
                    </div>
                </div>
                <button className={s.btn_dung}>
                    <Image src={dang_i} alt='иконка опасности'/>
                </button>
            </div>
            <div className={s.down}>
                <div className={s.count}>
                    {!count ? 'Ещё 12 вкладов' : count}
                    <Image src={arr_d} alt={'иконка стрелочки вниз'}/>
                </div>
                <div className={s.blue_charc}>
                    {charcs.map((el, index) => {
                        if (el !== '') return <BlueBtn key={index} text={el} width={147} height={36} fSize={14}/>
                    })}
                </div>
                <BlueBtn text={!btn ? 'Открыть счет' : btn} width={222} fSize={20}/>
            </div>
        </div>
    );
};

export default BorkerOfferItem;