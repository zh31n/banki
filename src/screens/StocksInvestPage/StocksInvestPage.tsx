"use client";
import React, {useEffect} from 'react';
import PageWrapper from "@/containers/PageWrapper";
import IntroStockInvest from "@/screens/StocksInvestPage/components/IntroStockInvest/IntroStockInvest";
import data from "@/core/data";
import StockInvCalculate from "@/screens/StocksInvestPage/components/StockInvCalculate/StockInvCalculate";
import Bonus from "@/components/Bonus/Bonus";
import OffersStockInv from "@/screens/StocksInvestPage/components/OffersStockInv/OffersStockInv";
import s from './StocksInvestPage.module.scss';
import OffersInvest from "@/screens/InvestmentPage/components/OffersInvest/OffersInvest";
import Mailing from "@/components/Mailing/Mailing";
import LatestNews from "@/components/LatestNews/LatestNews";
import HaveQues from "@/components/HaveQues/HaveQues";
import BrokerList from "@/components/investment/BrokersList";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";
import {BrokerInterface, InvestingNewsInterface} from "@/core/services/Investing";
import {useDispatch, useSelector} from "react-redux";
import {InvestingNewsListSelector} from "@/core/store/news/selectors";
import {InvestingBrokersSelector} from "@/core/store/investing/selectors";
import {investingNewsGetRequestedAction} from "@/core/store/news/actions";
import {investingBrokersGetRequestedAction} from "@/core/store/investing/actions";

const StocksInvestPage = () => {
    const news: InvestingNewsInterface[] = useSelector(InvestingNewsListSelector);
    const brokers: BrokerInterface[] = useSelector(InvestingBrokersSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(investingNewsGetRequestedAction());
        dispatch(investingBrokersGetRequestedAction());
    }, [])

    return (
        <PageWrapper>
            <IntroStockInvest items={data.StockInvest.chooseIntro}/>
            <StockInvCalculate chooseD={data.StockInvest.calc_choose_d}/>
            <Bonus title={'ВТБ Мои Инвестиции'} text={'Инвестиционная платформа №1. Большой выбор' +
                ' размещений, 10% годовых в облигациях российских компаний, консультации профессиональных управляющих'}
                   height={166}
            />
            <OffersStockInv offers={data.StockInvest.stockOffersItem} count={927} options={['Изменение цены, за месяц']}
                            isSelect={true}
            />
            <div className={s.text}>
                <p>
                    Данные предоставлены ЗАО «Интерфакс». Данные предоставляются исключительно для целей ознакомления и
                    не
                    являются основанием для принятия финансовых и иных решений. Администрация сайта и ЗАО «Интерфакс» не
                    несут никакой ответственности за любые ошибки, задержки в передаче данных или действия на основе
                    этих
                    данных.
                </p>
            </div>
            <OffersInvest items={data.StockInvest.offersMoth}/>
            <HaveQues/>
            <BrokerList title={'Все брокеры'} brokers={brokers}/>
            <Mailing/>
            <FrequentQuestions title={'Частые вопросы'} items={data.StockInvest.frequentQuests}/>
            <LatestNews news={news}/>
            <FrequentQuestions title={''} items={data.StockInvest.questions}/>
            <div className={s.text}>
                <h1 className={s.title}>Информация</h1>
                <p>
                    Данная информация не является индивидуальной инвестиционной рекомендацией, и финансовые инструменты
                    либо операции, упомянутые в ней, могут не соответствовать вашему инвестиционному профилю и
                    инвестиционным целям (ожиданиям). Определение соответствия финансового инструмента либо операции
                    вашим интересам, инвестиционным целям, инвестиционному горизонту и уровню допустимого риска является
                    вашей задачей. ООО «Информационное агентство «Банки.ру» не несет ответственности за возможные убытки
                    в случае совершения операций либо инвестирования в финансовые инструменты, упомянутые в данной
                    информации, и не рекомендует использовать указанную информацию в качестве единственного источника
                    информации при принятии инвестиционного решения.
                    Данные предоставлены ЗАО «Интерфакс». Данные предоставляются исключительно для целей ознакомления и
                    не являются основанием для принятия финансовых и иных решений. Администрация сайта и ЗАО «Интерфакс»
                    не несут никакой ответственности за любые ошибки, задержки в передаче данных или действия на основе
                    этих данных.
                </p>
            </div>
        </PageWrapper>
    );
};

export default StocksInvestPage;