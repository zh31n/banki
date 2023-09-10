import React from 'react';
import s from './InsuranceCompanys.module.scss';
import Search from "@/UI/Search/Search";
import SliderBanksCons from "@/screens/ConsumerCreditsPage/Components/SliderBanksCons/SliderBanksCons";
import {StaticImageData} from "next/image";

type Props = {
    data: StaticImageData[]
    title?: string
    isTitle: boolean
}
const InsuranceCompanys = ({data, title, isTitle}: Props) => {
    return (
        <div className={s.wrapper}>
            {isTitle ? <div className={s.title}>{title || 'Страховые компании'}</div> : ''}
            <Search placeholder={'Введите название компании'}/>
            <SliderBanksCons data={data}/>
        </div>
    );
};

export default InsuranceCompanys;