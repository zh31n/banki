import React from 'react';
import PageWrapper from "@/containers/PageWrapper";
import Intro from "@/screens/SavingAccountsPage/components/Intro/Intro";
import s from './SavingAccountsPage.module.scss';
import Bonus from "@/components/Bonus/Bonus";
import OffersBanks from "@/components/Offers/OffersBanks/OffersBanks";
import OfferMoth from "@/components/Offers/OfferMoth/OfferMoth";
import Feedback from "@/components/FeedBacks/Feedback/Feedback";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";
import TopBanks from "@/components/TopBanks/TopBanks";
import {DepositCardInterface} from "@/core/services/Deposits";

interface SavingAccountsPageProps {
    deposits: DepositCardInterface[];
    staticData: any;
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
            <OffersBanks isSelect={true} deposits={deposits} options={['По популярности']} title={'943 вклада'} sub={' подобрано'}/>
            <OfferMoth offers={deposits}/>
            <Feedback title={'Отзывы'} sub={' о вкладах'}/>
            <FrequentQuestions title={'Частые вопросы'} items={staticData.questions.items}/>
            <TopBanks banks={deposits}/>
        </PageWrapper>
    );
};

export default SavingAccountsPage;