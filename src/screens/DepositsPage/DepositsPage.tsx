import React from 'react';
import PageWrapper from "@/containers/PageWrapper";
import IntroDeposits from "@/screens/DepositsPage/components/IntroDeposits/IntroDeposits";
import Bonus from "@/components/Bonus/Bonus";
import absolut from '@/assets/icons/absolute_big.svg';
import {StaticImageData} from "next/image";
import OffersBanks from "@/components/Offers/OffersBanks/OffersBanks";
import PopularOffers from "@/screens/DepositsPage/components/PopularOffers/PopularOffers";
import OfferMoth from "@/components/Offers/OfferMoth/OfferMoth";
import offerMoth from "@/components/Offers/OfferMoth/OfferMoth";
import Mailing from "@/components/Mailing/Mailing";
import LatestNews from "@/components/LatestNews/LatestNews";
import SpecialOffersDeposit from "@/screens/DepositsPage/components/SpecialOffersDeposit/SpecialOffersDeposit";
import Communicate from "@/components/Communicate/Communicate";
import Feedback from "@/components/FeedBacks/Feedback/Feedback";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";
import TopBanks from "@/components/TopBanks/TopBanks";

type offerT = {
    name: string
    sub: string
    stavka: string
    time: string
    money: string
    img: StaticImageData
    charcs: string[]
    btn?: string | undefined
    count?: string | undefined
}
type OfferItem = {
    active: boolean
    img: StaticImageData
    title: string
    sub: string
}
type OfferMoths = {
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
type offerI = {
    name: string
    img: StaticImageData
    bankImg: StaticImageData
    bonus: string
    bet: number
    days: string
}
type quesT = {
    title: string
    text: string
}
type banksT = {
    title: string
    sub: string
    stavka: number
    time: number | string
    money: string
    osob?: string
}
type Props = {
    data: {
        offersBanks: offerT[],
        PopularOffers: OfferItem[],
        offersMoth: OfferMoths[],
        questData: quesT[],
        specialOffers: offerI[]
        Topbanks: banksT[]
    }
}
const DepositsPage = ({data}: Props) => {
    return (
        <PageWrapper>
            <IntroDeposits/>
            <Bonus title={'Вклад 10% на 3 года'} img={absolut}/>
            <OffersBanks deposits={data.offersBanks} title={'943 вклада'} sub={' подобрано'}
                         options={['По популярности']}/>
            <PopularOffers data={data.PopularOffers}/>
            <OfferMoth offers={data.offersMoth}/>
            <Mailing/>
            <LatestNews/>
            <SpecialOffersDeposit items={data.specialOffers}/>
            <Communicate/>
            <Feedback title={'Отзывы '} sub={'о вкладах'}/>
            <FrequentQuestions title={'Частые вопросы'} items={data.questData}/>
            <TopBanks banks={data.Topbanks} title={''} sub={''}/>
        </PageWrapper>
    );
};

export default DepositsPage;