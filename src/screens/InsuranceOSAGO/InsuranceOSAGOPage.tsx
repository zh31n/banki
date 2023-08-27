import Wrapper from "@/containers/Wrapper";
import Navigation from "@/screens/InsuranceOSAGO/components/Navigation/Navigation";
import Company from "@/components/Company/Company";
import LastBuy from "@/components/LastBuy/LastBuy";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import React from "react";
import data from "@/core/data";
import Feedback from "@/components/FeedBacks/Feedback/Feedback";
import LatestNews from "@/components/LatestNews/LatestNews";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";
import Question from "@/components/Question/Question";
import OSAGORating from "@/components/OSAGORating/OSAGORating";
import CalculateOSAGO from "@/components/CalculateOSAGO/CalculateOSAGO";

export default function InsuranceOSAGOPage(){

    const dataMap = data.OSAGO.worksData
    const question = data.OSAGO.favouritesQuestion
    const info = data.OSAGO.info

    return <Wrapper>
        <Navigation />
        <Company />
        <LastBuy />
        <HowItWorks title={'Как оформить полис '} sub={'для ипотеки онлайн'} items={dataMap}/>
        <LatestNews />
        <Feedback sub={' об ОСАГО'} title={'Отзывы'} />
        <CalculateOSAGO />
        <OSAGORating title={'Рейтинг страховых компаний по ОСАГО '} sub={'- ТОП 10 лучших в 2023 году'} />
        <FrequentQuestions title={'Популярные вопросы'} items={question} />
        <FrequentQuestions title={'Важная информация'} items={info} />
        <Question />
    </Wrapper>
}