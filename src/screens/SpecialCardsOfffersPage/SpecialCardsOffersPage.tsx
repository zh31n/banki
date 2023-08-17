import Wrapper from "@/containers/Wrapper";
import Navigation from "@/screens/SpecialCardsOfffersPage/components/Navigation/Navigation";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";
import React from "react";
import OffersBanks from './components/OffersBanks/OffersBanks'
import {StaticImageData} from "next/image";

type questItem = {
    title: string
    text: string
}
type offerT = {
    img: StaticImageData
}
type Props = {
    data: {
        questData: questItem[]
        offers: offerT[]
    }

}
export default function SpecialCardsOffersPage({data}: Props) {
    return <Wrapper>
        <Navigation/>
        <OffersBanks dataMap={data.offers}/>
        <FrequentQuestions title={'Важная информация'} items={data.questData}/>
    </Wrapper>
}