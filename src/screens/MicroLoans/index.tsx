"use client";
import React, {useEffect} from 'react';
import PageWrapper from "@/containers/PageWrapper";
import IntroMicroloans from "@/screens/MicroLoans/components/IntroMicroloans/IntroMicroloans";
import Bonus from "@/components/Bonus/Bonus";
import SliderBanksCons from "@/screens/ConsumerCreditsPage/Components/SliderBanksCons/SliderBanksCons";
import WebLoans from "@/screens/MicroLoans/components/WebLoans";
import BrokerList from "@/components/investment/BrokersList";
import CatalogItems from "@/components/Catalog/CatalogItems/CatalogItems";
import LatestNews from "@/components/LatestNews/LatestNews";
import Feedback from "@/components/FeedBacks/Feedback/Feedback";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";
import {NewsInterface} from "@/core/services/News";
import {CreditInterface} from "@/core/services/Credits";
import CreditTopBankList from "@/components/credits/CreditTopBankList";
import CreditOfferList from "@/components/credits/CreditOfferList";
import {BrokerInterface} from "@/core/services/Investing";
import {useDispatch, useSelector} from "react-redux";
import {InvestingBrokersSelector} from "@/core/store/investing/selectors";
import {investingBrokersGetRequestedAction} from "@/core/store/investing/actions";
import {NewsListSelector} from "@/core/store/news/selectors";
import {newsGetRequestedAction} from "@/core/store/news/actions";
import {CreditsSelector} from "@/core/store/credits/selectors";
import {creditsGetRequestedAction} from "@/core/store/credits/actions";

interface MicroloansPageProps {
    staticData: any;
}

const MicroloansPage = (props: MicroloansPageProps) => {
    const {
        staticData,
    } = props;
    const credits: CreditInterface[] = useSelector(CreditsSelector);
    const brokers: BrokerInterface[] = useSelector(InvestingBrokersSelector);
    const news: NewsInterface[] = useSelector(NewsListSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(creditsGetRequestedAction());
        dispatch(investingBrokersGetRequestedAction());
        dispatch(newsGetRequestedAction());
    }, [])

    return (
        <PageWrapper>
            <IntroMicroloans items={staticData.chooseIntro}/>
            <Bonus title={'0% Первый займ бесплатно!'}/>
            <SliderBanksCons data={staticData.slideItems}/>
            <WebLoans credits={credits}/>
            <CreditOfferList credits={credits} />
            <BrokerList title={'Микрокредитные организации'} brokers={brokers}/>
            <CatalogItems title={'Каталог микрозаймов'} items={staticData.catalogData} width={'100%'}/>
            <LatestNews news={news}/>
            <Feedback title={'Отзывы '} sub={'о МФО'}/>
            <CreditTopBankList
                credits={credits}
                title={'Микрозаймы в Москве'}
                subtitle={' - ТОП 10 займов в МФО в 2023 году'}
            />
            <FrequentQuestions title={'Важная информация'} items={staticData.questData}/>
        </PageWrapper>
    );
};

export default MicroloansPage;