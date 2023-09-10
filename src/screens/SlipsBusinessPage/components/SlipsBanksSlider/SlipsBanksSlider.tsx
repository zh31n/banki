import React from 'react';
import arr_l from '@/assets/icons/banki_icon/Стрелка_left.svg';
import arr_r from '@/assets/icons/banki_icon/Стрелка_right.svg';
import s from './SlipsBanksSlider.module.scss';
import Image from "next/image";
import SliderBusinessItem from "@/components/SliderBusinessItem/SliderBusinessItem";

type SlideItemT = {
    title: string
    sub: string
}
type Props = {
    items: SlideItemT[]
}

const SlipsBanksSlider = ({items}: Props) => {
    return (
        <div className={s.cont}>
            <Image src={arr_l} alt={'arrow left'}/>
            <div className={s.items_cont}>
                {items.map((el, index) => <SliderBusinessItem
                    title={el.title} sub={el.sub} key={index}/>)
                }
            </div>
            <Image src={arr_r} alt={'arrow right'}/>
        </div>
    );
};

export default SlipsBanksSlider;