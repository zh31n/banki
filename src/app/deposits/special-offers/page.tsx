import React from "react";
import {Metadata} from "next";
import SpecialOffersPage from "@/screens/SpecialOffersPage/SpecialOffersPage";
import data from "@/core/data";
import {DepositCardInterface, DepositsResponseInterface, GET_DEPOSITS} from "@/core/api/Deposits";

export const metadata: Metadata = {
    title: 'Специальные предложения',
}

interface Data {
    deposits: DepositCardInterface[];
}

const getData = async (): Promise<Data> => {
    const deposits: DepositsResponseInterface = (await GET_DEPOSITS());

    return {
        deposits: deposits.cards,
    }
}


export default async function SpecialOffers() {
    const {
        deposits,
    } = await getData();

    return (
        <SpecialOffersPage deposits={deposits} staticData={data.SpecialOffer}/>
    )
}