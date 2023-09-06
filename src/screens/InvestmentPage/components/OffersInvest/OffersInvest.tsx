import React from 'react';
import s from './OffersInvest.module.scss';
import Image, {StaticImageData} from "next/image";
import arr_l from '@/assets/icons/banki_icon/Стрелка_left.svg';
import arr_r from '@/assets/icons/banki_icon/Стрелка_right.svg';
import OffersInvestItem from "@/screens/InvestmentPage/components/OffersInvest/OffersInvestItem/OffersInvestItem";

type Props = {
    items: offerT[]
}
type offerT = {
    img: StaticImageData,
    title: string,
    sub: string,
    name: string,
    info: string
}
const OffersInvest = ({items}: Props) => {
    return (
        <div className={s.wrap}>
            <div className={s.title}>Предложения <mark>месяца</mark></div>
            <div className={s.cont}>
                <Image src={arr_l} className={s.arr} alt={'arrow left'}/>
                {items.map((el, index) => <OffersInvestItem
                    img={el.img} name={el.name} info={el.info} title={el.title} sub={el.sub} key={index}/>)}
                <Image src={arr_r} className={s.arr} alt={'arrow right'}/>
            </div>
        </div>
    );
};

export default OffersInvest;