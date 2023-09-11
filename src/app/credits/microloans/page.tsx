import React from 'react';
import MicroloansPage from "@/screens/MicroLoans";
import {Metadata} from "next";
import data from "@/core/data";
import {GET_NEWS, NewsInterface, NewsResponseInterface} from "@/core/services/News";
import {CreditInterface, CreditsResponseInterface, GET_CREDITS} from "@/core/services/Credits";

export const metadata: Metadata = {
    title: 'Микрозаймы'
}

interface Data {
    news: NewsInterface[];
    credits: CreditInterface[];
}

const getData = async (): Promise<Data> => {
    const news: NewsResponseInterface = (await GET_NEWS());
    const credits: CreditsResponseInterface = (await GET_CREDITS());

    return {
        credits: credits.cards,
        news: news.cards,
    }
}

export default async function Microloans() {
    const {
        credits,
        news,
    } = await getData();

    return (
        <MicroloansPage credits={credits} news={news} staticData={data.MicroLoans}/>
    )
};