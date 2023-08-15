import React from 'react';
import PageWrapper from "@/containers/PageWrapper";
import IntroCalculate from "@/screens/CalculatorCredits/components/IntroCalculate/IntroCalculate";
import OffersBanks from "@/components/Offers/OffersBanks/OffersBanks";
import Feedback from "@/components/FeedBacks/Feedback/Feedback";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";

type ItemT = {
    title: string
    text: string
}
type Props = {
    data: {
        offers: dep[],
        questData: ItemT[]
    }
}
type dep = {
    name: string
    sub: string
    stavka: string
    time: string
    money: string
    img: string
    charcs: string[]
    btn?: string | undefined
    count?: string | undefined
}

const CalculatorCredits = ({data}: Props) => {
    return (
        <PageWrapper>
            <IntroCalculate/>
            <OffersBanks deposits={data.offers} title={'223'} sub={' предложения'} options={['По популярности']}/>
            <Feedback title={'Отзывы'} sub={'о кредитах'}/>
            <FrequentQuestions title={'Важная информация'} items={data.questData}/>
        </PageWrapper>
    );
};

export default CalculatorCredits;