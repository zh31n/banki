import React from 'react';
import s from "./Intro.module.scss";
import MoneySelect from "@/components/MoneySelect/MoneySelect";
import cust from "@/assets/icons/Tuning_icon.svg";
import CustomWhiteSelectTitle from "@/components/CustomWhiteSelectTitle/CustomWhiteSelectTitle";
import BlueBtn from "@/components/BlueBtn/BlueBtn";
import Image from "next/image";

const Intro = () => {
    return (
        <div className={s.pageIntro}>
            <div className={s.info_cont}>
                <div className={s.breadCrumbs}>
                    Главная / Вклады / <mark>Накопительные счета</mark>
                </div>
                <div className={s.title}>
                    Накопительные счета <mark>в Москве</mark>
                </div>
                <p className={s.subtitle}>
                    Открыть накопительный счет с процентной ставкой до 10% легче, чем вы думаете! Выбирайте из 82
                    предложения от 56 банков, оформляйте депозит онлайн и получайте проценты.
                </p>
                <div className={s.calculate}>
                    <MoneySelect width={385}/>
                    <div className={s.btnChange}>
                        <Image alt={'иконка настройки'} src={cust} />
                        Фильтр
                    </div>
                    <CustomWhiteSelectTitle title={'Банк'} options={['Любой']} width={385}/>
                    <BlueBtn text={'Показать'} count={245} width={173}/>
                </div>
            </div>
        </div>
    );
};

export default Intro;