import Wrapper from "@/containers/Wrapper";
import Navigation from "@/screens/SpecialCardsOfffersPage/components/Navigation/Navigation";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";
import React from "react";
import OffersBanks from './components/OffersBanks/OffersBanks'
import {StaticImageData} from "next/image";
import {CardInterface} from "@/core/api/Cards";

type questItem = {
    title: string
    text: string
}
type offerT = {
    img: StaticImageData
}

interface SpecialCardsOffersPageProps {
    cards: CardInterface[];
    staticData: {
        questData: questItem[]
        offers: offerT[]
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