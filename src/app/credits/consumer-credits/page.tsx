import React from 'react';
import ConsumerCreditsPage from "@/screens/ConsumerCreditsPage/ConsumerCreditsPage";
import {Metadata} from "next";

export const metadata:Metadata = {
    title:'Потребительские кредиты'
}

const Page = () => {
    return <ConsumerCreditsPage/>;
};

export default Page;