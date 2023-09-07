"use client"

import React, {useEffect, useState} from 'react';
import {Metadata} from "next";
import DepositsPage from "@/screens/DepositsPage/DepositsPage";
import data from "@/core/data";
import {DepositsResponseInterface, GET_DEPOSITS} from "../../core/api/Deposits";

export const metadata: Metadata = {
    title: 'Вклады',
}


const Deposits = (props) => {
    const [deposits, setDeposits] = useState([]);

    const getDeposits = async () => {
        const deposits: DepositsResponseInterface = (await GET_DEPOSITS());
        setDeposits(deposits.cards)
    }

    useEffect(() => {
        getDeposits();
    }, [])

    return (
        <DepositsPage deposits={deposits} staticData={data.DepositsPage}/>
    )
}

export default Deposits;