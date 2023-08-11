import React from 'react';
import RefinancingCredits from "@/screens/RefinancingCredits/RefinancingCredits";
import {Metadata} from "next";

export const metadata:Metadata = {
    title:'Рефинансирование кредитов'
}

const Page = () => {
    return <RefinancingCredits/>;
};

export default Page;