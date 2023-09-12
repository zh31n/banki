import React from 'react';
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
import MicroLoansOrgs from "@/screens/MicroLoans/components/MicroLoansOrgs/MicroLoansOrgs";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";

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
type RecomItemT = {
    img: StaticImageData
    name: string
    sub: string
    btn: string
}
type offerT = {
    img: StaticImageData,
    title: string,
    sub: string,
    name: string,
    info: string
}
type LoanT = {
    img: StaticImageData
    title: string
    sub: string
}
type questT = {
    title: string
    text: string
}
type Props = {
    data: {
        introChoose: ChooseT[],
        lastRecommends: RecomItemT[],
        bankItems: StaticImageData[],
        bonds: InvestT[],
        offersMoth: offerT[],
        loans:LoanT[],
        questData:questT[]
    }
}

const InvestmentPage = ({data}: Props) => {
    return (
        <PageWrapper>
            <IntroInvest items={data.introChoose}/>
            <LastRecomends items={data.lastRecommends}/>
            <InvestInfo banks={data.bankItems}/>
            <WatchInfo title={'Мастер подбора брокерского счета'}
                       text={'Список крупнейших биржевых брокеров на российском инвестиционном рынке.'}/>
            <SoloInvest items={data.bonds} isSub={true}/>
            <OffersInvest items={data.offersMoth}/>
            <Mailing/>
            <LatestNews/>
            <HaveQues/>
            <MicroLoansOrgs title={'Все брокеры'} items={data.loans}/>
            <FrequentQuestions title={''} items={data.questData}/>
        </PageWrapper>
    );
};

export default InvestmentPage;