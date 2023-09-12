"use client";
import React, {useEffect} from 'react';
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
import {NewsInterface} from "@/core/services/News";
import {useDispatch, useSelector} from "react-redux";
import {NewsListSelector} from "@/core/store/news/selectors";
import {newsGetRequestedAction} from "@/core/store/news/actions";

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
    const news: NewsInterface[] = useSelector(NewsListSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(newsGetRequestedAction());
    }, [])

    return (
        <PageWrapper>
            <IntroInsurance items={data.introChoose}/>
            <Bonus title={'Кэшбэк 20% за страхование ипотеки'}/>
            <InsuranceCompanys isTitle={true} data={data.banksSlideItems}/>
            <WatchInfo title={'Народный рейтинг страховых компаний'}
                       text={'Будьте уверенны в своем выборе: клиенты делятся опытом,' +
                           ' а мы ежедневно проверяем отзывы и обновляем рейтинги.'}
            />
            <SpecialOffersInsurance insuranceList={data.specialOffers}/>
            <LatestNews news={news}/>
            <Mailing/>
            <Communicate/>
            <Feedback title={'Отзывы '} sub={'о страховых компаниях'}/>
            <FrequentQuestions title={''} items={data.questData}/>
        </PageWrapper>
    );
};

export default InsurancePage;