import {Metadata} from "next";
import MortgagePage from "@/screens/MortgagePage";
import data from "@/core/data";
import React from "react";

export const metadata: Metadata = {
  title: 'Ипотечный кредит',
}

export default function MortgageCredits() {
  return <MortgagePage staticData={data.MortgagePage}/>
}