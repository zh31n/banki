"use client";
import React, {useEffect, useState} from 'react';
import s from './InvestmentPage.module.scss';
import PageWrapper from "@/containers/PageWrapper";
import IntroInvest from "@/screens/InvestmentPage/components/IntroInvest/IntroInvest";
import LastRecomends from "@/screens/InvestmentPage/components/LastRecommends/LastRecommends";
import {StaticImageData} from "next/image";
import InvestInfo from "@/screens/InvestmentPage/components/InvestInfo/InvestInfo";
import WatchInfo from "@/components/WatchInfo/WatchInfo";
import SoloInvest from "@/screens/InvestmentPage/components/SoloInvest/SoloInvest";
import OffersInvest from "@/screens/InvestmentPage/components/OffersInvest/OffersInvest";
import Mailing from "@/components/Mailing/Mailing";
import LatestNews from "@/components/LatestNews/LatestNews";
import HaveQues from "@/components/HaveQues/HaveQues";
import BrokerList from "@/components/investment/BrokersList";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";
import {useDispatch, useSelector} from "react-redux";
import {InvestingNewsListSelector} from "@/core/store/news/selectors";
import {investingNewsGetRequestedAction} from "@/core/store/news/actions";
import {BrokerInterface, InvestingMarketInterface, InvestingNewsInterface} from "@/core/services/Investing";
import {investingBrokersGetRequestedAction, investingMarketsGetRequestedAction} from "@/core/store/investing/actions";
import {InvestingBrokersSelector, InvestingMarketsSelector} from "@/core/store/investing/selectors";

type ChooseT = {
    name: string
    active: boolean
}
type InvestT = {
    img: StaticImageData
    title: string
    sub: string
    rate: number
    money: number
}
type offerT = {
    img: StaticImageData,
    title: string,
    sub: string,
    name: string,
    info: string
}
type questT = {
    title: string
    text: string
}
type Props = {
    data: {
        introChoose: ChooseT[],
        bankItems: StaticImageData[],
        bonds: InvestT[],
        offersMoth: offerT[],
        questData:questT[]
    }
}

const InvestmentPage = ({data}: Props) => {
    const news: InvestingNewsInterface[] = useSelector(InvestingNewsListSelector);
    const markets: InvestingMarketInterface[] = useSelector(InvestingMarketsSelector);
    const brokers: BrokerInterface[] = useSelector(InvestingBrokersSelector);
    const [current, setCurrent] = useState<string>('с чего начать')
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(investingNewsGetRequestedAction());
        dispatch(investingMarketsGetRequestedAction());
        dispatch(investingBrokersGetRequestedAction());
    }, [])

    return (
        <PageWrapper>
            <IntroInvest setActive={setCurrent} current={current} items={data.introChoose}/>
            <LastRecomends markets={markets}/>
            <InvestInfo banks={data.bankItems}/>
            <WatchInfo title={'Мастер подбора брокерского счета'}
                       text={'Список крупнейших биржевых брокеров на российском инвестиционном рынке.'}/>
            <SoloInvest items={data.bonds} isSub={true}/>
            <OffersInvest items={data.offersMoth}/>
            <Mailing/>
            <LatestNews/>
            <HaveQues/>
            <BrokerList title={'Все брокеры'} brokers={brokers}/>
            <FrequentQuestions title={''} items={data.questData}/>
        </PageWrapper>
    );
};

export default InvestmentPage;