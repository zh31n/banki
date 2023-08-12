import React from 'react';
import SavingAccountsPage from "@/screens/SavingAccountsPage/SavingAccountsPage";
import {Metadata} from "next";
import data from "@/core/data";

export const metadata: Metadata = {
    title: 'Накопительные счета'
}

const Page = () => {
    return <SavingAccountsPage data={data.SavingAccounts}/>;
};

export default Page;