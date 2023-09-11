import CreditMapPage from "@/screens/CreditMapPage/CreditMapPage";
import {Metadata} from "next";
import {GET_NEWS, NewsInterface, NewsResponseInterface} from "@/core/services/News";
import {CardInterface, CardsResponseInterface, GET_CARDS} from "@/core/services/Cards";
import React from "react";

export const metadata: Metadata = {
    title: 'Кредитные карты'
}

interface Data {
    cards: CardInterface[];
    news: NewsInterface[];
}

const getData = async (): Promise<Data> => {
    const cards: CardsResponseInterface = (await GET_CARDS());
    const news: NewsResponseInterface = (await GET_NEWS());

    return {
        cards: cards.cards,
        news: news.cards,
    }
}

export default async function CreditMap() {
    const {
        cards,
        news,
    } = await getData();

    return <CreditMapPage news={news} cards={cards}/>;
}
