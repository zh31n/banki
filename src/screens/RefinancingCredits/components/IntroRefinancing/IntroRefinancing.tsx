import React from 'react';
import s from './IntroRefinancing.module.scss';
import CustomWhiteSelectTitle from "@/UI/CustomWhiteSelectTitle/CustomWhiteSelectTitle";
import MoneySelect from "@/UI/MoneySelect/MoneySelect";
import CustomInputTitle from "@/UI/CustomInputTitle/CustomInputTitle";
import BlueBtn from "@/UI/BlueBtn/BlueBtn";

const IntroRefinancing = () => {
    return (
        <div className={s.intro}>
            <div className={s.info_cont}>
                <div className={s.breadCrumbs}>
                    Главная / Вклады / <mark>Накопительные счета</mark>
                </div>
                <div className={s.title}>
                    <mark>Рефинансирование кредитов</mark>
                    <br/>других банков
                </div>
                <div className={s.sub}>
                    Персональный подбор кредитов на погашение задолженности в других банках.
                </div>
                <div className={s.funcs}>
                    <div className={s.left}>
                        <CustomWhiteSelectTitle width={385} title={'Цель'} options={['Рефинансирование кредита']}/>
                        <MoneySelect width={385} />
                        <CustomWhiteSelectTitle width={385} title={'Цель'} options={['10 000']}/>
                        <CustomInputTitle title={'Срок в годах'} width={385}/>
                    </div>
                    <div className={s.right}>
                        <CustomInputTitle title={'Ставка'} width={188} />
                        <CustomInputTitle title={'Ежемесячный платеж'} width={188} />
                        <BlueBtn text={'Рефинансировать кредит'} width={385}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroRefinancing;