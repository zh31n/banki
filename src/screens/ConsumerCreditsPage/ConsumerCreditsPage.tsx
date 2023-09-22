"use client";
import React, {useEffect} from 'react';
import PageWrapper from "@/containers/PageWrapper";
import IntroConsumer from "@/screens/ConsumerCreditsPage/Components/IntroConsumer/IntroConsumer";
import Bonus from "@/components/Bonus/Bonus";
import SliderBanksCons from "@/screens/ConsumerCreditsPage/Components/SliderBanksCons/SliderBanksCons";
import CatalogItems from "@/components/Catalog/CatalogItems/CatalogItems";
import LatestNews from "@/components/LatestNews/LatestNews";
import Mailing from "@/components/Mailing/Mailing";
import Communicate from "@/components/Communicate/Communicate";
import Feedback from "@/components/FeedBacks/Feedback/Feedback";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";
import {StaticImageData} from "next/image";
import {NewsInterface} from "@/core/services/News";
import {CreditInterface} from "@/core/services/Credits";
import CreditBankList from "@/components/credits/CreditBankList";
import CreditOfferList from "@/components/credits/CreditOfferList";
import CreditTopBankList from "@/components/credits/CreditTopBankList";
import {useDispatch, useSelector} from "react-redux";
import {CreditsSelector} from "@/core/store/credits/selectors";
import {creditsGetRequestedAction} from "@/core/store/credits/actions";
import {NewsListSelector} from "@/core/store/news/selectors";
import {newsGetRequestedAction} from "@/core/store/news/actions";

type catalogT = {
    img: StaticImageData
    name: string
}
type ItemT = {
    title: string
    text: string
}
interface ConsumerCreditsPageProps {
    staticData: {
        sliderBanks: StaticImageData[]
        catalogData: catalogT[]
        questData: ItemT[]
    }
}

const ConsumerCreditsPage = (props: ConsumerCreditsPageProps) => {
    const {
        staticData,
    } = props;
    const credits: CreditInterface[] = useSelector(CreditsSelector);
    const news: NewsInterface[] = useSelector(NewsListSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(creditsGetRequestedAction());
        dispatch(newsGetRequestedAction());
    }, [])

    return (
        <PageWrapper>
            <IntroConsumer/>
            <Bonus/>
            <SliderBanksCons data={staticData.sliderBanks}/>
            <CreditBankList
                credits={credits}
                isSelect={true}
                sub={' предложения'}
                title={'223'}
                options={['По популярности']}
            />
            <CreditOfferList credits={credits} />
            <CatalogItems title={'Каталог кредитов'} items={staticData.catalogData}/>
            <LatestNews/>
            <Mailing/>
            <Communicate/>
            <Feedback title={'Отзывы '} sub={'о кредитах'}/>
            <CreditTopBankList credits={credits}/>
            <FrequentQuestions title={'Важные вопросы'} items={staticData.questData}/>
        </PageWrapper>
    );
};

export default ConsumerCreditsPage;