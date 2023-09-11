import React from 'react';
import CalculatorCredits from "@/screens/CalculatorCredits/CalculatorCredits";
import {Metadata} from "next";
import data from "@/core/data";
import {CreditInterface, CreditsResponseInterface, GET_CREDITS} from "@/core/services/Credits";

export const metadata:Metadata = {
    title:'Кредитный калькулятор'
}

interface Data {
    credits: CreditInterface[];
}

const getData = async (): Promise<Data> => {
    const credits: CreditsResponseInterface = (await GET_CREDITS());

    return {
        credits: credits.cards,
    }
}

export default async function CreditsCalculator() {
    const {
        credits,
    } = await getData();

    return (
        <CalculatorCredits credits={credits} staticData={data.CalculateCredit}/>
    )
};