import React from 'react';
import s from './InsurancePage.module.scss';
import PageWrapper from "@/containers/PageWrapper";
import IntroInsurance from "@/screens/InsurancePage/components/IntroInsurance/IntroInsurance";
import Bonus from "@/components/Bonus/Bonus";
import InsuranceCompanys from "@/screens/InsurancePage/components/InsuranceCompanys/InsuranceCompanys";
import {StaticImageData} from "next/image";
import WatchInfo from "@/components/WatchInfo/WatchInfo";
import SpecialOffersInsurance from "@/screens/InsurancePage/components/SpecialOffersInsurance/SpecialOffersInsurance";
import LatestNews from "@/components/LatestNews/LatestNews";
import Mailing from "@/components/Mailing/Mailing";
import Communicate from "@/components/Communicate/Communicate";
import Feedback from "@/components/FeedBacks/Feedback/Feedback";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";

type ChooseT = {
    name: string
    active: boolean
}
type OfferI = {
    name: string
    img: StaticImageData
    bankImg: StaticImageData
    bonus?: string
    bet?: number
    days?: string
    title_1?: string
    count1?: string
    title_2?: string
    count2?: string
}
type questT = {
    title: string
    text: string
}
type Props = {
    data: {
        introChoose: ChooseT[],
        banksSlideItems: StaticImageData[],
        specialOffers: OfferI[],
        questData: questT[]
    }
}
const InsurancePage = ({data}: Props) => {
    return (
        <PageWrapper>
            <IntroInsurance items={data.introChoose}/>
            <Bonus title={'Кэшбэк 20% за страхование ипотеки'}/>
            <InsuranceCompanys data={data.banksSlideItems}/>
            <WatchInfo title={'Народный рейтинг страховых компаний'}
                       text={'Будьте уверенны в своем выборе: клиенты делятся опытом,' +
                           ' а мы ежедневно проверяем отзывы и обновляем рейтинги.'}
            />
            <SpecialOffersInsurance items={data.specialOffers}/>
            <LatestNews/>
            <Mailing/>
            <Communicate/>
            <Feedback title={'Отзывы '} sub={'о страховых компаниях'}/>
            <FrequentQuestions title={''} items={data.questData}/>
        </PageWrapper>
    );
};

export default InsurancePage;