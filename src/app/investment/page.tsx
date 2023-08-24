import React from 'react';
import {Metadata} from "next";
import InvestmentPage from "@/screens/InvestmentPage/InvestmentPage";
import data from "@/core/data";

export const metadata: Metadata = {
    title: 'Инвестиции'
}
const Page = () => <InvestmentPage data={data.InvestPage}/>;

export default Page;