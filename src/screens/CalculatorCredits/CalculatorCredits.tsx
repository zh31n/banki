"use client";
import React, {useEffect} from 'react';
import PageWrapper from "@/containers/PageWrapper";
import IntroCalculate from "@/screens/CalculatorCredits/components/IntroCalculate/IntroCalculate";
import Feedback from "@/components/FeedBacks/Feedback/Feedback";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";
import CreditCalculatorBankList from "@/components/credits/CreditCalculatorBankList";
import {CreditInterface} from "@/core/services/Credits";
import {useDispatch, useSelector} from "react-redux";
import {creditsGetRequestedAction} from "@/core/store/credits/actions";
import {CreditsSelector} from "@/core/store/credits/selectors";

type ItemT = {
    title: string
    text: string
}
interface CalculatorCreditsProps {
    staticData: {
        questData: ItemT[]
    }
}

const CalculatorCredits = (props: CalculatorCreditsProps) => {
    const {
        staticData,
    } = props;
    const credits: CreditInterface[] = useSelector(CreditsSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(creditsGetRequestedAction());
    }, [])

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