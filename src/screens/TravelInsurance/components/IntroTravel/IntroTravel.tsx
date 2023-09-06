import React from 'react';
import s from "./IntroTravel.module.scss";
import ChoiseItem from "@/components/Choise/ChoiseItem/ChoiseItem";
import MoneySelect from "@/UI/MoneySelect/MoneySelect";
import Image from "next/image";
import opt from "@/assets/icons/Tuning_icon.svg";
import CustomWhiteSelectTitle from "@/UI/CustomWhiteSelectTitle/CustomWhiteSelectTitle";
import BlueBtn from "@/UI/BlueBtn/BlueBtn";
import CustomInputDateTitle from "@/UI/CustomInputDateTitle/CustomInputDateTitle";


type Props = {}

const IntroTravel = ({}: Props) => {

    return (
        <div className={s.page_info}>
            <div className={s.page_info_i}>
                <div className={s.pageName}>
                    Главная / Страхование / <mark>Путешествия</mark>
                </div>
                <div className={s.title}>
                    <mark>Туристическая страховка</mark>
                    <br/>
                    для путешествий за границу
                </div>
                <div className={s.sub}>
                    Онлайн страхование для выезжающих за рубеж: оформите медицинскую страховку для выезда и спокойного
                    проживания за границей
                </div>
                <div className={s.calc}>
                    <CustomWhiteSelectTitle title={'Куда'} width={295.5} options={['Все страны Шенгена']}/>
                    <CustomWhiteSelectTitle title={'Туристы'} width={295.5} options={['30 лет']}/>
                    <CustomInputDateTitle title={'Когда'} width={295.5}/>
                    <BlueBtn text={'Найти нужный вариант'} width={295.5}/>
                    <CustomInputDateTitle title={'Выбрано дней'} width={295.5}/>
                </div>
            </div>
        </div>
    );
};

export default IntroTravel;