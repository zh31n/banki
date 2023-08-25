import React from 'react';
import {Metadata} from "next";
import BanksPage from "@/screens/BanksPage/BanksPage";
import data from "@/core/data";

export const metadata: Metadata = {
    title: 'Банки России'
}
const Page = () => <BanksPage data={data.BanksPage}/>

export default Page;