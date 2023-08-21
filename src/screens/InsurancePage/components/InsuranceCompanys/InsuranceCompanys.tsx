import React from 'react';
import s from './InsuranceCompanys.module.scss';
import Search from "@/UI/Search/Search";
import SliderBanksCons from "@/screens/ConsumerCreditsPage/Components/SliderBanksCons/SliderBanksCons";
import {StaticImageData} from "next/image";

type Props = {
    data: StaticImageData[]
}
const InsuranceCompanys = ({data}:Props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.title}>Страховые компании</div>
            <Search placeholder={'Введите название компании'}/>
            <SliderBanksCons data={data}/>
        </div>
    );
};

export default InsuranceCompanys;