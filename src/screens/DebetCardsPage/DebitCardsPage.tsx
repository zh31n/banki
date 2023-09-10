import Wrapper from "@/containers/Wrapper";
import Navigation from "@/screens/DebetCardsPage/components/Navigation/Navigation";
import Bonus from "@/components/Bonus/Bonus";
import Offers from "@/screens/CreditMapPage/components/Offers/Offers";
import OffersMonth from "@/components/OffersMonth/OffersMonth";
import Mailing from "@/components/Mailing/Mailing";
import React from "react";
import LatestNews from "@/components/LatestNews/LatestNews";
import Feedback from "@/components/FeedBacks/Feedback/Feedback";
import Communicate from "@/components/Communicate/Communicate";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";
import data from "@/core/data";
import Compilations from "@/screens/DebetCardsPage/components/Сompilations/Сompilations";
import {CardInterface} from "@/core/api/Cards";
import {NewsInterface} from "@/core/api/News";

interface DebitCardsPageProps {
    cards: CardInterface[];
    news: NewsInterface[];
}

export default function DebitCardsPage(props: DebitCardsPageProps) {
    const {
        cards,
        news,
    } = props;

    const dataMap = data.DebitCardsPage.questData
    return (
        <Wrapper>
            <Navigation/>
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