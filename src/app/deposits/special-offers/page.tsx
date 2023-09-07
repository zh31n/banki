"use client"

import {Metadata} from "next";
import SpecialOffersPage from "@/screens/SpecialOffersPage/SpecialOffersPage";
import data from "@/core/data";
import {DepositsResponseInterface, GET_DEPOSITS} from "../../../core/api/Deposits";
import {useEffect, useState} from "react";

export const metadata: Metadata = {
    title: 'Специальные предложения',
}

const SpecialOffers = (props) => {
    const [deposits, setDeposits] = useState([]);

    const getDeposits = async () => {
        const deposits: DepositsResponseInterface = (await GET_DEPOSITS());
        setDeposits(deposits.cards)
    }

    useEffect(() => {
        getDeposits();
    }, [])

    return (
        <SpecialOffersPage deposits={deposits} staticData={data.SpecialOffer}/>
    )
}

export default SpecialOffers;