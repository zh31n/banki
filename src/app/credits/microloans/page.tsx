import React from 'react';
import MicroLoans from "@/screens/MicroLoans/MicroLoans";
import {Metadata} from "next";
import data from "@/core/data";

export const metadata: Metadata = {
    title: 'Микрозаймы'
}

const Page = () => <MicroLoans data={data.MicroLoans}/>;

export default Page;