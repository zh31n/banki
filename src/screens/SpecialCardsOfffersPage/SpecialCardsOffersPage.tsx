"use client";
import Wrapper from "@/containers/Wrapper";
import Navigation from "@/screens/SpecialCardsOfffersPage/components/Navigation/Navigation";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";
import React, {useEffect} from "react";
import OffersBanks from './components/OffersBanks/OffersBanks';
import {CardInterface} from "@/core/services/Cards";
import {useDispatch, useSelector} from "react-redux";
import {CardsSelector} from "@/core/store/cards/selectors";
import {cardsGetRequestedAction} from "@/core/store/cards/actions";
import data from "@/core/data";

type questItem = {
    title: string
    text: string
}

interface SpecialCardsOffersPageProps {
    staticData: {
        questData: questItem[]
    }
}

export default function SpecialCardsOffersPage(props: SpecialCardsOffersPageProps) {
    const {
        staticData,
    } = props;
    const cards: CardInterface[] = useSelector(CardsSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(cardsGetRequestedAction());
    }, [])

    return <Wrapper>
        <Navigation data={data.CardsSpecialIntro}/>
        <OffersBanks cards={cards}/>
        <FrequentQuestions title={'Частые вопросы'} items={staticData.questData}/>
    </Wrapper>
}