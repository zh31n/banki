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
import Сompilations from "@/screens/DebetCardsPage/components/Сompilations/Сompilations";

export default function DebitCardsPage() {
  const dataMap = data.DebitCardsPage.questData
  return <Wrapper>
    <Navigation/>
    <Bonus/>
    <Offers/>
    <OffersMonth/>
    <Mailing/>
    <Сompilations/>
    <LatestNews/>
    <Communicate/>
    <Feedback title={'Отзывы '} sub={'о дебетовых картах'}/>
    <FrequentQuestions title={'Важная информация'} items={dataMap}/>
  </Wrapper>
}