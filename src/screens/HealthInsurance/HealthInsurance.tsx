import React from 'react';
import PageWrapper from "@/containers/PageWrapper";
import IntroHealth from "@/screens/HealthInsurance/components/IntroHealth/IntroHealth";
import Bonus from "@/components/Bonus/Bonus";
import InsuranceCompanys from "@/screens/InsurancePage/components/InsuranceCompanys/InsuranceCompanys";
import {StaticImageData} from "next/image";
import OffersBanks from "@/screens/SpecialCardsOfffersPage/components/OffersBanks/OffersBanks";
import LatestNews from "@/components/LatestNews/LatestNews";
import Feedback from "@/components/FeedBacks/Feedback/Feedback";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";

type ItemT = {
    name: string
    active: boolean
}
type offersT = {
    img: StaticImageData,
    imgBank?: StaticImageData
    name?: string
    sub?: string
    info?: string
    t1?: string
    t2?: string
    c1?: string
    c2?: string
    btntxt?: string
}
type questT = {
    title: string
    text: string
}
type Props = {
    data: {
        chooseIntro: ItemT[]
        sliderItems: StaticImageData[],
        offersItems: offersT[],
        questData: questT[]
        questions: questT[]
    }
}

const HealthInsurance = ({data}: Props) => {
    return (
        <PageWrapper>
            <IntroHealth items={data.chooseIntro}/>
            <Bonus title={'Кэшбэк 20% за страхование ипотеки'} text={'Получите до 4000 рублей на карту'}/>
            <InsuranceCompanys data={data.sliderItems}/>
            <OffersBanks dataMap={data.offersItems}/>
            <LatestNews/>
            <Feedback sub={' о страховании жизни'} title={'Отзывы'}/>
            <FrequentQuestions title={'Популярные вопросы'} items={data.questData}/>
            <FrequentQuestions title={'Важная информация'} items={data.questions}/>
        </PageWrapper>
    );
};

export default HealthInsurance;