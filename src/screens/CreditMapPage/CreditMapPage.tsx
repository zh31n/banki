"use client";
import Wrapper from "@/containers/Wrapper";
import Navigation from "./components/Navigation/Navigation";
import Bonus from "../../components/Bonus/Bonus";
import Offers from "./components/Offers/Offers";
import OffersMonth from "@/components/OffersMonth/OffersMonth";
import Mailing from "@/components/Mailing/Mailing";
import Compilations from "@/screens/CreditMapPage/components/Сompilations/Сompilations";
import LatestNews from "@/components/LatestNews/LatestNews";
import Communicate from "@/components/Communicate/Communicate";
import React, {useEffect} from "react";
import Feedback from "@/components/FeedBacks/Feedback/Feedback";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";
import data from "@/core/data";
import BanksWithButton from "@/components/BanksWithButton/BanksWithButton";
import {NewsInterface} from "@/core/services/News";
import {CardInterface} from "@/core/services/Cards";
import {useDispatch, useSelector} from "react-redux";
import {CardsSelector} from "@/core/store/cards/selectors";
import {NewsListSelector} from "@/core/store/news/selectors";
import {cardsGetRequestedAction} from "@/core/store/cards/actions";
import {newsGetRequestedAction} from "@/core/store/news/actions";

interface CreditMapPageProps {

}

export default function CreditMapPage(props: CreditMapPageProps) {
    const cards: CardInterface[] = useSelector(CardsSelector);
    const news: NewsInterface[] = useSelector(NewsListSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(cardsGetRequestedAction());
        dispatch(newsGetRequestedAction());
    }, [])
    const staticData = data.CreditCardsPage;

    return (
        <Wrapper>
            <Navigation/>
            <Bonus/>
            <Offers cards={cards}/>
            <OffersMonth/>
            <Mailing/>
            <Compilations/>
            <LatestNews />
            <Communicate/>
            <Feedback title={'Отзывы '} sub={'о кредитных картах'}/>
            <BanksWithButton
                cards={cards}
                text={'Кредитные карты в Москве '}
                sub_value={'- ТОП 10 лучших в 2023 году'}
            />
            <FrequentQuestions title={'Важная информация'} items={staticData.info}/>
        </Wrapper>
    );
}
