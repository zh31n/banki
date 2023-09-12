import React from 'react';
import MicroloansPage from "@/screens/MicroLoans";
import {Metadata} from "next";
import data from "@/core/data";
import {CreditInterface, CreditsResponseInterface, GET_CREDITS} from "@/core/services/Credits";

export const metadata: Metadata = {
    title: 'Микрозаймы'
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

export default async function Microloans() {
    const {
        credits,
    } = await getData();

    return (
        <MicroloansPage credits={credits} staticData={data.MicroLoans}/>
    )
};