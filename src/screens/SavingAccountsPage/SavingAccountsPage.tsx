import React from 'react';
import PageWrapper from "@/containers/PageWrapper";
import Intro from "@/screens/SavingAccountsPage/components/Intro/Intro";
import s from './SavingAccountsPage.module.scss';
import Bonus from "@/components/Bonus/Bonus";
import OffersBanks from "@/components/Offers/OffersBanks/OffersBanks";
import OfferMoth from "@/components/Offers/OfferMoth/OfferMoth";
import loc_bank from "@/assets/icons/banki_icon/loco.svg";
import Feedback from "@/components/FeedBacks/Feedback/Feedback";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";
import TopBanks from "@/components/TopBanks/TopBanks";
import loco from "@/assets/icons/banki_icon/loco.svg";
import sber from "@/assets/icons/banki_icon/sber.svg";
import {StaticImageData} from "next/image";


type offersT = {
    name: string
    subtitle: string
    img: StaticImageData
    time: number
    year_money: number
}
type questT = {
    title: string
    items: ItemT[]
}
type banksT = {
    title: string
    sub: string
    stavka: number
    time: number
    money: string
    osob: string
}
type depositsT = {
    name: string
    sub: string
    stavka: string
    time: string
    money: string
    img: StaticImageData
    charcs: string[]
}
type ItemT = {
    title: string
    text: string
}
type Props = {
    data: {
        deposits: depositsT[]
        questions: questT
        offers: offersT[]
        banks: banksT[]
    }
}


const SavingAccountsPage = ({data}: Props) => {
    return (
        <PageWrapper>
            <Intro/>
            <Bonus/>
            <OffersBanks deposits={data.deposits} options={['По популярности']} title={'943 вклада'} sub={'подобрано'}/>
            <OfferMoth offers={data.offers}/>
            <Feedback title={'Отзывы'} sub={'о вкладах'}/>
            <FrequentQuestions title={'Частые вопросы'} items={data.questions.items}/>
            <TopBanks banks={data.banks}/>
        </PageWrapper>
    );
};

export default SavingAccountsPage;