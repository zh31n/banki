"use client";
import React, {useEffect} from 'react';
import PageWrapper from "@/containers/PageWrapper";
import IntroObliagtionInvest from "@/screens/ObligationsInv/components/IntroObliagtionInvest/IntroObliagtionInvest";
import data from "@/core/data";
import StockInvCalculate from "@/screens/StocksInvestPage/components/StockInvCalculate/StockInvCalculate";
import Bonus from "@/components/Bonus/Bonus";
import OffersObligation from "@/screens/ObligationsInv/components/OffersObligation/OffersObligation";
import s from './ObligationsInv.module.scss';
import OffersInvest from "@/screens/InvestmentPage/components/OffersInvest/OffersInvest";
import HaveQues from "@/components/HaveQues/HaveQues";
import BrokerList from "@/components/investment/BrokersList";
import Mailing from "@/components/Mailing/Mailing";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";
import TopObligations from "@/screens/ObligationsInv/components/TopObligations/TopObligations";
import LatestNews from "@/components/LatestNews/LatestNews";
import {BrokerInterface, InvestingNewsInterface} from "@/core/services/Investing";
import {useDispatch, useSelector} from "react-redux";
import {InvestingNewsListSelector} from "@/core/store/news/selectors";
import {InvestingBrokersSelector} from "@/core/store/investing/selectors";
import {investingNewsGetRequestedAction} from "@/core/store/news/actions";
import {investingBrokersGetRequestedAction} from "@/core/store/investing/actions";


const ObligationsInv = () => {
    const news: InvestingNewsInterface[] = useSelector(InvestingNewsListSelector);
    const brokers: BrokerInterface[] = useSelector(InvestingBrokersSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(investingNewsGetRequestedAction());
        dispatch(investingBrokersGetRequestedAction());
    }, [])

    return (
        <PageWrapper>
            <IntroObliagtionInvest items={data.ObligationsPage.chooseIntro}/>
            <StockInvCalculate chooseD={data.ObligationsPage.calc_choose_d}/>
            <Bonus
                text={'Инвестиционная платформа №1. Большой выбор размещений,' +
                ' 10% годовых в облигациях российских компаний, консультации профессиональных управляющих'}
                title={'ВТБ Мои Инвестиции'}
                height={166}
            />
            <OffersObligation
                changeTime={{
                    time: '09:48',
                    date: '23.08.2023'
                }}
                offers={data.ObligationsPage.obligationOffers}
                count={'393 облигации'}
                options={['Доходность']}
            />
            <div className={s.text}>
                <p>
                    Данные предоставлены ЗАО «Интерфакс». Данные предоставляются исключительно для целей ознакомления и
                    не являются основанием для принятия финансовых и иных решений. Администрация сайта и ЗАО «Интерфакс»
                    не несут никакой ответственности за любые ошибки, задержки в передаче данных или действия на основе
                    этих данных.
                </p>
            </div>
            <OffersInvest items={data.ObligationsPage.offersMoth}/>
            <HaveQues/>
            <BrokerList
                brokers={brokers}
                title={'Все брокеры'}
            />
            <Mailing/>
            <FrequentQuestions title={'Частые вопросы'} items={data.ObligationsPage.frequentQuests}/>
            <TopObligations obligations={data.ObligationsPage.TopObligationItems}/>
            <LatestNews/>
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

export default ObligationsInv;