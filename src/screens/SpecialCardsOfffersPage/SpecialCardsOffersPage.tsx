import Wrapper from "@/containers/Wrapper";
import Navigation from "@/screens/SpecialCardsOfffersPage/components/Navigation/Navigation";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";
import React from "react";
import OffersBanks from './components/OffersBanks/OffersBanks';
import {CardInterface} from "@/core/services/Cards";

type questItem = {
    title: string
    text: string
}

interface SpecialCardsOffersPageProps {
    cards: CardInterface[];
    staticData: {
        questData: questItem[]
    }
}

export default function SpecialCardsOffersPage(props: SpecialCardsOffersPageProps) {
    const {
        cards,
        staticData,
    } = props;

    return <Wrapper>
        <Navigation/>
        <OffersBanks cards={cards}/>
        <FrequentQuestions title={'Частые вопросы'} items={staticData.questData}/>
    </Wrapper>
}