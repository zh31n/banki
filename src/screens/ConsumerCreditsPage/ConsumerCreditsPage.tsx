import React from 'react';
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

type catalogT = {
    img: StaticImageData
    name: string
}
type ItemT = {
    title: string
    text: string
}
interface ConsumerCreditsPageProps {
    credits: CreditInterface[];
    news: NewsInterface[];
    staticData: {
        sliderBanks: StaticImageData[]
        catalogData: catalogT[]
        questData: ItemT[]
    }
}

const ConsumerCreditsPage = (props: ConsumerCreditsPageProps) => {
    const {
        credits,
        news,
        staticData,
    } = props;

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
            <LatestNews news={news}/>
            <Mailing/>
            <Communicate/>
            <Feedback title={'Отзывы '} sub={'о кредитах'}/>
            <CreditTopBankList credits={credits}/>
            <FrequentQuestions title={'Важные вопросы'} items={staticData.questData}/>
        </PageWrapper>
    );
};

export default ConsumerCreditsPage;