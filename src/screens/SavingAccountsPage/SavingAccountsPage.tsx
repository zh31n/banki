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
import IntroDeposits from "@/screens/DepositsPage/components/IntroDeposits/IntroDeposits";
import absolut from "@/assets/icons/absolute_big.svg";
import {DepositCardInterface} from "@/core/api/Deposits";
import {NewsInterface} from "@/core/api/News";

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
type ItemT = {
    title: string
    text: string
}

interface SavingAccountsPageProps {
    deposits: DepositCardInterface[];
    staticData: {
        questions: questT
        offers: offersT[]
        banks: banksT[]
    }
}

const SavingAccountsPage = (props: SavingAccountsPageProps) => {
    const {
        deposits,
        staticData,
    } = props;
    const bonus = deposits[0];

    return (
        <PageWrapper>
            <Intro/>
            {bonus && (
                <Bonus
                    title={`Бонус до ${bonus.min_amount} рублей за открытие вклада!`}
                    text={bonus.description}
                />
            )}
            <OffersBanks deposits={deposits} options={['По популярности']} title={'943 вклада'} sub={' подобрано'}/>
            <OfferMoth offers={deposits}/>
            <Feedback title={'Отзывы'} sub={' о вкладах'}/>
            <FrequentQuestions title={'Частые вопросы'} items={staticData.questions.items}/>
            <TopBanks banks={deposits}/>
        </PageWrapper>
    );
};

export default SavingAccountsPage;