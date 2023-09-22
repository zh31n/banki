"use client";
import React, {useEffect} from 'react';
import PageWrapper from "@/containers/PageWrapper";
import IntroServiceBusiness from "@/screens/ServiceBusinessPage/components/IntroServiceBusiness/IntroServiceBusiness";
import data from "@/core/data";
import ChooseLegal from "@/components/ChooseLegal/ChooseLegal";
import Bonus from "@/components/Bonus/Bonus";
import s from './ServiceBusinessPage.module.scss';
import OffersInvest from "@/screens/InvestmentPage/components/OffersInvest/OffersInvest";
import Feedback from "@/components/FeedBacks/Feedback/Feedback";
import LatestNews from "@/components/LatestNews/LatestNews";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";
import DepositOfferItem from "@/components/Deposit/DepositOfferItem/DepositOfferItem";
import {BusinessCreditItemInterface} from "@/core/services/Business";
import {useDispatch, useSelector} from "react-redux";
import {BusinessCreditsSelector} from "@/core/store/business/selectors";
import {businessCreditsGetRequestedAction} from "@/core/store/business/actions";
import {newsGetRequestedAction} from "@/core/store/news/actions";
import {NewsInterface} from "@/core/services/News";
import {NewsListSelector} from "@/core/store/news/selectors";

const ServiceBusinessPage = () => {
    const credits: BusinessCreditItemInterface[] = useSelector(BusinessCreditsSelector);
    const news: NewsInterface[] = useSelector(NewsListSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(businessCreditsGetRequestedAction());
        dispatch(newsGetRequestedAction());
    }, [])

    return (
        <PageWrapper>
            <IntroServiceBusiness items={data.BusinessServicePage.introChoose}/>
            <ChooseLegal/>
            <Bonus title={'Откройте счет для бизнеса бесплатно'} height={166}
                   text={'Полгода со скидкой 50% на пакет услуг “Самое важное” и “Все включено” для новых клиентов'}
            />
            <div className={s.offers_wrap}>
                {data.BusinessServicePage.offers.map((item, index) => <DepositOfferItem item={item} key={index} />)}
            </div>
            <OffersInvest items={data.BusinessServicePage.offersMoth}/>
            <Feedback title={'Отзывы '} sub={'об РКО '}/>
            <LatestNews/>
            <FrequentQuestions title={'Частые вопросы'} items={data.BusinessServicePage.questData}/>
        </PageWrapper>
    );
};

export default ServiceBusinessPage;