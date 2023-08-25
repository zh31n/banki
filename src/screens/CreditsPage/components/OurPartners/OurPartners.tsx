import React from 'react';
import s from './OurPartners.module.scss';
import {StaticImageData} from "next/image";
import SliderBanksCons from "@/screens/ConsumerCreditsPage/Components/SliderBanksCons/SliderBanksCons";

type Props = {
    items: StaticImageData[]
}
const OurPartners = ({items}: Props) => {
    return (
        <div className={s.wrapp}>
            <div className={s.title}>Наши партнеры больше <mark>50 банков</mark></div>
            <div className={s.cont}>
                <SliderBanksCons data={items}/>
            </div>
        </div>
    );
};

export default OurPartners;