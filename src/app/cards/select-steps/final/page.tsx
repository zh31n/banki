import SelectStepsFinal from "@/screens/SelectSteps/SelectStepsFinal/SelectStepsFinal";
import {CardInterface, CardsResponseInterface, GET_CARDS} from "@/core/services/Cards";
import React from "react";

interface Data {
    cards: CardInterface[];
}

const getData = async (): Promise<Data> => {
    const cards: CardsResponseInterface = (await GET_CARDS());

    return {
        cards: cards.cards,
    }
}

export default async function FinalPage(){
    const {
        cards,
    } = await getData();

    return <SelectStepsFinal cards={cards}/>
}