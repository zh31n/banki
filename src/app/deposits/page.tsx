import React from 'react';
import {Metadata} from "next";
import Deposits from "@/screens/DepositsPage/DepositsPage";
import data from "@/core/data";

export const metadata: Metadata = {
    title: 'Вклады',
}

const Page = () => <Deposits data={data.DepositsPage}/>

export default Page;