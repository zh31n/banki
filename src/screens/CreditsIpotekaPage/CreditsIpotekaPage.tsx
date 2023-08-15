import Wrapper from "@/containers/Wrapper";
import Navigation from "@/screens/CreditsIpotekaPage/components/Navigation/Navigation";
import Bonus from "@/components/Bonus/Bonus";
import Mailing from "@/components/Mailing/Mailing";
import OffersMonth from "@/components/OffersMonth/OffersMonth";
import LatestNews from "@/components/LatestNews/LatestNews";
import Feedback from "@/components/FeedBacks/Feedback/Feedback";
import Communicate from "@/components/Communicate/Communicate";
import Banks from "@/screens/CreditsIpotekaPage/components/Banks/Banks";
import Сompilations from "@/screens/CreditsIpotekaPage/components/Сompilations/Сompilations";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";
import React from "react";
import data from "@/core/data";

export default function CreditsIpotekaPage() {
  const dataMap = data.CreditsIpotekaPage.questData
  return <Wrapper>
    <Navigation/>
    <Bonus/>
    <Banks/>
    <Mailing/>
    <Сompilations/>
    <OffersMonth/>
    <LatestNews/>
    <Communicate/>
    <Feedback title={'Отзывы'} sub={'об ипотеке'}/>
    <FrequentQuestions title={''} items={dataMap}/>
  </Wrapper>
}