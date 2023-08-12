import React from 'react';
import RefinancingCredits from "@/screens/RefinancingCredits/RefinancingCredits";
import {Metadata} from "next";
import data from "@/core/data";

export const metadata:Metadata = {
    title:'Рефинансирование кредитов'
}

const Page = () => {
    return <RefinancingCredits data={data.RefinancingCredits}/>;
};

export default Page;