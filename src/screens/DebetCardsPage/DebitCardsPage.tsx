"use client";
import Wrapper from "@/containers/Wrapper";
import Navigation from "@/screens/DebetCardsPage/components/Navigation/Navigation";
import Bonus from "@/components/Bonus/Bonus";
import Offers from "@/screens/CreditMapPage/components/Offers/Offers";
import OffersMonth from "@/components/OffersMonth/OffersMonth";
import Mailing from "@/components/Mailing/Mailing";
import React, {useEffect, useState} from "react";
import LatestNews from "@/components/LatestNews/LatestNews";
import Feedback from "@/components/FeedBacks/Feedback/Feedback";
import Communicate from "@/components/Communicate/Communicate";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";
import data from "@/core/data";
import Compilations from "@/screens/DebetCardsPage/components/Сompilations/Сompilations";
import {CardInterface} from "@/core/services/Cards";
import {NewsInterface} from "@/core/services/News";
import {useDispatch, useSelector} from "react-redux";
import {CardsSelector} from "@/core/store/cards/selectors";
import {cardsGetRequestedAction} from "@/core/store/cards/actions";
import {newsGetRequestedAction} from "@/core/store/news/actions";
import {NewsListSelector} from "@/core/store/news/selectors";

interface DebitCardsPageProps {

}

export default function DebitCardsPage(props: DebitCardsPageProps) {
    const cards: CardInterface[] = useSelector(CardsSelector);
    const news: NewsInterface[] = useSelector(NewsListSelector);
    const dispatch = useDispatch();
    const [current, setCurrent] = useState<string>('все')
    useEffect(() => {
        dispatch(cardsGetRequestedAction());
        dispatch(newsGetRequestedAction());
    }, [])

    const dataMap = data.DebitCardsPage.questData
    return (
        <Wrapper>
            <Navigation setActive={setCurrent} current={current}/>
            <Bonus/>
            <Offers cards={cards}/>
            <OffersMonth/>
            <Mailing/>
            <Compilations/>
            <LatestNews news={news}/>
            <Communicate/>
            <Feedback title={'Отзывы '} sub={'о дебетовых картах'}/>
            <FrequentQuestions title={'Важная информация'} items={dataMap}/>
        </Wrapper>
    )
}