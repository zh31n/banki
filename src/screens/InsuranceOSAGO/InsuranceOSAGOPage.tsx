import Wrapper from "@/containers/Wrapper";
import Navigation from "@/screens/InsuranceOSAGO/components/Navigation/Navigation";
import Company from "@/components/Company/Company";
import LastBuy from "@/components/LastBuy/LastBuy";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import React from "react";
import data from "@/core/data";
import Feedback from "@/components/FeedBacks/Feedback/Feedback";

export default function InsuranceOSAGOPage(){

    const dataMap = data.OSAGO.worksData

    return <Wrapper>
        <Navigation />
        <Company />
        <LastBuy />
        <HowItWorks title={'Как оформить полис '} sub={'для ипотеки онлайн'} items={dataMap}/>
        <Feedback sub={' об ОСАГО'} title={'Отзывы'} />
    </Wrapper>
}