import React from 'react';
import {Metadata} from "next";
import CreditRating from "@/screens/CreditRating/CreditRating";

export const metadata: Metadata = {
    title: 'Кредитный рейтинг'
}

const Page = () => <CreditRating/>;

export default Page;