"use client";
import React, {useEffect} from 'react';
import PageWrapper from "@/containers/PageWrapper";
import IntroAssuranceBusiness
    from "@/screens/AssuranceBusiness/components/IntroAssuranceBusiness/IntroAssuranceBusiness";
import InsuranceCompanys from "@/screens/InsurancePage/components/InsuranceCompanys/InsuranceCompanys";
import data from "@/core/data";
import OffersBanks from "@/screens/SpecialCardsOfffersPage/components/OffersBanks/OffersBanks";
import LatestNews from "@/components/LatestNews/LatestNews";
import Feedback from "@/components/FeedBacks/Feedback/Feedback";
import {NewsInterface} from "@/core/services/News";
import {useDispatch, useSelector} from "react-redux";
import {NewsListSelector} from "@/core/store/news/selectors";
import {newsGetRequestedAction} from "@/core/store/news/actions";

const AssuranceBusiness = () => {
    const news: NewsInterface[] = useSelector(NewsListSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(newsGetRequestedAction());
    }, [])

    return (
        <PageWrapper>
            <IntroAssuranceBusiness/>
            <InsuranceCompanys data={data.InsurancePage.banksSlideItems} isTitle={true}/>
            <OffersBanks cards={data.AssuranceBusiness.offers} title={'Виды страхования'}/>
            <LatestNews news={news}/>
            <Feedback sub={' о страховании юридических лиц '} title={'Отзывы'}/>
        </PageWrapper>
    );
};

export default AssuranceBusiness;