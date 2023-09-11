import {Metadata} from "next";
import InstallmentPage from "@/screens/InstallmentPage/InstallmentPage";
import {CardInterface, CardsResponseInterface, GET_CARDS} from "@/core/services/Cards";
import React from "react";

export const metadata: Metadata = {
    title: 'Кредитные карты с рассрочкой'
}

interface Data {
    cards: CardInterface[];
}

const getData = async (): Promise<Data> => {
    const cards: CardsResponseInterface = (await GET_CARDS());

    return {
        cards: cards.cards,
    }
}

export default async function Installment() {
    const {
        cards,
    } = await getData();

    return <InstallmentPage cards={cards}/>
}