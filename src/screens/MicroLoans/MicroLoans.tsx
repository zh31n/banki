import React from 'react';
import PageWrapper from "@/containers/PageWrapper";
import IntroMicroloans from "@/screens/MicroLoans/components/IntroMicroloans/IntroMicroloans";
import Bonus from "@/components/Bonus/Bonus";
import SliderBanksCons from "@/screens/ConsumerCreditsPage/Components/SliderBanksCons/SliderBanksCons";
import WebLoans from "@/screens/MicroLoans/components/WebLoans/WebLoans";
import OfferMoth from "@/components/Offers/OfferMoth/OfferMoth";
import MicroLoansOrgs from "@/screens/MicroLoans/components/MicroLoansOrgs/MicroLoansOrgs";
import CatalogItems from "@/components/Catalog/CatalogItems/CatalogItems";
import LatestNews from "@/components/LatestNews/LatestNews";
import Feedback from "@/components/FeedBacks/Feedback/Feedback";
import TopBanks from "@/components/TopBanks/TopBanks";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";
import {StaticImageData} from "next/image";

type chooseT = {
    name: string
    active: boolean
}
type WebLoan = {
    sum: string
    days: string
    stavka: string | number
    titleBtn: string
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
type Props = {
    data: {
        chooseIntro: chooseT[],
        slideItems: StaticImageData[],
        webloans: WebLoan[],
        offersMoth: offers[],
        loans: loanT[]
        catalogData: catalogT[]
        banks: banksT[]
        questData: ItemT[]
    }
}

const MicroLoans = ({data}: Props) => {
    return (
        <PageWrapper>
            <IntroMicroloans items={data.chooseIntro}/>
            <Bonus title={'0% Первый займ бесплатно!'}/>
            <SliderBanksCons data={data.slideItems}/>
            <WebLoans data={data.webloans}/>
            <OfferMoth offers={data.offersMoth}/>
            <MicroLoansOrgs title={'Микрокредитные организации'} items={data.loans}/>
            <CatalogItems title={'Каталог микрозаймов'} items={data.catalogData} width={'100%'}/>
            <LatestNews/>
            <Feedback title={'Отзывы '} sub={'о МФО'}/>
            <TopBanks banks={data.banks} title={'Микрозаймы в Москве '} sub={'- ТОП 10 займов в МФО в 2023 году'}
                      fz={36}/>
            <FrequentQuestions title={'Важная информация'} items={data.questData}/>
        </PageWrapper>
    );
};

export default MicroLoans;