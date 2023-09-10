import SpecialCardsOffersPage from "@/screens/SpecialCardsOfffersPage/SpecialCardsOffersPage";
import {Metadata} from "next";
import data from "@/core/data";
import {CardInterface, CardsResponseInterface, GET_CARDS} from "@/core/api/Cards";
import React from "react";

export const metadata: Metadata = {
  title: 'Специальные предложения'
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

export default async function SpecialOffers() {
  const {
    cards,
  } = await getData();

  return <SpecialCardsOffersPage cards={cards} staticData={data.SpecialOffersCards}/>
}