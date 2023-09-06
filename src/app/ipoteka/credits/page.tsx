import CreditsIpotekaPage from "@/screens/CreditsIpotekaPage/CreditsIpotekaPage";
import {Metadata} from "next";
import MortgagePage from "@/screens/MortgagePage/MortgagePage";
import data from "@/core/data";

export const metadata: Metadata = {
  title: 'Ипотечный кредит',
}

export default function CreditsIpoteka() {
  return <MortgagePage data={data.MortgagePage}/>
}