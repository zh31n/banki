import {Metadata} from "next";
import DebitCardsPage from "@/screens/DebetCardsPage/DebitCardsPage";
import {CardInterface, CardsResponseInterface, GET_CARDS} from "@/core/services/Cards";
import React from "react";
import {GET_NEWS, NewsInterface, NewsResponseInterface} from "@/core/services/News";

export const metadata: Metadata = {
    title: 'Дебетовые карты'
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

export default async function DebitCards() {
    const {
        cards,
        news,
    } = await getData();

    return <DebitCardsPage cards={cards} news={news}/>
}