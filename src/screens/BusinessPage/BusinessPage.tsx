"use client";
import Wrapper from "@/containers/Wrapper";
import OffersMonth from "@/components/OffersMonth/OffersMonth";
import LatestNews from "@/components/LatestNews/LatestNews";
import Navigation from "@/screens/BusinessPage/components/Navigation/Navigation";
import Kassa from "@/screens/BusinessPage/components/Kassa/Kassa";
import Ecvaring from "@/screens/BusinessPage/components/Ecvaring/Ecvaring";
import CreditForBank from "@/screens/BusinessPage/components/CreditForBank/CreditForBank";
import Text from "@/screens/BusinessPage/components/Text/Text";
import {NewsInterface} from "@/core/services/News";
import {useDispatch, useSelector} from "react-redux";
import {NewsListSelector} from "@/core/store/news/selectors";
import {useEffect, useState} from "react";
import {newsGetRequestedAction} from "@/core/store/news/actions";
import {businessCardsGetRequestedAction, businessCreditsGetRequestedAction} from "@/core/store/business/actions";
import {BusinessCreditsSelector} from "@/core/store/business/selectors";
import {BusinessCreditItemInterface} from "@/core/services/Business";

export default function BusinessPage(){
    const credits: BusinessCreditItemInterface[] = useSelector(BusinessCreditsSelector);
    const news: NewsInterface[] = useSelector(NewsListSelector);
    const dispatch = useDispatch();
    const [current, setCurrent] = useState<string>('все продукты')

    useEffect(() => {
        dispatch(businessCreditsGetRequestedAction());
        dispatch(businessCardsGetRequestedAction());
        dispatch(newsGetRequestedAction());
    }, [])

    return (
        <Wrapper>
            <Navigation current={current} setActive={setCurrent} />
            <Kassa />
            <CreditForBank />
            <Ecvaring />
            <Text />
            <OffersMonth />
            <LatestNews  />
        </Wrapper>
    )
}