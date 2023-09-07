import React from 'react';
import s from './IntroMortgageDiscount.module.scss';
import CustomWhiteSelectTitle from "@/UI/CustomWhiteSelectTitle/CustomWhiteSelectTitle";
import MoneySelect from "@/UI/MoneySelect/MoneySelect";
import CustomInputTitle from "@/UI/CustomInputTitle/CustomInputTitle";
import BlueBtn from "@/UI/BlueBtn/BlueBtn";
import ChoiseItemsMap from "@/components/Choise/ChoiseItemsMap/ChoiseItemsMap";
import CustomBtnChange from "@/UI/CustomBtnChange/CustomBtnChange";

type ItemT = {
    name: string
    active: boolean
}
type Props = {
    items: ItemT[]
}

const IntroMortgageDiscount = ({items}: Props) => {
    return (
        <div className={s.intro}>
            <div className={s.info_cont}>
                <div className={s.breadCrumbs}>
                    Главная / Ипотека / <mark> Выбрать недвижимость</mark>
                </div>
                <div className={s.title}>
                    Ипотека со скидкой от застройщиков<br/><mark>в Москве</mark>
                </div>
                <div className={s.sub}>
                    Ипотеку от застройщиков с выгодными условиями в 2023 можно выбрать онлайн на маркетплейсе (НАЗВАНИЕ СЕРВИСА).
                    <br/><br/>
                    Мы собрали актуальную информацию по действующим кредитным программам — ставки, условия,
                    доступные лимиты и многое другое. Принять решение помогут отзывы клиентов, рейтинги финансовых
                    организаций и экспертные материалы.
                </div>
                <div className={s.ch_cont}>
                    <ChoiseItemsMap choiseItems={items}/>
                </div>
                <div className={s.info}>
                    <div className={s.radioCont}>
                        <div>
                            <input type={'radio'}/>
                            Есть 1 ребёнок после 2018 года
                        </div>
                        <div>
                            <input type={'radio'}/>
                            2 ребёнка младше 18 лет
                        </div>
                    </div>
                    <div className={s.inpCont}>
                        <CustomInputTitle title={'Стоимость жилья, ₽'} width={385}/>
                        <CustomBtnChange title={'Параметры'}/>
                        <CustomInputTitle title={'Первоначальный взнос, ₽'} width={385}/>
                        <BlueBtn text={'Подобрать'} width={173}/>
                        <CustomWhiteSelectTitle title={'Срок'} options={['20 лет']} width={385}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroMortgageDiscount;