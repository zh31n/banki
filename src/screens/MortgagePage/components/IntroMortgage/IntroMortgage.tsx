import React from 'react';
import s from './IntroMortgage.module.scss';
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

const IntroMortgage = ({items}: Props) => {
    return (
        <div className={s.intro}>
            <div className={s.info_cont}>
                <div className={s.breadCrumbs}>
                    Главная / <mark>Ипотека</mark>
                </div>
                <div className={s.title}>
                    Ипотека <mark>в Москве</mark>
                </div>
                <div className={s.sub}>
                    На (НАЗВАНИЕ СЕРВИСА) можно с легкостью подобрать ипотечный кредит и оформить онлайн-заявку. Вы
                    получите ипотеку на самых выгодных условиях*. У нас большая база ипотечных предложений от разных
                    банков. Также на сайте вы найдете отзывы реальных клиентов и заключения экспертов (НАЗВАНИЕ СЕРВИСА)
                    с описанием преимуществ и недостатков каждого предложения. Это позволит найти подходящий ипотечный
                    кредит и быть уверенным в своем выборе!
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

export default IntroMortgage;