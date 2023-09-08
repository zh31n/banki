import React from 'react';
import {Metadata} from "next";
import DepositsPage from "@/screens/DepositsPage/DepositsPage";
import data from "@/core/data";
import {DepositCardInterface, DepositsResponseInterface, GET_DEPOSITS} from "../../core/api/Deposits";
import {GET_NEWS, NewsInterface, NewsResponseInterface} from "@/core/api/News";

export const metadata: Metadata = {
    title: 'Вклады',
}

interface Data {
    deposits: DepositCardInterface[];
    news: NewsInterface[];
}

const getData = async (): Promise<Data> => {
    const deposits: DepositsResponseInterface = (await GET_DEPOSITS());
    const news: NewsResponseInterface = (await GET_NEWS());

    return {
        deposits: deposits.cards,
        news: news.cards,
    }
}


export default async function Deposits() {
    const {
        deposits,
        news,
    } = await getData();

    return (
        <DepositsPage news={news} deposits={deposits} staticData={data.DepositsPage}/>
    )
}