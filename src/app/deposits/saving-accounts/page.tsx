import React from 'react';
import SavingAccountsPage from "@/screens/SavingAccountsPage/SavingAccountsPage";
import {Metadata} from "next";

export const metadata:Metadata = {
    title:'Накопительные счета'
}

const Page = () => {
    return <SavingAccountsPage/>;
};

export default Page;