import React from 'react';
import PageWrapper from "@/containers/PageWrapper";
import IntroMicroloans from "@/screens/MicroLoans/components/IntroMicroloans/IntroMicroloans";
import Bonus from "@/components/Bonus/Bonus";
import SliderBanksCons from "@/screens/ConsumerCreditsPage/Components/SliderBanksCons/SliderBanksCons";
import WebLoans from "@/screens/MicroLoans/components/WebLoans";
import MicroLoansOrgs from "@/screens/MicroLoans/components/MicroLoansOrgs/MicroLoansOrgs";
import CatalogItems from "@/components/Catalog/CatalogItems/CatalogItems";
import LatestNews from "@/components/LatestNews/LatestNews";
import Feedback from "@/components/FeedBacks/Feedback/Feedback";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";
import {StaticImageData} from "next/image";
import {NewsInterface} from "@/core/services/News";
import {CreditInterface} from "@/core/services/Credits";
import CreditTopBankList from "@/components/credits/CreditTopBankList";
import CreditOfferList from "@/components/credits/CreditOfferList";

type chooseT = {
    name: string
    active: boolean
}
type offers = {
    img: StaticImageData
    name: string
    subtitle: string
    time?: number | undefined
    year_money?: number | undefined
    title_1?: string | undefined
    title1_key?: string | undefined
    title2?: string | undefined
    title2_key?: string | undefined
}
type loanT = {
    img: StaticImageData
    title: string
    sub: string
}
type catalogT = {
    name: string
    img: StaticImageData
}
type banksT = {
    title: string
    sub: string
    stavka: number
    time: number | string
    money: string
    osob?: string
}
type ItemT = {
    title: string
    text: string
}
interface MicroloansPageProps {
    credits: CreditInterface[];
    news: NewsInterface[];
    staticData: {
        chooseIntro: chooseT[],
        slideItems: StaticImageData[],
        offersMoth: offers[],
        loans: loanT[]
        catalogData: catalogT[]
        banks: banksT[]
        questData: ItemT[]
    }
}

const MicroloansPage = (props: MicroloansPageProps) => {
    const {
        credits,
        news,
        staticData,
    } = props;

    return (
        <PageWrapper>
            <IntroMicroloans items={staticData.chooseIntro}/>
            <Bonus title={'0% Первый займ бесплатно!'}/>
            <SliderBanksCons data={staticData.slideItems}/>
            <WebLoans credits={credits}/>
            <CreditOfferList credits={credits} />
            <MicroLoansOrgs title={'Микрокредитные организации'} items={staticData.loans}/>
            <CatalogItems title={'Каталог микрозаймов'} items={staticData.catalogData} width={'100%'}/>
            <LatestNews news={news}/>
            <Feedback title={'Отзывы '} sub={'о МФО'}/>
            <CreditTopBankList
                credits={credits}
                title={'Микрозаймы в Москве'}
                sub={' - ТОП 10 займов в МФО в 2023 году'}
            />
            <FrequentQuestions title={'Важная информация'} items={staticData.questData}/>
        </PageWrapper>
    );
};

export default MicroloansPage;