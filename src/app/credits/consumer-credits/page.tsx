import React from 'react';
import ConsumerCreditsPage from "@/screens/ConsumerCreditsPage/ConsumerCreditsPage";
import {Metadata} from "next";
import data from "@/core/data";

export const metadata: Metadata = {
    title: 'Потребительские кредиты'
}

const Page = () => {
    return <ConsumerCreditsPage data={data.ConsumerCredits}/>;
};

export default Page;