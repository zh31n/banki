import React from 'react';
import PageWrapper from "@/containers/PageWrapper";
import IntroCalculate from "@/screens/CalculatorCredits/components/IntroCalculate/IntroCalculate";
import Feedback from "@/components/FeedBacks/Feedback/Feedback";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";
import CreditCalculatorBankList from "@/components/credits/CreditCalculatorBankList";
import {CreditInterface} from "@/core/api/Credits";

type ItemT = {
    title: string
    text: string
}
interface CalculatorCreditsProps {
    credits: CreditInterface[];
    staticData: {
        questData: ItemT[]
    }
}


const CalculatorCredits = (props: CalculatorCreditsProps) => {
    const {
        credits,
        staticData,
    } = props;

    return (
        <PageWrapper>
            <IntroCalculate/>
            <CreditCalculatorBankList
                credits={credits}
            />
            <Feedback title={'Отзывы'} sub={' о кредитах'}/>
            <FrequentQuestions title={'Важная информация'} items={staticData.questData}/>
        </PageWrapper>
    );
};

export default CalculatorCredits;