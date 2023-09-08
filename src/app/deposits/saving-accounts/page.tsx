import React from 'react';
import SavingAccountsPage from "@/screens/SavingAccountsPage/SavingAccountsPage";
import {Metadata} from "next";
import data from "@/core/data";
import {DepositCardInterface, DepositsResponseInterface, GET_DEPOSITS} from "@/core/api/Deposits";

export const metadata: Metadata = {
    title: 'Накопительные счета'
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

export default async function SavingAccounts() {
    const {
        deposits,
    } = await getData();

    return <SavingAccountsPage deposits={deposits} staticData={data.SavingAccounts}/>;
};