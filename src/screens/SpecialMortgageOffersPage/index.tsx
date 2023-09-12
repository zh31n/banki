"use client";

import Wrapper from "@/containers/Wrapper";
import Navigation from "@/screens/SpecialCardsOfffersPage/components/Navigation/Navigation";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";
import React, {useEffect} from "react";
import MortgageSpecialList from "@/components/mortgages/MortgageSpecialList";
import {MortgageInterface} from "@/core/services/Mortgages";
import {useDispatch, useSelector} from "react-redux";
import {MortgagesListSelector} from "@/core/store/mortgages/selectors";
import {mortgagesGetRequestedAction} from "@/core/store/mortgages/actions";

type questItem = {
    title: string
    text: string
}
interface SpecialMortgageOffersPageProps {
    staticData: {
        questData: questItem[]
    }

}
export default function SpecialMortgageOffersPage(props: SpecialMortgageOffersPageProps) {
    const {
        staticData,
    } = props;
    const mortgages: MortgageInterface[] = useSelector(MortgagesListSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(mortgagesGetRequestedAction());
    }, [])

    return (
        <Wrapper>
            <Navigation/>
            <MortgageSpecialList mortgages={mortgages} />
            <FrequentQuestions title={'Частые вопросы'} items={staticData.questData}/>
        </Wrapper>
    )
}