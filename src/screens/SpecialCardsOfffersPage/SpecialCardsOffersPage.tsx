import Wrapper from "@/containers/Wrapper";
import Navigation from "@/screens/SpecialCardsOfffersPage/components/Navigation/Navigation";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";
import React from "react";
import data from "@/core/data";
import OffersBanks from './components/OffersBanks/OffersBanks'

export default function SpecialCardsOffersPage() {
  const dataMap = data.SpecialOffersCards.questData
  return <Wrapper>
    <Navigation/>
    <OffersBanks/>
    <FrequentQuestions title={'Важная информация'} items={dataMap}/>
  </Wrapper>
}